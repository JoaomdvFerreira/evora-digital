# D1 Structured Recording Protocol

**Version:** 0.1
**Status:** Baselined for WU-D1-01

## Purpose

D1 must produce reusable structured research records, not only narrative summaries.

This protocol defines the minimum repository behavior established during WU-D1-01, and the storage/validation conventions all later D1 work units must follow.

## Repository layout

```text
research/
  sources/       canonical SRC-* records
  evidence/      canonical EVD-* records
  problems/      canonical PRB-* records
  hypotheses/    canonical HYP-* records
  examples/      synthetic fixtures only — never canonical research
  schemas/       lightweight schema/contract definitions used by the validator
```

No database or application was created solely for D1.

## Format

YAML is the record format, matching the existing model documents (`docs/models/*.md`), because records are human-reviewable, diff-friendly, and easy to validate.

## Schema fidelity

The schemas under `research/schemas/` are a direct, faithful transcription of the draft schemas in:

- `docs/models/data-source-model.md` (`SRC-*`)
- `docs/models/evidence-model.md` (`EVD-*`)
- `docs/models/problem-model.md` (`PRB-*`)
- `docs/models/hypothesis-model.md` (`HYP-*`)

One clarification was added, documented here rather than silently:

- `EVD-*` records gained an optional `source.source_id` field (an `SRC-*` reference) so evidence can link to a source record, not only to a free-text `source_reference`. This does not change any existing field and only adds an optional reference needed for broken-reference validation described in `docs/discovery/d1-recording-protocol.md` and implemented by `tools/validate-research.js`.

No other field was added, renamed, or removed.

## Source, evidence, problem, hypothesis records

Field-level requirements are defined in `research/schemas/*.schema.json` and enforced by `tools/validate-research.js`. See the corresponding model document for the meaning of each field. In summary:

- a `SRC-*` record represents a source or source family and must not be duplicated just because multiple evidence items were extracted from it;
- an `EVD-*` record represents one material observation and should link to a `SRC-*` record where possible;
- a `PRB-*` record should be created only when multiple observations, or a sufficiently strong authoritative source, justify representing a distinct problem, and must not contain a proposed solution;
- a `HYP-*` record describes a possible intervention separately from the problem it links to, and remains rare during D1.

## Validation

`tools/validate-research.js` is the lightweight validator established for D1. It has zero third-party dependencies and runs on the Node.js runtime already present in this environment.

It detects at least:

- duplicate IDs;
- malformed YAML;
- missing required fields;
- invalid enum/status values;
- incorrect ID prefixes (filename vs. record ID vs. containing directory);
- `EVD-*` records referencing a non-existent `SRC-*` record;
- `HYP-*` records referencing a non-existent `PRB-*` record;
- `PRB-*` records referencing a non-existent `EVD-*` record.

Run it with:

```text
node tools/validate-research.js
```

## Provenance

Every evidence record must trace back to a source. Where a web page/document is not safely reusable, store metadata/reference rather than copying the complete material into the repository.

## Licensing

`public: true` is not equivalent to reusable. Unknown reuse rights remain explicitly `unknown`/`UNKNOWN`.

Third-party data is not placed under the repository's Apache-2.0 or CC BY 4.0 licensing (see `LICENSES.md`) merely because a source has been referenced or catalogued.

## Freshness

At minimum, sources track `last_checked`, `last_source_update` (if known), `update_frequency` (if known), and a freshness `status`, using `UNKNOWN`/`unknown` where not established.

## Research journal

Large chronological research logs are not created by default. The durable research output is the structured record set plus concise Work Unit closure notes. A temporary scratch file, if necessary, must be removed before closure or clearly marked non-authoritative.

## Fixtures

`research/examples/` contains a small number of synthetic, clearly non-canonical records used only to prove the schemas and validator work. They are not research findings and must never be read as evidence about Évora.
