---
title: Un Compress
---


The **Uncompress** activity decompresses data from the specified compression format.

## Configuring the Un Compress Activity

To configure the **Un Compress** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Compression Format | Optional | Compression algorithm Options: ZIP, GZIP. | ZIP, GZIP |
| Archive Format | Optional | Archive format (e.g., ZIP, TAR, GZIP). | NONE, TAR |
| Password | Optional | Password for the archive. |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | Data content. |  |
| Password | Optional | String | Encryption or archive password. |  |
| Filters | Optional | Array | File filters for extraction. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Files | Optional | Array | Array of files. |  |
