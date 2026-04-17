---
title: "Add To Batch"
---


The **Add to Batch** activity adds a record to an existing batch.

## Configuring the Add To Batch Activity

To configure the **Add To Batch** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique name for this add to batch activity | MyActivity |
| Description | Optional | Helpful description of this activity's purpose | Reads a file from S3 |
| Batch Id | Optional | Unique identifier for the batch to add records to |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Batch Id | Optional | String | Unique identifier for the batch |  |
| Count | Optional | Number | Number of records to add (legacy mode) | 1 |
| Records | Optional | Array | Records to add to the batch |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Status | Optional | String | Current status of the batch |  |
| Counters | Optional | Object |  |  |
| Context | Optional | Object | Context information for the batch |  |
| Processing Limit | Optional | Number | Maximum number of records that can be processed simultaneously |  |
