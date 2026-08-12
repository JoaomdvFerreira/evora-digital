# Research Explorer — Dependency & Risk Review (RE-00)

**Relates to:** `docs/architecture/ADR-001-research-explorer-architecture.md`

## Dependency review

The repository is currently zero-dependency by explicit design (`.aiqt/project.json`). The Explorer is the first component expected to deviate from that.

| Dependency (planned, RE-01 onward) | Why needed | Scope of exposure |
|---|---|---|
| A frontend build tool (e.g. Vite) | Named requirement for RE-02's application shell and RE-04's Graphology/Sigma.js integration; no existing tooling in the repo can serve/build a SPA | `apps/research-explorer/` only |
| A UI component approach (e.g. React) | Application shell, filters, search, URL-addressable state (RE-02) | `apps/research-explorer/` only |
| `graphology` | Named in the roadmap (RE-04) as the graph data-structure library | `apps/research-explorer/` only |
| `sigma` (stable release) | Named in the roadmap (RE-04) as the graph renderer | `apps/research-explorer/` only |

No dependency is added to the repository root, to `tools/`, or to `research/`. The RE-01 adapter script (`apps/research-explorer/scripts/build-data.js`, not yet written) is planned to run on plain Node, requiring `tools/validate-research.js` by relative path — **zero new dependencies for the data-build step itself**, confirmed by the RE-00 spike (`apps/research-explorer/spike/build-graph.js`), which runs today with no `node_modules` at all.

Risk: dependency drift/staleness within `apps/research-explorer/` over time (a normal frontend-maintenance risk, not specific to this project) — mitigated by keeping the app's dependency surface intentionally small (build tool + UI library + two graph libraries) and by the read-only, no-auth, no-backend boundary (RE-06) removing entire classes of dependency risk (no server framework, no database driver, no auth library).

## Risk review

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Generated read model silently drifts from canonical data (becomes a second source of truth) | Low if D5's rebuild-on-every-run discipline holds | High (defeats the entire "no second source of truth" objective) | Generated files are gitignored and stamped with `generated_at`/corpus counts (manifest); build fails closed on any validator error (read-model spec "fails closed" guarantee); never hand-edited |
| Hand-rolled YAML parser or validator's reference-check loops don't scale to ~10,000 records | Unknown — untested past ~230 real records (confirmed by RE-00 repo survey) | Medium (slow local builds, not a correctness issue) | RE-05 explicitly benchmarks this before RE-06 release; decision gate defers to chunking before any backend, per roadmap |
| A future schema's reference field doesn't follow the existing `references` array convention (e.g. an ad hoc reference embedded without a schema declaration) | Low — the validator itself already depends on this convention for its own integrity checks, so any new schema is already incentivized to declare it correctly | Medium (a silent gap in the Explorer's graph, not a validator failure) | RE-01 acceptance check: every schema file's declared references must produce zero dangling edges (already proven true today: 0/331) |
| Scope creep — Explorer starts influencing canonical schema design for UI convenience | Medium (natural pull once a nice-looking graph view exists) | High (violates Track C's explicit ordering: schema changes first, Explorer adapts after) | Stated explicitly as a boundary in Track C and restated here; RE-01's adapter has no schema-writing capability by construction (read-only file access) |
| Personal-data or non-public content ends up rendered in a future public deployment (RE-07) | Low today (EVD schema already tracks `personal_data.present`/`retained`) | High if it occurs | RE-07 is explicitly gated on a privacy/licence/accessibility/content review before any public deployment is considered; RE-00–RE-06 are local-only, no such review is due yet |
| Adding a build toolchain invites accidental coupling back into root tooling (e.g. `tools/*.js` starts requiring an `apps/research-explorer` package) | Low | Medium (breaks the zero-dependency guarantee for root tooling) | Directionality is one-way by construction: the spike/adapter requires `tools/validate-research.js`, never the reverse; no change to `tools/*.js` is needed or planned |

## Conclusion

No risk identified blocks starting RE-01. The two risks worth carrying forward as active watch items into RE-01/RE-05 are: (1) validator/parser performance at scale (measurement plan already exists — see benchmark plan), and (2) schema-convention discipline for future record types (already testable today via the "zero dangling edges" check, which RE-01 should keep as an explicit build assertion).
