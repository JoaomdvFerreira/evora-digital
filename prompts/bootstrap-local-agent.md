# Local Agent Bootstrap Prompt — Évora Digital

Use this prompt with Claude Code or Codex after the D0 baseline files have been copied into a new local repository.

---

You are bootstrapping the **Évora Digital** repository from an already-prepared D0 Discovery Foundation baseline.

## Objective

Create a clean, minimal repository baseline, initialize AIQT for this project, validate the supplied documentation, and finish only the remaining D0 bootstrap work.

Do **not** redesign the programme, invent product requirements, select a civic application, or begin implementation of the Évora Open API.

## Context discipline

The repository documentation is the source of truth. Read only what is necessary for the current step.

Start with:

1. `README.md`
2. `docs/milestones/D0-discovery-foundation.md`
3. `docs/discovery/charter.md`
4. `docs/discovery/roadmap.md`

Read other D0 documents only when required to validate a referenced contract or resolve an inconsistency.

Do not perform a broad repository investigation: this is a new repository and the baseline is intentional.

## Tasks

1. Confirm the supplied baseline structure is present and the working tree contains only the expected bootstrap files.
2. Initialize Git if required.
3. Add an appropriate `.gitignore` for the repository without introducing an application stack.
4. Initialize AIQT using the currently supported AIQT project workflow and keep AIQT state/artifacts consistent with the repository's governance.
5. Review the D0 documentation for:
   - contradictions;
   - duplicate or conflicting terminology;
   - broken internal references;
   - inconsistent D0/D1/D2 status;
   - accidental implication that a civic product or public API has already been approved.
6. Make only small documentation corrections needed to achieve consistency.
7. Verify that the D1 and D2 execution protocols are sufficient to begin bounded research.
8. Update `docs/milestones/D0-discovery-foundation.md` with actual bootstrap/AIQT status.
9. If all D0 exit criteria are satisfied, add a concise D0 closure record under `docs/milestones/` and mark D0 closed. Otherwise leave D0 open and list only concrete blockers.
10. Run relevant lightweight validation for the files/configuration you changed. Do not introduce a large test suite or application scaffolding solely for D0.
11. Commit the baseline in logical commit(s).

## Constraints

- Problem-first; software remains optional.
- Value for Évora has priority over AIQT dogfood.
- No product selection.
- No API implementation.
- No cloud, frontend, database, or application framework selection.
- No speculative architecture.
- No mass social-media collection.
- Preserve the separation between Evidence Base and any future Public Data Layer.
- Preserve provenance, licensing, freshness, privacy, and sustainability requirements.
- Prefer minimal changes over expanding the documentation set.
- Do not reread files unnecessarily.
- Keep output concise and evidence-backed.

## Completion report

Return:

1. D0 status: `CLOSED` or `OPEN`.
2. Files changed.
3. AIQT initialization result.
4. Documentation inconsistencies found and fixes made.
5. Validation performed and result.
6. Remaining blockers, if any.
7. Commit hash(es).
8. Recommended next action: normally D1 Institutional & Data Source Mapping, with D2 allowed to begin in parallel only if D0 is closed.
