# Agentic Game Template

## Purpose

This repository is a source template for academic game projects. It supports Godot, Unity, and Phaser vertical slices.

## Student-first rules

- Explain relevant technical decisions before making non-trivial changes.
- Prefer the simplest solution that satisfies the documented player experience.
- Do not add packages, plugins, third-party assets, or online services without explaining their purpose, license, and impact.
- Do not invent run commands, engine versions, or project facts. Record missing information instead.
- Keep `main` runnable. Do not commit builds, caches, dependencies, generated files, or secrets.
- Specs are optional for trivial changes. Create one when a new mechanic, cross-cutting system, or irreversible decision needs clarification.
- Run a focused manual verification after changing gameplay, UI, input, scene, prefab, or asset behavior.
- The student remains responsible for validating code, sources, assets, and AI-assisted work.

## Project workflow

1. Read `docs/project-manifest.md`, the relevant spec, and the task before implementation.
2. Use `/spec` when the expected behavior is unclear.
3. Use `/implement` to make a small technical plan before non-trivial edits.
4. Use `/playtest` to validate player understanding.
5. Use `/check` before a milestone or submission.

## Template maintenance

- Keep engine profiles small and document any manual editor setup required before they run.
- Keep commands in English and their guidance in Spanish.
- Keep skills procedural and use references for detailed material.
- Do not duplicate commands as Spanish aliases.
