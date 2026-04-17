---
title: File Info
---


The **File Info** activity retrieves metadata information about a file on the local file system.

## Configuring the File Info Activity

To configure the **File Info** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Resource | Optional | Drag and drop one of the following resources: S3Connection, ABSConnection, SFTPConnection. |  |
| Select Source Context | Optional | Select the select source context for this activity. |  |
| Directory | Optional | Directory value. Supports global variables and mapping expressions. | my-data-bucket |
| File Path | Optional | File Path value. Supports global variables and mapping expressions. | data/reports/2024/ |
| File Name | Optional | File Name value. Supports global variables and mapping expressions. | report-2024.csv |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| File Path | Optional | String | Full file path where the content should be written, including the directory and file name. | data/reports/2024/ |
| File Name | Optional | String | Optional file name to use if not included in filePath. | report-2024.csv |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Exists | Optional | Boolean |  | false |
| File Path | Optional | String |  | data/reports/2024/ |
| File Name | Optional | String |  | report-2024.csv |
| Created At | Optional | String |  |  |
| Modified At | Optional | String |  |  |
| File Size | Optional | Number |  | 0 |
| Is Directory | Optional | Boolean |  | false |
