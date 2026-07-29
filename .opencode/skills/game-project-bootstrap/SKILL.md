---
name: game-project-bootstrap
description: Bootstrap a new Godot, Unity, or Phaser academic game project when the user runs /bootstrap or asks to initialize a game template.
---

# Game Project Bootstrap

## Goal

Turn a copy of this source template into one student project with exactly one engine profile.

## Procedure

1. Read `README.md` and inspect `profiles/`.
2. Accept only `godot`, `unity`, or `phaser`; ask if absent or ambiguous.
3. Stop if a project has already been initialized unless the user explicitly requests a migration.
4. Copy the contents of `shared/` into the repository root.
5. Ask for the exact engine version agreed by the course or team before copying files. For Phaser, also ask for the exact Node.js version. Do not initialize if a required version is unknown.
6. Copy the chosen profile's `game/`, `.gitignore`, `.gitattributes`, and engine guide into the generated project.
7. Complete `docs/project-manifest.md` with the selected engine, its exact version, and any runtime or tool version supplied by the student. Leave unrelated unknown fields blank.
8. Replace the generic engine guide with the selected profile's guide.
9. Keep `.opencode/` unchanged so all agentic tools remain available.
10. Remove source-only `shared/` and `profiles/` directories from the generated student project after successful initialization.
11. Tell the student how to run the project and which manifest fields still need completion.

## Safety

- Do not overwrite an existing `game/` directory without explicit approval.
- Do not install engines, packages, plugins, or assets automatically.
- Do not invent an engine version.
