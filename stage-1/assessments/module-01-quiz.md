# M01 assessment · Measurement and baker's math

Covers [01.1](stage-1/module-01/lesson-01.md), [01.2](stage-1/module-01/lesson-02.md), [01.3](stage-1/module-01/lesson-03.md), [01.4](stage-1/module-01/lesson-04.md) and experiments [X1-01](experiments/X1-01-volume-vs-weight.md) and [X1-02](experiments/X1-02-calibration.md). Work every calculation in your notebook before opening the answer. Pass standard: 80 % of section A; every exercise in B correct to within rounding; a reasoned diagnosis in C; a controlled design in D; every "must" criterion in E.

Water-content values to use: whole milk 87 %, whole egg 75 %, egg yolk 50 %, butter 16 %, honey 17 %.

## A. Knowledge check

1. Why is a 1 g-resolution scale adequate for flour but not for yeast?

<details class="answer"><summary>Answer</summary>

The error that matters is relative. ±1 g on 500 g flour is 0.2 %; ±1 g on 2 g yeast is 50 %. Use a 0.1 g or 0.01 g scale for anything under about 20 g, and always for yeast, salt and leaveners.

</details>

2. In X1-01, which usually differs more: two repeats of the same filling method by one person, or the two filling methods? What does that mean for following someone else's cup-based recipe?

<details class="answer"><summary>Answer</summary>

The methods differ much more (typically 10–20 %) than repeats within a method (CV of a few %). Someone else's recipe was made with their method and their cup, so you inherit the between-method error — which can shift hydration by several percentage points.

</details>

3. Define baker's percentage. What do the percentages of a multi-flour formula's flours add up to?

<details class="answer"><summary>Answer</summary>

Each ingredient's weight as a percentage of total flour weight. All flours together = 100 %.

</details>

4. What is the difference between nominal and true hydration?

<details class="answer"><summary>Answer</summary>

Nominal hydration counts only the added water (or the named liquids). True hydration counts all the water from every ingredient — milk, eggs, butter, honey — as a percentage of flour.

</details>

5. Why is the friction factor measured rather than taken from a table?

<details class="answer"><summary>Answer</summary>

It depends on mixer, speed, time, batch size and hydration, and it absorbs the error of the simplified "× 3" averaging rule. A tabled value is only a starting point; your measured value is what makes the calculation hit the DDT.

</details>

6. A book gives a friction factor of 30 °F. What value do you use in the °C formula?

<details class="answer"><summary>Answer</summary>

30 ÷ 1.8 = 16.7 °C. It is a temperature difference: divide by 1.8, do not subtract 32.

</details>

7. What does an IR thermometer measure, and name one good and one bad use.

<details class="answer"><summary>Answer</summary>

Surface temperature, from emitted infrared radiation. Good: baking-stone surface, marble slab, pan. Bad: dough core, bread doneness, custard — anything internal. Shiny metal also reads wrongly.

</details>

8. Why should instant yeast never be rounded to whole grams in a batch of 250 g flour?

<details class="answer"><summary>Answer</summary>

At 0.5–1 % it is 1.25–2.5 g; rounding changes it by 20–60 %, and fermentation time changes roughly in proportion. Round to 0.1 g (0.01 g in small test batches).

</details>

9. What is bake loss, and what typical range applies to bread?

<details class="answer"><summary>Answer</summary>

(Dough weight − baked weight) ÷ dough weight × 100. About 10–20 % for bread: lower for large loaves, higher for rolls and baguettes and for longer, darker bakes.

</details>

10. To move a cake recipe from a 20 cm to a 25 cm round pan with the same batter depth, what factor do you use?

<details class="answer"><summary>Answer</summary>

(25 ÷ 20)² = 1.5625 ≈ 1.56.

</details>

## B. Formulation exercises

**B1. Volume to grams, then baker's %.** A recipe reads: 3½ cups bread flour, 1½ cups water, 2 tsp table salt, 2¼ tsp instant yeast. Convert to grams using 130 g per cup of bread flour, 237 g per cup of water, 6 g per tsp of table salt and 3 g per tsp of instant yeast. Then give the baker's %. What does the hydration suggest about how the author measured their flour?

<details class="answer"><summary>Answer</summary>

| Ingredient | Grams | Baker's % |
|---|---|---|
| Bread flour | 3.5 × 130 = 455 | 100 |
| Water | 1.5 × 237 = 355.5 ≈ 356 | 78.2 |
| Salt | 2 × 6 = 12.0 | 2.6 |
| Instant yeast | 2.25 × 3 = 6.8 | 1.5 |
| **Total** | **829.8** | **182.3** |

78 % hydration and 2.6 % salt are high for a basic sandwich-style recipe. The author probably used a heavier cup (dip-and-sweep, ~145 g): 3.5 × 145 = 507.5 g flour gives 70 % hydration and 2.4 % salt. Make the first bake at 130 g/cup only if you want a slack dough; otherwise test ~145 g/cup and record the assumption.

</details>

**B2. Grams to baker's %.** Compute the baker's percentages, total formula % and hydration for:

| Ingredient | Grams |
|---|---|
| Bread flour | 720 |
| Whole-wheat flour | 180 |
| Water | 657 |
| Salt | 18 |
| Instant yeast | 5.4 |
| Olive oil | 27 |

<details class="answer"><summary>Answer</summary>

Total flour = 900 g.

| Ingredient | Grams | Baker's % |
|---|---|---|
| Bread flour | 720 | 80.0 |
| Whole-wheat flour | 180 | 20.0 |
| Water | 657 | 73.0 |
| Salt | 18 | 2.0 |
| Instant yeast | 5.4 | 0.6 |
| Olive oil | 27 | 3.0 |
| **Total** | **1607.4** | **178.6** |

Hydration 73 % (oil is not counted as water).

</details>

**B3. Scaling 500 g flour → 2 kg flour.** Scale this formula to 2 kg flour. Then: with 2 % process loss, how many 550 g loaves can you divide, and how much dough is left?

| Ingredient | Grams |
|---|---|
| Bread flour | 500 |
| Water | 325 |
| Salt | 10 |
| Instant yeast | 3 |
| Butter | 25 |
| Sugar | 20 |

<details class="answer"><summary>Answer</summary>

Factor = 2000 ÷ 500 = 4.

| Ingredient | Original (g) | × 4 (g) | Baker's % |
|---|---|---|---|
| Bread flour | 500 | 2000 | 100 |
| Water | 325 | 1300 | 65 |
| Salt | 10 | 40 | 2 |
| Instant yeast | 3 | 12 | 0.6 |
| Butter | 25 | 100 | 5 |
| Sugar | 20 | 80 | 4 |
| **Total** | **883** | **3532** | **176.6** |

Usable dough = 3532 × 0.98 = 3461 g. 3461 ÷ 550 = 6.29 → **6 loaves** (3300 g), about **161 g** left over — enough for two small rolls. If you need exactly six loaves, you could reduce the batch: 6 × 550 ÷ 0.98 = 3367 g dough → flour = 3367 ÷ 1.766 = 1907 g.

</details>

**B4. Water temperature for a DDT.** (a) Straight dough, stand mixer: DDT 25 °C, flour 19 °C, room 20 °C, friction factor 12 °C. (b) Same, but with a levain at 24 °C added. (c) Summer: DDT 25 °C, flour 27 °C, room 29 °C, friction 12 °C — what water temperature, and how do you achieve it?

<details class="answer"><summary>Answer</summary>

(a) 25 × 3 − (19 + 20 + 12) = 75 − 51 = **24 °C**.

(b) 25 × 4 − (19 + 20 + 24 + 12) = 100 − 75 = **25 °C**.

(c) 75 − (27 + 29 + 12) = 75 − 68 = **7 °C**. Refrigerated water (4–7 °C) just reaches it; to have margin, replace part of the water with the same weight of crushed ice, chill the flour, or reduce friction with a shorter or slower mix. Check the actual dough temperature and record it.

</details>

**B5. True hydration of an enriched dough.** A challah formula:

| Ingredient | Grams |
|---|---|
| Bread flour | 1000 |
| Water | 250 |
| Whole egg | 250 |
| Egg yolk | 80 |
| Vegetable oil | 120 |
| Honey | 80 |
| Sugar | 40 |
| Salt | 20 |
| Instant yeast | 12 |

(a) What is the true hydration? (b) What is the "liquid" hydration if you count water, whole egg and yolk as liquid? (c) You want to replace all the water with whole milk and keep the true hydration unchanged. How much milk?

<details class="answer"><summary>Answer</summary>

(a) Water: 250 + (250 × 0.75 = 187.5) + (80 × 0.50 = 40.0) + (80 × 0.17 = 13.6) = 491.1 g. Oil contains essentially no water; sugar and salt none. True hydration = 491.1 ÷ 1000 = **49.1 %**.

(b) (250 + 250 + 80) ÷ 1000 = **58 %**.

(c) Milk must supply 250 g of water: 250 ÷ 0.87 = **287 g milk**. (The dough will also gain ~37 g of milk solids — lactose, protein and fat — which soften the crumb and increase browning.)

</details>

## C. Troubleshooting case

**Case 1.** A learner converted a family bread recipe from cups using 125 g per cup of flour. The dough was so slack it could not be shaped and spread into a flat disc. A second attempt, weighed identically, did the same. The family member who wrote the recipe makes good loaves with it. Diagnose, and say how you would confirm it.

<details class="answer"><summary>Answer</summary>

The author's cup almost certainly weighs more than 125 g (dip-and-sweep or packed flour, 140–160 g), so the converted formula has far more water relative to flour than the original. Confirm by having the author measure a cup of flour their way and weighing it (X1-01), or by weighing their flour for a whole batch. Correct: recompute with their cup weight, express in baker's %, and check that hydration falls in the expected range for the bread type (typically 60–70 % for a family loaf).

</details>

**Case 2.** On a hot day (kitchen 30 °C), a learner made the course's lean dough exactly as on a previous bake in a 21 °C kitchen: same water temperature (25 °C), same yeast weighed to 0.1 g, same times. The dough was slack and sticky at shaping, the loaf spread, and it smelled of alcohol with a pale crust. Diagnose.

<details class="answer"><summary>Answer</summary>

Dough temperature was far above target because the water was not recalculated: with flour and room at ~30 °C and a friction factor of ~10 °C, a 25 °C water gives a dough near 32 °C instead of 25 °C. Fermentation ran much faster, so by the recipe's times the dough was over-fermented: gluten weakened (slack, sticky), much sugar consumed (pale crust), alcohol smell, weak structure (spreading). Confirm from the log (actual dough temperature). Correct: calculate water temperature for the DDT (here close to 5 °C, needing ice or chilled flour), judge bulk by volume rather than the clock, and ferment somewhere cooler.

</details>

## D. Experimental design

**Hypothesis:** "My stand mixer's friction factor increases with batch size." Design an experiment to test this, so that the result is useful for choosing water temperature in future.

<details class="answer"><summary>Answer</summary>

A good design:

- **Independent variable:** batch size, e.g. 500 g, 1000 g and 1500 g of flour (within the mixer's working range), at a fixed formula (100 / 70 / 2 / 1 %).
- **Controlled:** same flour lot, same mixing programme (e.g. 3 min speed 1 + 6 min speed 2), same hook and bowl, same starting temperatures as far as possible (flour and water from the same storage, water at a fixed temperature such as 22 °C), same room.
- **Measurements:** flour, room and water temperatures before mixing; dough core temperature immediately after mixing; compute friction factor = dough temperature × 3 − (flour + room + water).
- **Replication:** at least two runs per batch size on different days; randomise the order.
- **Analysis:** plot friction factor against batch size; if the difference between sizes is larger than the day-to-day spread, the hypothesis is supported. Record a friction-factor table by batch size and mixing time for future DDT calculations.
- **Watch for confounds:** larger batches may need longer mixing to reach the same development; decide whether you are testing "same programme" or "same development" and keep it fixed.

</details>

## E. Practical assessment

**Task:** Produce a standardized formula sheet for eight lean rolls of 70 g dough (formula 100 / 68 / 2 / 0.8 %, 2 % process loss), mix the dough to a DDT of 25 °C, divide it, and bake it. Calculated answer to check yourself against: dough to mix = 560 ÷ 0.98 = 571 g; flour = 571 ÷ 1.708 = 334 g; water 227 g; salt 6.7 g; yeast 2.7 g.

| Criterion | Standard | Must / should |
|---|---|---|
| Instruments | Scales and thermometers checked (X1-02) with offsets recorded | Must |
| Formula sheet | Complete per the [recipe template](templates/recipe-template.md): baker's %, grams, total, yield, losses, CCPs, version | Must |
| Arithmetic | Grams correct to within rounding; salt and yeast to 0.1 g | Must |
| Water temperature | Calculated from DDT with your measured friction factor; shown on the sheet | Must |
| Dough temperature | Actual dough temperature within ±1 °C of 25 °C | Must |
| Piece weights | All eight pieces 70 g ± 2 g | Must |
| Losses | Process loss and bake loss measured and recorded | Must |
| Cost | Ingredient cost per roll calculated | Should |
| Bake | Rolls baked to 96–99 °C internal; log complete with observations and "what to change" | Should |
