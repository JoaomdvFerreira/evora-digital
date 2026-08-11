# Research Workspace

This directory holds structured Discovery records and research working material.

Do not treat narrative Markdown documents as the long-term database of research evidence.

## Layout

```text
research/
  sources/       canonical SRC-* records
  evidence/      canonical EVD-* records
  problems/      canonical PRB-* records
  hypotheses/    canonical HYP-* records
  assessments/   canonical ASM-* Problem Assessment records (D3, may be empty)
  examples/      synthetic fixtures only — never canonical research
  schemas/       lightweight schema/contract definitions used by the validator
```

The storage format, schemas, and validator (`tools/validate-research.js`) were established during WU-D1-01. See `docs/discovery/d1-recording-protocol.md` for the full recording protocol and `docs/discovery/research-handoff-protocol.md` for how externally performed research is integrated here.

As of WU014/WU-D3-01, `research/assessments/` holds `ASM-*` Problem Assessment records (`docs/models/assessment-model.md`) and starts empty — an empty directory is a valid state, since one active `ASM-*` per canonical active `PRB-*` is only created starting with the D3 three-problem pilot (`WU-D3-02`), not this foundation work unit. `EVD-*` records also gained an optional, lazily-populated `analysis` metadata block (`docs/discovery/d3-execution-protocol.md` §4); it is unpopulated on every existing canonical record as of WU014.

`tools/analyze-research.js` provides a deterministic, non-semantic analyzer over this corpus (counts, lineage counts, metadata completeness, state distributions — never inference, ranking, or automatic triage):

```bash
node tools/analyze-research.js --all
node tools/analyze-research.js --problem PRB-0007
node tools/analyze-research.js --gaps
```

`tools/test-analytical-foundation.js` exercises the `analysis`/`ASM-*` contracts and the analyzer against small, generated fixtures (never the canonical corpus); run it with `node tools/test-analytical-foundation.js`.

As of WU-D1-01, `research/sources/`, `research/evidence/`, `research/problems/`, and `research/hypotheses/` contain no records yet — only `research/examples/` contains synthetic fixtures used to prove the schemas and validator work. Canonical records are added once the first reviewed research handoff is integrated.

## Separation of planes

```text
Raw research material
        ↓
Evidence store
        ↓
Problem intelligence
       ↙ ↘
Opportunities  Verified data
                   ↓
            Public data layer
```

Raw research may contain material that must never be copied into a public data layer.

## Initial rule

Preserve provenance and minimize personal information from the first record onward, even before formal tooling is introduced.
