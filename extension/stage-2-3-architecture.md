# Stage 2/3 extension architecture

Stage 1 was designed to be extended, not replaced. This document specifies exactly where
Stage 2 (advanced artisan and professional pastry, 1–3 years) and Stage 3 (baking and pastry
R&D, 3–5+ years total) plug in, and the rules that keep the extension append-only.

**The rule:** later stages *extend concepts, never replace them*. A Stage 2 lesson may say
"in 03.3 you learned that fermentation rate roughly doubles for every ~8–10 °C; here is the
kinetics behind that and where the rule breaks down" — it never says "forget what you learned".

## 1. Append-only rules

| Rule | How it is enforced |
|---|---|
| Stage 1 IDs never change | Lessons `00.1`–`19.2`, recipes `R1-01`–`R1-41`, experiments `X1-01`–`X1-44`, science `SC-01`–`SC-14` and threads `T1`–`T12` are frozen. Corrections are edits in place, never renumbering. |
| New stages get new namespaces | Stage 2: `stage-2/`, modules `S2-M01…`, lessons `S2-01.1…`, recipes `R2-`, experiments `X2-`, science `SC2-`. Stage 3: `stage-3/`, `S3-M01…`, `R3-`, `X3-`, `SC3-`. |
| Every new module declares what it extends | Module page header: **Extends:** the Stage 1 lessons/science units it builds on; **Threads:** which of T1–T12 (or a new thread T13+). The prerequisite box uses the same link format, so the progress ✓ marks work across stages. |
| Shared libraries grow, they do not fork | `recipes/`, `experiments/`, `troubleshooting/`, `references/glossary.md`, `references/bibliography.md` and `equipment/` are shared by all stages. Stage 2 adds rows/sections; a troubleshooting entry gains deeper causes with a stage tag rather than being duplicated. |
| Science deepens by layers | Each Stage 1 science unit ends with a "Going deeper" callout. Stage 2 unit `SC2-xx` opens by linking the Stage 1 unit it deepens; the Stage 1 unit gets a one-line forward link added — nothing else in it changes. |
| Assessments stack | Stage 2 practical assessments reuse the Stage 1 rubric dimensions (weight, dimensions, colour, structure, flavour, consistency) and add tolerance bands. |
| Site runtime is stage-agnostic | `assets/course.js` tracks any page under `stage-N/…`, `recipes/R…`, `experiments/X…`; the sidebar generator reads module headings. Adding a stage means adding an outline and running `node tools/gen-sidebar.js`. |

## 2. Directory layout

```text
stage-1/                 this course (frozen IDs)
  module-00 … module-19/
  science/  assessments/  capstone/
stage-2/                 added later
  module-01 … module-NN/   (S2-M01 …)
  science/                 (SC2-xx: deeper layers of SC-xx)
  assessments/  capstone/
stage-3/
  module-01 … /            (S3-M01 …)
  science/  methods/       (DOE, sensory, instrumental analysis)
  portfolio/               (R&D projects replace a single capstone)
recipes/        R1-xx, R2-xx, R3-xx
experiments/    X1-xx, X2-xx, X3-xx
troubleshooting/  categories shared; entries carry a stage tag when they need Stage 2/3 knowledge
equipment/      essential → useful → professional already spans all stages
references/     one glossary, one bibliography
extension/      this document
```

## 3. Thread-by-thread plug-in map

Each row: the Stage 1 anchor (where the concept is introduced), the Stage 2 extension, and the
Stage 3 extension. Module names for Stages 2 and 3 are the proposed plan (section 4).

### T1 — Measurement & formulation math
| Stage 1 anchor | Stage 2 extends to | Stage 3 extends to |
|---|---|---|
| 01.2 baker's %, 01.3 DDT, 01.4 scaling & yield | multi-stage formulas (preferment % of total flour, overall vs final dough), production-scale DDT with water chillers (S2-M02, S2-M12) | formula optimization, constraint-based formulation, spreadsheet/software models (S3-M01, S3-M04) |
| 10.1 cake formula balance | high-ratio and emulsified cake formulas, ice-cream mix balancing (S2-M06, S2-M09) | solving formulations for targets: sugar reduction, cost, nutrition (S3-M04) |
| 18.2 costing & QC | full bakery costing, labour, waste (S2-M12) | cost-in-use modelling during R&D (S3-M09) |

### T2 — Flour, starch & gluten
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 02.1 flour types & specs | reading flour specification sheets: falling number, farinograph, alveograph W and P/L (S2-M01) | flour selection and blending for a target rheology (S3-M03, S3-M06) |
| 02.2 gluten network | gluten chemistry: disulfide/thiol exchange, oxidants, reducing agents, enzymes (SC2-03, S2-M01) | improver systems and clean-label replacements (S3-M04) |
| 02.4 rheology (intuitive) | instrumental rheology and what the curves mean (SC2-12) | rheology as a design target (S3-M03) |
| 02.1 other grains (preview) | rye, spelt, whole grains, ancient grains, gluten-free systems (S2-M01, S2-M11) | alternative-grain product development (S3-M04) |

### T3 — Fermentation & microbiology
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 03.3 time × temperature × yeast | fermentation kinetics, retarder-proofer programming, overnight schedules (S2-M02) | fermentation process optimization and scale-up (S3-M06) |
| 05.1 preferments | multi-build preferments, preferment % design (S2-M02) | flavour-targeted fermentation design (S3-M06) |
| 05.3–05.4 sourdough | levain systems (stiff/liquid), TTA, rye sours, controlling acetic/lactic balance (S2-M02, SC2-08) | culture selection, starter standardization for production (S3-M06) |
| 06.1 osmotic stress | sweet-dough systems: panettone, stollen, kugelhopf (S2-M04) | high-sugar fermentation R&D (S3-M06) |

### T4 — Heat, baking & staling
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 04.1 home oven heat transfer | deck, rack, convection and combi ovens; steam programs (S2-M03, S2-M12) | baking profile design and oven transfer during scale-up (S3-M09) |
| 04.2 oven spring & crust | crust engineering: colour targets, blistering, retarded crusts (S2-M03) | colorimetry and crust specification (S3-M03) |
| 04.3 staling | anti-staling approaches: preferments, scalds, enzymes (S2-M02) | shelf-life engineering (S3-M05) |

### T5 — Sugars & browning
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 07.1 sugar functions, aw | glucose syrups, DE, invert, polyols; aw calculation (SC2-01, S2-M07) | sugar reduction and replacement (S3-M04) |
| 07.2 Maillard & caramel | caramel, toffee, nougat, praline (S2-M07) | flavour development and control (S3-M04) |
| 13.1 syrups & crystallization | fondant, fudge, pâte de fruits, sugar work (S2-M07, S2-M08) | confectionery formulation (S3-M08) |

### T6 — Fats & shortening
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 08.1 fat science | fat specifications: solid fat content curves, dry butter (84 %), laminating margarines (SC2-04) | fat systems design, fat reduction (S3-M04) |
| 10.2 creaming | emulsified shortenings, high-ratio cakes (S2-M06) | emulsifier selection (S3-M04) |
| 13.3 buttercreams | advanced creams and glazes (S2-M06) | stability and shelf-life of fat-based fillings (S3-M05) |

### T7 — Eggs, foams & emulsions
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 09.2 foams | mousses, bavarois, aerated inserts; gelatin, agar, pectin (S2-M06) | foam stability measurement (S3-M03) |
| 09.3 emulsions | glazes, mirror glazes, emulsified sauces at production scale (S2-M06) | emulsion design with specific emulsifiers (S3-M04) |
| 09.1 egg coagulation | egg-free and allergen-free systems (S2-M11) | protein replacement (S3-M04) |

### T8 — Starch thickening & gels
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 12.2 pastry cream | modified starches, freeze–thaw stability, hydrocolloids (SC2-02, S2-M06) | texture design with hydrocolloid systems (S3-M04) |
| 11.3 fruit fillings | bake-stable fillings, pectin chemistry, confitures (S2-M06) | shelf-stable filling formulation (S3-M05) |

### T9 — Structured doughs
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 11.1–11.3 short dough | advanced tart systems, sablé breton, pâte à foncer at scale (S2-M10) | texture and moisture-barrier design (S3-M05) |
| 14.1–14.2 choux | Paris-Brest, religieuse, croquembouche, craquelin variations (S2-M10) | choux formulation for freezing/production (S3-M09) |
| 15.1–15.4 lamination | advanced viennoiserie: inverted puff, bicolour, sheeter production, retard/freeze schedules (S2-M05) | laminated-product R&D: fat choice, layer engineering, frozen dough (S3-M07) |

### T10 — Chocolate & crystallization
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 16.1 composition | couverture specifications, viscosity, origins (S2-M07) | chocolate selection for application (S3-M08) |
| 16.2 ganache | bonbons, framed and piped ganache, shelf-life via aw (S2-M07) | ganache formulation for shelf-life (S3-M08) |
| 16.3 tempering by seeding | tabling, cocoa-butter seeding, machine tempering, moulded shells, bloom control (S2-M07) | confectionery formulation and crystallization control (S3-M08) |

### T11 — Workflow, safety & QA
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| 00.3 food safety | HACCP plans, allergen management, commercial sanitation (S2-M12) | regulatory and labelling for new products (S3-M10) |
| 18.1 production planning | multi-product production, staffing, retarding as a production tool (S2-M12) | scale-up and process transfer (S3-M09) |
| 18.2 standardization & QC | specifications and tolerance bands, QC sampling (S2-M12) | statistical process control (S3-M03) |

### T12 — Experimental method & R&D
| Stage 1 anchor | Stage 2 | Stage 3 |
|---|---|---|
| X1 experiments (one-factor-at-a-time) | two-factor experiments, replicates (every S2 module) | design of experiments: factorial, response surface (S3-M01) |
| 18.3 diagnostic method | root-cause analysis on production failures (S2-M12) | failure-mode analysis during development (S3-M01) |
| 19.1 sensory basics (triangle test, scales) | trained descriptive panels at small scale (S2 capstone) | sensory and consumer science (S3-M02) |
| 19.2 capstone | Stage 2 capstone: a professional product line | Stage 3 portfolio of R&D projects (S3-M11) |

## 4. Proposed module plan for Stages 2 and 3

These are the modules the plug-in map refers to. They are a plan, not content; exact
contents will be decided when those stages are written, but they must attach at the anchors
above.

### Stage 2 — Advanced Artisan / Professional Pastry

| ID | Module | Extends (Stage 1) |
|---|---|---|
| S2-M01 | Grain and flour science: specs, rye, whole and ancient grains | 02.1–02.4, SC-02, SC-03, SC-12 |
| S2-M02 | Advanced fermentation: levain systems, retarding, multi-build preferments | 03.3, 05.1–05.4, SC-05, SC-08, SC-09 |
| S2-M03 | Hearth bread repertoire and professional ovens | 03.2–03.4, 04.1–04.3 |
| S2-M04 | Sweet doughs and festive breads | 06.1–06.4 |
| S2-M05 | Advanced viennoiserie | 15.1–15.4 |
| S2-M06 | Entremets: mousses, gels, inserts and glazes | 09.2, 09.3, 10.3, 12.1–12.3, 13.3, 17.3 |
| S2-M07 | Chocolate and confectionery | 07.2, 13.1, 16.1–16.3, SC-13 |
| S2-M08 | Sugar work and decoration | 13.1, SC-13 |
| S2-M09 | Plated and frozen desserts: ice cream and sorbet formulation | 10.1, 12.1, 17.1, SC-01 |
| S2-M10 | Petits gâteaux, petits fours, macarons, advanced tarts and choux | 11.1–11.3, 13.2, 14.1–14.2 |
| S2-M11 | Alternative systems: gluten-free, egg-free, dairy-free | 02.2, 09.1, 09.3, 08.1 |
| S2-M12 | Bakery production management, HACCP and costing | 00.3, 18.1–18.2 |
| S2-Capstone | A professional product line, costed and produced to spec | 19.2 |

Stage 2 science layer: `SC2-01` … `SC2-14`, each deepening the same-numbered Stage 1 unit, plus
new units for hydrocolloids (SC2-15) and emulsifiers (SC2-16).

### Stage 3 — Baking/Pastry R&D and Product Development

| ID | Module | Extends |
|---|---|---|
| S3-M01 | Formulation methodology and design of experiments | 19.1, T12 |
| S3-M02 | Sensory and consumer science | 19.1, SC-14 |
| S3-M03 | Instrumental analysis: texture, colour, rheology, aw | SC-12, SC-14, S2-M01 |
| S3-M04 | Ingredient functionality and substitution | T5, T6, T7, T8, S2-M11 |
| S3-M05 | Shelf-life engineering | 04.3, SC-01, X1-43 |
| S3-M06 | Fermentation process optimization | T3, S2-M02 |
| S3-M07 | Laminated-product R&D | T9, S2-M05 |
| S3-M08 | Confectionery formulation | T10, S2-M07 |
| S3-M09 | Scale-up and process transfer | 18.1, S2-M12 |
| S3-M10 | Food safety, regulation and labelling for new products | 00.3, S2-M12 |
| S3-M11 | Innovation process and R&D portfolio | 19.2, all threads |

## 5. How to add a module (checklist)

1. Pick the thread(s) and the Stage 1 anchors it extends from the tables above.
2. Add the module to `curriculum/stage-N-outline.md` using the same table format as
   `course-outline.md` (the sidebar generator reads `### SN-Mxx — Title` headings).
3. Create `stage-N/module-XX/README.md` with **Extends** and **Threads** in its header.
4. Write lessons with the same template; prerequisites may link to Stage 1 lessons.
5. Add recipes/experiments with the new stage prefix to the shared libraries.
6. Add troubleshooting entries to existing category files (new sections, tagged with the stage).
7. Add key terms to the module page; regenerate the glossary.
8. Add a one-line forward link in the Stage 1 science unit or lesson being extended.
9. Run `node tools/check-links.js` (0 problems) and regenerate the sidebar.
