# WU-D2-05 Closure — Housing (D2-C) + Employment/Skills (D2-D) Signals

**Status:** DONE
**Milestone:** D2 — Public Signal Discovery
**Date:** 2026-08-11

## Objective

Integrate the reviewed, project-owner-approved final reconciled D2-C Housing (`PRB-0006`) + D2-D Employment/Skills (`PRB-0008`) handoff, per `.aiqt/state.json` `WU012`'s objective. Both tracks share this work unit for execution efficiency but remain analytically separate below.

## Batch integrated

**Final reconciled package** (`evora-digital-WU012-housing-employment-integration-handoff-FINAL.md`): 6 new `SRC-*` (`SRC-0085`–`SRC-0090`), 5 new `EVD-*` (`EVD-000099`–`EVD-000103`), 1 in-place enrichment (`EVD-000048`), refinements to `PRB-0006` and `PRB-0008`.

---

# TRACK A — HOUSING / PRB-0006

## Signal → canonical mapping

| Signal | Disposition | Canonical record |
|---|---|---|
| H-01 (student affordability/displacement) | New SRC + EVD | `SRC-0085` / `EVD-000099` |
| H-02 (UÉ residence capacity) | Reused — already `SRC-0037`/`EVD-000043`; no new record | — |
| H-03 (Manuel Álvares renovation completion, 2026-05-06) | New SRC + EVD — material temporal value | `SRC-0086` / `EVD-000100` |
| H-04 (Local Housing Plan) | Reused — already `SRC-0035`/`EVD-000042`; no new record | — |
| H-05 (12-home delivery) | Reused — already `SRC-0036`/`EVD-000042`; no new record | — |
| H-06 (applicant journey) | Recorded as `PRB-0006` UNPROVEN note only; no EVD manufactured | `PRB-0006.possible_root_causes` |
| H-07 (programme-delivery bureaucracy boundary) | Recorded as `PRB-0006` boundary note only; no EVD | `PRB-0006.possible_root_causes` |

## Reused vs new (Housing)

- **Reused unchanged:** `SRC-0035`/`EVD-000042`, `SRC-0036`/`EVD-000042`, `SRC-0037`/`EVD-000043`.
- **New:** `SRC-0085`/`EVD-000099` (H-01), `SRC-0086`/`EVD-000100` (H-03).

## Dedup / enrichment decisions (Housing)

Exact-URL check confirmed neither the Tribuna do Alentejo article nor the Manuel Álvares renovation-completion page existed canonically. H-02, H-04 and H-05 map exactly onto already-canonical URLs and were not duplicated. H-03 was judged materially new: `SRC-0037`/`EVD-000043` record that three residences were closed for renovation during 2025/2026 generically, without a specific completion date — the May 2026 completion adds a concrete recovery point to that timeline without implying the broader pressure is resolved.

## PRB-0006 changes

**Strengthened/current-state-updated:** current affordability pressure and student rental exposure (`EVD-000099`, press-mediated, representativeness of the underlying reporting not established); a specific residence-renovation recovery point in the 2025/2026 capacity-disruption timeline (`EVD-000100`).

**Preserved:** physical/economic supply and affordability as the dominant cause; low software leverage over that dominant cause; student accommodation as a subproblem within `PRB-0006`, not a separate `PRB-*`; `validation_status: unvalidated`.

**Explicitly kept UNPROVEN:** applicant-facing housing/UÉ-residence information and transaction friction — D2 did not establish that applicants cannot discover programmes, that eligibility is misunderstood, that documents are duplicated, that tracking is deficient, or that a digital navigator would help. The programme-delivery bureaucracy described in the reviewed material is recorded as institutional/process context, not applicant-facing friction, absent direct applicant evidence.

No new `PRB-*` or `HYP-*` created; no housing-navigator/app hypothesis created.

## Housing D3/D5 questions carried forward

1. How does a household know which programme applies?
2. Is eligibility understandable before starting?
3. How many channels/documents must be consulted?
4. Is status visible and meaningful?
5. How often are applications incomplete/redirected?
6. How does the UÉ residence application/prioritisation journey work?
7. How many eligible students fail to secure residence accommodation?
8. What are placement/rejection/time-to-outcome patterns?
9. Which problems remain even with perfect information?

## Housing saturation decision

Broad public-signal research is **NEAR SATURATION / sufficient for D2 structural diagnosis**. Further generic affordability anecdotes are low-value; next useful evidence is D3/D5 applicant-journey validation, not more open-web searching.

---

# TRACK B — EMPLOYMENT / SKILLS / PRB-0008

## Signal → canonical mapping

| Signal | Disposition | Canonical record |
|---|---|---|
| E-01 (specialised aerospace demand) | New SRC + EVD | `SRC-0087` / `EVD-000101` |
| E-02 (hospitality demand) | Omitted — hospitality already implicit in `EVD-000049`'s "varied occupations"; no distinct pattern added | — |
| E-03 (UÉ Employment Portal) | New SRC; enriched existing `EVD-000048` (`additional_sources` + summary) instead of a new EVD | `SRC-0088` → `EVD-000048` |
| E-04 (UÉ Employment Fair, 2 URLs) | Reused — already `SRC-0040`/`EVD-000048`; no new record | — |
| E-05 (PlaQuaR) | New SRC + EVD — high-value delta | `SRC-0089` / `EVD-000102` |
| E-06 (TE Connectivity ↔ UÉ feedback) | New SRC + EVD | `SRC-0090` / `EVD-000103` |
| E-07 (public hiring-support programme) | Omitted — generic hiring-support infrastructure is not the unresolved problem | — |

## Reused vs new (Employment)

- **Reused unchanged:** `SRC-0039`/`EVD-000049`, `SRC-0040`, `EVD-000047`.
- **Enriched in place:** `EVD-000048` — `additional_sources` gained `SRC-0088`; summary now names the UÉ Employment Portal's CV/matching/vacancy-posting capabilities; notes gained a D2-D Round A (E-03) line.
- **New:** `SRC-0087`/`EVD-000101` (E-01), `SRC-0088` (E-03, no new EVD), `SRC-0089`/`EVD-000102` (E-05), `SRC-0090`/`EVD-000103` (E-06).

## Dedup / enrichment decisions (Employment)

Exact-URL check confirmed none of the Indeed listings pages, `emprego.uevora.pt`, the PlaQuaR news item, or the TE Connectivity news item existed canonically; `SRC-0041` (Magma Talks) has no canonical URL and describes different initiatives, so the Employment Portal was recorded as a distinct source (`SRC-0088`) but folded into the existing `EVD-000048` matching-infrastructure evidence rather than creating a redundant EVD, per the handoff's explicit enrichment-over-duplication instruction. E-02 (hospitality) and E-07 (public hiring-support programme) were omitted as low marginal information value, per the handoff's own priority guidance.

## PRB-0008 changes

**Strengthened:** a concrete specialised-demand signal in aerospace (`EVD-000101`), alongside the existing broader IEFP snapshot (`EVD-000049`).

**Refined:** the existing-matching-infrastructure conclusion (`EVD-000048`) now explicitly includes the UÉ Employment Portal, further strengthening the rejection of a generic local job-board hypothesis; two skills-alignment/employer-feedback mechanisms already exist or are developing — PlaQuaR (`EVD-000102`) and the UÉ/TE Connectivity annual action plan (`EVD-000103`) — shifting the live diagnostic question toward the *effectiveness and coverage* of skills-demand feedback/alignment, not absence of a matching mechanism.

**Explicitly kept UNKNOWN/UNPROVEN:** which occupations are genuinely hard to fill; vacancy duration; failed-recruitment rate; wage/job-condition constraints; housing/transport causal effects on recruitment/retention (housing→talent-retention causality is explicitly **not** inferred); graduate retention outcomes; SME ability to express future skill needs; PlaQuaR's effective coverage/outcomes. `validation_status: unvalidated` preserved.

No new `PRB-*` or `HYP-*` created; no job-board/platform hypothesis created.

## Employment D3/D5 questions carried forward

1. Which occupations take longest to fill?
2. Why do vacancies remain open?
3. Which skills are genuinely missing vs preferred?
4. Are wages, housing, transport or schedules bigger constraints than training?
5. How do SMEs communicate future skills needs?
6. Do employers use IEFP/UÉ/NERE mechanisms successfully?
7. What does PlaQuaR capture, at what granularity/freshness, and with what outcomes?
8. Where do UÉ graduates work after graduation?
9. Why do graduates who leave Évora leave?
10. Are there repeated training programmes with weak placement outcomes?

## Employment saturation decision

Broad vacancy/open-web research is **NEAR SATURATION / sufficient for D2**. Additional vacancy scraping will add jobs, not explain mismatch; next useful evidence is D3/D5/operational-data validation.

---

## Cross-track boundary

`PRB-0006` and `PRB-0008` were not merged. Housing→talent-retention remains recorded only as a cross-domain lead/question (Housing D3/D5 item 9-adjacent context in the original D1 corpus), not a supported causal edge. No solution was selected; no `HYP-*` created for either track.

## Validation result

```text
node tools/validate-research.js
Validated 193 record(s): OK.
```

- 182 (post-`WU011`) + 6 new `SRC-*` + 5 new `EVD-*` = 193.
- `PRB-*`: still 9 records; `PRB-0006` and `PRB-0008` updated in place, not replaced.
- `HYP-*`: still 0 records.
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- `git status` reviewed before commit; only the intended `research/` and `docs/` files changed.

## AIQT closure result

`WU012` was selected via `aiqt next --work-unit WU012` and closed via `aiqt checkpoint --from-file` using the supported terminal `targetStatus: "done"` value (no intermediate/fabricated checkpoint state was created). See the Return summary in the handoff response for the resulting checkpoint ID and final work-unit/milestone state.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Any `PRB-*` marked `validated`: **NO**
- `PRB-0006`/`PRB-0008` merged: **NO**
- New external research performed by the repository agent: **NO** — integration only
- `WU-D2-05` closed: **YES**
- `M002` milestone closed: **NO**

## Next

`WU-D2-06` (Consolidation & D2 Closure) remains `planned`, pending cross-track synthesis across D2-A/D2-B/D2-C/D2-D/D2-E, including the D2-A road-surface-maintenance `NEW-CANDIDATE` disposition.
