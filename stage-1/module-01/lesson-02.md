# 01.2 · Baker's percentages, hydration and true hydration

<div class="prereq">

**Requires:** [01.1 Weighing everything](stage-1/module-01/lesson-01.md)
**Science:** [SC-01 Water](stage-1/science/sc-01-water.md)
**Practical:** convert three of your own recipes to baker's % on the [formula sheet](templates/recipe-template.md)
**Threads:** T1 Measurement & formulation math  **Time:** 50 min reading + 1 h exercises

</div>

## Why this lesson exists

A professional baker does not remember recipes; they remember formulas, as percentages. "68 % water, 2 % salt, 0.7 % instant yeast" tells you what kind of dough it is, lets you scale it to any batch size in seconds, and lets you compare it with any other bread formula at a glance. Baker's percentages are the language of every bread text and most professional pastry texts, and of every experiment in this course. This lesson teaches the language and one important dialect: *true hydration*, the actual water content of doughs that contain milk, eggs, butter or honey.

## You will be able to

1. Express any formula in baker's percentages, including formulas with several flours.
2. Convert a baker's-% formula to grams for any target dough weight.
3. Compute nominal and true hydration, using the water content of milk, eggs, butter and honey.
4. Use baker's % for cakes and pastry, and recognise where it stops being useful.
5. Read a formula and predict the dough's character from its percentages.

## The rule: flour = 100 %

In baker's percentage, **each ingredient is expressed as a percentage of the total flour weight**. Flour is always 100 %.

> **Baker's % of an ingredient = ingredient weight ÷ total flour weight × 100**

The percentages therefore add up to *more* than 100 %. The sum is the **total formula percentage**, and it is the key to scaling.

### Worked example 1: grams to baker's %

| Ingredient | Grams | Baker's % |
|---|---|---|
| Bread flour | 500 | 100.0 |
| Water | 350 | 70.0 |
| Salt | 10 | 2.0 |
| Instant yeast | 5 | 1.0 |
| **Total** | **865** | **173.0** |

Reading it: 70 % hydration (a medium-soft dough), 2 % salt (standard for bread), 1 % instant yeast (a fairly quick straight dough — about 1.5–2 hours bulk at 25 °C).

Why flour, not total weight? Because flour is the structural base of bread and most doughs, and nearly every property you care about scales with it: water absorption, salt level, yeast activity per unit of food. Expressed on flour, a 2 % salt level means the same thing in a 300 g test batch and a 50 kg production batch, and "70 % hydration" means the same everywhere.

### Several flours

When a formula uses more than one flour (or other cereal meals counted as flour: whole wheat, rye, spelt), **their sum is 100 %**.

| Ingredient | Grams | Baker's % |
|---|---|---|
| Bread flour | 400 | 80.0 |
| Whole-wheat flour | 100 | 20.0 |
| *Total flour* | *500* | *100.0* |
| Water | 375 | 75.0 |
| Salt | 10 | 2.0 |
| Instant yeast | 4 | 0.8 |
| **Total** | **889** | **177.8** |

Whether an ingredient counts as "flour" is a convention. Whole-grain flours and meals count. Starches (cornflour), nut flours and cocoa normally do not in bread formulas; in some pastry texts they are grouped with flour. State your convention on the formula sheet.

<div class="callout key">

**Key idea:** In a baker's-% formula every ingredient is a ratio to one reference. Change the batch size and the percentages do not change. Change a percentage and you have changed the product.

</div>

## Percentages back to grams

To make a given amount of dough:

> **Flour weight = total dough weight ÷ (total formula % ÷ 100)**

then each ingredient = flour weight × its percentage.

### Worked example 2: 1800 g of dough

You want two loaves of 900 g dough each from this formula: flour 100 %, water 68 %, salt 2 %, instant yeast 0.7 %. Total = 170.7 %.

Flour = 1800 ÷ 1.707 = 1054.5 g

| Ingredient | Baker's % | Calculation | Grams |
|---|---|---|---|
| Flour | 100 | 1054.5 × 1.00 | 1054 |
| Water | 68 | 1054.5 × 0.68 | 717 |
| Salt | 2 | 1054.5 × 0.02 | 21.1 |
| Instant yeast | 0.7 | 1054.5 × 0.007 | 7.4 |
| **Total** | **170.7** | | **≈ 1800** |

Round flour and water to 1 g; keep salt and yeast to 0.1 g (lesson [01.4](stage-1/module-01/lesson-04.md) covers rounding and dough loss — in practice you add 1–3 % for dough left in the bowl).

### Worked example 3: correcting an overshoot

You meant to add 350 g water to 500 g flour (70 %) but poured 372 g. To keep the formula, raise the flour to match: flour = 372 ÷ 0.70 = 531 g, so add 31 g flour, and recompute salt (2 % × 531 = 10.6 g) and yeast. Record the actual weights.

## Hydration

**Hydration** is the water as a percentage of flour: in a lean dough, just the water's baker's percentage. It is the single most informative number in a bread formula.

| Hydration | Typical products | Dough behaviour |
|---|---|---|
| 50–58 % | Bagels, pretzels, some enriched doughs | Stiff, dry to the touch, needs strong mixing |
| 58–65 % | Sandwich loaves, rolls, pizza (lower end) | Firm, easy to shape |
| 65–72 % | Baguettes, basic hearth breads | Soft, slightly tacky, the "central" zone of this course |
| 72–80 % | Rustic hearth breads, ciabatta (lower end), many sourdoughs | Slack, sticky, needs folds instead of intensive kneading; open crumb |
| 80 % + | Ciabatta, high-hydration pan breads, some whole-grain doughs | Very slack; handled with wet hands and scrapers |

The same hydration feels different with different flours: whole-wheat and high-protein flours absorb more water, so 75 % whole-wheat can handle like 68 % white. You will explore this in [02.3](stage-1/module-02/lesson-03.md) and [X1-04 Hydration series](experiments/X1-04-hydration-series.md).

### True hydration: counting all the water

Milk, eggs, butter and honey contain water, and that water hydrates flour just as tap water does. **Nominal** hydration (as some recipes quote it) counts only the added water or the added liquids; **true hydration** counts the water in every ingredient.

| Ingredient | Approximate water content | Notes |
|---|---|---|
| Water | 100 % | |
| Whole milk | 87 % | ~3.5 % fat, ~5 % lactose, ~3.3 % protein |
| Whole egg (out of shell) | 75 % | White ~88 %, yolk ~50 % |
| Butter | 16 % | ~80–82 % fat; European-style butter has a little less water |
| Honey | 17 % | ~80 % sugars |
| Cream (35 % fat) | ~58 % | |
| Fresh yeast | ~70 % | Usually ignored at < 3 % |

True hydration = (sum of water from all ingredients) ÷ flour × 100.

### Worked example 4: an enriched dough

| Ingredient | Grams | Baker's % | Water fraction | Water (g) |
|---|---|---|---|---|
| Flour | 500 | 100.0 | — | — |
| Whole milk | 200 | 40.0 | 0.87 | 174.0 |
| Whole egg | 100 | 20.0 | 0.75 | 75.0 |
| Butter | 60 | 12.0 | 0.16 | 9.6 |
| Honey | 30 | 6.0 | 0.17 | 5.1 |
| Salt | 9 | 1.8 | — | — |
| Instant yeast | 6 | 1.2 | — | — |
| **Total** | **905** | **181.0** | | **263.7** |

- Nominal "liquid" hydration (milk + egg) = 300 ÷ 500 = 60 %.
- True hydration = 263.7 ÷ 500 = **52.7 %**.

The dough will feel softer than a 53 % lean dough, because fat and sugar also soften it and interfere with gluten (lesson [06.1](stage-1/module-06/lesson-01.md)). But if you replaced the milk with 200 g of water, true hydration would rise to 58.6 % (200 + 75 + 9.6 + 5.1 = 289.7 g) and the dough would be noticeably slacker. True hydration is what lets you swap liquids without changing the dough.

<div class="callout science">

**Science:** Water is not all equally available. Sugar and salt bind water and reduce the amount free to hydrate gluten and starch (water activity, [SC-01](stage-1/science/sc-01-water.md)). This is why an enriched dough with 10–15 % sugar behaves as if it were drier than its true hydration suggests, and why sugar slows fermentation.

</div>

## Reading a formula at a glance

With practice you read a formula like a specification. Typical ranges for lean bread:

| Ingredient | Typical range | Moves you within the range |
|---|---|---|
| Water | 60–80 % | Flour protein and bran; desired crumb; handling skill |
| Salt | 1.8–2.2 % | Taste; below ~1.5 % dough is slack and bland, above ~2.5 % noticeably salty and fermentation slows |
| Instant yeast | 0.2–1.5 % | Fermentation time and temperature (lesson [03.3](stage-1/module-03/lesson-03.md)) |
| Fresh yeast (if used) | ≈ 3 × instant yeast | Fresh yeast is ~70 % water; rule of thumb 1 : 0.4 : 0.33 for fresh : active dry : instant |
| Sugar (enriched) | 0–20 % | Sweetness, browning; above ~10 % yeast slows (M06) |
| Fat (enriched) | 0–60 % | Tenderness; brioche is 40–70 % butter |

## Baker's % beyond bread

Cakes, cookies and pastry are also written in baker's %, still on flour = 100 %. A classic pound cake (quatre-quarts) is 100 % flour, 100 % sugar, 100 % butter, 100 % egg. "High-ratio" cakes have sugar above 100 % of flour. Cake formula balance (lesson [10.1](stage-1/module-10/lesson-01.md)) is expressed this way: sugar vs flour, liquid vs sugar, egg vs fat.

The limits:

- **When flour is minor or absent** — meringue, custard, ganache, mousse, flourless chocolate cake — a percentage on flour is meaningless or unstable (1 g of flour becomes a huge divisor). Use **percent of total formula weight** (each ingredient ÷ total × 100, summing to 100 %) or ratios to the key ingredient (ganache as chocolate : cream, meringue as sugar : egg white).
- **Components are separate formulas.** A fruit tart is a sucrée, a pâtissière and a glaze. Each has its own formula; do not express the pâtissière on the tart dough's flour.
- **Flour is not always the structural base.** In a génoise, egg is the main structure builder; flour % still works for scaling but tells you less about the product.

## On the bench

1. Convert three recipes you use (at least one bread and one cake or cookie) to grams and baker's %, on the [formula sheet](templates/recipe-template.md).
2. For any recipe with milk, eggs or butter, compute nominal and true hydration.
3. Make 1000 g of a 70 % lean dough (no need to bake it yet) and 1000 g of a 60 % dough, and feel the difference. Or keep this for [X1-04](experiments/X1-04-hydration-series.md).

## What goes wrong

| Error | Symptom | Correction |
|---|---|---|
| Percentages computed on total weight instead of flour | "2 % salt" of total dough is ~3.5 % on flour in a 173 % formula — a very salty bread; comparisons with other formulas fail | Always divide by total flour. |
| Only one of several flours set to 100 % | Formula totals and hydrations are inconsistent | All flours together = 100 %. |
| Ignoring water in milk and eggs when swapping liquids | Dough much slacker or stiffer than expected | Compute true hydration before and after the swap. |
| Rounding yeast or salt to whole grams in small batches | Fermentation runs off target | Keep to 0.1 g (lesson [01.4](stage-1/module-01/lesson-04.md)). |

## Lab notebook

For every bake from now on, write the formula in baker's % *and* grams, with total formula % and hydration (true hydration when relevant).

## Check yourself

1. A formula lists flour 750 g, water 540 g, salt 15 g, instant yeast 4.5 g. Give the baker's percentages and the total formula percentage.

<details class="answer"><summary>Answer</summary>

Water 540 ÷ 750 = 72 %; salt 2 %; yeast 0.6 %; total 174.6 %. Total dough 1309.5 g.

</details>

2. How much flour do you need for 2400 g of dough at 100 / 65 / 2 / 1 %?

<details class="answer"><summary>Answer</summary>

Total 168 %. Flour = 2400 ÷ 1.68 = 1428.6 g ≈ 1429 g; water 929 g; salt 28.6 g; yeast 14.3 g. Check: 1429 + 929 + 28.6 + 14.3 = 2400.9 g.

</details>

3. A brioche has 500 g flour, 300 g whole egg, 50 g milk and 250 g butter. What is its true hydration?

<details class="answer"><summary>Answer</summary>

Water: egg 300 × 0.75 = 225 g; milk 50 × 0.87 = 43.5 g; butter 250 × 0.16 = 40 g; total 308.5 g. True hydration = 308.5 ÷ 500 = 61.7 %.

</details>

4. Why is a ganache not usually written in baker's %?

<details class="answer"><summary>Answer</summary>

It contains no flour, so there is no reference. It is written as a ratio (for example dark chocolate : cream 1 : 1 for a glaze, 2 : 1 for firm truffles) or as percent of total weight.

</details>

5. Two recipes: A is 65 % hydration with bread flour; B is 65 % with a weak all-purpose flour. Which dough will feel slacker, and why?

<details class="answer"><summary>Answer</summary>

B. Lower-protein flour absorbs less water and forms a weaker gluten network, so at the same hydration more water is "free" and the dough is slacker and stickier (lessons 02.1–02.3).

</details>

## Where this goes next

<div class="callout next">

**Next:** Baker's % is used in every formula from here on; hydration is the variable in [02.3 Water and starch](stage-1/module-02/lesson-03.md) and [X1-04](experiments/X1-04-hydration-series.md); preferment flour and water in the overall formula come in [05.1 Preferments](stage-1/module-05/lesson-01.md); true hydration matters in [06.1 What enrichment does](stage-1/module-06/lesson-01.md); cake balance ratios are in [10.1](stage-1/module-10/lesson-01.md). **Stage 2** uses the overall-formula method for multi-stage doughs (levain + poolish + final dough); **Stage 3** uses formulas as design variables in response-surface experiments and formula optimisation.

</div>

## Sources

- [Hamelman] — baker's percentage, overall formula and hydration in bread.
- [Suas] — baker's percentage and formula presentation.
- [Gisslen] — baker's percentages for bread and cakes; cake formula balance.
- [Figoni] — water content of ingredients and their functions.
- [McGee] — composition of milk, eggs and butter.
- Water-content values are approximate compositional averages used in standard professional practice.
