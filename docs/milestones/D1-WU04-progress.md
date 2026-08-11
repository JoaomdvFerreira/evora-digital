# WU-D1-04 Progress — Economy, Employment, Talent & Education

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-10 (Batch A) / 2026-08-11 (Batch B + AIQT reconciliation + closure)

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

## AIQT (Batch A time, 2026-08-10)

- Attempted `aiqt next --work-unit WU004` to select `WU-D1-04` while `WU-D1-03` remains `in_progress`.
- **Blocked by AIQT's own workflow model**: `NEXT-WORK-UNIT-IN-PROGRESS` — "A work unit is already in progress. Run aiqt checkpoint before starting another." (`agentCanFix: false`). AIQT's current selection model does not support two concurrently `in_progress` work units; this is a process constraint, not something the repository agent bypassed.
- Per instruction, this was **not** forced or worked around: `WU-D1-03` was not closed/checkpointed just to make room, and `WU-D1-04` was not started in AIQT.
- Canonical repository integration for WU-D1-04 Batch A proceeded independently of AIQT WU selection, consistent with the parallel-research operating model (`docs/discovery/d1-parallel-research-operating-model.md`): research/records integration is not gated on which WU AIQT currently has selected.
- `WU-D1-03` remains `in_progress` (unchanged). `WU-D1-04` remains `ready` in AIQT. `WU-D1-05`, `WU-D1-06` remain `ready`; `WU-D1-07` remains `planned`. `WU-D1-05` was not started.

## Batch B integration (2026-08-11)

The externally reviewed and project-owner-approved **WU-D1-04 Research Batch B** was integrated on top of the pre-existing Batch A canonical records, per `docs/discovery/research-handoff-protocol.md`. Batch B is a current-state challenge / existing-solution follow-up testing whether skills mismatch, graduate retention, and business-support fragmentation remain current/specific enough to support canonical problems.

- Sources enriched: **2** — `SRC-0002`, `SRC-0028` (both gained a 2025/2026 current-state skills-alignment update; no duplication of PDS/PDS Action Plan material).
- Sources added: **4** — `SRC-0039` (IEFP Online, Évora employment-service listings), `SRC-0040` (UÉ Feira do Emprego 2026), `SRC-0041` (UÉ employability initiatives — Magma Talks and related activity), `SRC-0042` (NERE / IEFP InovaSocial training, February 2026).
- Evidence records added: **5** — `EVD-000047`…`EVD-000051`.
- Problem records created: **0**. `PRB-0008` was refined (evidence list extended to include `EVD-000047`, `EVD-000048`, `EVD-000049`; `possible_root_causes` extended with the Batch B current-state challenge result), not rewritten.
- Hypothesis records created: **0**.

### Provisional → canonical mapping (Batch B)

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-04-B-S01 | `SRC-0039` | Added (IEFP Online, Évora listings) |
| D1-04-B-S02 | `SRC-0040` | Added (UÉ Feira do Emprego 2026) |
| D1-04-B-S03 | `SRC-0041` | Added (UÉ employability initiatives) |
| D1-04-B-S04 | `SRC-0042` | Added (NERE / IEFP InovaSocial) |
| D1-04-B-S05 | `SRC-0002`, `SRC-0028` | Enriched (PDS / PDS Action Plan — same underlying source already canonical; not duplicated) |
| D1-04-B-E01 | `EVD-000047` | Added — skills alignment survives Current-State Challenge |
| D1-04-B-E02 | `EVD-000048` | Added — existing employment-matching infrastructure is substantial |
| D1-04-B-E03 | `EVD-000049` | Added — public job listings alone cannot identify the actual skills shortage |
| D1-04-B-E04 | `EVD-000050` | Added — graduate/talent retention magnitude unresolved (kept evidence-only) |
| D1-04-B-E05 | `EVD-000051` | Added — business-support fragmentation plausible but unproven (kept evidence-only, discovery question) |

### Candidate problem decisions

- **Workforce skills / employer-needs alignment** — RETAINED and strengthened as the canonical `PRB-0008` cluster. Digital tractability: not assessed (unchanged).
- **Graduate/talent retention** — canonical problem creation **deferred**; no PRB created. No sufficiently direct public 2025/2026 metric was found for the share of UÉ graduates remaining employed/living in Évora (`EVD-000050`).
- **Business-support fragmentation** — remains a **discovery question only**; no PRB created. Multiplicity of providers (Município, NERE, PACT, IEFP, UÉ) is not itself evidence of navigation friction (`EVD-000051`).

### Current-State Challenge result

Skills mismatch survives (current 2025/2026 institutional workstream, not merely historic strategy). The "lack of employment-support infrastructure" claim is rejected — existing infrastructure (UÉ employment fairs, university career initiatives, IEFP listings, NERE/IEFP training) is substantial. Graduate retention remains a strategic concern but its current magnitude is unresolved. Business-support fragmentation is not established.

### Next research questions (carried forward, unresolved — not answered, no `HYP-*` created)

1. Employer-side evidence: which occupations/skills are actually hard to recruit?
2. Duration and reasons for vacancies: qualification, pay, housing, transport, schedule, experience?
3. Graduate outcomes: where do UÉ graduates live/work 1–3 years after graduation?
4. Do SMEs experience real difficulty finding the correct support/incentive/training programme?
5. Is there a missing shared skills-demand dataset/feedback loop, or are existing institutional channels sufficient?

No job-board, talent-platform, or business-portal hypothesis or problem was created in D1.

## AIQT reconciliation (2026-08-11)

The Batch A canonical research records above (`PRB-0008`, `SRC-0032`–`SRC-0034`, `EVD-000037`–`EVD-000041`) were integrated into the repository in commit `c8a0bcc` while `WU-D1-03` was `in_progress`, so `WU-D1-04` itself was never formally selected/activated in AIQT — this is the `NEXT-WORK-UNIT-IN-PROGRESS` constraint recorded above, and it was not bypassed at the time.

`WU-D1-03` is now `done` (closed in commit `387efc8`), which unblocks WU004 selection. AIQT selection for `WU-D1-04` therefore happens **now, this session** — no historical AIQT checkpoint or event has been fabricated to make it look as though Batch A's integration happened through AIQT selection at c8a0bcc time. The runlog records `EVT-028`…`EVT-032` (agent packet, `WU004` `ready`→`in_progress`, checkpoint `C004`, `WU004` `in_progress`→`done`, advisory observation), all timestamped in this session, with `EVT-029`'s reason explicitly noting that Batch A pre-dated formal selection. This sequencing gap — canonical research integration proceeding ahead of formal AIQT work-unit activation because the tool's single-active-work-unit constraint left no other option — is treated as an AIQT dogfood/process-design finding for the AIQT tool itself, not a data-integrity issue in the research records: the records were always correctly attributed to `WU-D1-04` in their own `notes` fields regardless of AIQT's selection state.

Because Batch B is approved and institutional saturation is met (see `docs/milestones/D1-WU04-closure.md`), `WU004` is selected and closed in the same session: `ready` → `in_progress` → `done`, `currentWorkUnitId` set to `WU004` then back to `null`, following the same checkpoint mechanics used for `WU003`'s closure (`docs/milestones/D1-WU03-closure.md`).

## Files added/changed

- `research/sources/SRC-0002.yaml`, `research/sources/SRC-0028.yaml` (enriched, Batch A + Batch B)
- `research/sources/{SRC-0010,SRC-0011,SRC-0032,SRC-0033,SRC-0034}.yaml` (added, Batch A)
- `research/sources/{SRC-0039,SRC-0040,SRC-0041,SRC-0042}.yaml` (added, Batch B)
- `research/evidence/EVD-000037.yaml` … `EVD-000041.yaml` (added, Batch A)
- `research/evidence/EVD-000047.yaml` … `EVD-000051.yaml` (added, Batch B)
- `research/problems/PRB-0008.yaml` (added Batch A, refined Batch B)
- `docs/data/source-registry.md` (updated `SRC-0010`/`SRC-0011` rows, added `SRC-0032`–`SRC-0034` and `SRC-0039`–`SRC-0042` rows, WU-D1-04 verification note)
- `docs/milestones/D1-WU04-progress.md` (this file)
- `docs/milestones/D1-WU04-closure.md` (added)
- `.aiqt/state.json`, `.aiqt/runlog.jsonl` (WU004 selection + closure)

## Confirmation

- Additional substantive research performed during integration: **NO**
- New `HYP-*` created: **NO**
- Speculative causal relationships encoded as fact: **NO**
- Student housing duplicated as a new independent problem: **NO**
- New PRB created for graduate/talent retention or business-support fragmentation: **NO**
- WU-D1-05 records integrated or started: **NO**
- WU-D1-04 marked `done` in AIQT: **YES** — selected and closed this session (`EVT-028`…`EVT-032`); Batch A's pre-existing integration (commit `c8a0bcc`) is narrated, not retroactively fabricated as an AIQT event.
