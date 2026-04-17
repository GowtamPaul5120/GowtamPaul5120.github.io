---
title: Batch Event Trigger
---


The **Batch Event Trigger** activity starts a workflow when a batch event occurs.

:::info
This activity acts as a batch event trigger. It must be the first step in a workflow.
:::

## Configuring the Batch Event Trigger Activity

To configure the **Batch Event Trigger** activity, fill in the required fields in the activity panel.

### Configuration

| Field            | Required | Description                                                                                                                       | Example              |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Name             | Required | Specify the name for this activity.                                                                                               | MyActivity           |
| Description      | Optional | Specify the description for this activity.                                                                                        | Reads a file from S3 |
| Auto Acknowledge | Optional | When enabled, delivery of this event will be acknowledged automatically. In case of failures, this event will not be redelivered. |                      |
| Records          | Optional | Records for this activity.                                                                                                        |                      |

### Output

| Field      | Required | Data Type | Description                                | Example |
| ---------- | -------- | --------- | ------------------------------------------ | ------- |
| Batch Id   | Optional | String    | BatchId for which this event was generated |         |
| Event Type | Optional | String    | EventType for this trigger                 |         |
| Context    | Optional | Object    | Context that was provided in Init Batch    |         |
| Record     | Optional | Object    |                                            |         |
