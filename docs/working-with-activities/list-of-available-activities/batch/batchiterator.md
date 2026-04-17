---
title: Batch Iterator
---


The **Batch Iterator** activity iterates over all records in a batch.

## Configuring the Batch Iterator Activity

To configure the **Batch Iterator** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique name for this iterator activity | MyActivity |
| Description | Optional | Helpful description of this activity's purpose | Reads a file from S3 |
| Batch Id | Optional | Unique identifier for the batch to iterate |  |
| Action | Optional | Action to perform on the batch Options: Next, Reset. |  |
| Batch Size | Optional | Number of records to fetch in one iteration | 100 |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Batch Id | Optional | String | Unique identifier for the batch |  |
| Action | Optional | String | Action to perform: next (fetch records) or reset (return records to queue) | next |
| Batch Size | Optional | Number | Number of records to fetch (for 'next' action) | 1 |
| Record Ids | Optional | Array | Record IDs to reset (for 'reset' action) |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Status | Optional | String | Current status of the batch operation |  |
| Counters | Optional | Object |  |  |
| Context | Optional | Object | Context information for the batch |  |
| Processing Limit | Optional | Number | Maximum number of records that can be processed simultaneously |  |
| Records | Optional | Array | Records fetched from the batch (for 'next' action) |  |
| Reset Count | Optional | Number | Number of records reset (for 'reset' action) |  |
