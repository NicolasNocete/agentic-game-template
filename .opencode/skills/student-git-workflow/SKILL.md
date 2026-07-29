---
name: student-git-workflow
description: Guide students through safe Git branches, commits, reviews, merges, and conflicts when they run /git or ask for version control help.
---

# Student Git Workflow

## Branches

Use short topic branches:

```text
feature/short-name
fix/short-name
asset/short-name
```

## Commits

Use focused messages:

```text
feat(player): add dash state
fix(hud): prevent score overlap
docs(gdd): define win condition
asset(audio): add jump sound
```

## Procedure

1. Inspect `git status` and the diff before acting.
2. Explain the next command and its effect.
3. Do not commit, merge, rebase, reset, or push without explicit approval.
4. Check that engine caches, builds, dependencies, and secrets are not staged.
5. For scene or prefab conflicts, ask the student to validate the merged result inside the engine.
