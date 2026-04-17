---
title: Webhook
---


The **Webhook** activity listens for incoming webhook calls and triggers the workflow.

:::info
This activity acts as a webhook trigger. It must be the first step in a workflow.
:::

## Configuring the Webhook Activity

To configure the **Webhook** activity, fill in the required fields in the activity panel.

### Configuration

| Field               | Required | Description                                                                                                     | Example              |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------- | -------------------- |
| Name                | Optional | Specify the name for this activity.                                                                             | MyActivity           |
| Description         | Optional | Specify the description for this activity.                                                                      | Reads a file from S3 |
| Path                | Required | Specify the path for this activity.                                                                             | /users               |
| Method              | Optional | Select the method for this activity. Options: POST.                                                             | POST                 |
| Allowed Media Types | Optional | Select the allowed media types for this activity. Options: application/json, application/x-www-form-urlencoded. |                      |

### Output

| Field              | Required | Data Type | Description                                                                                                                       | Example                                        |
| ------------------ | -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --- | --- |
| Method             | Optional | String    | HTTP method used for the webhook (typically POST for receiving events).                                                           | POST                                           |
| Uri                | Optional | String    | URI path at which the webhook will receive requests, optionally including &#123;&#125; for path parameters, and query parameters. |                                                |     |     |
| Headers            | Optional | Object    | Static HTTP headers expected to be received with the webhook request.                                                             | &#123;"Content-Type": "application/json"&#125; |
| Additional Headers | Optional | Array     | Custom headers to be validated for incoming webhook requests.                                                                     |                                                |
| Query Params       | Optional | Object    | Query parameters expected as part of the webhook request URI.                                                                     |                                                |
| Path Params        | Optional | Object    | Path parameters replacing &#123;&#125; placeholders in the URI.                                                                   |                                                |
| Body               | Optional | Object    | Payload body received in the webhook request. Can be any valid JSON object.                                                       |                                                |
