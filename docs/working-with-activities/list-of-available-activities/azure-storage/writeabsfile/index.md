---
title: "Write ABS File"
sidebar_position: 7
---


The **Write ABS File** activity writes data to a file in an Azure Blob Storage container.

## Configuring the Write ABS File Activity

To configure the **Write ABS File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Optional description about the work performed by this step. | Reads a file from S3 |
| ABS Connection | Required | Drag and drop a ABSConnection resource from the workspace. |  |
| Container Name | Optional | Name of the container where the blob will be stored. (mapping supported) | my-data-bucket |
| Blob Path | Optional | Path within the container for the blob. (mapping supported) | data/reports/2024/ |
| Blob Name | Optional | Name of the blob to be created or updated. (mapping supported) | report-2024.csv |
| Content Type | Optional | Format of the file content (CSV, JSON, XML, etc.) Options: CSV, JSON, XML, TEXT, BINARY. |  |
| ABS Auth Context | Optional | Authorization context to use for connecting to ABS. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Encryption Type | Optional | Select if the file should be encrypted with PGP or not Options: NONE, PGP. |  |
| Encryption Resource | Optional | Certificate resource used for encryption or decryption. |  |
| Create Container if Not Exists | Optional | Create the container if it does not already exist. |  |
| Overwrite if Blob Exists | Optional | Overwrite the existing blob if it already exists. |  |
| Append to Blob | Optional | Append content to the existing blob if it exists. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Container Name | Optional | String | Name of Azure Blob Storage container. |  |
| Blob Path | Optional | String | Path within the container where the blob will be stored. |  |
| Blob Name | Optional | String | Name of the blob to be created or updated. |  |
| Create Container | Optional | Boolean | Whether to create the container if it does not already exist. |  |
| Overwrite | Optional | Boolean | Whether to overwrite the blob if it already exists. |  |
| Append | Optional | Boolean | Whether to append the content to the existing blob if it exists. |  |
| Content | Optional | String | Content to be written into the blob. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content Length | Optional | Number | length of the content written | 0 |
| Blob Path | Optional | String | Path within the container where the blob is written to. |  |
| Blob Name | Optional | String | Name of the blob |  |
