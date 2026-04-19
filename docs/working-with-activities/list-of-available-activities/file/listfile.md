---
title: "List File"
sidebar_position: 4
---


The **List File** activity lists files in a specified directory on the local file system.

## Configuring the List File Activity

To configure the **List File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique identifier for this activity step | MyActivity |
| Description | Optional | Optional description of the activity's purpose | Reads a file from S3 |
| Resource | Required | Drag and drop a ABSConnection resource from the workspace. |  |
| Directory | Optional | Base directory to list files from | my-data-bucket |
| File Path | Optional | Optional path to a specific file to retrieve | data/reports/2024/ |
| Prefix | Optional | Filter files by name prefix (e.g., log_, report-) | logs/ |
| Max Results | Optional | Limit the number of files returned (default: 100) | 100 |
| Sort By | Optional | Choose how to sort the results Options: Name, Size, Date modified, Path. |  |
| Recursive | Optional | Enable to scan through all subdirectories |  |
| Descending | Optional | Sort results in descending order |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| File Path | Optional | String | Full path to a specific file or directory in the storage container. | data/reports/2024/ |
| Prefix | Optional | String | Filter files by a specific name prefix (e.g., log_, report-). | logs/ |
| Max Result | Optional | Number | Maximum number of results to return. Defaults to 100 if not specified. |  |
| Recursive | Optional | Boolean | Enable recursive search through subdirectories. |  |
| Descending | Optional | Boolean | If true, sort the file list in descending order. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Path | Optional | String |  |  |
| Files | Optional | Array |  |  |
| Total Files | Optional | Number |  | 0 |
