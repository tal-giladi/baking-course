# M18 · Production, standardization and troubleshooting

## Purpose

By M17 you can make the core bread and pastry repertoire one product at a time. This module adds the three skills that turn a good baker into a professional one and a professional into an R&D practitioner. **Planning:** turning several recipes into one executable timeline that shares an oven, a fridge and your hands, and uses temperature to put each step where it fits. **Standardization:** writing a product down so precisely (formula, process, specification, tolerances, cost) that it comes out the same every time and anyone can make it, and measuring how much it actually varies. **Diagnosis:** going from a failed product to its root cause with evidence, using a general method that works for any product family. The module introduces no new product system; it integrates everything before it, and it is the direct preparation for the capstone.

## Objectives

By the end of M18 you can:

1. Back-schedule a multi-product order from a fixed ready time, identify the critical path and the oven bottleneck, and use DDT, retarding and freezing to fit flexible steps around fixed ones.
2. Write prep lists with par levels, label and date components for FIFO, and build a cleaning schedule into a production plan.
3. Write a standard recipe with formula, process, product specification and tolerances, and keep it under version control with a change log.
4. Measure batch-to-batch variation (mean, SD, CV, moving range), distinguish natural process limits from specification limits, and name the main sources of variation and their controls.
5. Account for yield and loss, and calculate a full cost per saleable unit including packaging, energy and labour.
6. Diagnose a failed product with the six-step method, a fishbone diagram and five whys, recognize common confounded failures, and design the cheapest discriminating test.

## Lessons

| ID | Lesson | Requires | Science | Threads |
|---|---|---|---|---|
| [18.1](stage-1/module-18/lesson-01.md) | Production planning: back-scheduling a baking day | 05.4, 15.3 | — | T11 |
| [18.2](stage-1/module-18/lesson-02.md) | Standardization, batch consistency, costing and quality control | 01.4 | [SC-14](stage-1/science/sc-14-measurement-sensory.md) | T11, T1 |
| [18.3](stage-1/module-18/lesson-03.md) | The diagnostic method: from symptom to root cause | 05.4, 10.4 | — | T12 |

## Practicals

M18 has no new recipes. Its practicals use recipes you already know:

| Practical | Recipes used | Lesson |
|---|---|---|
| Production day for a fixed ready time (worked example: Saturday 10:00) | [R1-06](recipes/R1-06-sourdough-loaf.md), [R1-34](recipes/R1-34-croissant.md), [R1-39](recipes/R1-39-fruit-tart.md) with [R1-21](recipes/R1-21-pate-sucree.md) and [R1-26](recipes/R1-26-creme-patissiere.md), [R1-11](recipes/R1-11-chocolate-chip-cookie.md) | 18.1 |
| Standard recipe with specification, tolerances, cost and change log | Any product you make well; costing examples for [R1-34](recipes/R1-34-croissant.md) and [R1-06](recipes/R1-06-sourdough-loaf.md) | 18.2 |
| Batch consistency series | [R1-02](recipes/R1-02-rolls-pan-loaf.md) rolls (or [R1-11](recipes/R1-11-chocolate-chip-cookie.md)) | 18.2, X1-44 |
| Troubleshooting assessment: six cases across bread, cake, pastry, custard, choux and laminated dough | [R1-06](recipes/R1-06-sourdough-loaf.md), [R1-17](recipes/R1-17-pound-cake.md), [R1-39](recipes/R1-39-fruit-tart.md), [R1-25](recipes/R1-25-creme-brulee.md), [R1-32](recipes/R1-32-eclairs-profiteroles.md), [R1-34](recipes/R1-34-croissant.md) | 18.3 |

## Experiments

| ID | Experiment | Question |
|---|---|---|
| [X1-44](experiments/X1-44-batch-consistency.md) | Batch consistency: the same product three times | Following the same standard recipe on three different days, how much do the results vary within and between batches, which source of variation is largest, and what tolerance can you honestly specify? |

## Science units

- [SC-14 Measurement, sensory evaluation and variability](stage-1/science/sc-14-measurement-sensory.md): first needed in 18.2. Resolution, accuracy and precision; replicates, mean, SD and CV; confounders; sensory test types, the triangle test and bias control.

## Troubleshooting

M18 teaches the method behind the whole troubleshooting database rather than owning a product category. Lesson [18.3](stage-1/module-18/lesson-03.md) shows how to use every category file inside the six-step method; the index and method page is [troubleshooting/README.md](troubleshooting/README.md).

## Prerequisites and what depends on this module

**Requires:** [05.4 The sourdough loaf and the bread clinic](stage-1/module-05/lesson-04.md) and [15.3 Croissant](stage-1/module-15/lesson-03.md) for planning; [01.4 Scaling, yield, loss and the standardized formula sheet](stage-1/module-01/lesson-04.md) for standardization and costing; [10.4 The cake clinic](stage-1/module-10/lesson-04.md) with 05.4 for diagnosis. The production-day practical assumes you have made the products in [M17](stage-1/module-17/README.md). Food-safety rules come from [00.3](stage-1/module-00/lesson-03.md).

**Needed by:**

- M19 Capstone: [19.1 Designing experiments and sensory tests](stage-1/module-19/lesson-01.md) requires 18.3; the [capstone](stage-1/capstone/README.md) product is delivered as a standard recipe with specification, tolerances, cost and version history, planned as a production run, with at least one documented diagnosis.
- The [final exam](stage-1/assessments/final-exam.md) uses the diagnostic method and the costing arithmetic.
- Stage 2 production work (multi-person schedules, retarder-proofers, full costing with overhead, HACCP) and Stage 3 product development (specifications, capability, designed experiments, root-cause analysis) build directly on this module.

## Key terms

| Term | Definition |
|---|---|
| Back-scheduling | Planning from a fixed ready time backward through each step's duration and dependencies to find when each task must start. |
| Critical path | The longest chain of dependent steps from first action to ready time; any delay on it delays the whole order. |
| Float (slack) | The time a step off the critical path can slip without delaying the finish. |
| Bottleneck | The resource that limits throughput; in a home kitchen usually the oven, then the fridge and the baker's hands. |
| Fixed-duration step | A step whose length is set by a physical or biological process (bulk, proof, bake, cooling) and can only be moved by changing temperature or formula. |
| Flexible step | A step with a wide acceptable window (retard, dough rest, component storage) that can be used as a buffer in a plan. |
| Prep list | A checklist of components that must exist by a deadline, with quantity, storage and label. |
| Par level | The quantity of an ingredient or prepared item to have on hand at the start of a period; amount to make = par − on hand. |
| FIFO | First in, first out: new stock behind old, oldest used first; depends on labelling and dating. |
| Standard recipe | Formula, process, product specification and tolerances, written so that the product comes out the same every time and anyone can make it. |
| Product specification | The measurable targets for a finished product (weight, dimensions, colour, internal temperature, sensory attributes) with methods and sampling frequency. |
| Tolerance | The acceptable range around a specification target; should be set from measured process variation. |
| Natural process limits | Limits calculated from a process's own data (mean ± 2.66 × mean moving range on an individuals chart) that describe its ordinary variation. |
| Moving range | The absolute difference between consecutive measurements; its average estimates short-term variation. |
| Yield factor | Saleable output ÷ planned output; rejects, trim and samples lower it and raise the cost per saleable unit. |
| Retained sample | A piece kept (often frozen) from each batch for later comparison or complaint investigation. |
| Fishbone (Ishikawa) diagram | A cause-and-effect diagram grouping candidate causes of one symptom into categories (formula, ingredients, process, equipment, environment). |
| Five whys | Repeatedly asking "why?" from a proximate cause until reaching a root cause whose correction prevents recurrence. |
| Discriminating test | A test whose result differs depending on which of two candidate causes is true; the cheapest such test is chosen first. |
| Confounded failure | A symptom that two or more different causes produce in almost the same way, so that evidence beyond the symptom is needed to tell them apart. |

## Time estimate

About 1–1.5 weeks at the course pace (week 23), and the production-day practical is best run on a weekend. Reading: about 3 × 60 min. Planning exercise: 45 min. Production day: 3 days elapsed, with about 8–10 h of hands-on work spread over Thursday evening, Friday and Saturday morning. X1-44: three short bake days (about 3 h each, 1 h hands-on) within two weeks, plus 1 h of analysis. Troubleshooting assessment: 90 min. Assessment: [M18 quiz](stage-1/assessments/module-18-quiz.md), about 2 h for sections A–D plus the practical production day, which can be the same production day as the 18.1 practical.
