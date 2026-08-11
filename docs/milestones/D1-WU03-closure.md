# WU-D1-03 Closure — Housing, Social Support, Health & Wellbeing

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Objective

Integrate reviewed research handoffs covering Housing, Social Support, and Health & Wellbeing into structured records, with particular care for privacy on health data (`.aiqt/state.json` WU003 objective), producing candidate problem clusters, current interventions, and unresolved gaps — without performing new external research locally or authorizing any solution.

## Institutional coverage achieved

Two externally reviewed research handoffs were integrated in sequence, each faithfully transcribed into structured records per `docs/discovery/research-handoff-protocol.md`:

- **Batch A** — first institutional pass: strategic/social planning documents (PDS 2024-2027, PDS Action Plan 2025), the PUE housing sector report, the informal-caregiver plan, and the CLASE social-support network; established the first `SRC-*`/`EVD-*` set and the two `PRB-*` problem clusters (`PRB-0006` housing, `PRB-0007` informal-caregiver navigation).
- **Batch B** — current-state challenge / existing-solution follow-up: current (2026) funded housing-programme and delivery evidence, current UÉ student-accommodation capacity, the 2026-2027 caregiver-plan implementation update, and current ULSAC mental-health/community-care responses; confirmed no new top-level problem class, refined both existing `PRB-*` records, and explicitly ruled out promoting student accommodation or mental-health capacity to separate canonical problems.

## Final record counts

Full canonical set after Batch B, validated by `node tools/validate-research.js`:

```text
Validated 83 record(s): OK.
```

Records attributable to WU-D1-03 across both batches:

- Sources enriched: `SRC-0002` (Batch A), `SRC-0030`, `SRC-0031` (Batch B)
- Sources added: `SRC-0028`, `SRC-0029`, `SRC-0030`, `SRC-0031` (Batch A); `SRC-0035`, `SRC-0036`, `SRC-0037`, `SRC-0038` (Batch B)
- Evidence added: `EVD-000031`–`EVD-000036` (Batch A); `EVD-000042`–`EVD-000046` (Batch B)
- Problems created: `PRB-0006`, `PRB-0007` (Batch A only; refined, not duplicated, in Batch B)
- Hypotheses created: 0

See `docs/milestones/D1-WU03-progress.md` for the batch-by-batch integration detail.

## Two problem clusters retained

No new `PRB-*` record was created in Batch B. Both clusters remain `OPEN`, `digital_tractability: not_assessed`, `existing_solutions: not_assessed`, `validation_status: unvalidated`:

- `PRB-0006` — Adequate and affordable housing is difficult to access for some population groups. Survives the current-state challenge: active, funded 2026 intervention (EUR67.1M/459 homes, concrete January 2026 deliveries) is acknowledged but does not resolve unmet need.
- `PRB-0007` — Informal caregivers face fragmented information and support navigation needs. Strengthened by the current-state challenge: institutions explicitly plan to systematise responses and publish a caregiver manual in 2026-2027, and 262 people held official caregiver status as of January 2026.

## Important current-state refinements

- Student accommodation capacity is improving (525 nominal beds, +105 PRR-funded, toward ~630) but remains constrained by temporary 2025/2026 renovation closures and explicit UÉ redirection to private accommodation; kept as a housing subproblem inside `PRB-0006`, not a separate canonical problem.
- Mental-health capacity concerns from the 2024 PDS are weakened by current evidence of active ULSAC psychiatry/community-care/community-mental-health responses; kept as evidence/validation-only (`EVD-000046`), not promoted to a canonical problem, pending utilisation/waiting-time/service-capacity evidence.
- The informal-caregiver plan progressed from a 2025 diagnostic study (`SRC-0030` original) to active 2026-2027 implementation (manual, systematised responses, simplified procedures, digital publication) — direct institutional self-recognition of the navigation friction identified in Batch A.
- Existing caregiver-oriented services already operate (ULSAC UCC, Cantinho do Cuidador, VIVAMENTE), so the residual `PRB-0007` gap is understood to be navigation/coordination/awareness, not absence of service.

## Unresolved questions handed to D2/D5 or future targeted owner clarification

1. What do caregivers currently do step-by-step when seeking recognition, respite, financial support, training or health/social support?
2. Which information is duplicated or inconsistent between Município, ULSAC, Segurança Social and IPSS?
3. Is the planned caregiver manual already available or still under development?
4. Are housing eligibility/application processes themselves a documented friction, or is supply overwhelmingly dominant?
5. Can student-housing unmet demand be quantified from UÉ application/placement data?

These are recorded as open in the affected `SRC-*`/`EVD-*`/`PRB-*` records and in `docs/milestones/D1-WU03-progress.md`, rather than resolved by inference, per the research handoff protocol.

## Institutional saturation decision

Batch B revealed no new top-level institutional problem class for this domain slice; it refined the two existing clusters, improved current-state confidence, and explicitly and conservatively declined to promote two candidate problems (student accommodation, mental-health capacity) that the source material could have been stretched to support. Per `docs/discovery/d1-parallel-research-operating-model.md` and `docs/discovery/research-methodology.md` §7, **WU-D1-03 institutional discovery is sufficient to progress.** This does not mean the housing or caregiver-navigation problems are fully validated or ready for software delivery — that remains D2/D5 and later digital-tractability work; `validation_status` remains `unvalidated` on both `PRB-0006` and `PRB-0007`.

## AIQT closure result

- `WU003` (WU-D1-03) was selected via `aiqt next` and transitioned `ready` → `in_progress` on 2026-08-10 (recorded in `EVT-024`), and remained `in_progress` through Batch A pending Batch B, per `docs/milestones/D1-WU03-progress.md`.
- With Batch B approved by the project owner and the institutional-saturation criteria met (no new top-level problem class; unresolved gaps explicitly recorded; source/date provenance complete), `WU003` is transitioned directly `in_progress` → `done`, following the same evidence-gate/checkpoint mechanics used for `WU002`'s closure (`docs/milestones/D1-WU02-closure.md`): a checkpoint is captured with `validationResult`/`acceptanceCriteriaResult` `passed` and `targetStatus: done` reflecting that this is already project-owner-approved integration work, so no `needs_review` human-approval gate is required before the `done` transition (unlike `WU002`, which required a `needs_review` → `done` amendment because its checkpoint was originally captured with a pending-approval batch).
- `research/sources/`, `research/evidence/`, `research/problems/` all validate; `research/hypotheses/` contains no `HYP-*` files.
- `M001` (D1) remains `in_progress`. `WU004` (WU-D1-04, `in_progress` from its own Batch A integration) and `WU005`/`WU006` (`ready`) and `WU007` (`planned`) are unchanged by this closure. `WU-D1-04`/`WU-D1-05` were not started or advanced as part of this closure.

## Validation result

- `node tools/validate-research.js` — 83 records, exits 0 (OK).
- Cross-references (`EVD.source.source_id` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- No duplicate shared sources were created: `SRC-0002`, `SRC-0030`, `SRC-0031` were reused/enriched rather than duplicated; `SRC-0035`–`SRC-0038` cover URLs/publishers not previously canonical.
- `git status` reviewed before commit; only the intended research/documentation/AIQT-state files changed.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created in Batch B: **NO**
- New `HYP-*` created: **NO**
- D2 started: **NO**
- WU-D1-04/WU-D1-05 status changed: **NO**

## Next WU

`WU-D1-04` (Economy, Employment, Talent & Education) is already `in_progress` from its own Batch A integration (commit `c8a0bcc`) and is out of scope for this closure. No further WU was started as part of closing `WU-D1-03`.
