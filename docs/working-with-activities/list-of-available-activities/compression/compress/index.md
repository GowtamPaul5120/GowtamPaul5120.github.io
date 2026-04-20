---
title: "Compress"
sidebar_position: 1
---


The **Compress** activity compresses data using the specified compression format.

## Configuring the Compress Activity

To configure the **Compress** activity, fill in the required fields in the activity panel.

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
| Password | Optional | String | Encryption or archive password. |  |
| Files | Optional | Array | Array of files. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | Content. |  |
