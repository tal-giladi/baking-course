# Stage 1 course outline — Professional Baking Foundation

This is the master plan for Stage 1. Every file, ID and link in the course follows it.
For the reasoning behind the structure see the [research report](research/research-report.md);
for the prerequisite graph see the [curriculum map](curriculum/curriculum-map.md).

**Duration:** 20 modules (M00–M19), 66 lessons, 41 standardized recipes, 44 controlled
experiments, 14 science units, 20 module assessments, 1 capstone. Planned for **~24 weeks**
at 8–12 hours/week (two or three baking sessions plus reading). A faster learner with more
time can finish in 3 months; a learner who repeats every recipe until it is consistent will
take closer to 6.

## Design rules (why it looks like this)

1. **Systems, not recipes.** Each module teaches one *system* (lean dough, enriched dough,
   short dough, egg foam, custard, laminated dough…) and the concept that governs it. Recipes
   are vehicles for the concept.
2. **Science where it is used.** A science unit is read the first time the phenomenon shows up
   on the bench, at the depth needed to predict what happens when a variable changes.
3. **Every module has an experiment.** Small batches (typically 150–250 g flour per variant),
   one variable at a time, with a printable observation sheet and a scale-up factor.
4. **Stop anywhere and still bake.** After M05 you can bake lean and sourdough bread; after
   M10 cookies, quick breads and cakes; after M16 the core French pastry repertoire.
5. **Append-only IDs.** Stage 1 uses `S1`/`R1-`/`X1-`/`SC-` IDs and `stage-1/` paths. Stage 2
   and 3 add `stage-2/`, `R2-`, `X2-`… and extend the same concept threads (T1–T12). Nothing
   in Stage 1 is renamed when they are added. See the
   [extension architecture](extension/stage-2-3-architecture.md).

## Concept threads

Every lesson is tagged with the threads it advances. Threads are the spine that Stage 2 and 3
extend.

| Thread | Name | Stage 1 carries it from → to |
|---|---|---|
| T1 | Measurement & formulation math | grams → baker's % → DDT → scaling, yield, formula balance |
| T2 | Flour, starch & gluten | wheat kernel → gluten network → rheology → dough strength choices |
| T3 | Fermentation & microbiology | yeast → time/temperature control → preferments → sourdough |
| T4 | Heat, baking & staling | heat transfer → oven spring → crust → cooling → retrogradation |
| T5 | Sugars & browning | sucrose → hygroscopicity & water activity → Maillard/caramel → syrups & crystallization |
| T6 | Fats & shortening | fat types → creaming/aeration → tenderizing → plasticity & lamination |
| T7 | Eggs, foams & emulsions | egg proteins → coagulation → foams → emulsions |
| T8 | Starch thickening & gels | gelatinization → pastry cream & fillings → set & syneresis |
| T9 | Structured doughs | short dough → pie dough → choux → puff → croissant/danish |
| T10 | Chocolate & crystallization | composition → ganache → cocoa-butter polymorphism → tempering |
| T11 | Professional workflow, safety & QA | mise en place → sanitation → planning → standardization → costing |
| T12 | Experimental method & R&D | observation → controlled experiment → diagnosis → formulation project |

## Module map

| ID | Module | Lessons | Key practical output | Experiments |
|---|---|---|---|---|
| M00 | Orientation: the kitchen as a laboratory | 3 | Calibrated kitchen, lab notebook | — |
| M01 | Measurement and baker's math | 4 | Formula sheets | X1-01, X1-02 |
| M02 | Flour, water, salt: the dough system | 4 | Gluten balls, test doughs | X1-03 – X1-06 |
| M03 | Yeast and fermentation: lean bread | 4 | Lean loaf, rolls, pan loaf | X1-07 – X1-09 |
| M04 | Heat and the oven | 3 | Pita, oven-profiled loaves | X1-10 – X1-12 |
| M05 | Preferments and sourdough | 4 | Poolish bread, levain, sourdough loaf | X1-13, X1-14 |
| M06 | Enriched doughs | 4 | Milk bread, challah, brioche | X1-15 – X1-17 |
| M07 | Sugar, sweeteners and browning; cookies | 3 | Caramel, cookies | X1-18 – X1-20 |
| M08 | Fats, chemical leavening and mixing methods | 4 | Muffins, quick bread, scones | X1-21 – X1-23 |
| M09 | Eggs: coagulation, foams and emulsions | 3 | Mayonnaise, sabayon | X1-24, X1-25 |
| M10 | Cakes: batter and foam systems | 4 | Pound cake, génoise, chiffon | X1-26 – X1-29 |
| M11 | Short doughs, pies and tarts | 3 | Brisée, sucrée, pie, frangipane | X1-30 – X1-32 |
| M12 | Custards and creams | 3 | Anglaise, brûlée, pâtissière, Chantilly | X1-33, X1-34 |
| M13 | Sugar syrups, meringues and buttercreams | 3 | Syrups, three meringues, buttercreams | X1-35, X1-36 |
| M14 | Choux pastry | 2 | Éclairs, profiteroles | X1-37, X1-38 |
| M15 | Laminated doughs | 4 | Puff pastry, croissant, danish | X1-39, X1-40 |
| M16 | Chocolate fundamentals | 3 | Ganache, tempered chocolate | X1-41, X1-42 |
| M17 | Finished pastries: components and assembly | 3 | Fruit tart, chocolate tart, layer cake | X1-43 |
| M18 | Production, standardization and troubleshooting | 3 | Production plan, standard recipe, QC | X1-44 |
| M19 | Capstone: formulation development project | 2 | Your own standardized product | Capstone |

## Lessons

Paths: `stage-1/module-XX/lesson-YY.md`. "Requires" lists hard prerequisites (lesson IDs);
science units are listed where they are first needed.

### M00 — Orientation: the kitchen as a laboratory
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 00.1 | How this course works: four dimensions, three stages, the lab notebook | — | — | T11, T12 |
| 00.2 | Setting up the kitchen lab: equipment, oven mapping, workflow and mise en place | 00.1 | SC-10 | T1, T4, T11 |
| 00.3 | Food safety, sanitation, allergens and ingredient storage | 00.1 | SC-08 | T11 |

### M01 — Measurement and baker's math
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 01.1 | Weighing everything: grams, scale resolution, why volume fails | 00.2 | — | T1 |
| 01.2 | Baker's percentages, hydration and true hydration | 01.1 | SC-01 | T1 |
| 01.3 | Temperature as an ingredient: DDT, friction factor, measuring temperature | 01.2 | SC-10 | T1, T3 |
| 01.4 | Scaling, yield, loss and the standardized formula sheet | 01.2 | — | T1, T11 |

### M02 — Flour, water, salt: the dough system
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 02.1 | Wheat and flour: kernel, milling, protein, ash, flour types | 01.2 | SC-02, SC-03 | T2 |
| 02.2 | Gluten: how the network forms and what strengthens or weakens it | 02.1 | SC-03, SC-12 | T2 |
| 02.3 | Water and starch: absorption, damaged starch, hydration and handling | 02.2 | SC-01, SC-02 | T1, T2 |
| 02.4 | Salt, mixing methods and dough rheology | 02.3 | SC-12 | T2 |

### M03 — Yeast and fermentation: lean bread
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 03.1 | Yeast: what it is, what it eats, what it makes | 02.4 | SC-08, SC-09 | T3 |
| 03.2 | The twelve steps of bread: your first lean loaf | 03.1, 01.3 | — | T3, T11 |
| 03.3 | Controlling fermentation: yeast, time, temperature and the cold | 03.2 | SC-08 | T3, T12 |
| 03.4 | Dividing, shaping, proofing and scoring | 03.2 | SC-12 | T2, T3 |

### M04 — Heat and the oven
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 04.1 | How heat gets into dough: ovens, stones, steels, pots and steam | 03.2 | SC-10, SC-11 | T4 |
| 04.2 | What happens in the oven: spring, set, crust and colour | 04.1 | SC-02, SC-07, SC-11 | T4, T5 |
| 04.3 | Cooling, staling and storage | 04.2 | SC-02, SC-01 | T4 |

### M05 — Preferments and sourdough
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 05.1 | Preferments: poolish, biga, sponge, pâte fermentée — and enzymes | 03.3 | SC-09 | T3 |
| 05.2 | Baking with a poolish | 05.1, 04.2 | — | T3 |
| 05.3 | Sourdough microbiology and building a levain | 05.1 | SC-08, SC-05 | T3 |
| 05.4 | The sourdough loaf and the bread clinic | 05.3, 03.4 | SC-05 | T3, T12 |

### M06 — Enriched doughs
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 06.1 | What enrichment does: sugar, fat, eggs and milk in yeast dough | 03.3 | SC-04, SC-01 | T3, T6 |
| 06.2 | Soft doughs and pre-gelatinized starch: milk bread | 06.1, 04.3 | SC-02 | T2, T8 |
| 06.3 | Egg-rich doughs and braiding: challah | 06.1 | SC-03 | T2, T7 |
| 06.4 | High-fat dough: brioche | 06.2 | SC-04 | T2, T6 |

### M07 — Sugar, sweeteners and browning; cookies
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 07.1 | Sugar is not just sweet: sugars, hygroscopicity and water activity | 01.2 | SC-02, SC-01 | T5 |
| 07.2 | Browning: Maillard, caramelization and making caramel | 07.1, 04.2 | SC-07, SC-13 | T5 |
| 07.3 | The cookie as a system: spread, texture and colour | 07.1 | SC-04 | T5, T6, T12 |

### M08 — Fats, chemical leavening and mixing methods
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 08.1 | Fats: composition, crystals, plasticity and the jobs fat does | 02.2 | SC-04 | T6 |
| 08.2 | Chemical leavening: acids, bases and gas on a schedule | 08.1 | SC-05, SC-11 | T1, T6 |
| 08.3 | Muffin and creaming methods: muffins and quick breads | 08.2 | — | T6, T2 |
| 08.4 | The rubbing-in (biscuit) method: scones and biscuits | 08.3 | SC-04 | T6, T9 |

### M09 — Eggs: coagulation, foams and emulsions
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 09.1 | The egg: composition, functions and coagulation | 02.2 | SC-03 | T7 |
| 09.2 | Foams: trapping air with protein | 09.1 | SC-06 | T7 |
| 09.3 | Emulsions: oil, water and the things that hold them together | 09.1, 08.1 | SC-06 | T7 |

### M10 — Cakes: batter and foam systems
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 10.1 | Cake formula balance: builders, tenderizers, moisteners, driers | 08.2, 09.1 | — | T1, T12 |
| 10.2 | Creamed cakes: pound cake and the creaming process | 10.1, 08.3 | SC-06 | T6 |
| 10.3 | Foam cakes: génoise, separated sponge and chiffon | 10.1, 09.2 | SC-06 | T7 |
| 10.4 | Pans, doneness, cooling, syrups and the cake clinic | 10.2, 10.3 | SC-10 | T4, T12 |

### M11 — Short doughs, pies and tarts
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 11.1 | Short dough science: brisée, sucrée, sablée | 08.1, 02.2 | SC-04, SC-03 | T9, T6 |
| 11.2 | Rolling, lining, resting and blind baking | 11.1 | — | T9 |
| 11.3 | Flaky pie dough, fruit fillings and frangipane | 11.2 | SC-02 | T9, T8 |

### M12 — Custards and creams
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 12.1 | Egg-thickened custards: stirred and baked | 09.1 | SC-03 | T7 |
| 12.2 | Starch-thickened creams: crème pâtissière and derivatives | 12.1 | SC-02, SC-09 | T8 |
| 12.3 | Dairy cream: whipping, stabilizing and Chantilly | 09.2 | SC-06, SC-04 | T6, T7 |

### M13 — Sugar syrups, meringues and buttercreams
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 13.1 | Sugar syrups: concentration, boiling point and crystallization | 07.2 | SC-13, SC-11 | T5 |
| 13.2 | Meringues: French, Swiss and Italian | 13.1, 09.2 | SC-06 | T7, T5 |
| 13.3 | Buttercreams and meringue-based creams | 13.2, 09.3 | SC-06, SC-04 | T6, T7 |

### M14 — Choux pastry
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 14.1 | Pâte à choux: panade, eggs and steam | 09.1, 04.2 | SC-02, SC-11 | T9 |
| 14.2 | Éclairs, profiteroles and the choux clinic | 14.1, 12.2 | — | T9, T12 |

### M15 — Laminated doughs
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 15.1 | Lamination theory: layers, fat plasticity and temperature | 08.1, 11.1 | SC-04, SC-11 | T9, T6, T1 |
| 15.2 | Puff pastry: classic and blitz | 15.1 | — | T9 |
| 15.3 | Croissant: laminated yeast dough | 15.2, 06.1 | SC-08 | T9, T3 |
| 15.4 | Danish, pain au chocolat and the lamination clinic | 15.3, 12.2 | — | T9, T12 |

### M16 — Chocolate fundamentals
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 16.1 | Chocolate: from bean to bar, composition and labels | 08.1 | SC-04 | T10 |
| 16.2 | Ganache: a chocolate emulsion | 16.1, 09.3 | SC-06 | T10, T7 |
| 16.3 | Tempering: crystallizing cocoa butter on purpose | 16.1 | SC-13 | T10 |

### M17 — Finished pastries: components and assembly
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 17.1 | Thinking in components: texture, flavour, structure and timeline | 11.2, 12.2, 10.3 | SC-01 | T11, T12 |
| 17.2 | Tarts: fruit tart and chocolate tart | 17.1, 16.2 | — | T9, T8, T10 |
| 17.3 | Layered cakes and simple entremets | 17.1, 13.3 | — | T7, T11 |

### M18 — Production, standardization and troubleshooting
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 18.1 | Production planning: back-scheduling a baking day | 05.4, 15.3 | — | T11 |
| 18.2 | Standardization, batch consistency, costing and quality control | 01.4 | SC-14 | T11, T1 |
| 18.3 | The diagnostic method: from symptom to root cause | 05.4, 10.4 | — | T12 |

### M19 — Capstone: formulation development project
| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 19.1 | Designing experiments and sensory tests | 18.3 | SC-14 | T12 |
| 19.2 | The capstone project | 19.1 | — | T12, all |

## Recipe catalogue (`recipes/`)

Classification tags: <span class="tag established">Established technique</span>
<span class="tag source">Source-derived</span> <span class="tag educational">Educational formulation</span>
<span class="tag experimental">Experimental formulation</span>

| ID | Recipe | Module |
|---|---|---|
| R1-01 | Lean straight-dough loaf (boule and bâtard) | M03 |
| R1-02 | Lean rolls and pan loaf | M03 |
| R1-03 | Pita and flatbreads | M04 |
| R1-04 | Poolish bread and baguettes | M05 |
| R1-05 | Levain: building and maintaining a sourdough starter | M05 |
| R1-06 | Sourdough country loaf | M05 |
| R1-07 | Milk bread with tangzhong | M06 |
| R1-08 | Challah | M06 |
| R1-09 | Brioche | M06 |
| R1-10 | Dry caramel, wet caramel and caramel sauce | M07 |
| R1-11 | Baseline chocolate chip cookie | M07 |
| R1-12 | Muffins (muffin method) | M08 |
| R1-13 | Quick loaf: banana bread (creaming method) | M08 |
| R1-14 | Scones (rubbing-in method) | M08 |
| R1-15 | Mayonnaise — a model emulsion | M09 |
| R1-16 | Sabayon — a model cooked egg foam | M09 |
| R1-17 | Pound cake (quatre-quarts) | M10 |
| R1-18 | Génoise | M10 |
| R1-19 | Chiffon cake | M10 |
| R1-20 | Pâte brisée | M11 |
| R1-21 | Pâte sucrée | M11 |
| R1-22 | Flaky pie dough and fruit pie | M11 |
| R1-23 | Crème d'amande (frangipane) | M11 |
| R1-24 | Crème anglaise | M12 |
| R1-25 | Crème brûlée and crème caramel | M12 |
| R1-26 | Crème pâtissière and crème diplomate | M12 |
| R1-27 | Crème Chantilly | M12 |
| R1-28 | Sugar syrups: simple syrup to hard crack | M13 |
| R1-29 | French, Swiss and Italian meringue | M13 |
| R1-30 | Swiss and Italian meringue buttercreams, crème mousseline | M13 |
| R1-31 | Pâte à choux | M14 |
| R1-32 | Éclairs and profiteroles with craquelin | M14 |
| R1-33 | Puff pastry: classic and blitz | M15 |
| R1-34 | Croissant and pain au chocolat | M15 |
| R1-35 | Danish pastries | M15 |
| R1-36 | Ganache: piping, glazing and truffles | M16 |
| R1-37 | Tempered chocolate by seeding | M16 |
| R1-38 | Brownies — chocolate in a baked batter | M16 |
| R1-39 | Fruit tart | M17 |
| R1-40 | Chocolate tart | M17 |
| R1-41 | Layer cake / simple entremet | M17 |

## Experiment catalogue (`experiments/`)

| ID | Experiment | Module |
|---|---|---|
| X1-01 | Volume vs weight: how much is "a cup of flour"? | M01 |
| X1-02 | Calibrating the kitchen: scale, thermometers and an oven map | M01 |
| X1-03 | Gluten wash: protein content across flours | M02 |
| X1-04 | Hydration series: 60 / 65 / 70 / 75 / 80 % | M02 |
| X1-05 | Mixing time and gluten development | M02 |
| X1-06 | Salt: 0 / 1 / 2 / 3 % | M02 |
| X1-07 | Fermentation temperature | M03 |
| X1-08 | Yeast quantity vs fermentation time | M03 |
| X1-09 | Proof level: under, optimal, over | M03 |
| X1-10 | Steam: open oven vs added steam vs covered pot | M04 |
| X1-11 | Bake time and internal temperature: crust and crumb series | M04 |
| X1-12 | Staling: room, refrigerator, freezer, reheating | M04 |
| X1-13 | Preferment comparison: straight vs poolish vs pâte fermentée vs biga | M05 |
| X1-14 | Levain: temperature and feeding ratio, tracked by rise and pH | M05 |
| X1-15 | Sugar in yeast dough: 0 / 5 / 10 / 20 % | M06 |
| X1-16 | Tangzhong vs none: softness and staling | M06 |
| X1-17 | Butter in brioche: 20 / 40 / 60 % | M06 |
| X1-18 | Sugar level in cookies: −20 % / baseline / +20 % | M07 |
| X1-19 | Sugar type: white vs brown vs part invert/honey | M07 |
| X1-20 | Butter state and dough rest vs cookie spread | M07 |
| X1-21 | Baking soda vs baking powder vs both | M08 |
| X1-22 | Overmixing muffin batter | M08 |
| X1-23 | Fat temperature and piece size in scones | M08 |
| X1-24 | Egg-white foam: sugar timing, acid and a trace of fat | M09 |
| X1-25 | Egg coagulation temperature series | M09 |
| X1-26 | Creaming time | M10 |
| X1-27 | Creaming vs reverse creaming | M10 |
| X1-28 | Cake flour vs all-purpose flour | M10 |
| X1-29 | Formula balance: pushing sugar and liquid | M10 |
| X1-30 | Sablage vs crémage in pâte sucrée | M11 |
| X1-31 | Fat piece size in pie dough | M11 |
| X1-32 | Resting and chilling vs tart shrinkage | M11 |
| X1-33 | Custard endpoint temperature: 78 / 82 / 86 °C | M12 |
| X1-34 | Starch thickeners and the amylase trap | M12 |
| X1-35 | Meringue method vs stability | M13 |
| X1-36 | Controlling sugar crystallization | M13 |
| X1-37 | Choux paste: egg quantity and paste consistency | M14 |
| X1-38 | Choux: oven temperature and venting | M14 |
| X1-39 | Number of folds vs puff pastry lift | M15 |
| X1-40 | Croissant proof temperature and butter temperature | M15 |
| X1-41 | Tempered vs untempered chocolate | M16 |
| X1-42 | Ganache ratio series | M16 |
| X1-43 | Moisture migration: sealed vs unsealed tart shells | M17 |
| X1-44 | Batch consistency: the same product three times | M18 |

## Science track (`stage-1/science/`)

| ID | Unit | First needed in |
|---|---|---|
| SC-01 | Water: hydrogen bonds, free vs bound water, water activity | 01.2 |
| SC-02 | Carbohydrates: sugars, starch, gelatinization and retrogradation | 02.1 |
| SC-03 | Proteins: structure, denaturation, coagulation and gluten | 02.1 |
| SC-04 | Lipids: fatty acids, crystals, melting and plasticity | 06.1 |
| SC-05 | Acids, bases and pH | 05.3 |
| SC-06 | Colloids: foams, emulsions and gels | 09.2 |
| SC-07 | Browning: the Maillard reaction and caramelization | 04.2 |
| SC-08 | Microbiology: yeasts, bacteria, fermentation and food safety | 00.3 |
| SC-09 | Enzymes: amylases, proteases and friends | 03.1 |
| SC-10 | Heat transfer: conduction, convection, radiation | 00.2 |
| SC-11 | Phase changes and gases: evaporation, steam, expansion | 04.1 |
| SC-12 | Rheology: an intuitive guide to dough behaviour | 02.2 |
| SC-13 | Crystallization: sugar and cocoa butter | 07.2 |
| SC-14 | Measurement, sensory evaluation and variability | 18.2 |

## Suggested 24-week schedule

| Weeks | Modules | Bakes per week |
|---|---|---|
| 1 | M00, M01 | calibration + formula practice |
| 2–3 | M02 | test doughs, gluten washes |
| 4–5 | M03 | 2–3 lean bakes |
| 6 | M04 | 2 bakes |
| 7–8 | M05 | starter daily, 2 bakes |
| 9–10 | M06 | 2 bakes |
| 11 | M07 | cookie series |
| 12 | M08 | 2–3 bakes |
| 13 | M09 | model emulsions/foams |
| 14–15 | M10 | 3–4 cakes |
| 16 | M11 | tart shells, pie |
| 17 | M12 | custards and creams |
| 18 | M13 | syrups, meringues |
| 19 | M14 | choux |
| 20–21 | M15 | puff, croissant, danish |
| 22 | M16, M17 | chocolate, assembled pastries |
| 23 | M18 | production day |
| 24+ | M19 | capstone (3–6 weeks alongside continued practice) |
