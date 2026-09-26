# Brief for module-writing agents

You are writing part of a professional baking curriculum (Stage 1 of 3) published as a docsify
site. Repo root: `C:\Users\TalGiladi\OneDrive\repos\course-creator\baking-course`.

Before writing, read in full:
1. `CLAUDE.md` — voice, units, link rules, source honesty, and the exact templates for
   lessons, recipes, experiments, troubleshooting entries, module assessments and module pages.
2. `curriculum/course-outline.md` — binding lesson IDs/titles/prerequisites/science units/threads.
3. `curriculum/file-index.md` — exact file paths for every recipe, experiment, science unit and
   troubleshooting file. Link only to paths listed there (they may not exist yet; that is fine).
4. `brief/original-brief.md` — the original requirements (sections 3, 7, 10, 11, 15 matter most).
5. `references/bibliography.md` — the only citable sources (use the keys). Never invent a
   citation, page number, DOI, paper, or quote.

Quality bar:
- The learner is an engineer who wants to reach pastry R&D. Every lesson must build a correct
  mental model and connect it to what they will see and feel on the bench. Give real numbers
  (percentages, temperatures, times, ranges) that are correct for standard professional
  practice; when practice varies, give the range and say what moves you within it.
- Recipes must be genuinely bakeable in a serious home kitchen (home oven, stand mixer optional
  unless stated). Formulas must add up: check every baker's % and gram value arithmetically,
  and totals. Hydration statements must match the numbers.
- Experiments: small batches (usually 150–250 g flour per variant, or the smallest batch that
  behaves representatively), one independent variable, controlled variables listed, a printable
  observation table, and the expected results hidden in `<details class="answer">`.
- Troubleshooting: Symptom → likely causes → how to test → correction, as tables.
- Assessments test application: formulation arithmetic with worked answers, diagnosis cases,
  experiment design, and a practical assessment rubric.
- "Where this goes next" callouts name the specific later Stage 1 lesson and a plausible
  Stage 2/3 extension (Stage 2 = advanced artisan/professional pastry; Stage 3 = R&D and
  formulation) — these hooks feed the extension architecture, so be concrete.
- Links: root-relative, no leading slash, no `../`.
- Module page: include the Key terms table (Term | Definition), 8–20 terms.

Write only the files assigned to you. Do not edit shared files (outline, sidebar, CLAUDE.md,
bibliography, other modules). Do not run git. When done, reply with: the list of files written
and any bibliography entries you wish existed but did not cite (one line each), nothing else.
