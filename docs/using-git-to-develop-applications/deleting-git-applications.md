# Deleting Git Applications

The steps involved and implications of deleting Git applications can vary depending on whether the application belongs to a single-module or multi-module repository.&#x20;

- In single-module applications, deletion removes the application only from the workspace.&#x20;
- In multi-module repositories, deletion can impact the entire repository, potentially removing tracked files and affecting other linked applications. Users are given two options: **Remove** (non-destructive) and **Delete** (destructive). Therefore, understanding the repository structure is essential before proceeding.
- There's no Remove option available to single-module repositories because there are no repository-level dependencies between applications.

## **Deleting Single-Module Applications**

To delete a single-module application:

1. Locate and right-click on the single-module application in your workspace.
2. Select **Delete**.\
   A warning message appears.
3. Confirm the deletion by entering the name of the application in the space provided.

Note that the application is removed only from the workspace, and not from the Git repository, untill you commit your changes. For example, deleting “App-One” in a single-module setup won’t affect the Git repository or other applications—it’s a local-only operation. This means that despite having deleted the application from your environment, you can clone the same application from your remote repository.

## Deleting Multi-Module Applications

To delete a multi-module application:

1. Locate and right-click on the multi-module application in your workspace.
2. Choose between **Remove** (non-destructive) or **Delete** (removes and commits file deletion). See [#what-happens-when-you-remove-an-application-instead-of-deleting-it](deleting-git-applications.md#what-happens-when-you-remove-an-application-instead-of-deleting-it "mention"), below, for more information.
3. Confirm your action as instructed by the warning message that appears.

:::info
Deleting “App-Two” from a shared repo also deletes tracked files, affecting “App-One” if they share paths. Use with caution.
:::

## What happens when you remove an application instead of deleting it?

When you remove an application instead of deleting it from a multi-module repository, the application is only detached from your workspace—it is not deleted from the remote Git repository.

Specifically:

- The files remain intact in the Git repository.
- No Git commits are made.
- Other applications in the repository remain unaffected.
- It’s a non-destructive action, useful if you simply want to clean up your workspace without altering source control.

This is especially important in multi-module repositories where deleting an application could impact other applications. Removing is a safer option when you don’t want to risk deleting tracked content.

## **Deleting Git Application: Tips and Considerations**

- Use Remove to safely take an app out of the workspace.
- Use Delete only if you want to commit file removals to Git.
- Check whether your repo is single or multi-module.
- Deleting in multi-module setups can impact other applications.
- Always review dependencies before deleting tracked applications.
