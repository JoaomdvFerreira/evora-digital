# Research Workspace

This directory is reserved for structured Discovery records and research working material.

Do not treat narrative Markdown documents as the long-term database of research evidence.

## Expected evolution

At small scale, records may initially be maintained manually.

As D1/D2 grow, prefer machine-readable structured records such as:

```text
research/
  evidence/
    EVD-000001.yaml
  problems/
    PRB-0001.yaml
  hypotheses/
    HYP-0001.yaml
  sources/
    SRC-0001.yaml
```

The exact storage format is intentionally **not fixed during D0**.

A migration should occur when record volume or validation needs justify it.

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
