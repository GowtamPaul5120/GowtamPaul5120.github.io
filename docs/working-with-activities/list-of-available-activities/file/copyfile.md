# Copy File

The **Copy File** activity copies a file from one location to another on the local file system.

## Configuring the Copy File Activity

To configure the **Copy File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Move | Optional | Move file instead of copying. Source is deleted after transfer. |  |
| Create Directory | Optional | Create directory if it does not exist. |  |
| Overwrite | Optional | Overwrite if file already exists. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Source | Optional | Object | Source file reference. |  |
| Target | Optional | Object | Target file reference. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Source Path | Optional | String | Source file path. |  |
| Target Path | Optional | String | Target file path. |  |
| Moved | Optional | Boolean | Whether the file was moved. | false |
| Content Length | Optional | Number | Content size in bytes. | 0 |
| Transfer Type | Optional | String | Type of transfer performed. |  |
