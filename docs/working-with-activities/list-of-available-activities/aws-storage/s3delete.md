---
title: "S3 Delete"
sidebar_position: 2
---


The **S3 Delete** activity deletes a specified file from an Amazon S3 bucket.

:::info
Ensure the IAM user or role has `s3:DeleteObject` permission on the target bucket.
:::

## Configuring the S3 Delete Activity

To configure the **S3 Delete** activity, fill in the required fields in the activity panel.

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

### Input

| Field       | Required | Data Type | Description     | Example                      |
| ----------- | -------- | --------- | --------------- | ---------------------------- |
| Bucket Name | Optional | String    | S3 bucket name. |                              |
| File Path   | Optional | String    | File path.      | data/reports/2024/report.csv |
| File Name   | Optional | String    | File name.      | report-2024.csv              |

### Output

| Field          | Required | Data Type | Description                                                    | Example                      |
| -------------- | -------- | --------- | -------------------------------------------------------------- | ---------------------------- |
| Deleted        | Optional | Boolean   | Indicates whether the blob was successfully deleted.           |                              |
| File Path      | Optional | String    | The path within the container where the blob was located.      | data/reports/2024/report.csv |
| File Name      | Optional | String    | The name of the blob that was deleted.                         | report-2024.csv              |
| Bucket Name    | Optional | String    | The name of the blob that was deleted.                         |                              |
| Content Length | Optional | Number    | The size of the blob content in bytes before deletion.         | 0                            |
| Last Modified  | Optional | String    | The timestamp when the blob was last modified before deletion. |                              |
