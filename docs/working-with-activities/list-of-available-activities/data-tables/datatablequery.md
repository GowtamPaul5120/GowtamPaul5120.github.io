---
title: "Data Table Query"
---


The **Data Table Query** activity queries a data table and returns matching records.

## Configuring the Data Table Query Activity

To configure the **Data Table Query** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Data Table | Required | Drag and drop a DataTable from the workspace. |  |
| Page Size | Required | Number of Records in Each Page |  |
| Batch Size | Required | Number of Records in Each Batch, if 0 entire output is treated as a single batch | 100 |

### Input

_Map the required input fields to provide data for this activity._

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Num Records | Optional | Integer | Total number of records in this page |  |
| Has More Records | Optional | Boolean | Whether more records exist beyond current page |  |
| Next Offset | Optional | Integer | Offset for the next page of results |  |
| Execution Time Ms | Optional | Integer | Query execution time in milliseconds |  |
| Records | Optional | Array |  |  |
