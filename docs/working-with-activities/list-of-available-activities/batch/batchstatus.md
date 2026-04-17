---
title: Batch Status
---


The **Batch Status** activity retrieves the current status of a batch.

## Configuring the Batch Status Activity

To configure the **Batch Status** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique name for this batch status activity | MyActivity |
| Description | Optional | Helpful description of this activity's purpose | Reads a file from S3 |
| Batch Id | Optional | Unique identifier for the batch to check status |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Batch Id | Optional | String | Unique identifier for the batch |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Status | Optional | String | Current status of the batch |  |
| Counters | Optional | Object |  |  |
| Context | Optional | Object | Context information for the batch |  |
| Ttl Seconds | Optional | Number | Time-to-live in seconds for the batch | 0 |
| Processing Limit | Optional | Number | Maximum number of records that can be processed simultaneously |  |
