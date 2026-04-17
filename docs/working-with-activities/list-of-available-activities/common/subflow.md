---
title: Subflow
---


The **Subflow** activity invokes another workflow as a sub-process within the current workflow.

:::info
The referenced subflow must exist and be deployed in the same workspace.
:::

## Configuring the Subflow Activity

To configure the **Subflow** activity, fill in the required fields in the activity panel.

### Configuration

| Field               | Required | Description                                        | Example              |
| ------------------- | -------- | -------------------------------------------------- | -------------------- |
| Name                | Optional | Specify the name for this activity.                | MyActivity           |
| Description         | Optional | Specify the description for this activity.         | Reads a file from S3 |
| Subflow Path        | Optional | Specify the subflow path for this activity.        | Subflow Path         |
| Wait For Completion | Optional | Specify the wait for completion for this activity. |                      |

### Input

_Map the required input fields to provide data for this activity._

### Output

_The output fields are dynamically populated based on the activity result._
