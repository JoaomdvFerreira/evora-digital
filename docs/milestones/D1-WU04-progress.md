# WU-D1-04 Progress — Economy, Employment, Talent & Education

**Status:** IN PROGRESS
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-10

## Batch A integration

The externally reviewed and project-owner-approved **WU-D1-04 Research Batch A** (`WU-D1-04-research-batch-A.md`, approved 2026-08-10; institutional/authoritative first-pass; no digital-tractability assessment, no solution selection) was integrated into structured repository records, per `docs/discovery/research-handoff-protocol.md` and the parallel-research operating model in `docs/discovery/d1-parallel-research-operating-model.md`.

- Sources enriched: **2** — `SRC-0002` (Plano de Desenvolvimento Social 2024–2027; gained `EMP`/`ECO`/`EDU` scope), `SRC-0028` (Plano de Ação do PDS 2025; gained `EMP` scope)
- Sources added/canonicalized: **5** — `SRC-0010` (Universidade de Évora, Plano de Atividades 2025 — previously a seed-only registry row, now canonicalized), `SRC-0011` (NERE — previously a seed-only registry row, now canonicalized), `SRC-0032` (UÉ admission results 2025), `SRC-0033` (Município de Évora — Desenvolvimento Económico), `SRC-0034` (Áreas de Acolhimento Empresarial / Parque de Indústria Aeronáutica de Évora)
- Evidence records added: **5** — `EVD-000037`…`EVD-000041`
- Problem records created: **1** — `PRB-0008` (workforce skills / employer-needs alignment)
- Hypothesis records created: **0**

Graduate/talent retention (provisional `D1-04-A-P02`) and business-support fragmentation (provisional `D1-04-A-P03`) were **not** promoted to canonical `PRB-*` records, per the task's conservative problem-creation guidance: retention is preserved as evidence (`EVD-000038`, `EVD-000039`) with an explicit causality caveat (housing/mobility/quality-of-life/social-cultural contributions are plausible but not established); business-support fragmentation remains an open discovery question (`EVD-000041`), not yet demonstrated as a user problem.

## Provisional → canonical mapping

### Sources

| Provisional | Canonical |
|---|---|
| D1-04-A-S01 | `SRC-0002` (enriched) |
| D1-04-A-S02 | `SRC-0028` (enriched) |
| D1-04-A-S03 | `SRC-0010` (canonicalized from seed registry) |
| D1-04-A-S04 | `SRC-0032` |
| D1-04-A-S05 | `SRC-0033` |
| D1-04-A-S06 | `SRC-0034` |
| D1-04-A-S07 | `SRC-0011` (canonicalized from seed registry) |

### Evidence

| Provisional | Canonical |
|---|---|
| D1-04-A-E01 | `EVD-000037` |
| D1-04-A-E02 | `EVD-000038` |
| D1-04-A-E03 | `EVD-000039` |
| D1-04-A-E04 | `EVD-000040` |
| D1-04-A-E05 | `EVD-000041` |

### Problems

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-04-A-P01 | `PRB-0008` | Created (workforce skills / employer-needs alignment) |
| D1-04-A-P02 | — | Deferred: preserved as evidence (`EVD-000038`, `EVD-000039`); talent retention referenced from `PRB-0008`'s and `PRB-0006`'s notes, causality not established |
| D1-04-A-P03 | — | Deferred: kept as evidence/open discovery question (`EVD-000041`), explicitly not yet demonstrated as a user problem |

## Cross-domain integrity

- `SRC-0002` and `SRC-0028` were reused/enriched (both already canonical from WU-D1-02/WU-D1-03), not duplicated.
- Student accommodation remains represented only in the housing problem space (`PRB-0006`, WU-D1-03); this batch does not duplicate it — `EVD-000039` cross-references `PRB-0006` for the housing side of the talent-retention question instead.
- No causal relationship was encoded as established fact: `EVD-000039` explicitly marks Housing → Talent Retention causality as "NOT ESTABLISHED," and no Culture → Talent Retention link was created (WU-D1-05 has not been integrated).
- `EVD-000037` notes that `SRC-0002` and `SRC-0028` share the same PDS/Rede Social institutional lineage, so repeated claims across them are not treated as independent corroboration; `SRC-0010` (UÉ's own planning) is recorded as a distinct institutional line.

## Unresolved Current-State Challenge questions (carried to Batch B)

1. Current data measuring graduate retention in Évora/Alentejo.
2. Occupations/skills currently showing employer shortages.
3. What NERE/IEFP/employers report as current recruitment/skills barriers.
4. Existing portals/job fairs/matching services already in use.
5. Whether SMEs experience difficulty navigating incentives, training, licensing or business-support programmes.
6. Current business demographics and sector concentrations in Évora.
7. How strongly housing constrains talent retention.
8. Whether mismatch can be reduced through information/coordination, or whether the core problem is compensation/industry structure/supply.

## Validator result

```text
node tools/validate-research.js
Validated 74 record(s): OK.
```

(63 records from WU-D1-02/WU-D1-03 + 5 new `SRC-*` + 5 new `EVD-*` + 1 new `PRB-*` = 74.)

## AIQT

- Attempted `aiqt next --work-unit WU004` to select `WU-D1-04` while `WU-D1-03` remains `in_progress`.
- **Blocked by AIQT's own workflow model**: `NEXT-WORK-UNIT-IN-PROGRESS` — "A work unit is already in progress. Run aiqt checkpoint before starting another." (`agentCanFix: false`). AIQT's current selection model does not support two concurrently `in_progress` work units; this is a process constraint, not something the repository agent bypassed.
- Per instruction, this was **not** forced or worked around: `WU-D1-03` was not closed/checkpointed just to make room, and `WU-D1-04` was not started in AIQT.
- Canonical repository integration for WU-D1-04 Batch A proceeded independently of AIQT WU selection, consistent with the parallel-research operating model (`docs/discovery/d1-parallel-research-operating-model.md`): research/records integration is not gated on which WU AIQT currently has selected.
- `WU-D1-03` remains `in_progress` (unchanged). `WU-D1-04` remains `ready` in AIQT. `WU-D1-05`, `WU-D1-06` remain `ready`; `WU-D1-07` remains `planned`. `WU-D1-05` was not started.

## Files added/changed

- `research/sources/SRC-0002.yaml`, `research/sources/SRC-0028.yaml` (enriched)
- `research/sources/{SRC-0010,SRC-0011,SRC-0032,SRC-0033,SRC-0034}.yaml` (added)
- `research/evidence/EVD-000037.yaml` … `EVD-000041.yaml` (added)
- `research/problems/PRB-0008.yaml` (added)
- `docs/data/source-registry.md` (updated `SRC-0010`/`SRC-0011` rows, added `SRC-0032`–`SRC-0034` rows, added a WU-D1-04 verification note)
- `docs/milestones/D1-WU04-progress.md` (this file)

## Confirmation

- Additional substantive research performed during integration: **NO**
- New `HYP-*` created: **NO**
- Speculative causal relationships encoded as fact: **NO**
- Student housing duplicated as a new independent problem: **NO**
- WU-D1-05 records integrated: **NO**
- WU-D1-04 marked `done` in AIQT: **NO** — AIQT selection for WU-D1-04 is blocked while WU-D1-03 remains `in_progress`; canonical records are integrated regardless
