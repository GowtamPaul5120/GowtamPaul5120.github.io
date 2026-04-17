---
title: "Generate Error"
---


The **Generate Error** activity throws a structured error to halt or redirect workflow execution.

## Configuring the Generate Error Activity

To configure the **Generate Error** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Error Code | Optional | Specify the error code for this activity. | Error Code for the Generated Error |
| Error Message | Optional | Specify the error message for this activity. | Error Message for the Generated Error |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Error Code | Optional | String |  | Error Code for the Generated Error |
| Error Message | Optional | String |  | Error Message for the Generated Error |
| Details | Optional | Object |  |  |
