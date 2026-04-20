---
title: "List ABS File"
sidebar_position: 5
---


The **List ABS File** activity lists files in an Azure Blob Storage container.

## Configuring the List ABS File Activity

To configure the **List ABS File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Describe the purpose or function of this step. | Reads a file from S3 |
| ABS Connection | Required | Drag and drop a ABSConnection resource from the workspace. |  |
| ABS Auth Context | Optional | Authorization context to use for connecting to ABS. |  |
| Container Name | Optional | Name of the container where blobs are stored. (mapping supported) | my-data-bucket |
| Blob Path | Optional | Path inside the container to filter blobs. (mapping supported) | data/reports/2024/ |
| Prefix | Optional | Prefix to filter blobs (like a folder path). (mapping supported) | logs/ |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Sort By | Optional | Choose how to sort the results Options: Name, Size, Date Modified, Path. |  |
| Max Results | Optional | Maximum number of blobs to return. | 100 |
| Descending | Optional | Check to sort results in descending order. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Container Name | Optional | String | Container name. |  |
| Path | Optional | String | Path within the storage container. |  |
| Prefix | Optional | String | Filter prefix. | logs/ |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Blob Path | Optional | String | Path within the container where the listing operation was performed. |  |
| Files | Optional | Array | List of files and directories retrieved from the specified blob path. |  |
| Total Files | Optional | Number | Total number of blobs and folders listed. | 0 |
