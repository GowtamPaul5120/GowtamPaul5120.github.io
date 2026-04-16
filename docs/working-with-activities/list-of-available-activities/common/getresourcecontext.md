# Get Resource Context

The **Get Resource Context** activity retrieves a resource context entry.

## Configuring the Get Resource Context Activity

To configure the **Get Resource Context** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Optional | Name for this Step | MyActivity |
| Description | Optional | Description of what this step is intended to do | Reads a file from S3 |
| Select Context | Optional | Select the contexts that you wish to set, input mapping is generated based on the selections |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Op | Optional | String |  |  |
| Resource Context | Optional | Object |  |  |
| Status | Optional | String | The status of the operation or request result |  |
