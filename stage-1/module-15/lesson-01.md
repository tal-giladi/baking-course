# 15.1 · Lamination theory: layers, fat plasticity and temperature

<div class="prereq">

**Requires:** [08.1 Fats: composition, crystals, plasticity](stage-1/module-08/lesson-01.md) · [11.1 Short dough science](stage-1/module-11/lesson-01.md)

**Science:** [SC-04 Lipids](stage-1/science/sc-04-lipids.md) (plasticity, melting range) · [SC-11 Phase changes and gases](stage-1/science/sc-11-phase-changes-gases.md) (steam lift) · review [SC-12 Rheology](stage-1/science/sc-12-rheology.md)

**Practical:** lock-in and three single folds with a test block (this lesson) · [R1-33 Puff pastry](recipes/R1-33-puff-pastry.md) · **Experiment:** [X1-39 Number of folds vs puff pastry lift](experiments/X1-39-puff-folds.md)

**Threads:** T9 Structured doughs · T6 Fats & shortening · T1 Measurement & formulation math  **Time:** 50 min reading + 1.5 h bench (practice block)

</div>

## Why this lesson exists

Puff pastry, croissant and danish are made by the same machine: a stack of thin, alternating sheets of dough and solid fat that the oven turns into separated, crisp leaves. Whether that machine works is decided before the oven, by two things you can measure: **how many layers you built** and **what temperature the fat was when you built them**. Most lamination failures (leaking butter, bready interiors, shattered layers) are temperature failures that happened 30 minutes to 12 hours before the bake. This lesson gives you the arithmetic of layers and the physics of the fat so that you can plan a lamination and diagnose one.

## You will be able to

- Name the parts of a laminated dough (détrempe, beurrage, lock-in, turn, pâton) and describe what happens to each in the oven.
- Calculate the number of fat and dough layers for any sequence of single and double turns, and the nominal thickness of each layer at a given sheet thickness.
- Explain why too many turns reduces lift, using a layer-thickness calculation.
- State the working temperature window for butter and dough, recognise by touch when either is out of it, and choose when to rest.
- Shape a butter plaque of a specified size and thickness and lock it into a dough.

## What a laminated dough is

A laminated dough has two components, kept separate on purpose:

| Part | French term | What it is | Typical composition |
|---|---|---|---|
| Base dough | **Détrempe** | A dough of flour, water (or milk), salt, sometimes a little butter, sugar and yeast | Puff: flour 100, water 45–55, salt 2, butter 10–15. Croissant: flour 100, liquid 55–60, sugar 10–12, salt 2, yeast, butter 5–8 |
| Laminating fat | **Beurrage** (roll-in fat) | A single slab (plaque) of plastic fat, usually butter | Puff 70–80 % of détrempe flour; croissant 50–55 %; danish 55–65 % |
| The assembled block | **Pâton** | Détrempe wrapped around beurrage, then rolled and folded | — |

The steps are always the same:

1. **Lock-in (enclosing, *tourage* begins).** The butter plaque is wrapped in the détrempe so that no butter is exposed.
2. **Turns (folds).** The block is rolled out into a long rectangle and folded back on itself. Each fold multiplies the number of layers. Between some turns the block rests in the refrigerator.
3. **Sheeting and cutting.** The finished block is rolled to its final thickness (puff about 2.5–4 mm, croissant about 3.5–4.5 mm), cut and shaped.
4. **(Yeasted doughs only) Proofing.** Yeast gas expands the dough layers between the fat layers.
5. **Baking.**

The difference from the flaky pie dough of [11.3](stage-1/module-11/lesson-03.md) is control. In pie dough, butter pieces of random size and position give irregular flakes. In lamination, one continuous sheet of fat is multiplied into a known number of continuous layers of known thickness.

## How layers become lift

In the oven a laminated dough goes through a sequence that is a race between heat and structure ([SC-11](stage-1/science/sc-11-phase-changes-gases.md)):

| Surface zone temperature | What happens |
|---|---|
| Up to ~30 °C | Butter layers soften; in yeasted dough, yeast gas expands (oven spring begins) |
| ~30–38 °C | Butterfat melts completely. The fat layers become liquid films, but the dough layers still hold them apart |
| ~60–80 °C | Starch in the dough layers gelatinizes (limited by the low water) and gluten and other proteins begin to set: the dough leaves start to become rigid |
| ~100 °C | Water in the dough layers (about 35–45 % of their weight) and in the butter (about 16 %) turns to steam. Liquid water expands roughly 1,600-fold when it becomes steam at atmospheric pressure. The steam is trapped between leaves separated by fat films and pushes them apart |
| Above ~100 °C at the surface | The leaves dry, set and brown; the melted fat, sitting in contact with thin dough, **fries** each leaf crisp. Maillard browning of the surface ([SC-07](stage-1/science/sc-07-browning.md)) |

Three conditions must hold for lift:

1. **The fat layers must be continuous** at the moment the oven heat arrives. A fat film is what stops two dough leaves from sticking together, and it acts as a seal that holds the steam in the gap. Where the fat is missing (shattered) or absorbed into the dough (smeared), two leaves fuse into one thicker leaf, and steam escapes sideways.
2. **The dough leaves must set before the steam is gone.** This is why laminated doughs bake hot: 200–220 °C (390–430 °F) for puff pastry, 185–200 °C fan for croissant. In a cool oven the butter melts and runs out long before the leaves are set; the pastry leaks, then rises little.
3. **The edges must be open.** A cut edge with separated layers lets them rise freely. An edge that was crushed or sealed (by a dull knife, a dragging blade or egg wash running down the side) glues the layers together and holds them down.

<div class="callout science">

**Science:** Puff pastry has no yeast and no chemical leavener. All of its lift comes from steam and from the layered structure that traps it, which is why a 3 mm sheet can rise to several times its thickness. In croissant, yeast gas contributes a second mechanism: each dough layer is itself a thin sheet of fermented bread, and its gas cells expand in the oven. That is why the croissant crumb is an open honeycomb of large cells between leaves, not the dense stack of fine leaves you see in puff pastry.

</div>

## Layer arithmetic

The counting convention in this course: count **fat layers** (F) and **dough layers** (D). After a standard lock-in (butter enclosed once, dough above and below) there is **one fat layer and two dough layers**: D F D.

A **single turn** (letter fold, *tour simple*) folds the rolled rectangle in three. Stack three copies of D F D and the touching dough layers at each fold merge into one:

D F D | D F D | D F D → D F D F D F D: **F = 3, D = 4**.

A **double turn** (book fold, *tour double*) folds it in four: both ends are folded to meet near the centre, then the whole thing is folded in half. Four copies of the stack: **F = 4, D = 5**.

So each single turn multiplies the fat layers by 3 and each double turn by 4, and there is always one more dough layer than fat layers:

**F = 3^s × 4^d  and  D = F + 1**, where s = number of single turns, d = number of double turns.

| Sequence after lock-in | Fat layers F | Dough layers D | Typical use |
|---|---|---|---|
| 1 double + 1 single | 4 × 3 = **12** | 13 | Croissant (common professional choice) |
| 3 singles | 3³ = **27** | 28 | Croissant, danish |
| 2 doubles | 4² = **16** | 17 | Croissant, danish |
| 4 singles | 3⁴ = **81** | 82 | Short of classic puff; rough puff equivalent |
| 4 doubles | 4⁴ = **256** | 257 | Puff pastry (faster schedule) |
| 6 singles | 3⁶ = **729** | 730 | Classic puff pastry |

<div class="callout warn">

**Watch the convention.** Books count layers in different ways: some count only butter layers, some count dough plus butter, and some use an "English" lock-in in which the butter covers two-thirds of the dough and is folded like a letter, giving D F D F D (two fat layers) before the first turn, so every count doubles (6 singles → 2 × 729 = 1,458 fat layers). None of these is wrong. Always state the convention when you write a formula sheet.

</div>

### Why more layers is not better

Multiply the layers and each one gets thinner. The thickness is fixed by the final sheet, not by the number of turns. Take the croissant dough of [R1-34](recipes/R1-34-croissant.md): about 881 g of détrempe (density ≈ 1.15 g/cm³ → about 766 cm³) and 275 g of butter (density ≈ 0.92 g/cm³ → about 299 cm³). Butter is 299 ÷ (299 + 766) ≈ **28 %** of the volume. Sheeted to 4.0 mm, that is 1.12 mm of butter and 2.88 mm of dough in total, divided among the layers:

| Croissant at 4.0 mm | Fat layers | Each butter layer | Each dough layer |
|---|---|---|---|
| 1 double + 1 single | 12 | 1.12 ÷ 12 ≈ **93 µm** | 2.88 ÷ 13 ≈ **220 µm** |
| 3 singles | 27 | ≈ **41 µm** | ≈ **103 µm** |
| 4 singles | 81 | ≈ **14 µm** | ≈ **35 µm** |

For the classic puff pastry of [R1-33](recipes/R1-33-puff-pastry.md) (658 g détrempe ≈ 548 cm³ at about 1.2 g/cm³, 300 g butter ≈ 326 cm³, so butter ≈ 37 % of the volume) sheeted to 3.0 mm, there is 1.12 mm of butter:

| Puff at 3.0 mm | Fat layers | Each butter layer | Each dough layer |
|---|---|---|---|
| 4 singles | 81 | ≈ 14 µm | ≈ 23 µm |
| 4 doubles | 256 | ≈ 4.4 µm | ≈ 7.3 µm |
| 6 singles | 729 | ≈ 1.5 µm | ≈ 2.6 µm |
| 8 singles | 6,561 | ≈ 0.17 µm | ≈ 0.29 µm |

Compare those numbers with the things the layers are made of. A large wheat starch granule is about 20–35 µm across ([Delcour]); butter contains fat crystals and water droplets of the order of micrometres. A dough "layer" 2.6 µm thick cannot actually be a continuous sheet of dough; it is thinner than the particles in it. So the nominal counts are an upper bound, not a description. What really happens as you add turns:

- **Too few turns** (2–3 singles in puff): thick butter layers, few barriers. Lift is high but irregular, with big blisters; the thick fat pools and leaks, and the leaves are thick and bready.
- **The working range** (croissant 12–27 fat layers; puff 256–729 nominal): layers thin enough to be fine and even, still largely continuous. In puff pastry, many nominal layers have already merged, but enough continuous films survive to trap the steam.
- **Too many turns** (puff beyond about 6 singles, croissant beyond about 3 singles or 1 double + 2 singles): the fat films become so thin that they break up and are absorbed into the dough. The dough layers fuse. The product rises less and has a finer, more uniform, bread- or cracker-like interior.

For croissant the optimum sits much lower than for puff because each dough layer must be thick enough to contain its own gas cells and still make a honeycomb: at 4 singles, a 35 µm dough leaf is about one starch granule thick. [X1-39](experiments/X1-39-puff-folds.md) measures the curve for puff pastry.

<div class="callout key">

**Key idea:** Lift needs *continuous* fat layers *separating* dough layers at the moment the oven heat arrives. The number of turns sets how many layers you are asking for; temperature and technique decide how many you actually get.

</div>

## Fat plasticity: the temperature window

Butter is a mixture of solid fat crystals, liquid oil and about 16 % water dispersed as fine droplets ([SC-04](stage-1/science/sc-04-lipids.md), [08.1](stage-1/module-08/lesson-01.md)). Its behaviour under the rolling pin depends on the ratio of solid to liquid fat, which is set by temperature:

| Butter temperature | Feel | Behaviour under the rolling pin |
|---|---|---|
| Below ~10 °C | Hard; snaps when bent | **Brittle.** Cracks into plates and shards; the dough stretches over the gaps. Bakes with streaks of fused dough and pools of butter |
| 10–12 °C | Firm; bends slowly, may crack at the edge | Workable only if rolled slowly and the dough is equally firm |
| **13–16 °C** | Bends without cracking; a fingertip dents it with firm pressure; surface matt, not shiny | **Plastic.** Flows as a continuous sheet under pressure and stays where it is put. The target |
| 17–20 °C | Soft; fingertip sinks in easily; starts to feel greasy | Begins to smear; at thin layers it starts working into the dough |
| Above ~20–22 °C | Greasy, shiny, sticks to paper | **Smears and oils out.** Absorbed into the dough; layers disappear. Bakes bready and greasy, leaks |

**Plasticity** means the fat behaves like a solid under small forces (it holds its shape when resting) but flows like a very thick fluid once the force exceeds a threshold (its yield stress, [SC-12](stage-1/science/sc-12-rheology.md)). In the 13–16 °C window there is enough crystal network to hold a sheet together and enough liquid oil to let it flow without fracturing.

### Butter and dough must match in firmness

The rolling pin presses on the whole stack. If the dough is firmer than the butter, the butter squeezes out ahead of the pin and gathers in thick patches, and the dough elsewhere touches itself. If the butter is firmer than the dough, the butter resists, cracks, and the soft dough stretches around the pieces. The rule is **equal consistency**: press the dough and the butter with the same finger and they should resist about equally.

Because a dough does not harden like butter when cold, the two usually match with the dough a little colder:

| At lock-in | Temperature | Check |
|---|---|---|
| Détrempe | 4–10 °C (croissant and danish from the overnight retard at 3–5 °C; puff after ≥ 1 h rest) | Firm, cool, not stiff; dents slowly |
| Butter plaque | 12–15 °C | Bends to about 90° without cracking |
| Block during turns | Aim to keep the block at **10–15 °C**; rest in the refrigerator if it exceeds about 16 °C or the butter feels soft through the dough | Probe the centre of the block's thickness |

These are standard professional ranges. In a warm kitchen (above about 24 °C), work faster, chill the rolling pin and the bench (a tray of ice on the bench for 10 minutes), and rest more often.

### Which butter

- **Fat content ≥ 82 %.** European-style ("dry") butter at 82–84 % fat has less water (about 14–16 %) than 80 % butter. Less water makes the plaque more plastic and less prone to smearing and sticking. Salted butter can be used if you reduce the salt in the détrempe, but unsalted is standard.
- **A wider plastic range is better.** Butter varies with season and the cows' diet: winter butter tends to be harder and more brittle, summer butter softer. Professionals use a special **laminating butter** (beurre de tourage, sold in sheets) made from higher-melting butterfat fractions, which stays plastic over a wider range. At home, a good 82 % block butter works well if you control temperature.
- **Shortenings and margarines** for lamination (puff pastry margarine) have a much wider plastic range and a higher melting point, which makes them far easier to laminate but leaves a waxy mouthfeel because they do not melt at mouth temperature. They are an industrial tool; this course uses butter.

### Shaping the plaque

A plaque is a slab of butter of exact dimensions and uniform thickness.

1. Take the butter from the refrigerator (4–5 °C). Cut it into 1 cm slices and lay them edge to edge on parchment, forming roughly the target shape.
2. Cover with a second sheet and **beat** with the rolling pin, working from the centre. Beating plasticizes cold butter by mechanical work, not by warming it: the crystal network is broken up and the butter becomes pliable while still cold.
3. Fold the parchment into a packet of the exact target size (for example 19 × 19 cm), crease the edges sharply, turn it over, and roll the butter inside until it fills the packet to the corners with an even thickness.
4. Refrigerate flat. Before lock-in, bring the plaque to 12–15 °C (usually 10–20 minutes on the bench from the refrigerator; check by bending the packet: it should flex without cracking).

A 275 g plaque at 19 × 19 cm is 299 cm³ ÷ 361 cm² ≈ **8 mm** thick. Knowing the thickness lets you check that the plaque is even: measure at the four corners and the centre.

## The rhythm of a lamination

**Rolling.** Roll from the middle outwards, towards you and away, not over the ends (which thins them). Keep the sides straight and the corners square: tap the edges with the side of the pin or a bench scraper. Uneven rectangles give uneven layers, and the thin parts of the sheet end up with fewer effective layers than the thick ones.

**Dimensions.** For a single turn, roll to about three times the length of the block (width unchanged); for a double, about four times. Rolling a 20 × 20 cm block to 20 × 60 cm and folding it in three returns a 20 × 20 cm block.

**Flour.** Dust lightly and **brush off all surface flour before folding** (a dry pastry brush). Flour trapped between layers bakes into dry, pale streaks and can stop them fusing where they should.

**Rotate 90° between turns.** After each fold, turn the block so that the folded edge is on your left (like the spine of a book) and roll along the length again. Alternating direction evens out the gluten strain.

**Mark the turns.** Press one fingertip dent into the block for each turn completed. With several blocks in the refrigerator, this is how professionals track them.

**Rest when needed.** Two things force a rest: the **butter warming** (block above about 15–16 °C, butter feels soft or starts to show) and **the gluten fighting back** (the dough springs back, you cannot get the length without pressing hard). Rest wrapped, flat, in the refrigerator for **20–30 minutes**. The rest re-firms the butter and lets the stretched gluten relax (stress relaxation, [SC-12](stage-1/science/sc-12-rheology.md)). Resting too long in the refrigerator (hours) or any time in the freezer can take the butter below 10 °C: then it shatters on the next turn. If the block has been in the refrigerator for more than an hour, give it 5–10 minutes on the bench before rolling, and bend a corner to check.

<div class="callout pro">

**Professional practice:** A mechanical sheeter reduces thickness in small, even steps (a few millimetres per pass) with very little heat input, which is why bakeries can give three turns in quick succession without rests. By hand you roll more slowly and the block warms, so you rest more. Rolling fast and forcefully makes the dough fight back and warms the butter at the same time. Use steady, even strokes and let the block rest when it resists.

</div>

### Gluten in the détrempe

The détrempe needs enough gluten strength to be rolled into a thin continuous sheet without tearing, but every turn stretches the gluten further, and a dough that is too strong or too developed will shrink after cutting and fight every turn. So détrempes are mixed **only to a smooth, cohesive dough (short mix)**, not to a windowpane; the turns and rests do the remaining development. A small amount of butter in the détrempe (5–15 % of flour) shortens the gluten, makes the dough more extensible and softens it to match the beurrage.

## On the bench

**Practice block (1.5 h).** Before your first real lamination, laminate a block of cheap dough so that your hands learn the moves without the pressure of a real product: 250 g flour, 125 g cold water, 5 g salt, 25 g soft butter, short-mixed and rested 1 hour in the refrigerator. Shape a 150 g butter plaque to 14 × 14 cm (163 cm³ ÷ 196 cm² ≈ 8 mm) and bring it to 12–15 °C. Lock it in (envelope method, see [15.2](stage-1/module-15/lesson-02.md)), give three single turns with rests as needed, and record the block temperature before and after every turn. Then cut the block in half with a sharp knife and look at the cut face with a magnifier: can you see continuous butter layers, or patches and gaps? Bake 6 × 6 cm squares at 210 °C if you like, and compare them with what you get in [R1-33](recipes/R1-33-puff-pastry.md).

Then run [X1-39](experiments/X1-39-puff-folds.md) and move on to [R1-33](recipes/R1-33-puff-pastry.md).

## What goes wrong

- **Butter shatters into shards while rolling.** Butter below about 10 °C, or much firmer than the dough. See [Butter breaks into shards during lamination](troubleshooting/laminated.md?id=butter-breaks-into-shards-during-lamination).
- **Butter smears, shows through or sticks to the pin.** Butter or block too warm, or dough torn by rolling too hard. See [Butter smears or melts during lamination](troubleshooting/laminated.md?id=butter-smears-or-melts-during-lamination).
- **Dough springs back and fights the pin.** Gluten needs a rest; détrempe mixed too long. See [Dough shrinks after rolling or cutting](troubleshooting/laminated.md?id=dough-shrinks-after-rolling-or-cutting).
- **Layers not distinct after baking.** Too many turns, smeared butter, or crushed edges. See [Layers not distinct](troubleshooting/laminated.md?id=layers-not-distinct).

## Lab notebook

- Butter brand and fat % on the label; plaque weight, dimensions and measured thickness at five points.
- Détrempe temperature and plaque temperature at lock-in; firmness match (describe).
- For every turn: type (single or double), block temperature before and after, dimensions rolled to, time, rest length.
- Cross-section photo of the finished block (cut with a sharp knife), with a ruler in the frame.
- Kitchen temperature.

## Check yourself

1. A croissant dough gets one double turn and then two single turns after a standard lock-in. How many fat layers and dough layers does it have? How does that compare with the common 1 double + 1 single?

<details class="answer"><summary>Answer</summary>

F = 4 × 3 × 3 = **36**, D = **37**. That is three times the 12 fat layers of 1 double + 1 single. At 4 mm with 28 % butter by volume, each butter layer would be about 1.12 mm ÷ 36 ≈ 31 µm and each dough layer about 2.88 ÷ 37 ≈ 78 µm: finer and more even, but with thinner dough leaves and therefore a finer, less open honeycomb. Both schedules are used; 36 is towards the upper limit for croissant.

</details>

2. You use an English lock-in (two fat layers) and give puff pastry 5 single turns. How many fat layers? What would 6 single turns give with an envelope lock-in?

<details class="answer"><summary>Answer</summary>

English lock-in: F = 2 × 3⁵ = **486**. Envelope lock-in with 6 singles: 3⁶ = **729**. The English lock-in effectively gives you one extra "half turn" of layering at the start.

</details>

3. The butter plaque bends without cracking but the détrempe, straight from a 3 °C refrigerator after 16 hours, feels much stiffer than the butter. What will happen if you lock in and roll now, and what do you do?

<details class="answer"><summary>Answer</summary>

The firmer dough will not flow at the same rate as the butter: the butter will be squeezed ahead of the pin and gather in thick patches, while the dough stretches and thins elsewhere, giving uneven layers and possibly butter breaking through. Let the dough warm a few degrees (5–10 minutes on the bench), or roll the dough out first to soften it mechanically, until pressing the dough and the butter gives about the same resistance.

</details>

4. Why does puff pastry bake at 200–220 °C and not at 170 °C?

<details class="answer"><summary>Answer</summary>

The butter melts at 30–38 °C, long before the dough leaves set. In a hot oven, the surface layers reach 100 °C and set quickly, so steam is generated and trapped while the melted fat is still held between leaves. In a cool oven the fat melts and runs out of the pastry for several minutes before the leaves are rigid; the pastry leaks, the layers collapse onto one another and the rise is low and greasy.

</details>

5. Your block measures 18 °C at the core after the second single turn and the butter feels soft through the dough. What is the risk if you give the third turn now, and what is the right rest?

<details class="answer"><summary>Answer</summary>

At 18 °C the butter is starting to smear; rolling it thinner now will work it into the dough and lose layers, giving a bready, greasy result. Wrap and refrigerate 20–30 minutes until the core is back to about 10–13 °C (check), then roll. Do not freeze it: that risks taking the butter below 10 °C, where it shatters.

</details>

## Where this goes next

<div class="callout next">

**Next:** [15.2 Puff pastry](stage-1/module-15/lesson-02.md) applies this arithmetic to the classic six-turn puff and the faster blitz. [15.3 Croissant](stage-1/module-15/lesson-03.md) adds fermentation, which turns each dough layer into a sheet of bread and makes proof temperature a second temperature constraint. [15.4](stage-1/module-15/lesson-04.md) turns the temperature model into a diagnostic clinic. **Stage 2** covers inverted puff (feuilletage inversé, butter outside the dough), laminating butter and its fractionation, mechanical sheeters and reduction schedules, and laminated brioche and viennoiserie variants. **Stage 3** treats lamination as a materials problem: rheological matching of dough and fat, fat-crystal polymorphism and tempering of roll-in fats, and image analysis of cross-sections to quantify real (not nominal) layer count and thickness.

</div>

## Sources

[Suas], [Gisslen], [CIA-BP], [Friberg], [Figoni], [McGee], [Delcour]. The layer-count formulas follow directly from the folding geometry. Working temperatures for butter and dough, rest times and turn schedules are standard professional practice; the layer-thickness figures are this course's calculation from the R1-33 and R1-34 formulas with typical densities.
