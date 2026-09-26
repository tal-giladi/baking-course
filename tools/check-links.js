// Checks every internal markdown link: target file exists, and ?id= anchors match a
// heading slug as docsify generates it. Usage: node tools/check-links.js
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const skip = new Set(['.git', 'node_modules', 'tools', 'brief']);
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    if (skip.has(f)) continue;
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.md')) files.push(p);
  }
})(root);
const re = /[\u2000-\u206F\u2E00-\u2E7F\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
function slug(s) {
  return s.trim().toLowerCase().replace(/<[^>]+>/g, '').replace(re, '').replace(/\s/g, '-').replace(/-+/g, '-').replace(/^(\d)/, '_$1');
}
const slugCache = {};
function slugs(file) {
  if (slugCache[file]) return slugCache[file];
  const seen = {}, out = new Set();
  let inFence = false;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const m = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
    if (!m) continue;
    const text = m[1].replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '');
    const idm = text.match(/:id=(S+)/);
    let s = idm ? idm[1] : slug(text);
    if (seen[s] !== undefined) { seen[s]++; s = s + '-' + seen[s]; } else seen[s] = 0;
    out.add(s);
  }
  return (slugCache[file] = out);
}
let bad = 0, total = 0;
const missing = {};
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8').replace(/```[\s\S]*?```/g, '');
  const linkRe = /\]\(([^)\s]+)\)|href="([^"#][^"]*)"/g;
  let m;
  while ((m = linkRe.exec(txt))) {
    let href = m[1] || m[2];
    if (/^(https?:|mailto:|#|\/$)/.test(href) || href === '/') continue;
    total++;
    let [p, q] = href.split('?');
    p = p.replace(/^\//, '');
    if (p.startsWith('../') || p.startsWith('./')) { console.log(`RELATIVE ${path.relative(root, f)} -> ${href}`); bad++; continue; }
    const target = path.join(root, p);
    if (!fs.existsSync(target)) {
      (missing[p] = missing[p] || []).push(path.relative(root, f));
      bad++; continue;
    }
    const id = q && (q.match(/(?:^|&)id=([^&]+)/) || [])[1];
    if (id && p.endsWith('.md') && !slugs(target).has(decodeURIComponent(id))) {
      console.log(`ANCHOR ${path.relative(root, f)} -> ${href}`); bad++;
    }
  }
}
for (const [p, from] of Object.entries(missing)) console.log(`MISSING ${p}  (from ${[...new Set(from)].slice(0, 3).join(', ')}${from.length > 3 ? ', …' : ''})`);
console.log(`${files.length} files, ${total} links, ${bad} problems`);
process.exitCode = bad ? 1 : 0;
