# 18.2 · Standardization, batch consistency, costing and quality control

<div class="prereq">

**Requires:** [01.4 Scaling, yield, loss and the standardized formula sheet](stage-1/module-01/lesson-04.md)
**Science:** [SC-14 Measurement, sensory evaluation and variability](stage-1/science/sc-14-measurement-sensory.md)
**Practical:** write a full standard recipe for one product you already make well, using the [recipe template](templates/recipe-template.md) · **Experiment:** [X1-44 Batch consistency](experiments/X1-44-batch-consistency.md)
**Threads:** T11 Workflow · T1 Measurement & formulation math  **Time:** 60 min reading + 60 min exercises + X1-44 (three short bake days)

</div>

## Why this lesson exists

A product you can make well once is a skill. A product you can make the same way every time, that someone else could make from your sheet, whose cost you know and whose quality you check before it leaves the kitchen, is a **standard**. That is the unit of professional work in a bakery and of R&D work in a product company: a development project ends when the product is standardized, not when the first good one comes out of the oven. This lesson turns the formula sheet from [01.4](stage-1/module-01/lesson-04.md) into a full standard recipe, shows you how to measure and reduce batch-to-batch variation, and completes the costing you started there.

## You will be able to

1. Write a standard recipe with four parts: formula, process, product specification and tolerances.
2. Name the main sources of batch-to-batch variation and the control for each.
3. Record key metrics over batches, compute mean, range and moving range, and tell a process in control from one that meets its specification.
4. Account for yield and loss, and calculate a full cost per saleable unit including packaging, energy and labour.
5. Run a QC check and a tasting protocol on a batch, and version-control a recipe with a change log.

## What a standard recipe is

A recipe tells you how to make something. A **standard recipe** also tells you **what it must be when it is finished** and **how far it may vary**. It has four parts.

| Part | Contains | Without it |
|---|---|---|
| **Formula** | Ingredients with baker's %, grams, specifications (brand, protein %, fat %, temperature), yield, losses | Someone substitutes a 10 % protein flour and the bread fails |
| **Process** | Numbered steps with times, temperatures and observable endpoints; critical control points | "Mix until ready" means something different to everyone |
| **Product specification** | Measurable targets for the finished product: weight, dimensions, colour, internal temperature, sensory attributes | No one can say whether a batch is good |
| **Tolerances** | The range around each target that is still acceptable | Every batch is either perfect or a failure, and neither is true |

The [recipe template](templates/recipe-template.md) holds all four. The course recipes (R1-01 to R1-41) are standard recipes in this sense: "Expected result" is the specification, and "Critical control points" lists the process targets. Your capstone product in [M19](stage-1/module-19/README.md) must reach the same standard.

## The product specification

A specification lists the attributes that matter to the customer and the process, each with a target, a tolerance, a method of measurement and a sampling frequency. Measure what you can with a scale, a ruler, a probe and a camera ([SC-14](stage-1/science/sc-14-measurement-sensory.md)); describe the rest with anchored sensory attributes.

**Example: specification for R1-06 sourdough country loaf, version 3**

| Attribute | Target | Tolerance | Method | Frequency |
|---|---|---|---|---|
| Dough piece weight | 880 g | ± 5 g | Scale | Every loaf |
| Cooled weight | 775 g | 760–790 g | Scale, 2 h after baking | Every loaf |
| Height (boule) | 10 cm | 9–11 cm | Ruler at the highest point | Every loaf |
| Diameter | 21 cm | 20–22 cm | Two readings at right angles | Every loaf |
| Internal temperature at pull | 97 °C | ≥ 96 °C | Probe in the centre | Every loaf |
| Crust colour | Deep reddish-brown, dark ear | Photo reference card shade 4 (± 1) | Photo with grey card under fixed light | Every batch |
| Crumb | Open, irregular, glossy; even from crust to base | No dense band, no tunnel, not gummy | Cut 1 loaf per batch at 2 h; photo with ruler | 1 per batch |
| Acidity | Balanced: wheat first, tang second | Sourness 3 on a 1–5 scale (± 1) | Tasting sheet | 1 per batch |
| Keeping | Good on day 3 | Crumb still springs back | Day-3 slice | Occasionally |

Some notes on writing specifications:

- **Tolerances come from data, not hope.** A tolerance tighter than your process can hold will fail batches that are fine to eat. X1-44 measures what your process can actually hold.
- **Colour needs a reference.** Make a printed card of 5–6 photographed crust shades from your own bakes, numbered, and photograph each batch next to a grey or white card under the same light ([SC-14](stage-1/science/sc-14-measurement-sensory.md)).
- **Sensory attributes are written as descriptors with anchors**, for example crust crispness 0 (soft, leathery) to 10 (shatters). "Tastes good" is not a specification.
- **Internal temperature is a process target that doubles as a safety check** for custards and creams ([R1-25](recipes/R1-25-creme-brulee.md): centre 78–82 °C) and a quality check for breads and cakes.

## Where batch-to-batch variation comes from

Two batches made from the same sheet are never identical. The sources fall into a few groups, and each has a control.

| Source | How it shows | Control |
|---|---|---|
| **Flour lot or brand** | Absorption, strength and colour change; a dough that was right becomes slack or stiff | Specify brand and protein %; buy enough of one lot for a series; note the lot number ([00.3](stage-1/module-00/lesson-03.md)) |
| **Flour moisture** | Flour stored in a humid kitchen gains water, a dry winter flour absorbs more; ±1–2 % hydration effect | Airtight storage; adjust water by feel within a stated ±2 % and record the change |
| **Egg size** | "2 eggs" varies by 20–30 g; custards and cakes change | Weigh eggs out of shell, always |
| **Butter** | Fat content 80–82 % varies by brand; water content changes lamination and shortbread | Specify fat %; one brand for laminated doughs |
| **Leavening and yeast age** | Slower rise, less oven spring | Date opened containers; test activity ([03.1](stage-1/module-03/lesson-01.md)) |
| **Ingredient temperatures** | Dough temperature off DDT; butter too soft to cream | Measure and record flour, water, room and dough temperatures ([01.3](stage-1/module-01/lesson-03.md)) |
| **Timing** | Bulk ended by the clock instead of cues; proof too short on a cold day | Endpoints, not times, in the process; log the times so you can see the drift |
| **Oven** | Colour and bake loss vary with rack position, load and thermostat cycling | Oven thermometer; same rack and tray; bake to internal temperature ([X1-02](experiments/X1-02-calibration.md)) |
| **Operator** | Shaping tension, portioning accuracy, judgement of endpoints | Written endpoints, photos of "correct", practice; one person per batch in a trial |
| **Measurement** | Scale drift, uncalibrated probe | Monthly calibration check ([SC-14](stage-1/science/sc-14-measurement-sensory.md)) |

The practical lesson is that **most variation enters through inputs and process parameters, and shows up in the product**. You control a product by controlling the inputs (ingredient specification, temperatures, endpoints), then confirm with product measurements.

## Measuring consistency: control charts, lightly

A **control chart** is a time-ordered plot of one measurement per batch with a centre line (the mean) and two **natural process limits** calculated from the data. Points inside the limits are ordinary noise. Points outside, or a long run on one side of the mean, signal that something changed. The version below, the **individuals and moving-range chart**, needs only a calculator.

1. Record one value per batch (dough temperature, bulk time, loaf weight, height) for at least 8–10 batches.
2. Compute the **mean**.
3. Compute each **moving range** (MR): the absolute difference between consecutive values. Average them: **mean MR**.
4. **Natural process limits = mean ± 2.66 × mean MR.** (2.66 is a standard constant for this chart type; it converts the average moving range into roughly ±3 standard deviations.)
5. Plot the values with the mean and limits. Look for points outside the limits, and for runs of about 7–9 consecutive points on one side of the mean (rule sets differ slightly).

**Worked example: ten batches of R1-06** (example data)

| Batch | Dough temp. (°C) | Bulk (h) | Cooled weight (g) | MR weight (g) | Height (cm) | Note |
|---|---|---|---|---|---|---|
| 1 | 25.5 | 5.0 | 772 | — | 10.2 | |
| 2 | 26.0 | 4.75 | 780 | 8 | 10.5 | |
| 3 | 24.0 | 5.75 | 765 | 15 | 9.6 | Cold kitchen |
| 4 | 25.5 | 5.0 | 776 | 11 | 10.3 | |
| 5 | 26.5 | 4.5 | 790 | 14 | 10.1 | |
| 6 | 25.0 | 5.25 | 768 | 22 | 10.0 | |
| 7 | 25.5 | 5.0 | 774 | 6 | 10.4 | |
| 8 | 23.0 | 6.5 | 758 | 16 | 9.1 | Water too cool; bake extended 5 min "because pale" |
| 9 | 26.0 | 4.75 | 781 | 23 | 10.6 | |
| 10 | 25.5 | 5.0 | 777 | 4 | 10.3 | |

Cooled weight: mean = 7741 ÷ 10 = **774.1 g**. Sum of MR = 119; mean MR = 119 ÷ 9 = **13.2 g**. Limits = 774.1 ± 2.66 × 13.2 = 774.1 ± 35.2 → **738.9 to 809.3 g**. Sample SD = 9.0 g; CV = 1.2 %.

Reading it:

- **Every point is inside the natural limits**, so by the chart's rule the process is stable: batch 8 is at the low end of ordinary variation, not a special event in weight terms.
- **But batch 8 is outside the specification** (760–790 g). A stable process can still produce out-of-spec product. **Control limits describe what the process does; specification limits describe what the customer wants.** They are different things, and confusing them is the commonest error in quality work.
- The natural spread (about ±35 g) is wider than the specification band (±15 g). This process **cannot reliably meet** its specification, however carefully you work, until you reduce the variation. In industry this ratio is called process capability (Cp = specification width ÷ 6 SD; here 30 ÷ 54 ≈ 0.56, where 1.33 or more is a common target).
- **Look upstream.** The two shortest loaves (batches 3 and 8) are also the two coolest doughs, and batch 8 is the only one below the 24–27 °C acceptable range. Controlling dough temperature (an input) is the lever for height. For weight, the lever is bake loss: the extra 5 min in batch 8 cost weight. The fix is to bake to internal temperature and colour, and to correct pale crusts at their cause ([pale crust on sourdough](troubleshooting/sourdough.md?id=pale-crust-on-sourdough)).

<div class="callout key">

**Key idea:** Chart the inputs as well as the outputs. Dough temperature, bulk time and proof time are cheap to record and tell you *why* the product moved. A chart of outputs alone tells you only *that* it moved.

</div>

## Yield and loss accounting

Every unit of loss is cost. Track losses by category so you know which one to attack.

| Loss | Where | How to measure |
|---|---|---|
| Process loss | Dough left in the bowl, on tools, on the bench | Total mixed − total divided |
| Trim loss | Laminated dough and short dough trimmings | Weigh the trim (re-usable or not?) |
| Bake loss | Water evaporated in the oven | Dough weight − cooled weight ([01.4](stage-1/module-01/lesson-04.md)) |
| Rejects | Pieces that fail the specification | Count; note the reason |
| Samples | Pieces cut for QC or tasting | Count |

The **yield factor** = saleable output ÷ planned output. If you plan 18 croissants and one fails QC, the yield factor is 17 ÷ 18 = 0.944, and every saleable croissant carries 1/17 of the batch cost instead of 1/18.

**Example: one [R1-34](recipes/R1-34-croissant.md) batch, all croissants.** Détrempe 881 g + beurrage 275 g = 1156 g laminated dough. Shaped: 18 × 57 g = 1026 g. Trim = 130 g (11.2 %, inside R1-34's 120–170 g). Baked weight about 49–51 g each (85–90 % of raw). One croissant rejected (it unrolled in the oven). If you reuse the trim (twisted into a cinnamon knot, for example), it becomes a second product; if not, it is loss and its cost belongs to the 17 saleable croissants.

## Costing per unit

The method from [01.4](stage-1/module-01/lesson-04.md), extended:

> **Ingredient cost** = Σ (grams ÷ 1000 × price per kg)
> **Ingredient cost per saleable unit** = ingredient cost ÷ saleable units
> **Full cost per unit** = ingredient cost per unit + packaging + energy share + labour share

Price per kg = pack price ÷ pack weight in kg. For eggs, weigh a typical egg out of shell: at 12 eggs of about 50 g edible for 2.40, eggs cost 2.40 ÷ 0.6 kg = 4.00 per kg.

<div class="callout warn">

**Example numbers:** All prices below are **made-up example prices** in a generic currency unit, chosen to be realistic in proportion to one another. Use your own receipts. The method, not the numbers, is the lesson.

</div>

**Worked example 1: one R1-34 batch, 18 croissants**

| Ingredient | Grams | Example price per kg | Cost |
|---|---|---|---|
| Bread flour | 250 | 1.50 | 0.375 |
| Plain flour | 250 | 1.20 | 0.300 |
| Water | 140 | 0.00 | 0.000 |
| Whole milk | 140 | 1.10 | 0.154 |
| Sugar | 55 | 1.20 | 0.066 |
| Salt | 10 | 1.00 | 0.010 |
| Instant yeast, osmotolerant | 6 | 25.00 | 0.150 |
| Butter in the détrempe | 30 | 10.00 | 0.300 |
| Butter for the beurrage (≥ 82 % fat) | 275 | 10.00 | 2.750 |
| Egg wash: 1 egg + 1 yolk (2 eggs at 0.24; the spare white discarded) | — | — | 0.480 |
| **Total ingredients** | | | **4.585** |

- Per croissant if all 18 pass: 4.585 ÷ 18 = **0.255**.
- With one reject (yield factor 0.944): 4.585 ÷ 17 = **0.270**.
- Butter is 3.050 of 4.585, about **two-thirds (67 %)** of ingredient cost. Weighing butter precisely and keeping trim low matter more than anything else in this product.

Adding the rest, per saleable croissant (17):

| Cost element | Basis (example numbers) | Per croissant |
|---|---|---|
| Ingredients | 4.585 ÷ 17 | 0.270 |
| Packaging | Paper bag 0.08 each | 0.080 |
| Energy | About 1.5 kWh for preheat and trays × 0.30 per kWh = 0.45 per batch | 0.026 |
| Labour | 1.5 h hands-on ([R1-34](recipes/R1-34-croissant.md)) × 15.00 per h = 22.50 per batch | 1.324 |
| **Full cost** | | **1.700** |

**Worked example 2: one sourdough loaf** ([R1-06](recipes/R1-06-sourdough-loaf.md), 880 g dough, 775 g baked)

| Ingredient | Grams | Example price per kg | Cost |
|---|---|---|---|
| Bread flour (includes the 75 g in the levain) | 450 | 1.50 | 0.675 |
| Wholemeal flour | 50 | 1.80 | 0.090 |
| Water | 370 | 0.00 | 0.000 |
| Salt | 10 | 1.00 | 0.010 |
| Starter upkeep, flour allocated per bake | 40 | 1.50 | 0.060 |
| Rice flour for the banneton | 5 | 3.00 | 0.015 |
| **Total ingredients** | | | **0.850** |

| Cost element | Basis (example numbers) | Per loaf |
|---|---|---|
| Ingredients | as above | 0.850 |
| Packaging | Paper bread bag 0.10 | 0.100 |
| Energy | One loaf alone: about 2 kWh (45 min pot preheat + 45 min bake) × 0.30 = 0.60. Two loaves back to back share one preheat: about 3 kWh for both = 0.45 each | 0.450 |
| Labour | About 0.5 h hands-on per loaf when made in pairs × 15.00 | 7.500 |
| **Full cost** | | **8.900** |

What the two examples teach:

- **In lean bread, ingredients are cheap and energy is not negligible.** A home oven preheated 45 min for one loaf uses energy worth most of the flour. Baking in pairs or in sequence, as the plan in [18.1](stage-1/module-18/lesson-01.md) does, spreads the preheat.
- **In rich pastry, one ingredient dominates.** Butter in croissants; chocolate, nuts and butter in many others. Precise weighing and low trim are cost control.
- **At home scale, labour dominates everything.** Hands-on time grows much more slowly than batch size, so a batch four times larger costs perhaps twice the labour, not four times. This is the main economic reason bakeries make large batches, and the reason home-scale costing looks unrealistic if you include labour. Include it anyway; it tells you which products are worth your time.
- **Energy estimates are rough.** An electric oven's rating is on its plate (often 2–3.5 kW); it draws full power while heating and cycles afterwards. Reading the household meter before and after a bake gives your own number.

## QC: sampling, checking and tasting

Quality control is the check that a batch meets its specification before it is used or leaves the kitchen. At home and in small bakeries it has three parts.

**1. Check the process record.** Did every critical control point hit its target (DDT, bulk endpoint, fridge temperature, internal temperature)? A batch with an out-of-range CCP gets a closer look.

**2. Measure the product.** For small batches, weigh **every** piece (it takes a minute). Measure dimensions on every piece or on a fixed sample (for example, pieces 1, 4, 7 and 10 from a tray of 12, always the same positions, so that tray effects show). Cut **one piece per batch** for internal structure and photograph it with a ruler. Record colour against your reference card.

**3. Taste with a protocol.** Casual tasting drifts: you get used to your own product and stop noticing faults. A short protocol keeps it honest ([SC-14](stage-1/science/sc-14-measurement-sensory.md)):

| Element | Protocol |
|---|---|
| When | At a fixed time after baking (bread 2 h, croissant 30 min, cookies 1 h) and, for keeping quality, on a fixed later day |
| Sample | Same position in the product each time (centre slice, middle of the tray) |
| Sheet | 4–6 attributes from the specification, each on an anchored 0–10 line, plus "any off-note?" |
| Reference | When possible, taste against a retained sample (frozen from an approved batch) or against yesterday's product |
| Blind | When you change an ingredient or supplier, run a **triangle test** with coded samples: can tasters tell the new from the old at all? With 12 tasters you need 8 correct for a significant difference ([SC-14](stage-1/science/sc-14-measurement-sensory.md)) |
| Decision | **Release**, **release with note** (inside tolerance but drifting), **rework** (for example, re-crisp in the oven), or **reject**. Write it down |

<div class="callout pro">

**Professional practice:** Many bakeries keep a **retained sample** from each batch for a day or two (frozen for longer-life products). When a customer complains, the retained sample and the batch record let you answer the only useful question: was it the batch, or what happened after it left?

</div>

## Version control of recipes

A standard recipe changes over time, and each change must be traceable. Treat it like code.

- Every sheet carries a **version number and date**: R1-06 v3, 2026-10-12.
- **One deliberate change per version**, backed by a bake log reference. Two changes at once and you cannot know which one worked.
- Use a simple convention: **minor** versions (v3.1) for process clarifications that do not change the product; **major** versions (v4) for formula or process changes that do.
- Keep the old versions. You will want to go back.
- A **change log** at the bottom of the sheet:

| Version | Date | Change | Reason and evidence |
|---|---|---|---|
| v1 | 2026-08-02 | First standard version from R1-06 | 3 bakes; spec drafted |
| v2 | 2026-08-20 | Hydration 74 → 72 % | Loaves spread with the new flour lot (L2461); 2 bakes at 72 % held 10 cm (log B-031, B-032) |
| v2.1 | 2026-09-03 | Added: "check fridge shelf 3–5 °C the day before" | Batch B-038 over-proofed at 7 °C |
| v3 | 2026-09-28 | Levain PFF 15 → 12 %, DDT 26 °C | Milder acidity requested; triangle test 9/12 correct (difference detected), 10 of 12 preferred v3 in a follow-up paired test |

## On the bench

1. Choose one product you have made at least three times. Write its full standard recipe with the [template](templates/recipe-template.md): formula with specifications, process with CCPs, product specification with tolerances, cost per unit, change log starting at v1.
2. Run [X1-44](experiments/X1-44-batch-consistency.md) on a small product and use its results to set realistic tolerances.
3. Start a control chart for one recipe you bake often. Chart dough temperature and one product measurement.
4. Cost one bread and one pastry with your own prices, including packaging, energy and labour.

## What goes wrong

| Symptom | Likely cause | Correction |
|---|---|---|
| Batches "fail" spec but taste fine | Tolerances set tighter than the process can hold | Set tolerances from X1-44 data; reduce variation before tightening |
| A good product slowly drifts over months | Small undocumented changes (flour, fridge, habits) | Version control; retained samples; a control chart on key inputs |
| Changed two things, product improved, cannot say why | Two changes in one version | One change per version; keep a control |
| Cost per unit looks fine but the product loses money | Rejects, trim and labour not counted | Yield factor; full costing |
| QC tasting approves everything | No reference, no protocol, the baker tasting their own product | Anchored sheet, retained reference, blind tests for changes |

## Lab notebook

For each batch of a standardized product: batch ID, recipe version, ingredient lots, all CCP values (planned and actual), piece weights, dimensions, colour score, internal temperature, sensory sheet, QC decision, rejects and reasons. Keep a running chart for dough temperature and one product metric. Keep a cost sheet per product with the price date.

## Check yourself

1. A specification says "croissant weight 50 g ± 2 g baked". Your last 10 batches' mean weights have a mean of 49 g and natural process limits of 45–53 g. What do you tell the owner?

<details class="answer"><summary>Answer</summary>

The process is centred about 1 g low, and its natural variation (±4 g) is twice the tolerance (±2 g). Some batches will be out of spec however carefully each one is made. Either reduce variation (portion by weight to ±1 g, control proof and bake loss) or agree a wider tolerance that matches the product's real behaviour.

</details>

2. You buy butter at 8.50 for a 250 g block. What is the price per kg, and what do the 305 g of butter in one R1-34 batch cost?

<details class="answer"><summary>Answer</summary>

8.50 ÷ 0.25 = 34.00 per kg. 305 g × 34.00 ÷ 1000 = 10.37.

</details>

3. Planned 24 cookies; 2 over-spread and were rejected, 1 was cut for QC. Ingredient cost 6.60. What is the ingredient cost per saleable cookie and the yield factor?

<details class="answer"><summary>Answer</summary>

Saleable = 24 − 2 − 1 = 21. Yield factor = 21 ÷ 24 = 0.875. Cost per saleable cookie = 6.60 ÷ 21 = 0.314 (against 0.275 if all 24 had been saleable).

</details>

4. You switch to a cheaper chocolate in R1-11. Which test tells you whether customers could notice, and how many of 12 tasters must identify the odd sample?

<details class="answer"><summary>Answer</summary>

A triangle test with coded samples and balanced orders. With 12 tasters, 8 or more correct means a perceptible difference at α = 0.05 ([SC-14](stage-1/science/sc-14-measurement-sensory.md)). Fewer than 8 does not prove there is no difference, only that this panel could not detect one.

</details>

5. Why is "dough temperature" worth charting even though customers never see it?

<details class="answer"><summary>Answer</summary>

It is an input that drives fermentation rate and therefore volume, crumb, colour and flavour. Charting it shows *why* a product metric moved, and lets you correct the cause before it produces out-of-spec product.

</details>

## Where this goes next

<div class="callout next">

**Next:** [X1-44](experiments/X1-44-batch-consistency.md) measures your own variation; [18.3](stage-1/module-18/lesson-03.md) uses specifications and batch records as the evidence base for diagnosis; [19.1](stage-1/module-19/lesson-01.md) turns tasting protocols into designed sensory tests, and your [capstone](stage-1/capstone/README.md) product is delivered as a standard recipe with specification, tolerances, cost and version history.
**Stage 2:** full recipe costing with overhead and pricing, supplier specifications, formal HACCP plans, and control charts running on a production line. **Stage 3:** specifications as contracts in product development and technology transfer, process capability studies, shelf-life testing, and designed experiments to reduce variation at its source.

</div>

## Sources

- [Gisslen] — standardized formulas, yield and costing in bakeshops.
- [CIA-BP] — recipe standardization, costing and quality standards.
- [Suas] — process control and product evaluation for bread and viennoiserie.
- [Cauvain-BPS] — sources of variability in bakery products and quality assessment.
- [Lawless] — sensory test design, triangle tests, reference samples.
- [USDA-FDC] — composition data (water in butter and milk) used when specifying ingredients.
- The individuals and moving-range control chart and its 2.66 constant are standard statistical process control practice. All prices are illustrative example numbers.
