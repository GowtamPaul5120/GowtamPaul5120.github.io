# Read ABS File

The **Read ABS File** activity reads a file from an Azure Blob Storage container.

## Configuring the Read ABS File Activity

To configure the **Read ABS File** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the step, should be unique within this workflow. | MyActivity |
| Description | Optional | Optional description about the work performed by this step. | Reads a file from S3 |
| ABS Connection | Required | Drag and drop a ABSConnection resource from the workspace. |  |
| Container Name | Optional | Name of the blob container in ABS. (mapping supported) | my-data-bucket |
| Blob Path | Optional | Path inside the container where blob is located. (mapping supported) | data/reports/2024/ |
| Blob Name | Optional | Name of the blob file inside container. (mapping supported) | report-2024.csv |
| Content Type | Optional | Format of the file content (CSV, JSON, XML, etc.) Options: CSV, JSON, XML, TEXT, BINARY. |  |
| Select Context | Optional | Authorization context to use for connecting to ABS. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Encryption Type | Optional | Select if the file is encrypted with PGP or not Options: NONE, PGP. |  |
| Encryption Resource | Optional | Certificate resource used for encryption/decryption. |  |
| Compression Type | Optional | Specify if the file is compressed using ZIP or not Options: NONE, ZIP. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Container Name | Optional | String | Name of Azure Blob Storage container where the blob is stored. |  |
| Blob Path | Optional | String | Path within the container where the blob is located. |  |
| Blob Name | Optional | String | Name of the blob to be read. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | Can be any valid JSON value |  |
| Content Length | Optional | Number |  |  |
| Container Name | Optional | String | Name of the Azure Blob Storage container where the blob is read from. |  |
| Blob Path | Optional | String | Path within the container where the blob is read from. |  |
| Blob Name | Optional | String | Name of the blob that is read |  |
| Created Time | Optional | String | Time this blob was created |  |
| Last Modified | Optional | String | Time this blob was last modified |  |
