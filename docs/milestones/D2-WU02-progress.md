# WU-D2-02 Progress — Mobility / Accessibility / Public Realm Signals

**Status:** DONE — superseded by `docs/milestones/D2-WU02-closure.md`
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

## Round A saturation (superseded)

Per `docs/discovery/d2-execution-protocol.md` §15 saturation indicators, Round A integration alone found **track-level Round A saturation NOT YET reached**, consistent with the handoff's own §7 assessment. The recommended next route was **targeted follow-up**, not a repeated broad scan — see the Targeted Follow-up integration below, which resolves this.

## Targeted follow-up integration

The externally reviewed and project-owner-approved **D2-A Targeted Follow-up — Accessibility, Cycling and PRB-0005 Scope** (`D2-A-targeted-follow-up-accessibility-cycling-scope.md`) was integrated as a bounded delta on top of the Round A batch above. No existing Round A material was repeated or re-integrated, and no new external research was performed by the repository agent.

- Sources added: **5** — `SRC-0073` (APCE Acesso Universal 1.3), `SRC-0074` (APCE Facebook post, continuing verification), `SRC-0075` (Évora_27 Facebook post, 2026 accessibility plan), `SRC-0076` (Visit Portugal destination page), `SRC-0077` (Tur4all accessible-tourism page)
- Evidence records added: **4** — `EVD-000085` (APCE participatory programme), `EVD-000086` (APCE continuing verification), `EVD-000087` (Évora_27 accessibility plan), `EVD-000088` (accessible-tourism barrier leads, `SRC-0076` + `SRC-0077` as `additional_sources`)
- Problem records updated: **3** — `PRB-0003` (new evidence + root-cause note distinguishing affected-user participation / institutional work already under way / actual unresolved present-day barriers), `PRB-0004` (methodological-saturation root-cause note only, no new evidence — per the handoff's explicit instruction not to manufacture evidence solely to satisfy coverage), `PRB-0005` (root-cause note recording the project-owner's road-maintenance disposition decision; framing preserved unchanged, not broadened)
- Problem/hypothesis records created: **0**

### PRB-0003 delta

New evidence distinguishes three classes that must not be collapsed: (1) affected-user/stakeholder participation (`EVD-000085`, APCE's Acesso Universal 1.3 — people with disabilities actively identifying/improving barriers); (2) institutional accessibility work already under way (`EVD-000086` continuing municipal-facility verification; `EVD-000087` Évora_27's 2026 accessibility plan) — `EXISTING-SOLUTION`/`CURRENT-STATE-UPDATE`, not unresolved barriers; (3) actual unresolved present-day physical barriers (`EVD-000088`, accessible-tourism surfaces) — `FRESHNESS-UNKNOWN`, a lead for a location-level audit, not a canonical current fact. Barriers already under active correction are explicitly not treated as automatically current. Broad open-web research on `PRB-0003` is now sufficiently advanced for D2; next route is affected-user validation and a location-level current-barrier audit.

### PRB-0004 delta

The targeted search (BikÉvora events, cycling promotion, municipal policy, associations/events, international advocacy activity) again produced no sufficiently strong, recent, Évora-specific lived signal on everyday origin-destination journeys blocked by network discontinuity. Broad open-web public-signal discovery is now **methodologically saturated** for this PRB. Per explicit instruction, the sparse public signal is **not** interpreted as absence or weakening of `PRB-0004`, and no `EVD-*` was manufactured to satisfy coverage. Next evidence routes: direct observation, network analysis, cyclist/stakeholder validation in D5 (potentially an OpenStreetMap/municipal-network comparison).

### PRB-0005 delta

No new evidence and no broadening of the canonical framing. The root-cause notes now record the project-owner's explicit decision: road-surface maintenance/service reliability is **kept as `NEW-CANDIDATE`** (`EVD-000082`, `EVD-000083`, `EVD-000084`, unchanged), not absorbed into `PRB-0005` and not promoted to a new `PRB-*`, because its evidence points to a distinct physical maintenance/service-reliability mechanism rather than `PRB-0005`'s traffic/parking-vs-pedestrian/public-space framing. The candidate is carried forward to `WU-D2-06` cross-signal synthesis for later canonical disposition.

## Final saturation assessment

| PRB | Broad D2 research | Next evidence route |
|---|---|---|
| `PRB-0001` | Sufficiently developed for D2 handoff | Targeted journey/stakeholder validation (D5) |
| `PRB-0002` | Sufficient — remaining question is reliability/usability/interoperability, not information absence | D5 / real user-journey testing |
| `PRB-0003` | Sufficiently advanced for D2 | Location/affected-user validation (D5), current-barrier audit |
| `PRB-0004` | Saturated as a broad-web method | Direct observation / network analysis / D5 |
| `PRB-0005` | Sufficient to preserve current framing and keep the road-maintenance candidate separate | Journey/location validation; road-maintenance disposition at `WU-D2-06` synthesis |

`WU-D2-02`'s existing acceptance criteria — all integrated records pass `node tools/validate-research.js`, and the `PRB-0001`–`PRB-0005` coverage attempt is recorded — are both satisfied. Outstanding D5/direct-observation work is future-phase work, not a reason to keep this work unit open, per the approved instruction. `WU-D2-02` is therefore closed; see `docs/milestones/D2-WU02-closure.md`.

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
Validated 165 record(s): OK.
```

143 (D1 baseline) + 7 Round A `SRC-*` + 6 Round A `EVD-*` + 5 follow-up `SRC-*` + 4 follow-up `EVD-*` = 165. No `PRB-*`/`HYP-*` record count change (still 9 `PRB-*`, 0 `HYP-*`); five `PRB-*` records were updated in place, not replaced.

## Files added/changed

```text
research/sources/SRC-0066.yaml .. SRC-0077.yaml     (added, across Round A + targeted follow-up)
research/evidence/EVD-000079.yaml .. EVD-000088.yaml (added, across Round A + targeted follow-up)
research/problems/PRB-0001.yaml .. PRB-0005.yaml    (updated: possible_root_causes, evidence)
docs/data/source-registry.md                        (updated: 12 new rows)
docs/milestones/D2-WU02-progress.md                  (this file)
docs/milestones/D2-WU02-closure.md                   (closure record)
```

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Road-surface maintenance promoted to a `PRB-*`: **NO** — project-owner decision recorded as KEEP AS NEW-CANDIDATE, unlinked to any `PRB-*`
- Any `PRB-*` marked `validated`: **NO**
- New external research performed by the repository agent: **NO** — integration only, of the already-reviewed and approved Round A handoff and targeted follow-up
- `WU-D2-02` closed: **YES** — see `docs/milestones/D2-WU02-closure.md`

## Next

`WU-D2-02` is closed. The road-maintenance `NEW-CANDIDATE` is carried forward to `WU-D2-06` cross-signal synthesis. `WU-D2-03` and `WU-D2-04` remain independently `ready`/in progress on their own tracks and are unaffected by this integration.
