# Xml To Json

The **XML to JSON** activity converts XML data into JSON format.

## Configuring the Xml To Json Activity

To configure the **Xml To Json** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specifies the name of the component. | MyActivity |
| Description | Optional | Optional description of the component. | Reads a file from S3 |
| Field Name Separator | Optional | Defines the separator used for field names. |  |
| Value Field Name | Optional | Defines the field name for storing element values. |  |
| Whitespace Handling | Optional | Controls how whitespace is handled Options: Trim, Preserve, Collapse. | Trim, Preserve, Collapse |
| Skip Attributes | Optional | Skips processing attributes. |  |
| Skip Element Values | Optional | Skips processing element values. |  |
| Text As Value | Optional | Treats text nodes as values. |  |
| Attributes As Fields | Optional | Converts attributes to fields. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Strip Levels | Optional | Number of levels to strip from the structure. |  |
| Attribute Prefix | Optional | Defines a prefix for attributes. |  |
| Naming Convention | Optional | Sets naming convention for fields Options: Preserve, Camel Case, Snake Case. | Preserve, Camel Case, Snake Case |
| Attribute Handling | Optional | Defines how attributes are handled Options: Prefix, None, Skip. | Prefix, None, Skip |
| Include Nodes | Optional | Specifies nodes to include. |  |
| Exclude Nodes | Optional | Specifies nodes to exclude. |  |
| Force Array Paths | Optional | Forces paths to be treated as arrays. |  |
| Auto Convert Numbers | Optional | Auto Convert value to Numbers |  |
| Auto Convert Boolean. | Optional | Auto Convert value to Boolean. |  |
