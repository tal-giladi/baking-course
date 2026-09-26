# SC-10 · Heat transfer: conduction, convection, radiation

<div class="prereq">

**First needed in:** [00.2 Setting up the kitchen lab](stage-1/module-00/lesson-02.md)
**Also used in:** [01.3 Temperature as an ingredient](stage-1/module-01/lesson-03.md) · [04.1 How heat gets into dough](stage-1/module-04/lesson-01.md) · [10.4 Pans, doneness, cooling](stage-1/module-10/lesson-04.md) · [12.1 Egg-thickened custards](stage-1/module-12/lesson-01.md)
**Related units:** [SC-01 Water](stage-1/science/sc-01-water.md) · [SC-07 Browning](stage-1/science/sc-07-browning.md) · [SC-11 Phase changes and gases](stage-1/science/sc-11-phase-changes-gases.md)
**Threads:** T4 Heat, baking & staling · T1 Measurement & formulation math

</div>

## The one-paragraph model

An oven set to 220 °C does not put 220 °C into your bread. It delivers heat to the surface by three routes: **radiation** from the hot walls and elements, **convection** from moving hot air (and steam), and **conduction** from whatever the item sits on. From the surface, heat crawls inward by conduction through a material that is mostly water, starch and air, which is slow. The size of the item matters much more than intuition suggests: the time for heat to reach the centre grows roughly with the *square* of thickness, so a loaf twice as thick needs far more than twice the time. What you control is how fast heat arrives at each surface (oven temperature, fan, pan material and colour, stone or steel, water bath) and how thick the item is. Most baking failures that look like "wrong oven temperature" are really "wrong balance between surface heating and interior heating": a burnt outside and raw middle, or a pale crust on a dried-out cake.

## The mechanism

### The three routes

| Route | How it works | Where it dominates in baking | What changes it |
|---|---|---|---|
| **Conduction** | Energy passed molecule to molecule through a solid or still fluid | Pan to batter; stone or steel to loaf base; surface to centre of everything | Material conductivity, contact, thickness |
| **Convection** | A moving fluid (air, steam, water, frying oil) carries heat to a surface | Fan ovens; the air around every item; water baths | Air speed (fan), air temperature, humidity |
| **Radiation** | Infrared emitted by hot surfaces, absorbed by the item | Home ovens (walls, elements), broilers, deck ovens | Temperature of the emitter (rises very steeply with temperature), colour and finish of the absorbing surface |

In a home oven all three act at once. Radiation from the walls and element is a large share, which is why an item near the element browns faster and why a sheet of foil above a loaf slows browning dramatically: it blocks radiation even though the air temperature is unchanged.

### Conductivity and heat capacity: why pans behave differently

Two properties decide how a material handles heat. **Thermal conductivity** is how quickly heat moves through it. **Heat capacity** (per volume) is how much heat it stores per degree. A thick stone has low conductivity but stores a lot; a thin aluminium sheet conducts superbly but stores little.

| Material | Thermal conductivity (W/m·K, approx.) | Behaviour in the oven |
|---|---|---|
| Copper | ~400 | Extremely even; used for sugar pots, not for baking pans |
| Aluminium | ~200–235 | Heats fast and evenly; the standard professional sheet and cake pan |
| Cast iron, carbon steel ("baking steel") | ~45–55 | Holds a lot of heat when thick; strong bottom heat for pizza and flatbreads |
| Stainless steel | ~15 | Hot spots and slower; often clad around an aluminium core |
| Cordierite baking stone | ~1–3 | Slow to preheat (45–60 min), stores heat, gentle but strong bottom heat |
| Glass, ceramic, stoneware | ~1–1.5 | Slow to heat, but then holds heat and keeps baking after removal |
| Silicone | ~0.2–0.3 | Insulating: pale, soft bottoms and sides |
| Water | ~0.6 | — |
| Raw dough or batter | ~0.3–0.5 | Slow interior heating |
| Baked crumb | ~0.1–0.2 | Its air cells insulate |
| Still air | ~0.026 | Poor conductor; hence convection matters |

Values are standard physical property ranges; products vary. The bench consequence: **glass and dark metal pans bake faster at the edges and bottom, silicone slower**. Standard professional practice is to lower the oven about 10–15 °C for glass or dark pans.

### Colour and finish: absorbing radiation

A surface's **emissivity** (from ~0 for a perfect mirror to ~1 for a matte black body) tells you how much radiant heat it absorbs. Shiny aluminium absorbs little (roughly 0.05–0.1); dark, matte or anodized metal and glass absorb most (~0.8–0.95). A dark pan therefore takes in far more of the radiant heat, and cookies on a dark sheet brown underneath faster than on a bright one. The same logic applies to the food itself: once a crust starts browning it absorbs more radiation, which accelerates further browning ([SC-07](stage-1/science/sc-07-browning.md), [Purlis 2010]).

### Why big things take so long

Heat moves inward by conduction, and conduction through a food is diffusion-like: the time for the centre to respond scales roughly with **thickness squared** divided by the material's thermal diffusivity. The numbers are less important than the intuition:

| Change | Rough effect on time for the centre to heat |
|---|---|
| Double the thickness (same shape) | ~2.5–4× longer (closer to 4× for dense items like cheesecake, less for bread, where steam carries heat inward) |
| Halve the thickness | Roughly a third to a quarter of the time |
| Same weight in a wide shallow pan instead of a deep one | Much faster, drier, more crust |
| Same weight as many small rolls | Much faster; higher crust proportion |

This is why a 1 kg boule bakes for 40–50 minutes but 80 g rolls take 15–20, why a 23 cm cheesecake can be raw in the middle while cracked at the edge, and why you cannot "just double" a cake recipe into a pan twice as deep. It also explains the **temperature gradient**: while the centre of a loaf is still at 60 °C, the crust is well above 100 °C.

### Surface heat transfer: fans and steam

Moving air strips away the layer of cooler air that clings to the item, so a fan oven delivers heat to the surface considerably faster than still air at the same set temperature. Standard professional practice is to set a fan oven about 15–20 °C lower than a static oven, or shorten the time, and to watch colour. The fan also dries surfaces faster, which is good for crisp pastry and bad for a loaf in its first minutes, where you want the surface to stay soft for oven spring.

Condensing steam is the most powerful surface heater of all: when oven steam hits a cooler dough, it condenses and releases its latent heat directly into the surface ([SC-11](stage-1/science/sc-11-phase-changes-gases.md)).

### The oven's thermostat cycles

A home oven thermostat switches the element on and off to stay near the set point; air temperature commonly swings 10–20 °C above and below it, and the dial may be off by 10–25 °C. Hot spots near the back or the element are normal. Opening the door dumps hot air (the walls and any stone hold heat much better than the air). This is why you **map your oven** with an oven thermometer and a tray of white bread slices or a sheet of flour ([X1-02](experiments/X1-02-calibration.md)), preheat 20–30 minutes (45–60 with a stone or steel), and rotate trays halfway.

### Water baths cap the temperature

A bain-marie surrounds a custard with water, which cannot exceed its boiling point (~100 °C; in an oven the bath usually sits lower, around 80–95 °C, because evaporation cools it). The custard edges therefore never see oven temperature, and the whole item heats slowly and evenly, avoiding curdling and cracks ([12.1](stage-1/module-12/lesson-01.md)). Steam in a covered Dutch oven does something similar for bread in its first 20 minutes.

### Carry-over cooking

When you take an item out, the hot outer layers keep conducting heat inward. The centre keeps rising for minutes after removal: a few degrees for a thin custard, often 5–10 °C for a large dense item. Custards, cheesecakes and brownies are pulled while the centre still wobbles or reads below target, and they finish on the bench. Bread's centre is already near its ~98 °C ceiling, so carry-over there mainly finishes setting and drying the crumb, which is why you do not slice hot bread.

### Heat in the mixer too

Mixing puts mechanical energy into dough as heat (friction factor), and ingredient temperatures mix by heat capacity. That is the basis of desired dough temperature calculations in [01.3](stage-1/module-01/lesson-03.md).

## What it predicts on the bench

| If you change... | Prediction | Why | Where you'll see it |
|---|---|---|---|
| Bake a loaf on a preheated stone or steel instead of a cold tray | More oven spring, better bottom crust | Large stored heat conducted straight into the base | [04.1](stage-1/module-04/lesson-01.md), [R1-03](recipes/R1-03-pita-flatbreads.md) |
| Swap a shiny aluminium pan for a dark or glass one | Darker, thicker bottom and sides; edges set before centre rises (domed cake) | Higher absorption of radiation; glass keeps heating | [10.4](stage-1/module-10/lesson-04.md) |
| Switch the fan on at the same set temperature | Faster colour, drier surface, shorter bake | Higher surface heat transfer | [X1-38](experiments/X1-38-choux-oven.md) |
| Bake a cake in a pan twice as deep | Much longer bake; dome, cracked top, possibly dry edges | Time scales with thickness squared | [10.4](stage-1/module-10/lesson-04.md) |
| Put foil loosely over a browning loaf | Browning slows while interior continues | Blocks radiation from above | [X1-11](experiments/X1-11-bake-time.md) |
| Bake custards without a water bath | Curdled, bubbly edges, cracked surface | Edges exceed coagulation range | [12.1](stage-1/module-12/lesson-01.md), [X1-25](experiments/X1-25-egg-coagulation.md) |
| Bake a crème caramel until the centre is fully firm in the oven | Overcooked, bubbly, slightly grainy once cool | Carry-over adds several degrees | [R1-25](recipes/R1-25-creme-brulee.md) |
| Open the oven door repeatedly | Longer bake, less even colour | Air temperature drops, thermostat lag | [00.2](stage-1/module-00/lesson-02.md) |

## Kitchen demonstrations

1. **Pan race (20 minutes).** Put identical 20 g scoops of cookie dough on a shiny aluminium tray, a dark tray and a silicone mat, bake together and photograph the undersides. Dark browns most, silicone least.
2. **Thickness squared.** Bake the same brownie batter at 1.5 cm and 3 cm depth. Probe the centres every 5 minutes: the thick one takes clearly more than twice as long to reach 85 °C.
3. **Oven map.** Cover a sheet with slices of white sandwich bread, bake at 180 °C until some slices are toasted, photograph. That picture is your oven's heat map; keep it in your lab notebook.

## Misconceptions

- **"The oven temperature is the temperature of the food."** The food's surface is capped near 100 °C while wet, and the centre lags far behind. The set point is the temperature of the heat source, not of the product.
- **"Doubling the batch in a deeper pan just needs a bit more time."** Time grows much faster than thickness; use two pans or adjust shape.
- **"Glass pans are gentler."** Glass heats slowly at first but absorbs radiant heat well and holds it; edges and bottoms often end up darker.
- **"Carry-over is only for roasts."** Every custard, cheesecake and brownie continues cooking after it leaves the oven.

## Measuring it

| Question | Instrument | Stage |
|---|---|---|
| What is my oven really doing? | Oven thermometer (hanging dial or probe), toast-map test | Stage 1 |
| Is the centre done? | Instant-read probe thermometer (bread ~96–99 °C centre; custards per recipe) | Stage 1 |
| How hot is the stone/steel surface? | Infrared (IR) thermometer; note it reads surfaces only and is fooled by shiny metals | Stage 1–2 |
| How does the temperature rise inside the loaf over the bake? | Leave-in probe or thermocouple with a logger, reading every 30 s | Stage 2 |
| How much heat flux does each oven zone deliver? | Oven profilers (multi-thermocouple data loggers run through industrial ovens), heat-flux sensors | Stage 3 |

## Check yourself

1. You scale a successful 500 g pan loaf to a 1,000 g loaf in a pan of the same width but twice as tall. Do you double the bake time?

<details class="answer"><summary>Answer</summary>

No. The smallest dimension (width) hasn't changed much, so heat still reaches the centre mostly through the sides; expect a moderate increase (perhaps 25–40 %), and verify with a probe to ~96–98 °C. If both width and height doubled, the increase would be far larger.

</details>

2. Cookies spread and burn underneath on your new dark tray but not on your old shiny one. Name two fixes.

<details class="answer"><summary>Answer</summary>

Lower the oven ~10–15 °C, line the tray with parchment, double-stack the tray on another sheet (an air gap insulates), or move to the shiny tray. The dark tray absorbs more radiant heat.

</details>

3. Why does a baking stone need 45–60 minutes of preheating when the oven air reaches temperature in 15?

<details class="answer"><summary>Answer</summary>

The stone has low conductivity and high heat storage; it absorbs heat slowly from the air and walls. The air has little heat capacity and reaches temperature fast.

</details>

4. A crème brûlée in a water bath at 150 °C oven sets without curdling, but without the bath it curdles at the edges. Explain in terms of heat transfer.

<details class="answer"><summary>Answer</summary>

The water cannot exceed ~100 °C and usually sits at 80–95 °C, so the ramekin walls stay near that temperature and the custard heats slowly and evenly. Without it, the walls receive oven-temperature radiation and hot air, pushing the edges past the coagulation range before the centre sets.

</details>

## Going deeper

<div class="callout next">

**Where this goes next:** You use these ideas in [04.1](stage-1/module-04/lesson-01.md) (stones, steels, pots, steam) and in [10.4](stage-1/module-10/lesson-04.md) (pans and doneness). In **Stage 2** you work with deck, rack and combi ovens, log internal temperature curves with a data logger, and use them to set bake profiles for large cakes, laminated pastry and hearth bread. In **Stage 3** you model heat and mass transfer quantitatively (thermal diffusivity, Biot number, heat-flux profiling) to redesign products and processes: changing a product's geometry to hit a target bake, or matching a tunnel oven's zone profile to a bench prototype.

</div>

## Sources

- [McGee] — heat transfer in cooking, pans and water baths
- [Figoni] — oven types, pans and heat transfer in baking
- [Cauvain-TB] — heat transfer during bread baking
- [Purlis 2010] — interaction of heat transfer, drying and browning
- [Corriher] — pan material and colour effects on cakes and pastry
- [Hamelman] — stones, steam and hearth baking practice
