# Log

The **Log** activity writes a message to the workflow execution log at a specified log level.

## Configuring the Log Activity

To configure the **Log** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Log Level | Required | Select the log level for this activity. Options: Debug, Info, Warn, Error. | Debug, Info, Warn |
| Logger | Optional | Message will be logged using this logger | Custom Logger Name |

### Input

_Map the required input fields to provide data for this activity._
