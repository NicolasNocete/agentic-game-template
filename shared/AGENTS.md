# Game Project Rules

## Source of truth

Read `docs/project-manifest.md`, the relevant specification, and the task before implementation.

## Implementation

- Prefer small, focused changes.
- Keep gameplay values configurable when tuning is expected.
- Avoid duplicate logic and unnecessary patterns.
- Do not optimize without measuring a real issue.
- Explain implementation choices and manual verification in Spanish.

## Game design

- Preserve the core loop in `docs/vertical-slice-contract.md`.
- Give clear feedback for player actions, success, failure, and state changes.
- Do not add systems outside scope without recording a cut or tradeoff.

## Verification

- Run the project after relevant changes.
- Check the affected player flow manually.
- Record known limitations and playtest findings.

## Git

- Keep `main` runnable.
- Use short topic branches.
- Do not commit builds, caches, generated files, secrets, or unlicensed assets.
- Ask before committing or changing Git history.
