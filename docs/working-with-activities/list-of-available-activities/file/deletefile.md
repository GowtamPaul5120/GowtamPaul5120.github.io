# Delete File

The **Delete File** activity deletes a specified file from the local file system.

## Configuring the Delete File Activity

To configure the **Delete File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Resource | Optional | Drag and drop the required resource from the workspace. |  |
| Directory | Optional | Specify the directory for this activity. | /data/uploads |
| File Path | Optional | Specify the file path for this activity. | data/reports/2024/report.csv |
| File Name | Optional | Specify the file name for this activity. | report-2024.csv |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Filepath | Optional | String |  |  |
| File Name | Optional | String |  | report-2024.csv |

### Output

_The output fields are dynamically populated based on the activity result._
