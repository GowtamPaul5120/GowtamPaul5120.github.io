---
title: "S3 File Trigger"
sidebar_position: 3
---


The **S3 File Trigger** activity starts a workflow when a file event occurs in an Amazon S3 bucket.

:::info
This activity acts as a trigger and must be the first step in a workflow.
:::

## Configuring the S3 File Trigger Activity

To configure the **S3 File Trigger** activity, fill in the required fields in the activity panel.

### Configuration

| Field       | Required | Description                                | Example              |
| ----------- | -------- | ------------------------------------------ | -------------------- |
| Name        | Optional | Specify the name for this activity.        | MyActivity           |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Path        | Required | Path to the target location.               | /users               |

### Output

| Field              | Required | Data Type | Description                                                                                                                                       | Example |
| ------------------ | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Method             | Optional | String    | HTTP method used for the webhook request. Typically POST is used for event delivery.                                                              |         |
| Uri                | Optional | String    | Endpoint URI where the webhook receives requests. Supports path parameters using `{}` and query parameters using `?key=value&key2=value2` format. |         |
| Headers            | Optional | Object    | Static HTTP headers expected in the webhook request. Additional headers can be appended via configuration.                                        |         |
| Additional Headers | Optional | Array     | List of additional custom headers that must be validated in the webhook request.                                                                  |         |
| Query Params       | Optional | Object    | Query parameters expected in the webhook request URL.                                                                                             |         |
| Path Params        | Optional | Object    | Dynamic path parameters that replace placeholders in the URI.                                                                                     |         |
| Body               | Optional | Object    | Payload received in the webhook request. This example models an AWS SNS-style event payload.                                                      |         |
