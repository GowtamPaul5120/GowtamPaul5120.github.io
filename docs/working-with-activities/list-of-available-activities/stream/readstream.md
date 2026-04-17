---
title: "Read Stream"
---


The **Read Stream** activity reads data from a streaming source.

## Configuring the Read Stream Activity

To configure the **Read Stream** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Stream Type | Required | Select Storage Provider Type Options: Azure Blob Storage, SFTP, Local File, AWS S3. | Azure Blob Storage, SFTP, Local File |
| Stream Connection | Optional | Drag and drop one of the following resources: ABSConnection, SFTPConnection, S3Connection. |  |
| File Path | Optional | Specify the file path for this activity. | Path to file including container or bucket |
| File Name | Optional | Specify the file name for this activity. | Name of File |
| Read All | Optional | Read all content at once |  |
| Multiline | Optional | If the content is Multiline, selecting this will return multiple records |  |
| Line Separator | Optional | Line Separator helps in identifying distinct records Options: Line Feed (Unix), Carriage Return (Windows), Carriage Return + Line Feed. | Line Feed (Unix), Carriage Return (Windows), Carriage Return + Line Feed |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Format Type | Optional | Select the format type for this activity. Options: CSV. |  |
| Formatter Config | Optional | Drag and drop a CSVFormat resource from the workspace. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Path | Optional | String | The path to the file or directory in the stream. | Path to file including container or bucket |
| File | Optional | String | The name of the file in the stream. | Name of File |
| Read All | Optional | Boolean | Read all content at once |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Path | Optional | String | The path to the file or directory in the stream. | Path to file including container or bucket |
| File | Optional | String | The name of the file in the stream. | Name of File |
| Records | Optional | Array | An array of records to be processed. |  |
| Has More Records | Optional | Boolean | If true the stream has more content that has not been read yet |  |
