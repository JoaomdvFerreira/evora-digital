# WU-D1-04 Closure — Economy, Employment, Talent & Education

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Objective

Integrate reviewed research handoffs covering Economy & Business, Employment & Talent, and Education into structured records, without inferring private-sector pain solely from public-sector strategy documents, and without performing new external research locally or authorizing any solution.

## AIQT activation history (reconciliation)

Batch A's canonical research records (`PRB-0008`, `SRC-0032`–`SRC-0034`, `EVD-000037`–`EVD-000041`) were integrated into the repository on 2026-08-10 (commit `c8a0bcc`) while `WU-D1-03` was `in_progress`. AIQT's `NEXT-WORK-UNIT-IN-PROGRESS` constraint blocked selecting `WU-D1-04` at that time, and this was not bypassed: `WU004` remained `ready` in `.aiqt/state.json`, and canonical repository integration proceeded independently of AIQT WU selection, per the parallel-research operating model.

`WU-D1-03` closed to `done` earlier in this session (commit `387efc8`). This removed the constraint. `WU004` was then formally selected in AIQT for the first time this session (`EVT-028`/`EVT-029`, `ready` → `in_progress`) — no historical AIQT event was fabricated for the Batch A integration itself; `EVT-029`'s `reason` field explicitly narrates the sequencing gap. This is recorded as an AIQT dogfood/design finding about the tool's single-active-work-unit selection model, not a data-integrity issue: the Batch A records were always correctly attributed to WU-D1-04 in their own `notes` fields regardless of AIQT's selection state.

## Institutional coverage achieved

Two externally reviewed research handoffs were integrated in sequence, each faithfully transcribed into structured records per `docs/discovery/research-handoff-protocol.md`:

- **Batch A** — first institutional pass: strategic/social planning documents (PDS 2024-2027, PDS Action Plan 2025), UÉ's own planning, NERE, UÉ admission results, and the Municipality's economic-development/business-park pages; established the first `SRC-*`/`EVD-*` set and the one `PRB-*` problem cluster (`PRB-0008`, workforce skills/employer-needs alignment).
- **Batch B** — current-state challenge / existing-solution follow-up: current (2025/2026) IEFP job-listing evidence, the UÉ Feira do Emprego 2026, UÉ employability initiatives, NERE/IEFP training activity, and current municipal skills-intervention reporting; confirmed no new top-level problem class, refined the existing `PRB-0008`, and explicitly declined to promote graduate/talent retention or business-support fragmentation to separate canonical problems.

## Final record counts

Full canonical set after Batch B, validated by `node tools/validate-research.js`:

```text
Validated 92 record(s): OK.
```

Records attributable to WU-D1-04 across both batches:

- Sources enriched: `SRC-0002`, `SRC-0028` (Batch A and Batch B)
- Sources added/canonicalized: `SRC-0010`, `SRC-0011`, `SRC-0032`, `SRC-0033`, `SRC-0034` (Batch A); `SRC-0039`, `SRC-0040`, `SRC-0041`, `SRC-0042` (Batch B)
- Evidence added: `EVD-000037`–`EVD-000041` (Batch A); `EVD-000047`–`EVD-000051` (Batch B)
- Problems created: `PRB-0008` (Batch A only; refined, not duplicated, in Batch B)
- Hypotheses created: 0

See `docs/milestones/D1-WU04-progress.md` for the batch-by-batch integration detail.

## One problem cluster retained

No new `PRB-*` record was created in Batch B. `PRB-0008` remains `OPEN`, `digital_tractability: not_assessed`, `existing_solutions: not_assessed`, `validation_status: unvalidated`:

- `PRB-0008` — Workforce skills and employer needs are not fully aligned. Survives the current-state challenge: the 2025/2026 action plan still requires competence mapping and training adapted to labour-market needs, and municipal reporting explicitly refers to supporting companies with qualified-workforce needs. Existing employment-matching infrastructure (UÉ employment fairs, career initiatives, IEFP listings, NERE/IEFP training) is substantial, ruling out a naive "no support exists" framing, but the specific skills mismatch remains under-characterised — public job listings alone cannot show duration-to-fill, unsuccessful recruitment, wage constraints, or employer-reported shortage.

## Important current-state refinements

- The skills/employer-needs alignment problem is confirmed to be a current 2025/2026 institutional workstream, not merely historic 2024 strategy (`EVD-000047`).
- Existing employment-matching infrastructure is substantial and active: the third UÉ Feira do Emprego is scheduled for October 2026, UÉ runs employability initiatives (Magma Talks and related activity), IEFP lists 102 current listings for the Évora service, and NERE collaborates with IEFP on training (InovaSocial, February 2026). A generic job board or employment portal would duplicate this infrastructure unless a specific user-journey failure is demonstrated (`EVD-000048`).
- Public job listings cannot by themselves identify the actual skills shortage: the IEFP snapshot has no duration-to-fill, unsuccessful-recruitment, wage-constraint, or employer-reported-shortage data (`EVD-000049`).
- Graduate/talent retention remains a strategic concern, but no sufficiently direct public 2025/2026 metric was found showing what share of UÉ graduates remain employed/living in Évora; canonical problem creation is deferred, not rejected (`EVD-000050`).
- Business-support fragmentation remains plausible but unproven: multiple providers (Município, NERE, PACT, IEFP, UÉ) exist, but multiplicity of providers alone is not evidence that businesses experience navigation friction; it remains a discovery question only (`EVD-000051`).

## Unresolved questions handed to D2/D5 or future targeted owner clarification

1. Employer-side evidence: which occupations/skills are actually hard to recruit?
2. Duration and reasons for vacancies: qualification, pay, housing, transport, schedule, experience?
3. Graduate outcomes: where do UÉ graduates live/work 1–3 years after graduation?
4. Do SMEs experience real difficulty finding the correct support/incentive/training programme?
5. Is there a missing shared skills-demand dataset/feedback loop, or are existing institutional channels sufficient?

These are recorded as open in the affected `SRC-*`/`EVD-*`/`PRB-*` records and in `docs/milestones/D1-WU04-progress.md`, rather than resolved by inference, per the research handoff protocol.

## Institutional saturation decision

Batch B revealed no new top-level institutional problem class for this domain slice; it refined the existing cluster, improved current-state confidence, and explicitly and conservatively declined to promote two candidate problems (graduate/talent retention, business-support fragmentation) that the source material could have been stretched to support. Employer-side, graduate-outcome and lived-experience questions are legitimately carried forward to later discovery phases rather than blocking D1 institutional saturation. Per `docs/discovery/d1-parallel-research-operating-model.md` and `docs/discovery/research-methodology.md` §7, **WU-D1-04 institutional discovery is sufficient to progress.** This does not mean the workforce-skills problem is fully validated or ready for software delivery — that remains D2/D5 and later digital-tractability work; `validation_status` remains `unvalidated` on `PRB-0008`.

## AIQT closure result

- `WU004` (WU-D1-04) was selected via `aiqt next` and transitioned `ready` → `in_progress` on 2026-08-11 (recorded in `EVT-029`), immediately following Batch A's pre-existing integration and Batch B's approval.
- With Batch B approved by the project owner and the institutional-saturation criteria met (no new top-level problem class; unresolved gaps explicitly recorded; source/date provenance complete), `WU004` is transitioned directly `in_progress` → `done` in the same checkpoint (`C004`), following the same evidence-gate/checkpoint mechanics used for `WU003`'s closure (`docs/milestones/D1-WU03-closure.md`): a checkpoint is captured with `validationResult`/`acceptanceCriteriaResult` `passed` and `targetStatus: done`, since this is already project-owner-approved integration work, so no `needs_review` human-approval gate is required before the `done` transition.
- `research/sources/`, `research/evidence/`, `research/problems/` all validate; `research/hypotheses/` contains no `HYP-*` files.
- `M001` (D1) remains `in_progress`. `WU005`/`WU006` (`ready`) and `WU007` (`planned`) are unchanged by this closure. `currentWorkUnitId` returns to `null` after this closure. `WU-D1-05` was not started or advanced as part of this closure.

## Validation result

- `node tools/validate-research.js` — 92 records, exits 0 (OK).
- Cross-references (`EVD.source.source_id` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- No duplicate shared sources were created: `SRC-0002`, `SRC-0028` were reused/enriched rather than duplicated; `SRC-0039`–`SRC-0042` cover publishers/URLs not previously canonical.
- `git status` reviewed before commit; only the intended research/documentation/AIQT-state files changed.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created in Batch B: **NO**
- New `HYP-*` created: **NO**
- D2 started: **NO**
- WU-D1-05 status changed: **NO**

## Next WU

`WU-D1-05` (Culture, Tourism, Sports & Public Life) remains `ready` in AIQT and was not selected or started as part of closing `WU-D1-04`.
