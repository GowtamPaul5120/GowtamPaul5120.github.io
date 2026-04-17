---
title: "Schedule"
---


The **Schedule** activity triggers a workflow on a defined schedule using a cron expression.

:::info
This activity acts as a scheduled trigger. It must be the first step in a workflow.
:::

## Configuring the Schedule Activity

To configure the **Schedule** activity, fill in the required fields in the activity panel.

### Configuration

| Field        | Required | Description                                                     | Example              |
| ------------ | -------- | --------------------------------------------------------------- | -------------------- |
| Name         | Optional | Specify the name for this activity.                             | MyActivity           |
| Description  | Optional | Specify the description for this activity.                      | Reads a file from S3 |
| Type         | Optional | Select the type for this activity. Options: Schedule, Run Once. |                      |
| Start On     | Required | Specify the start on for this activity.                         |                      |
| At Time      | Required | Specify the at time for this activity.                          |                      |
| Run interval | Optional | Run interval for this activity.                                 |                      |

### Advanced

| Field                | Required | Description                                                                                                        | Example |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Timezone             | Optional | Timezone for this activity.                                                                                        |         |
| Date to end schedule | Optional | Specify the date to end schedule for this activity.                                                                |         |
| End on               | Optional | Specify the end on for this activity.                                                                              |         |
| At Time              | Optional | Specify the at time for this activity.                                                                             |         |
| Failure Threshold    | Optional | Specifies the maximum number of consecutive failed schedule processing attempts before pausing further scheduling. |         |
