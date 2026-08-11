# Évora Digital Discovery Roadmap

**Version:** 0.2  
**Status:** Baseline draft; D3 direction canonicalized 2026-08-11 (`docs/discovery/d3-execution-protocol.md`)

## Purpose

The Discovery Roadmap moves Évora Digital from a broad intention to create civic value to a small set of evidence-backed, digitally tractable opportunities.

It deliberately separates discovery from product delivery.

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

### D4 — Existing Solutions & Gap Analysis

**Objective:** Determine what already exists and why a problem remains.

Each candidate problem should answer:

1. What exists?
2. Who operates it?
3. Who uses it?
4. What does it solve?
5. What does it not solve?
6. Is the remaining gap informational, coordination-related, transactional, operational, physical, regulatory, or another type?

Valid outcomes include `ALREADY_SOLVED`, `NON_DIGITAL`, and `DO_NOT_BUILD`.

### D5 — Stakeholder Validation

**Objective:** Test priority problem hypotheses with relevant people and organisations.

Validation may include residents, students, businesses, public bodies, associations, IPSS, university stakeholders, parish councils, and domain-specific actors.

The goal is hypothesis testing, not generic ideation.

### D6 — Digital Tractability Assessment

**Objective:** Determine where software can plausibly alter outcomes.

Assessment considers:

- evidence strength;
- reach;
- frequency;
- severity;
- current journey;
- root cause;
- existing solutions;
- digital leverage;
- data availability;
- privacy/regulatory risk;
- operational dependency;
- maintainability;
- measurable outcome.

### D7 — Candidate Experiments

**Objective:** Define small, cheap tests before building products.

Experiments should validate mechanisms, not just interfaces.

Examples:

- can users locate the correct service within a defined time?
- can multiple event sources be normalized reliably?
- can accessibility data remain sufficiently current?
- can a public dataset be reused without manual intervention?

### D8 — Project Selection

**Objective:** Select the first real civic product only after sufficient evidence.

A Project Charter must include:

- problem;
- evidence;
- affected population;
- root cause;
- current journey;
- existing alternatives;
- proposed intervention;
- expected outcome;
- success metrics;
- risks;
- dependencies;
- maintenance model;
- open-source strategy;
- AIQT execution plan.

### D9 — Outcome Review

**Objective:** Evaluate real-world impact after deployment.

Possible decisions:

- continue;
- expand;
- change direction;
- transfer ownership;
- maintain;
- archive.

Deployment alone is not success.

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
