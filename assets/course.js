/* Course runtime: progress tracking, per-page notes, prerequisite status,
 * table filters and the progress dashboard. Everything lives in this
 * browser's localStorage; the progress page can export/import a backup. */
(function () {
  var DONE_KEY = 'bk.done.v1';
  var NOTES_KEY = 'bk.notes.v1';

  // Pages that can be marked complete.
  var TRACKED = /^\/(stage-\d+\/(module-\d+\/lesson-\d+|assessments\/(module-\d+-quiz|final-exam)|capstone)|recipes\/R[^/]+|experiments\/X[^/]+)$/;

  function load(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (e) { return {}; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage blocked */ }
  }
  function norm(href) {
    if (!href) return null;
    var h = href.replace(/^.*#/, '').replace(/\?.*$/, '').replace(/\.md$/, '');
    if (!h || h.charAt(0) !== '/') return null;
    return h.replace(/\/README$/i, '').replace(/\/$/, '') || '/';
  }
  function isDone(path) { return !!load(DONE_KEY)[path]; }
  function setDone(path, on) {
    var d = load(DONE_KEY);
    if (on) d[path] = new Date().toISOString().slice(0, 10); else delete d[path];
    save(DONE_KEY, d);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function decorateSidebar() {
    var links = document.querySelectorAll('.sidebar-nav a');
    links.forEach(function (a) {
      var p = norm(a.getAttribute('href'));
      var old = a.querySelector('.bk-tick');
      if (old) old.remove();
      if (p && TRACKED.test(p) && isDone(p)) {
        var s = document.createElement('span');
        s.className = 'bk-tick';
        s.textContent = '✓ ';
        a.insertBefore(s, a.firstChild);
      }
    });
  }

  function completionBar(path) {
    if (!TRACKED.test(path)) return;
    var section = document.querySelector('.markdown-section');
    if (!section) return;
    var bar = document.createElement('div');
    bar.className = 'bk-complete';
    function paint() {
      var d = load(DONE_KEY)[path];
      bar.classList.toggle('on', !!d);
      bar.innerHTML = d
        ? '<button type="button">✓ Completed ' + esc(d) + ' — click to undo</button>'
        : '<button type="button">☐ Mark this page complete</button>';
    }
    bar.addEventListener('click', function () {
      setDone(path, !isDone(path));
      paint();
      decorateSidebar();
    });
    paint();
    section.appendChild(bar);
  }

  function notesBox(path) {
    if (path === '/progress') return;
    var section = document.querySelector('.markdown-section');
    if (!section) return;
    var wrap = document.createElement('div');
    wrap.className = 'bk-notes';
    var notes = load(NOTES_KEY);
    wrap.innerHTML = '<label>My notes for this page <span class="bk-saved"></span></label>' +
      '<textarea rows="5" placeholder="Observations, results, questions, what you would change next time..."></textarea>';
    var ta = wrap.querySelector('textarea');
    var saved = wrap.querySelector('.bk-saved');
    ta.value = (notes[path] && notes[path].text) || '';
    var t;
    ta.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var n = load(NOTES_KEY);
        if (ta.value.trim()) n[path] = { text: ta.value, title: document.title, updated: new Date().toISOString().slice(0, 16).replace('T', ' ') };
        else delete n[path];
        save(NOTES_KEY, n);
        saved.textContent = 'saved';
        setTimeout(function () { saved.textContent = ''; }, 1200);
      }, 400);
    });
    section.appendChild(wrap);
  }

  function prereqStatus() {
    document.querySelectorAll('.prereq a').forEach(function (a) {
      var p = norm(a.getAttribute('href'));
      if (!p || !TRACKED.test(p)) return;
      var s = document.createElement('span');
      s.className = 'bk-pre ' + (isDone(p) ? 'ok' : 'todo');
      s.title = isDone(p) ? 'completed' : 'not completed yet';
      s.textContent = isDone(p) ? ' ✓' : ' ○';
      a.after(s);
    });
  }

  function tableFilters() {
    document.querySelectorAll('.bk-filter').forEach(function (holder) {
      var input = document.createElement('input');
      input.type = 'search';
      input.placeholder = holder.getAttribute('data-placeholder') || 'Filter...';
      holder.appendChild(input);
      input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        document.querySelectorAll('.markdown-section table tbody tr').forEach(function (tr) {
          tr.style.display = !q || tr.textContent.toLowerCase().indexOf(q) >= 0 ? '' : 'none';
        });
      });
    });
  }

  // ---- progress dashboard -------------------------------------------------
  function parseSidebar(md) {
    var groups = [], cur = null;
    md.split(/\r?\n/).forEach(function (line) {
      var g = line.match(/^- \*\*(.+?)\*\*/);
      if (g) { cur = { title: g[1], items: [] }; groups.push(cur); return; }
      var m = line.match(/^\s+- \[(.+?)\]\((.+?)\)/);
      if (m && cur) {
        var p = norm('#' + (m[2].charAt(0) === '/' ? m[2] : '/' + m[2]));
        if (p && TRACKED.test(p)) cur.items.push({ title: m[1], path: p });
      }
    });
    return groups.filter(function (x) { return x.items.length; });
  }
  function parseIndex(md, title) {
    var items = [], re = /\[([^\]]+)\]\(([^)]+)\)/g, m;
    while ((m = re.exec(md))) {
      var p = norm('#' + (m[2].charAt(0) === '/' ? m[2] : '/' + m[2]));
      if (p && TRACKED.test(p) && !items.some(function (i) { return i.path === p; })) items.push({ title: m[1], path: p });
    }
    return { title: title, items: items };
  }
  function renderDashboard(el) {
    Promise.all([
      fetch('_sidebar.md').then(function (r) { return r.text(); }),
      fetch('recipes/README.md').then(function (r) { return r.ok ? r.text() : ''; }).catch(function () { return ''; }),
      fetch('experiments/README.md').then(function (r) { return r.ok ? r.text() : ''; }).catch(function () { return ''; })
    ]).then(function (res) {
      var groups = parseSidebar(res[0]);
      var extra = [parseIndex(res[1], 'Recipe library'), parseIndex(res[2], 'Experiment library')];
      var done = load(DONE_KEY), total = 0, n = 0, next = null, html = '';
      groups.forEach(function (g) {
        var c = g.items.filter(function (i) { return done[i.path]; }).length;
        total += g.items.length; n += c;
        g.items.forEach(function (i) { if (!next && !done[i.path]) next = i; });
        html += '<details' + (c && c < g.items.length ? ' open' : '') + '><summary><b>' + esc(g.title) + '</b> — ' + c + '/' + g.items.length + '</summary><ul class="bk-list">' +
          g.items.map(function (i) {
            return '<li>' + (done[i.path] ? '✅' : '⬜') + ' <a href="#' + i.path + '">' + esc(i.title) + '</a>' + (done[i.path] ? ' <small>' + esc(done[i.path]) + '</small>' : '') + '</li>';
          }).join('') + '</ul></details>';
      });
      var extraHtml = extra.filter(function (g) { return g.items.length; }).map(function (g) {
        var c = g.items.filter(function (i) { return done[i.path]; }).length;
        return '<details><summary><b>' + esc(g.title) + '</b> — ' + c + '/' + g.items.length + ' made</summary><ul class="bk-list">' +
          g.items.map(function (i) { return '<li>' + (done[i.path] ? '✅' : '⬜') + ' <a href="#' + i.path + '">' + esc(i.title) + '</a></li>'; }).join('') + '</ul></details>';
      }).join('');
      var pct = total ? Math.round(100 * n / total) : 0;
      var notes = load(NOTES_KEY), noteKeys = Object.keys(notes).sort();
      el.innerHTML =
        '<div class="bk-summary"><div class="bk-bar"><span style="width:' + pct + '%"></span></div>' +
        '<p><b>' + n + ' / ' + total + '</b> Stage 1 items complete (' + pct + '%).' +
        (next ? ' Next up: <a href="#' + next.path + '">' + esc(next.title) + '</a>' : ' Stage 1 complete.') + '</p></div>' +
        html + '<h3>Practical libraries</h3>' + extraHtml +
        '<h3>My notes (' + noteKeys.length + ' pages)</h3>' +
        (noteKeys.length ? '<ul class="bk-list">' + noteKeys.map(function (k) {
          return '<li><a href="#' + k + '">' + esc(k) + '</a> <small>' + esc(notes[k].updated || '') + '</small><pre class="bk-note">' + esc(notes[k].text) + '</pre></li>';
        }).join('') + '</ul>' : '<p>No notes yet. Every page has a notes box at the bottom.</p>') +
        '<h3>Backup</h3><p>Progress and notes live only in this browser. Export them to keep a copy or move to another device.</p>' +
        '<p><button type="button" id="bk-export">Export JSON</button> <label class="bk-import">Import JSON <input type="file" id="bk-import" accept=".json,application/json"></label></p>';
      document.getElementById('bk-export').onclick = function () {
        var blob = new Blob([JSON.stringify({ done: load(DONE_KEY), notes: load(NOTES_KEY), exported: new Date().toISOString() }, null, 2)], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'baking-course-progress.json';
        a.click();
      };
      document.getElementById('bk-import').onchange = function (e) {
        var f = e.target.files[0]; if (!f) return;
        f.text().then(function (t) {
          try {
            var j = JSON.parse(t);
            if (j.done) save(DONE_KEY, Object.assign(load(DONE_KEY), j.done));
            if (j.notes) save(NOTES_KEY, Object.assign(load(NOTES_KEY), j.notes));
            renderDashboard(el); decorateSidebar();
          } catch (err) { alert('Not a valid backup file.'); }
        });
      };
    });
  }

  function plugin(hook, vm) {
    hook.doneEach(function () {
      var path = norm('#' + vm.route.path) || '/';
      completionBar(path);
      notesBox(path);
      prereqStatus();
      tableFilters();
      decorateSidebar();
      var dash = document.getElementById('bk-progress');
      if (dash) renderDashboard(dash);
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [plugin].concat(window.$docsify.plugins || []);
})();
