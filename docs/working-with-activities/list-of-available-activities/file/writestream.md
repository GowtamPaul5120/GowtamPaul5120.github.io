---
title: "Write Stream"
---


The **Write Stream** activity writes data to a streaming destination.

## Configuring the Write Stream Activity

To configure the **Write Stream** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Resource | Required | Drag and drop a connection resource from the workspace. Accepts: S3 Connection, ABS Connection, SFTP Connection. |  |
| Directory | Optional | Root directory for file operations. | my-data-bucket |
| File Path | Optional | Path to the file. (mapping supported) | data/reports/2024/ |
| File Name | Optional | File name including extension. (mapping supported) | report-2024.csv |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| ContentType | Optional | Format of the file content Options: CSV, JSON, XML, TEXT, BINARY. | CSV, JSON, XML |
| CompressionType | Optional | Compression type for the file Options: NONE, ZIP. | NONE, ZIP |
| Select Context | Optional | Select an authentication context. |  |
| Create Directory If Not Exists | Optional | Create directory if it does not exist. |  |
| Append | Optional | Append to end of file instead of overwriting. |  |
| Overwrite | Optional | Overwrite if file already exists. |  |
| Write New Line | Optional | Write a newline after the data. |  |

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
