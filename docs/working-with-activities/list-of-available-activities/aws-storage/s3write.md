---
title: "S3 Write"
---


The **S3 Write** activity writes data to a file in an Amazon S3 bucket, supporting multiple content types, compression, and encryption.

:::info
Ensure the IAM user or role has `s3:PutObject` permission on the target bucket.
:::

## Configuring the S3 Write Activity

To configure the **S3 Write** activity, fill in the required fields in the activity panel.

### Configuration

| Field           | Required | Description                                                 | Example                      |
| --------------- | -------- | ----------------------------------------------------------- | ---------------------------- |
| Name            | Required | Specify the name for this activity.                         | MyActivity                   |
| Description     | Optional | Specify the description for this activity.                  | Reads a file from S3         |
| Resource        | Optional | Drag and drop an S3 Connection resource from the workspace. |                              |
| S3 Auth Context | Optional | Authorization context to use for connecting to S3.          |                              |
| Bucket Name     | Optional | S3 bucket name.                                             | my-data-bucket               |
| File Path       | Optional | Path to the file. (mapping supported)                       | data/reports/2024/report.csv |
| File Name       | Optional | File name including extension. (mapping supported)          | report-2024.csv              |

### Advanced

| Field                          | Required | Description                                                                      | Example         |
| ------------------------------ | -------- | -------------------------------------------------------------------------------- | --------------- |
| Encryption Type                | Optional | Encryption type to apply when writing the file. Options: NONE, PGP.              | NONE, PGP       |
| Encryption Resource            | Optional | Drag and drop a certificate for encryption/decryption.                           |                 |
| Content Type                   | Optional | Format of the file content to be written. Options: CSV, JSON, XML, TEXT, BINARY. | CSV, JSON, XML  |
| Compression Type               | Optional | Compression applied when writing the file. Options: NONE, ZIP, GZIP.             | NONE, ZIP, GZIP |
| Create Directory If Not Exists | Optional | Create directory if it does not exist.                                           |                 |
| Overwrite                      | Optional | Overwrite if file already exists.                                                |                 |

### Input

| Field         | Required | Data Type | Description                             | Example                      |
| ------------- | -------- | --------- | --------------------------------------- | ---------------------------- |
| Bucket Name   | Optional | String    | S3 bucket name.                         |                              |
| File Path     | Optional | String    | File path.                              | data/reports/2024/report.csv |
| File Name     | Optional | String    | File name.                              | report-2024.csv              |
| Create Bucket | Optional | Boolean   | When true, create bucket if not exists. |                              |
| Overwrite     | Optional | Boolean   | When true, overwrite if exists.         |                              |
| Content       | Optional | Object    | Data content.                           |                              |

### Output

| Field          | Required | Data Type | Description            | Example                      |
| -------------- | -------- | --------- | ---------------------- | ---------------------------- |
| Bucket Name    | Optional | String    | S3 bucket name.        |                              |
| File Path      | Optional | String    | File path.             | data/reports/2024/report.csv |
| File Name      | Optional | String    | File name.             | report-2024.csv              |
| Content Length | Optional | Number    | Content size in bytes. | 0                            |
