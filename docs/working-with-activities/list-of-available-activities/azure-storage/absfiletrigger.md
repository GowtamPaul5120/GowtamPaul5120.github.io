# ABS File Trigger

The **ABS File Trigger** activity starts a workflow when a file event occurs in an Azure Blob Storage container.

## Configuring the ABS File Trigger Activity

To configure the **ABS File Trigger** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Optional | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Path | Required | Path to the target location. | /users |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Method | Optional | String | HTTP method used for the webhook. Typically POST is used for event delivery. |  |
| Uri | Optional | String | Endpoint URI where webhook requests are received. Supports path parameters `{}` and query parameters. |  |
| Headers | Optional | Object | Static HTTP headers expected in the webhook request. |  |
| Additional Headers | Optional | Array | Additional custom headers that must be validated. |  |
| Query Params | Optional | Object | Query parameters expected in the webhook URL. |  |
| Path Params | Optional | Object | Path parameters replacing placeholders in the URI. |  |
| Body | Optional | Object | Payload containing Azure Event Grid events for Blob Storage. |  |
