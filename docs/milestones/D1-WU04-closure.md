# WU-D1-04 Closure — Economy, Employment, Talent & Education

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Objective

Integrate reviewed research handoffs covering Economy & Business, Employment & Talent, and Education into structured records (`.aiqt/state.json` WU004 objective), without performing new external research locally or inferring private-sector pain solely from public-sector strategy documents.

## Institutional coverage achieved

Two externally reviewed research handoffs were integrated in sequence, each faithfully transcribed into structured records per `docs/discovery/research-handoff-protocol.md`:

- **Batch A** (commit `c8a0bcc`) — first institutional pass: PDS 2024-2027 and PDS Action Plan 2025 economy/employment content, UÉ planning and admission results, NERE, and business/innovation-location infrastructure; established the first Batch-A `SRC-*`/`EVD-*` set and the single `PRB-*` problem cluster (`PRB-0008`, workforce skills / employer-needs alignment).
- **Batch B** — current-state challenge / existing-solution follow-up: current (2026) IEFP job-listing snapshot, UÉ Feira do Emprego 2026, UÉ employability initiatives, and NERE/IEFP training activity; confirmed no new top-level problem class, refined the existing `PRB-0008`, and explicitly ruled out promoting graduate/talent retention or business-support fragmentation to separate canonical problems.

## Final record counts

Full canonical set after Batch B, validated by `node tools/validate-research.js`:

```text
Validated 92 record(s): OK.
```

Records attributable to WU-D1-04 across both batches:

- Sources enriched: `SRC-0002`, `SRC-0028` (both batches)
- Sources added: `SRC-0010`, `SRC-0011` (canonicalized from seed registry), `SRC-0032`, `SRC-0033`, `SRC-0034` (Batch A); `SRC-0039`, `SRC-0040`, `SRC-0041`, `SRC-0042` (Batch B)
- Evidence added: `EVD-000037`–`EVD-000041` (Batch A); `EVD-000047`–`EVD-000051` (Batch B)
- Problems created: `PRB-0008` (Batch A only; refined, not duplicated, in Batch B)
- Hypotheses created: 0

See `docs/milestones/D1-WU04-progress.md` for the batch-by-batch integration detail and the Batch B provisional→canonical mapping.

## One problem cluster retained

No new `PRB-*` record was created in Batch B. `PRB-0008` remains `OPEN`, `digital_tractability: not_assessed`, `existing_solutions: not_assessed`, `validation_status: unvalidated`:

- `PRB-0008` — Workforce skills and employer needs are not fully aligned. Survives the current-state challenge: the 2025/2026 institutional workstream is active (competence mapping, training adaptation, education-employer articulation), but the specific mismatch remains under-characterised (no employer-side shortage/duration-to-fill/wage data), and existing employment-matching infrastructure (UÉ fairs, career initiatives, IEFP listings, NERE/IEFP training) means a generic job-board or portal would duplicate existing infrastructure absent a demonstrated user-journey failure.

## Important current-state refinements

- Skills alignment is confirmed as a current (2025/2026), not merely historic, institutional workstream (`EVD-000047`).
- Existing employment-matching infrastructure is substantial and active (`EVD-000048`); the "no employment-support infrastructure" framing is explicitly rejected.
- Public job listings (IEFP, 102 Évora listings at review time) cannot by themselves identify the actual skills shortage — no duration-to-fill, unsuccessful-recruitment, wage-constraint, or employer-reported-shortage data is present (`EVD-000049`).
- Graduate/talent retention remains a strategic concern but its current magnitude is unmeasured; kept evidence-only (`EVD-000050`), consistent with the Batch A caution already encoded in `PRB-0008`/`EVD-000038`/`EVD-000039`.
- Business-support fragmentation remains plausible but unproven — multiplicity of providers alone is not evidence of navigation friction; kept evidence-only as an open discovery question (`EVD-000051`).

## Unresolved questions handed to D2/D5 or future targeted owner clarification

1. Employer-side evidence: which occupations/skills are actually hard to recruit?
2. Duration and reasons for vacancies: qualification, pay, housing, transport, schedule, experience?
3. Graduate outcomes: where do UÉ graduates live/work 1–3 years after graduation?
4. Do SMEs experience real difficulty finding the correct support/incentive/training programme?
5. Is there a missing shared skills-demand dataset/feedback loop, or are existing institutional channels sufficient?

These are recorded as open in the affected `SRC-*`/`EVD-*`/`PRB-*` records and in `docs/milestones/D1-WU04-progress.md`, rather than resolved by inference, per the research handoff protocol. Employer-side, graduate-outcome, and lived-experience questions are legitimately carried forward to later discovery phases rather than blocking D1 institutional saturation.

## Institutional saturation decision

Batch B revealed no new top-level institutional problem class for this domain slice; it refined the one existing cluster, improved current-state confidence, and explicitly and conservatively declined to promote two candidate problems (graduate/talent retention, business-support fragmentation) that the source material could have been stretched to support. Per `docs/discovery/d1-parallel-research-operating-model.md` and `docs/discovery/research-methodology.md` §7, **WU-D1-04 institutional discovery is sufficient to progress.** This does not mean `PRB-0008` is fully validated or ready for software delivery — that remains D2/D5 and later digital-tractability work; `validation_status` remains `unvalidated`.

## AIQT closure result

- Batch A's canonical research records (`PRB-0008`, `SRC-0032`–`SRC-0034`, `EVD-000037`–`EVD-000041`) were integrated in commit `c8a0bcc` while `WU-D1-03` was `in_progress`; `WU004` itself could not be formally selected in AIQT at that time because of the `NEXT-WORK-UNIT-IN-PROGRESS` single-active-work-unit constraint, and that constraint was not bypassed. `WU004` therefore remained `ready` in AIQT from `2026-08-10T19:18:45.721Z` through this closure's selection.
- With `WU-D1-03` now `done` (closed in commit `387efc8`), `WU004` was selected via `aiqt next` and transitioned `ready` → `in_progress` in this session (`EVT-029`). No historical event was backdated or fabricated to represent Batch A's integration as having occurred through AIQT selection — the runlog is honest about the sequencing gap, which is treated as an AIQT process/dogfood finding, not a data-integrity issue.
- With Batch B approved by the project owner and the institutional-saturation criteria met (no new top-level problem class; unresolved gaps explicitly recorded; source/date provenance complete), `WU004` is transitioned directly `in_progress` → `done` in the same session (`EVT-031`), following the same evidence-gate/checkpoint mechanics used for `WU003`'s closure (`docs/milestones/D1-WU03-closure.md`): checkpoint `C004` is captured with `validationResult`/`acceptanceCriteriaResult` `passed` and `targetStatus: done`.
- `research/sources/`, `research/evidence/`, `research/problems/` all validate; `research/hypotheses/` contains no `HYP-*` files.
- `currentWorkUnitId` is set back to `null` after closure. `M001` (D1) remains `in_progress`. `WU005`/`WU006` remain `ready`; `WU007` remains `planned`. `WU-D1-05` was not started or advanced as part of this closure.

## Validation result

- `node tools/validate-research.js` — 92 records, exits 0 (OK).
- Cross-references (`EVD.source.source_id` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- No duplicate shared sources were created: `SRC-0002`, `SRC-0028` were reused/enriched rather than duplicated; `SRC-0039`–`SRC-0042` cover URLs/publishers not previously canonical.
- `git status` reviewed before commit; only the intended research/documentation/AIQT-state files changed.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created in Batch B: **NO**
- New `HYP-*` created: **NO**
- D2 started: **NO**
- WU-D1-05 status changed: **NO**

## Next WU

`WU-D1-05` was not started or advanced as part of this closure or its selection process.
