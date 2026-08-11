# WU-D1-05 Progress — Culture, Tourism, Sports & Public Life

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Combined integration (Batch A + Batch B, one execution)

Unlike WU-D1-03 and WU-D1-04, WU-D1-05 had **no prior canonical integration**. Both externally reviewed and project-owner-approved handoffs — **WU-D1-05 Research Batch A** (institutional/authoritative first-pass) and **WU-D1-05 Research Batch B** (narrow current-state challenge, approved 2026-08-10) — were integrated together in this single execution, per `docs/discovery/research-handoff-protocol.md` and `docs/discovery/d1-parallel-research-operating-model.md`. Provisional IDs for both batches are preserved separately below.

- Sources added: **8** — `SRC-0043`–`SRC-0050` (`SRC-0043` merges Batch A's D1-05-A-S01 with Batch B's D1-05-B-S04, the same PECE document; `SRC-0047` merges Batch A's D1-05-A-S05 with Batch B's D1-05-B-S05, the same municipal sports pages — no duplicate sources were created)
- Sources enriched: **0** — `SRC-0002` was checked for Culture/Tourism/Sports overlap (it is the general Plano de Desenvolvimento Social, already canonical from WU-D1-02/03/04) and found not to cover this domain's scope; the dedicated cultural strategy (PECE) is a genuinely distinct document, so a fresh source (`SRC-0043`) was created rather than enriching `SRC-0002`
- Evidence records added: **11** — `EVD-000052`–`EVD-000062`
- Problem records created: **0** — per the approved conservative decisions, cultural event discovery/fragmentation is deferred, administrative friction is downgraded to a validation question, accessibility remains a policy/evidence area, and sports has no evidenced digital problem
- Hypothesis records created: **0**

## Provisional → canonical mapping — Batch A

### Sources

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-05-A-S01 | `SRC-0043` | Added (PECE 2022-2030); merged with D1-05-B-S04 |
| D1-05-A-S02 | `SRC-0044` | Added (Évora 2027 programação/participação) |
| D1-05-A-S03 | `SRC-0045` | Added ("A Nossa Vez" regulamento) |
| D1-05-A-S04 | `SRC-0046` | Added (Município visitante/turismo) |
| D1-05-A-S05 | `SRC-0047` | Added (municipal sports/associativismo desportivo); merged with D1-05-B-S05 |

### Evidence

| Provisional | Canonical |
|---|---|
| D1-05-A-E01 | `EVD-000052` |
| D1-05-A-E02 | `EVD-000053` |
| D1-05-A-E03 | `EVD-000054` |
| D1-05-A-E04 | `EVD-000055` |
| D1-05-A-E05 | `EVD-000056` |
| D1-05-A-E06 | `EVD-000057` |

### Candidate problems (provisional, cross-referenced against Batch B)

| Provisional | Disposition |
|---|---|
| D1-05-A-P01 | Cultural activity discoverability/coordination/access — **DEFER**. Batch B (`EVD-000058`, `EVD-000061`) shows the municipality already has structured event-intake, and fragmentation across surfaces is plausible but not demonstrated as a user problem. No PRB created. |
| D1-05-A-P02 | Cultural/associative administrative and coordination friction — **DOWNGRADE to validation question**. Batch B (`EVD-000060`) confirms the Portal do Associativismo proposal is already materially implemented (Plataforma Évora Associativismo); current-workflow friction requires direct actor evidence, not yet collected. No PRB created. |
| D1-05-A-P03 | Cultural participation reaching all populations equally — **retain as policy/evidence area, not a standalone digital problem**. Requires D2/D5 evidence about lived barriers (cost, awareness, transport, accessibility, relevance, schedule, language, social exclusion). No PRB created. |

Findings not promoted to problems in Batch A: Tourism (no specific unmet digital need established; existing visitor-info surfaces substantial, `EVD-000056`); Sports (no sufficiently evidenced digital problem cluster, `EVD-000057`).

### Contradictions/tensions preserved (not artificially resolved)

1. Cultural supply is strong (`EVD-000052`) while policy still prioritises access/inclusion/communication (`EVD-000053`).
2. Évora 2027 creates new participation mechanisms (`EVD-000055`), so older coordination/access diagnoses required a current-state challenge — which Batch B provided.
3. Tourism information is already extensive (`EVD-000056`); more content is not automatically more value.
4. The cultural ecosystem is growing rapidly ahead of 2027, making information freshness important.
5. Sports has visible infrastructure/associations but weak evidence so far of a distinct digital pain point (`EVD-000057`, confirmed unresolved by `EVD-000062`).

These tensions are recorded here and in the affected `EVD-*` `notes` fields; they are not collapsed into a single narrative.

## Provisional → canonical mapping — Batch B

### Sources

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-05-B-S01 | `SRC-0048` | Added (Agenda do Município de Évora, current) |
| D1-05-B-S02 | `SRC-0049` | Added (Guia da Semana) |
| D1-05-B-S03 | `SRC-0050` | Added (Plataforma Évora Associativismo) |
| D1-05-B-S04 | `SRC-0043` | Merged into Batch A's D1-05-A-S01 (same PECE URL) — not a separate source |
| D1-05-B-S05 | `SRC-0047` | Merged into Batch A's D1-05-A-S05 (same municipal sports URLs) — not a separate source |

### Evidence

| Provisional | Canonical |
|---|---|
| D1-05-B-E01 | `EVD-000058` |
| D1-05-B-E02 | `EVD-000059` |
| D1-05-B-E03 | `EVD-000060` |
| D1-05-B-E04 | `EVD-000061` |
| D1-05-B-E05 | `EVD-000062` |

### Candidate problem decisions

- **Cultural event discovery / information fragmentation** — DEFER. Potential data-federation value, but no sufficient evidence of user pain yet (`EVD-000061`). No PRB created.
- **Cultural/associative administrative friction** — DOWNGRADE / reframed as a validation question. A dedicated platform now exists (`EVD-000060`), so current workflow friction needs direct actor evidence. No PRB created.
- **Cultural accessibility** — retained as a policy/evidence area, NOT yet a standalone digital problem. Structured accessibility metadata already exists in municipal event intake (`EVD-000059`). No PRB created.
- **Sports** — NO CANONICAL PROBLEM from D1 evidence so far (`EVD-000062`).

### Current-State Challenge result

"No events information infrastructure" — rejected (`EVD-000058`). "No associativism portal" — rejected (`EVD-000060`). "No accessibility metadata" — rejected for municipal agenda intake (`EVD-000059`). "Information is fragmented" — plausible, not established (`EVD-000061`). Sports digital problem — not found (`EVD-000062`).

## Zero canonical problems: rationale

No `PRB-*` record was created for this WU. Per the project owner's approved conservative decisions: cultural event discovery/fragmentation is deferred (data-federation potential without demonstrated user pain), cultural/associative administrative friction is downgraded to a validation question (an implemented platform exists; friction is unproven without direct actor evidence), accessibility remains a policy/evidence area rather than a standalone digital problem (structured metadata already exists institutionally), and sports has no canonical problem (no evidenced digital pain point across two batches). These are preserved as discoverable negative findings via `EVD-*` `notes` fields, `domain` tags, and this progress doc — not silently dropped, and not fabricated into a PRB solely to have "produced" one, per the task's explicit conservative-problem-creation instruction.

## Carried-forward questions (Batch B, unresolved — not answered, no `HYP-*` created)

1. Is municipal agenda data publicly reusable/machine-readable?
2. Does Évora 2027 expose structured event data that could federate with municipal data?
3. Are accessibility fields reliably populated and visible to users?
4. Do cultural associations experience friction inside the current Évora Associativismo workflow?
5. Is cross-calendar duplication a maintainer problem or a user problem?
6. What should remain after Évora 2027 ends — data, systems, identifiers, archives?

## Closing note (Batch B, carried forward verbatim)

"D2/D5 may be more valuable than further broad D1 institutional research in this track." This closing note directly informs this WU's institutional-saturation decision (see `docs/milestones/D1-WU05-closure.md`).

## Validator result

```text
node tools/validate-research.js
Validated 111 record(s): OK.
```

(92 records from WU-D1-01..04 + 8 new `SRC-*` + 11 new `EVD-*` + 0 new `PRB-*` = 111.)

## Files added/changed

- `research/sources/{SRC-0043,SRC-0044,SRC-0045,SRC-0046,SRC-0047,SRC-0048,SRC-0049,SRC-0050}.yaml` (added)
- `research/evidence/EVD-000052.yaml` … `EVD-000062.yaml` (added)
- `docs/data/source-registry.md` (updated: new `SRC-0043`–`SRC-0050` rows, WU-D1-05 verification note)
- `docs/milestones/D1-WU05-progress.md` (this file)
- `docs/milestones/D1-WU05-closure.md` (added)
- `.aiqt/state.json`, `.aiqt/runlog.jsonl` (WU005 selection + closure)

## Confirmation

- Additional substantive research performed during integration: **NO**
- New `PRB-*` created: **NO** (deferred/downgraded/no-problem per approved conclusions)
- New `HYP-*` created: **NO**
- Duplicate shared sources created for D1-05-B-S04/S05: **NO** — merged into `SRC-0043`/`SRC-0047`
- Speculative causal relationships encoded as fact: **NO**
- WU-D1-06 records integrated or started: **NO**
- WU-D1-05 marked `done` in AIQT: **YES** — see `docs/milestones/D1-WU05-closure.md`
