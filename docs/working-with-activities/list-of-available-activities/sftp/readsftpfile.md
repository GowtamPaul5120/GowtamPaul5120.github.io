---
title: "Read SFTP File"
---


The **Read SFTP File** activity reads a file from a remote SFTP server.

## Configuring the Read SFTP File Activity

To configure the **Read SFTP File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Optional description about the work performed by this step. | Reads a file from S3 |
| SFTP Connection | Required | Drag and drop a SFTPConnection resource from the workspace. |  |
| SFTP Auth Context | Optional | Authorization context used for SFTP connection. |  |
| Working Directory | Optional | Directory where the file will be placed or fetched from on the SFTP server. | my-data-bucket |
| File Path | Optional | Path to the file on the SFTP server (mapping supported). | data/reports/2024/ |
| File Name | Optional | Name of the file on the SFTP server (mapping supported). | report-2024.csv |
| Content Type | Optional | Format of the file content (CSV, JSON, XML, etc.) Options: CSV, JSON, XML, TEXT, BINARY. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Encryption Type | Optional | Select encryption type if the file is encrypted with PGP or not Options: NONE, PGP. |  |
| Encryption Resource | Optional | Select the certificate resource used for encryption/decryption (hidden if no encryption). |  |
| Compression Type | Optional | Specify if the file is compressed using ZIP or not Options: NONE, ZIP. |  |
| Enable Retry | Optional | Retry after Failure. |  |
| Retry Policy Resource | Optional | Drag and drop a Retry Policy resource from the workspace. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Working Directory | Optional | String | The working directory where the file is located. | my-data-bucket |
| File Path | Optional | String | Path to the file within the working directory. | data/reports/2024/ |
| File Name | Optional | String | Name of the file to be read. | report-2024.csv |

### Output

_The output fields are dynamically populated based on the activity result._
