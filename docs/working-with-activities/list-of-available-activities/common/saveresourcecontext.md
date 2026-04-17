---
title: "Save Resource Context"
---


The **Save Resource Context** activity persists a resource context entry.

## Configuring the Save Resource Context Activity

To configure the **Save Resource Context** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Type | Optional | Select the type for this activity. Options: OAuth, Basic Auth, API Key, ABS, SFTP. |  |
| Validate Before Save | Optional | Specify the validate before save for this activity. | Validate Before Save |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Application | Optional | String | Application for which this Auth is restricted to |  |
| Env | Optional | String | User environment |  |
| Provider | Optional | String | Resource Provider , e.g; PayCor, Zoho etc |  |
| Resource Type | Optional | String | Type of resource (e.g., database, oauth) |  |
| Tags | Optional | Array | Array of tags for categorization and filtering |  |
| Config | Optional | String |  |  |
| Validation Context | Optional | String |  |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Op | Optional | String | Operation performed (save, get or delete) |  |
| Status | Optional | String | Operation status |  |
| Id | Optional | String | Internal resource ID |  |
| External Id | Optional | String | External resource identifier |  |
| Message | Optional | String | Status or error message |  |
| Is Valid | Optional | Boolean | Validation result status |  |
| Error Message | Optional | String | Validation error message |  |
| Additional Data | Optional | Object | Additional validation data |  |
