# Record Processed

The **Record Processed** activity marks a batch record as successfully processed.

## Configuring the Record Processed Activity

To configure the **Record Processed** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique name for this record processed activity | MyActivity |
| Description | Optional | Helpful description of this activity's purpose | Reads a file from S3 |
| Batch Id | Optional | Unique identifier for the batch containing processed records |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Batch Id | Optional | String | Unique identifier for the batch |  |
| Result | Optional | String | Result of processing (success or error) | success |
| Count | Optional | Number | Number of records processed (for legacy batch mode) | 1 |
| Record Ids | Optional | Array | IDs of specific records that were processed |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Status | Optional | String | Current status of the batch |  |
| Counters | Optional | Object |  |  |
| Context | Optional | Object | Context information for the batch |  |
| Completed Count | Optional | Number | Number of records completed in this operation |  |
