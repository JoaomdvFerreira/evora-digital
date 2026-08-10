# WU-D1-03 Progress — Housing, Social Support, Health & Wellbeing

**Status:** IN PROGRESS
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-10

## Batch A integration

The externally reviewed and project-owner-approved **WU-D1-03 Research Batch A** (`WU-D1-03-research-batch-A.md`, approved 2026-08-10; institutional/authoritative first-pass; no digital-tractability assessment, no solution selection) was integrated into structured repository records, per `docs/discovery/research-handoff-protocol.md` and the parallel-research operating model in `docs/discovery/d1-parallel-research-operating-model.md`.

- Sources enriched: **1** — `SRC-0002` (Plano de Desenvolvimento Social 2024–2027; gained `HOU`/`HEA` scope and housing/social/health findings, since this source is already canonical from WU-D1-02 and is reused rather than duplicated)
- Sources added: **4** — `SRC-0028` (Plano de Ação do PDS 2025), `SRC-0029` (PUE Sector Report: Habitação e Mercado Imobiliário), `SRC-0030` (Plano Concelhio dos Cuidadores Informais de Évora), `SRC-0031` (CLASE / Rede Social)
- Evidence records added: **6** — `EVD-000031`…`EVD-000036`
- Problem records created: **2** — `PRB-0006` (housing access/affordability/supply, including student accommodation as an in-cluster sub-pressure), `PRB-0007` (informal-caregiver information/support navigation)
- Hypothesis records created: **0**

Mental-health support capacity (provisional `D1-03-A-P04`) was **not** promoted to a canonical `PRB-*` in this batch, per the task's conservative problem-creation guidance: it remains recorded as evidence (`EVD-000035`) with an explicit freshness caution, referenced from `PRB-0007`'s `possible_root_causes` as a related-but-distinct open investigation rather than merged into the caregiver-navigation problem.

## Provisional → canonical mapping

### Sources

| Provisional | Canonical |
|---|---|
| D1-03-A-S01 | `SRC-0002` (enriched) |
| D1-03-A-S02 | `SRC-0028` |
| D1-03-A-S03 | `SRC-0029` |
| D1-03-A-S04 | `SRC-0030` |
| D1-03-A-S05 | `SRC-0031` |

### Evidence

| Provisional | Canonical |
|---|---|
| D1-03-A-E01 | `EVD-000031` |
| D1-03-A-E02 | `EVD-000032` |
| D1-03-A-E03 | `EVD-000033` |
| D1-03-A-E04 | `EVD-000034` |
| D1-03-A-E05 | `EVD-000035` |
| D1-03-A-E06 | `EVD-000036` |

### Problems

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-03-A-P01 | `PRB-0006` | Created (housing access/affordability/supply) |
| D1-03-A-P02 | — | Deferred: preserved as evidence (`EVD-000033`) within `PRB-0006` rather than a separate canonical problem, per approved Round A synthesis; cross-referenced for WU-D1-04 talent/student-retention overlap |
| D1-03-A-P03 | `PRB-0007` | Created (informal-caregiver information/support navigation) |
| D1-03-A-P04 | — | Deferred: kept as evidence/open investigation (`EVD-000035`); not yet sufficient under the recording-protocol rules for a distinct canonical problem |

## Cross-domain integrity

- `SRC-0002` (Plano de Desenvolvimento Social 2024–2027) was reused/enriched, not duplicated, since it is already a canonical source from WU-D1-02.
- `EVD-000033` explicitly notes that `SRC-0002` and `SRC-0028` share the same PDS/Rede Social institutional lineage, so repeated claims across them are not treated as independent corroboration.
- Student accommodation (`D1-03-A-P02`) was kept inside the housing problem space (`PRB-0006`) rather than becoming a separate canonical problem or a generic cross-domain "information fragmentation" problem, per the approved Round A cross-domain synthesis. It is flagged for later reference, not duplication, when WU-D1-04 (Economy, Employment, Talent & Education) integrates its own research.
- No causal relationship between housing and talent retention was encoded as established fact; `PRB-0006` only notes the documented overlap.
- Freshness/current-state caveats were preserved: `SRC-0029` is recorded `freshness.status: STALE` (Census 2021-era quantitative base); `EVD-000035` (mental-health capacity) explicitly requires a Batch B current-state challenge before being treated as an unchanged 2026 diagnosis.

## Unresolved Current-State Challenge questions (carried to Batch B)

1. 2026 implementation status of Local Housing Strategy targets.
2. Current housing-price/rental/availability data for Évora.
3. Current UÉ student residence capacity versus demand.
4. Services/information channels currently available to informal caregivers.
5. What 2025/2026 health-system sources say about mental-health and primary-care capacity specifically in Évora.
6. Where users currently discover social supports, eligibility criteria and referral routes.
7. Which gaps are capacity problems versus information/coordination problems.

## Validator result

```text
node tools/validate-research.js
Validated 63 record(s): OK.
```

(51 records from WU-D1-02 + 4 new `SRC-*` + 6 new `EVD-*` + 2 new `PRB-*` = 63.)

## AIQT

- `aiqt next --work-unit WU003` selected `WU-D1-03` and transitioned it `ready` → `in_progress`.
- No checkpoint was captured: Batch A is a partial integration (Batch B is still required before institutional saturation can be assessed), so no `targetStatus` transition (`needs_review`/`done`) is appropriate yet. `WU-D1-03` remains `in_progress`.
- `WU-D1-04`, `WU-D1-05`, `WU-D1-06` remain `ready`; `WU-D1-07` remains `planned`. Neither `WU-D1-04` nor `WU-D1-05` was started, per the parallel-research operating model's rule that AIQT state only advances when a WU's approved handoff enters canonical integration.

## Files added/changed

- `research/sources/SRC-0002.yaml` (enriched)
- `research/sources/{SRC-0028,SRC-0029,SRC-0030,SRC-0031}.yaml` (added)
- `research/evidence/EVD-000031.yaml` … `EVD-000036.yaml` (added)
- `research/problems/{PRB-0006,PRB-0007}.yaml` (added)
- `docs/data/source-registry.md` (added `SRC-0028`–`SRC-0031` rows and a WU-D1-03 verification note)
- `docs/milestones/D1-WU03-progress.md` (this file)

## Confirmation

- Additional substantive research performed during integration: **NO**
- New `HYP-*` created: **NO**
- Speculative causal relationships encoded as fact: **NO**
- WU-D1-04/WU-D1-05 records integrated: **NO**
- WU-D1-03 marked `done`: **NO** — remains `in_progress`, Batch B required
