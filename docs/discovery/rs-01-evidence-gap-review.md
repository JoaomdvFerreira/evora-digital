# RS-01 — Evidence Gap Review

**Type:** Research Support activity (independent of the AIQT milestone/work-unit sequence)
**As of:** 2026-08-12
**Canonical baseline reviewed:** 223 canonical records (89 `SRC-*`, 114 `EVD-*`, 10 `PRB-*`, 0 `HYP-*`, 10 `ASM-*`), 337 explicit relationships, 0 dangling references
**AIQT context:** `M005` (D5 — Stakeholder Challenge & Validation) `in_progress`; `WU022` `in_progress`; `WU023`/`WU024` `blocked`/`planned`
**Method:** No web/external research performed. Reviewed every current `PRB-*` together with its `ASM-*`, linked `EVD-*`, `critical_unknowns`, `remaining_gap` and validation state, `docs/models/problem-model.md`, `docs/models/assessment-model.md`, and `docs/milestones/D5-WU01-operator-challenge-progress.md` (the WU022 institutional-engagement scaffold).

This review does not modify any canonical research record, `.aiqt/state.json`, or D5/WU022 engagement status. It does not start WU023.

---

## 1. Corpus-level summary

- **Problems reviewed:** 10/10 (`PRB-0001`–`PRB-0010`), each with its corresponding `ASM-0001`–`ASM-0010`.
- **Unresolved meaningful gaps identified:** 21 (drawn from the 19 currently-recorded `critical_unknowns` across the 10 `ASM-*`, plus 2 sub-gaps split out where a single `critical_unknown` genuinely spans two classifications with materially different next-evidence routes — `PRB-0005` U2 into sensor-state/coverage, and a desk-specific IEFP-data sub-question carved out of `PRB-0008` U1).
- **All 10 `PRB-*` remain `validation_status: unvalidated`** — RS-01 confirms this is correctly unchanged; no D5 evidence yet integrated resolves any problem to the 7-point `validated` contract.

**Classification counts (primary category):**

| Classification | Count |
|---|---|
| `DESK_RESEARCHABLE` | 7 |
| `INSTITUTIONAL` | 11 |
| `AFFECTED_JOURNEY` | 3 |
| `SOLUTION_STAGE` | 0 (see §6 — none of the 10 problems have reached tractability assessment; solution-stage questions are not yet *posable* from evidence, only pre-emptively excludable) |

**Desk-research priority counts (`DESK_RESEARCHABLE` only):**

| Priority | Count |
|---|---|
| HIGH | 2 |
| MEDIUM | 4 |
| LOW | 1 |

---

## 2. Per-Problem review

### PRB-0001 — Public transport practicality across times/territories

**Assessment context:** `ASM-0001`, `DEEPEN`, evidence_confidence MEDIUM (5 effective threads / 9 records), civic_importance reach/severity/persistence MEDIUM, frequency/equity UNKNOWN. `journey_understood` PARTIAL.

- **Gap 1 (U1 — desk slice):** Which evening/weekend/holiday/low-demand-location origin-destination journeys show materially reduced practical frequency versus daytime service. **Classification:** `DESK_RESEARCHABLE`. **WU022 coverage:** not directly — D5-OP-001 (TREVO) asks about satisfaction data and operational-failure causes, not a timetable-frequency comparison. **Priority:** HIGH. **Rationale:** `ASM-0001`'s own `best_next_evidence` names "bounded journey sampling using current timetables" first — published TREVO/CIMAC timetables are public documents already partially in the corpus (`EVD-000027`, `EVD-000028`); a bounded frequency comparison across time bands for the named low-demand locations could materially narrow U1 without contacting anyone, and civic importance is MEDIUM with real decision leverage (it gates `journey_understood`). **Suggested next evidence target:** *Using currently published TREVO/CIMAC timetables, which specific evening/weekend/holiday or low-demand-area origin-destination journeys show materially reduced frequency/practicality compared to daytime service?*
- **Gap 2 (U1 — lived slice):** Whether affected residents (students, evening/weekend/holiday users, low-demand-location residents) actually experience these gaps as impractical in real journeys. **Classification:** `AFFECTED_JOURNEY`. Candidate for future WU023 only.
- **Gap 3 (U2):** In material failing journeys, what proportion is schedule design/frequency/capacity versus operational unreliability. **Classification:** `INSTITUTIONAL`. **WU022 coverage:** yes — D5-OP-001 (TREVO) Q2 asks operators to confirm/correct the documented congestion-based cause; route `SENT`, response pending.

### PRB-0002 — Passenger-information completeness/reliability/usability

**Assessment context:** `ASM-0002`, `DEEPEN`, evidence_confidence MEDIUM (3 effective threads / 4 records), `journey_understood` FAIL — the weakest journey-understanding gate of the ten.

- **Gap 4 (U1):** What exact passenger journey failures remain despite current TREVO information, and how frequent/severe are they for real trips. **Classification:** `AFFECTED_JOURNEY`. Candidate for future WU023. Secondary dependency: TREVO's own account (D5-OP-001 Q1/Q4) may narrow this before WU023 is needed.
- **Gap 5 (U3):** Which specific stops/channels have incomplete static information, and how material this is to typical journeys. **Classification:** `DESK_RESEARCHABLE` (checking publicly visible information channels — TREVO's own site/app, Google Maps transit listings — against the method already used for `EVD-000016`). **WU022 coverage:** secondary dependency — D5-OP-001 (TREVO) Q3 asks about GTFS/API availability and disruption-propagation practice, which is the institutional half of this question; `SENT`, pending. **Priority:** MEDIUM. **Rationale:** a bounded channel-by-channel public audit is cheap and directly extends the already-completed `EVD-000016` bounded search, but the underlying `EVD-000016` finding (no public GTFS/API located) means the ceiling on what desk research alone can resolve is limited without TREVO's own confirmation. **Suggested next evidence target:** *Which TREVO stops/channels (physical signage, official app, third-party transit listings) currently show incomplete or stale static route/timetable information, using only publicly accessible surfaces?*

### PRB-0003 — Pedestrian and accessibility barriers

**Assessment context:** `ASM-0003`, `DEEPEN`, civic_importance frequency/severity/persistence/equity all HIGH — the highest civic-importance profile among urban-mobility problems. `existing_solution_understanding` SUFFICIENT; `remaining_gap` PARTIAL.

- **Gap 6 (U1):** Which high-value pedestrian/accessibility barriers remain after current works and accessibility programmes, and what affected users experience today. **Classification:** `INSTITUTIONAL` (primary, for the location-level institutional inventory half). **WU022 coverage:** yes, and already partially advanced — D5-OP-003 (APCE) is `RESPONSE_RECEIVED` (2026-08-12), integrated as `EVD-000112`/`EVD-000113`/`EVD-000114`, but the stopping rule is **not yet fully met**: no location-level current/cleared-barrier detail was provided. A qualified follow-up (APCE's technical coordinator, after returning from leave) is pending but not scheduled. **Secondary dependency:** `AFFECTED_JOURNEY` — the lived-experience half of U1 is an explicit WU023 candidate regardless of whether the APCE follow-up lands. **Desk research not applicable here:** `D3-WU05-closure.md` already marked desk research SATURATED for this problem; RS-01 confirms no further desk angle is worth reopening.

### PRB-0004 — Cycling network coherence

**Assessment context:** `ASM-0004`, `DEEPEN`, the thinnest evidence base in the corpus (LOW independence, LOW currentness, LOW adequacy; evidence_status still `discovered`, not `corroborated`). `journey_understood` FAIL, `problem_real` only PARTIAL.

- **Gap 7 (U1):** Which everyday origin-destination journeys are currently broken by discontinuity, safety, maintenance or destination-connectivity gaps. **Classification:** `DESK_RESEARCHABLE` (primary, for the topology-dataset half). **WU022 coverage:** secondary dependency — D5-OP-002 (DAM) Q1–Q3 already asks the institutional/authoritative version of this exact question; `SENT`, pending. **Priority:** MEDIUM. **Rationale:** the prior bounded desk audit (`ASM-0004` WU018 update) checked only a non-authoritative secondary inventory (ciclovia.pt); it did not check whether a machine-readable dataset exists on Portuguese/municipal open-data portals (e.g. `dados.gov.pt`, a CM-Évora GIS/open-data page, or PMUS technical annexes beyond what's already canonicalized). This is a narrower, not-yet-tried desk avenue, but DAM's institutional answer (already in flight) is the more authoritative resolution path, which is why this sits at MEDIUM rather than HIGH. **Suggested next evidence target:** *Does a current, machine-readable, authoritative cycling-network topology dataset exist on any Portuguese national or municipal open-data portal, distinct from the already-reviewed non-authoritative ciclovia.pt inventory?*

### PRB-0005 — Traffic/parking pressure vs. pedestrian quality

**Assessment context:** `ASM-0005`, `DEEPEN`, D4-phase, `existing_solution_understanding` SUFFICIENT, `remaining_gap` PARTIAL, `digital_causality` PARTIAL (plausible-but-unproven mechanism, deliberately not PASS).

- **Gap 8 (U1):** Do drivers materially cruise/queue/abandon destinations/double-park because they lack availability information, or is the dominant cause known scarcity (D5-P5-01). **Classification:** `AFFECTED_JOURNEY`. Candidate for future WU023.
- **Gap 9 (U2 — coverage slice):** Does Via Verde's Parking Buddy feature actually list/provide live coverage for specific Évora parking zones (D5-P5-02). **Classification:** `DESK_RESEARCHABLE`. **WU022 coverage:** secondary dependency — D5-OP-002 (DAM) Q7 asks DAM to confirm/deny Parking Buddy's actual coverage; `SENT`, pending. **Priority:** MEDIUM. **Rationale:** `EVD-000105` is currently only provider marketing-page copy; directly inspecting the live app/website for actual zone-level listing (not accuracy, just presence of coverage) is a bounded public check that does not require DAM's answer and could resolve part of D5-P5-02 immediately or narrow what DAM needs to confirm. **Suggested next evidence target:** *Does Via Verde's Parking Buddy app/website currently list and display live-updating coverage for specific named Évora parking zones, as opposed to a general "Évora is covered" marketing claim?*
- **Gap 10 (U2 — sensor-state slice):** Current operational state, maintenance, coverage and data quality of the 75 parking sensors / 10 counters (D5-P5-03). **Classification:** `INSTITUTIONAL`. **WU022 coverage:** yes — D5-OP-002 (DAM) Q4; `SENT`, pending. Not desk-researchable: internal sensor operational status is not public information.
- **Gap 11 (U3):** Whether better occupancy information would change driver behavior, and whether the municipality itself lacks sufficient occupancy/performance information to manage tariffs/allocation/enforcement/policy (D5-P5-04, D5-P5-05). **Classification:** `INSTITUTIONAL` (primary, for the municipal-need half). **WU022 coverage:** yes — D5-OP-002 (DAM) Q5/Q6; `SENT`, pending. **Secondary dependency:** `AFFECTED_JOURNEY` for D5-P5-04 (driver-behavior-change half), deferred to WU023 only if still necessary after DAM's response, per the progress doc's own stopping rule.

### PRB-0006 — Housing access

**Assessment context:** `ASM-0006`, `DEEPEN`, the strongest civic-importance profile alongside PRB-0003 (all five dimensions HIGH), `existing_solution_understanding` SUFFICIENT, `journey_understood` FAIL.

- **Gap 12 (U1):** Whether there is a material current applicant/residence-placement journey failure in discovery, eligibility, application, status or routing. **Classification:** `INSTITUTIONAL` (primary). **WU022 coverage:** yes — D5-OP-004 (SASUE) Q1–Q4 directly targets this (process mechanics, status visibility, aggregate figures, negative case); `SENT`, pending. **Secondary dependency:** `AFFECTED_JOURNEY` — only if SASUE's institutional account leaves the lived-experience side materially unresolved, per the route's own stopping rule ("move toward not-supported rather than recruiting students merely to preserve the hypothesis").

### PRB-0007 — Informal caregiver navigation

**Assessment context:** `ASM-0007`, `DEEPEN`, evidence_confidence.independence LOW (3 effective threads / 8 records — 6 of 8 share one lineage), `journey_understood` FAIL.

- **Gap 13 (U1):** When a person first becomes a caregiver, where do they actually start looking for help, and where does that path break down. **Classification:** `AFFECTED_JOURNEY` (primary). Candidate for future WU023. **Secondary dependency:** `INSTITUTIONAL` — D5-OP-005 (DEIS) Q2 asks about current entry points and inter-institutional handoff, which partially covers the institutional-process half; `SENT`, pending.
- **Gap 14 (U2):** Has the 2026-27 caregiver systematisation/manual/digital-publication plan actually been delivered (planned vs. in-delivery vs. operating), and does it measurably reduce navigation friction. **Classification:** `INSTITUTIONAL`. **WU022 coverage:** yes — D5-OP-005 (DEIS) Q1, Q4, Q5 directly targets implementation status and monitoring artefacts; `SENT`, pending.
- **Gap 15 (U3):** Which needs (care/respite/financial/psychological vs. navigation) actually dominate for caregivers outside the geographically-concentrated 133-person sample. **Classification:** `DESK_RESEARCHABLE`. **WU022 coverage:** not directly targeted by any of the six routes. **Priority:** MEDIUM. **Rationale:** published national/regional informal-caregiver needs research (e.g. INE, DGS, or other Portuguese municipalities' caregiver-support plans) could contextualize whether the local 133-person sample's need distribution is typical or an artefact of its geographic concentration, without new fieldwork; decision_impact is MEDIUM per the ASM itself. **Suggested next evidence target:** *What do published national or regional informal-caregiver needs studies (INE, DGS, or comparable Portuguese municipal caregiver plans) indicate about the relative weight of care/respite/financial/psychological versus navigation needs, as a point of comparison for the local 133-person sample?*

### PRB-0008 — Workforce/employer skills alignment

**Assessment context:** `ASM-0008`, `DEEPEN`, `journey_understood` FAIL, `problem_real` only PARTIAL — the vacancy-listing evidence (`EVD-000049`, `EVD-000101`) is explicitly annotated as measuring advertised demand, not actual shortage duration.

- **Gap 16 (U1):** Which occupations/skills are genuinely hard to fill, for how long, and why. **Classification:** `INSTITUTIONAL` (primary). **WU022 coverage:** yes — D5-OP-006 (NERE) Q1/Q2; `SENT`, pending.
- **Gap 17 (U1 — desk sub-question):** Whether Portugal's official published shortage-occupation data (IEFP's "profissões em falta"/regional labour-shortage lists, or equivalent DGERT/INE published statistics) for the Évora/Alentejo region already identifies hard-to-fill occupations, independent of NERE's forthcoming account. **Classification:** `DESK_RESEARCHABLE`. **Priority:** HIGH. **Rationale:** this is a real, likely-underused public dataset class (Portugal maintains official shortage-occupation lists for labour-migration policy purposes) that has not been checked in the corpus at all; it is cheap, directly answers the decision-critical U1 gate, and would either corroborate or usefully contradict NERE's eventual institutional account. **Suggested next evidence target:** *Does official Portuguese/IEFP-published shortage-occupation or labour-market-imbalance data identify specific occupations as hard-to-fill in the Évora/Alentejo region, and for how long?*
- **Gap 18 (U2):** How broad/effective PlaQuaR and other employer-training feedback mechanisms are, especially for SMEs. **Classification:** `INSTITUTIONAL`. **WU022 coverage:** yes — D5-OP-006 (NERE) Q3/Q4; `SENT`, pending. Secondary desk note: a PlaQuaR public monitoring/coverage report, if one exists, was not confirmed as checked — worth a low-cost look, but not elevated to the main queue given NERE's answer is already in motion and more likely to be decisive.

### PRB-0009 — Waste-collection service reliability (`WATCH`, D4 phase, `digital_causality` FAIL)

**Assessment context:** `ASM-0009`. Explicitly excluded from the WU022 first wave — "no active operator campaign opened," core problem stays `WATCH`. RS-01 does not change this.

- **Gap 19 (U1):** Post-July/August missed/delayed-collection performance by area (D5-P9-05/06). **Classification:** `INSTITUTIONAL`. **WU022 coverage:** no — explicitly excluded from the current wave. **Note:** a cheap desk-only check (searching Município/Gesamb's own published environmental/service annual reports for any post-July performance figures already public) has not been attempted and could be tried before any institutional ask, but is not elevated to the priority queue given the `WATCH` project posture and `digital_causality` FAIL.
- **Gap 20 (U2):** Whether the occurrence-reporting platform receives collection-operation information from crews/route management, with what routing/status/closure semantics (D5-P9-01/02). **Classification:** `INSTITUTIONAL`. Not covered by WU022 this wave.
- **Gap 21 (U3):** Whether known route delays are proactively communicated, and how bulky/green-waste requests are tracked (D5-P9-03/04). **Classification:** `INSTITUTIONAL`. Not covered by WU022 this wave.

### PRB-0010 — Road-surface degradation (`WATCH`, `digital_causality` FAIL)

**Assessment context:** `ASM-0010`, adequacy LOW (3 fully independent but small-N records), `journey_understood` FAIL. Triage deliberately `WATCH` with named re-open triggers.

- **Gap 22 (U1):** Whether material degradation persists broadly after the repair programme, and whether a repeatable maintenance-reliability failure pattern or an independently material reporting/transparency journey gap exists. **Classification:** `DESK_RESEARCHABLE`. **WU022 coverage:** not targeted (PRB-0010 has no WU022 route — correctly excluded per D5 scope). **Priority:** LOW. **Rationale:** civic importance is only MEDIUM, project posture is deliberately `WATCH` (monitor named triggers, do not actively deepen), and `digital_causality` is FAIL — but a bounded check of recent public reporting (municipal statements, local press) on the ~€1.5M repair programme's completion status is very cheap and directly tests re-open trigger (1) named in `ASM-0010.next_action`. **Suggested next evidence target:** *Is there recent (post-2026-07) public municipal statement or press reporting confirming the completion status of the ~€1.5M road-repair programme, and the current condition of the N114 location named in the unverified July 2026 signal?*

---

## 3. Prioritised desk-research queue

Deduplicated, ordered shortlist for a focused next research batch (RS-02):

1. **(HIGH)** Does official Portuguese/IEFP-published shortage-occupation or labour-market-imbalance data identify specific occupations as hard-to-fill in the Évora/Alentejo region, and for how long? *(PRB-0008, Gap 17)*
2. **(HIGH)** Using currently published TREVO/CIMAC timetables, which specific evening/weekend/holiday or low-demand-area origin-destination journeys show materially reduced frequency/practicality compared to daytime service? *(PRB-0001, Gap 1)*
3. **(MEDIUM)** Does a current, machine-readable, authoritative cycling-network topology dataset exist on any Portuguese national or municipal open-data portal, distinct from the already-reviewed non-authoritative ciclovia.pt inventory? *(PRB-0004, Gap 7)*
4. **(MEDIUM)** Does Via Verde's Parking Buddy app/website currently list and display live-updating coverage for specific named Évora parking zones, as opposed to a general "Évora is covered" marketing claim? *(PRB-0005, Gap 9)*
5. **(MEDIUM)** What do published national or regional informal-caregiver needs studies indicate about the relative weight of care/respite/financial/psychological versus navigation needs, as a point of comparison for the local 133-person sample? *(PRB-0007, Gap 15)*
6. **(MEDIUM)** Which TREVO stops/channels currently show incomplete or stale static route/timetable information, using only publicly accessible surfaces? *(PRB-0002, Gap 5)*
7. **(LOW, optional)** Is there recent public municipal statement or press reporting confirming the completion status of the road-repair programme and current N114 condition? *(PRB-0010, Gap 22)*

Items 1–6 are recommended as the RS-02 batch; item 7 may be folded in opportunistically given its low cost, but is not required to satisfy the queue.

---

## 4. WU022 handoff observations

Six institutional/operator routes are open under WU022 (`docs/milestones/D5-WU01-operator-challenge-progress.md`), all dispatched 2026-08-12:

| Route | PRB(s) | Status | Gaps it covers (this review) |
|---|---|---|---|
| TREVO | PRB-0001, PRB-0002 | `SENT`, pending | Gap 3 (U2 causes), secondary institutional slice of Gap 1/5 |
| DAM (Município) | PRB-0004, PRB-0005 | `SENT`, pending | Gap 7 (secondary), Gap 10, Gap 11, secondary of Gap 9 |
| APCE | PRB-0003 | `RESPONSE_RECEIVED`, **partial** — stopping rule not fully met, coordinator follow-up pending/unscheduled | Gap 6 (institutional slice) |
| SASUE | PRB-0006 | `SENT`, pending | Gap 12 |
| DEIS (Município) | PRB-0007 | `SENT`, pending | Gap 13 (secondary), Gap 14 |
| NERE | PRB-0008 | `SENT`, pending | Gap 16, Gap 18 |

No engagement status was changed by this review — all six routes reflect exactly what is already recorded in `D5-WU01-operator-challenge-progress.md`. **PRB-0009 and PRB-0010 have no WU022 route** (correctly, per WU022's own scope: PRB-0009 stays `WATCH`-conditional and excluded this wave; PRB-0010 is `WATCH-TRIGGER` with no operator engagement authorized) — Gaps 19–21 (PRB-0009) and Gap 22 (PRB-0010, desk-classified) are the only meaningful gaps without any active institutional route.

**Cross-check performed:** all `DESK_RESEARCHABLE` gaps in §2 were checked against the six routes' actual question sets and against the 2026-08-12 evidence-sufficiency table in the progress doc, to avoid proposing desk research that duplicates a question already asked institutionally. Gaps 1, 15, and 17 have no institutional counterpart in any of the six routes. Gaps 5, 7, and 9 have a related institutional question already in flight; they are recommended as *cheap, non-duplicative, parallel* checks, not substitutes for the institutional answer.

---

## 5. WU023 preparation observations

Strongest `AFFECTED_JOURNEY` candidates for a future WU023 (not started by this review):

- **PRB-0001 (Gap 2):** Do residents in evening/weekend/holiday/low-demand-location journeys actually experience the schedule gaps identified by desk timetable analysis as impractical for real trips (commuting, school, errands)?
- **PRB-0002 (Gap 4):** Map at least one concrete current passenger journey where TREVO information (static or real-time) actually fails, and how the passenger recovers.
- **PRB-0005 (Gap 8, D5-P5-01):** Do drivers in the relevant Évora locations/times materially cruise, queue, abandon destinations or double-park because they lack availability information — or is scarcity/enforcement/pricing the dominant cause?
- **PRB-0007 (Gap 13):** When a person first becomes an informal caregiver in Évora, where do they actually start looking for help, and at what point does that path break down?
- **PRB-0003 (residual, conditional on APCE follow-up):** What do affected users with reduced mobility currently experience at the specific locations/barrier-types APCE named (inclination, location/access), if the coordinator follow-up does not supply location-level detail?
- **PRB-0006 (residual, conditional on SASUE response):** Only if SASUE's institutional account leaves the applicant-journey question materially open, per that route's own stopping rule.

None of these are recruited or scheduled by this review.

---

## 6. Deferred solution-stage questions

No `PRB-*` has an assessed `digital_tractability` beyond `not_assessed`/`low` (PRB-0009, PRB-0010 only, both at `low`), and no problem has reached the tractability/evaluability stage of the lifecycle. Accordingly, no genuine `SOLUTION_STAGE` question was *derivable* from current evidence — the following are named only to keep them explicitly out of scope for RS-02 and WU023, not because evidence currently points toward them:

- Whether a parking-availability app/interface would be adopted or trusted by drivers (PRB-0005).
- Whether a real-time passenger-information app/channel would be adopted (PRB-0002).
- Whether a caregiver information portal or digital guide would be used (PRB-0007).
- Whether a cycling-route planning tool would change route choice (PRB-0004).
- Whether an employer-training matching platform would improve hiring outcomes (PRB-0008).
- Whether a housing-application status-tracking tool would be adopted (PRB-0006).

---

## 7. Validation

- All 10 current `PRB-*` reviewed together with their corresponding `ASM-*`: confirmed (§2).
- Classifications cross-checked against the six active WU022 question sets to avoid duplicating active institutional work as desk research: confirmed (§4).
- No canonical research record (`SRC-*`/`EVD-*`/`PRB-*`/`ASM-*`/`HYP-*`) was created or modified by this review.
- `.aiqt/state.json` is unchanged.
- `node tools/validate-research.js` — see closure report.
