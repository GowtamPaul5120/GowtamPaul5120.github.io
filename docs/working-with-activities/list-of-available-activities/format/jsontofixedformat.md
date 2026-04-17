---
title: Json To Fixed Format
---


The **JSON to Fixed Format** activity converts JSON data into a fixed-width format.

## Configuring the Json To Fixed Format Activity

To configure the **Json To Fixed Format** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Fixed Width Formatter | Optional | Drag and drop a Fixed Width Format resource from the workspace. |  |
| Combine records into multi-line output | Optional | If checked, outputs a single string with all records separated by line breaks. Otherwise, outputs one line per record. |  |
| Record Types | Optional | Selected record types will be available in target |  |

### Input

_Map the required input fields to provide data for this activity._

### Output

_The output fields are dynamically populated based on the activity result._
