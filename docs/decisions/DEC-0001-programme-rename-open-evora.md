# DEC-0001 — Programme renamed to Open Évora

**ID:** DEC-0001
**Date:** 2026-08-12
**Status:** Accepted

## Context

The programme has operated under the working name "Évora Digital" since the D0 baseline (2026-08-10). "Open Évora" has since been accepted as the programme's working name.

This is a naming decision only. It does not change scope, mission, priorities, licensing policy, or the status of the "Évora Open API" infrastructure hypothesis, which is a separate, independently named concept unaffected by this decision.

## Decision

The live/current programme identity is renamed from "Évora Digital" to "Open Évora", with technical project slug `open-evora`.

This rename:

- updates the programme name in current canonical documentation (README, charter, roadmap, licensing policy, and other live governance/model docs) and in `.aiqt/project.json`;
- does not claim exclusivity over the word "Évora" or over open civic-data work in Évora by other parties;
- does not imply any branding, logo, domain, or visual identity — the Charter's non-goal on premature branding (§6) is clarified to refer specifically to product/visual branding, not to this programme-level working name;
- does not touch the "Évora Open API" hypothesis name, which remains a distinct, unapproved infrastructure hypothesis;
- does not alter historical records: milestone closure/progress documents, research/evidence records, provenance logs, and the D0 baseline manifest continue to refer to "Évora Digital" and to the `evora-digital` GitHub repository name as originally authored, since they document what was true at the time.

## Alternatives considered

- **Keep "Évora Digital":** rejected — a different working name has already been accepted for the programme.
- **Retroactively rewrite historical/evidence records:** rejected — would misrepresent provenance and violate the evidence-locked nature of `research/` and milestone closure records.
- **Rename the "Évora Open API" hypothesis too:** rejected — it is an independent, distinctly-scoped hypothesis name, not derived from the programme name; renaming it is out of scope for this decision.

## Consequences

- Live canonical docs and `.aiqt/project.json` now read "Open Évora" / `open-evora`.
- The GitHub repository itself remains named `evora-digital` pending a manual rename step (not performed as part of this change — see below).
- Future decision records, models, and canonical docs should use "Open Évora" going forward.

## Evidence / references

- README.md, docs/discovery/charter.md, docs/discovery/roadmap.md, LICENSES.md, docs/models/assessment-model.md, docs/models/evidence-model.md, docs/discovery/research-ethics.md, docs/discovery/d3-execution-protocol.md, docs/data/source-registry.md — updated 2026-08-12.
- `.aiqt/project.json` `project.name` updated from `evora-digital` to `open-evora` — 2026-08-12.
- `.aiqt/state.json` confirms D0–D4 closed, M005 (D5 Stakeholder Validation) active, WU022 in progress — unaffected by this decision.

## Manual follow-up (not performed here)

The GitHub repository is still named `evora-digital`. Renaming the actual GitHub repository to `open-evora` is a manual step for a repository owner/admin and is out of scope for this change.
