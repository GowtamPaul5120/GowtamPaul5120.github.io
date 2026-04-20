---
title: "S3 Connection"
sidebar_position: 1
---


The **S3 Connection** resource defines the connection configuration for Amazon S3, including authentication credentials.

:::info
Before using any S3 activities, configure an S3 Connection resource in your workspace with valid AWS credentials.
:::

## Configuring the S3 Connection Activity

To configure the **S3 Connection** activity, fill in the required fields in the activity panel.

### Configuration

| Field             | Required | Description                                            | Example              |
| ----------------- | -------- | ------------------------------------------------------ | -------------------- |
| Name              | Required | Specify the name for this activity.                    | MyActivity           |
| Description       | Optional | Specify the description for this activity.             | Reads a file from S3 |
| Auth Type         | Required | Authentication method for AWS S3. Options: Access Key. |                      |
| Region            | Required | AWS region (e.g., us-east-1).                          |                      |
| Access Key ID     | Required | AWS Access Key ID.                                     |                      |
| Secret Access Key | Required | AWS Secret Access Key.                                 |                      |
