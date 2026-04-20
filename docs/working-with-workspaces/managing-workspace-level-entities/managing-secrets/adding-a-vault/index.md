---
title: "Adding a Vault"
sidebar_position: 1
---


To add a vault in a workspace:

1. Navigate to the workspace in which you want to add the vault. Go to the **Settings** page.
2. Click **Vaults** under Workspace Settings. \
   The Secret Manager page appears.
3. Click **Add Vault**.\
   The Add Vault side panel appears.
4. Enter a **Name** for the vault and select the **Environment** in which the vault must be available.
5. Enter the **Vault URL**. This is the URL of the endpoint that applications or services must use to communicate with the vault.
6. Enter the **Tenant ID**. This is the unique identifier of your organization.
7. Enter the **Client ID** and **Client Secret**. This is the ID and password associated with the application that shall send the request.
8. Click **Create**. \
   The application now validates the details you entered and creates the vault if the data you provided is accurate. If not, the application displays an error message. Review the details you entered and resubmit.

After the vault is created, the vault details and permissions appear in the **Secret Manager** tab, and you can use the vault in workflows to automatically log in and manage data from configured endpoints.
