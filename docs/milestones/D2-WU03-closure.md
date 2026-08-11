# WU-D2-03 Closure — Informal Caregiver Support Journey Signals

**Status:** DONE (research-content acceptance criteria satisfied; AIQT status transition blocked — see §AIQT below)
**Milestone:** D2 — Public Signal Discovery
**Date:** 2026-08-11

## Objective

Integrate the reviewed, project-owner-approved D2-B (caregiver support journey) Round A public-signal research handoff for `PRB-0007`, per `.aiqt/state.json` `WU010`'s objective.

## Batch integrated

**Round A** (`D2-B-caregiver-journey-round-A-research-handoff.md`): 0 new `SRC-*` (targeted reuse of `SRC-0030`, `SRC-0031`, `SRC-0038`), 4 new `EVD-*` (`EVD-000089`–`EVD-000092`), refinement to `PRB-0007`.

## Provisional → canonical mapping

| Handoff signal | Disposition | Canonical record |
|---|---|---|
| D2-B-SIG-01 (133-caregiver sample) | New EVD; same SRC-0030 lineage as EVD-000034/EVD-000044 | `EVD-000089` |
| D2-B-SIG-02 (prioritised needs: care/respite/financial/psychological) | New EVD | `EVD-000090` |
| D2-B-SIG-03 (bureaucracy / rights-understanding friction) | New EVD | `EVD-000091` |
| D2-B-SIG-04 (caregiver-proposed multi-channel/simplified information) | New EVD | `EVD-000092` |
| D2-B-SIG-05 (262 formally-recognised caregivers, Jan 2026) | Reused — already `EVD-000044`/`SRC-0031`; no new record | — |
| D2-B-SIG-06 (Cantinho do Cuidador entry point) | Reused — already `EVD-000045`/`SRC-0038`; no new record | — |
| D2-B-SIG-07 (2026 active caregiver service delivery) | Reused — supports existing `EVD-000045` current-state framing; no new record | — |

## Reused vs new records

- **Reused sources:** `SRC-0030` (Plano Concelhio dos Cuidadores Informais — notes extended, not duplicated), `SRC-0031` (CLASE/Rede Social), `SRC-0038` (ULSAC responses). No new `SRC-*` created.
- **New evidence:** `EVD-000089`, `EVD-000090`, `EVD-000091`, `EVD-000092` — all sourced to `SRC-0030`, explicitly marked as one lineage with `EVD-000034`/`EVD-000044`, not independent corroboration.
- **Reused evidence (unchanged):** `EVD-000034`, `EVD-000036`, `EVD-000044`, `EVD-000045` — no duplication of the 262-caregiver count, CLASE/Rede Social existence, or Cantinho do Cuidador/UCC/VIVAMENTE existence, per the WU010 reuse constraints.

## Source-lineage / sample limitations

The 133-caregiver questionnaire and focus-group material are a distinct evidence component of the same `Plano Concelhio dos Cuidadores Informais` PDF as `EVD-000034` (68-caregiver/89-cared-for study) and `EVD-000044` (262-caregiver formal-status count, 2026-2027 implementation). All four new `EVD-*` records are explicitly recorded as one source lineage, not independent corroborating sources. Representativeness is `LIMITED` — recruitment through caregiver-support organisations, anonymous/confidential participation, geographically concentrated sample — and is preserved verbatim in `EVD-000089`'s notes and `PRB-0007`'s updated `possible_root_causes`.

## PRB-0007 changes

**Strengthened:** direct caregiver-derived confirmation of bureaucracy/rights-navigation friction (`EVD-000091`); caregiver-originated demand for centralised, simplified, multi-channel information (`EVD-000092`).

**Refined/constrained:** navigation/information is not the whole caregiver problem — reported needs prioritise support in care (~40.8%), respite (~40.0%), financial support (~36.8%) and psychological support (~31.2%) above navigation-adjacent needs (`EVD-000090`); these are recorded as major, often lower-digital-leverage needs and are **not** converted into a digital-navigation problem.

**Not established:** prevalence of navigation problems across all caregivers; whether the planned 2026-2027 manual/systematisation is already delivered/effective; whether caregivers are still routinely redirected between Município/ULSAC/Segurança Social/IPSS; duplicate paperwork/storytelling frequency; urban/rural barrier differences.

`PRB-0007.evidence_status` remains `corroborated`. `PRB-0007.validation_status` remains `unvalidated` — no public-signal evidence alone moved it toward `validated`, per `docs/discovery/d2-execution-protocol.md` §3. No new `PRB-*` or `HYP-*` created; no caregiver app/portal hypothesis created.

## Current-state / existing-solution conclusions

Confirmed (via reused `EVD-000044`/`EVD-000045`, not duplicated): the Município reported 262 formally-recognised caregivers (Jan 2026); Cantinho do Cuidador already provides a free, no-registration, multi-professional entry point; caregiver-oriented services (UCC, Cantinho do Cuidador, VIVAMENTE) remain actively delivered into 2026. Évora is **not** framed as having no caregiver support — the residual, unresolved question is whether the current implementation and its 2026-2027 systematisation actions actually remove the navigation/bureaucracy friction identified by caregivers themselves, which is deferred to D5.

## Public-signal scarcity treatment

Per the D2-B bias boundary, open-web individual caregiver signals were sparse relative to transport/waste. This is recorded as a methodological/channel-privacy limitation (caregiving is privacy-sensitive and underrepresented in open public discussion), **not** interpreted as evidence that `PRB-0007` is weak or absent.

## D5 questions carried forward

1. When a person first becomes a caregiver, where do they actually start?
2. Do caregivers know that Cantinho do Cuidador exists and what it can resolve?
3. Are rights/eligibility rules understandable without professional help?
4. Do people repeat the same story/documents across organisations?
5. Is there a clear status/next-step view across support processes?
6. Has the 2026-2027 plan materially reduced bureaucracy/navigation friction?
7. Are the planned manual/flowcharts available, current and used?
8. What barriers differ between urban and more peripheral/rural contexts?
9. How do transport/parking needs affect access to support?
10. Which needs are fundamentally capacity/respite/financial rather than informational?

## Saturation decision

Per `docs/discovery/d2-execution-protocol.md` §15, broad open-web public-signal discovery for the D2-B caregiver track is treated as sufficiently saturated for D2. The next high-value evidence route is D5 stakeholder validation and a current-implementation check of the 2026-2027 plan, not further broad public-web searching. This is not a reason to keep `WU010` open, per the approved instruction.

## Validation result

```text
node tools/validate-research.js
Validated 169 record(s): OK.
```

- 165 (post-`WU009`) + 4 new `EVD-*` = 169.
- `PRB-*`: still 9 records; `PRB-0007` updated in place, not replaced.
- `HYP-*`: still 0 records.
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- `git status` reviewed before commit; only the intended `research/` and `docs/` files changed.

## AIQT status

`aiqt status --json` fails with a pre-existing, WU010-unrelated state-integrity error that predates this integration (confirmed via `git log -- .aiqt/state.json`; the offending values were already committed in `7dc7150`/prior commits):

```text
Invalid state.json: projectStatus: Invalid enum value. Expected 'draft' | 'planned' | 'in_progress' | 'blocked' | 'review' | 'done', received 'active';
checkpoints.8.finalWorkUnitStatus: Invalid enum value. Expected 'done' | 'needs_review', received 'in_progress'
```

The CLI reports this as `agentCanFix: false` with `suggestedAction: "Restore a valid .aiqt/state.json"`. This is a schema-version drift between the installed `aiqt` CLI (`0.45.0`) and the values previously written to `.aiqt/state.json` (top-level `projectStatus: "active"` and historical checkpoint `C009.finalWorkUnitStatus: "in_progress"`), not something introduced by this work unit. No AIQT-mediated `WU010` selection/checkpoint could be performed as a result. `WU010`'s canonical `status` field remains `ready` in `.aiqt/state.json`; a human/CLI-repaired pass is needed to formally transition it to `done` once the tool/state mismatch is resolved. All research-content acceptance criteria (validator pass, faithful integration of the approved handoff) are otherwise satisfied.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Any `PRB-*` marked `validated`: **NO**
- New external research performed by the repository agent: **NO** — integration only
- `WU-D2-03` research-content acceptance criteria satisfied: **YES**
- `WU-D2-03` formally closed in AIQT: **NO — blocked by pre-existing `.aiqt/state.json` schema-validity error, unrelated to this work unit**
- `M002` milestone closed: **NO**

## Next

`WU-D2-04` (Urban Hygiene) and `WU-D2-05` (Housing + Employment) continue independently, pending Round A cross-track synthesis. `WU-D2-06` (Consolidation & D2 Closure) will resolve remaining cross-track items. Separately, `.aiqt/state.json` needs a human or tooling-side repair (or a compatible CLI version) before further AIQT-mediated work-unit transitions can run cleanly.
