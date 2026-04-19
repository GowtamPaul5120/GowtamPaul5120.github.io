---
title: "Using Git with Applications"
sidebar_position: 6
---


This topic offers guidance on how you can perform key Git-related tasks while working with applications in Koodisi.

:::info
When you create a Git repository for your Koodisi applications, we recommend you don't add a readme to it automatically. However, if you plan to use an existing repository that already has a readme, you can do so.
:::

## The Version Control Section

The Version Control section helps you track, manage, and collaborate on changes to your code over time by integrating Git features directly into your workspace—so you can easily switch branches, sync with remote repositories, and organize your work without using the command line.

This section offers the following key controls:

- **Master (Branch Selector)**:\
  Lets you view and switch between local and remote branches, or create/manage branches. See [#the-branches-tab](using-git-with-applications.md#the-branches-tab "mention") for more information.
- **Pull**:\
  Downloads and integrates changes from the remote repository into your current local branch.
- **Push**:\
  Uploads your local commits to the corresponding branch in the remote repository.
- **Fetch**:\
  Retrieves updates from the remote repository without changing your local branches.
- **Stash**:\
  Temporarily saves your local changes so you can switch branches or pull without committing. See [#stashing-changes](using-git-with-applications.md#stashing-changes "mention") for more details.
- **Fetch and Prune**:\
  Fetches updates and removes remote-tracking branches that no longer exist on the remote. See [#fetching-and-pruning-remote-repository-details-in-koodisi](using-git-with-applications.md#fetching-and-pruning-remote-repository-details-in-koodisi "mention") for more information.
- **Refresh**:\
  Updates the Git panel to reflect the latest local and remote repository states.

### Updating Git Credentials

Since multiple users access the same application, it's crucial to allow them to **switch to their individual Git credentials** at the start of their work session.&#x20;

To update the Git credentials that you want to use to work with a specific application:&#x20;

1. Click the **Credentials** icon adjacent to the Version Control section.\
   The Update Git Credentials modal appears.
2. Update your credential details as required and click **Update**.\
   For guidance on working with credentials, see [managing-credentials.md](/docs/administering-koodisi/configuring-source-control-settings/managing-credentials).

## The Changes Tab

After you create your Git-enabled application, you can work with it as usual, adding workflows, schemas, and resources, as required.&#x20;

Every change you make, however, gets listed in the Changes tab of the Git side panel.&#x20;

1. Once you're ready to push your changes into your Git repository, click the **Changes** tab in the Git side panel to review the updates you've made.
2. Select the changes that you want to push and click the **Stage All Changes** (**+)** icon adjacent to the Changes node to stage them before they're committed. To stage all your changes, select the Changes node and click **Stage All Changes**.
3. Once you stage your changes, you can see the Commit Changes drop-down button appear. Click the arrow icon adjacent to the **Commit Changes** button to specify whether you want to **Commit** or **Commit and Push** to the master all the changes you selected in the previous step.
4. Enter a **Message** and click **Commit** or **Commit and Push**, as required.\
   If you click Commit and Push, after the operation is complete, you can navigate to your Git repository and see the changes you pushed.

## The Branches Tab

Use the **Branches** tab in the Git side panel to view your remote branches and manage your local branches.

### Creating a Local Branch

Creating local branches in Git lets you isolate features, fixes, or experiments without affecting the main codebase. It supports parallel development, safer testing, cleaner history, and easier collaboration through pull requests, making your workflow more organized and efficient.

To create a new local branch:

1. Click the **Create Branch** (+) icon.\
   The Create Branch modal appears.
2. Enter a **Name** for the branch.
3. Select the **Checkout branch** check box if you intend to use the new branch for your work. \
   \
   Checking out a branch in Git switches your working directory to that branch, letting you view, edit, and test its specific version of the code. It’s essential for working on different features, reviewing others’ work, or returning to a stable state—all without affecting other branches.

:::info
When you create a new local branch, its base will be the branch you’re currently on. So, if you want your new branch to be based on `master`, you should first switch to the `master` branch, then create and check out the new branch. This way, the new branch will inherit `master` as its starting point.
:::

:::info
Ensure that your branch name contains only alphanumeric characters with optional hyphens and slashes.
:::

If you checked out the branch, you can see the name of the branch in the Version Control section at the top of the Git side panel. You can now make changes to your checked out branch as required.

### Checking out a Branch

To check out a branch, right-click the branch and select **Check Out** from the options that appear.

If you've made changes to your checked-out branch, you can't switch to another until you've committed, stashed, or discarded those changes. This prevents losing your work or creating conflicts.

## The Stash Tab

A stash is like a temporary shelf for your work. It saves changes you've made in your working directory without committing them, so you can come back to them later. You stash your changes when you've made changes to the checked-out branch and need to switch to another branch without checking in your current changes.

To stash your changes:

1. Make changes to your working directory.
2. Navigate to the **Stash** tab and click **New Stash**.
3. Provide a **Stash Name**. Press **\<Enter>**.\
   The application now creates a new stash using the name you provided. This stash contains all the uncommitted changes in your working directory and staging area at the time it was created.

Here's another way to stash your changes:

1. Use the **Changes** tab to select all the changes that you want to stash.
2. Stage your changes by clicking the **Stage all changes** (+) icon.\
   Your changes are now ready to be committed or stashed as required.
3. Click the **Ellipsis** icon adjacent to your checked-out branch in the Version Control section and select **Stash**.
4. Enter a name for your stash in the **Stash Name** text field that appears and press **\<Enter>**.

Your changes are now stashed, and you can view them in the Stash tab. Also, you can now safely switch to other branches as needed without losing any of your changes.

### Applying Stashes

Whenever you're ready to resume work on your stashed changes, navigate to the **Stash** tab, click the **Ellipsis** icon adjacent to your stash, and select **Apply**. This creates a copy of your stashed changes and pushes them back to Stage.&#x20;

Instead of applying the stash, you can also choose to **Apply and Delete**. This moves your stashed changes to Stage and deletes your stash.

You can now choose to discard or commit your staged items as needed. Committing your changes pushes the changes to your working branch in Git. If needed, you can now update the master branch with your changes by creating a pull request.

### Fetching and Pruning Remote Repository Details in Koodisi

When you create a pull request, the Git application merges the changes made and deletes the branch. Use the **Fetch and Prune** feature to update the list of remote branches in Koodisi.

To fetch the latest information from the remote repository and prune the details displayed in the Git side panel, click the **Ellipsis** icon adjacent to the currently checked-out branch in the Version Control section and select **Fetch and Prune**. The application now fetches the latest details from the remote server and updates the Branches > Remote section with the latest set of branches available.
