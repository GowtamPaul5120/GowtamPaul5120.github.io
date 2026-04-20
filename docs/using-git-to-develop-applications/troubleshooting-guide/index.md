---
title: "Troubleshooting Guide"
sidebar_position: 10
description: >-
  This guide will help you resolve common Git issues while working with
  applications connected through Isomorphic Git.
---


### 1. **Error: Cannot find `HEAD`**

**Why this happens:**

- Git was not initialized properly in your local application.
- The Git metadata may have become corrupted.
- The repository setup is incomplete.

**How to fix:**

1. Take a **backup** of your application (especially if your latest commits are not pushed yet).
2. Clear the Git datastore from the application’s Git settings.
3. **Re-clone** the application from the remote repository.
4. If the re-clone is missing your recent local changes, **import the backup** you created earlier.

### 2. **Error: Git Token Expired (Clone / Push / Pull / Fetch fails)**

**Why this happens:**

- Your authentication token from the Git provider (e.g., GitHub, Azure DevOps) has expired.

**How to fix:**

1. Generate a **new token** from your Git provider (GitHub, Azure DevOps, etc.).
2. Open **Credential Manager** (or the credential store you’re using).
3. Find the saved credential for Git and **update it** with your new token.

### 3. **Error: Unable to Clone the Application**

**Why this happens:**

- Invalid repository URL or credentials.
- Corrupted local datastore.

**How to fix:**

1. Clear your Git datastore from the application settings.
2. Double-check that your **repository URL** is correct.
3. Revalidate your **credentials or token**.
4. Try cloning again.

### 4. **Error: Push Failed (Merge Conflict / Non-Fast-Forward Issue)**

**Why this happens:**

- Your local branch has diverged from the remote branch (ahead/behind).
- Git cannot perform a fast-forward merge automatically.

**How to fix:**

1. Create a **new branch** from your current branch.
2. Push this new branch to the remote repository.
3. Open your Git provider’s UI (GitHub, Azure DevOps, etc.).
4. Raise a **Pull Request (PR)** from the new branch into your current branch.
5. Resolve merge conflicts directly in the Git provider’s UI.
6. Once merged, **pull the updated branch** locally to sync your application.

### 5. **When to Clone vs. Create a New Application**

- ✅ **Clone**: If you already have an existing repository/branch with commits that you need to work on.
- ✅ **Create New Application**: If no repository exists yet, or you are starting from scratch.

### 6. **Switching to a Specific Branch (Not the Default Branch)**

**Steps:**

1. Take a **backup** of your application.
2. Create a **new application** and connect it to Git using the repository link.
3. Run a **git fetch** to get all branches.
4. Checkout the branch you want to work on:
5. Import your backup application into this branch if needed.

:::info
**Tip:** Always keep a backup of your application before performing Git operations, especially when resolving conflicts or switching branches
:::
