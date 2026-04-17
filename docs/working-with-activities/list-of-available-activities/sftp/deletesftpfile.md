---
title: "Delete SFTP File"
---


The **Delete SFTP File** activity deletes a specified file from a remote SFTP server.

## Configuring the Delete SFTP File Activity

To configure the **Delete SFTP File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Describe the purpose or function of this step. | Reads a file from S3 |
| SFTP Connection | Required | Drag and drop a SFTPConnection resource from the workspace. |  |
| SFTP Auth Context | Optional | Authorization context used for SFTP connection. |  |
| Directory | Optional | Remote directory path on the SFTP server. (mapping supported) | my-data-bucket |
| File Path | Optional | Path inside the remote directory to the file. (mapping supported) | data/reports/2024/ |
| File Name | Optional | Name of the file to be deleted. (mapping supported) | report-2024.csv |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Working Directory | Optional | String | Remote directory path on the SFTP server where the file is located. | my-data-bucket |
| File Path | Optional | String | Path inside the remote directory pointing to the file to be deleted. | data/reports/2024/ |
| File Name | Optional | String | Name of the file to delete from the SFTP server. | report-2024.csv |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Deleted | Optional | Boolean | Indicates whether the file was successfully deleted from the SFTP server. |  |
| File Path | Optional | String | The full path to the file on the SFTP server. | data/reports/2024/ |
| File Name | Optional | String | The name of the file that was deleted. | report-2024.csv |
| Working Directory | Optional | String | The directory from which the file was deleted. | my-data-bucket |
| Content Length | Optional | Number | The size of the file in bytes before deletion. | 0 |
