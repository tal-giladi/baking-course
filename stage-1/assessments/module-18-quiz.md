# M18 assessment · Production, standardization and troubleshooting

Covers [18.1](stage-1/module-18/lesson-01.md)–[18.3](stage-1/module-18/lesson-03.md), [X1-44](experiments/X1-44-batch-consistency.md) and [SC-14](stage-1/science/sc-14-measurement-sensory.md). Work on paper or in your lab notebook first, then open the answers. Allow about 2 h for sections A–D. Section E is a production day plus a written standard recipe. All prices are **made-up example numbers** in a generic currency unit.

## A. Knowledge check

**A1.** What is back-scheduling, and why is it the natural way to plan a baking day?

<details class="answer"><summary>Answer</summary>

Starting from the fixed ready time and working backward through each product's steps (with durations, dependencies and resources) to find when each must start; then executing forward. It suits baking because the end is fixed by the customer, and the start is dictated by fermentation, chilling and baking times that cannot be compressed much.

</details>

**A2.** Classify each step as fixed-duration or flexible, and say what could move a fixed one: (a) sourdough bulk, (b) retarded proof of a shaped loaf, (c) cooling a sourdough loaf, (d) resting R1-11 cookie dough, (e) baking croissants.

<details class="answer"><summary>Answer</summary>

(a) Fixed at a given temperature; moved by DDT and levain dose. (b) Flexible, 8–16 h at 3–5 °C. (c) Fixed minimum (≥ 2 h); nothing moves it without a gummy crumb. (d) Flexible, 12–72 h at 3–5 °C. (e) Fixed; bake to endpoint.

</details>

**A3.** Define the critical path and float. In a plan, which chain do you watch most closely?

<details class="answer"><summary>Answer</summary>

The critical path is the longest chain of dependent steps from first action to ready time; any delay on it delays the finish. Float is the time a step on another chain can slip without delaying the finish. Watch the critical path, and any chain whose durations are least predictable (sourdough bulk, levain peak).

</details>

**A4.** Give three rules for sequencing bakes in a single home oven.

<details class="answer"><summary>Answer</summary>

Group bakes by temperature and change temperature as few times as possible; go from hot to cool (preheat the pot or stone once, bake bread, then let the oven fall to pastry temperatures); bake products that keep (cookies, tart shells) on an earlier day; do not rely on the oven as a proof box on bake day.

</details>

**A5.** What are the four parts of a standard recipe? Which part is missing from a typical cookbook recipe?

<details class="answer"><summary>Answer</summary>

Formula, process (with endpoints and CCPs), product specification and tolerances. Cookbook recipes usually lack a measurable specification and tolerances, and often the ingredient specifications and endpoints too.

</details>

**A6.** Explain the difference between natural process limits and specification limits. Can a process be in control and still produce out-of-spec product?

<details class="answer"><summary>Answer</summary>

Natural process limits (from a control chart: mean ± 2.66 × mean moving range) describe what the process actually does. Specification limits describe what the product must be. Yes: a stable process whose natural spread is wider than the specification band produces some out-of-spec product even when nothing unusual happens. The fix is to reduce variation, not to work "more carefully" on the next batch.

</details>

**A7.** List the six steps of the diagnostic method, and the five categories of candidate causes.

<details class="answer"><summary>Answer</summary>

Steps: (1) describe the symptom precisely (measure, photograph the cross-section); (2) list candidate causes; (3) rank them using records; (4) design the cheapest discriminating test; (5) correct and verify with replicates; (6) document. Categories: formula, ingredients, process, equipment, environment.

</details>

**A8.** A pool of butter forms under croissants in the oven. Name two causes that produce this, and one piece of evidence that separates them.

<details class="answer"><summary>Answer</summary>

Proofing too warm (above about 28 °C, butter melts into the dough before baking) and under-proofing. Evidence: a warm proof shows a greasy, shiny surface and smeared layers before baking and a bready interior; under-proof shows small, tight croissants with distinct but compressed layers and no jiggle, proofed at a correct temperature.

</details>

**A9.** Why is one successful re-bake not enough to confirm a correction?

<details class="answer"><summary>Answer</summary>

Batch-to-batch variation (measured in X1-44) can make a single batch look fixed by chance. Repeat at least once, ideally with a control, before changing the standard recipe.

</details>

## B. Formulation exercises

**B1. Production planning.** Order: **4 short poolish baguettes** ([R1-04](recipes/R1-04-poolish-bread.md)), **6 crèmes brûlées** ([R1-25](recipes/R1-25-creme-brulee.md)) and **10 scones** ([R1-14](recipes/R1-14-scones.md)), all for a lunch at **Sunday 12:30**. Baguettes should be as fresh as possible; scones served warm. One oven with a baking steel (holds 4 short baguettes), one steam tray. You plan on Saturday morning.

Relevant data: poolish ripens in 12–16 h at 20–22 °C; final dough mixing and rests ~30 min; bulk 1.5–2 h at 24 °C; divide, pre-shape and bench rest ~35 min; shaping 15 min; proof 40–60 min; steel preheat 45–60 min at 250 °C; baguettes bake 22–26 min (250 → 240 °C); cool ≥ 30 min. Brûlées bake 25–35 min at 150 °C in a water bath, then cool 20–30 min and chill ≥ 4 h; keep 2–3 days at ≤ 5 °C; torch just before serving. Scones: 25 min to make; bake 12–15 min at 220 °C (15–19 min from frozen); best within a few hours.

Write the back-schedule for Saturday and Sunday, show the Sunday oven timeline, and identify the critical path and one step with float.

<details class="answer"><summary>Answer</summary>

**Decisions first.** Brûlées keep and must chill ≥ 4 h, and their 150 °C bake would cost Sunday oven time: make them **Saturday**. The poolish must be mixed Saturday evening. Scones can be made and frozen unbaked on Saturday (baked from frozen on Sunday) or made fresh on Sunday while the baguettes bake; either works because their hands-on time falls in a gap. Sunday oven order is **hot to cool**: baguettes (250/240 °C), then scones (220 °C).

**Back-schedule, Sunday (from 12:30):**

| Clock | Task | Resource |
|---|---|---|
| 12:15–12:25 | Torch brûlées, plate | Bench |
| 12:10 | Baguettes have cooled 30 min | — |
| 11:50–12:08 | Bake scones from frozen, 220 °C (or fresh: 11:52–12:05) | **Oven** |
| 11:40–11:50 | Oven down from 240 to 220 °C, door ajar; verify | **Oven** |
| 11:15–11:40 | Bake baguettes: 12 min steam at 250 °C, then 240 °C | **Oven** |
| 10:15–11:15 | Preheat steel and steam tray at 250 °C (60 min) | **Oven** |
| 10:20–11:15 | Proof baguettes in couche, 40–60 min at 24 °C | Couche |
| 10:05–10:20 | Shape baguettes | Bench |
| 09:30–10:05 | Divide 4 × 255 g, pre-shape, bench rest | Bench |
| 07:45–09:30 | Bulk with folds at 30 and 60 min, to +50–75 % | Container |
| 07:15–07:45 | Judge poolish; mix final dough to DDT 24 °C | Bench |

**Saturday:** brûlées mixed and baked about 15:00–16:00, cooled, in the fridge by 16:30 (≥ 4 h is met by evening). Scones made and frozen unbaked about 17:00 (optional). **Poolish mixed between 15:15 and 19:15** (12–16 h before 07:15); 18:00 gives 13 h 15 min at 20–22 °C. Check the fridge shelf temperature, label everything (brûlées: date, use by Monday/Tuesday, egg, milk).

**Critical path:** poolish → final mix → bulk → divide and shape → proof → bake → 30 min cooling → service. The oven preheat must start by 10:15 and is on the path too. Buffer: about 20 min between the baguettes' cooling end (12:10) and 12:30.
**Float:** the brûlées have about a day of float (any time Saturday); the scones have float if frozen. The poolish has about 4 h of float in its mixing time (15:15–19:15), which is how you absorb Saturday's other plans.

**Check:** the oven is used continuously 10:15–12:08 with one temperature change, from hot to cool. If the proof runs fast, baguettes can go in from 11:05 with the steel preheated 50 min.

</details>

**B2. Costing.** Cost the 6 crèmes brûlées from R1-25 with these example prices: cream (35 % fat) 6.00 per kg; eggs 0.24 each (6 eggs give the 100 g of yolks; the 6 whites weigh 210 g); caster sugar 1.20 per kg; vanilla extract 80.00 per kg; salt 1.00 per kg. Use 90 g sugar in the custard plus 7 g per ramekin for the topping.

(a) Ingredient cost for the batch and per brûlée, if the whites are thrown away.
(b) The same, if the whites go into meringues and egg cost is allocated by weight.
(c) One ramekin cracks and is rejected. What are the yield factor and the cost per saleable brûlée under (a)?
(d) The oven uses about 1 kWh for preheat and bake at 0.30 per kWh. Add energy to (a) for the full batch of 6.

<details class="answer"><summary>Answer</summary>

(a)

| Ingredient | Grams or count | Example price | Cost |
|---|---|---|---|
| Cream | 500 g | 6.00 per kg | 3.000 |
| Eggs (for yolks) | 6 | 0.24 each | 1.440 |
| Sugar (90 + 6 × 7 = 132 g) | 132 g | 1.20 per kg | 0.158 |
| Vanilla extract | 5 g | 80.00 per kg | 0.400 |
| Salt | 0.5 g | 1.00 per kg | 0.001 |
| **Total** | | | **4.999** |

Per brûlée: 4.999 ÷ 6 = **0.833**. Cream is 60 % of the cost.

(b) Yolks are 100 g of the 310 g of egg used (100 + 210), so they carry 100 ÷ 310 = 32.3 % of the egg cost: 1.440 × 0.323 = 0.465. Total = 3.000 + 0.465 + 0.158 + 0.400 + 0.001 = **4.024**; per brûlée **0.671**. Using the whites cuts the brûlée cost by about 19 %: by-product use is cost control.

(c) Yield factor = 5 ÷ 6 = 0.833. Cost per saleable brûlée = 4.999 ÷ 5 = **1.000**.

(d) Energy 1 × 0.30 = 0.30 for the batch. Total 4.999 + 0.30 = 5.299; per brûlée (6) = **0.883** (or 1.060 each if only 5 are saleable).

</details>

**B3. Control chart.** Dough temperatures for eight consecutive batches of R1-04 (DDT target 24 °C, acceptable 23–25 °C): 24.5, 25.0, 24.0, 25.5, 24.5, 26.0, 23.0, 25.0 °C. Calculate the mean, the mean moving range and the natural process limits. Is the process stable? Does it meet the acceptable range? What would you change?

<details class="answer"><summary>Answer</summary>

Mean = 197.5 ÷ 8 = **24.69 °C**. Moving ranges: 0.5, 1.0, 1.5, 1.0, 1.5, 3.0, 2.0; sum 10.5; mean MR = 10.5 ÷ 7 = **1.50 °C**. Limits = 24.69 ± 2.66 × 1.50 = 24.69 ± 3.99 → **20.7 to 28.7 °C**.

All points are inside the limits, so the process is stable: nothing unusual happened. But it is centred about 0.7 °C high, and its natural spread (±4 °C) is far wider than the ±1 °C acceptable range: batches 4 and 6 are above 25 °C, batch 7 sits exactly on the lower edge, and more batches will fall outside. Working "more carefully" will not fix it. Change the method: measure flour and room temperature and calculate the water temperature every batch with your measured friction factor (four-factor formula with the poolish), check the water temperature with the probe rather than by feel, and record the calculated vs actual dough temperature so that the friction factor can be corrected.

</details>

## C. Troubleshooting cases

**C1. The crowded fridge.** A production day for Saturday. On Friday evening the baker puts into the fridge, within 15 min: two shaped R1-06 loaves in bannetons, two trays of shaped croissants, a still-warm (about 40 °C) 2 kg tray of pastry cream "to save time", and a large pot of soup. On Saturday morning the loaves have spread over the banneton rims, look very aerated, and bake flat, pale and 6 cm tall. The croissants look puffy and slightly greasy. The fridge thermometer, placed on the shelf on Saturday morning, reads 9 °C and slowly drops.

Diagnose the bread and croissant faults, name the root cause, and say what else is wrong.

<details class="answer"><summary>Answer</summary>

**Symptoms:** loaves over-proofed (spread, very aerated, flat, pale); croissants over-proofed and greasy; fridge at 9 °C in the morning.

**Proximate cause:** the fridge was far above 3–5 °C for hours, so the retard ran as a slow warm proof. At 7–9 °C fermentation runs roughly 1.5–2× (or more) faster than at 3–4 °C; over 10–12 h the loaves over-proofed and consumed sugar (pale crust), and the croissant butter softened.

**Root cause (five whys):** a large warm mass (2 kg of pastry cream at 40 °C, plus hot soup) went into a small domestic fridge at the same time as the doughs; the plan did not reserve fridge capacity or require items to be pre-cooled. Correction: cool hot items first (ice bath, shallow tray, below 21 °C within 2 h) before refrigerating; check the fridge shelf temperature the evening before and after loading; stagger loading; keep the retarding shelf for doughs only.

**Also wrong, and more serious: food safety.** A 2 kg mass of pastry cream in a warm fridge may not have cooled below 21 °C within 2 h and below 5 °C in time ([00.3](stage-1/module-00/lesson-03.md), [R1-26](recipes/R1-26-creme-patissiere.md)). Probe it; if the cooling time cannot be shown to meet the rule, discard it. See [flat spreading sourdough loaf](troubleshooting/sourdough.md?id=flat-spreading-sourdough-loaf) and [laminated doughs](troubleshooting/laminated.md).

</details>

**C2. The drifting trays.** A baker makes 24 R1-11 cookies from one dough: 4 trays of 6, baked one after another at 180 °C (oven thermometer confirmed at the start). The dough balls came out of the fridge together and waited on the bench in a 26 °C kitchen while the trays were baked. Tray 1: diameter 8.8 cm, thickness 14 mm. Tray 4: diameter 10.6 cm, thickness 9 mm, greasy edges, darker bottoms. The baker suspects that the oven is getting hotter over time.

Give the most probable cause, a second candidate, and the cheapest test to separate them.

<details class="answer"><summary>Answer</summary>

**Most probable cause: the dough balls warmed on the bench.** Tray 4's balls waited about 45 min at 26 °C; their butter softened and sugar dissolved more, so they spread faster before setting (thinner, wider, greasy edges). **Second candidate:** oven or tray temperature drift: a tray reused hot from the previous bake, or the oven overshooting after repeated door openings, would also darken bottoms and change spread.

**Test:** probe a ball's temperature at loading for each tray (free), and use a cool tray each time. Then bake one ball taken straight from the fridge next to one that has waited 45 min on the same tray: if only the warm one over-spreads, the dough temperature is the cause. **Correction:** take out only one tray's balls at a time (R1-11 says bake straight from the fridge at 4–8 °C), cool or rotate trays, and let the oven recover 5 min between trays. See [excessive spreading](troubleshooting/cookies.md?id=excessive-spreading) and [burnt bottoms](troubleshooting/cookies.md?id=burnt-bottoms).

</details>

## D. Experimental design

**Hypothesis to test:** *"Replacing butter brand A (the current one) with the cheaper brand B in R1-34 croissants makes no difference customers can detect, and does not change the croissants' height or layer structure."*

Design the test. State the independent, dependent and controlled variables, the batch plan, the sensory test and its pass criterion, the physical measurements, the number of repeats, and what result would support or refute the hypothesis. Write your design before opening the answer.

<details class="answer"><summary>Answer</summary>

A good design:

- **Independent variable:** roll-in butter brand, A vs B. Check and record both labels' fat content first (for example 82 % vs 80 %): a fat difference is a likely mechanism and should be noted.
- **Batch plan:** one double détrempe, divided into two equal pieces, so the dough is identical. Laminate each with its butter block on the same morning, same folds, same chill times, same sheet thickness; shape 12 of each; proof side by side at a measured 25–26 °C; bake alternating trays (A, B, A, B) or both in one load with positions swapped, so oven position and order are not confounded with brand.
- **Controlled:** flour lot, butter block weight and temperature at lock-in (measured), dough temperature, fold schedule, proof temperature and endpoint, oven temperature (measured), bake time, evaluation time.
- **Dependent (physical):** baked weight, height and length of every croissant; cross-section photos with a ruler for layer count and structure; butter leakage on the tray (yes/no, estimated area); lamination behaviour (cracking, butter breaking through).
- **Sensory:** a **triangle test** with coded samples, balanced across the six serving orders, at the same time after baking (30 min), same portion (a middle section), water between samples. With 12 tasters, **8 or more correct** means a detectable difference at α = 0.05 ([SC-14](stage-1/science/sc-14-measurement-sensory.md)). If a difference is detected, follow with a paired preference test.
- **Repeats:** at least two independent days (two double batches), because one batch cannot separate the butter effect from chance, and so that the triangle test panel can be larger.
- **Interpretation:** the hypothesis is supported if tasters do not reach the significance threshold on either day **and** the mean height differs by less than your day-to-day variation (from X1-44 or your control chart), with similar layer structure. It is refuted if the triangle test is significant, or if B croissants are consistently shorter or leak more. A non-significant triangle with 12 tasters does not prove there is no difference; it means this panel could not detect one, which may be enough for a cost decision. If B passes, record the change as a new recipe version with the evidence ([18.2](stage-1/module-18/lesson-02.md)).

A weak design would bake A one week and B the next and ask friends which they liked better, knowing which was which.

</details>

## E. Practical assessment

**Product:** a planned production day of **at least three products from at least two product families** (for example a bread, a laminated or short pastry, and a cookie or custard), ready at a fixed time you choose in advance, plus a **standard recipe** for one of the products.

**Specification:** every product meets its recipe's "Expected result" at the ready time. The standard recipe contains formula (with ingredient specifications), process (with CCPs and endpoints), a product specification with tolerances set from your own data (X1-44 or at least three previous batches), full cost per unit, and a change log.

**Submit:** the written plan (table and Gantt chart) with the critical path marked; the prep list with par levels and labels; the log of planned vs actual times; the QC record at the ready time (weights, dimensions, internal temperatures, colour, a short tasting sheet, release decision); the standard recipe; and one diagnosis, using the six-step method, of whatever went least well.

| Criterion | Pass | Merit | Not yet |
|---|---|---|---|
| Plan | Back-scheduled from the ready time; every step has duration, dependency and resource; oven timeline written | Critical path and float identified; contingencies written for the two least predictable steps | Forward-planned or missing the oven timeline |
| Execution | All products ready within 15 min of the ready time | Ready on time with the buffer intact; no step more than 15 min off plan | More than 30 min late, or a product dropped |
| Temperature control | DDTs, fridge and proof temperatures measured and in range | Retard and freezing used deliberately as buffers | Not measured |
| Food safety and labelling | All stored items labelled (contents, date, use-by, allergens); creams cooled and held correctly | FIFO and cleaning schedule written into the plan | Unlabelled items or cooling not shown |
| Product quality | Each product meets its expected result | Each within the tolerances of its specification | Any product outside its expected result without a diagnosis |
| Standard recipe | All four parts present; costing arithmetic correct | Tolerances justified with data; change log with evidence | Missing specification or tolerances, or arithmetic errors |
| QC | Every product measured and tasted with a protocol; release decision recorded | Retained sample kept; a control chart started for one metric | No measurements |
| Diagnosis | One fault diagnosed with symptom statement, causes and a proposed test | Test run and result reported; root cause found by five whys | No diagnosis, or a cause contradicted by the record |

**Pass** requires "Pass" or better on every row. The planned-vs-actual log is the most valuable output: keep it for your next production day and for the [capstone](stage-1/capstone/README.md).
