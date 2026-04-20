---
title: "CSV To Json"
sidebar_position: 1
---


The **CSV to JSON** activity converts CSV data into a JSON array.

## Configuring the CSV To Json Activity

To configure the **CSV To Json** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| CSV Formatter | Optional | Drag and drop a CSV Format resource from the workspace. |  |
| Has Header | Optional | Input has a header row with column names. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | The path to the file or directory in the stream. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Records | Optional | Array | An array of records to be processed. |  |
| Num Records | Optional | Number | Number of records processed. | 0 |
