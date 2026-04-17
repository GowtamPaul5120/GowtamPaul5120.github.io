---
title: "Json To CSV"
---


The **JSON to CSV** activity converts a JSON array into CSV format.

## Configuring the Json To CSV Activity

To configure the **Json To CSV** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| CSV Formatter | Optional | Drag and drop a CSV Format resource from the workspace. |  |
| Has Header | Optional | Include header row with column names. |  |
| Quote Only When Needed (Strict Mode) | Optional | When checked, a strict check is performed to apply quotes only when strictly necessary (e.g., for fields containing commas). Is Applicable when quote character is set for schema |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Records | Optional | Array | An array of records to be processed. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String |  |  |
