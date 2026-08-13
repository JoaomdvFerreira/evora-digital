# Research Explorer — RE-06 Local Explorer v1: Reconciled Scope

**Status:** scoped — ready to implement.
**Purpose:** final engineering scope for RE-06 only; this document does not start implementation.
**Canonical inputs:** roadmap, development contract, integral quality review, RE-05 results, current Explorer source/tests, and repository state at scope reconciliation.

## 1. Reconciled RE-06 objective

Close the five remaining, evidence-backed gaps in the existing static Explorer, then validate them in a real browser and representative local use to reach **RE-06 ENGINEERING COMPLETE**. **LOCAL EXPLORER v1 CLOSED** additionally requires the deferred consolidated Design/UX Review and disposition of any bounded v1 design changes it accepts. The product remains a repository-native, read-only, canonical-data-driven application: the browser consumes only the generated read model through `DataProvider`, needs no backend/authentication/database, and remains portable to local or static hosting. Graph remains supplementary to Records, Problem, and detail views.

## 2. Original-scope reconciliation

| Original RE-06 objective | Classification | Reconciliation |
|---|---|---|
| Ship the first complete, locally-run release | `REMAINS_IN_RE06` | The assembled application exists; engineering completion follows the five gaps and acceptance gate, while final Local-v1 closure also requires the separately deferred Design/UX Review. |
| Depend on RE-02 through RE-05 | `ALREADY_SATISFIED` | All prerequisite phases are closed; RE-05 measured the static architecture through 10,000 synthetic records and retained it. |
| Assemble Overview, Problems, Records, Graph, Search, Filters, Trace Evidence, Detail/Provenance | `ALREADY_SATISFIED` | These views and workflows are implemented and covered by the current application/test suite. RE-06 does not rebuild them. |
| Stable `npm run explorer` / `npm run explorer:build` local release | `REMAINS_IN_RE06` | Commands already exist; their engineering-release claim awaits bounded remediation and acceptance, while Local-v1 closure additionally awaits Design/UX Review disposition. |
| Demonstrate local usefulness in actual use | `SUPERSEDED_BY_CURRENT_IMPLEMENTATION` | Replace the vague standalone gate with the precise automated validation, bounded real-browser smoke, and representative local-use walkthrough in section 6. |
| Full suite, typecheck, production build, sustained local use | `SUPERSEDED_BY_CURRENT_IMPLEMENTATION` | Retained as outcomes, but made concrete in the section 6 acceptance gate. |
| YAML editing, admin UI, auth, database, AI relationships/scoring/inference | `NO_LONGER_JUSTIFIED` | These remain excluded by the development contract and product boundary; they are not work items for RE-06. |

No original objective requires `DEFER_TO_DESIGN_REVIEW` or `DEFER_TO_RE07`: those boundaries arise from later review and are recorded below.

## 3. Final implementation scope

### Slice A — Runtime contract and resilience

| Item | Local-v1 requirement and missing evidence | In scope | Explicitly out of scope | Completion evidence |
|---|---|---|---|---|
| REIQ-002 | A static JSON/read-model delivery failure must not cause consumer crashes or quiet omissions. Current provider guards are only array checks/casts. | Add minimum payload-shape guards at `DataProvider` for safely consumed manifest, index, detail, and edge fields; reject malformed payloads as `DataLoadError(kind: "malformed")`; test malformed payloads. | A second browser corpus validator; schema/semantic validation; global referential checks; count reconciliation beyond what safe consumption requires. | Focused provider tests prove malformed fetchable payloads fail through the normal error path and valid real-corpus payloads still load. |
| REIQ-003 | Transient local/static-asset failures need a direct recovery path. Current errors have no user retry; Problem projection is deliberately wholesale/fail-closed. | Define and implement explicit per-view retry/recovery for manifest, index, detail, edge, and child-detail failures; test recovery and `useGraphData` failure composition. Retain fail-closed Problem projection by default. | Partial Problem rendering or presenting incomplete evidence as complete; cache/state libraries, router, backend, or a changed canonical contract. | Tests show a failed provider request can be retried successfully and one missing Problem child fails the projection clearly rather than silently degrading it. |

### Slice B — Contract alignment and interaction correctness

| Item | Local-v1 requirement and missing evidence | In scope | Explicitly out of scope | Completion evidence |
|---|---|---|---|---|
| REIQ-007 | The declared generated read-model contract must match the implementation that the UI safely consumes. The authoritative spec uses stale snake_case metadata and omits edge identity; ADR D5 misstates metadata placement. | Reconcile the read-model specification and ADR wording to current v1 output/required fields, including manifest metadata and edge `id`/`ordinal`; preserve correctly dated historical phase measurements. | Changing generated shape merely to fit stale prose; adapter/schema/canonical-research changes. | Documentation review against `scripts/read-model.js`, provider types, and generated baseline finds one consistent v1 contract. |
| REIQ-008 | Search announcements must not imply the 12 displayed suggestions are all matches. Current Graph search slices before announcing. | Compute total matches before display cap and announce total plus displayed count (or clearly state the first 12 are shown); add capped/uncapped tests. | Server search, search indexing, or changes to the 12-result display policy absent evidence. | Tests cover zero, uncapped, and capped match announcements. |
| REIQ-009 | Browser Back must represent semantic navigation, not identical URL rewrites. Current setters always write history. | Suppress semantically identical `pushState`/`replaceState` writes; test no-op actions and Back-stack behavior. | React Router, a state manager, or changes to meaningful history semantics. | URL-state/integration tests show no duplicate entry for identical state while real transitions remain navigable. |

There is no Slice C: RE-05 found no performance/architecture gap, and all original feature assembly is already satisfied.

## 4. Audit finding mapping

| Finding | Final disposition |
|---|---|
| REIQ-002 | Slice A — minimum DataProvider runtime payload guards. |
| REIQ-003 | Slice A — explicit retry/recovery; Problem stays fail-closed. |
| REIQ-007 | Slice B — authoritative contract/documentation alignment. |
| REIQ-008 | Slice B — accurate Graph search total/displayed announcement. |
| REIQ-009 | Slice B — suppress semantically identical history writes. |

Each remaining REIQ finding appears exactly once. Pre-RE-06 remediation is confirmed in commit `8460272` (`REIQ-001`, `REIQ-004`, `REIQ-005`, and `REIQ-006`); it is not reopened by RE-06.

## 5. Out-of-scope boundary

- Completed pre-RE-06 findings: REIQ-001, REIQ-004, REIQ-005, and REIQ-006, unless implementation inspection later proves a regression.
- Design/UX Review: the deferred consolidated review of typography, density, visual hierarchy, Graph layout perception, reciprocal-arrow/label legibility, long-content presentation, responsive aesthetics, and first-impression polish. It is outside Slices A and B and does not automatically expand RE-06 implementation scope. Its findings must be triaged; only bounded changes explicitly accepted as required for v1 become closure work through a separate reconciliation.
- RE-07/public deployment: public hosting, privacy/content-publication review, licensing/publication gate, and deployment operations. Local availability does not assert that generated canonical detail data is public-safe.
- Architecture expansion: backend, database, authentication, router, state manager, virtualization, server search, AI features, new schema concepts, or research workflow features.
- Canonical research, schemas, and generated read-model shape/content.

## 6. RE-06 engineering-completion gate

After both implementation slices, run proportional engineering validation: canonical validation, real-corpus generated-read-model regeneration/integrity confirmation, applicable adapter and Explorer tests, typecheck, and production build. No new permanent E2E dependency is required by default.

Then perform one bounded real-browser smoke pass, in a local dev server and production preview as relevant:

1. Root and non-root `/open-evora/` loading, deep-link refresh, and lazy Graph resources.
2. Back/Forward across Records → Problem → Graph, including stale/malformed IDs.
3. Keyboard entry/focus, errors and recovery, skip link, titles, and announcements.
4. Narrow viewport and 200% zoom across primary views and the Graph HTML alternative.
5. Sigma/WebGL success and failure, with canvas/HTML parity.
6. Full-corpus Graph with filters and reciprocal directed relationships.

Finish with a short representative local-use walkthrough of Records, a Problem trace, and a Graph exploration. Record pass/fail evidence and any defects separately; do not turn this gate into a visual Design Review.

`RE-06 ENGINEERING COMPLETE` only when:

1. Slice A and Slice B are implemented with their stated tests passing.
2. REIQ-002, REIQ-003, REIQ-007, REIQ-008, and REIQ-009 are each closed exactly once, and the four completed pre-RE-06 findings have not been reopened.
3. The canonical baseline remains valid (currently 244 records, 376 edges, 0 dangling references) and generated-read-model consumption remains DataProvider-bound.
4. The full proportional engineering validation and all six real-browser smoke scenarios pass.
5. The representative local-use walkthrough establishes the existing tool is usable for daily local research.

## 7. Local Explorer v1 closure criteria

`LOCAL EXPLORER v1 CLOSED` only when `RE-06 ENGINEERING COMPLETE` is true and:

1. The deferred consolidated Design/UX Review has occurred and its findings have been triaged.
2. Only the bounded design changes explicitly accepted as required for v1 have been completed and verified; unaccepted or future enhancements remain outside RE-06.
3. RE-07/public deployment remains separate and is neither started nor required for Local Explorer v1.
4. No architecture-expansion, dependency-expansion, canonical-research, schema, or generated-contract change has been smuggled into the work.

The implementation-start decision is `GO_RE06` when this scope remains true; otherwise revise this document with new repository evidence before expanding scope.
