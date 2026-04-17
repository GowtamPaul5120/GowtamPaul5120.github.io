---
title: Read Stream
---


The **Read Stream** activity reads data from a streaming source.

## Configuring the Read Stream Activity

To configure the **Read Stream** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Connection | Required | Drag and drop a S3Connection resource from the workspace. |  |
| File Path | Optional | Directory path where the file is located | data/reports/2024/ |
| File Name | Optional | Name of the file to be read | report-2024.csv |
| Batch Size | Optional | Number of lines to read at once in each batch. To read entire content set to 0 | 100 |
| Line Separator | Optional | Character(s) that separate lines in the file, leave empty for default Options: Line Feed (\n), Carriage Return + Line Feed (\r\n). | Line Feed (\n), Carriage Return + Line Feed (\r\n) |
| Content Type | Optional | Format of the file content to be read Options: CSV, JSON, XML, TEXT, BINARY. | CSV, JSON, XML |
| Select Context | Optional | Select an authentication context. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Working Directory | Optional | Optional temporary directory used during SFTP operations | my-data-bucket |
| Compression Type | Optional | Type of compression used on the file, if any Options: NONE, ZIP, GZIP. | NONE, ZIP, GZIP |
| Encryption Type | Optional | Type of encryption used on the file, if any Options: NONE, PGP. | NONE, PGP |
| Encryption Resource | Optional | Certificate or key resource for decrypting encrypted files |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Working Directory | Optional | String | Optional temporary directory used during SFTP operations | my-data-bucket |
| File Path | Optional | String | Directory path where the file is located | data/reports/2024/ |
| File Name | Optional | String | Name of the file to be read | report-2024.csv |
| Batch Size | Optional | Integer | Number of lines to read at once; If Set to 0 then entire content is read | 100 |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | Content. |  |
| Processed Bytes | Optional | Integer | Number of bytes processed. |  |
| Has More | Optional | Boolean | Whether more data is available. | false |
