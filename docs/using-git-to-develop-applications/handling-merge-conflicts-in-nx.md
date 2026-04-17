---
title: Handling Merge Conflicts in NX
description: >-
  NX does not support resolving merge conflicts directly inside the application.
  If a conflict happens while pulling or pushing changes, follow the steps below
  to handle it safely.
---


#### Conflict While Pulling (Uncommitted Local Changes)

·       Save your local changes temporarily (stash them).

·       Switch back to the main branch.

·       Delete your local copy of the branch that had conflicts.

·       Checkout a fresh copy of that branch from the remote repository.

·       Reapply your saved changes back on top of the new branch (If you have stash).

Example: You are working on Branch A, you stash your changes, delete your local Branch A, checkout to Branch A again from the remote repository, and then reapply your saved work.

#### Conflict While Pushing (Committed Work Needs to Be Saved)

·       Create a temporary branch from your current branch.

·       Push this temporary branch to the repository.

·       Go to your repository provider (like GitHub or GitLab).

·       Open a Pull Request (PR) from your temporary branch into the original branch.

·       Resolve the conflicts in the PR interface, commit the resolution, and merge the changes.

·       Back in NX, switch to the original branch and pull the latest updates.

Example: You are working on Branch B, you create Branch B-temp, push it, and then open a PR from Branch B-temp into Branch B. After resolving conflicts in the PR and merging, you come back to NX, switch to Branch B, and update it with the latest version.

#### Why This Approach Works

You never try to fix conflicts inside NX (since it’s not supported). Temporary branches and repository PRs handle the conflict resolution safely. Stashing changes and starting fresh ensures your local work isn’t lost. This keeps your branches clean, avoids errors inside NX, and ensures the main workflow continues smoothly.
