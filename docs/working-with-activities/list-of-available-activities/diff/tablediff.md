---
title: Table Diff
---


The **Table Diff** activity computes the difference between two datasets.

## Configuring the Table Diff Activity

To configure the **Table Diff** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Change Types To Include | Required | Selected all of required type of changes you would like to see in output Options: New, Updated, Deleted, Unchanged. | New, Updated, Deleted |
| Group By | Required | Change Type will group by change type, Columns will group by provided columns, Repeated Columns will group by provided columns and will group columns in every record Options: Change Type, Columns, Repeated Columns. | Change Type, Columns, Repeated Columns |
| Group By Columns | Required | Provide the name of the columns, that records will be grouped by |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Old | Optional | Object |  |  |
| New | Optional | Object |  |  |

### Output

_The output fields are dynamically populated based on the activity result._
