# WU-D2-02 Closure — Mobility / Accessibility / Public Realm Signals

**Status:** DONE
**Milestone:** D2 — Public Signal Discovery
**Date:** 2026-08-11

## Objective

Integrate reviewed public-signal research handoffs for track D2-A (`PRB-0001`..`PRB-0005`), attempting coverage of all five problems and recording where no useful public signal is found, per `.aiqt/state.json` `WU009`'s objective and `docs/milestones/D2-public-signal-discovery.md`'s `WU-D2-02` definition.

## Batches integrated

1. **Round A** (`D2-A-mobility-public-realm-round-A-research-handoff.md`, with context from `D2-round-A-cross-track-synthesis.md`): 7 `SRC-*`, 6 `EVD-*`, refinements to `PRB-0001`–`PRB-0005`. See `docs/milestones/D2-WU02-progress.md` for the full batch detail and provisional→canonical mapping.
2. **Targeted follow-up** (`D2-A-targeted-follow-up-accessibility-cycling-scope.md`): 5 `SRC-*`, 4 `EVD-*`, further refinements to `PRB-0003`, `PRB-0004`, `PRB-0005`. See `docs/milestones/D2-WU02-progress.md` for the delta detail.

Neither batch was re-integrated into the other; the targeted follow-up added only material deltas on top of the already-integrated Round A records, per the approved instruction.

## Final PRB-0001–0005 disposition

| PRB | Effect | Status/tractability change |
|---|---|---|
| `PRB-0001` | CONFIRMS + REFINES (student-protest journey, TREVO complaint incidents) | None |
| `PRB-0002` | Constrained/refocused toward reliability/usability/interoperability; existing information surface confirmed | None |
| `PRB-0003` | CONFIRMS + REFINES; affected-user participation, institutional work already under way, and unresolved-barrier leads kept distinct | None |
| `PRB-0004` | No material change; broad-web method now explicitly saturated | None |
| `PRB-0005` | No material change; framing preserved; road-maintenance candidate confirmed separate by project-owner decision | None |

All five `PRB-*` records remain `validation_status: unvalidated`, per the D2 problem-validation boundary (`docs/discovery/d2-execution-protocol.md` §3). No public-signal evidence alone moved any `PRB-*` toward `validated`.

## Road-surface maintenance — final disposition

**KEEP AS NEW-CANDIDATE.** Project-owner decision, recorded verbatim in `PRB-0005.possible_root_causes`: do not absorb into `PRB-0005`; do not create a new `PRB-*`. Reason: current evidence (`EVD-000082`, `EVD-000083`, `EVD-000084`) points to a distinct physical maintenance/service-reliability mechanism — potholes, degraded pavement, maintenance response, road-condition safety — rather than `PRB-0005`'s traffic/parking-vs-pedestrian/public-space framing. The candidate is carried forward, unlinked to any `PRB-*`, into `WU-D2-06` cross-signal synthesis for later canonical disposition.

## Coverage matrix (final)

Coverage of `PRB-0001` through `PRB-0005` was explicitly attempted, per `docs/discovery/d2-execution-protocol.md` §4's D2-A coverage rule:

| PRB | Signal strength | Effect |
|---|---|---|
| `PRB-0001` | Strong | CONFIRMS + REFINES |
| `PRB-0002` | Moderate | EXISTING-SOLUTION + refocus |
| `PRB-0003` | Moderate-to-strong after follow-up | CONFIRMS + REFINES; barrier-status leads kept distinct from resolved/active work |
| `PRB-0004` | Weak, now methodologically saturated | COVERAGE-GAP; explicitly not read as absence |
| `PRB-0005` | Weak/moderate via the unlinked blind spot only | No material change; scope preserved |

`PRB-0004`'s coverage gap and `PRB-0005`'s road-maintenance boundary are both recorded per §14 ("absence of useful public signal is recorded explicitly and is not interpreted as absence of a problem") rather than silently omitted.

## Saturation decision

Per `docs/discovery/d2-execution-protocol.md` §15, broad D2 public-signal research for this track is sufficiently advanced for D2 across all five `PRB-*` records:

- `PRB-0001`: sufficiently developed for D2 handoff; next route is targeted journey/stakeholder validation (D5).
- `PRB-0002`: sufficient; remaining question is reliability/usability/interoperability, not information absence.
- `PRB-0003`: sufficiently advanced; next route is location/affected-user validation and a current-barrier audit.
- `PRB-0004`: broad-web method saturated; next route is direct observation/network analysis/D5.
- `PRB-0005`: sufficient to preserve current framing and keep the road-maintenance candidate separate; next route is journey/location validation.

Remaining work (D5 stakeholder validation, direct observation, network analysis, the road-maintenance disposition at cross-track synthesis) is explicitly future-phase work and is not a reason to keep `WU-D2-02` open, per the approved instruction.

## Validation result

```text
node tools/validate-research.js
Validated 165 record(s): OK.
```

- 143 (D1 baseline) + 7 Round A `SRC-*` + 6 Round A `EVD-*` + 5 follow-up `SRC-*` + 4 follow-up `EVD-*` = 165.
- `PRB-*`: still 9 records (`PRB-0001`–`PRB-0009`); five updated in place (`PRB-0001`–`PRB-0005`), none replaced.
- `HYP-*`: still 0 records.
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- `git status` reviewed before each commit; only the intended `research/` and `docs/` files changed.

## AIQT closure result

- `WU009` (`WU-D2-02`) was selected in AIQT (`ready` → `in_progress`) for Round A integration, then remained `in_progress` through the targeted follow-up, and now transitions `in_progress` → `done` in checkpoint `C010`, since both existing acceptance criteria (validator passes; `PRB-0001`–`PRB-0005` coverage attempt recorded) are satisfied.
- `M002` (D2 — Public Signal Discovery) remains `ready`; not all of `M002.workUnitIds` are `done` yet (`WU010`, `WU011` in progress/ready; `WU012`, `WU013` `planned`), so the milestone is not closed by this work unit.
- `currentWorkUnitId` returns to `null` after this closure, matching the convention used at `WU-D1-01`/`WU-D1-07`/`WU-D2-01` closure.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Road-surface maintenance promoted to a `PRB-*`: **NO** — KEEP AS NEW-CANDIDATE (project-owner decision)
- Any `PRB-*` marked `validated`: **NO**
- New external research performed by the repository agent: **NO** — integration only
- `WU-D2-02` closed: **YES**
- `M002` milestone closed: **NO**

## Next

`WU-D2-03` (Caregiver) and `WU-D2-04` (Urban Hygiene) continue independently. `WU-D2-05` (Housing + Employment) remains `planned` pending Round A cross-track synthesis across all three Round A tracks. `WU-D2-06` (Consolidation & D2 Closure) will resolve the road-maintenance `NEW-CANDIDATE` disposition alongside the other tracks' findings.
