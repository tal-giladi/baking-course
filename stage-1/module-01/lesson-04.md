# 01.4 · Scaling, yield, loss and the standardized formula sheet

<div class="prereq">

**Requires:** [01.2 Baker's percentages](stage-1/module-01/lesson-02.md)
**Science:** none in this lesson
**Practical:** build your first standardized formula sheet from the [recipe template](templates/recipe-template.md)
**Threads:** T1 Measurement & formulation math · T11 Workflow  **Time:** 45 min reading + 1 h exercises

</div>

## Why this lesson exists

A formula is only useful if you can make exactly the amount you need: six rolls for a test, two loaves for the weekend, forty croissants for an event. Scaling by guesswork leaves you with too little dough, a pile of waste, or bread that is under-salted because someone rounded 3.4 g of salt down to 3. Professionals scale backward from the product — number of pieces × piece weight, allowing for losses — and record the result on a standardized formula sheet that anyone could follow. This lesson gives you that method and the sheet you will use for the rest of the course.

## You will be able to

1. Scale a formula by a factor, or by a target flour weight or dough weight.
2. Calculate the dough needed for a given number of pieces, allowing for process loss and bake loss.
3. Apply rounding rules that protect the small, powerful ingredients.
4. Scale cake batter to a different pan by area.
5. Fill in a standardized formula sheet and compute a basic ingredient cost per unit.

## Three ways to scale

### 1. By a factor

Scaling factor = new quantity ÷ old quantity. Multiply every ingredient by it.

**Example: 500 g flour → 2 kg flour.** Factor = 2000 ÷ 500 = 4.

| Ingredient | Original (g) | × 4 (g) |
|---|---|---|
| Bread flour | 500 | 2000 |
| Water | 340 | 1360 |
| Salt | 10 | 40 |
| Instant yeast | 3.5 | 14 |
| **Total** | **853.5** | **3414** |

This works for any recipe in grams, even one not written in baker's %.

### 2. By baker's percentage (target flour weight)

If the formula is in %, pick the flour weight and multiply: water = flour × 0.68, etc. This is the fastest way for bread.

### 3. By target dough weight (the professional default)

Work from what you need to end up with. Covered in detail below.

> **Flour weight = total dough weight ÷ (total formula % ÷ 100)**

## Losses: why you never get what you mix

Between the scale and the cooling rack you lose weight in two places.

| Loss | Where it goes | Typical size |
|---|---|---|
| **Process loss** (scaling / mixing loss) | Dough on the bowl, hook, scraper, bench; trimmings; evaporation during fermentation | 1–3 % at home; higher for sticky, small or enriched doughs |
| **Bake loss** | Water evaporated in the oven (and a little CO₂ and alcohol) | Bread: about 10–20 % of dough weight. Large loaves at the low end (10–14 %), rolls and baguettes at the high end (15–20 %+) because of more surface per gram; a longer, darker bake increases it |

Bake loss is a useful quality measurement in itself: for the same product, a higher bake loss means a drier, crustier result. You will measure it in [X1-11](experiments/X1-11-bake-time.md).

> **Bake loss % = (dough weight − baked weight) ÷ dough weight × 100**

## Working backward from the product

The procedure:

1. **Pieces × piece weight** = dough needed at the divider.
2. **Add process loss**: dough to mix = dough needed ÷ (1 − process loss).
3. **Flour** = dough to mix ÷ (total formula % ÷ 100).
4. Each ingredient = flour × its %.
5. Round by the rules below, and check the total.

If you are specified a *baked* weight (a loaf that must weigh 800 g), first convert: dough piece weight = baked weight ÷ (1 − bake loss).

### Worked example 1: twelve rolls

Twelve rolls at 80 g dough each; formula 100 / 68 / 2 / 0.7 % (total 170.7 %); process loss 2 %.

1. Dough needed = 12 × 80 = 960 g
2. Dough to mix = 960 ÷ 0.98 = 979.6 ≈ 980 g
3. Flour = 980 ÷ 1.707 = 574.1 g

| Ingredient | Baker's % | Grams |
|---|---|---|
| Bread flour | 100 | 574 |
| Water | 68 | 390 |
| Salt | 2 | 11.5 |
| Instant yeast | 0.7 | 4.0 |
| **Total** | **170.7** | **979.5** |

Each roll at ~15 % bake loss will weigh about 68 g baked.

### Worked example 2: a loaf that must weigh 800 g

Target 800 g baked; expected bake loss 12 %; process loss 2 %.

- Dough piece = 800 ÷ 0.88 = 909 g
- Dough to mix = 909 ÷ 0.98 = 928 g

Record the actual baked weight. If the loaf comes out at 780 g, your real bake loss was (909 − 780) ÷ 909 = 14.2 %; use 14 % next time.

<div class="callout key">

**Key idea:** Scale from the product backward, with losses, and then measure the losses you actually get. After a few bakes your loss figures are data, not guesses, and your yields become exact.

</div>

## Rounding rules

Rounding is where small batches go wrong. A rounding error of 0.5 g is nothing on flour and a disaster on yeast.

| Ingredient class | Round to | Why |
|---|---|---|
| Flour, water, milk, sugar, butter, eggs in doughs over ~300 g | 1 g | 0.5 g is < 0.2 % |
| Salt | 0.1 g | 0.5 g on 10 g is 5 %; you can taste 10 % |
| Instant yeast, fresh yeast | 0.1 g (0.01 g in test batches under ~250 g flour) | Fermentation time is roughly inversely related to yeast quantity; 0.5 g on 2 g yeast is 25 % |
| Baking powder, baking soda | 0.1 g (0.01 g in small batches) | Over-leavening gives soapy taste and collapse; under-leavening gives dense products |
| Gelatine, spices, diastatic malt, colours, flavour extracts | 0.01–0.1 g | Very potent per gram |

**Never round yeast or salt to whole grams in small batches.** 0.7 % instant yeast on 200 g flour is 1.4 g; rounding to 1 g cuts the yeast by 29 % and lengthens fermentation noticeably.

Always **check the total** after rounding: the grams should add up to the target within a few grams.

## What does not scale linearly

Ingredient weights scale linearly. Processes often do not.

| Process | What changes when you scale up | What to do |
|---|---|---|
| Mixing | Larger batch in the same mixer: longer mixing time, more friction heat, or the dough climbs the hook; a small batch may not engage the hook at all | Stay within the mixer's working range; re-measure the friction factor (lesson [01.3](stage-1/module-01/lesson-03.md)) |
| Fermentation | A larger mass of dough holds its temperature longer; a very small test batch drifts to room temperature faster | Control dough temperature; judge by volume |
| Baking | Larger or deeper products need lower temperatures and longer times; heat must travel further to the centre | Bake to internal temperature (lesson 01.3) |
| Cakes | Batter depth changes with pan size; very large cakes rise unevenly and dome | Scale by pan area and keep batter depth constant |
| Chemical leavening | In large batches held before baking, gas is lost | Covered in [08.2](stage-1/module-08/lesson-02.md) |

### Scaling to a different pan

Keep the batter *depth* constant by scaling with pan **area**.

- Round pan area = π × r²; ratio for round pans = (new diameter ÷ old diameter)².
- Rectangular pan area = length × width.

**Example.** A recipe for a 20 cm round pan, to be baked in a 24 cm round pan: factor = (24 ÷ 20)² = 1.44. A 20 cm recipe in a 20 × 20 cm square pan: square area 400 cm², round area 3.1416 × 10² = 314 cm², factor = 400 ÷ 314 = 1.27.

## The standardized formula sheet

A standardized formula is written so that someone else — or you in six months — can make the same product with no extra information. It is the unit of professional knowledge in a bakery and the output of your capstone. Use the [recipe template](templates/recipe-template.md); the essential fields are:

| Field | Content |
|---|---|
| Name, ID, version, date | "Lean rolls v3, 2026-10-12". Increment the version on every change. |
| Yield | Number of pieces × piece weight (dough and baked); total dough weight |
| Formula table | Ingredient · baker's % · grams · specification (brand, type, protein %, temperature) |
| Totals | Total formula %, total dough weight, hydration (true hydration if relevant) |
| Losses | Process loss %, bake loss % used and measured |
| Critical control points | DDT, fermentation time and volume target, proof test, oven temperature, internal temperature |
| Procedure | Numbered steps with times, temperatures and observable endpoints |
| Equipment and pans | Including pan dimensions in cm |
| Storage and shelf life | How long and at what temperature |
| Allergens | From lesson [00.3](stage-1/module-00/lesson-03.md) |
| Cost per unit | Below |
| Change log | What changed between versions and why (linked to bake-log IDs) |

## A first look at cost per unit

Knowing what a product costs is part of standardising it. Stage 1 keeps this simple: **ingredient cost only**. Labour, energy and packaging come in [18.2](stage-1/module-18/lesson-02.md).

> **Ingredient cost = Σ (grams used ÷ 1000 × price per kg)**; **cost per unit = total ingredient cost ÷ number of saleable units**

**Example: the twelve rolls** (prices are illustrative; use your own receipts).

| Ingredient | Grams | Price per kg | Cost |
|---|---|---|---|
| Bread flour | 574 | 1.50 | 0.861 |
| Water | 390 | 0.00 | 0.000 |
| Salt | 11.5 | 1.00 | 0.012 |
| Instant yeast | 4.0 | 20.00 | 0.080 |
| **Total** | | | **0.953** |

Cost per roll = 0.953 ÷ 12 = 0.079. If one roll is a reject, divide by 11: 0.087 — a reminder that yield losses are cost.

Two points already matter at home: yeast is expensive per kilogram but negligible per loaf, while flour dominates cost in lean bread; in pastry, butter, chocolate and nuts dominate, which is why weighing them precisely also matters financially.

## On the bench

1. Build a standardized formula sheet for the friction-factor test dough from [01.3](stage-1/module-01/lesson-03.md) (or any lean dough), sized for eight rolls of 70 g with 2 % process loss.
2. If you bake it, weigh each dough piece and each baked roll; compute your actual process loss and average bake loss.
3. Price your flour, butter, sugar and eggs per kg and store them in a small table in your notebook; you will reuse it.

## What goes wrong

| Symptom | Likely cause | Correction |
|---|---|---|
| Last piece short on weight | No process-loss allowance | Add 1–3 % (more for sticky doughs); measure your actual loss. |
| Scaled-down batch ferments much more slowly | Yeast rounded down; small mass cools faster | Keep yeast to 0.1 g or better; control dough temperature. |
| Scaled-up cake domes, cracks and is raw in the centre | Pan deeper/larger, same bake temperature | Scale by area to keep depth; lower temperature 10–15 °C and bake longer; check internal temperature. |
| Baked product lighter than specification | Bake loss underestimated | Measure bake loss; adjust piece weight. |
| Recipe cannot be reproduced by someone else | Missing specifications or endpoints on the sheet | Use every field of the standardized sheet. |

## Lab notebook

Record for every bake from now on: target and actual piece weights, total dough mixed, dough left over or short, baked weights, process and bake loss %. Keep your formula sheets versioned.

## Check yourself

1. You need 20 baguettes of 350 g dough each. Formula: 100 / 70 / 2 / 0.5 %. Process loss 2 %. How much flour?

<details class="answer"><summary>Answer</summary>

Dough needed 7000 g; dough to mix 7000 ÷ 0.98 = 7142.9 g; total formula 172.5 %; flour = 7142.9 ÷ 1.725 = 4140.8 ≈ 4141 g. Water 2899 g, salt 82.8 g, yeast 20.7 g. Check: 4141 + 2899 + 82.8 + 20.7 = 7143.5 g.

</details>

2. A loaf goes in the oven at 950 g and comes out at 820 g. What is the bake loss?

<details class="answer"><summary>Answer</summary>

(950 − 820) ÷ 950 = 13.7 %.

</details>

3. A test batch uses 150 g flour at 0.4 % instant yeast. How much yeast, and what happens if you round to 1 g?

<details class="answer"><summary>Answer</summary>

0.6 g. Rounding to 1 g is +67 % yeast; fermentation will run much faster than intended and the batch will not be comparable with its siblings in the experiment.

</details>

4. A recipe fills a 23 cm round pan. How much would you scale it for a 26 cm round pan?

<details class="answer"><summary>Answer</summary>

(26 ÷ 23)² = 1.278, so about ×1.28.

</details>

## Where this goes next

<div class="callout next">

**Next:** Backward scaling is used for every recipe in the course; bake loss is measured in [X1-11 Bake time and internal temperature](experiments/X1-11-bake-time.md); small-batch rounding is essential in every experiment from [X1-04](experiments/X1-04-hydration-series.md); the formula sheet, batch consistency and full costing are developed in [18.2 Standardization, batch consistency, costing and QC](stage-1/module-18/lesson-02.md) and become the deliverable of the [capstone](stage-1/capstone/README.md). **Stage 2** scales to production batches with mixer capacity limits and full recipe costing including labour and overhead; **Stage 3** treats the formula sheet as a controlled specification with tolerances, used in product development and transfer to production.

</div>

## Sources

- [Gisslen] — formula conversion, yield and scaling.
- [Hamelman] — scaling from dough weight and baker's percentage.
- [Suas] — yield, bake loss and formula presentation.
- [CIA-BP] — standardized recipes and costing in professional kitchens.
- Loss percentages are standard professional practice ranges; measure your own.
