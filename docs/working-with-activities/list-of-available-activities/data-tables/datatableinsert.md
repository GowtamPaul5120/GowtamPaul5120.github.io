---
title: "Data Table Insert"
sidebar_position: 2
---


The **Data Table Insert** activity inserts a new record into a data table.

## Configuring the Data Table Insert Activity

To configure the **Data Table Insert** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Brief description of what this step does. | Reads a file from S3 |
| Data Table | Required | Select the data table into which records will be inserted. |  |
| TTL | Required | Time to live in minutes for each inserted record. Default is 60 minutes. |  |

### Input

_Map the required input fields to provide data for this activity._

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Rows Affected | Optional | Integer |  |  |
