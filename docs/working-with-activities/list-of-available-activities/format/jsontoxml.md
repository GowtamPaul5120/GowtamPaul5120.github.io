---
title: "Json To Xml"
---


The **JSON to XML** activity converts JSON data into XML format.

## Configuring the Json To Xml Activity

To configure the **Json To Xml** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Pretty Print | Optional | Formats XML with indentation and line breaks for readability |  |
| Skip Empty Elements | Optional | Exclude elements with empty string values |  |
| Skip Empty Attributes | Optional | Exclude attributes with empty string values |  |
| Skip Null Elements | Optional | Exclude elements with null values |  |
| Skip Null Attributes | Optional | Exclude attributes with null values |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| $schema | Optional | String | Reference to this schema |  |
| declaration | Optional | Object | XML declaration settings |  |
| namespaces | Optional | Object | Namespace declarations. 'default' key for default namespace, other keys are prefixes. |  |
| Json Content | Optional | Object |  |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Xml Data | Optional | String |  |  |
