---
title: "Set Last Value"
---


The **Set Last Value** activity stores a value for later retrieval.

## Configuring the Set Last Value Activity

To configure the **Set Last Value** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Key | Optional | Key to get the last value | key |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Key | Optional | String |  | key |
| Value | Optional | String |  |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| New Value | Optional | String |  |  |
| Old Value | Optional | Object |  |  |
