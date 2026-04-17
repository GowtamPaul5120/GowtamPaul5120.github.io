---
title: S3 List
---


The **S3 List** activity lists files in an Amazon S3 bucket, with options for filtering by path prefix, pattern, and sorting.

:::info
Ensure the IAM user or role has `s3:ListBucket` permission on the target bucket.
:::

## Configuring the S3 List Activity

To configure the **S3 List** activity, fill in the required fields in the activity panel.

### Configuration

| Field           | Required | Description                                                 | Example                 |
| --------------- | -------- | ----------------------------------------------------------- | ----------------------- |
| Name            | Required | Specify the name for this activity.                         | MyActivity              |
| Description     | Optional | Specify the description for this activity.                  | Reads a file from S3    |
| Resource        | Optional | Drag and drop an S3 Connection resource from the workspace. |                         |
| S3 Auth Context | Optional | Authorization context to use for connecting to S3.          |                         |
| Bucket Name     | Optional | S3 bucket name.                                             | my-data-bucket          |
| File Path       | Optional | Path to the file. (mapping supported)                       | data/reports/2024/      |
| Pattern         | Optional | Pattern to match files (e.g., \*.csv). (mapping supported)  | \_.csv, report\_\_.json |
| Prefix          | Optional | Prefix to filter results. (mapping supported)               | logs/, report-          |

### Advanced

| Field       | Required | Description                                                                    | Example |
| ----------- | -------- | ------------------------------------------------------------------------------ | ------- |
| Sort By     | Optional | Choose how to sort the listed files. Options: Name, Size, Date Modified, Path. |         |
| Max Results | Optional | Maximum number of blobs to return.                                             | 100     |
| Descending  | Optional | Check to sort results in descending order.                                     |         |

### Input

| Field               | Required | Data Type | Description                         | Example                 |
| ------------------- | -------- | --------- | ----------------------------------- | ----------------------- |
| Bucket Name         | Optional | String    | S3 bucket name.                     |                         |
| File Path           | Optional | String    | File path.                          | data/reports/2024/      |
| Pattern             | Optional | String    | File name pattern for filtering.    | \_.csv, report\_\_.json |
| Prefix              | Optional | String    | Filter prefix.                      | logs/, report-          |
| Max Results         | Optional | Number    | Maximum number of results.          | 100                     |
| Continuation Token  | Optional | String    | Token for paginated results.        |                         |
| Include Directories | Optional | Boolean   | Include directories in results.     |                         |
| Include Metadata    | Optional | Boolean   | Include metadata in results.        |                         |
| Include Stats       | Optional | Boolean   | Include file statistics in results. |                         |
| Descending          | Optional | Boolean   | Sort in descending order.           |                         |

### Output

| Field              | Required | Data Type | Description                        | Example            |
| ------------------ | -------- | --------- | ---------------------------------- | ------------------ |
| Bucket Name        | Optional | String    | S3 bucket name.                    |                    |
| Prefix             | Optional | String    | Filter prefix.                     | logs/, report-     |
| File Path          | Optional | String    | Path that was listed               | data/reports/2024/ |
| Files              | Optional | Array     | Array of file objects              |                    |
| Total Files        | Optional | Integer   | Count of files in THIS page        | 0                  |
| Continuation Token | Optional | String    | Token for next page (null if done) |                    |
| Message            | Optional | String    | Informational message              |                    |
| Warnings           | Optional | Array     | Array of warning strings           |                    |
| Stats              | Optional | Object    | Statistics object (if requested)   |                    |
