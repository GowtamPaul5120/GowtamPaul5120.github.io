---
title: "Git Branching Policy"
---


### Table of Contents

1. Overview
2. Benefits
3. Step-by-Step Guide
4. Troubleshooting & FAQs

---

### Overview

The **Git Branching Policy** allows your organization to establish clear naming rules for code branches directly within Koodisi. By using this feature, you can easily create correctly formatted branches without needing to memorize complex naming conventions or use the command line.

#### Key Concepts

| Term                      | What it means                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Organization Policies** | Global rules set by your admin that apply to every application in your workspace.                         |
| **Branch Type**           | The category or intent of the work you are doing (e.g., Feature, Bug, Hotfix).                            |
| **Branch Naming Pattern** | A specific prefix required for a branch type (e.g., `feat/` for a feature).                               |
| **Version Control Panel** | The menu on the right side of the Application screen where you manage your incoming and outgoing changes. |

---

### Benefits

Here is how the **Git Branching Policy** improves your workflow:

- **Create Branches Safely**: Instead of guessing what to name your branch, you can select the correct type from a simple dropdown menu.
- **Stay Organized**: Ensure that all branches across your team follow the exact same naming structure, making them easy to sort and identify.
- **Prevent Errors**: Save time by letting the UI automatically enforce the required prefix (e.g., `bug/`) before the branch is even created, preventing accidental mistakes.

---

### Step-by-Step Guide

#### Task 1: Setting up Branch Naming Patterns (For Administrators)

**Goal**: Define the branching rules for your entire organization.

**What you need**:

- You must have Organization Administrator permissions.

**Steps**:

1. Navigate to **Settings** from the main left-hand sidebar.
2. Under the **Organization** section, click on **Policies**.
3. Select the **Git Policies** tab at the top of the page.
4. Ensure the toggle switch for **Branch Naming Patterns** is turned **On** (Blue).
5. Review the existing patterns in the table. To add a new one, click **Add custom pattern**.
6. Enter the **Pattern** name (e.g., `Feature`) and the **Prefix** (e.g., `feat/`).
7. Click the save icon to confirm your changes.

**Result**: You have successfully enforced standardized branch prefixes across all applications! ✨

---

#### Task 2: Creating a New Branch (For Developers)

**Goal**: Create a new working branch that complies with your organization's naming rules.

**What you need**:

- You must be inside an Application.
- Version Control must be connected to a remote repository.

**Steps**:

1. Click the **Version Control** icon (the branch node symbol) in the top right header of your application.
2. Select the **Branches** tab in the side panel.
3. Next to the **Local** branches section, click the **+ (Plus)** icon to open the Create Branch menu.
4. In the Create Branch menu, fill out the following:
   - **Branch Type**: Click the dropdown and select the type of work you are doing (e.g., `feature`, `Bug`).
   - **Branch Name**: Enter a short, descriptive name for your work (e.g., `login-page`).
5. Notice the **Preview** field at the bottom. It will automatically combine your selection into the final branch name (e.g., `feat/login-page`).
6. Ensure **Checkout branch** is checked, then click **Create**.

**Result**: You have successfully created and switched to a properly formatted branch! 🚀

---

### Troubleshooting & FAQs

#### Common Issues

**Problem: I cannot find the Version Control icon or panel.**

- _Solution_: Ensure you are inside an Application view, not the global settings. If the icon is greyed out, navigate to **Settings > Workspace > Git Settings** and confirm your application is connected to a remote repository.

**Problem: The "Branch Type" dropdown is missing when I try to create a branch.**

- _Solution_: Your Organization Administrator has turned off the Branch Naming Patterns policy, or no patterns have been created yet. You can type any branch name you want in the plain text box, or contact your admin to enable the policies in **Settings > Organization > Policies**.

**Problem: I cannot delete or change the prefix (e.g., `feat/`) in the Create Branch menu.**

- _Solution_: This is intentional. The platform enforces the exact prefixes chosen by your organization. If you need a different prefix, ask your Administrator to add a new "Branch Naming Pattern".

#### Frequently Asked Questions

**Q: Can I turn off branch naming rules for just my specific application?**\
A: No. Branch Naming Patterns are an **Organization-level** policy, which means they apply globally to all workspaces and applications within the organization.

**Q: What happens if I create a branch using my computer's terminal (CLI) instead of the UI?**\
A: Koodisi's UI makes it easy to follow the rules, but it does not completely lock down your terminal. If you use the command line to create a poorly named branch and push it, your external provider (like GitHub or Azure DevOps) may reject it if they also have branch protection rules enabled. It is always safest to use the Create Branch menu in the UI.
