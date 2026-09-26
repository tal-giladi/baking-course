# Build progress

Resume point for the build. Update after every batch; commit and push after every batch.
Plan: `curriculum/course-outline.md` · fixed paths: `curriculum/file-index.md` · style: `CLAUDE.md`.

## Foundation
- [x] Site framework (index.html, assets/course.js progress/notes/prereq/filter, course.css)
- [x] Authoring guide, course outline, file index
- [x] Research report (A)
- [x] Curriculum map + dependency graph (B)
- [x] README, sidebar, progress page, templates

## Modules (C) — each: README, lessons, recipes, experiments, troubleshooting file, quiz
- [x] M00 Orientation
- [x] M01 Measurement
- [x] M02 Flour, water, salt
- [x] M03 Yeast & lean bread
- [x] M04 Heat & oven
- [x] M05 Preferments & sourdough
- [x] M06 Enriched doughs
- [x] M07 Sugar & cookies
- [x] M08 Fats, leavening, mixing methods
- [x] M09 Eggs, foams, emulsions
- [x] M10 Cakes
- [x] M11 Short doughs & tarts
- [x] M12 Custards & creams
- [x] M13 Syrups, meringues, buttercreams
- [x] M14 Choux
- [x] M15 Laminated doughs
- [x] M16 Chocolate
- [x] M17 Finished pastries
- [x] M18 Production & troubleshooting
- [x] M19 Capstone lessons

## Cross-cutting
- [x] Science track SC-01..SC-14 (D)
- [x] Equipment curriculum (E)
- [x] Troubleshooting index/method (F) — 195 entries
- [x] Assessment system + final exam (G)
- [x] Capstone brief + report template (H)
- [x] Stage 2/3 extension architecture (I)
- [x] Bibliography verified (J)
- [x] Glossary compiled (345 terms)
- [x] Recipe + experiment index pages
- [x] Link check: 0 problems in 6,322 links; site + all mermaid diagrams render
- [x] GitHub Pages enabled, TODO_FOR_TAL.md written

## Status
Stage 1 complete. Regenerate after edits: `node tools/gen-sidebar.js && node tools/gen-indexes.js && node tools/check-links.js`
