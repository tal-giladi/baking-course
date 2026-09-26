# X1-01 · Volume vs weight: how much is "a cup of flour"?

**Module:** [M01 Measurement and baker's math](stage-1/module-01/README.md) · **Lesson:** [01.1 Weighing everything](stage-1/module-01/lesson-01.md) · **Threads:** T1 Measurement · T12 Experimental method · **Time:** 45–60 min

## Question

How much does "one cup of flour" actually weigh when you measure it, how much does that change with the filling method, and how repeatable is each method? Put numbers on the claim that volume measurement is unreliable.

## Before you start: write your hypothesis

In your notebook, before measuring anything, write down:

1. Your predicted mean weight of one cup of all-purpose flour by the **spoon-and-level** method, and by the **dip-and-sweep** method.
2. Which method you expect to be more *repeatable* (smaller spread), and why.
3. How large you expect the difference between the two methods to be, in grams and as a percentage.

## Variables

| Type | Variable | How it is handled |
|---|---|---|
| Independent | Filling method: (A) spoon-and-level, (B) dip-and-sweep | Five repeats of each |
| Dependent | Mass of flour in the cup (g) | Weighed on the 1 g scale (0.1 g if your precision scale has the capacity) |
| Controlled | Flour (same bag, same type) | All-purpose or plain flour, one bag |
| Controlled | Measuring cup | The same dry-measure cup (US cup ≈ 237 mL, or a 250 mL metric cup — note which) |
| Controlled | Operator | You; optional second operator as an extension |
| Controlled | Flour condition | Stir the flour in its container before each method, not between repeats; do not sift |
| Controlled | Levelling tool | Straight edge of a knife or bench scraper |

## Batch and scale

No baking. You need about 1 kg of all-purpose flour in a wide container (so the cup can be dipped), a dry-measure cup, a spoon, a straight edge, a bowl, and the scale. Flour is returned to its container after each weighing, so nothing is used up (use it within the normal life of the flour; it is not contaminated as long as tools are clean and dry).

| Scale-up | What to add | Flour needed |
|---|---|---|
| ×1 (base) | 2 methods × 5 repeats, one operator | ~1 kg, reused |
| ×2 | Add a third method: (C) sifted into the cup, levelled | ~1 kg, reused |
| ×2.5 | Add a second operator doing methods A and B (5 repeats each) | ~1 kg, reused |
| ×3 | Repeat A and B with bread flour and whole-wheat flour | ~1 kg of each |

## Procedure

1. Stir and loosen the flour in its container with a spoon for 10 s. Do not pack it.
2. Place the empty bowl on the scale and tare.
3. **Method A — spoon and level:** hold the cup over a plate; spoon flour lightly into the cup until it mounds above the rim. Do not tap or shake the cup. Sweep the excess off with the straight edge in one pass. Tip the cup into the tared bowl, tapping out any flour stuck inside. Record the mass.
4. Return the flour to the container. Tare the bowl again.
5. Repeat step 3 four more times (A1–A5). Do not re-stir between repeats.
6. Stir the flour again for 10 s.
7. **Method B — dip and sweep:** push the cup into the flour to fill it, lift it out mounded, and level with one pass of the straight edge. Do not tap. Weigh as above. Repeat five times (B1–B5).
8. If running extensions, repeat for methods, operators or flours, labelling each series.
9. Compute the statistics (below).

## Measurements

| What | How | Tool |
|---|---|---|
| Mass per cup | Tared bowl, cup emptied fully | Main scale (1 g) or precision scale if capacity ≥ 200 g |
| Cup volume (optional) | Fill the cup with water to the brim and weigh; 1 g ≈ 1 mL | Main scale |
| Mean | x̄ = (x₁ + … + x₅) ÷ 5 | Calculator or spreadsheet |
| Standard deviation (sample) | s = √[Σ(xᵢ − x̄)² ÷ (n − 1)] | Spreadsheet `STDEV.S` |
| Coefficient of variation | CV = s ÷ x̄ × 100 % | Calculator |
| Method difference | (x̄_B − x̄_A) ÷ x̄_A × 100 % | Calculator |

## Observation sheet

Flour: ____________ (brand, type, protein %) · Cup: ______ mL · Operator: ______ · Date: ______ · Room: ____ °C

| Repeat | A: spoon-and-level (g) | B: dip-and-sweep (g) | C: sifted (optional, g) |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| **Mean x̄** | | | |
| **SD s** | | | |
| **CV %** | | | |
| **Min – max** | | | |

Difference B vs A: ______ g = ______ %

Hydration effect: if a recipe says 4 cups flour and 316 g water, hydration with A = ______ %, with B = ______ %.

Notes (anything that varied: cup overfilled, flour compacted, spill):

## Analysis questions

1. Which method gave the higher mean, and by how much (g and %)? Explain the mechanism.
2. Which method was more repeatable (lower CV)? Was the difference in CV larger or smaller than the difference in means?
3. Suppose a recipe author used method B and you use method A. Using your means, what hydration do you get for a recipe written as 4 cups of flour and 316 g water, compared with what the author got?
4. Compare your CV with the error of a 1 g scale on 500 g of flour (±0.2 %). How many times worse is volume measurement *for one operator*? Between operators (if you ran the extension)?
5. What would you need to specify in a recipe to make volume measurement reproducible? Why is that impractical?

<details class="answer"><summary>What you should expect to see</summary>

**Typical results** (US 237 mL cup, all-purpose flour, one operator):

| Method | Typical mean | Typical CV (one operator) |
|---|---|---|
| Sifted into cup | 110–120 g | 2–4 % |
| Spoon and level | 120–135 g | 2–4 % |
| Dip and sweep | 135–155 g | 1.5–4 % |

- **Dip-and-sweep weighs about 10–20 % more** than spoon-and-level. Pushing the cup through the flour compresses it; spooning drops loose flour with more air between particles. Flour is a cohesive, compressible powder — its bulk density depends on its packing history.
- **Within one method, one operator is usually fairly consistent** (CV of a few %), often surprisingly so. The big error is *between methods and between operators*, which is exactly the situation when you follow someone else's recipe. Two people measuring "a cup" can differ by 20–30 g.
- **Hydration example:** 4 cups × 128 g (A) = 512 g → 316 ÷ 512 = 62 %; 4 cups × 145 g (B) = 580 g → 54.5 %. A 7-point hydration difference is the difference between a soft sandwich dough and a stiff bagel dough.
- **Versus weighing:** a CV of 3 % is 15 times the ±0.2 % error of a 1 g scale on 500 g — and that is before the between-method difference, which is larger still.

**Worked statistics example.** A: 124, 129, 126, 131, 127 g. Mean = 637 ÷ 5 = 127.4 g. Deviations: −3.4, 1.6, −1.4, 3.6, −0.4; squares 11.56, 2.56, 1.96, 12.96, 0.16; sum 29.2; ÷ 4 = 7.3; s = 2.70 g; CV = 2.70 ÷ 127.4 = 2.1 %.

**Conclusion:** a volume recipe is only reproducible by the person who wrote it, with their method. Weighing removes packing from the problem entirely. That is why every formula in this course is in grams.

</details>

## Going further

- Repeat with icing sugar and brown sugar (packed vs loose).
- Measure 10 teaspoons each of two salts (fine table salt and a flaky salt); compute the mass ratio. This shows why salt must never be substituted by volume.
- Have three people each do method B five times; compute the between-operator spread using the three means. This is a first look at measurement-system analysis, formalised in [SC-14](stage-1/science/sc-14-measurement-sensory.md).

## Used in

- [01.1 Weighing everything: grams, scale resolution, why volume fails](stage-1/module-01/lesson-01.md)
- [M01 assessment](stage-1/assessments/module-01-quiz.md)
