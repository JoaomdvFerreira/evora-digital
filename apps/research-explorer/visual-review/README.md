# Visual Review

Screenshots in this directory are committed review evidence of the **current rendered implementation**, captured from the real running app. They are not design authority.

Canonical precedence (highest first):

1. [`docs/design/research-explorer/design-system.md`](../../../docs/design/research-explorer/design-system.md)
2. approved rendered Design System
3. approved prototypes/design references
4. canonical 360px golden references
5. current implementation/screenshots (this directory)

## Conventions

- Fixed filenames per surface: `desktop-1280.png`, `compact-360.png`, `boundary-767.png`, `boundary-768.png`.
- Refreshing a surface **overwrites** its existing files — do not accumulate dated screenshots. Git history is the historical record.
- Ad-hoc screenshots must not be added to the repository root.
- Capture widths are currently 1280, 360, 767, and 768px.
- These images support review; they do not replace rendered browser/Playwright inspection when verifying a visual change.

## Playwright usage

Playwright is a verification gate, not a development loop: don't run it after every edit; refresh screenshots only at explicit checkpoints, before PR/closure, or when rendering is materially affected, and only for the affected surfaces. See [visual-implementation-contract.md](../../../docs/design/research-explorer/visual-implementation-contract.md#playwright--visual-review-usage) for the full policy.

## Surfaces

- `overview/` — captured
- `records/` — captured
- `record-detail/` — captured
- `problem-view/` — not yet captured
- `graph/` — not yet captured
