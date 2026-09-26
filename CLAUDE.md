# Baking course — authoring guide

Static docsify site. The master plan is `curriculum/course-outline.md`; IDs, titles, file
paths and prerequisites there are binding. Build status is tracked in `BUILD_PROGRESS.md`.

## Audience and voice
- Adult learner with an engineering background aiming at professional pastry R&D. Write in
  second person, direct, precise, no fluff, no "Let's dive in", no emoji.
- Not a university chemistry course: explain the mechanism at the depth needed to *predict
  what happens when a variable changes*. Always connect science to a bench observation.
- Never "mix until ready". Give measurable or observable endpoints: temperatures, times,
  dough temperature, windowpane, volume increase %, colour, internal temperature, texture cues.
- Units: grams and °C. Give °F in parentheses only for oven and sugar temperatures. Liquids
  in grams too. Pan sizes in cm.
- Experiments use **small batches** (typically 150–250 g flour, or the smallest batch that
  behaves representatively) and always give a scale-up factor/table.
- Safety callouts where real (hot sugar, raw egg, raw flour, allergens, knives, oven burns).

## Paths and links
- Lessons `stage-1/module-XX/lesson-YY.md`, module page `stage-1/module-XX/README.md`,
  quiz `stage-1/assessments/module-XX-quiz.md`, science `stage-1/science/sc-XX-<slug>.md`,
  recipes `recipes/R1-XX-<slug>.md`, experiments `experiments/X1-XX-<slug>.md`,
  troubleshooting `troubleshooting/<category>.md`.
- **Links are root-relative without a leading slash**: `[03.2](stage-1/module-03/lesson-02.md)`,
  `[R1-01](recipes/R1-01-lean-loaf.md)`. Never `../`. (docsify resolves from the site root.)
- Recipe/experiment slugs are fixed in `curriculum/file-index.md` — use exactly those.

## Honesty about sources
- Recipes carry exactly one classification tag (HTML span): `<span class="tag established">Established technique</span>`,
  `<span class="tag source">Source-derived</span>`, `<span class="tag educational">Educational formulation</span>`,
  `<span class="tag experimental">Experimental formulation</span>`. Most course recipes are
  educational formulations built on established technique — say so.
- Cite only works in `references/bibliography.md` (incl. [FDA-FoodCode], [USDA-FDC], [Lawless]) using its short keys, e.g. (Figoni, *How
  Baking Works*) or [Figoni 2011]. Do not invent page numbers, papers, DOIs or quotes. If a
  number is general professional practice, say "standard professional practice" instead of
  citing. Do not reproduce copyrighted recipes verbatim.

## Callouts (raw HTML, blank line inside so markdown renders)
```html
<div class="callout science">

**Science:** ...

</div>
```
Classes: `science`, `key`, `warn`, `safety`, `pro` (professional practice), `next` (Stage 2/3 hook).
Quiz answers: `<details class="answer"><summary>Answer</summary> ... </details>` (blank lines inside).

## Lesson template
```
# 03.2 · The twelve steps of bread: your first lean loaf

<div class="prereq">

**Requires:** [03.1 Yeast](stage-1/module-03/lesson-01.md) · [01.3 DDT](stage-1/module-01/lesson-03.md)
**Science:** [SC-08 Microbiology](stage-1/science/sc-08-microbiology.md)
**Practical:** [R1-01 Lean loaf](recipes/R1-01-lean-loaf.md) · **Experiment:** [X1-07](experiments/X1-07-...md)
**Threads:** T3 Fermentation · T11 Workflow  **Time:** 45 min reading + 5 h bench

</div>

## Why this lesson exists            (2–4 sentences: the problem this solves)
## You will be able to               (3–5 measurable objectives)
## <concept sections>                (the mechanism, numbers, diagrams as tables/mermaid)
## On the bench                      (what to make, what to watch, links to recipe/experiment)
## What goes wrong                   (2–4 key failures, link troubleshooting entries)
## Lab notebook                      (what to record for this lesson)
## Check yourself                    (3–5 questions with <details class="answer">)
## Where this goes next              (callout next: link to later lesson + Stage 2/3 hook)
## Sources                           (keys from bibliography)
```
Length 1,500–3,000 words. Tables for numbers. Mermaid allowed (```mermaid fences).

## Recipe template (`recipes/`)
Title `# R1-01 · Lean straight-dough loaf`, then classification tag, then sections:
Objective · Expected result · Formula (table: Ingredient | Baker's % | Grams, with total and
yield; batch sized for a home kitchen; a ×0.5/×2 note) · Equipment · Mise en place ·
Procedure (numbered, each step with temperature/time/observable endpoint) · Critical control
points (table: CCP | target | why) · Common failures (link troubleshooting) · Scientific
explanation · Variables you can change (table: variable | direction | expected effect) ·
Experiment suggestions (link X1-) · Used in (lesson links) · Sources.

## Experiment template (`experiments/`)
Title `# X1-04 · Hydration series`, sections: Question · Before you start: write your
hypothesis (prompt, no answer) · Variables (independent / dependent / controlled table) ·
Batch and scale (per-variant formula table in grams, total ingredients, ×2.5 scale) ·
Procedure (with labelling, timing offsets so variants are comparable) · Measurements
(what, how, with what tool) · Observation sheet (markdown table to copy/print) · Analysis
questions · `<details class="answer"><summary>What you should expect to see</summary>` —
expected results and the explanation, only after the learner has run it · Going further ·
Used in.

## Troubleshooting entry format (`troubleshooting/<category>.md`)
```
### Dense, tight crumb {#dense-crumb}
| Likely cause | How to test | Correction |
|---|---|---|
```
followed by 1–3 lines of reasoning and links to lessons/experiments. Heading anchors use
`{#kebab-id}` is NOT supported by docsify — instead use plain `### Dense, tight crumb` and
link with `troubleshooting/bread-lean.md?id=dense-tight-crumb` (docsify's auto id: lowercase,
spaces→hyphens, punctuation removed).

## Module assessment (`stage-1/assessments/module-XX-quiz.md`)
Sections: A. Knowledge check (6–10) · B. Formulation exercises (2–4, numeric, worked
answers) · C. Troubleshooting case (1–2 failed products described by symptoms; learner
diagnoses) · D. Experimental design (1 hypothesis to test; answer shows a good design) ·
E. Practical assessment (product, spec, pass criteria rubric table). All answers in
`<details class="answer">`.

## Module page (`stage-1/module-XX/README.md`)
Title `# M03 · Yeast and fermentation: lean bread`; purpose; objectives; lessons table;
practicals; experiments; science units; prerequisites & what depends on this module;
key terms table (Term | Definition) — the glossary is compiled from these; time estimate.
