# WU-D1-06 Closure — Environment, Climate, Public & Digital Services

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Objective

Integrate reviewed research handoffs covering Environment & Waste, Climate & Energy, Public Services, and Digital Access & Services into structured records, without performing new external research locally and without proposing replacement systems where a service already exists.

## Combined-batch execution

Like `WU-D1-05`, this WU had no pre-existing canonical integration. Both the approved **Batch A** (institutional/problem-first discovery) and **Batch B** (narrow current-state challenge, approved 2026-08-11) handoffs were integrated together in one execution, per the parallel-research operating model. Provisional→canonical ID mappings for both batches are preserved separately in `docs/milestones/D1-WU06-progress.md`.

## Institutional coverage achieved

- **Batch A** — institutional/problem-first pass: PMAAC (municipal climate-adaptation plan), municipal climate-risk communication, the July 2026 urban-hygiene structural response and priority statement, the fleet-reinforcement announcement, Gesamb 2025 results, the municipal occurrence-management platform, the municipality app, ePaper Phase 2, and Balcão Online. Established the `SRC-*`/`EVD-*` set; flagged five candidate problems, none canonicalized directly in Batch A.
- **Batch B** — current-state challenge: the February 2026 RSU collection-disruption communications, the Gesamb 2025 Quality of Service Report, Gesamb ecocentre/reception information, and the municipal Proteção Civil alert channel, plus current-state enrichment of six Batch A sources sharing the same URLs. Directly tested Batch A's candidate problems: urban hygiene/service reliability survived and strengthened; the generic reporting-app, generic-digitisation, and climate-information-gap hypotheses were rejected; digital-service fragmentation was deferred as plausible-but-unproven.

## Final record counts

Full canonical set after this combined integration, validated by `node tools/validate-research.js`:

```text
Validated 143 record(s): OK.
```

Records attributable to WU-D1-06:

- Sources added: `SRC-0051`–`SRC-0065` (15) — six same-URL Batch A/Batch B pairs merged into single records (`SRC-0053`, `SRC-0055`, `SRC-0057`, `SRC-0058`, `SRC-0059`, `SRC-0060`); no duplicate source was created for any of these pairs.
- Sources enriched: 0 (checked `SRC-0002` for Environment/Climate/Waste/Digital-Services overlap; it is the general PDS and does not cover this domain's dedicated scope, so no enrichment was needed).
- Evidence added: `EVD-000063`–`EVD-000078` (16).
- Problems created: **1** — `PRB-0009` (urban hygiene / waste-collection service reliability and quality).
- Hypotheses created: 0.

See `docs/milestones/D1-WU06-progress.md` for the batch-by-batch integration detail.

## One canonical problem: rationale

`PRB-0009` was created because urban hygiene/waste-service reliability met the repository's promotion bar on all counts: current evidence (February 2026 documented disruption), institutional evidence (July/August 2026 municipal restructuring and explicit "urgent problem" framing by the Mayor), and survival through Batch B's Current-State Challenge (evidence strengthened rather than weakened). It is deliberately framed as **service reliability/quality**, not "lack of information" or "need for an app", with `digital_tractability: low` recorded against the dominant operational root cause, and a narrower unvalidated information/coordination subproblem (service-status transparency, bulky-waste routing, cross-entity ownership clarity) explicitly preserved as a future D2/D5 question rather than folded into a solution hypothesis.

No other `PRB-*` was created:

- **Climate resilience (heat, drought, intense rainfall)** — retained as evidence/domain area only. Per the approved conservative guidance, a broad climate-resilience problem risks being too large/undifferentiated, and Batch B did not establish a new information/coordination problem beyond already-known climate risks and existing PMAAC/alert infrastructure. Consistent with WU-D1-05's zero-PRB pattern where evidence did not clearly warrant a canonical record.
- **Municipal digital-service fragmentation/navigation** — deferred to D2/D5. Multiple channels exist, but multiplicity alone is not evidence of citizen difficulty (`EVD-000076`, `EVD-000077`).
- **Public-space occurrence reporting** — rejected as a generic gap. A mature reporting/tracking platform already exists (`EVD-000067`, `EVD-000075`); only a narrower, currently unvalidated performance question (resolution time, backlog, routing) survives, and it is preserved inside `PRB-0009`'s root-cause notes rather than as a separate record, since it is downstream of the same service journey.
- **Recycling / selective-collection participation** — kept as evidence of a current positive transition (4.3% growth in 2025), not a standalone digital problem.

These negative findings, the five preserved cross-domain links, and the six open-data observations are recorded in `docs/milestones/D1-WU06-progress.md` and in the affected `EVD-*`/`SRC-*`/`PRB-*` `notes` fields, so they remain discoverable rather than silently dropped.

## Unresolved questions handed to D2/D5

1. Do municipal occurrence records expose resolution-time/backlog data internally or publicly?
2. How do residents experience bulky-waste requests and general occurrence follow-up?
3. Does responsibility sharing between Municipality, Gesamb and parish councils create routing confusion?
4. Are waste collection schedules/routes/status changes available in reusable machine-readable form?
5. Are PMAAC/WebSIG layers openly licensed and technically reusable?
6. Do vulnerable populations experience specific heat-information/access gaps?
7. Across municipal services, are authentication, status tracking and accessibility consistent?
8. Does ePaper reduce end-to-end processing time, or primarily digitise intake?

## Institutional saturation decision

Batch B's own saturation assessment states that WU-D1-06 appears close to institutional saturation: current operational evidence was found for the strongest civic problem; existing digital-service and occurrence-reporting solutions were checked; waste/service-quality infrastructure was checked; climate and alert infrastructure was checked; no additional top-level digital problem class emerged; remaining high-value questions are primarily lived-user journey, operational performance metrics, or technical open-data/interface questions. This integration independently verifies that conclusion against `docs/discovery/research-methodology.md` §7 and the parallel-research operating model: every candidate problem raised in Batch A was directly tested by Batch B and resolved to promote/retain-as-evidence/defer/reject; the one promoted problem (urban hygiene) was strengthened, not merely re-confirmed, by current operational evidence (the February 2026 disruption), which is a stronger saturation signal than WU-D1-05's "nothing found" pattern. The remaining open questions (occurrence-resolution performance data, cross-entity routing, machine-readable schedules, PMAAC licensing, vulnerable-population heat-information gaps, cross-service authentication/accessibility consistency, ePaper end-to-end timing) are not answerable by further institutional-document review — they require lived-user validation, operational data access, or technical/open-data interface analysis, i.e. D2/D5 or a dedicated technical-source assessment, not more D1 institutional research. A further broad institutional Batch C is not recommended; **WU-D1-06 institutional discovery is sufficient to progress**.

## AIQT closure result

- `WU006` (WU-D1-06) was selected via `aiqt next` and transitioned `ready` → `in_progress` on 2026-08-11, in the same session as this combined Batch A + Batch B integration — unlike `WU003`/`WU004`, there is no historical AIQT-selection gap to reconcile, since no canonical records existed for this WU before this session.
- With both batches approved by the project owner and institutional-saturation criteria met (one problem class promoted and strengthened; all other candidates conservatively resolved; unresolved gaps explicitly recorded), `WU006` is transitioned directly `in_progress` → `done` in the same checkpoint (`C006`), following the same evidence-gate/checkpoint mechanics used for `WU003`/`WU004`/`WU005`'s closures: a checkpoint is captured with `validationResult`/`acceptanceCriteriaResult` `passed` and `targetStatus: done`.
- `research/sources/`, `research/evidence/`, `research/problems/` all validate; `research/hypotheses/` contains no `HYP-*` files.
- `M001` (D1) remains `in_progress`. `WU007` (`planned`) is unchanged by this closure. `currentWorkUnitId` returns to `null` after this closure. `WU-D1-07` was not started or advanced as part of this closure.

## Validation result

- `node tools/validate-research.js` — 143 records, exits 0 (OK).
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- No duplicate shared sources were created: the six same-URL Batch A/Batch B pairs (A-S03/B-S03, A-S05/B-S04, A-S07/B-S07, A-S08/B-S08, A-S09/B-S10, A-S10/B-S09) were each merged into one record; `SRC-0051`, `SRC-0052`, `SRC-0054`, `SRC-0056`, `SRC-0061`–`SRC-0065` cover publishers/URLs not previously canonical; `SRC-0002` was checked and correctly left unmodified (out of scope for this domain).
- `git status` reviewed before commit; only the intended research/documentation/AIQT-state files changed.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created: **YES** — exactly one (`PRB-0009`)
- New `HYP-*` created: **NO**
- D2 started: **NO**
- WU-D1-07 status changed: **NO**

## Next WU

`WU-D1-07` (Consolidation & D1 Closure) remains `planned` in AIQT and was not selected or started as part of closing `WU-D1-06`.
