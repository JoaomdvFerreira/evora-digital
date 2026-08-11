# WU-D2-02 Progress — Mobility / Accessibility / Public Realm Signals

**Status:** ACTIVE — Round A batch integrated; targeted follow-up recommended before closure
**Milestone:** D2 — Public Signal Discovery
**Date:** 2026-08-11

## Round A batch integration

The externally reviewed and project-owner-approved **D2-A Mobility/Accessibility/Public Realm Round A research handoff** (`D2-A-mobility-public-realm-round-A-research-handoff.md`) was integrated into structured repository records, together with the relevant findings of the accompanying **D2 Round A Cross-Track Synthesis** (`D2-round-A-cross-track-synthesis.md`), used here only for context on this track.

- Sources added: **7** — `SRC-0066` (JN protest report), `SRC-0067` (Portal da Queixa TREVO complaint surface), `SRC-0068` (PRR Azaruja accessibility project), `SRC-0069` (road-requalification petition), `SRC-0070` (Rádio Campanário road-repair report), `SRC-0071` (O Alentejo road-condition report), `SRC-0072` (public social post, N114 pothole)
- Evidence records added: **6** — `EVD-000079`…`EVD-000084`
- Problem records updated (context/evidence-linkage only, no `status`/`validation_status`/`digital_tractability` change): **5** — `PRB-0001`…`PRB-0005`, each gained a `possible_root_causes` entry prefixed "D2-A Round A update:"
- Problem records created: **0**
- Hypothesis records created: **0**

No `PRB-*` was moved toward `validated`; `PRB-0001`–`PRB-0005` all remain `validation_status: unvalidated`, per the D2 problem-validation boundary (`docs/discovery/d2-execution-protocol.md` §3).

## Provisional → canonical mapping

| Handoff signal | Canonical source | Canonical evidence | Primary PRB(s) | Classification |
|---|---|---|---|---|
| D2-A-SIG-01 (student protest, Colégio Pedro da Fonseca) | `SRC-0066` | `EVD-000079` | `PRB-0001` | CONFIRMS; REFINES |
| D2-A-SIG-02 (TREVO complaint surface) | `SRC-0067` | `EVD-000080` | `PRB-0001` (secondary `PRB-0002`) | CONFIRMS; REFINES |
| D2-A-SIG-03 (current TREVO trip-planning surface) | *reused* `SRC-0021` | *reused* `EVD-000016` | `PRB-0002` | EXISTING-SOLUTION; CURRENT-STATE-UPDATE |
| D2-A-SIG-04 (EB1 Azaruja accessibility barrier) | `SRC-0068` | `EVD-000081` | `PRB-0003` | CONFIRMS; CURRENT-STATE-UPDATE |
| D2-A-SIG-05 (road-requalification petition) | `SRC-0069` | `EVD-000082` | none (`NEW-CANDIDATE`) | NEW-CANDIDATE; LOW-DIGITAL-LEVERAGE |
| D2-A-SIG-06 (municipal €1.5M repair acknowledgement) | `SRC-0070` + `SRC-0071` (additional source) | `EVD-000083` | none (`NEW-CANDIDATE`) | CONFIRMS SIG-05; CURRENT-STATE-UPDATE; LOW-DIGITAL-LEVERAGE |
| D2-A-SIG-07 (N114 persistence social post) | `SRC-0072` | `EVD-000084` | none (`NEW-CANDIDATE`) | REFINES NEW-CANDIDATE; CURRENT-STATE-UPDATE |
| D2-A-SIG-08 (cycling coverage gap) | — (no source; a coverage result) | — (no evidence record; recorded as a `PRB-0004.possible_root_causes` note) | `PRB-0004` | COVERAGE-GAP |

`SRC-0021`/`EVD-000016` (TREVO website, already canonical since D1 `WU-D1-02` Batch B) were reused rather than duplicated, per `docs/discovery/d1-recording-protocol.md`'s "a source record must not be duplicated" rule — SIG-03 corroborates an existing D1 record rather than introducing new material, so it is cited in `PRB-0002`'s updated note without a new `EVD-*`.

## PRB-0001–0005 changes

- **`PRB-0001`** (transport practical service): strengthened and refined. `EVD-000079` (student protest) and `EVD-000080` (TREVO complaint incidents) added to `evidence`. New root-cause note toward availability/frequency/capacity/practical-journey-time constraints for a specific campus/industrial-zone journey.
- **`PRB-0002`** (transport information/interoperability): constrained/refocused, not weakened. `EVD-000016` (existing) and `EVD-000080` (secondary) added to `evidence`. New root-cause note: do not frame as an information vacuum — TREVO already provides trip-planning/live-update information; remaining uncertainty is reliability/usability/interoperability in the real traveller journey.
- **`PRB-0003`** (pedestrian/accessibility barriers): factual confirmation, weak open-web lived signal. `EVD-000081` added to `evidence`. New root-cause note recording the concrete EB1 Azaruja barrier and the need to re-check post-project (2025–2026) conditions before treating it as current.
- **`PRB-0004`** (cycling coherence): no material update. No evidence added. New root-cause note recording the explicit Round A public-signal coverage gap — absence of signal is not treated as absence of the problem; D5/direct observation/network analysis recommended over further broad search.
- **`PRB-0005`** (traffic/parking/public-space interaction): limited direct update; scope boundary recorded. No evidence added. New root-cause note recording the road-surface-maintenance blind spot and explicitly **not** absorbing it into `PRB-0005` pending cross-track synthesis.

## Road-surface maintenance — NEW-CANDIDATE disposition

Per the approved decisions, road-surface maintenance/service reliability is **not promoted to a canonical `PRB-*`**. It is recorded as three unlinked `EVD-*` records (`EVD-000082`, `EVD-000083`, `EVD-000084`, citing `SRC-0069`–`SRC-0072`) carrying the `NEW-CANDIDATE` classification in their `notes`, cross-referenced from `PRB-0005`'s new root-cause note so the boundary decision is discoverable from both directions. The synthesis document's project-owner decision points (remain `NEW-CANDIDATE`, become a `PRB-0005` refinement/extension, or receive targeted D2 follow-up) remain open and are not resolved by this integration.

## Coverage / contradiction / current-state findings

**PRB-0001–0005 coverage matrix** (per `docs/discovery/d2-execution-protocol.md` §4 coverage rule):

| PRB | Round A signal | Effect |
|---|---|---|
| `PRB-0001` | Strong (`EVD-000079`, `EVD-000080`) | CONFIRMS + REFINES |
| `PRB-0002` | Moderate (`EVD-000016`, `EVD-000080`) | EXISTING-SOLUTION + refocus |
| `PRB-0003` | Moderate factual, weak lived (`EVD-000081`) | CONFIRMS specific barrier; lived-signal coverage gap noted |
| `PRB-0004` | Weak — no signal of comparable strength found | COVERAGE-GAP; no material change |
| `PRB-0005` | Weak/moderate — only via the unlinked road-maintenance blind spot | No material change; scope boundary recorded |

**Contradictions / current-state corrections preserved:**

1. Do not describe transport information as absent — TREVO already provides journey/live-update information (`PRB-0002`).
2. Do not freeze historical accessibility barriers as current — the EB1 Azaruja barrier is under/recently through corrective investment (`PRB-0003`).
3. Do not interpret road-condition complaints as an app/reporting gap — available evidence points to physical maintenance/service reliability, not information absence.

## Saturation assessment

Per `docs/discovery/d2-execution-protocol.md` §15 saturation indicators: **track-level Round A saturation is NOT YET reached**, consistent with the handoff's own §7 assessment. At least two source classes were checked (PS1, PS3, PS4, PS6), contradictory/current-state evidence was actively sought and found (existing TREVO information surface; EB1 Azaruja corrective works), and the explicit `PRB-0004` coverage gap is documented rather than treated as absence of a problem. However, further broad searching is not equally valuable across all five PRBs — the recommended next route is **targeted follow-up**, not a repeated broad scan:

- `PRB-0001`: sufficient Round A signal to proceed to targeted journey/stakeholder questions.
- `PRB-0002`: target the actual user information journey (reliability/usability/interoperability), not existence of tools.
- `PRB-0003`: targeted lived/accessibility validation or direct observation.
- `PRB-0004`: prefer D5/direct observation/network analysis over further broad web search.
- `PRB-0005`: targeted scope clarification, especially the boundary against the road-maintenance blind spot.

`WU-D2-02` therefore remains open (not closed) pending this targeted follow-up and the project-owner's road-maintenance disposition decision from the cross-track synthesis (§13 of `D2-round-A-cross-track-synthesis.md`).

## Candidate D5 questions carried forward

1. Which specific journeys become impractical due to service frequency/capacity rather than information?
2. How often do travellers switch to TVDE/car because no usable public-transport journey exists?
3. Can users reliably reconcile live information, schedules, routes and disruptions?
4. Which pedestrian/accessibility barriers remain after recent interventions?
5. Which cycling discontinuities are actual journey blockers?
6. Is road-surface maintenance a distinct civic problem from traffic/parking/public-space conflict?
7. Which road/public-realm issues are repeatedly reported but slow to resolve?

## Validator result

```text
node tools/validate-research.js
Validated 156 record(s): OK.
```

143 (D1 baseline) + 7 new `SRC-*` + 6 new `EVD-*` = 156. No `PRB-*`/`HYP-*` record count change (still 9 `PRB-*`, 0 `HYP-*`); five `PRB-*` records were updated in place, not replaced.

## Files added/changed

```text
research/sources/SRC-0066.yaml .. SRC-0072.yaml   (added)
research/evidence/EVD-000079.yaml .. EVD-000084.yaml (added)
research/problems/PRB-0001.yaml .. PRB-0005.yaml   (updated: possible_root_causes, evidence)
docs/data/source-registry.md                       (updated: 7 new rows)
docs/milestones/D2-WU02-progress.md                 (this file)
```

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Road-surface maintenance promoted to a `PRB-*`: **NO** — retained as unlinked `NEW-CANDIDATE` evidence
- Any `PRB-*` marked `validated`: **NO**
- New external research performed by the repository agent: **NO** — integration only, of the already-reviewed and approved handoff
- `WU-D2-02` closed: **NO** — Round A saturation not yet reached; targeted follow-up recommended

## Next

Targeted follow-up per PRB as listed above, and the project-owner's road-maintenance disposition decision, before `WU-D2-02` can be considered for closure. `WU-D2-03` and `WU-D2-04` remain independently `ready` and unaffected by this integration.
