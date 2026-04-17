---
title: "Group And Compare"
---


The **Group and Compare** activity groups records and compares them across two datasets.

## Configuring the Group And Compare Activity

To configure the **Group And Compare** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Group By Keys | Required | Fields used to group similar records together. |  |
| Comparison | Optional | Fields used to match and compare records from old and new data. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | Object |  |  |
| Old | Optional | Object |  |  |
| New | Optional | Object |  |  |

### Output

_The output fields are dynamically populated based on the activity result._
