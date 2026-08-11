# WU-D1-05 Closure — Culture, Tourism, Sports & Public Life

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Objective

Integrate reviewed research handoffs covering Culture & Events, Tourism, and Sports & Leisure into structured records, without assuming an events API is needed and without performing new external research locally or authorizing any solution.

## Combined-batch execution

Unlike `WU-D1-03` and `WU-D1-04`, this WU had no pre-existing canonical integration. Both the approved **Batch A** (institutional first-pass) and **Batch B** (narrow current-state challenge, approved 2026-08-10) handoffs were integrated together in one execution, per the parallel-research operating model. Provisional→canonical ID mappings for both batches are preserved separately in `docs/milestones/D1-WU05-progress.md`.

## Institutional coverage achieved

- **Batch A** — first institutional pass: PECE (Municipal Cultural Strategy 2022-2030), Évora 2027 programming/participation, the "A Nossa Vez" community-participation call, municipal visitor/tourism information, and municipal sports infrastructure/associativism pages. Established the `SRC-*`/`EVD-*` set; no `PRB-*` created — three candidate problems flagged as provisional only, explicitly not yet approved as canonical.
- **Batch B** — current-state challenge / existing-solution follow-up: the current Municipal Agenda (structured event-submission workflow with accessibility fields), Guia da Semana, the operational Plataforma Évora Associativismo, and enrichment of the PECE and sports sources with current-state findings. Tested and resolved each of Batch A's follow-up questions about implementation status.

## Final record counts

Full canonical set after this combined integration, validated by `node tools/validate-research.js`:

```text
Validated 111 record(s): OK.
```

Records attributable to WU-D1-05:

- Sources added: `SRC-0043`–`SRC-0050` (8) — `SRC-0043` merges Batch A's PECE source with Batch B's same-document accessibility-actions finding; `SRC-0047` merges Batch A's sports source with Batch B's same-URL sports-channel finding
- Sources enriched: 0 (checked `SRC-0002` for Culture/Tourism/Sports overlap; found it does not cover this domain — PECE is a genuinely distinct document — so no enrichment was needed)
- Evidence added: `EVD-000052`–`EVD-000062` (11)
- Problems created: **0**
- Hypotheses created: 0

See `docs/milestones/D1-WU05-progress.md` for the batch-by-batch integration detail.

## Zero problem clusters: rationale

No new `PRB-*` record was created in this WU, per the approved conservative decisions tested by Batch B's current-state challenge:

- **Cultural event discovery / information fragmentation** — DEFERRED. Multiple event surfaces exist (Municipal Agenda, Guia da Semana, Évora 2027), creating data-federation potential, but no evidence of user-experienced discovery pain (`EVD-000061`).
- **Cultural/associative administrative friction** — DOWNGRADED to a validation question. The PECE's "Portal do Associativismo" proposal is already materially implemented as the operational Plataforma Évora Associativismo (`EVD-000060`); current-workflow friction requires direct actor evidence not yet collected.
- **Cultural accessibility** — retained as a policy/evidence area, not promoted to a standalone digital problem. Structured accessibility metadata (mobility-reduced and communication-accessibility fields) already exists in the municipal event-intake form (`EVD-000059`).
- **Sports** — no canonical problem. Across both batches, no authoritative evidence established a meaningful discovery, booking, or administration pain point (`EVD-000057`, `EVD-000062`).
- **Tourism** — no canonical problem. Existing municipal visitor-information surfaces are substantial and no specific unmet digital need was demonstrated (`EVD-000056`).

These negative findings and the five preserved Batch A contradictions/tensions are recorded in `docs/milestones/D1-WU05-progress.md` and in the affected `EVD-*` `notes`/`domain` fields, so they remain discoverable rather than silently dropped.

## Unresolved questions handed to D2/D5

1. Is municipal agenda data publicly reusable/machine-readable?
2. Does Évora 2027 expose structured event data that could federate with municipal data?
3. Are accessibility fields reliably populated and visible to users?
4. Do cultural associations experience friction inside the current Évora Associativismo workflow?
5. Is cross-calendar duplication a maintainer problem or a user problem?
6. What should remain after Évora 2027 ends — data, systems, identifiers, archives?

## Institutional saturation decision

Batch B's own closing note states: "D2/D5 may be more valuable than further broad D1 institutional research in this track." This integration agrees with that conclusion. Across both batches, every candidate problem Batch A raised was directly tested by Batch B and resolved to defer/downgrade/no-problem, using current (2026), authoritative, first-party institutional sources (the current Municipal Agenda submission form, the operational associativism platform, current Évora 2027 programming). A further Batch C targeting the same institutional-first-pass method would very likely re-confirm the same conclusions rather than surface a materially different problem map: the remaining open questions (data reusability, actor-experienced friction inside an existing workflow, cross-calendar duplication as a lived problem) are not answerable by more institutional-document review — they require lived-user validation, direct actor-workflow interviews, and technical data-interface analysis, i.e. D2/D5 work, not more D1 institutional research. Per `docs/discovery/research-methodology.md` §7 and `docs/discovery/d1-parallel-research-operating-model.md`, **WU-D1-05 institutional discovery is sufficient to progress**, on the basis of a "nothing found" / "resolved by current-state check" saturation pattern rather than a "problem confirmed and refined" pattern (contrast with `WU-D1-03`/`WU-D1-04`, which retained/refined existing problem clusters). This is a valid and expected D1 outcome, not evidence of insufficient research effort.

## AIQT closure result

- `WU005` (WU-D1-05) was selected via `aiqt next` and transitioned `ready` → `in_progress` on 2026-08-11, in the same session as this combined Batch A + Batch B integration — unlike `WU003`/`WU004`, there is no historical AIQT-selection gap to reconcile, since no canonical records existed for this WU before this session.
- With both batches approved by the project owner and institutional-saturation criteria met (no new problem class produced; unresolved gaps explicitly recorded; every candidate problem tested and conservatively resolved), `WU005` is transitioned directly `in_progress` → `done` in the same checkpoint (`C005`), following the same evidence-gate/checkpoint mechanics used for `WU003`/`WU004`'s closures: a checkpoint is captured with `validationResult`/`acceptanceCriteriaResult` `passed` and `targetStatus: done`.
- `research/sources/`, `research/evidence/`, `research/problems/` all validate; `research/hypotheses/` contains no `HYP-*` files.
- `M001` (D1) remains `in_progress`. `WU006` (`ready`) and `WU007` (`planned`) are unchanged by this closure. `currentWorkUnitId` returns to `null` after this closure. `WU-D1-06` was not started or advanced as part of this closure.

## Validation result

- `node tools/validate-research.js` — 111 records, exits 0 (OK).
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`) all resolve.
- No duplicate shared sources were created: `SRC-0043` and `SRC-0047` each merge a Batch A source with the corresponding same-URL Batch B finding rather than duplicating; `SRC-0044`–`SRC-0046`, `SRC-0048`–`SRC-0050` cover publishers/URLs not previously canonical; `SRC-0002` was checked and correctly left unmodified (out of scope for this domain).
- `git status` reviewed before commit; only the intended research/documentation/AIQT-state files changed.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created: **NO**
- New `HYP-*` created: **NO**
- D2 started: **NO**
- WU-D1-06 status changed: **NO**

## Next WU

`WU-D1-06` (Environment, Climate, Public & Digital Services) remains `ready` in AIQT and was not selected or started as part of closing `WU-D1-05`.
