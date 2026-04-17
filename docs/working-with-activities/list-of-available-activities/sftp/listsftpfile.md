---
title: List SFTP File
---


The **List SFTP File** activity lists files on a remote SFTP server.

## Configuring the List SFTP File Activity

To configure the **List SFTP File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Describe the purpose or function of this step. | Reads a file from S3 |
| SFTP Connection | Required | Drag and drop a SFTPConnection resource from the workspace. |  |
| SFTP Auth Context | Optional | Authorization context to use for connecting to SFTP. |  |
| Directory | Optional | Path to the directory on the SFTP server. (mapping supported) | my-data-bucket |
| File Path | Optional | Specific file path to filter (mapping supported) | data/reports/2024/ |
| Pattern | Optional | Pattern to match files, e.g., *.txt (mapping supported) | *.csv |
| Prefix | Optional | Prefix to filter files like a folder path. (mapping supported) | logs/ |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Sort By | Optional | Choose how to sort the results Options: Name, Size, Date Modified, Path. |  |
| Max Results | Optional | Maximum number of files to return. | 100 |
| Descending | Optional | Check to sort results in descending order. |  |
| Recursive | Optional | Check to list files recursively inside folders. |  |
| Enable Retry | Optional | Retry after Failure. |  |
| Retry Policy Resource | Optional | Drag and drop a Retry Policy resource from the workspace. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Working Directory | Optional | String | Root directory on the SFTP server where the search begins. | my-data-bucket |
| File Path | Optional | String | Path on the SFTP server to start listing files from. | data/reports/2024/ |
| Pattern | Optional | String | Pattern to match files (e.g., *.txt, file_*.csv). | *.csv |
| Prefix | Optional | String | Prefix to filter files (file names that begin with this prefix). | logs/ |
| Max Result | Optional | Number | Maximum number of results to return. |  |
| Recursive | Optional | Boolean | Whether to list files recursively in subdirectories. |  |
| Descending | Optional | Boolean | Whether to return the list of files in descending order. |  |

### Output

_The output fields are dynamically populated based on the activity result._
