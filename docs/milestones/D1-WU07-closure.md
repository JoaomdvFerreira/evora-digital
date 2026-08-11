# WU-D1-07 Closure — D1 Consolidation & Closure

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping — **DONE**
**Date:** 2026-08-11

## Objective

Consolidate D1 records, verify the D1 exit gate, and produce the D1 closure record without creating a solution backlog, per `.aiqt/state.json` WU007's objective and `docs/milestones/D1-institutional-data-source-mapping.md`'s WU-D1-07 definition. This WU integrates no new external research handoff; it reconciles and consolidates the output of `WU-D1-01`–`WU-D1-06`.

## Important disclaimer

**D1 completion does not imply that any of the 9 canonical problems are validated with affected populations.** Every `PRB-*` record retains `validation_status: unvalidated`. D1 establishes institutional evidence and saturation — i.e., that further institutional-document review is no longer producing new top-level problem classes for a given domain slice — which is explicitly distinct from problem validation (whether a problem is real, prioritized, and digitally tractable for the people it affects). Problem validation is D2 (Public Signal Discovery) and D5 (Stakeholder Validation) work, and later digital-tractability assessment. No `PRB-*` should be treated as ready for solution design on the strength of D1 alone.

## Final D1 problem map (9 problems, 4 of 6 researched domains)

See `docs/milestones/D1-WU07-progress.md` for the full domain-by-domain listing with negative findings. Summary:

| Domain (WU) | Problems | Outcome |
|---|---|---|
| Mobility/Territory/Urban/Accessibility (`WU-D1-02`) | `PRB-0001`–`PRB-0005` | 5 problems retained |
| Housing/Social/Health (`WU-D1-03`) | `PRB-0006`, `PRB-0007` | 2 problems retained |
| Economy/Employment/Education (`WU-D1-04`) | `PRB-0008` | 1 problem retained |
| Culture/Tourism/Sports (`WU-D1-05`) | — | 0 problems — institutional saturation via "resolved by current-state check," a valid D1 outcome |
| Environment/Climate/Public & Digital Services (`WU-D1-06`) | `PRB-0009` | 1 problem retained; 4 other candidates evaluated and not canonicalized |

All 9 problems: `status: OPEN`, `validation_status: unvalidated`. Only `PRB-0009` has an assessed `digital_tractability` (`low`); the rest are `not_assessed`.

## Deduplication and evidence rationalisation result

- All 9 `PRB-*` and all 78 `EVD-*` records were reviewed (full read for `PRB-*`; targeted structural/keyword search across `EVD-*`, per the task's efficiency guidance rather than a full manual re-read of every file). No exact duplicate, no near-duplicate problem, and no exact-duplicate evidence `summary` were found.
- No evidence was deleted or rewritten. The repository's existing convention — narrative supersession/freshness notes on `PRB-*.possible_root_causes` and in progress docs, since the schema has no `superseded_by`/`status` field — was followed rather than altered.
- Cross-domain source reuse (`SRC-0002` cited by 11 evidence records across 3 domains) is represented without duplicating the source record, consistent with `docs/discovery/d1-parallel-research-operating-model.md`'s shared-source-reuse guidance.
- `docs/data/source-registry.md` contains 8 pre-D1 seed rows (`SRC-0001`, `SRC-0004`, `SRC-0005`, `SRC-0008`, `SRC-0009`, `SRC-0012`–`SRC-0015`) with no corresponding canonical YAML file. This predates WU-D1-02 and is not a defect introduced or newly discovered by this consolidation; it was reviewed and intentionally left unchanged, since numbering/registry gaps from earlier WUs are expected and out of scope to "fix" per this WU's instructions.
- Full detail (including the exact grep methodology used) is recorded in `docs/milestones/D1-WU07-progress.md`.

## Negative and deferred findings preserved

Preserved in full, by domain, in `docs/milestones/D1-WU07-progress.md`. Summary: do not replace municipal/CIMAC GIS infrastructure; do not assume new parking-payment tech is needed; do not infer reuse rights from public visibility; do not treat housing/affordability as primarily a software problem; do not create a separate student-housing or mental-health-capacity canonical problem on current evidence; do not duplicate existing caregiver services; do not build a generic job board; do not promote graduate-retention or SME-navigation-friction without stronger evidence; do not frame Évora as lacking cultural programming, tourist information, an associativism portal, event-accessibility metadata, or a sports digital gap; do not build another generic occurrence-reporting app; do not frame municipal services as generically non-digital; do not duplicate PMAAC/WebSIG/alert infrastructure; do not turn `PRB-0009`'s operational root cause into a software problem without causal evidence.

## Cross-domain relationships (status preserved, none upgraded)

Housing → Talent retention (hypothesised only); Education → Employment → Employer skill needs (supported system relationship); Caregiver support → Health → Social services (supported system relationship, not collapsed into one problem); Climate → Mobility (institutionally supported); Culture → Talent/quality of life (strategic hypothesis only); Climate → Health/Social (institutionally plausible, population-specific evidence needed); Urban hygiene → Tourism/Culture/Public life (not assumed without evidence). Full detail in `docs/milestones/D1-WU07-progress.md`.

## Explicitly rejected consolidation move

The recurring "existing-service navigation/coordination" pattern (visible across caregiver support, employment/training discovery, cultural/event ecosystems, and municipal digital-service channels) is preserved **only** as a cross-domain narrative pattern (`docs/milestones/D1-WU07-progress.md`, cross-domain pattern 1). It is explicitly **not** collapsed into a single generic cross-domain "fragmentation" `PRB-*` — each journey requires independent user-friction evidence, none of which currently exists at the required strength. No new `PRB-*` or `HYP-*` record was created by this WU.

## D2/D5 handoff and Open Data Foundation handoff

Both consolidated in full in `docs/milestones/D1-WU07-progress.md`. Summary counts: 13 questions transferred to D2 (Public Signal Discovery), 7 to D5 (Stakeholder Validation), plus a cross-cutting technical/open-data verification checklist (API availability, machine readability, licensing/reuse, cadence/freshness, stable identifiers, geographic coverage, interoperability). The Open Data Foundation candidate list spans 4 domain groups (mobility/territory; housing/social/education; culture/public life; environment/public services), with the environment/public-services group's 6 items reconciled against the actual `docs/milestones/D1-WU06-progress.md` content (superseding the pre-consolidation draft's generic placeholder).

## Graphify decision

**ADOPT WITH CONSTRAINTS.** Recorded as durable project policy in `docs/discovery/research-methodology.md` §10. No Graphify tooling, configuration, or index was implemented in the repository — this WU records the decision and policy only, per its consolidation-only scope.

## D1 exit gate evaluation

All 15 D1 exit-gate criteria in `docs/milestones/D1-institutional-data-source-mapping.md` are now checked and individually justified there (updated by this WU). Summary: structured-record workflow established; all 6 planned domain WUs completed or explicitly descoped with rationale; provenance retained; licensing/freshness assessed where possible (`UNKNOWN` preserved where genuinely unknown); problem clusters deduplicated; existing interventions recorded; stakeholder inventory exists; dataset/data-service catalogue exists; evidence gaps/contradictions explicit; D2 evidence contracts unchanged (schema stable since WU-D1-01); D3 has 9 structured `PRB-*` records as input; no product selected; no Open API implementation authorized; AIQT/repository state valid; working tree clean; this closure record exists.

**D1 exit decision: D1 is CLOSED.**

## AIQT closure result

- `WU007` (WU-D1-07) was formally selected in AIQT (`ready`/`planned` → `in_progress`, `currentWorkUnitId` set to `WU007`) at the start of this session's work, per `EVT-043`/`EVT-044` in `.aiqt/runlog.jsonl`, continuing the sequence from `EVT-042` (WU-D1-06's closure advisory).
- This consolidation work required no external research handoff and no `needs_review` human-approval gate (unlike `WU002`, whose checkpoint originally required an amendment): the exit-gate evaluation is objectively checkable against existing closed WU-D1-02..06 records and the D1 exit-gate checklist itself, so `WU007` is transitioned directly `in_progress` → `done` in checkpoint `C007`, with `validationResult`/`acceptanceCriteriaResult` both `passed`.
- **Milestone `M001` (D1 — Institutional & Data Source Mapping) transitions `ready` → `done`.** `M001.workUnitIds` lists `WU001`–`WU007`; all seven are now `done`, and `WU007` is the milestone's last work unit per its own `dependencies` graph (`DEP-006`..`DEP-010` all point into `WU007`, and nothing depends on `WU007`). This is the first milestone-level status transition recorded in this project; `.aiqt/state.json`'s milestone schema exposes a `status` field on `M001` identical in shape to a work unit's, and no separate milestone-closure mechanism exists elsewhere in the AIQT state or tooling — closing the milestone is therefore represented the same way a work unit's completion is represented (a `status` field transition plus a runlog event), not a fabricated new mechanism.
- `currentWorkUnitId` returns to `null` after this closure. `currentMilestoneId` remains `M001` (AIQT has no mechanism observed in this state file for advancing to a next milestone automatically, and none is created by this WU — D2 is a separate future milestone, out of scope here).
- `research/sources/`, `research/evidence/`, `research/problems/` all validate; `research/hypotheses/` contains no `HYP-*` files (confirmed empty).

## Validation result

```text
node tools/validate-research.js
Validated 143 record(s): OK.
```

- `SRC-*`: 56 files (highest `SRC-0065`; expected pre-D1 numbering gaps not "fixed," per instruction).
- `EVD-*`: 78 files.
- `PRB-*`: 9 files (`PRB-0001`–`PRB-0009`).
- `HYP-*`: 0 files.
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- `git status` reviewed before commit; only the intended documentation/AIQT-state files changed — no `research/` YAML content was created, deleted, or rewritten by this WU.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created: **NO**
- New `HYP-*` created: **NO**
- Existing-service-fragmentation pattern collapsed into a generic cross-domain PRB: **NO**
- D1 exit gate evaluated: **YES** — see `docs/milestones/D1-institutional-data-source-mapping.md`
- D1 closed: **YES**
- `M001` milestone closed: **YES**
- D2 started: **NO**
- Graphify tooling/config implemented: **NO** — decision/policy recorded only, in `docs/discovery/research-methodology.md` §10

## Next

D1 is closed. D2 Public Signal Discovery is the next milestone but is explicitly **not** started by this WU or this session.
