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
  examples/      synthetic fixtures only — never canonical research
  schemas/       lightweight schema/contract definitions used by the validator
```

The storage format, schemas, and validator (`tools/validate-research.js`) were established during WU-D1-01. See `docs/discovery/d1-recording-protocol.md` for the full recording protocol and `docs/discovery/research-handoff-protocol.md` for how externally performed research is integrated here.

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
