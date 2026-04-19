---
title: "Read File"
sidebar_position: 5
---


The **Read File** activity reads a file from the local file system and returns its content.

## Configuring the Read File Activity

To configure the **Read File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Resource | Optional | Drag and drop a ABSConnection resource from the workspace. |  |
| Container Name | Optional | Specify the container name for this activity. | /data/uploads |
| File Path | Optional | Specify the file path for this activity. | data/reports/2024/report.csv |
| File Name | Optional | Specify the file name for this activity. | report-2024.csv |
| Encryption Type | Optional | Select the encryption type for this activity. Options: NONE, PGP. | NONE, PGP |
| Encryption Resource | Optional | Certificate resource used for encryption resource. |  |
| Content Type | Optional | Select the content type for this activity. Options: CSV, JSON, XML, TEXT, BINARY. | CSV, JSON, XML |
| Compression Type | Optional | Select the compression type for this activity. Options: NONE, ZIP. | NONE, ZIP |
| Buffer Size | Optional | Numeric value for buffer size. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| File Path | Optional | String | Full path to the file in the storage location to be read. | data/reports/2024/report.csv |
| File Name | Optional | String | Optional file name. Used with working directory if filePath is not provided. | report-2024.csv |
| Streaming | Optional | Boolean | Indicates whether the file should be read in streaming mode. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String |  |  |
| Content Length | Optional | Number |  | 0 |
| File Name | Optional | String |  | report-2024.csv |
| Path | Optional | String |  |  |
