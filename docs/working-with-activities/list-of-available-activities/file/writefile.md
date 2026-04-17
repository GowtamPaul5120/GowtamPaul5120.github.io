---
title: "Write File"
---


The **Write File** activity writes data to a file on the local file system.

## Configuring the Write File Activity

To configure the **Write File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique name for this WriteFile activity | MyActivity |
| Description | Optional | Optional description of this activity's purpose | Reads a file from S3 |
| Resource | Optional | Drag and drop a S3Connection resource from the workspace. |  |
| Directory | Optional | The target folder or directory path | my-data-bucket |
| File Path | Optional | Full path (including file name) where the content will be written | data/reports/2024/ |
| File Name | Optional | File name to use if not part of the file path | report-2024.csv |
| Encryption Type | Optional | Optional encryption to apply to the output file Options: NONE, PGP, SSL. | NONE, PGP, SSL |
| Encryption Resource | Optional | Encryption certificate used to encrypt the file |  |
| Content Type | Optional | The format in which content will be written to the file Options: CSV, JSON, XML, TEXT, BINARY. | CSV, JSON, XML |
| Compression Type | Optional | Optional compression method to apply to the file Options: NONE, ZIP, GZIP. | NONE, ZIP, GZIP |
| Select Context | Optional | Select the select context for this activity. |  |
| Create Directory If Not Exists | Optional | Create the directory path if it does not already exist |  |
| Overwrite | Optional | If true, any existing file with the same name will be replaced |  |
| Append | Optional | Append content to an existing file instead of replacing it |  |
| Write New Line | Optional | Adds a new line after the written content |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| File Path | Optional | String | File path. | data/reports/2024/ |
| File Name | Optional | String | File name. | report-2024.csv |
| Create Directory | Optional | Boolean | When true, create directory if not exists. |  |
| Content | Optional | Object | Data content. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Success | Optional | Boolean | Whether the operation succeeded. | false |
| Bytes Written | Optional | Number | Number of bytes written. | 0 |
