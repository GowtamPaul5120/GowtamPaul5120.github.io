---
title: "Execution Info"
sidebar_position: 9
---


The **Execution Info** activity retrieves information about the current workflow execution.

## Configuring the Execution Info Activity

To configure the **Execution Info** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the component. This should be unique within the workflow. | MyActivity |
| Description | Optional | Optional. A brief description of the component. | Reads a file from S3 |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Org | Optional | String | Organization identifier. |  |
| Env | Optional | String | Execution Environment |  |
| App | Optional | String | Application identifier. |  |
| Workspace | Optional | String | Workspace in which the workflow is executed. |  |
| Workflow Id | Optional | String | Unique identifier of the workflow execution. |  |
| Work Flow Name | Optional | String | Name of the workflow. |  |
| Work Flow Version | Optional | String | Version of the workflow. |  |
| Profile Name | Optional | String | Profile name associated with this workflow execution. |  |
| Span Id | Optional | String | Span ID for the current step. |  |
| Trace Id | Optional | String | Trace ID for the current workflow. |  |
| Parent Workflow Name | Optional | String | Name of the parent workflow if present. |  |
| Parent Workflow Id | Optional | String | Unique identifier of the parent workflow if present. |  |
| Parent Workflow Version | Optional | String | Version of the parent workflow if present. |  |
