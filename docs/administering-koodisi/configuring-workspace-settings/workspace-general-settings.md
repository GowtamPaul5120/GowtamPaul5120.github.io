---
title: "Workspace General Settings"
sidebar_position: 1
---


The Workspace General Settings section enables you to:

- [Make the workspace you are in your default](workspace-general-settings.md#workspace-settings)
- [Set the workspace as private or public](workspace-general-settings.md#set-a-workspace-as-private-or-public)
- [Manage workspace teams and team members](workspace-general-settings.md#manage-workspace-teams-and-team-members)
- [Manage deployment approvers](workspace-general-settings.md#manage-deployment-approvers)

## Setting a Workspace as Your Default <a href="#workspace-settings" id="workspace-settings"></a>

It's a good idea to set a default workspace, so you can quickly resume work upon signing in.&#x20;

To make a workspace your default, go to Workspace Settings and turn on **Set as default workspace**.

## Setting a Workspace as Private or Public&#x20;

:::info
Only administrators can enable private workspaces and manage workspace team members.
:::

When a workspace is private, it is accessible only to organization administrators, who have complete access to it, and workspace members, who have specific permissions granted by the administrator.&#x20;

If a workspace is public, it is accessible to anyone with appropriate permissions.&#x20;

By default, workspaces are public. To make a workspace private:

1. Go to Workspace Settings and toggle the **Private** switch on.&#x20;
2. Review the warning message that appears and click **Confirm**.\
   The toggle is set to Private, and the Collaboration tab appears. Use it to manage teams and users who must have access to the workspace. &#x20;

## **Managing Workspace Teams and Team Members**

You can add team members only to a private workspace. Therefore, you can see the Collaboration tab only when you make a workspace private. Use this tab to manage the teams and users who can access the private workspace.

To manage teams and team members who can work with a workspace, click the **Collaboration** tab.

### Managing Workspace Team Members

In the Collaboration tab, the contents of the Members subtab is displayed by default. Use this subtab to add or remove workspace users. Click the **Teams** subtab to display its contents if required.

The Collaboration > Members subtab displays all the team members currently associated with a workspace. When a workspace is initially set to private, only the workspace owner (you) will be listed in the Members tab.

#### Adding Team Members to a Workspace

To add team members to a workspace:

1. Click **Add Members**. \
   The Add Members page appears.
2. Search and select the users that you want to add to the team.
3. Use the Member Permissions section to assign permissions to team members. These permissions are organized by permission types, such as Approval, Global Variables, and so on. Click each permission type to assign all related permissions to team members, or select the check box individually against each permission to assign it to team members.\
   \
   For example, you can select the **Approval** box to grant approval-related permissions to members of a workspace. Alternatively, you can grant members specific permissions, such as the ability to list, add, and update approvers, but not delete them.

:::info
You must assign team members at least one permission before you can save your changes.
:::

4. Click **Save**.\
   Your team updates are saved, and the Collaboration tab reappears.&#x20;

#### Modifying Team Member Permissions

To modify a team member's permissions on a workspace:

1. Click the **Edit** icon next to their name.\
   The Edit \<Name of Team Member> page appears.
2. Use the checkboxes to select or deselect permissions as needed.
3. Click **Update**.

#### Removing Team Members from a Workspace

To remove a team member from a workspace, click the **Remove** icon adjacent to that team member's name. Click **OK** to confirm.

### Managing Workspace Teams

The Collaboration > **Teams** subtab displays all the teams currently associated with a workspace.&#x20;

#### Adding Teams to a Workspace

To add a team to your workspace:

1. In the Teams subtab, click **Add Team**. \
   The Add Teams page appears.
2. Search and select the teams that you want to add to the team.
3. Use the Team Permissions section to assign permissions to the team. These permissions are organized by permission types, such as Approval, Global Variables, and so on. Click each permission type to assign all related permissions to the team, or select the check box individually against each permission to assign it to the selected teams.\
   \
   For example, you can select the **Approval** box to grant approval-related permissions to a team. Alternatively, you can grant the team specific permissions, such as the ability to list, add, and update approvers, but not delete them.

:::info
You must assign a team at least one permission before you can save your changes.
:::

4. Click **Save**.\
   Your team updates are saved, and the Collaboration tab reappears.&#x20;

#### Modifying Team Permissions

To modify a team's permissions on a workspace:

1. Click the **Edit** icon next to the team's name.\
   The Edit \<Name of Team> page appears.
2. Use the checkboxes to select or deselect permissions as needed.
3. Click **Update**.

#### Removing a Team from a Workspace

To remove a team from a workspace, click the **Remove** icon adjacent to that team's name. Click **Delete Team** to confirm.

## **Managing Deployment Approvers**

Deployment approvers, if configured, review and approve--or reject--deployments whenever a workflow in the workspace is promoted to a higher environment.

For example, if you are satisfied with the way your workflow behaves and feel that it's ready for production, you must promote the workflow to the Production environment. It's typically a good idea to set up one or more deployment approvers to ensure that everything is in order.

:::info
Deployment approvers must be part of your team in the workspace. This also means that you can only add deployment approvers in private workspaces.
:::

### Adding Deployment Approvers

To add a deployment approver:

1. Click **Manage Approvers** in the Workspace General Settings page.\
   The Manage Approvers side panel appears.
2. Use the **Add Approvers** field to search and add team members in your workspace who must have the ability to review and approve deployments.
3. Click **Save**.&#x20;

### Removing Deployment Approvers

To remove a team member from the list of deployment approvers:&#x20;

1. Click **Manage Approvers** in the Workspace General Settings page.\
   The Manage Approvers side panel appears.
2. Click the **Remove** icon adjacent to the team member whom you want to remove from the list of deployment approvers.
3. Click **Confirm**.\
   The approver is removed from the list, and the Manage Approvers page reappears.
4. Click **Save**.
