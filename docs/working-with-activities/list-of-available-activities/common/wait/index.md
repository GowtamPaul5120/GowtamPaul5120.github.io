---
title: "Wait"
sidebar_position: 33
---


The **Wait** activity pauses workflow execution for a specified duration before proceeding.

:::info
The Wait activity pauses workflow execution for the specified duration.
:::

## Configuring the Wait Activity

To configure the **Wait** activity, fill in the required fields in the activity panel.

### Configuration

| Field       | Required | Description                                | Example              |
| ----------- | -------- | ------------------------------------------ | -------------------- |
| Name        | Required | Specify the name for this activity.        | MyActivity           |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Duration    | Required | Numeric value for duration.                |                      |

### Input

_Map the required input fields to provide data for this activity._

### Output

_The output fields are dynamically populated based on the activity result._
