---
title: Configuring an ABS (Azure Blob Storage) Resource
---


To add an ABS (Azure Blob Storage) connection resource:

1. Navigate to the **Resources** folder of the application for which you want to configure the ABS connection resource. Right-click and select **Add Resource**.\
   \
   The Configure New Resource modal appears.<br/>
2. Select **ABS Connection** as the connection type and click **Save**.\
   \
   Your resource is now created, and you can configure it as appropriate.<br/>
3. To configure a resource, click on it.

Here's a table that lists out details associated with each of the fields in the ABS Connection Configuration panel.

| Field        | Required                                        | Content Type | Description                                                                                                                        | Example                                                                                                                                                            |
| ------------ | ----------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name         | Required                                        | String       | A user-friendly name for this connection. This name will be used within the application to identify this specific storage account. | ABS Storage Account 1                                                                                                                                              |
| Description  | Optional                                        | String       | An optional field to provide a more detailed explanation or purpose of this ABS connection.                                        | Connection to the primary storage account for customer data uploads.                                                                                               |
| Account Name | Required                                        | String       | The name of your Azure Blob Storage account.                                                                                       | myuniquestorageaccountname                                                                                                                                         |
| Auth Type    | Required                                        | String       | Specifies the authentication method used to access the ABS Storage account. You have two options, SAS Token and Shared Key.        | Shared Key                                                                                                                                                         |
| Account Key  | Required if Shared Key is the auth type chosen. | String       | Authenticates using the storage account name and its access keys.                                                                  | abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ==                                                                                                   |
| SAS Token    | Required if SAS Token is the auth type chosen.  | String       | Authenticates using a Shared Access Signature (SAS) token.                                                                         | sv=2023-01-03\&ss=bfqt\&srt=sco\&sp=rwdlacupiytfx\&se=2025-04-11T04:44:00Z\&st=2025-04-10T04:44:00Z\&spr=https\&sig=aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789ABCDEFG%3D |
