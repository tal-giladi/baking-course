# M01 · Measurement and baker's math

## Purpose

Baking is formulation, and formulation is arithmetic on good measurements. This module gives you the quantitative toolkit every later module assumes: weighing everything in grams with the right scale, writing and reading formulas in baker's percentages, computing true hydration, hitting a desired dough temperature, and scaling a formula to any yield with realistic losses. You finish with calibrated instruments and a standardized formula sheet you will use for the rest of the course.

## Objectives

By the end of this module you can:

1. Weigh every ingredient with an appropriate scale and quantify why volume measurement fails.
2. Convert between grams and baker's percentages, including multi-flour formulas, and compute nominal and true hydration.
3. Calculate the water temperature for a desired dough temperature, and measure your own friction factor.
4. Scale a formula backward from pieces × piece weight with process and bake losses, and apply safe rounding rules.
5. Produce a standardized formula sheet with yield, critical control points and ingredient cost per unit.
6. Calibrate your scales and thermometers and map your oven.

## Lessons

| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| 01.1 | [Weighing everything: grams, scale resolution, why volume fails](stage-1/module-01/lesson-01.md) | 00.2 | — | T1 |
| 01.2 | [Baker's percentages, hydration and true hydration](stage-1/module-01/lesson-02.md) | 01.1 | [SC-01](stage-1/science/sc-01-water.md) | T1 |
| 01.3 | [Temperature as an ingredient: DDT, friction factor, measuring temperature](stage-1/module-01/lesson-03.md) | 01.2 | [SC-10](stage-1/science/sc-10-heat-transfer.md) | T1, T3 |
| 01.4 | [Scaling, yield, loss and the standardized formula sheet](stage-1/module-01/lesson-04.md) | 01.2 | — | T1, T11 |

## Practicals

No course recipe belongs to this module; the practical outputs are measurement skills and documents:

- Calibration records for your scales and thermometers and an oven map ([X1-02](experiments/X1-02-calibration.md)).
- A friction-factor test dough (lesson [01.3](stage-1/module-01/lesson-03.md)) — the same lean dough you will bake properly as [R1-01](recipes/R1-01-lean-loaf.md) in M03.
- Three of your own recipes converted to grams and baker's %, and one standardized formula sheet ([recipe template](templates/recipe-template.md)).

## Experiments

| ID | Experiment | Lesson |
|---|---|---|
| X1-01 | [Volume vs weight: how much is "a cup of flour"?](experiments/X1-01-volume-vs-weight.md) | 01.1 |
| X1-02 | [Calibrating the kitchen: scale, thermometers and an oven map](experiments/X1-02-calibration.md) | 00.2, 01.1, 01.3 |

## Science units

- [SC-01 Water: hydrogen bonds, free vs bound water, water activity](stage-1/science/sc-01-water.md) — first needed in 01.2.
- [SC-10 Heat transfer: conduction, convection, radiation](stage-1/science/sc-10-heat-transfer.md) — used again in 01.3 (first met in 00.2).

## Prerequisites and what depends on this module

- **Requires:** [M00](stage-1/module-00/README.md), specifically [00.2 Setting up the kitchen lab](stage-1/module-00/lesson-02.md).
- **Depended on by:** every formula in the course. Directly: [02.1 Wheat and flour](stage-1/module-02/lesson-01.md) requires 01.2; [03.2 The twelve steps of bread](stage-1/module-03/lesson-02.md) requires 01.3 (DDT); [07.1 Sugar is not just sweet](stage-1/module-07/lesson-01.md) requires 01.2; [18.2 Standardization, batch consistency, costing and QC](stage-1/module-18/lesson-02.md) requires 01.4. Every experiment from [X1-03](experiments/X1-03-gluten-wash.md) onward uses small-batch scaling and precision weighing.

## Assessment

[M01 assessment](stage-1/assessments/module-01-quiz.md) — heavy on formulation arithmetic: volume → grams, grams → baker's %, scaling, DDT and true hydration.

## Key terms

| Term | Definition |
|---|---|
| Resolution (readability) | The smallest increment a scale displays, e.g. 1 g or 0.01 g. |
| Accuracy | How close a measurement is to the true value; never better than resolution. |
| Tare | Zeroing the scale with a container on it so only the ingredient is weighed. |
| Creep (auto-zero tracking) | A scale's tendency to ignore small, slow additions by treating them as drift. |
| Baker's percentage | Each ingredient's weight as a percentage of total flour weight; flour = 100 %. |
| Total formula percentage | The sum of all baker's percentages; total dough ÷ (total % ÷ 100) gives the flour weight. |
| Hydration | Water as a percentage of flour weight. |
| True hydration | Hydration counting the water contained in every ingredient (milk ~87 %, egg ~75 %, butter ~16 %, honey ~17 %). |
| Desired dough temperature (DDT) | The target temperature of the dough at the end of mixing, set so that fermentation times are predictable. |
| Friction factor | The temperature rise caused by mixing, determined empirically for a given mixer, speed, time and batch. |
| Base temperature method | Water temperature = DDT × N − (sum of other temperatures), with N = 3 for straight doughs, 4 with a preferment. |
| Ice point | 0 °C in an ice–water slurry; the most reliable home thermometer reference. |
| Coefficient of variation (CV) | Standard deviation ÷ mean × 100 %; a unit-free measure of repeatability. |
| Scaling factor | New quantity ÷ original quantity; applied to every ingredient. |
| Process loss | Dough lost to bowl, tools, bench and trimming between mixing and dividing, typically 1–3 %. |
| Bake loss | Weight lost in the oven as a percentage of dough weight; about 10–20 % for bread. |
| Yield | The number and weight of finished pieces a formula produces. |
| Standardized formula | A versioned formula sheet with yield, specifications, critical control points and procedure complete enough for anyone to reproduce the product. |
| Ingredient cost per unit | Sum of (grams × price per gram) for all ingredients, divided by the number of saleable pieces. |

## Time estimate

About 1 week (with M00): 3–4 hours reading, 3–4 hours bench work (calibration, X1-01, friction-factor dough), 2 hours of formula exercises and the assessment.
