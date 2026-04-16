# Use Profile

The **Use Profile** activity applies a configuration profile to the workflow context.

## Configuring the Use Profile Activity

To configure the **Use Profile** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Brief description of what this step does. | Reads a file from S3 |
| Profile Name | Optional | Name of the profile to replace the current one in this workflow. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Profile Name | Optional | String | Name of the profile to use in this workflow. |  |
