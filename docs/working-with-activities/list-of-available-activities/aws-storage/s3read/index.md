---
title: "S3 Read"
sidebar_position: 5
---


The **S3 Read** activity reads a file from an Amazon S3 bucket and returns its content for use in subsequent workflow steps.

:::info
Ensure the IAM user or role has `s3:GetObject` permission on the target bucket.
:::

## Configuring the S3 Read Activity

To configure the **S3 Read** activity, fill in the required fields in the activity panel.

### Configuration

| Field       | Required | Description                                                 | Example                      |
| ----------- | -------- | ----------------------------------------------------------- | ---------------------------- |
| Name        | Required | Specify the name for this activity.                         | MyActivity                   |
| Description | Optional | Specify the description for this activity.                  | Reads a file from S3         |
| Resource    | Required | Drag and drop an S3 Connection resource from the workspace. |                              |
| Bucket Name | Optional | S3 bucket name.                                             | my-data-bucket               |
| File Path   | Optional | Path to the file. (mapping supported)                       | data/reports/2024/report.csv |
| File Name   | Optional | File name including extension. (mapping supported)          | report-2024.csv              |

### Advanced

| Field               | Required | Description                                                                   | Example        |
| ------------------- | -------- | ----------------------------------------------------------------------------- | -------------- |
| Encryption Type     | Optional | Encryption type applied to the file. Options: NONE, PGP.                      | NONE, PGP      |
| Encryption Resource | Optional | Drag and drop a certificate for encryption/decryption.                        |                |
| Content Type        | Optional | Format of the file content to be read. Options: CSV, JSON, XML, TEXT, BINARY. | CSV, JSON, XML |
| Compression Type    | Optional | Compression applied to the file. Options: NONE, ZIP.                          | NONE, ZIP      |

### Input

| Field       | Required | Data Type | Description            | Example                      |
| ----------- | -------- | --------- | ---------------------- | ---------------------------- |
| Bucket Name | Optional | String    | S3 bucket name.        |                              |
| File Path   | Optional | String    | File path.             | data/reports/2024/report.csv |
| File Name   | Optional | String    | File name.             | report-2024.csv              |
| Streaming   | Optional | Boolean   | Enable streaming mode. |                              |

### Output

| Field          | Required | Data Type | Description            | Example         |
| -------------- | -------- | --------- | ---------------------- | --------------- |
| Bucket Name    | Optional | String    | S3 bucket name.        |                 |
| Key            | Optional | String    | Object key.            |                 |
| File Name      | Optional | String    | File name.             | report-2024.csv |
| Content        | Optional | String    | Content.               |                 |
| Content Length | Optional | Number    | Content size in bytes. | 0               |
