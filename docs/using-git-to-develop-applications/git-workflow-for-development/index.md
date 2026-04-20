---
title: "Git Workflow for Development"
description: >-
  This guide explains how to use Git effectively within NX when working with
  flows and subflows. Following these guidelines will help you and your team
  collaborate smoothly, avoid merge conflicts, and k
---

### 1. Key Concepts

· Main Flow

This is the primary development line. It should always be in a stable state and serve as the “source of truth” for everyone. → Branch name: feature/main-flow

· Subflows

These represent independent workstreams for different parts of the main flow. Each subflow is developed in its own branch. → Example branches:

· feature/subflowA

· feature/subflowB

· feature/subflowC

### 2. Recommended Workflow

#### Step 1: Start with the Main Flow

Before you begin work, make sure your main flow branch is updated with the latest changes. Think of this as refreshing your workspace so you’re always starting from the clean, current version.

#### Step 2: Create Subflow Branches

For each sub-task or feature, create a separate subflow branch from the main flow.

· Example: one branch for Subflow A, one for Subflow B, and one for Subflow C.

· This ensures each piece of work is isolated, making collaboration easier.

#### Step 3: Work on Each Subflow Independently

Inside each subflow branch:

· Add or update workflows, schemas, or resources as needed.

· Save your changes often with clear notes describing what you did.

· Example: “Added approval logic to Subflow A.”

#### Step 4: Keep Subflows in Sync

From time to time, bring in the latest updates from the main flow into your subflow.

· This prevents your branch from drifting too far from the main flow.

· Fixing small differences early is much easier than resolving large conflicts later.

#### Step 5: Merge Back into the Main Flow

(Not recommended but can be done using the repository provider and raising a PR)

Once your subflow is complete and tested:

· Combine (merge) it back into the main flow.

· This ensures everyone benefits from your work and the main flow remains the single, up-to-date version.

· Do this for Subflow A, Subflow B, Subflow C, etc.

#### Step 6: Delete Finished Subflows

After a subflow is successfully merged:

· Delete the subflow branch.

· This keeps the workspace clean and avoids confusion about which branches are still active.

<img src={require('../../../assets/images/image.png').default} />

### 3. Best Practices to Avoid Merge Conflicts

· Always branch from the main flow, not from another subflow.

· Sync often: regularly update your subflow with the latest main flow changes.

· Keep your updates small and frequent so they are easier to understand and integrate.

· One subflow = one feature/task → keeps branches focused and manageable.

· Test before merging to ensure your changes don’t break the main flow.

· Delete branches after merging so only active work remains visible.

### 4. Why This Approach Prevents Merge Conflicts

· Each person works on their own subflow, avoiding overlap.

· Frequent syncing prevents “big bang” merges that are messy to resolve.

· The main flow stays stable and conflict-free.

· History remains clean, making it easy to track what changed and why.

By following this branching model, you’ll ensure smooth collaboration, cleaner merges, and minimal conflict resolution effort. ✅
