---
title: "ABS File Info"
sidebar_position: 2
---


The **ABS File Info** activity retrieves metadata information about a file in Azure Blob Storage.

## Configuring the ABS File Info Activity

To configure the **ABS File Info** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| ABS Connection | Required | Drag and drop an ABS Connection resource from the workspace. |  |
| Select ABS Context | Optional | Select an ABS or SFTP authentication context. |  |
| Container Name | Optional | Container name. | my-data-bucket |
| Blob Path | Optional | Blob path within the container. | data/reports/2024/ |
| Blob Name | Optional | Blob name. | report-2024.csv |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Container Name | Optional | String | Container name. |  |
| Path | Optional | String | Path within the storage container. |  |
| Blob Name | Optional | String | Blob name. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Exists | Optional | Boolean | Whether the resource exists. |  |
| Info | Optional | Object | Resource metadata. |  |
