# WU-D1-01 Closure — Research Repository Infrastructure

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-10

## Objective

Establish the repository-level structured research record workflow — storage layout, schemas, lightweight validator, synthetic fixtures, and the research handoff protocol — so the repository is ready to receive the first externally reviewed research handoff. No substantive Évora research was performed.

## Infrastructure created

```text
research/
  sources/       canonical SRC-* records (empty; .gitkeep placeholder)
  evidence/      canonical EVD-* records (empty; .gitkeep placeholder)
  problems/      canonical PRB-* records (empty; .gitkeep placeholder)
  hypotheses/    canonical HYP-* records (empty; .gitkeep placeholder)
  examples/      synthetic fixtures (SRC-9001, EVD-900001, PRB-9001, HYP-9001)
  schemas/       source/evidence/problem/hypothesis schema definitions
tools/
  validate-research.js   zero-dependency record validator
```

## Structured record format

YAML, matching the existing model documents in `docs/models/`. See `docs/discovery/d1-recording-protocol.md`.

## Schemas created

`research/schemas/{source,evidence,problem,hypothesis}.schema.json` — a faithful transcription of the draft schemas in `docs/models/data-source-model.md`, `docs/models/evidence-model.md`, `docs/models/problem-model.md`, and `docs/models/hypothesis-model.md`. One documented clarification was added: `EVD-*` records gained an optional `source.source_id` field to allow linking to a `SRC-*` record (needed for broken-reference validation); no existing field was changed.

## Validation mechanism

`tools/validate-research.js` — a Node.js script with zero third-party dependencies (a minimal hand-written YAML-subset parser sufficient for these schemas). It detects duplicate IDs, malformed YAML, missing required fields, invalid enum/status values, ID-prefix/filename mismatches, and broken references (`EVD.source.source_id` → `SRC-*`, `PRB.evidence` → `EVD-*`, `HYP.problem` → `PRB-*`).

## Handoff protocol

`docs/discovery/research-handoff-protocol.md` defines how externally performed, reviewed research is handed to the repository agent, what a handoff may contain, the integration steps, how missing/ambiguous information is handled (`UNKNOWN` values, flagging rather than inventing), and what remains explicitly out of scope for the repository agent (problem prioritization, tractability judgments, product selection, Open API authorization).

## AIQT changes

- `aiqt update --from-file` recorded D1-relevant constraints, non-goals, and technology preferences (documentation/research-first, external-research operating model, YAML + Node validator).
- `aiqt plan --from-file` created milestone `M001` (D1 — Institutional & Data Source Mapping) with work units `WU001`–`WU007` (WU-D1-01 through WU-D1-07) and their sequencing dependencies.
- `aiqt next` selected `WU001` (WU-D1-01) and generated its agent packet.
- `aiqt checkpoint --from-file` recorded WU-D1-01 as `done` with passing validation/acceptance results, advancing `WU002`–`WU006` to `ready`.
- No D2, D3, delivery, or product/API milestones were created.

## Validation performed

- `node tools/validate-research.js` — 0 canonical records, exits 0 (OK).
- `node tools/validate-research.js --dir research/examples` — 4 fixture records, exits 0 (OK).
- Duplicate-ID detection and broken-reference detection (`EVD.source.source_id` → missing `SRC-*`) were verified against temporary scratch copies outside the repository; both were correctly reported as errors, then the scratch copies were discarded (not committed).
- All `research/schemas/*.schema.json` files validated as well-formed JSON.
- `aiqt status --json` confirms a valid project/state (`in_progress`, 1 milestone, 7 work units, `WU001` done).
- `git status` / `git diff` reviewed before commit; only the files listed above changed.

## Known limitations

- The validator's YAML support is a restricted subset (nested maps, scalars, block/inline lists of scalars) sufficient for the current schemas; it is not a general-purpose YAML parser.
- `research/sources/`, `research/evidence/`, `research/problems/`, and `research/hypotheses/` remain empty pending the first reviewed research handoff.

## Confirmation

- Substantive Évora research performed: **NO**
- D2 started: **NO**
- Civic product selected: **NO**
- Open API implementation authorized: **NO**

WU-D1-01 is closed. D1 remains open; WU-D1-02 through WU-D1-07 wait for the first reviewed research handoff.
