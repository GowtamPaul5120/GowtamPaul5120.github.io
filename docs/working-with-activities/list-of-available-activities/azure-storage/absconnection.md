---
title: "ABS Connection"
---


The **ABS Connection** resource defines the connection configuration for Azure Blob Storage.

:::info
Before using any Azure Blob Storage activities, configure an ABS Connection resource in your workspace.
:::

## Configuring the ABS Connection Activity

To configure the **ABS Connection** activity, fill in the required fields in the activity panel.

### Configuration

| Field        | Required | Description                                           | Example              |
| ------------ | -------- | ----------------------------------------------------- | -------------------- |
| Name         | Required | Specify the name for this activity.                   | MyActivity           |
| Description  | Optional | Specify the description for this activity.            | Reads a file from S3 |
| Auth Type    | Required | Authentication method Options: SAS Token, Shared Key. |                      |
| Account Name | Required | Azure Storage account name.                           |                      |
| Account Key  | Required | Azure Storage account access key.                     |                      |
| SAS Token    | Required | SAS token for Azure Storage authentication.           |                      |
