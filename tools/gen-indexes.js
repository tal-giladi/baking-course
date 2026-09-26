// Builds recipes/README.md, experiments/README.md, the symptom index in
// troubleshooting/README.md and references/glossary.md from the content files.
// Usage: node tools/gen-indexes.js
const fs = require('fs');
const read = p => fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
const idx = read('curriculum/file-index.md');
const outline = read('curriculum/course-outline.md');
const rows = re => [...idx.matchAll(re)].map(m => ({ id: m[1], path: m[2] }));
const catalogue = (prefix) => {
  const map = {};
  for (const m of outline.matchAll(new RegExp('^\| (' + prefix + '-\d\d) \| (.+?) \| (M\d\d) \|', 'gm'))) map[m[1]] = { title: m[2], module: m[3] };
  return map;
};
const modTitles = {};
for (const m of outline.matchAll(/^### (M\d\d) — (.+)$/gm)) modTitles[m[1]] = m[2];
const tagOf = t => (t.match(/<span class="tag (\w+)">([^<]+)<\/span>/) || [])[2] || '';
const filter = ph => `<div class="bk-filter" data-placeholder="${ph}"></div>\n`;

// Recipes
{
  const cat = catalogue('R1');
  let out = '# Recipe library\n\nEvery recipe uses the same standardized format: objective, expected result, formula in grams and baker\'s percentages, equipment, mise en place, procedure with measurable endpoints, critical control points, common failures, scientific explanation, variables you can change and experiment suggestions ([template](templates/recipe-template.md)).\n\nEach recipe is labelled with its origin: <span class="tag established">Established technique</span> <span class="tag source">Source-derived</span> <span class="tag educational">Educational formulation</span> <span class="tag experimental">Experimental formulation</span>. Mark a recipe complete once you have made it to specification.\n\n' + filter('Filter recipes (e.g. brioche, M06, laminated)...') + '\n| ID | Recipe | Classification | Module |\n|---|---|---|---|\n';
  for (const r of rows(/^\| (R1-\d\d) \| (\S+) \|/gm)) {
    const c = cat[r.id] || {}; const t = read(r.path);
    out += `| ${r.id} | [${c.title}](${r.path})${t ? '' : ' *(missing)*'} | ${tagOf(t)} | [${c.module} ${modTitles[c.module] || ''}](stage-1/module-${(c.module || 'M00').slice(1)}/README.md) |\n`;
  }
  fs.writeFileSync('recipes/README.md', out);
}
// Experiments
{
  const cat = catalogue('X1');
  let out = '# Experiment library\n\nControlled experiments in small batches: one independent variable, a hypothesis written before you start, an observation sheet, and the expected result hidden until you have run it ([template](templates/experiment-template.md)). Mark an experiment complete once you have run it and written your conclusion.\n\n' + filter('Filter experiments (e.g. hydration, sugar, M10)...') + '\n| ID | Experiment | Module |\n|---|---|---|\n';
  for (const r of rows(/^\| (X1-\d\d) \| (\S+) \|/gm)) {
    const c = cat[r.id] || {};
    out += `| ${r.id} | [${c.title}](${r.path})${read(r.path) ? '' : ' *(missing)*'} | [${c.module} ${modTitles[c.module] || ''}](stage-1/module-${(c.module || 'M00').slice(1)}/README.md) |\n`;
  }
  fs.writeFileSync('experiments/README.md', out);
}
// Troubleshooting symptom index
{
  const re = /[\u2000-\u206F\u2E00-\u2E7F\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
  const slug = s => s.trim().toLowerCase().replace(/<[^>]+>/g, '').replace(re, '').replace(/\s/g, '-').replace(/-+/g, '-').replace(/^(\d)/, '_$1');
  let table = '| Symptom | Category |\n|---|---|\n';
  let n = 0;
  for (const m of idx.matchAll(/^\| ([^|]+) \| (troubleshooting\/[\w-]+\.md) \| (M\d\d) \|/gm)) {
    const [, cat, path] = m; const t = read(path); const seen = {};
    let inFence = false;
    for (const line of t.split(/\r?\n/)) {
      if (/^\s*```/.test(line)) inFence = !inFence;
      const h = !inFence && line.match(/^### (.+)$/); if (!h) continue;
      let text = h[1].replace(/\s*:id=\S+/, '');
      let s = (h[1].match(/:id=(\S+)/) || [])[1] || slug(text.replace(/[*_`]/g, ''));
      if (seen[s] !== undefined) { seen[s]++; s += '-' + seen[s]; } else seen[s] = 0;
      table += `| [${text}](${path}?id=${s}) | [${cat}](${path}) |\n`; n++;
    }
  }
  const tpath = 'troubleshooting/README.md';
  const cur = read(tpath);
  const start = '<!-- symptom-index:start -->', end = '<!-- symptom-index:end -->';
  if (cur.includes(start)) {
    fs.writeFileSync(tpath, cur.slice(0, cur.indexOf(start) + start.length) + '\n' + filter('Type a symptom (e.g. dense, soggy, cracked, split)...') + '\n' + table + cur.slice(cur.indexOf(end)));
  }
  console.log('troubleshooting entries:', n);
}
// Glossary
{
  const terms = [];
  for (let i = 0; i <= 19; i++) {
    const n = String(i).padStart(2, '0'); const p = `stage-1/module-${n}/README.md`; const t = read(p);
    const sec = t.split(/^## Key terms.*$/m)[1]; if (!sec) continue;
    for (const line of sec.split(/\r?\n/)) {
      if (/^## /.test(line)) break;
      const m = line.match(/^\| (.+?) \| (.+) \|\s*$/);
      if (!m || /^-+$/.test(m[1].replace(/[\s:|-]/g, '') ? '' : '-') || m[1] === 'Term' || /^-/.test(m[1])) continue;
      terms.push({ term: m[1].trim(), def: m[2].trim(), mod: 'M' + n, path: p });
    }
  }
  const key = s => s.replace(/[*_`]/g, '').toLowerCase();
  terms.sort((a, b) => key(a.term).localeCompare(key(b.term)));
  const merged = [];
  for (const t of terms) {
    const last = merged[merged.length - 1];
    if (last && key(last.term) === key(t.term)) { last.refs.push(`[${t.mod}](${t.path})`); continue; }
    merged.push({ ...t, refs: [`[${t.mod}](${t.path})`] });
  }
  let out = '# Glossary\n\nEvery key term defined in the Stage 1 modules, alphabetically, with the module where it is taught. Where a term is defined in more than one module, the first definition is shown and all modules are linked.\n\n' + filter('Search the glossary...') + '\n| Term | Definition | Taught in |\n|---|---|---|\n';
  for (const t of merged) out += `| **${t.term.replace(/\*\*/g, '')}** | ${t.def} | ${t.refs.join(' ')} |\n`;
  fs.writeFileSync('references/glossary.md', out);
  console.log('glossary terms:', merged.length);
}
