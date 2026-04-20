---
title: "Delete Resource Context"
sidebar_position: 5
---


The **Delete Resource Context** activity removes a resource context entry.

## Configuring the Delete Resource Context Activity

To configure the **Delete Resource Context** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Application | Optional | String | Application for which this Auth is restricted to |  |
| Env | Optional | String | User environment |  |
| Provider | Optional | String | Resource Provider , e.g; PayCor, Zoho etc |  |
| Resource Type | Optional | String | Type of resource (e.g., database, oauth) |  |
| Tag | Optional | Object | on of the tag to match the resource |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Op | Optional | String | operation performed (save, get or delete) |  |
| Status | Optional | String | Operation status |  |
