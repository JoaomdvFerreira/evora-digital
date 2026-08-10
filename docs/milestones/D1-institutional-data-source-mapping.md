# D1 — Institutional & Data Source Mapping

**Status:** ACTIVE
**Baseline:** v0.1
**Prepared:** 2026-08-10

## Objective

Build the first systematic institutional evidence base for Évora and expand the civic data-source catalogue without searching for software ideas.

D1 must establish enough structured evidence, source coverage, stakeholder context, and data-source knowledge to support:

- D2 Public Signal Discovery;
- D3 Problem Map v1;
- later Digital Tractability assessment;
- the Open Civic Data Foundation track.

D1 is a research milestone, not a product-development milestone.

## Entry gate

D1 may start when:

- [x] D0 — Discovery Foundation is CLOSED;
- [x] repository baseline is public and versioned;
- [x] research methodology and ethics are baselined;
- [x] Evidence, Problem, Hypothesis, and Data Source models exist;
- [x] D1 execution protocol exists;
- [x] D2 execution protocol exists;
- [x] licensing policy exists;
- [x] AIQT is initialized and valid;
- [x] no civic product has been selected;
- [x] Évora Open API remains an infrastructure hypothesis.

**Entry decision:** READY.

## Operating model for D1

Substantive research (source review, evidence assessment, problem analysis, public-signal discovery) is performed externally. The repository agent (Claude Code / Codex) is responsible for repository engineering, structured-record integration, validation, AIQT execution, and Git hygiene — not for independently deciding which problems matter or what should be built. See `docs/discovery/research-handoff-protocol.md`.

From `WU-D1-03` onward, external research across the remaining domain Work Units may run in parallel, while canonical integration and AIQT execution state remain serialized. See `docs/discovery/d1-parallel-research-operating-model.md` for the approved parallel-research operating model (WIP limits, provisional IDs, handoff states, synthesis/sensemaking review). A domain WU's AIQT status still moves out of `ready` only when its first approved handoff enters integration — external research alone does not change AIQT state.

## Research principles

D1 must preserve the following rules:

1. Problem first.
2. Software is optional.
3. Search for civic problems, not app ideas.
4. Existing solutions must be investigated before new solutions.
5. Evidence is not automatically fact.
6. Public access is not automatically reuse permission.
7. Provenance is mandatory.
8. Freshness is first-class.
9. Personal data is minimized.
10. Narrative reports do not replace structured research records.
11. Open Civic Data work should prefer discovery/federation/normalization over unnecessary replication.
12. No product or API implementation is authorized during D1.

## Work Units

### WU-D1-01 — Research Repository Infrastructure

**Goal:** Establish the actual repository-level research record workflow and expand the seed source registry enough to support bounded domain research.

Primary work:

- confirm a minimal machine-readable storage convention for `SRC-*` and `EVD-*` records;
- create only the smallest tooling/validation needed to keep those records consistent;
- define the research handoff contract between external research and repository integration;
- prepare the schema/validator baseline for `PRB-*` and `HYP-*` records ahead of later WUs.

Expected output:

- research-record storage baseline;
- first structured schema/validator infrastructure with synthetic fixtures only;
- validation approach;
- WU closure record.

This WU contains no substantive Évora research. Domain research begins in WU-D1-02 onward, driven by externally reviewed handoffs.

---

### WU-D1-02 — Mobility, Territory, Urban Infrastructure & Accessibility

**Domains:** Mobility & Transport (MOB), Geography & Territory (GEO), Urban Infrastructure (URB), Accessibility (ACC).

Investigate public transport, intermunicipal mobility, pedestrian/cycling conditions, parking, roads and maintenance, physical accessibility, territorial planning, and relevant operators and datasets.

Expected output: structured evidence records, source expansion, candidate problem clusters, current interventions, stakeholder/data-source additions, unresolved gaps.

---

### WU-D1-03 — Housing, Social Support, Health & Wellbeing

**Domains:** Housing (HOU), Social Support (SOC), Health & Wellbeing (HEA).

Investigate housing access and affordability, student/young-worker housing where evidenced, ageing, informal care, social-service discovery and coordination, health/wellbeing issues relevant to municipal digital opportunity, and existing responses, plans, actors, and datasets.

Health research must remain especially careful about privacy and the boundary between public information and individual health data.

---

### WU-D1-04 — Economy, Employment, Talent & Education

**Domains:** Economy & Business (ECO), Employment & Talent (EMP), Education (EDU).

Investigate business environment, SME operational/digital needs where institutionally documented, recruitment and talent retention, skills mismatch, university-city-business links, education and training, and business/employment datasets and stakeholders.

Do not infer private-sector pain solely from public-sector strategy documents; record evidence gaps explicitly for later stakeholder validation.

---

### WU-D1-05 — Culture, Tourism, Sports & Public Life

**Domains:** Culture & Events (CUL), Tourism (TOU), Sports & Leisure (SPO).

Investigate cultural participation and communication, event/programme information flows, the Évora 2027 ecosystem, tourism information/services, public facilities, sports/leisure access, and available feeds, calendars, datasets, and operators.

Do not assume an events API is needed. Treat event-data interoperability as a hypothesis to be tested.

---

### WU-D1-06 — Environment, Climate, Public & Digital Services

**Domains:** Environment & Waste (ENV), Climate & Energy (CLI), Public Services (PUB), Digital Access & Services (DIG).

Investigate waste and environmental services, climate adaptation, energy-related public programmes, municipal service access, digital access and administrative friction, existing digital channels, and public datasets and interfaces.

Avoid proposing replacement systems when a service already exists. Identify the actual remaining gap.

---

### WU-D1-07 — Consolidation & D1 Closure

**Goal:** Consolidate D1 without prematurely creating a solution backlog.

Primary work: deduplicate problem clusters, verify evidence/source linkage, review domain coverage, record contradictions, record unresolved research gaps, consolidate stakeholder inventory, consolidate dataset/data-service catalogue, assess source licensing/freshness completeness, produce D1 coverage summary, verify D2 readiness, prepare D3 Problem Map input, and close D1 only if exit gates pass.

## Work-unit execution discipline

Prefer targeted source review, small research batches, structured records as work is completed, incremental validation, and concise closure notes.

Avoid one massive browsing session, large unstructured reports, repeated reading of the same source, speculative software design, and artificial source-count targets.

## Structured outputs

D1 should progressively produce repository-backed records for `SRC-*` sources, `EVD-*` evidence, `PRB-*` problems (only when evidence supports consolidation into a distinct problem), stakeholder inventory, and candidate datasets/data services.

`HYP-*` records should normally remain rare during D1. Discovery should not turn every observed problem into a solution hypothesis.

## Domain coverage rule

A domain is sufficiently covered for D1 when major current institutional sources have been checked, key statistical sources have been checked where relevant, major known operators/interventions are identified, obvious public data sources/interfaces are checked, relevant stakeholder categories are known, additional bounded review is no longer revealing new top-level institutional problem clusters, and contradictions and unresolved gaps are recorded.

This does not mean exhaustive knowledge of Évora.

## D1 exit gate

D1 may close when:

- [ ] WU-D1-01 established a durable structured-record workflow;
- [ ] all planned domain WUs are completed or explicitly descoped with rationale;
- [ ] evidence records retain source provenance;
- [ ] high-priority sources have authority/licensing/freshness fields assessed where possible;
- [ ] institutional problem clusters are deduplicated;
- [ ] existing interventions are recorded for material problem clusters;
- [ ] stakeholder inventory exists;
- [ ] candidate dataset/data-service catalogue exists;
- [ ] known evidence gaps and contradictions are explicit;
- [ ] D2 can use the same evidence contracts without redesign;
- [ ] D3 has sufficient input to begin Problem Map v1;
- [ ] no product has been selected;
- [ ] no Open API implementation has been authorized;
- [ ] AIQT state and repository state are valid;
- [ ] working tree is clean;
- [ ] D1 closure record exists.

## Explicitly out of scope

During D1, do not build civic applications, build the Évora Open API, select cloud/database/frontend technology, create user accounts/auth systems, run mass social-media scraping, treat institutional documents as direct proof of lived experience, infer population prevalence from anecdotal evidence, turn every source into a new problem, or optimize the milestone for AIQT feature coverage.

## Expected next state

After D1, D2 Public Signal Discovery may proceed at scale using validated research contracts, D3 Problem Map v1 has structured institutional input, the Open Data Foundation has a substantially richer source/data catalogue, and no delivery project is selected yet.
