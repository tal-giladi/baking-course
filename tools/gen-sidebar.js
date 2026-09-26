// Regenerates _sidebar.md from curriculum/course-outline.md.
const fs = require('fs');
const md = fs.readFileSync('curriculum/course-outline.md', 'utf8');
const out = [
  '- [Home](/)',
  '- [My progress](progress.md)',
  '- **Start here**',
  '  - [Research report](research/research-report.md)',
  '  - [Course outline](curriculum/course-outline.md)',
  '  - [Curriculum map](curriculum/curriculum-map.md)',
  '  - [Science track](stage-1/science/README.md)',
  '  - [Equipment](equipment/README.md)',
  '  - [Assessment system](stage-1/assessments/README.md)',
  '',
];
let mod = null;
for (const line of md.split(/\r?\n/)) {
  const h = line.match(/^### (M\d\d) — (.+)$/);
  if (h) {
    if (mod) out.push(`  - [${mod.id} assessment](stage-1/assessments/module-${mod.n}-quiz.md)`);
    mod = { id: h[1], n: h[1].slice(1) };
    out.push(`- **${h[1]} · ${h[2]}**`);
    out.push(`  - [Module overview](stage-1/module-${mod.n}/README.md)`);
    continue;
  }
  const l = line.match(/^\| (\d\d)\.(\d) \| ([^|]+) \|/);
  if (l && mod) {
    out.push(`  - [${l[1]}.${l[2]} ${l[3].trim()}](stage-1/module-${l[1]}/lesson-0${l[2]}.md)`);
  }
  if (/^## Recipe catalogue/.test(line)) break;
}
out.push(`  - [${mod.id} assessment](stage-1/assessments/module-${mod.n}-quiz.md)`);
out.push('', '- **Stage 1 completion**',
  '  - [Capstone project](stage-1/capstone/README.md)',
  '  - [Capstone report template](stage-1/capstone/report-template.md)',
  '  - [Final exam](stage-1/assessments/final-exam.md)',
  '', '- **Libraries**',
  '  - [Recipes](recipes/README.md)',
  '  - [Experiments](experiments/README.md)',
  '  - [Troubleshooting database](troubleshooting/README.md)',
  '  - [Glossary](references/glossary.md)',
  '  - [Bibliography](references/bibliography.md)',
  '  - [Templates](templates/README.md)',
  '', '- **Beyond Stage 1**',
  '  - [Stage 2/3 extension architecture](extension/stage-2-3-architecture.md)', '');
fs.writeFileSync('_sidebar.md', out.join('\n'));
console.log(out.length + ' lines');
