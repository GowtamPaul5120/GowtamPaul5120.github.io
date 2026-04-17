---
title: Init Batch
---


The **Init Batch** activity initializes a new batch processing session.

## Configuring the Init Batch Activity

To configure the **Init Batch** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Unique name for this batch initialization activity | MyActivity |
| Description | Optional | Helpful description of this activity's purpose | Reads a file from S3 |
| Batch Id | Optional | Unique identifier for the batch to create |  |
| TTL | Optional | Time-to-live in hours for the batch |  |
| Use Batch if Exist | Optional | When checked, reuses an existing batch if found instead of creating a new one |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Notify On Events | Optional | Select one or more events you want to be notified about. When this event occurs, workflow specified will be triggered Options: None, Batch Created, Records Added, Records Processed. | None, Batch Created, Records Added |
| Auto Process Events | Optional | Select one or more events that should trigger automatic processing. When this event occurs, workflow specified will be triggered Options: None, Batch Created, Records Added, Records Processed. | None, Batch Created, Records Added |
| Processing Workflow | Optional | Identifier of the workflow to execute for Auto Process Events or Notification Events | process-records-flow |
| Processing Workflow Version | Optional | Version number of the workflow used for processing events. |  |
| Processing Limit | Optional | Maximum number of records that can be processed simultaneously |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Batch Id | Optional | String | Unique identifier for the batch |  |
| Total Records | Optional | Number | Initial number of records in the batch |  |
| Ttl | Optional | Number | Time-to-live in hours for the batch |  |
| Processing Limit | Optional | Number | Maximum records that can be processed simultaneously |  |
| Re Use Batch | Optional | Boolean | Whether to reuse an existing batch if found |  |
| Context | Optional | Object | Additional context information for the batch |  |
| Records | Optional | Array | Initial records for the batch |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Status | Optional | String | Status of the initialization operation |  |
| Processing Limit | Optional | Number | Maximum number of records that can be processed simultaneously |  |
| Ttl Seconds | Optional | Number | Maximum number of records that can be processed simultaneously |  |
