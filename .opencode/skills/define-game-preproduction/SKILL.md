---
name: define-game-preproduction
description: Define project, GDD, vertical-slice scope, roadmap, and risks before development when the user runs /preproduction or asks to document a game's preproduction.
---

# Define Game Preproduction

## Goal

Turn an initial game idea into a small, documented, and feasible vertical slice before implementation begins.

## Preconditions

1. Read `AGENTS.md`, `docs/project-manifest.md`, `docs/references.md` when it exists, and the existing documents in `docs/`.
2. If `docs/project-manifest.md` does not exist, explain that the student must first run `/bootstrap` in a project copy. Do not create a game or choose an engine.
3. Preserve confirmed content already present in project documents. Only replace it with the student's explicit approval.

## Interview

Ask only for information that is missing. Group questions into short blocks and wait for answers before continuing.

1. Project: name, technical owner, agreed engine and exact version, language, target platform, and how the project will be run if known.
2. Vision: concept, target player, genre, intended experience, core loop, and differentiator.
3. Vertical slice: player promise, minimal demonstration, goal and ending, included elements, excluded elements, success criterion, and cut order.
4. Design: primary mechanic, supporting mechanics, controls, feedback, art direction, and audio direction.
5. Production: first preproduction milestone, known risks, likelihood, impact, and mitigation.

Never invent an engine version, runtime command, license, asset source, technical decision, or gameplay rule. Write `Pendiente de definir` where the answer is unknown.

Use the references as optional guidance: apply the GDD template proportionally to the slice, treat the roadmap as revisable, and adapt the risk and decision-record structures to game production. Do not require a framework or source that is not useful for the project.

## Documents to update

After the student confirms the gathered information, update only the relevant sections in:

- `docs/project-manifest.md`
- `docs/vision.md`
- `docs/gdd.md`
- `docs/vertical-slice-contract.md`
- `docs/production/roadmap.md`
- `docs/production/risks.md`

Add an entry to `docs/decisions.md` only for a consequential decision, such as the selected engine, scope constraint, or a discarded alternative. Include context, consequence, and status.

## Completion

1. Summarize the documented decisions, explicit exclusions, pending questions, and greatest risk in Spanish.
2. Set the manifest milestone to `Preproduccion` unless the documented evidence supports a later milestone.
3. Recommend `/spec` for a mechanic that still needs acceptance criteria, or `/implement` only when the vertical-slice contract has a concrete minimum demonstration.
