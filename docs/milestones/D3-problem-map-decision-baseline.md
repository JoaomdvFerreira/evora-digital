# D3 — Problem Map v1 & Decision Baseline

**Status:** CLOSED
**Baseline:** v0.1
**Prepared:** 2026-08-11
**Closed:** 2026-08-11 (`docs/milestones/D3-WU05-closure.md`)

## Objective

Transform the D1/D2 evidence corpus into a proportionate, auditable decision baseline for every canonical active `PRB-*`, without prematurely selecting solutions or a civic product.

D3 is a synthesis/assessment milestone, not another research-discovery batch. It applies Progressive Assurance (`docs/discovery/d3-execution-protocol.md` §3): a lightweight assessment for every problem, heavier methods only where a named decision gate requires them.

## Entry gate

D3 may start when:

- [x] D2 — Public Signal Discovery is CLOSED (`docs/milestones/D2-WU06-closure.md`; `M002` = `done`).
- [x] D2 canonical baseline exists — 81 `SRC-*`, 103 `EVD-*`, 9 `PRB-*`, 0 `HYP-*`; 193 records validated.
- [x] all nine `PRB-*` remain `validation_status: unvalidated`.
- [x] the road-surface-maintenance `NEW-CANDIDATE` (`EVD-000082`, `EVD-000083`, `EVD-000084`) is preserved, unlinked from `PRB-0005`, not promoted.
- [x] the D3 Analytical Foundation design has been reviewed and approved by the project owner (2026-08-11) and reconciled against the closed D2 corpus.
- [x] `docs/discovery/d3-execution-protocol.md` canonicalizes the approved design at documentation level.
- [x] `docs/discovery/research-methodology.md` reconciles the D3 formative-research / D5 formal-validation distinction.
- [x] AIQT is valid; `M001`/`M002` report `done`; `projectStatus` is `review`.
- [x] no civic product has been selected; no `HYP-*` exists.

**Entry decision:** READY. `WU-D3-01` is not selected/started by this planning pass.

## Operating model for D3

Unlike D1/D2, D3 does not perform external research by default. Its default mode is synthesis and assessment of the existing 193-record corpus. External/formative research is permitted only where a specific D3 decision gate names a critical unknown that documentary evidence cannot resolve (`docs/discovery/d3-execution-protocol.md` §7).

Work-unit sequencing is strictly ordered, not parallel: `WU-D3-01` → `WU-D3-02` (pilot + framework gate) → `WU-D3-03` (structural decisions) → `WU-D3-04` (remaining assessments/triage) → `WU-D3-05` (selective deepening + closure). `WU-D3-03` may not start before the `WU-D3-02` framework gate resolves (`ADOPT` or approved `MODIFY`); `WU-D3-04` may not start before `WU-D3-03` completes.

## Work Units

### WU-D3-01 — Analytical Foundation

**Goal:** Implement the documentation-canonicalized design (`docs/discovery/d3-execution-protocol.md`) as repository contracts and tooling.

Deliver: roadmap/methodology cross-reference check; the Problem Assessment (`ASM-*`) schema; the optional `EVD.analysis` metadata contract; `tools/validate-research.js` support for both; a minimal deterministic analyzer (counts/lineage counts/metadata completeness/state distributions only — no semantic inference, no automatic triage, no numeric scores). No `PRB-*` interpretation and no `ASM-*` content in this WU.

Suggested effort: Sonnet Medium.

---

### WU-D3-02 — Three-Problem Pilot & Framework Gate

**Goal:** Stress-test the assessment framework on three structurally different problems before any wider rollout.

Pilot: `PRB-0002`, `PRB-0007`, `PRB-0009` only. Deliver: lazy `EVD.analysis` metadata backfill where it materially supports the pilot assessments; three `ASM-*` records; deterministic analyzer verification; an explicit, recorded `ADOPT` / `MODIFY` / `REJECT` framework-gate decision. Do not touch any other `PRB-*` before this gate resolves.

Suggested effort: Sonnet Medium.

---

### WU-D3-03 — Problem Taxonomy & Blind-Spot Decisions

**Goal:** Resolve the structural questions carried from D2, once, after framework approval.

Only starts after `WU-D3-02`'s gate is `ADOPT` or an approved `MODIFY`. Deliver: the road-maintenance `NEW-CANDIDATE` disposition (promote / merge / archive); the `PRB-0002` split-vs-keep decision; any other structural change only where evidence demands it (materially different journey, failure mechanism, consequence, or operator/solution space — not for taxonomy tidiness). Canonical IDs/links are adjusted carefully if structure changes.

Suggested effort: Sonnet Medium.

---

### WU-D3-04 — Remaining Problem Assessments & Triage

**Goal:** Extend `ASM-Lite` to every remaining canonical active `PRB-*`.

Deliver: one `ASM-Lite` per remaining active problem; lazy metadata only where decision-relevant; named critical unknowns; a `STOP` / `WATCH` / `DEEPEN` / `PROCEED` triage per problem; targeted research methods identified only when a gate justifies them (not performed in this WU unless trivially resolvable from existing corpus evidence).

Suggested effort: Sonnet Low initially; escalate to Medium only for ambiguous structural/causal cases.

---

### WU-D3-05 — Selective Deepening & D3 Closure

**Goal:** Perform only decision-changing targeted research/integration justified by `WU-D3-04`'s gates, then close D3.

Deliver: targeted research/integration strictly limited to what `WU-D3-04` justified; an improved initial current-journey/consequence baseline where feasible; unresolved D5 questions preserved where primary/stakeholder evidence is still required; the final Problem Map v1 and D3 decision baseline; explicit D4/D5 handoff; D3 closure record.

Suggested effort: Sonnet Medium.

## D3 exit gate

D3 may close when:

- [x] `WU-D3-01` analytical contracts/tooling (`ASM-*` schema, `EVD.analysis` extension, validator support, deterministic analyzer) exist and validate. (`docs/milestones/D3-WU05-closure.md` §10, §9)
- [x] `WU-D3-02`'s three-problem pilot completed with an explicit `ADOPT`/`MODIFY`/`REJECT` framework-gate decision. (`docs/milestones/D3-WU02-pilot-review.md`; resolved `docs/milestones/D3-WU03-structure-review.md` §1)
- [x] every canonical active `PRB-*` has an `ASM-Lite`. (`docs/milestones/D3-WU05-closure.md` §9 — 10/10)
- [x] the road-maintenance `NEW-CANDIDATE` has an owner disposition (promoted / merged / archived), recorded per `docs/discovery/d3-execution-protocol.md` §10. (promoted to `PRB-0010`, `docs/milestones/D3-WU03-structure-review.md` §3)
- [x] structural split/merge decisions (including `PRB-0002`) are recorded, with canonical IDs/links adjusted if structure changed. (`docs/milestones/D3-WU03-structure-review.md` §2)
- [x] every active `PRB-*` has a `STOP`/`WATCH`/`DEEPEN`/`PROCEED` triage. (`docs/milestones/D3-WU05-closure.md` §4 — 8 DEEPEN, 2 WATCH, 0 STOP, 0 PROCEED)
- [x] every `DEEPEN` result names a decision-critical unknown and a next evidence method. (`docs/milestones/D3-WU05-closure.md` §10)
- [x] initial current-journey state is explicit (`SUFFICIENT`/`PARTIAL`/`INSUFFICIENT`/`UNKNOWN`) for every active problem. (`docs/milestones/D3-WU05-closure.md` §10 — all ten `journey_understanding` values explicit, none `NOT_ASSESSED`)
- [x] no unknown was silently converted into an assumed fact. (verified by construction across `docs/milestones/D3-WU05-closure.md` §1–§3; every field change carries an explicit justification, `UNKNOWN`/`INSUFFICIENT` preserved where genuinely unresolved)
- [x] no solution `HYP-*` was required merely to close D3. (`ls research/hypotheses` → 0)
- [x] `node tools/validate-research.js` and the deterministic analyzer both pass. (`docs/milestones/D3-WU05-closure.md` §9 — `Validated 206 record(s): OK.`; `test-analytical-foundation.js` 22/22)
- [x] AIQT state and repository state are valid; working tree is clean before closure commit. Verified by the reviewer post-integration: `aiqt status --json` reports `projectStatus: in_progress`, `currentWorkUnitId: WU018`, no blocking issues, `nextRecommendedCommand: aiqt checkpoint`; `git status --short` immediately before the closure commit shows only this WU's own deliverable files changed (no stray/unrelated modifications).
- [x] an explicit D4/D5 handoff and a D3 closure record exist. (`docs/milestones/D3-WU05-closure.md` §5, §6, and the document itself)

D3 may legitimately close with individual problems routed to `STOP`, `WATCH`, or D5 — not every problem needs to reach `PROCEED`. The count of new records produced is not a success metric.

**Exit-gate result (2026-08-11, WU-D3-05/WU018):** 14 of 14 items satisfied and verified. **D3 is CLOSED.** See `docs/milestones/D3-WU05-closure.md` §10 for the full per-item evaluation.

## Explicitly out of scope

During D3, do not: select a civic product; authorize the Évora Open API; create a solution `HYP-*` merely to close a WU; add semantic inference, automatic causality, prevalence inference, automatic triage, or any numeric confidence/problem score to the analyzer; perform default/uniform formative research across all problems (it is gate-triggered only, per `docs/discovery/d3-execution-protocol.md` §7); relitigate D2's research conclusions; roll `ASM-Lite` out beyond the three pilot problems before the `WU-D3-02` framework gate resolves; or start `WU-D3-03`/`WU-D3-04`/`WU-D3-05` out of sequence.

## Expected next state

After D3, D4 — Existing Solutions & Gap Analysis can proceed against a problem map with recorded assessments, explicit structural decisions, and named triage per problem. No civic product is selected, and the Évora Open API remains an infrastructure hypothesis.
