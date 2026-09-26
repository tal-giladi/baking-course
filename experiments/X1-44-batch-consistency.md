# X1-44 · Batch consistency: the same product three times

## Question

If you make the same product from the same standard recipe on three different days, following it exactly, how much do the results vary, both within a batch and between batches? Which source of variation is the largest, and what tolerance can you honestly promise in a specification?

## Before you start: write your hypothesis

Write in your notebook, before the first batch:

- For baked roll weight, height, diameter and crust colour, predict the coefficient of variation (CV, %) **within** one batch.
- Predict whether the three batch means will differ by more than the within-batch scatter would explain. For which measurement do you expect the largest day-to-day difference?
- Name the single process variable you expect to cause most of the day-to-day difference, and why.
- Write the tolerance you would put in a specification for baked roll weight and roll height today, before you have data.

## Why this experiment is different

Every other experiment in the course changes one variable on purpose. This one changes **nothing on purpose**. The independent variable is the **day**, which bundles everything you did not deliberately control: kitchen temperature, your handling, the oven's mood, how you judged the endpoints. That bundle is exactly what a specification has to live with. The experiment measures the noise floor that every other comparison you make has to beat ([SC-14](stage-1/science/sc-14-measurement-sensory.md)), and it gives you real numbers for the tolerances in [18.2](stage-1/module-18/lesson-02.md).

The product is lean rolls from [R1-02](recipes/R1-02-rolls-pan-loaf.md): quick (about 3 h), cheap, several identical pieces per batch, and measurable for weight, size, colour and internal temperature. A cookie version is given in Going further.

## Variables

| Type | Variable |
|---|---|
| **Independent** | Batch day (A, B, C), on three different days within 14 days |
| **Dependent** | Per roll: dough piece weight, baked weight, bake loss %, diameter, height, crust colour score, internal temperature at pull, sensory scores. Per batch: dough temperature, bulk time and % rise, proof time, measured oven temperature, bake time |
| **Controlled** | Formula and procedure (R1-02 rolls, written out as your standard recipe v1 before day A); one flour lot, one yeast packet (stored airtight and cold after opening), one salt; same scale, probe and oven thermometer; same mixing method (hand or machine, chosen once); same tray, parchment, rack and oven position; same person; DDT 25 °C; endpoints judged by the written cues; same evaluation times |

**Deliberately not controlled:** the clock times of bulk and proof. The standard recipe uses endpoints (volume, poke test), so the times are allowed to vary and are *recorded*. If you forced fixed times, you would be testing a different recipe.

## Batch and scale

One batch per day, on 250 g flour (R1-02 at ×0.417).

| Ingredient | Baker's % | Grams per batch | Total for 3 batches |
|---|---|---|---|
| Bread flour (11.5–13 % protein), one lot | 100.0 | 250.0 | 750.0 |
| Water | 65.0 | 162.5 | 487.5 |
| Fine salt | 2.0 | 5.0 | 15.0 |
| Instant yeast | 1.0 | 2.5 | 7.5 |
| **Total** | **168.0** | **420.0** | **1260.0** |

**Division:** 6 rolls × 68 g = 408 g; about 12 g (2.9 %) left for process loss. Weigh salt and yeast on a 0.1 g scale ([01.4](stage-1/module-01/lesson-04.md)).
**Buy for the whole series at once:** at least 1 kg of the flour from one lot (note the lot number) and one packet of yeast.
**Scale ×2.5:** 625 g flour, 406.25 g water, 12.5 g salt, 6.25 g yeast = 1050 g → 15 rolls × 68 g (1020 g) on two trays. More pieces give better within-batch statistics, but two trays add tray position as a source of variation; bake them one after the other in the same position and record which is which.

## Procedure

**Before day A**

1. Write R1-02 (rolls only) as your standard recipe v1 with the [template](templates/recipe-template.md): every step with its endpoint. You must follow this sheet exactly on all three days. If you change anything during the series, the series is broken.
2. Check your probe in an ice bath and your oven with an oven thermometer at the rack position you will use ([X1-02](experiments/X1-02-calibration.md)).
3. Prepare a colour reference: print a strip of 5 crust shades from pale gold (1) to dark brown (5), or photograph a range of rolls or toast slices and number them. Use the same strip on all three days.
4. Mark the parchment with positions 1–6 in pencil (3 rows of 2), so every roll can be traced to its tray position.

**Each day (A, B, C)**

5. Record room, flour and water temperatures. Calculate the water temperature for a **DDT of 25 °C** using your measured friction factor ([01.3](stage-1/module-01/lesson-03.md)).
6. Mix exactly as your sheet says. Record the dough temperature at the end of mixing.
7. Bulk in the same marked, straight-sided container at 24–25 °C (use the same warm spot each day and record its temperature). One set of folds at 30 min. End bulk at **+60–75 %**, domed and airy. Record the time and the % rise.
8. Divide into 6 × **68 g ± 1 g**. Record each piece weight to 1 g. Pre-shape, rest 15–20 min, shape into tight balls, and place seam-down on positions 1–6 in the order you shaped them.
9. Preheat to **230 °C (445 °F)** with the steam tray, at least 30 min. Record the oven thermometer reading at loading.
10. Proof covered at 24–25 °C until **1.5–1.75×** volume with a slow, partial spring-back on the poke test (typically 35–50 min). Record the time.
11. Bake with steam as the sheet says, **15–18 min**, steam tray out at 8 min, to golden-brown. At the pull, probe the centre of rolls 1 and 4 and record the internal temperature (target **≥ 95 °C**). Record the total bake time.
12. Cool on a rack. At **30 min**: weigh each roll; measure two diameters at right angles and the height at the centre (ruler or calliper, to 1 mm); photograph the tray from above and a side view next to the colour strip and a white card under the same light each day; score each roll's colour 1–5.
13. At **1 h**: cut roll 3 through the centre and photograph the crumb with a ruler. Taste it and score crust crispness, crumb softness and flavour intensity on 0–10 anchored lines (0 = none / very soft / bland; 10 = shatters / very firm / intense), plus overall liking 1–9.
14. **Retained sample:** freeze roll 6 in a sealed bag, labelled with the day. After day C, thaw all three together (1 h at room temperature, then 5 min at 180 °C), code them with three-digit numbers, and rank them blind for colour, softness and flavour. Ask one other person to do the same if you can. This removes "the day I tasted it" from the sensory comparison.

## Measurements

| What | How | Tool |
|---|---|---|
| Temperatures: room, flour, water, dough, warm spot | Probe; dough in the centre at the end of mixing | Calibrated probe |
| Bulk and proof time; bulk % rise | Clock; level on the marked container | Timer, container |
| Oven temperature | Oven thermometer at the rack, read at loading | Oven thermometer |
| Dough piece and baked weights | Each roll, to 1 g | Scale |
| Bake loss % | (dough − baked) ÷ dough × 100 | Calculation |
| Diameter and height | Two diameters at right angles, averaged; height at the centre | Ruler or calliper |
| Colour | Score 1–5 against the reference strip; photo with white card | Eye, camera |
| Internal temperature | Rolls 1 and 4 at the pull | Probe |
| Sensory | Anchored 0–10 lines at 1 h; blind ranking of retained samples | Tasting sheet |

## Observation sheet

**Process record (one row per day)**

| Day | Date | Room °C | Flour °C | Water °C | Dough °C | Bulk time | Bulk rise % | Warm spot °C | Proof time | Oven at loading °C | Bake time | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | | | | | | | | | | | | |
| B | | | | | | | | | | | | |
| C | | | | | | | | | | | | |

**Product record (copy once per day)**

| Roll (position) | Dough g | Baked g | Bake loss % | Diameter 1 mm | Diameter 2 mm | Mean diameter mm | Height mm | Colour 1–5 | Internal °C |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | — |
| 3 | | | | | | | | | — |
| 4 | | | | | | | | | |
| 5 | | | | | | | | | — |
| 6 | | | | | | | | | — |
| **Mean** | | | | | | | | | |
| **SD** | | | | | | | | | |
| **CV %** | | | | | | | | | |

**Sensory (roll 3 at 1 h)**

| Day | Crust crispness 0–10 | Crumb softness 0–10 | Flavour intensity 0–10 | Overall liking 1–9 | Comments |
|---|---|---|---|---|---|
| A | | | | | |
| B | | | | | |
| C | | | | | |

**Summary across days (one table per measurement: baked weight, bake loss, diameter, height, colour)**

| Quantity | Calculation | Value |
|---|---|---|
| Day means A, B, C | From the product records | |
| Grand mean | Mean of the three day means | |
| Within-day SD (pooled) | √[(SD_A² + SD_B² + SD_C²) ÷ 3] | |
| SD of the day means | Sample SD of the three day means | |
| Expected SD of day means from within-day noise alone | Within-day SD ÷ √6 | |
| Ratio | SD of day means ÷ expected SD of day means | |
| Largest source | Within-day (ratio near 1) or between-day (ratio well above 1)? | |

## Analysis questions

1. For each measurement, what was the within-day CV? Rank the measurements from most to least consistent.
2. For each measurement, compare the SD of the day means with what within-day noise alone would give (within SD ÷ √6). Where is the ratio well above 1? That is where the day matters.
3. Look at the process record for the measurement with the largest day effect. Which recorded variable (dough temperature, bulk rise, proof time, oven temperature, bake time) moves with it? Is that evidence of a cause, or could something else explain it?
4. Within each day, is there a pattern by tray position (for example, back rolls darker)? How big is it compared with the day effect?
5. Did the blind ranking of the retained samples agree with the scores you gave on the day?
6. Set a tolerance band for baked weight and height: target = grand mean; band = ± 2 × total SD, where total SD = √(within SD² + SD of day means²). Would it pass all 18 rolls? Compare it with the hypothesis you wrote before day A, and with R1-02's "±2 g baked".
7. Which **one** change to your standard recipe would most reduce the largest source of variation? Write it as a v1.1 or v2 change-log entry ([18.2](stage-1/module-18/lesson-02.md)).

**Worked example of the calculation** (example data for roll height, not expected results)

| Day | Heights (mm) | Mean | SD |
|---|---|---|---|
| A | 52, 54, 51, 53, 55, 53 | 53.0 | 1.41 |
| B | 48, 50, 49, 47, 50, 48 | 48.7 | 1.21 |
| C | 53, 51, 54, 52, 52, 53 | 52.5 | 1.05 |

Within-day SD (pooled) = √[(1.41² + 1.21² + 1.05²) ÷ 3] = √[(2.00 + 1.47 + 1.10) ÷ 3] = √1.52 = **1.23 mm**; CV about 2.4 %.
Day means 53.0, 48.7, 52.5; grand mean 51.4; SD of day means = **2.37 mm**.
If only within-day noise were acting, day means would scatter by about 1.23 ÷ √6 = **0.50 mm**. The observed 2.37 mm is almost five times that, so the **day** is the largest source of variation in height. In this example the process record showed day B's dough at 22.5 °C (the others 25 °C) and a proof ended at 35 min "because it was time". Total SD = √(1.23² + 2.37²) = 2.67 mm, so an honest band today would be 51 ± 5 mm. Fixing dough temperature and judging proof by the poke test, not the clock, is the change most likely to narrow it.

<details class="answer"><summary>What you should expect to see</summary>

These are typical ranges for a careful home baker; yours will differ, and that is the point of measuring.

**Weight is the most consistent measurement.** Dividing to ±1 g on 68 g gives a dough-weight CV under 1 %. Baked weight scatters a little more (typically CV 1–2 %) because bake loss varies with tray position: rolls at the hotter edge of the tray lose more water. Between days, mean baked weight usually shifts by 1–3 g, mostly through bake time and oven temperature, since bake loss for rolls sits around 12–18 %. The ratio test often shows only a small day effect for weight.

**Height and diameter vary more.** Within-day CVs of 2–5 % are typical, from shaping tension and position. The **day** effect is usually the largest source for these: day means can differ by 5–10 %, and they track dough temperature and the proof endpoint. A dough 2–3 °C below DDT gives a slower bulk; if you then end bulk or proof a little early, as most people do on a busy day, volume drops. This is the same lesson as the R1-06 control chart in [18.2](stage-1/module-18/lesson-02.md): charting the input (dough temperature) explains the output (height).

**Colour is the least consistent measurement** and has the strongest position effect: rolls at the back or edges of the tray are often a full shade darker. Between days, oven recovery after loading, steam quantity and bake time move it. Scores of 1–5 are also coarse, so a one-shade difference is near the resolution of the method.

**Internal temperature** is usually 96–99 °C on all days if you bake to colour; it is a pass/fail check here, not a source of variation.

**Sensory scores** on the day often differ more than the blind ranking of the retained samples does: your mood, hunger and the time of day are part of on-the-day scores. If the blind ranking cannot separate the three days, the product was more consistent than your scores suggested.

**Largest source:** for most learners, the day-to-day difference in **dough temperature and endpoint judgement** (bulk and proof) is the largest source of variation in volume, and **tray position and oven** are the largest sources for colour. The practical corrections are: hit the DDT (adjust water temperature every time), judge proof by the poke test and a volume mark, and fix the tray layout and oven position (or rotate the tray at a set time).

**Tolerances:** most learners' first-guess tolerances are tighter than their data support for volume and colour, and about right or even loose for weight. A realistic Stage 1 specification for these rolls might be baked weight ±3 g, height ±8–10 %, colour ±1 shade, internal ≥ 95 °C, until the next series shows that the process has tightened.

</details>

## Going further

- **Cookie version:** run the same design with [R1-11](recipes/R1-11-chocolate-chip-cookie.md) ×0.5 (125 g flour, 10 cookies of 48 g, one tray of 6 plus 4 spare), measuring baked weight, two diameters, centre thickness, spread ratio, edge colour and dough temperature at oven entry. Cookies usually show a strong day effect from butter and dough temperature and a strong position effect in colour.
- **Keep charting:** continue with an individuals and moving-range chart for dough temperature and roll height across your next 10 batches of any bread ([18.2](stage-1/module-18/lesson-02.md)).
- **Two operators:** a second person makes a fourth batch from your sheet. If their results sit outside your three days, your sheet is missing information. That is the real test of a standard recipe.
- **Fix and re-run:** apply the one change from analysis question 7 and run three more days. Did the between-day SD fall?
- **Stage 3:** the same design, replicated, analysed with a random-effects analysis of variance to split total variance into within-batch and between-batch components, with confidence intervals. It is the standard method for setting specifications in product development.

## Used in

[18.2 Standardization, batch consistency, costing and quality control](stage-1/module-18/lesson-02.md) · [SC-14 Measurement, sensory evaluation and variability](stage-1/science/sc-14-measurement-sensory.md) · [18.3 The diagnostic method](stage-1/module-18/lesson-03.md) (the noise floor behind "verify with replicates") · [M18 assessment](stage-1/assessments/module-18-quiz.md) · [19.1](stage-1/module-19/lesson-01.md) and the [capstone](stage-1/capstone/README.md)
