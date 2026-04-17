---
title: "HTTP Server"
---


The **HTTP Server** activity listens for incoming HTTP requests and triggers the workflow.

:::info
This activity acts as an HTTP endpoint trigger. It must be the first step in a workflow.
:::

## Configuring the HTTP Server Activity

To configure the **HTTP Server** activity, fill in the required fields in the activity panel.

### Configuration

| Field       | Required | Description                                                    | Example              |
| ----------- | -------- | -------------------------------------------------------------- | -------------------- |
| Name        | Optional | Specify the name for this activity.                            | MyActivity           |
| Description | Optional | Specify the description for this activity.                     | Reads a file from S3 |
| Host        | Optional | Host value. Supports global variables and mapping expressions. | sftp.example.com     |
| Port        | Optional | Port value. Supports global variables and mapping expressions. | 4000                 |
