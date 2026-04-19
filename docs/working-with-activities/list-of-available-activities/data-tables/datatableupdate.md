---
title: "Data Table Update"
sidebar_position: 5
---


The **Data Table Update** activity updates existing records in a data table.

## Configuring the Data Table Update Activity

To configure the **Data Table Update** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Data Table | Required | Drag and drop a DataTable from the workspace. |  |
| TTL | Required | Time to live in minutes |  |

### Input

_Map the required input fields to provide data for this activity._

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Rows Affected | Optional | Integer | Total number of rows affected |  |
