# M19 assessment · Capstone: formulation development project

Covers [19.1](stage-1/module-19/lesson-01.md), [19.2](stage-1/module-19/lesson-02.md), [SC-14](stage-1/science/sc-14-measurement-sensory.md) and the [capstone brief](stage-1/capstone/README.md). Take it before you start capstone round 1. Critical values: triangle test in [SC-14](stage-1/science/sc-14-measurement-sensory.md); directional paired comparison in [19.1](stage-1/module-19/lesson-01.md). Write your answers before opening each one.

## A. Knowledge check

**A1.** Define a replicate. Why are twelve croissants cut from one laminated dough not twelve replicates of a butter-temperature treatment?

<details class="answer"><summary>Answer</summary>

A replicate is an independent repetition of the whole process that produces the variation you are testing against: here, a separately mixed, laminated, proofed and baked dough. Twelve croissants from one dough share its butter temperature on the day, its fold temperatures, its proof and usually its oven load; they measure within-batch variation only. Average them into one value per dough and replicate the dough (pseudo-replication otherwise).

</details>

**A2.** In two words each, what do randomization, blocking and blinding protect you from?

<details class="answer"><summary>Answer</summary>

Randomization: drifting conditions (oven recovery, waiting time, position) lining up with a factor. Blocking: day-to-day (or lot-to-lot) differences; every treatment runs in every block so those differences cancel. Blinding: expectation bias, in tasting and in measuring.

</details>

**A3.** A baker tests brioche butter at 20 %, 40 % and 60 %. She mixes the 20 % dough first and the 60 % dough last, 40 min later, proofs all three for the same clock time from the moment the *first* dough finished mixing, bakes the 20 % loaf on the upper rack and the others below, then tastes all three knowing which is which. List every confounder or bias.

<details class="answer"><summary>Answer</summary>

1. Fermentation time is confounded with butter level: the 20 % dough ferments 40 min longer than the 60 % dough. Stagger by a fixed offset and time each dough from its own mix.
2. Rack position is confounded with the 20 % loaf (upper rack browns and bakes differently). Same position, or rotate across replicates.
3. Dough temperature is likely confounded too: longer mixing to incorporate more butter adds friction heat, and more butter changes the final temperature. Measure and hit the same DDT.
4. Unblinded tasting by the person who made them.
5. No replicates: one loaf per level.

</details>

**A4.** In a cookie sugar test, all low-sugar doughs are baked on Saturday and all high-sugar doughs on Sunday, when a new bag of flour was opened. What is wrong, and how would you redesign it with the same total number of doughs (four)?

<details class="answer"><summary>Answer</summary>

Sugar is perfectly confounded with day and flour lot: any difference could be the day or the flour. Redesign: use one flour lot for the whole series; bake one low-sugar and one high-sugar dough on Saturday and again on Sunday (days as blocks), in randomized order each day, and compare within each day.

</details>

**A5.** Why can a 2 × 2 factorial show an interaction that two separate one-factor experiments cannot?

<details class="answer"><summary>Answer</summary>

Two one-factor experiments each measure a factor's effect at only one level of the other factor, so you cannot tell whether that effect changes when the other factor changes. The factorial measures the effect of A at both levels of B; the difference between those two effects is the interaction. It also estimates each main effect from all four cells, which is more efficient.

</details>

**A6.** A triangle test with 12 tasters finds a significant difference between your new and old croissant. Your manager asks "So the new one is better?" Answer her, and say what test you run next.

<details class="answer"><summary>Answer</summary>

Not necessarily. A triangle test only shows that tasters can tell the two apart, not which is better or how they differ. Next, run a directional paired comparison on the attribute you predicted (e.g. "which is flakier?"), a descriptive profile to see what changed, or a preference test with enough tasters if liking is the question.

</details>

**A7.** Match each question to the most suitable test: (a) "Does the cheaper butter change the sablé at all?" (b) "Which of five sugar levels is sweetest-to-least-sweet?" (c) "Is the 12 % tangzhong loaf softer than the 7 % one, as predicted?" (d) "How does the new ganache differ in texture and flavour?"

<details class="answer"><summary>Answer</summary>

(a) Triangle test. (b) Ranking. (c) Directional paired comparison. (d) Descriptive profile on anchored 0–10 lines with briefed tasters.

</details>

**A8.** Your chiffon screening rounds ran in 12 cm pans. Why must the confirmation round use the real 20 cm tube pan?

<details class="answer"><summary>Answer</summary>

Foam-cake rise, set time, collapse and moistness depend on the heat path and the support of the pan walls and tube. A small pan sets faster and differently, so effects and even the ranking of variants can change at full size. The capstone rules require confirmation and validation at the real product size.

</details>

**A9.** Name four things you must do before anyone tastes your capstone samples.

<details class="answer"><summary>Answer</summary>

Any four of: give a written list of all ingredients and allergens for every sample and ask about allergies and restrictions; exclude people allergic to anything in the set; serve no raw dough, batter or raw-egg preparations; hold creams and custards at ≤ 5 °C and discard after 2 h at room temperature; label alcohol and exclude minors (children only with a parent's agreement); explain the purpose, that tasters may stop at any time and that scores are anonymous; code samples and balance orders.

</details>

## B. Formulation and analysis exercises

**B1. Main effects and interaction.** A scone project tests fat temperature (cold 4 °C vs cool 15 °C) × resting the cut scones in the fridge (0 vs 30 min). Two separate doughs per cell, one per day. Cell mean heights (mm):

| | Rest 0 min | Rest 30 min |
|---|---|---|
| **Fat 4 °C** | 38 | 40 |
| **Fat 15 °C** | 29 | 36 |

The baseline batch-to-batch SD of scone height (from X1-44 style data) is σ = 1.2 mm. Calculate both main effects and the interaction contrast, compare each with its noise, and explain the interaction.

<details class="answer"><summary>Answer</summary>

- Fat temperature: (29 + 36) ÷ 2 − (38 + 40) ÷ 2 = 32.5 − 39.0 = **−6.5 mm**.
- Rest: (40 + 36) ÷ 2 − (38 + 29) ÷ 2 = 38.0 − 33.5 = **+4.5 mm**.
- Interaction contrast: rest effect at 15 °C (36 − 29 = 7) minus rest effect at 4 °C (40 − 38 = 2) = **+5 mm**.

Noise: each main effect compares 4 batches with 4 batches: σ × √(1/4 + 1/4) = 1.2 × 0.71 = 0.85 mm. Fat (−6.5) is about 7.6 × noise and rest (+4.5) about 5.3 ×: both real. Interaction noise = 2σ ÷ √2 = 1.7 mm; +5 is about 2.9 ×: probably real, stronger if the direction was the same on both days.

Mechanism: resting re-chills the fat. When the fat went in cold, it is still solid and resting adds little; when it went in at 15 °C, it has smeared and softened, and 30 min in the fridge re-solidifies it so it melts later in the oven and makes steam pockets and lift ([08.4](stage-1/module-08/lesson-04.md), [X1-23](experiments/X1-23-scone-fat.md)).

</details>

**B2. Reading sensory results.** Decide for each whether there is a significant result at α = 0.05, and say what you would do next.

(a) Triangle test, 12 tasters, 7 correct.
(b) Triangle test, 18 tasters, 10 correct.
(c) Triangle test, 6 tasters, 5 correct.
(d) Triangle test, 30 tasters, 14 correct.
(e) Directional paired comparison ("which is crisper?", direction predicted in advance), 15 tasters, 11 chose the predicted sample.

<details class="answer"><summary>Answer</summary>

(a) Need 8: **not significant**. Not proof of no difference; with 12 tasters only moderate-to-large differences are reliably found. Repeat with more tasters if the decision matters.
(b) Need 10: **significant** (exactly at the critical value). Follow with a paired or descriptive test to learn how they differ.
(c) Need 5: **significant**. A 6-person panel only finds large differences, so this one is large; still confirm with more tasters before a costly decision.
(d) Need 15: **not significant**. With 30 tasters the test has reasonable power, so any difference is probably small; for a cost-saving swap this is useful evidence that customers are unlikely to notice.
(e) Need 12 of 15: **not significant**, although 11 is close. Run the test again with 20 tasters (need 15), or check the instrumental snap data.

</details>

**B3. Noise vs signal.** Baseline sourdough specific volume on three days: 3.4, 3.6, 3.5 cm³/g. A variant with a stiffer levain, baked alongside on the same three days: 3.7, 3.8, 3.6 cm³/g. Is the variant's higher volume real?

<details class="answer"><summary>Answer</summary>

Baseline mean 3.5, SD = √[(0.01 + 0.01 + 0) ÷ 2] = 0.10 cm³/g. Variant mean 3.7, SD 0.10. Difference = 0.20.

Single-batch rule (2 × SD = 0.20): borderline. But you are comparing means of 3 batches: noise of the difference = σ × √(1/3 + 1/3) = 0.10 × 0.82 = 0.082; 0.20 is about 2.4 × that. Check block by block: day 1 +0.3, day 2 +0.2, day 3 +0.1, positive every day. Conclusion: **probably real but small** (about +6 %). Carry it forward and confirm in the next round, and check that the stiffer levain did not change acidity or crumb (guard responses).

</details>

**B4. Keeping the formula balanced.** In [R1-07](recipes/R1-07-milk-bread.md) (300 g total flour; tangzhong 7 % flour + 35 % water; milk 30 %, egg 15 %, butter 10 %; true hydration 74 %) you want to test a **9 %** tangzhong, keeping water at 5 × the tangzhong flour and the true hydration at 74 % by adjusting the milk. Calculate the tangzhong flour and water, the remaining flour, and the milk (use water contents milk 0.87, egg 0.75, butter 0.16).

<details class="answer"><summary>Answer</summary>

Tangzhong flour = 9 % × 300 = **27 g**; water = 5 × 27 = **135 g** (45 %). Remaining flour = 300 − 27 = **273 g** (91 %).

Target water = 74 % × 300 = 222 g (R1-07 has 221.9 g). Water already supplied: tangzhong 135 + egg 45 × 0.75 = 33.75 + butter 30 × 0.16 = 4.8 → 173.55 g. Milk must supply 221.9 − 173.55 = 48.35 g of water → milk = 48.35 ÷ 0.87 = **55.6 g ≈ 56 g** (18.5 %).

Check: 135 + 56 × 0.87 + 33.75 + 4.8 = 135 + 48.7 + 33.75 + 4.8 = 222.3 g → 74.1 %. Consider raising the milk powder by about 3 g to replace the milk solids removed with 34 g of milk, and record it as a second change.

</details>

## C. Troubleshooting case: a flawed capstone

**C1.** Read this summary of a submitted capstone and list every design, analysis and reporting flaw, with the fix for each.

> "Goal: a less sweet chocolate chip cookie. I baked R1-11 once as my baseline. Round 1: I mixed the −30 % sugar dough on Monday and baked it Tuesday on the back of the top rack; the baseline tray was baked Monday at the front. I measured six cookies each: the reduced-sugar cookies were on average 4 mm narrower, SD 1 mm, so the difference is four standard deviations and clearly significant. My partner and I tasted them (we knew which was which) and preferred the reduced-sugar cookie. Triangle test: 4 of 6 friends picked the odd cookie, which is double the chance level, so people can tell the difference. Round 2: I changed the brown : white ratio and added 10 g of milk powder. The best-looking tray is my final recipe. I did not keep the tray that burnt."

<details class="answer"><summary>Answer</summary>

| Flaw | Why it matters | Fix |
|---|---|---|
| Vague goal ("less sweet") with no specification | Nothing to judge success against; no guard responses (spread, chewiness) | Write targets and tolerances before round 1 |
| Baseline baked once | No measure of batch noise | Baseline 3 × on 3 days; SD and CV |
| Rest time, bake day and rack position confounded with sugar | The 4 mm could be the 24 h rest, the day or the back-top rack | Same rest for both, same day, same position or rotated; baseline in every session |
| Six cookies from one dough treated as replicates | Pseudo-replication: 1 mm SD is within-tray spread, not batch noise | Replicate doughs; compare with batch-to-batch SD |
| Unblinded preference by the maker and partner | Expectation bias | Coded samples, someone else holds the key, more tasters |
| Triangle test misread | With 6 tasters, 5 correct are needed; 4 is not significant | Use the critical-value table; more tasters |
| Two changes at once in round 2 (sugar ratio and milk powder) | Effects cannot be separated | One change per variant, or a factorial of the two |
| No two-factor design; only two rounds | Fails the capstone rules | At least 3 rounds including a replicated 2 × 2 |
| Final recipe chosen by looks from a single tray, not validated | Not reproducible; no evidence it meets the spec | Validate 3 × from the written recipe |
| Burnt tray not reported | Failures are data (oven, timing) and must be recorded | Record every batch with the reason it was discarded |

</details>

## D. Experimental design

**Hypothesis to test:** "In the R1-11 cookie with total sugar reduced by 30 %, replacing half of the remaining white sugar with brown sugar restores centre chewiness on day 2, and the benefit of brown sugar is larger in the reduced-sugar dough than in the full-sugar dough."

Design the experiment: factors and levels, cells, batch size, responses and how you will measure them, replicates, randomization, blocking, blinding, the analysis you will do, one confounder and its control, and a sensory test.

<details class="answer"><summary>Answer</summary>

A good design:

- **Factors:** total sugar (100 % = baseline vs 70 % of flour) × sugar type (baseline brown : white 56 : 44 vs brown-rich, with half the white sugar replaced by brown). Four cells. The second part of the hypothesis is an interaction, so it needs the full 2 × 2.
- **Batch:** ×0.5 R1-11 per dough (125 g flour), about 10 cookies of 48 g, sugar adjusted per cell; everything else identical. Weigh soda and salt on a 0.1 g scale.
- **Responses:** primary = day-2 centre chewiness by snap/bend load or a compression test on the centre of a cookie (same protocol, same time after baking), plus a blind directional paired test ("which is chewier?"). Guard = diameter and spread ratio (two diameters at right angles, caliper thickness), colour card, bake loss. Store all cookies in identical sealed boxes at room temperature.
- **Replicates and blocking:** two doughs per cell, one on each of two days (days = blocks), each block containing all four cells; one flour lot, one butter and egg batch per day.
- **Randomization:** mix in randomized order with fixed 15 min offsets; same 24 h rest for all; bake one tray at a time in the same oven position, order randomized by die; average the 6 cookies measured per tray into one value per dough.
- **Blinding:** trays and storage boxes labelled with three-digit codes by a helper; measurements and tasting on coded samples.
- **Analysis:** cell means; main effects of sugar level and sugar type; interaction contrast = (brown-rich − baseline type at 70 %) − (brown-rich − baseline type at 100 %); compare each with its noise from the baseline SD (main effect σ × 0.71, interaction 2σ ÷ √2); check the direction in each block. The hypothesis is supported if the brown-sugar effect on chewiness is real at 70 % and the interaction contrast is positive and larger than its noise.
- **Confounder:** brown sugar adds moisture and acidity (molasses), which reacts with soda and changes spread and colour. Record spread and colour as guard responses; if spread changes a lot, chewiness differences may be due to thickness, so compare chewiness at matched thickness or report thickness alongside.
- **Sensory:** triangle test between 70 %-baseline type and 70 %-brown-rich (does anyone notice?), then a directional paired comparison for chewiness with 12+ tasters (need 10 of 12), after an allergen briefing (gluten, egg, milk, soy lecithin in the chocolate).

</details>

## E. Practical assessment

**Task:** In one session, **(1)** run a coded triangle test with at least 9 tasters comparing the [R1-11](recipes/R1-11-chocolate-chip-cookie.md) cookie made with 1.6 % salt and with 1.0 % salt (two doughs, same day, same rest, baked one tray at a time in randomized order), and **(2)** submit a written plan for your capstone's 2 × 2 round: specification, factors and levels, cells, bake plan with randomized order and positions, blocking, codes, responses with protocols, and the noise figures you will compare results with.

| Criterion | Pass | Merit | Not yet |
|---|---|---|---|
| Triangle test set-up | Three-digit codes by a helper; six orders balanced; identical portions and temperature | Order sheet and code key kept and attached | Samples labelled or orders unbalanced |
| Safety and ethics | Written allergen list given; allergies asked; purpose explained | Signed or ticked briefing sheet per taster | No briefing |
| Triangle analysis | Correct count and critical value; correct conclusion including what a non-significant result does not show | Follow-up paired test ("which is saltier?") run and interpreted | Wrong critical value or conclusion |
| Doughs | Same day, same rest, randomized bake order, same position | Bake loss and diameters recorded for both | Different days or positions |
| Capstone 2 × 2 plan | All elements listed above; every cell in every block | Expected effect sizes compared with noise to justify replicate numbers | No blocking or no replicates |
| Noise figures | Batch SD and CV of the primary response from 3 baseline bakes | Measurement repeatability reported separately | Missing |

Pass requires "Pass" or better in every row. The capstone itself is assessed with the [capstone rubric](stage-1/capstone/README.md?id=grading-rubric).
