# RS-02B1 — Focused Desk Research — Progress

**Type:** Research Support activity (independent of the AIQT milestone/work-unit sequence)
**As of:** 2026-08-12
**Scope:** two of the four remaining MEDIUM desk-research questions from `docs/discovery/rs-01-evidence-gap-review.md` §3 (queue items 3 and 6) — PRB-0004 cycling-network data availability, PRB-0002 TREVO passenger-information journey. No broad new research pass was performed; all cited public sources were directly fetched/downloaded and text-verified before canonicalization.

This is a compact addendum, not a rewrite of RS-01 or RS-02A. Their findings, classifications and remaining queue stand unchanged except where noted below.

## What was integrated

**PRB-0004 (Gap 7 — cycling-network topology data):**
- `SRC-0103` (PMUSE Volume I, diagnosis) — new, distinct document from the already-canonical `SRC-0016` (PMUSE Volume II). Verified by direct download/text extraction.
- `SRC-0104` (municipal digital-cartography transfer regulation) — new. Verified: confirms SHP/DWG/ECW/PDF supply formats via a formal request process, dated 2020-12.
- `SRC-0105` (municipal road-network news item) — new. Verified: confirms a completed cycling/pedestrian connection phase (March 2025) since the 2020 map baseline.
- `EVD-000118` (existing cycling cartography, `CONFIRMS`), `EVD-000119` (proposed network expansion, `PLANNED-SOLUTION`), `EVD-000120` (cartography-format supply capability, `REFINES`), `EVD-000121` (recent completed works, `CURRENT-STATE-UPDATE`/`EXISTING-SOLUTION`) — all new, linked to `PRB-0004`.
- `PRB-0004`/`ASM-0004` updated: `possible_root_causes` entry added; `evidence_status` `discovered → corroborated`; `existing_solution_understanding` `PARTIAL → SUFFICIENT`; `decision_gates.problem_real` `PARTIAL → PASS`; `evidence_confidence.independence`/`currentness`/`overall` `LOW → MEDIUM`; `critical_unknowns.U2` added (institutional, DAM); `next_action`/notes updated. `journey_understanding` (`INSUFFICIENT`) and `decision_gates.journey_understood` (`FAIL`) **unchanged** — no journey-level evidence was added.

**PRB-0002 (Gap 5/6 — passenger-information journey):**
- No new `SRC-*` (TREVO's `network-and-schedules` page reuses `SRC-0021`; PMUSE Volume II reuses `SRC-0016`; PMUSE Volume I reuses the newly-created `SRC-0103`).
- `EVD-000122` (PMUSE passenger-information action-plan proposals, `PLANNED-SOLUTION`), `EVD-000123` (PMUSE Volume I physical stop-information heterogeneity, `REFINES`) — new, linked to `PRB-0002`.
- `PRB-0002`/`ASM-0002` updated: `possible_root_causes` entry added; `journey_understanding` `INSUFFICIENT → PARTIAL`; `decision_gates.journey_understood` `FAIL → PARTIAL`; `evidence_confidence.adequacy` `LOW → MEDIUM`; `critical_unknowns.U3` narrowed to the confirmed stop-heterogeneity finding; `next_action`/notes updated. `evidence_confidence.independence` explicitly **not** increased (same PMUSE institutional-planning voice, not a new thread).

**Deliberately not canonicalized** (evidence-discipline boundaries applied):
- TREVO's `network-and-schedules` page detail — inspected again, still a client-rendered shell (same limitation as RS-02A); no claim of timetable completeness made; `SRC-0021`/`EVD-000016` unchanged.
- TREVO/PICK's advertised capability list (journey planning, real-time, vehicle location, ticketing) — already adequately characterized by existing `EVD-000016`/`SRC-0018`; no new record created to avoid canonicalizing marketing description as demonstrated outcome.
- PMUSE's proposed cycling-network expansion and passenger-information improvements — canonicalized explicitly as `PLANNED-SOLUTION`, never as delivered/current infrastructure.
- Absence of a publicly findable open cycling dataset — recorded as a public-discoverability finding only (`EVD-000118`'s notes), not as proof no operational dataset exists internally.
- The existence of multiple TREVO/PMUSE information channels — not read as evidence of passenger confusion; no affected-journey claim was made without direct affected-person evidence.

## Institutional routes — unchanged

- **DAM (D5-OP-002)** stays `SENT`/pending — still the route for `PRB-0004` U2 (current operational GIS layer, format, public reuse).
- **TREVO (D5-OP-001)** stays `SENT`/pending — still the route for `PRB-0002` U1/U3 operational/channel/delivery-status clarification.

## Validation

- `node tools/validate-research.js` → `Validated 239 record(s): OK.` (230 baseline + 3 new `SRC-*` + 6 new `EVD-*`).
- Research Explorer read model rebuilt (`apps/research-explorer`, `npm run build-data`): 239 records, 366 edges, 0 dangling. New evidence and graph edges (`EVD-000118`–`EVD-000121` → `PRB-0004`; `EVD-000122`–`EVD-000123` → `PRB-0002`) appear automatically via `analysis.related_problems`, with no Explorer application-code change.
- `.aiqt/state.json` unchanged; no AIQT milestone/WU state modified; WU023 not started.

## Candidate WU023 question (from PRB-0002)

Does the combination of inconsistent physical stop signage (some stops lacking any timetable panel, sheltered-stop panels lacking accessibility elements) and TREVO's digital channels actually cause passengers to miss, mistime, or fail a real trip — and if so, for which stops/lines/populations? This requires direct affected-journey evidence and is not to be started under this task.

## Recommendation for the remaining MEDIUM queue (RS-01 §3, items 4–5)

**Proceed as RS-02B2**, unchanged in priority: PRB-0005 Parking Buddy coverage and PRB-0007 caregiver-needs context were not touched by this batch, and nothing found here changes their framing, priority, or institutional-route relationship.
