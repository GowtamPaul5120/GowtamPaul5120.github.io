---
title: "Delete ABS File"
---


The **Delete ABS File** activity deletes a specified file from an Azure Blob Storage container.

## Configuring the Delete ABS File Activity

To configure the **Delete ABS File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Describe the purpose or function of this step. | Reads a file from S3 |
| ABS Connection | Required | Drag and drop a ABSConnection resource from the workspace. |  |
| Select Context | Optional | Authorization context to use for connecting to ABS. |  |
| Container Name | Optional | Name of the container where the blob is stored. (mapping supported) | my-data-bucket |
| Blob Path | Optional | Path inside the container where the blob is located. (mapping supported) | data/reports/2024/ |
| Blob Name | Optional | Name of the blob to be created or accessed. (mapping supported) | report-2024.csv |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Container Name | Optional | String | The name of the Azure Blob Storage container where the blob is located. |  |
| Blob Path | Optional | String | The path within the container where the blob is located. |  |
| Blob Name | Optional | String | The name of the blob to be deleted. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Deleted | Optional | Boolean | Indicates whether the blob was successfully deleted. |  |
| Blob Path | Optional | String | The path within the container where the blob was located. |  |
| Blob Name | Optional | String | The name of the blob that was deleted. |  |
| Container Name | Optional | String | The name of the blob that was deleted. |  |
| Content Length | Optional | Number | The size of the blob content in bytes before deletion. | 0 |
| Was Container | Optional | Boolean | Indicates whether the deleted item was a container instead of a blob. |  |
| Last Modified | Optional | String | The timestamp when the blob was last modified before deletion. |  |
