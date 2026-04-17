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
| Stream Type | Required | Select Storage Provider Type Options: Azure Blob Storage, SFTP, Local File, AWS S3. | Azure Blob Storage, SFTP, Local File |
| Stream Connection | Optional | Drag and drop one of the following resources: ABSConnection, SFTPConnection, S3Connection. |  |
| File Path | Optional | Specify the file path for this activity. | Path to file including container or bucket |
| File Name | Optional | Specify the file name for this activity. | Name of File |
| Append If Exists | Optional | Append content if the Stream Type supports |  |
| Create If Not Exists | Optional | Create Containers/Buckets/Folders if they do not exist |  |

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
| Append | Optional | Boolean | Whether to append to the file if it exists. |  |
| Content | Optional | Object | The content of the file. |  |
| Records | Optional | Array | An array of records to be processed. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content Length | Optional | Integer |  |  |
| Path | Optional | String |  | Path to file including container or bucket |
| File | Optional | String |  | Name of File |
