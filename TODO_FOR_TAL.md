# Status — Professional Baking course

**Live:** https://tal-giladi.github.io/baking-course/
**Repo:** https://github.com/tal-giladi/baking-course

## What's built
- Stage 1 complete: 20 modules, 66 lessons, 41 recipes, 44 experiments, 14 science units,
  20 module assessments, final exam, capstone brief + report template.
- Research report (A), curriculum map + dependency graph (B), science track (D), equipment
  curriculum in three tiers (E), troubleshooting database with 195 entries (F), assessment
  system (G), capstone (H), Stage 2/3 extension architecture (I), verified bibliography (J),
  345-term glossary.
- docsify site with in-browser progress tracking, per-page notes, prerequisite ticks,
  filterable glossary/troubleshooting/recipe tables, and JSON export/import of progress.

## Verification done
- 0 broken internal links or anchors across 249 pages (node tools/check-links.js).
- Every mermaid diagram renders; progress, notes and filters tested in a browser.
- Bibliography entries checked against publisher pages, catalogues or Crossref.

## Worth knowing
- Formulas are educational formulations (labelled as such), written in parallel by module;
  numbers were arithmetic-checked by each writer but not baked. Your first bakes are the
  real test.
- The M18 production-day example starts croissant shaping at 04:45 Saturday; the lesson
  gives a Friday-evening shaping alternative.
- Several writers wished for extra references (FDA Food Code is now in; Montgomery SPC,
  Hartel confectionery, Walstra dairy, water-activity handbooks are not).

## Maintenance
node tools/gen-sidebar.js && node tools/gen-indexes.js && node tools/check-links.js
