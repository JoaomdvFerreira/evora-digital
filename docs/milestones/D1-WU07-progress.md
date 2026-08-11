# WU-D1-07 Progress — Consolidation & D1 Closure

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Objective

Consolidate D1 records, verify the D1 exit gate, and produce the D1 closure record without creating a solution backlog, per `.aiqt/state.json` WU007 and `docs/milestones/D1-institutional-data-source-mapping.md`'s WU-D1-07 definition: deduplicate problem clusters, verify evidence/source linkage, review domain coverage, record contradictions, record unresolved research gaps, consolidate stakeholder inventory, consolidate dataset/data-service catalogue, assess source licensing/freshness completeness, produce a D1 coverage summary, verify D2 readiness, prepare D3 Problem Map input, and close D1 only if exit gates pass.

## Inputs reconciled

Two external inputs informed this consolidation and were reconciled against live repository state rather than trusted verbatim:

1. A pre-consolidation draft (`D1-WU07-pre-consolidation-draft.md`, prepared before WU-D1-06 closed) — its "pending WU-D1-06 reconciliation" language is now resolved throughout this record against the actual `PRB-0009`, `docs/milestones/D1-WU06-progress.md` and `docs/milestones/D1-WU06-closure.md` content. No discrepancy of substance was found between the draft's anticipated WU-D1-06 outcome and the actual outcome; the draft's generic phrasing was replaced with WU-D1-06's exact carried-forward questions (8, not a generic placeholder) and exact open-data observations (6 items, not a placeholder list).
2. A condensed summary of a Graphify evaluation spike, executed externally against a read-only snapshot and never touching this repository (`git status --short` was clean before and after, independently verified by the spike's own report). Its decision (ADOPT WITH CONSTRAINTS) and policy list are recorded verbatim in `docs/discovery/research-methodology.md` §10 (added by this WU) and referenced from this closure.

## Deduplication and linkage review

- All 9 `PRB-0001`–`PRB-0009` records were read in full. No duplicate or near-duplicate problem exists: each targets a distinct domain slice, affected population and root-cause framing. `PRB-0006` (housing) explicitly documents student accommodation as a subproblem rather than a duplicate of any Economy/Education finding, per its own `possible_root_causes` note.
- `node tools/validate-research.js` confirms all `EVD.source.source_id` → `SRC-*` and `PRB.evidence` → `EVD-*` references resolve (143 records, 0 errors) — see Validation result below.
- Evidence rationalisation pass (targeted grep across `research/evidence/*.yaml` `summary:` fields, not a full manual re-read of 78 files): no two evidence records share an identical `summary` — no exact duplicates found. No evidence record's `notes` field claims to duplicate another; the 15 files matching a duplicate/supersede/stale keyword search (`EVD-000021`, `EVD-000042`, `EVD-000044`, `EVD-000048`, `EVD-000055`, `EVD-000056`, `EVD-000063`, `EVD-000067`, `EVD-000075`, `EVD-000077` and five `SRC-*` records) all use those words narratively to describe *what the evidence itself found* (e.g. "no duplicate reporting app should be built") rather than to flag a data-quality problem inside the repository — none required a fix.
- Cross-domain source reuse is intact and non-duplicated: `SRC-0002` (Plano de Desenvolvimento Social 2024-2027) is cited by 11 `EVD-*` records across Mobility, Housing/Social/Health, Economy/Employment and was checked-but-correctly-left-unenriched for Culture/Tourism/Sports and Environment/Climate/Digital Services (confirmed in `D1-WU05-progress.md` and `D1-WU06-progress.md`) rather than duplicated as a second source record.
- No genuine duplicate/near-duplicate requiring a destructive or corrective edit was found. The schema (`research/schemas/evidence.schema.json`) has no `superseded_by`/`status` field for evidence; per repository convention (confirmed against `docs/discovery/d1-recording-protocol.md` and every prior WU's practice), supersession/freshness updates are represented narratively via `possible_root_causes` "Batch B/C update:" notes on the `PRB-*` record and via progress-doc prose, not a schema field — this WU follows that existing convention rather than inventing a new one.
- `docs/data/source-registry.md` was checked against `research/sources/`. It lists `SRC-0001`, `SRC-0004`, `SRC-0005`, `SRC-0008`, `SRC-0009`, `SRC-0012`–`SRC-0015` as pre-D1 seed/candidate registry rows with no corresponding canonical `SRC-*` YAML file. This is a pre-existing gap from the original D0/seed registry (predates WU-D1-02) rather than something introduced or discoverable-as-broken by this consolidation; no fix was applied, consistent with the instruction to review but not force changes that are not clearly needed.

## Consolidated D1 problem map (9 PRBs across 4 of 6 researched domains)

**Mobility, Territory, Urban Infrastructure & Accessibility (WU-D1-02) — 5 problems:**
- `PRB-0001` — Public transport does not provide equally practical mobility across times and territories.
- `PRB-0002` — Public-transport information is not consistently available in a complete, reusable, user-friendly form (flagged for likely D3 split into passenger-information-quality vs. developer-interoperability/reuse sub-gaps).
- `PRB-0003` — Pedestrian and accessibility barriers reduce independent movement.
- `PRB-0004` — The cycling network does not yet form a coherent practical network.
- `PRB-0005` — Motor traffic and parking pressure conflict with pedestrian quality/safety/legibility (flagged for likely D3 split into traffic/congestion vs. parking components).

**Housing, Social Support, Health & Wellbeing (WU-D1-03) — 2 problems:**
- `PRB-0006` — Adequate and affordable housing is difficult to access for some population groups (student accommodation preserved as a subproblem, not duplicated).
- `PRB-0007` — Informal caregivers face fragmented information and support navigation needs.

**Economy, Employment, Talent & Education (WU-D1-04) — 1 problem:**
- `PRB-0008` — Workforce skills and employer needs are not fully aligned.

**Culture, Tourism, Sports & Public Life (WU-D1-05) — 0 problems:**
Institutional saturation reached via a "resolved by current-state check" pattern: cultural-event discoverability/fragmentation deferred, cultural/associative administrative friction downgraded to a validation question, cultural accessibility retained as a policy/evidence area, no sports digital problem evidenced, no tourism digital problem evidenced. This is a valid and expected D1 outcome (`docs/milestones/D1-WU05-closure.md`), not insufficient research effort.

**Environment, Climate, Public & Digital Services (WU-D1-06) — 1 problem:**
- `PRB-0009` — Urban hygiene / waste-collection service reliability and quality, framed as service reliability (not information/app absence), `digital_tractability: low` over the dominant operational root cause. Climate resilience, municipal digital-service fragmentation, public-space occurrence reporting (generic form), and recycling participation were all evaluated and NOT canonicalized, per `docs/milestones/D1-WU06-progress.md`.

All 9 problems remain `status: OPEN`, `validation_status: unvalidated`. `digital_tractability` is `not_assessed` for 8 of 9; only `PRB-0009` has an assessed value (`low`), reflecting WU-D1-06's stronger current-state evidence base, not a change in D1's overall conservatism.

## Negative and deferred findings preserved

**Mobility/territory:** do not replace municipal/CIMAC GIS infrastructure with a new system; do not assume a new parking-payment product is needed where Évora Mobilidade/Via Verde Estacionar already operate; do not infer public API/reuse rights merely from public visibility (TPAC GTFS, TREVO, GEOCIMAC/WMS/WFS reuse terms all remain `UNKNOWN`).

**Housing/social/health:** do not treat housing supply/affordability as primarily a software problem (dominant physical/economic root cause); do not create a separate student-housing canonical problem without stronger unmet-demand evidence than currently exists; do not promote the 2024 mental-health-capacity concern to a canonical problem — current ULSAC psychiatry/community-care evidence weakens the claim, and it is kept as evidence/validation-only; do not duplicate existing caregiver-support services (ULSAC UCC, Cantinho do Cuidador, VIVAMENTE) — the remaining gap is navigation/coordination/awareness, not absence of service.

**Economy/employment/education:** do not build a generic job board or employment portal — substantial matching infrastructure exists (UÉ Feira do Emprego, IEFP listings, NERE/IEFP training); do not promote graduate/talent retention to a canonical problem without direct outcome data (deferred, not rejected); do not infer SME support-navigation friction merely from the existence of multiple providers (Município, NERE, PACT, IEFP, UÉ) — this remains an open discovery question only.

**Culture/tourism/sports:** do not frame Évora as lacking cultural programming — the cultural ecosystem and Évora 2027 pipeline are substantial; do not build a generic tourist-info guide — mature municipal visitor-information channels exist; do not treat the Associativism Portal as missing — Plataforma Évora Associativismo is operational; do not claim accessibility metadata is absent from municipal event intake — structured mobility-reduced/communication-accessibility fields already exist in the Agenda submission form; do not create a sports digital problem — no evidence across two batches established one.

**Environment/public services:** do not build another generic occurrence-reporting app — a mature occurrence-management platform already exists; do not frame municipal services as generically "not digital" — the municipality app, ePaper Phase 2 and Balcão Online are active digitisation efforts; do not duplicate PMAAC/WebSIG/climate-alert infrastructure with a new climate-data system; do not turn operational waste/fleet/staffing failures into a software problem without causal evidence — `PRB-0009`'s dominant root cause is explicitly operational, and `digital_tractability` is recorded as `low` against it.

## Cross-domain patterns (narrative only — not new canonical facts, not collapsed into a generic PRB)

1. **Existing-service navigation/coordination repeats** across informal-caregiver support (`PRB-0007`), employment/training discovery (`PRB-0008`'s adjacent business-support-fragmentation question), cultural/event ecosystems (deferred in WU-D1-05), and municipal digital-service channels (deferred in WU-D1-06). This is explicitly **not** treated as sufficient evidence for a single generic cross-domain "fragmentation" problem — each journey requires independent user-friction evidence before any canonical promotion, and none is created here. This is a required constraint on this WU, not a discretionary choice.
2. **Structural problem vs. digital leverage:** several of D1's strongest civic problems have low direct software leverage — housing supply/affordability (`PRB-0006`), physical accessibility (`PRB-0003`), transport service capacity (`PRB-0001`), and urban-hygiene operational reliability (`PRB-0009`, the one domain with an assessed `low` `digital_tractability`). D1 preserves these as civic problems without forcing project hypotheses onto them.
3. **Institutional richness changes the opportunity:** Évora frequently already has programmes, platforms, GIS layers, data systems, institutional actors and digital channels. The recurring open question across domains is not "does a service exist?" but "can people find it? can systems interoperate? is information current? is the journey coherent? can outcomes be measured? can existing data be reused legally/technically?" — these remain open questions, not automatic problem statements.
4. **Current-State Challenge materially changed diagnoses in most domains, and in one domain reinforced rather than softened it:** active housing investment changed the interpretation of `PRB-0006`; new/community mental-health responses weakened a broad capacity claim (kept out of canon); operational associativism infrastructure rejected an apparent implementation gap in Culture; structured event-accessibility metadata weakened an apparent information gap in Culture; active municipal digitisation (app, ePaper, Balcão Online) weakened a generic digital-service-gap framing in WU-D1-06. The one exception: the February 2026 RSU collection disruption **strengthened** the urban-hygiene problem (`PRB-0009`) rather than weakening it — the sole domain where the Current-State Challenge corroborated, rather than softened, the Round A diagnosis. This validates freshness as a first-class research property (`docs/discovery/d1-recording-protocol.md` §Freshness) rather than a formality.

## Cross-domain relationships (status preserved exactly — none upgraded to established fact)

- **Housing → Talent retention:** hypothesised relationship only; causal magnitude not established.
- **Education → Employment → Employer skill needs:** supported system relationship (`PRB-0008`); the skills-alignment problem survives D1, but specific shortage occupations and root causes remain unresolved.
- **Caregiver support → Health → Social services:** supported system relationship (`PRB-0007`); service capacity, eligibility, navigation and health outcomes are deliberately not collapsed into one problem.
- **Climate → Mobility:** institutionally supported relationship (`EVD-000064`); heat affects walking/cycling conditions, specific local lived impacts still need validation.
- **Culture → Talent/quality of life:** strategic hypothesis, not established causal evidence.
- **Climate → Health/Social (WU-D1-06):** heat/water stress may disproportionately affect vulnerable populations; population-specific evidence still required — carried forward as open question 6 below.
- **Urban hygiene → Tourism/Culture/Public life (WU-D1-06):** public-space quality may affect residents/visitors/commerce/cultural life; impact not assumed without evidence.

## Carried-forward questions transferred to D2 (Public Signal Discovery) and D5 (Stakeholder Validation)

**D2 — Public Signal Discovery:**
- Transport reliability by location/time (evenings, weekends, low-demand areas, commuting/school journeys) — `PRB-0001`.
- Pedestrian/accessibility barriers as currently experienced, especially by people with reduced mobility — `PRB-0003`.
- Cycling-network discontinuities (connectivity, safety, maintenance, wayfinding) — `PRB-0004`.
- Housing application/search friction — `PRB-0006`.
- Caregiver navigation/information gaps (what caregivers actually do step-by-step) — `PRB-0007`.
- Employer recruitment/skills-mismatch experience (which occupations are hard to recruit, and why) — `PRB-0008`.
- Municipal occurrence-handling and waste-service experience (bulky-waste requests, resolution follow-up) — `PRB-0009`.
- Cultural/event discovery, only if actual user friction appears (not assumed) — WU-D1-05.
- Accessibility/inclusion experiences across domains.
- Whether cross-calendar duplication (Municipal Agenda / Guia da Semana / Évora 2027) is a maintainer problem or a user problem — WU-D1-05.
- Whether multiple municipal digital channels create citizen navigation friction — WU-D1-06.
- Whether responsibility-sharing between Município/Gesamb/parish councils creates routing confusion for residents — WU-D1-06.
- Whether vulnerable populations experience specific heat-information/access gaps — WU-D1-06.

**D5 — Stakeholder Validation:**
- Caregivers and the organisations supporting them — `PRB-0007`.
- Residents affected by transport/accessibility barriers — `PRB-0001`, `PRB-0003`, `PRB-0004`.
- Employers, NERE, IEFP, UÉ for skills-mismatch validation — `PRB-0008`.
- Housing applicants/students where information-process friction is suspected — `PRB-0006`.
- Municipal/parish/Gesamb actors for waste-service ownership and routing clarity — `PRB-0009`.
- Cultural associations, only if workflow friction inside the Évora Associativismo platform is still plausible — WU-D1-05.
- Whether the planned informal-caregiver manual (2026-2027) is already available or still under development — `PRB-0007`.

**Technical/Open Data Foundation verification needs (cross-cutting, not domain-specific):** API/interface availability; machine readability; licensing/reuse rights; update cadence/freshness; stable identifiers; geographic coverage; interoperability potential — apply to every open-data candidate listed below.

## Open Data Foundation candidate handoff (accumulated across all of D1, status unverified unless noted)

**Mobility/territory:** TPAC GTFS (public download endpoint/reuse licence unresolved); TREVO real-time passenger info (developer/API access unresolved); Municipal Geographic Portal / GEOCIMAC (WMS/WFS confirmed active; per-layer freshness/licence catalogue not yet enumerated); R.A.M.P.A. accessibility dataset (plan/inventory process confirmed 2022; downloadable structured dataset, schema, owner, licence unresolved); parking occupancy/traffic sensors (75 parking + 10 vehicle-count sensors confirmed installed under LVpDÉ; current operational status/live feed/licence unresolved).

**Housing/social/education:** housing programme/project status data (funded 2026 delivery data exists institutionally; structured reusable form not established); UÉ accommodation application/placement/capacity data (existence/reusability unresolved); skills-demand/employment-market datasets (IEFP listings exist but lack duration-to-fill/wage/shortage fields); graduate-outcome data (no direct public 2025/2026 metric located).

**Culture/public life:** Municipal Agenda structured event data (public reusability/machine-readability unresolved); Évora 2027 structured programming data (federation potential unresolved); event accessibility metadata (exists in intake form; downstream reuse unresolved); Plataforma Évora Associativismo data/calls (legitimate reusability unresolved).

**Environment/public services (WU-D1-06, confirmed against `docs/milestones/D1-WU06-progress.md` — the draft's "pending" placeholder is now replaced with the actual 6-item list):**
1. PMAAC WebSIG / climate-vulnerability spatial layers (`SRC-0051`, `EVD-000070`).
2. Municipal public-space occurrence categories/status data — public API/open-data status unknown (`SRC-0057`, `EVD-000067`, `EVD-000075`).
3. Gesamb waste/recycling performance data (`SRC-0056`, `SRC-0063`, `EVD-000070`).
4. Waste collection/service geography/schedules — machine-readable status unknown (`SRC-0064`).
5. Municipal alerts/Proteção Civil information — technical feed/API status unknown (`SRC-0065`, `EVD-000078`).
6. Water-service/quality/incident data — availability/licensing to verify; no dedicated source located in D1's bounded review, carried forward as an open question.

All items above require D2/D5 or a dedicated technical/open-data assessment to resolve API availability, machine-readability, licensing and freshness — not further D1 institutional research. This is consistent across every domain closure note and is restated once here rather than re-litigated per domain.

## Graphify evaluation spike — decision recorded

A Graphify evaluation spike was executed externally against a read-only repository snapshot; no repository files or AIQT state were touched during the spike (`git status --short` confirmed clean before and after). Decision: **ADOPT WITH CONSTRAINTS**. The full policy is recorded in `docs/discovery/research-methodology.md` §10 (new section added by this WU) as durable project policy, and referenced from `docs/milestones/D1-WU07-closure.md`. No Graphify tooling, configuration, or custom index was implemented as part of this WU — only the decision and policy are recorded, per the explicit instruction that WU-D1-07 must not build retrieval tooling.

## Validation result

```text
node tools/validate-research.js
Validated 143 record(s): OK.
```

No new `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` records were created by this WU (consolidation only), so the count is unchanged from WU-D1-06's closure (143). Final counts: `SRC-*` = 56 files (highest number `SRC-0065`, with expected pre-D1 numbering gaps in the seed registry, not "fixed" per instruction), `EVD-*` = 78 files, `PRB-*` = 9 files (`PRB-0001`–`PRB-0009`), `HYP-*` = 0 files (confirmed empty directory).

## Files added/changed

- `docs/milestones/D1-WU07-progress.md` (this file)
- `docs/milestones/D1-WU07-closure.md` (added)
- `docs/milestones/D1-institutional-data-source-mapping.md` (D1 exit gate checklist evaluated/checked)
- `docs/discovery/research-methodology.md` (added §10, Graphify retrieval-tooling policy)
- `.aiqt/state.json`, `.aiqt/runlog.jsonl` (WU007 selection + closure; `M001` closure)

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created: **NO**
- New `HYP-*` created: **NO**
- Existing-service-fragmentation pattern collapsed into a generic cross-domain PRB: **NO** (explicitly preserved as narrative only, per instruction)
- Destructive edits made to existing evidence/source/problem YAML content: **NO**
- D2 started: **NO**
- Graphify tooling/config implemented: **NO** (decision/policy recorded only)

## Next

D1 is closed (see `docs/milestones/D1-WU07-closure.md`). D2 Public Signal Discovery is not started by this WU.
