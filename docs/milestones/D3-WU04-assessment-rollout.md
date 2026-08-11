# WU-D3-04 Assessment Rollout — Remaining Problem Assessments & Triage

**Status:** DONE (assessment drafting only — no deepening research performed)
**Milestone:** M003 — D3 Problem Map v1 & Decision Baseline
**Work Unit:** WU017 / WU-D3-04
**Date:** 2026-08-11

## Objective

Integrate the approved WU017 project-owner handoff into the actual repo records: create `ASM-Lite` coverage (`ASM-0001`, `ASM-0003`, `ASM-0004`, `ASM-0005`, `ASM-0006`, `ASM-0008`, `ASM-0010`) for the seven canonical active problems not assessed in the `WU-D3-02` pilot, backfill material `EVD.analysis` metadata for their linked evidence, and record a rollout/routing view across all ten canonical problems. This document is planning/routing only — it performs no deepening research and adds no new evidence.

---

## 1. All ten problems — rollout table

| PRB | ASM | structure_action | triage | journey_understanding | main blocked gate | next method / trigger |
|---|---|---|---|---|---|---|
| PRB-0001 | ASM-0001 | KEEP | DEEPEN | PARTIAL | journey_understood (PARTIAL) | Bounded current-journey/service-performance exercise (timetable + operator/service-performance data); no more broad web discovery |
| PRB-0002 | ASM-0002 (pilot) | KEEP | DEEPEN | INSUFFICIENT | journey_understood (FAIL) | Map at least one concrete passenger journey with a current information failure + stop-level information audit |
| PRB-0003 | ASM-0003 | KEEP | DEEPEN | PARTIAL | digital_causality (FAIL) | Location-level accessibility audit with affected-user participation; reuse current institutional assessment outputs |
| PRB-0004 | ASM-0004 | KEEP | DEEPEN | INSUFFICIENT | journey_understood (FAIL) | One bounded network/observation assessment; no more generic cycling mentions |
| PRB-0005 | ASM-0005 | KEEP | DEEPEN | PARTIAL | journey_understood (PARTIAL) | Targeted location + operational-data assessment; no new parking-app hypothesis |
| PRB-0006 | ASM-0006 | KEEP | DEEPEN | INSUFFICIENT | journey_understood (FAIL) | One targeted applicant/student process/journey check |
| PRB-0007 | ASM-0007 (pilot) | KEEP | DEEPEN | INSUFFICIENT | journey_understood (FAIL) | Formative caregiver-journey research + 2026-27 plan implementation-status check |
| PRB-0008 | ASM-0008 | KEEP | DEEPEN | INSUFFICIENT | journey_understood (FAIL) | Targeted employer/IEFP/NERE recruitment-outcome data + PlaQuaR coverage/outcome check |
| PRB-0009 | ASM-0009 (pilot) | KEEP | WATCH | INSUFFICIENT | digital_causality (FAIL) | Monitor post-intervention operational performance data (Município/Gesamb); route narrow residual leads to D4 |
| PRB-0010 | ASM-0010 | KEEP | WATCH | INSUFFICIENT | digital_causality (FAIL) | Monitor named watch triggers (persistence, reliability pattern, journey gap, open-data gap); no road-reporting app |

`structure_action` is `KEEP` for all ten — no `SPLIT_CANDIDATE`/`MERGE_CANDIDATE` was authorized or found in this rollout, including for PRB-0005 (§2 below). All ten `PRB-*.validation_status` remain `unvalidated`.

---

## 2. PRB-0005 structure decision (explicit)

Per handoff §6: the traffic/congestion, parking-pressure/illegal-parking, and pedestrian-space-conflict sub-mechanisms within `PRB-0005` remain analytically distinguishable in the evidence (`EVD-000007`/`EVD-000003`/`EVD-000025` speak mainly to traffic/congestion; `EVD-000008` speaks mainly to parking/legibility). The current evidence base does not establish sufficiently distinct affected journeys or consequences per sub-mechanism to justify a further canonical split during this D3 baseline. The road-surface/maintenance mechanism was already correctly separated as `PRB-0010` in `WU-D3-03`. `ASM-0005.structure_action` is `KEEP`; no split was performed or recommended here. This is recorded explicitly in `ASM-0005.notes` as well, per the handoff's requirement.

---

## 3. Triage distribution

| Triage | Count | PRBs |
|---|---|---|
| STOP | 0 | — |
| WATCH | 2 | PRB-0009, PRB-0010 |
| DEEPEN | 8 | PRB-0001, PRB-0002, PRB-0003, PRB-0004, PRB-0005, PRB-0006, PRB-0007, PRB-0008 |
| PROCEED | 0 | — |

No triage value was adjusted to produce a more balanced distribution; every value above is taken directly from the WU017 project-owner handoff (for the seven new ASMs) or preserved unchanged from the `WU-D3-02`/`WU-D3-03` pilot record (for the three pilot ASMs).

---

## 4. WU018 routing classification

Per handoff §12, each `DEEPEN`/`WATCH` item's next action is classified as `D3-WU05-FEASIBLE` (resolvable now from bounded, largely-desk-based or already-accessible methods), `D4-CARRY` / `D5-CARRY` (requires primary/stakeholder data collection more appropriately scheduled in a later phase), or `WATCH-TRIGGER` (no active research now; monitor a named trigger).

| PRB | Next action | WU018 routing | Reasoning |
|---|---|---|---|
| PRB-0001 | Bounded current-journey/service-performance exercise | **D5-CARRY** | The best-next-evidence (targeted operator/service-performance data, affected-user/operator validation) depends on data or participation from TREVO/ATAC/CIMAC operators that is not established as already accessible in the current corpus; treated conservatively as requiring primary/operator engagement rather than assumed desk-accessible. |
| PRB-0002 (pilot) | Passenger journey mapping + stop-level information audit | D3-WU05-FEASIBLE / D5-CARRY (pilot-inherited, unchanged) | Not re-routed by this WU; carried as-is from the pilot record. |
| PRB-0003 | Targeted current-barrier audit / affected-user validation | **D3-WU05-FEASIBLE** (bounded audit only) | The location-level barrier audit can reuse current institutional assessment outputs (APCE, R.A.M.P.A. monitoring) and is bounded; formative affected-user validation specifically is flagged **D5-CARRY**, per the handoff's own split. |
| PRB-0004 | Deterministic network/observation assessment | **D3-WU05-FEASIBLE** | Network/observation analysis (e.g. an OpenStreetMap/municipal-network comparison) is a bounded, desk-executable method not dependent on new stakeholder recruitment. |
| PRB-0005 | Current data/status verification + bounded location/journey observation | **D3-WU05-FEASIBLE** (data/status verification); lived-journey component **D5-CARRY** | Sensor/occupancy/data-interface verification is desk-accessible; the location/journey observation component, if it requires resident/user validation, is carried to D5. |
| PRB-0006 | Targeted applicant/student process/journey check | **D5-CARRY** | Requires bounded formative applicant/student journey engagement and administrative process/placement data not established as already accessible; per handoff, carried unless existing administrative/process material alone can resolve it. |
| PRB-0007 (pilot) | Formative caregiver-journey research + plan implementation-status check | D5-CARRY (pilot-inherited, unchanged) | Not re-routed by this WU. |
| PRB-0008 | Targeted recruitment/alignment evidence (employer/IEFP/NERE outcome data; PlaQuaR coverage) | **D5-CARRY** | Requires operator/employer validation and programme outcome data beyond what the current corpus already contains; per handoff, carried unless existing public programme data alone is sufficient — not established here. |
| PRB-0009 (pilot) | Monitor operational performance data; route narrow leads to D4 | WATCH-TRIGGER (pilot-inherited, unchanged) | Not re-routed by this WU. |
| PRB-0010 | Monitor named watch triggers | **WATCH-TRIGGER** | No active research is scheduled; re-open only if a named trigger (broad persistence, repeatable reliability failure, material journey gap, or open-data gap) becomes visible. |

This routing does not expand WU018 into seven parallel research programmes: PRB-0003/PRB-0004/PRB-0005 contribute one bounded D3-WU05-feasible method each (barrier audit, network/observation analysis, data/status verification), while PRB-0001/PRB-0006/PRB-0008 are carried to D5 as primary/stakeholder-data questions, and PRB-0010 remains a pure watch item.

---

## 5. Record counts

| Before WU017 | After WU017 |
|---|---|
| 81 SRC / 103 EVD / 10 PRB / 0 HYP / 3 ASM = 197 total | 81 SRC / 103 EVD / 10 PRB / 0 HYP / **10 ASM** = **204 total** |

No new `SRC-*`, `EVD-*`, `PRB-*`, or `HYP-*` record was created. All ten `PRB-*` remain `validation_status: unvalidated`. `ASM-0002`, `ASM-0007`, `ASM-0009` were not touched.

## 6. Validation result

```text
node tools/test-analytical-foundation.js
  22/22 passed

node tools/validate-research.js
  Validated 204 record(s): OK.

node tools/analyze-research.js --all
  10 PRB rows; all current_asm populated; triage matches §3 above.

node tools/analyze-research.js --gaps
  21 gaps: 1x PRB-0003 linked-EVD-missing-analysis (EVD-000030, deliberately unannotated — governance/data-owner reference record, not material to barrier/journey/civic-importance reasoning), plus each of the ten ASMs' own remaining NOT_ASSESSED-gate/critical-unknown counts (expected, matching the pilot's own gap profile).

node tools/analyze-research.js --problem PRB-0001   → 9/9 EVD analysed; ASM-0001 CURRENT; 2 critical unknowns; triage DEEPEN
node tools/analyze-research.js --problem PRB-0003   → 9/10 EVD analysed; ASM-0003 CURRENT; 1 critical unknown; triage DEEPEN
node tools/analyze-research.js --problem PRB-0004   → 2/2 EVD analysed; ASM-0004 CURRENT; 1 critical unknown; triage DEEPEN
node tools/analyze-research.js --problem PRB-0005   → 5/5 EVD analysed; ASM-0005 CURRENT; 2 critical unknowns; triage DEEPEN
node tools/analyze-research.js --problem PRB-0006   → 7/7 EVD analysed; ASM-0006 CURRENT; 1 critical unknown; triage DEEPEN
node tools/analyze-research.js --problem PRB-0008   → 9/9 EVD analysed; ASM-0008 CURRENT; 2 critical unknowns; triage DEEPEN
node tools/analyze-research.js --problem PRB-0010   → 3/3 EVD analysed; ASM-0010 CURRENT; 1 critical unknown; triage WATCH
```

## Confirmation

- Independent civic-problem-structure choices made beyond the approved handoff: **NO**
- New `PRB-*` created: **NO**
- `PRB-0005` split: **NO** — kept unified per handoff §6 (see §2 above)
- Any `PRB-*.validation_status` changed: **NO** — all ten remain `unvalidated`
- `ASM-0002`/`ASM-0007`/`ASM-0009` touched: **NO**
- New external research performed: **NO**
- Deepening research performed in this WU: **NO** — routing/classification only (§4)

## Next

WU018 should pick up the `D3-WU05-FEASIBLE` items from §4 (PRB-0003 barrier audit, PRB-0004 network/observation analysis, PRB-0005 data/status verification) as bounded D3-phase methods, while treating the `D5-CARRY` items (PRB-0001, PRB-0006, PRB-0008, and the affected-user/lived-journey components of PRB-0003/PRB-0005) as scheduled for later stakeholder/primary-data work rather than forced into D3. `PRB-0009`/`PRB-0010` remain on watch pending their named triggers.
