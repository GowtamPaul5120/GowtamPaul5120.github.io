---
title: "SFTP File Info"
---


The **SFTP File Info** activity retrieves metadata about a file on a remote SFTP server.

## Configuring the SFTP File Info Activity

To configure the **SFTP File Info** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| SFTP Connection | Required | Drag and drop an SFTP Connection resource from the workspace. |  |
| SFTP Context | Optional | Select an authentication context. |  |
| Working Directory | Optional | Working directory on the SFTP server. | my-data-bucket |
| File Path | Optional | Path to the file on the SFTP server. | data/reports/2024/ |
| File Name | Optional | Name of the file on the SFTP server. | report-2024.csv |

### Input

_Map the required input fields to provide data for this activity._

### Output

_The output fields are dynamically populated based on the activity result._
