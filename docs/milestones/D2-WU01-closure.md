# WU-D2-01 Closure — Public Signal Method & Source Protocol

**Status:** DONE
**Milestone:** D2 — Public Signal Discovery
**Date:** 2026-08-11

## Objective

Integrate the project-owner-approved D2 Public Signal Discovery Strategy into canonical documentation and establish the D2 milestone/work-unit structure, per `.aiqt/state.json` WU008's objective. This WU performed no substantive Évora research and created no `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` record.

## Input

`evora-digital-D2-public-signal-discovery-strategy-approved.md` — the D2 Public Signal Discovery Strategy, marked **APPROVED** (project-owner approved 2026-08-11), reviewed against the repository's existing D0/D1 conventions before integration.

## Integration approach

Following the repository's established convention (each discovery phase gets its own dedicated `d<N>-execution-protocol.md`, while cross-cutting policy stays centralized in the shared methodology/ethics/roadmap docs), the approved strategy was **not** filed as a new standalone document. It was integrated by extending the existing `docs/discovery/d2-execution-protocol.md` (v0.1, drafted at D0 closure) to v0.2, carrying forward the strategy's methodological content: the evidence boundary, the problem-validation boundary, the five journey tracks (D2-A..E) with their coverage/bias boundaries, the six public-signal source classes (PS1–PS6), the source-independence rule, the factual-claim verification pipeline, signal classification labels, the blind-spot/open-discovery control, the escalation-of-new-problem-candidate rule, saturation indicators, and the priority order/parallel-round model.

Cross-cutting policy that already carried D2-specific carve-outs (`docs/discovery/research-ethics.md` §3–4: initial D2 permissions/prohibitions) was left unchanged — it already matches the approved strategy's privacy/ethics section and did not need duplication.

`docs/milestones/D2-public-signal-discovery.md` was created as the D2 milestone document, mirroring the structure of `docs/milestones/D1-institutional-data-source-mapping.md` (entry gate, operating model, research principles, Work Units, execution discipline, structured outputs, exit gate, explicitly out of scope, expected next state).

## AIQT result

- Formally generated the D2 work graph: milestone `M002` (status `ready`) with work units `WU008`–`WU013` and dependencies `DEP-011`–`DEP-020`.
- `WU008` (this work unit) was selected, executed, and closed `done` within this same session — its deliverable is exactly the protocol/milestone integration described above, so no separate external research handoff was required, matching the `WU-D1-01` precedent (infrastructure work unit, no substantive research).
- `WU009`–`WU011` (`WU-D2-02` Mobility, `WU-D2-03` Caregiver, `WU-D2-04` Urban Hygiene — the approved Round A tracks) became `ready`, unblocked by `WU008`'s completion.
- `WU012` (`WU-D2-05` Housing + Employment, Priority 2) and `WU013` (`WU-D2-06` Consolidation & Closure) remain `planned`: `WU012` depends on all three Round A work units (`DEP-014`–`DEP-016`), reflecting the approved strategy's instruction to decide whether to deepen Round A or start Housing/Employment only after Round A is reviewed; `WU013` depends on all four preceding integration work units (`DEP-017`–`DEP-020`).
- `currentMilestoneId` is `M002`; `currentWorkUnitId` returns to `null` after this closure, per the same convention used at D1 closure.
- `projectStatus` moved from `done` back to `active`, reflecting that the project has an active milestone with pending work units again.

## Validation result

```text
node tools/validate-research.js
Validated 143 record(s): OK.
```

No canonical `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` record was created, deleted, or modified by this work unit; the count is unchanged from the D1 baseline (56 SRC, 78 EVD, 9 PRB, 0 HYP).

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` created: **NO**
- Substantive external research performed: **NO**
- Graphify tooling/configuration modified: **NO** — the `ADOPT WITH CONSTRAINTS` decision in `docs/discovery/research-methodology.md` §10 is unchanged.
- D2 milestone/work-unit structure created: **YES** — `docs/milestones/D2-public-signal-discovery.md`, `.aiqt/state.json` (`M002`, `WU008`–`WU013`, `DEP-011`–`DEP-020`).
- Approved Round A preserved: **YES** — D2-A (Mobility), D2-B (Caregiver), D2-E (Urban Hygiene) map to `WU-D2-02`–`WU-D2-04`, all `ready`.

## Next

`WU-D2-02`, `WU-D2-03`, and `WU-D2-04` are `ready` for the first approved external research handoff, per `docs/discovery/research-handoff-protocol.md`. `WU-D2-05` (Housing + Employment) remains `planned` pending Round A cross-track synthesis. This work unit does not perform or authorize that research.
