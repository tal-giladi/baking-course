# SC-14 · Measurement, sensory evaluation and variability

<div class="prereq">

**First needed in:** [18.2 Standardization, batch consistency, costing and quality control](stage-1/module-18/lesson-02.md)
**Also used in:** [19.1 Designing experiments and sensory tests](stage-1/module-19/lesson-01.md) · [01.1 Weighing everything](stage-1/module-01/lesson-01.md) · [00.1 How this course works](stage-1/module-00/lesson-01.md) · [X1-44 Batch consistency](experiments/X1-44-batch-consistency.md)
**Related units:** [SC-10 Heat transfer](stage-1/science/sc-10-heat-transfer.md) · [SC-12 Rheology](stage-1/science/sc-12-rheology.md)
**Threads:** T1 Measurement & formulation math · T11 Professional workflow, safety & QA · T12 Experimental method & R&D

</div>

## The one-paragraph model

Every number you record has an error, and every product you make varies from batch to batch. R&D work is the discipline of telling a **real effect** from **noise**. That starts with instruments: know their **resolution** (smallest step they show), **accuracy** (how close to the truth they are) and **precision** (how repeatable they are), and calibrate them. It continues with design: change one variable, hold the rest, make **replicates** so you can see the spread, and control **confounders** such as oven position and bake order. It ends with judgement, often by people: **sensory evaluation** turns "tastes better" into a structured measurement with coded, blinded samples and a test whose chance level you know. A triangle test, for instance, lets you say with defined confidence whether tasters can tell two versions apart at all. With a small set of tools (a good scale, calibrated thermometers, a ruler, calipers, a camera, and a few statistics you can do on a phone) you can produce data a professional R&D team would accept.

## The mechanism

### Resolution, accuracy, precision

| Term | Meaning | Example |
|---|---|---|
| **Resolution** | Smallest increment the instrument displays | Kitchen scale 1 g; jewellery scale 0.01 g |
| **Accuracy** | Closeness of a reading to the true value | Scale reads 498 g for a 500 g reference: 2 g error |
| **Precision** (repeatability) | Closeness of repeated readings to each other | Weighing the same object five times: 500, 501, 500, 499, 500 g |
| **Calibration** | Comparing to a known reference and correcting | Ice bath for a thermometer; reference mass for a scale |

A scale can be precise but inaccurate (always 5 g low), or accurate on average but imprecise (jumps ±3 g). Resolution is not accuracy: a 0.1 g display on a cheap scale does not guarantee 0.1 g truth.

### Why small batches need better instruments

Relative error = absolute error ÷ amount weighed. Small quantities in small experimental batches are where this bites.

| Ingredient in a 200 g flour batch | Target | Error with a 1 g-resolution scale (±0.5 g) | Relative error |
|---|---|---|---|
| Flour | 200 g | ±0.5 g | ±0.25 % |
| Water (70 %) | 140 g | ±0.5 g | ±0.4 % |
| Salt (2 %) | 4 g | ±0.5 g | ±12.5 % |
| Instant yeast (0.5 %) | 1 g | ±0.5 g | ±50 % |

The fix: weigh salt, yeast, leaveners, spices and gelatin on a 0.01–0.1 g scale, or make a larger stock mix and weigh a proportion of it. This is standard R&D practice and the reason [X1-01](experiments/X1-01-volume-vs-weight.md) and [01.1](stage-1/module-01/lesson-01.md) push weighing.

### Calibration at home

| Instrument | Reference | How |
|---|---|---|
| Probe thermometer | Ice bath 0 °C | Crushed ice topped with water, stirred; reading should be 0 ± 0.5 °C |
| Probe thermometer | Boiling water | 100 °C at sea level, about 1 °C lower per ~300 m ([SC-11](stage-1/science/sc-11-phase-changes-gases.md)) |
| Kitchen scale | Known masses | Calibration weights; or water: 500 g of water at room temperature is ~501 cm³, so a measuring flask gives a rough check |
| Oven | Oven thermometer + bread-slice map | [X1-02](experiments/X1-02-calibration.md) |

Record the offset in your lab notebook and correct readings, or adjust the device if it allows.

### Significant figures: do not report more than you measured

If water was weighed to ±0.5 g in a 200 g flour batch, hydration is known to about ±0.3 percentage points: report "70 %", not "70.25 %". If you measured a loaf's height with a ruler to the nearest millimetre, report 112 mm, not 112.4 mm. Calculators give false precision; your instruments set the real precision.

### Variability and replicates

Even with perfect weighing, products vary: dough temperature drifts, ovens cycle ([SC-10](stage-1/science/sc-10-heat-transfer.md)), shaping differs. So one bake per variant tells you almost nothing about whether a difference is real. Make **replicates**: at least 2, preferably 3 or more, of each variant.

Three numbers summarize replicates:

- **Mean** (average): sum ÷ count.
- **Standard deviation (SD)**: typical distance of a result from the mean. For a sample: SD = √[ Σ(x − mean)² ÷ (n − 1) ].
- **Coefficient of variation (CV)** = SD ÷ mean × 100 %. A unitless spread you can compare across measurements.

**Worked example.** Three loaves of the same formula have volumes 1,820, 1,760 and 1,880 cm³.

| Loaf | Volume (cm³) | x − mean | (x − mean)² |
|---|---|---|---|
| 1 | 1,820 | 0 | 0 |
| 2 | 1,760 | −60 | 3,600 |
| 3 | 1,880 | +60 | 3,600 |
| **Sum** | 5,460 | | 7,200 |

Mean = 5,460 ÷ 3 = 1,820 cm³. SD = √(7,200 ÷ 2) = √3,600 = 60 cm³. CV = 60 ÷ 1,820 = 3.3 %.

A rule of thumb for Stage 1 (not a formal test): if two variants' means differ by less than about 2 SD of the replicates, treat the difference as unproven. If they differ by several SD, and the direction is consistent in every replicate, you probably have a real effect. Formal tests (t-test, ANOVA) come in Stage 3.

### Controlling confounders

A **confounder** is a second thing that changed along with your variable and could explain the result.

| Confounder | How it sneaks in | Control |
|---|---|---|
| Oven position | Back-left always hotter | Rotate positions, or bake one at a time in the same spot |
| Bake order | Oven temperature drops between loads; doughs waiting longer overproof | Stagger mixing so every variant has equal time; randomize order |
| Day and ambient conditions | Humidity, kitchen temperature | Bake a **control** alongside variants on the same day |
| Dough temperature | Different water temperature | Measure and record; hit the same DDT for every variant |
| Ingredient lot | New bag of flour mid-experiment | Use one lot for the whole series |
| Your expectation | You shape the variant you believe in more carefully; you judge it kinder | Blind coding; follow a written procedure |

### Sensory evaluation basics

Sensory tests are measurements with people as instruments. Like any instrument, people need calibration (shared vocabulary), a controlled environment and a design that removes bias.

**Descriptive vocabulary.** Describe before you judge. Build a short list of attributes per product and rate each on an anchored 0–10 intensity line.

| Dimension | Example attributes for bread | Example attributes for a cake or pastry |
|---|---|---|
| Appearance | Crust colour, blistering, crumb openness, crumb evenness | Colour, dome, grain fineness, layer definition |
| Aroma | Wheaty, yeasty, lactic, acetic, toasted | Butter, vanilla, eggy, caramelized |
| Flavour/taste | Sour, salty, sweet, bitter, depth | Sweet, butter, cocoa bitterness |
| Texture | Crust crispness, crumb chewiness, softness, moistness | Tenderness, moistness, crumbliness, flakiness, melt |
| Aftertaste | Clean, lingering sour | Greasy, cloying, clean |

**Test types.**

| Test | Question it answers | Chance of guessing right | Typical use |
|---|---|---|---|
| **Paired comparison** (directional) | Which of two is sweeter / more tender? | 1/2 | Checking a specific attribute change |
| **Triangle test** | Is there *any* perceptible difference? | 1/3 | Did the ingredient swap or cost saving change the product? |
| **Ranking** | Order 3–6 samples by an attribute or preference | — | Quick screening of a series (e.g. sugar levels) |
| **Hedonic 9-point scale** | How much do people like it? | — | Acceptance; needs many tasters to be meaningful |
| **Descriptive profile** | How does it differ, attribute by attribute? | — | Understanding what your change did |

The **9-point hedonic scale**: 1 dislike extremely · 2 dislike very much · 3 dislike moderately · 4 dislike slightly · 5 neither like nor dislike · 6 like slightly · 7 like moderately · 8 like very much · 9 like extremely.

### The triangle test

Each taster gets three coded samples: two identical, one different (for example AAB). They must pick the odd one out, even if guessing. By chance alone, 1 in 3 will be right. The question is: how many correct answers are too many to be chance?

The minimum is computed from the binomial distribution with p = 1/3: the smallest number correct *k* for which the probability of getting *k* or more right by guessing alone is ≤ 5 % (α = 0.05).

| Tasters (n) | Minimum correct for a significant difference (α = 0.05) | Probability of reaching it by guessing |
|---|---|---|
| 6 | 5 | 1.8 % |
| 9 | 6 | 4.2 % |
| 12 | 8 | 1.9 % |
| 15 | 9 | 3.1 % |
| 18 | 10 | 4.3 % |
| 21 | 12 | 2.1 % |
| 24 | 13 | 2.8 % |
| 30 | 15 | 4.3 % |

Read it this way: with 12 tasters, 8 or more correct means tasters can tell the samples apart. 6 correct out of 12 is not enough, even though it is double the chance expectation of 4. Small panels can only detect large differences; failing to find a difference with 6 tasters does not prove there is none. A triangle test says nothing about which sample is *better*: follow it with a paired preference or descriptive test.

### Removing bias from sensory tests

| Bias | Cause | Control |
|---|---|---|
| Expectation and labels | "B is the new recipe" | **Random three-digit codes** (e.g. 482, 157, 903); the person serving is not a taster |
| Position/order effect | First sample judged differently; contrast with previous sample | Balance presentation orders across tasters. For triangle tests use all six orders equally: AAB, ABA, BAA, BBA, BAB, ABB |
| Presentation | Different sizes, shapes, temperatures, plates | Identical portions, same temperature, same plates; hide colour with lighting if colour is not being tested |
| Fatigue and carry-over | Palate saturation | Water and plain crackers between samples; limit to ~4–6 samples per session |
| Talking | Tasters influence each other | Taste individually, write before discussing |

### Instrumental proxies at home

| Property | Home method | Notes |
|---|---|---|
| Height, dome, spread | Ruler, calipers across the centre | Measure at the same point each time; cookies: two diameters at right angles, average |
| Volume | **Seed displacement**: fill a box with small seeds (rapeseed, millet, mustard), level, remove seeds, put in the loaf, refill, measure the leftover seeds in a measuring jug | Repeat 3× and average; compute **specific volume** = volume ÷ weight (cm³/g); a dense loaf sits near 3 cm³/g, a light pan loaf above 5 cm³/g |
| Crumb structure | Photograph a slice from the same position on a scanner or under fixed light with a ruler; analyse with free image software (threshold, count cells, % area of holes) | Compare only photos taken the same way |
| Colour | Photograph with a grey or white reference card in frame; compare to a printed colour strip of toast shades | Same light, same camera settings |
| Moisture loss | Scale: weigh before and after baking and after cooling | Bake loss % |
| Softness | Press a fixed mass (for example a 200 g weight on a coin) onto a crumb slice for 10 s; measure the dent | Crude penetrometer for staling curves |
| Acidity | pH strips or pH meter | Stage 1–2 |

## What it predicts on the bench

| If you change... | Prediction | Why | Where you'll see it |
|---|---|---|---|
| Weigh 1 g of yeast on a 1 g-resolution scale | Fermentation time varies a lot batch to batch | ±50 % dosing error | [01.1](stage-1/module-01/lesson-01.md), [X1-08](experiments/X1-08-yeast-quantity.md) |
| Bake one loaf per variant | Conclusions reverse when repeated | Batch-to-batch noise as large as the effect | [X1-44](experiments/X1-44-batch-consistency.md) |
| Bake variants in the order you mixed them, without staggering | Later variants look "better" or "worse" for reasons unrelated to the variable | Proof time and oven temperature confounded with the variable | [19.1](stage-1/module-19/lesson-01.md) |
| Tell tasters which sample is the new recipe | Preference shifts toward the expected answer | Expectation bias | [19.1](stage-1/module-19/lesson-01.md) |
| Triangle test with 6 tasters finds "no difference" | A real small difference could still exist | Low statistical power | [19.2](stage-1/module-19/lesson-02.md) |
| Calibrate a thermometer that reads 2 °C high | Syrup stages and custard endpoints shift into place | Removes systematic error | [X1-02](experiments/X1-02-calibration.md) |

## Kitchen demonstrations

1. **Scale honesty (10 minutes).** Weigh a single sheet of paper, then ten sheets, on your kitchen scale. Divide by ten. Then put a coin on, take it off, put it back five times and record each reading. You have measured resolution, a small-mass limit and precision.
2. **Replicate spread.** Bake six cookies from one dough on the same tray. Measure each diameter twice at right angles with calipers. Compute mean, SD and CV. That CV is the minimum noise any cookie experiment has to beat.
3. **Mini triangle test.** Two brands of plain crackers, or the same cookie with 0 % and 0.5 % added salt. Code with random three-digit numbers, balance the six orders across six tasters, and check your result against the table.

## Misconceptions

- **"A scale that reads to 0.1 g is accurate to 0.1 g."** Resolution is not accuracy; check against a reference.
- **"One good bake proves the formula works."** One bake is one sample from a noisy process. Replicate.
- **"If more than a third of tasters pick the odd sample, it is different."** You need to beat chance by a margin set by the binomial: with 12 tasters, 8 correct, not 5.

## Measuring it

| Question | Instrument | Stage |
|---|---|---|
| Mass of flour, water | Kitchen scale, 1 g resolution, calibrated | Stage 1 |
| Mass of yeast, salt, leavener | Precision scale 0.01–0.1 g | Stage 1 |
| Temperature | Calibrated probe thermometer | Stage 1 |
| Dimensions, volume | Ruler, calipers, seed displacement | Stage 1 |
| Crumb, colour | Phone camera or flatbed scanner with a reference card; image software | Stage 1–2 |
| Colour objectively | Colorimeter (L*a*b* values) | Stage 3 |
| Loaf volume objectively | Laser volume scanner | Stage 3 |
| Crumb structure objectively | Dedicated crumb imaging systems | Stage 3 |
| Texture | Texture analyser (firmness, TPA) | Stage 3 |
| Sensory | Trained descriptive panel; sensory software for randomization and statistics | Stage 3 |

## Check yourself

1. Four muffins weigh 82, 85, 79 and 82 g. Calculate the mean, SD and CV.

<details class="answer"><summary>Answer</summary>

Mean = 328 ÷ 4 = 82 g. Deviations: 0, +3, −3, 0; squares: 0, 9, 9, 0; sum 18. SD = √(18 ÷ 3) = √6 ≈ 2.4 g. CV ≈ 2.4 ÷ 82 ≈ 3.0 %.

</details>

2. You replace butter with a cheaper blend in a sablé and run a triangle test with 15 colleagues. 7 pick the odd sample. What can you conclude?

<details class="answer"><summary>Answer</summary>

With 15 tasters you need 9 correct for significance at α = 0.05. Seven is not enough: you have not shown a perceptible difference. That does not prove there is none; with 15 tasters, only fairly large differences are reliably detected. If the decision matters, test with more tasters.

</details>

3. In a hydration experiment you bake the 60 % variant first and the 80 % variant last, all mixed at the same time. Name the confounder and the fix.

<details class="answer"><summary>Answer</summary>

Proof time (and oven recovery) are confounded with hydration: later doughs ferment longer. Stagger mixing by the bake interval so every dough has the same fermentation and proof time, and/or randomize bake order.

</details>

4. Your kitchen scale shows 1 g resolution. You need 1.2 g of instant yeast for a small test dough. What do you do?

<details class="answer"><summary>Answer</summary>

Use a 0.01–0.1 g scale; or weigh 12 g of yeast into 120 g of flour (1:10 premix), mix thoroughly, and weigh 13.2 g of the premix (containing 1.2 g yeast), reducing the recipe flour by 12 g.

</details>

## Going deeper

<div class="callout next">

**Where this goes next:** You apply this in [18.2](stage-1/module-18/lesson-02.md) (standardization and quality control), [X1-44](experiments/X1-44-batch-consistency.md) and your capstone in [19.1](stage-1/module-19/lesson-01.md). In **Stage 2** you set product specifications with tolerances (weight, height, colour, bake loss) and run control charts in production. In **Stage 3** you design factorial experiments and use statistical tests (t-tests, ANOVA, response surface methods) to optimize formulas, train a descriptive sensory panel, run consumer acceptance tests with adequate sample sizes, and connect instrumental measures (texture analyser, colorimeter, aw meter) to sensory attributes.

</div>

## Sources

- [Figoni] — measuring ingredients and evaluating baked goods
- [Gisslen] — weighing, scaling and quality standards in professional baking
- [Cauvain-BPS] — quality assessment and diagnosing variability in bakery products
- [Cauvain-TB] — loaf volume, crumb structure and quality measurement
- Triangle-test critical values computed here from the binomial distribution (p = 1/3, α = 0.05); they match the standard published tables used in sensory science.
