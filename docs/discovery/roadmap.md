# Évora Digital Discovery Roadmap

**Version:** 0.3  
**Status:** Baseline draft; D3 direction canonicalized 2026-08-11 (`docs/discovery/d3-execution-protocol.md`); D4–D9 reconciled to the same Progressive Assurance model 2026-08-11

## Purpose

The Discovery Roadmap moves Évora Digital from a broad intention to create civic value to a small set of evidence-backed, digitally tractable opportunities.

It deliberately separates discovery from product delivery.

## Programme-wide Progressive Assurance rule

D3 introduced the Progressive Assurance model — evidence → problem assessment → decision gate → critical unknown → cheapest credible next evidence → `STOP` / `WATCH` / `DEEPEN` / `PROCEED`. This rule is canonical across D3–D9, not only D3:

> Analytical methods are optional tools, not mandatory ceremony. A method should only be used when it can materially reduce a decision-relevant uncertainty, test a causal assumption, or improve the reliability of a consequential decision. The burden of analysis should increase with the cost, irreversibility, uncertainty and civic consequence of the decision.

Consequences for every later phase:

- not every `PRB-*` passes through every method or phase;
- not every `PRB-*` requires D4 comparative research;
- not every `PRB-*` requires a solution `HYP-*`;
- stakeholder work can occur before solution hypotheses exist;
- `WATCH` / `STOP` / `NON_DIGITAL` / `NO_INTERVENTION` outcomes are legitimate, first-class programme results;
- record count, interview count, and method count are never success metrics.

## Milestones

### D0 — Discovery Foundation

**Objective:** Establish the minimum governance, research, evidence, ethics, and data contracts required to start systematic discovery.

**Primary outputs:**

- charter;
- research methodology;
- research ethics;
- taxonomy;
- evidence/problem/hypothesis models;
- data-source model;
- initial source registry;
- D1/D2 execution protocol.

### D1 — Institutional & Data Source Mapping

**Objective:** Systematically map institutional evidence, public strategies, indicators, programmes, existing interventions, stakeholders, and reusable data sources.

**Primary outputs:**

- institutional evidence base;
- expanded source registry;
- initial dataset catalogue;
- stakeholder inventory;
- first problem clusters.

### D2 — Public Signal Discovery

**Objective:** Discover spontaneous public friction and recurring concerns through public digital channels.

Potential source classes include:

- public Facebook pages/groups;
- Instagram;
- Reddit;
- YouTube and comments;
- local media;
- Google Maps reviews where appropriate;
- neighbourhood associations;
- parish councils;
- petitions;
- municipal meetings and minutes;
- public consultations.

**Primary outputs:**

- structured public-signal evidence;
- recurring-friction clusters;
- geographic and population signals;
- new data gaps;
- language and current-workaround observations.

Social listening is discovery, not polling.

### D3 — Problem Map v1 & Decision Baseline

**Objective:** Transform the D1/D2 evidence corpus into a proportionate, auditable decision baseline — consolidating and deduplicating evidence into a city problem map — without prematurely selecting solutions or proposing products.

D3 applies **Progressive Assurance**: every canonical active `PRB-*` receives a lightweight Problem Assessment (`ASM-Lite`), and heavier analytical or research methods are used only when a specific decision gate or critical unknown requires them, never by default. A structural taxonomy review (problem splits/merges, `NEW-CANDIDATE` disposition) happens once, after a small pilot validates the assessment framework — not before, and not repeatedly per problem.

**Primary outputs:**

- an optional, lazily-populated `EVD.analysis` metadata extension (no retroactive rewrite of the full corpus);
- one `ASM-*` Problem Assessment per canonical active `PRB-*`, recording evidence confidence, civic importance, journey/causal/existing-solution understanding, remaining gap, digital-leverage judgement, and explicit decision gates;
- an explicit disposition for every open structural question carried from D2 (road-maintenance `NEW-CANDIDATE`, `PRB-0002` split/keep, and any other merge/split only where evidence demands it);
- a `STOP` / `WATCH` / `DEEPEN` / `PROCEED` triage for every active problem, with named critical unknowns and next-evidence methods for anything routed to `DEEPEN`;
- a deterministic, non-semantic analyzer over canonical records (counts, lineage counts, metadata completeness, state distributions) — never automatic causality, prevalence, or numeric problem scores;
- initial current-journey state per problem (`SUFFICIENT` / `PARTIAL` / `INSUFFICIENT` / `UNKNOWN`);
- an explicit D4/D5 handoff.

D3 may legitimately close with individual problems routed to `STOP`, `WATCH`, or D5 rather than every problem advancing — the number of new records produced is not a success metric. No solution `HYP-*` is required merely to close D3.

### D4 — Existing Solutions, Comparative Evidence & Residual Gap Analysis

**Objective:** Determine whether a material residual gap remains after accounting for what already operates locally, and whether comparative evidence shows a mechanism that could credibly improve the relevant outcome in Évora.

D4 is selective — only `PRB-*`/narrow leads routed from an `ASM-*` enter D4, and only when comparative evidence can plausibly change the decision.

Core questions:

1. What is already operating locally?
2. What is planned but not yet operating?
3. What user/data journey is already covered?
4. What residual gap is actually supported?
5. What comparable intervention mechanism exists elsewhere?
6. What outcome evidence exists?
7. What transferability/context constraints matter?
8. What still requires D5 challenge/validation?

Residual-gap decision status (documentation/assessment level, not a product score): `SUPPORTED`, `PARTIAL`, `NOT_SUPPORTED`, `UNKNOWN`.

Comparative-evidence rules — prefer authoritative/operator sources, implementation/outcome evidence, mechanism-focused comparisons, and settings with meaningful contextual similarity; avoid feature shopping, vendor marketing, generic "smart city" inspiration, and comprehensive literature reviews where one bounded review is sufficient. Research stops when additional comparators stop changing the residual-gap decision.

D4 does not select a product, choose a vendor, design architecture, require a `HYP-*`, or assume that an API/dashboard/app has value merely because it can be built.

### D5 — Stakeholder Challenge & Validation

**Objective:** Challenge the evidence-backed problem assessment with affected people, operators, institutions and other relevant stakeholders.

D5 is not necessarily the first stakeholder contact — D3 formative research (`docs/discovery/research-methodology.md` §2.3) may already have occurred where needed to understand the current journey. D5 performs the stronger challenge/validation function.

Each D5 activity should originate from an explicit critical unknown, blocked decision gate, current-journey uncertainty, remaining-gap uncertainty, causal uncertainty, or contradiction/counterevidence need.

Core questions:

- Does the described problem happen as the evidence suggests?
- What negative cases/counterexamples exist?
- Which affected journeys differ from the current framing?
- Are root causes correctly characterized?
- Does the proposed remaining gap matter?
- What existing workaround/solution did the project miss?
- Which groups experience materially different outcomes?
- What would falsify the current diagnosis?

D5 may update formal `PRB.validation_status` only when the project's validation contract is actually satisfied. Public-signal volume alone is never sufficient.

D5 does not become a generic interview round, interview every stakeholder category for every `PRB-*`, assume stakeholder agreement equals causal proof, or require a solution `HYP-*` before engagement.

### D6 — Digital Tractability & Evaluability

**Objective:** Determine both (1) whether a digital/data/coordination intervention can causally affect the remaining problem, and (2) whether its effect can be credibly evaluated. Digital tractability without evaluability is insufficient for consequential intervention.

**Causal addressability** — what mechanism would the intervention change? Is the dominant cause actually digital/information/coordination/transaction-related, or is an important non-digital cause dominant?

**Reach and operator** — who can act on the intervention? Who owns/operates it? Is there an ongoing operational model?

**Data / Evaluation readiness** — whether the programme has or can credibly obtain: baseline/history; sufficient temporal history; suitable granularity; stable identifiers; coverage and known exclusions; measurement lag; outcome variables; intervention/exposure identifiers where needed; repeatable collection; outcome-measurement capability. This is a transversal Open Data Foundation concern (see below) — a dataset is not "ready" merely because it is open/reusable; it may be technically reusable but unusable for outcome evaluation due to weak history, granularity, identifiers, exclusions or lag.

**Privacy/regulation** — personal-data requirements; lawful basis/governance; accessibility; safety; sector-specific constraints.

**Maintenance** — operator; service ownership; data maintenance; cost; expected lifecycle.

**Evaluability** — what outcome should move? By how much would movement be meaningful? Over what time horizon? What alternative explanations matter? What comparison/baseline is credible?

D6 should make explicit whether the opportunity is digitally addressable, operationally supportable, measurable/evaluable, or unsuitable for intervention in the current form. Do not reduce this to a single numeric score.

### D7 — Test & Learn / Mechanism Experiments

**Objective:** Test the riskiest causal assumptions before committing to a full intervention. D7 is not "build an MVP for every opportunity."

Required flow:

```text
validated-enough problem
   ↓
remaining gap
   ↓
proposed causal mechanism
   ↓
riskiest assumption
   ↓
smallest credible test
   ↓
GO / ADAPT / STOP
```

Where proportionate, record: mechanism; target population/context; critical assumption; expected observable change; baseline; decision threshold; timeframe; exclusions/limitations; unintended effects to watch; and the `GO`/`ADAPT`/`STOP` decision rule. Pre-registration should be proportional to consequence/irreversibility.

`HYP-*` becomes appropriate only when there is a concrete causal intervention hypothesis worth testing — do not create solution hypotheses merely because D7 exists.

D7 does not require production software, require a broad MVP, optimize engagement metrics unrelated to civic outcomes, or continue testing when the mechanism is already contradicted.

### D8 — Intervention Portfolio & First Project Selection

**Objective:** Decide the appropriate intervention disposition for surviving problems/opportunities, then select the first implementation where justified. Do not force every validated problem into software.

Allowed intervention dispositions:

- `BUILD` — a new digital public good is justified;
- `IMPROVE` — an existing local solution should be improved rather than duplicated;
- `FEDERATE` — interoperability/federation across existing systems provides more value than a new standalone system;
- `OPEN_DATA` — the primary intervention is data publication/quality/interoperability;
- `NON_DIGITAL` — the appropriate intervention is primarily policy, operations, physical infrastructure, service capacity, training or another non-digital mechanism;
- `ALREADY_SOLVED` — a sufficiently effective solution already exists; project creation would duplicate it;
- `WATCH` — no intervention now; monitor named triggers;
- `NO_INTERVENTION` — no credible intervention is justified for Évora Digital in the current framing.

Only after dispositions exist should D8 choose the first implementation candidate. Use MCDA or another explicit trade-off method only if multiple real alternatives remain, trade-offs are material, and informal comparison is no longer sufficient — do not introduce weighted scoring merely for formality.

D8 may legitimately conclude the portfolio contains one build candidate, several improve/open-data/non-digital/watch outcomes, or no build candidate yet. That is a valid programme result.

### D9 — Outcome, Process & Value Review

**Objective:** Evaluate whether the intervention produced civic value, how the mechanism behaved, what it cost to operate, and whether it should continue, change, scale, transfer or stop.

Review dimensions:

- **Outcome** — did the intended civic outcome move? For whom? By how much? Over what timeframe?
- **Mechanism/contribution** — did the proposed causal mechanism behave as expected? What alternative explanations remain? What evidence supports contribution rather than simple temporal correlation?
- **Process** — adoption; operational reliability; data quality; workflow impact; support burden; accessibility; stakeholder/user experience.
- **Equity** — who benefited; who did not; exclusions; unintended distributional effects.
- **Unintended effects** — displacement; new coordination burden; gaming; administrative complexity; negative externalities.
- **Cost/value** — implementation effort; recurring maintenance; operator burden; data cost; marginal civic value.

Possible dispositions: `CONTINUE`, `IMPROVE`, `SCALE`, `TRANSFER/REUSE`, `PAUSE`, `ARCHIVE/STOP`. Do not keep a project alive merely because software has already been built.

---

## Transversal Open Data Foundation Track

The Open Data Foundation runs in parallel to D0–D6.

```text
D0  Source model and governance
D1  Source registry and dataset discovery
D2  Publicly observed data gaps
D3  Domain taxonomy refinement
D4  Existing interfaces and dataset gap analysis
D5  Provider and consumer validation
D6  Infrastructure tractability assessment
```

Possible outcomes after D6:

- catalogue only;
- federation/discovery layer;
- normalization layer;
- public API;
- combination;
- no additional infrastructure.

The Évora Open API remains a hypothesis until this assessment is complete.

### Evaluation Data Readiness

Data-source assessment covers two separate questions, not one (see `docs/models/data-source-model.md`):

**Reuse readiness** — provenance; licence; freshness; stable identifiers; schema/interoperability; access mechanism; authority.

**Evaluation readiness** — baseline/history; time depth; granularity; coverage; exclusions; stable identifiers across time; measurement lag; outcome variables; intervention/exposure observability; comparability over time.

A dataset is not "ready" merely because it is open/reusable — it may be `reuse_ready: yes` while `evaluation_ready: no`. This distinction is a D6 input (see above) and must stay explicit in methodology/roadmap documentation; it does not introduce a new schema on its own.
