---
title: Write SFTP File
---


The **Write SFTP File** activity writes data to a file on a remote SFTP server.

## Configuring the Write SFTP File Activity

To configure the **Write SFTP File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Optional description about the work performed by this step. | Reads a file from S3 |
| SFTP Connection | Required | Drag and drop a SFTPConnection resource from the workspace. |  |
| SFTP Auth Context | Optional | Authorization context used for SFTP connection. |  |
| Working Directory | Optional | Directory where the file will be placed from on the SFTP server. | my-data-bucket |
| File Path | Optional | Path to the file on the SFTP server (mapping supported). | data/reports/2024/ |
| File Name | Optional | Name of the file on the SFTP server (mapping supported). | report-2024.csv |
| Content Type | Optional | Format of the file content (CSV, JSON, XML, etc.) Options: CSV, JSON, XML, TEXT, BINARY. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Encryption Type | Optional | Select encryption type if the file is encrypted with PGP or not Options: NONE, PGP. |  |
| Encryption Resource | Optional | Select the certificate resource used for encryption/decryption (hidden if no encryption). |  |
| Compression Type | Optional | Specify if the file is compressed using ZIP or not Options: NONE, ZIP. |  |
| Create Directory If Not Exists | Optional | Create directory if it does not exist. |  |
| Overwrite | Optional | Overwrite if file already exists. |  |
| Enable Retry | Optional | Retry after Failure. |  |
| Retry Policy Resource | Optional | Drag and drop a Retry Policy resource from the workspace. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Working Directory | Optional | String | The directory to be used as the working directory for the file operations. | my-data-bucket |
| File Path | Optional | String | The path where the file will be written. | data/reports/2024/ |
| File Name | Optional | String | The name of the file to be created. | report-2024.csv |
| Create Directory | Optional | Boolean | Indicates whether to create the directory if it doesn't exist. |  |
| Overwrite | Optional | Boolean | overwrite the file if it exist. |  |
| Content | Optional | String | The content to be written into the file. |  |

### Output

_The output fields are dynamically populated based on the activity result._
