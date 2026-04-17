---
title: "SFTP Connection"
---


The **SFTP Connection** resource defines the connection configuration for an SFTP server.

:::info
Before using any SFTP activities, configure an SFTP Connection resource in your workspace with valid credentials.
:::

## Configuring the SFTP Connection Activity

To configure the **SFTP Connection** activity, fill in the required fields in the activity panel.

### Configuration

| Field               | Required | Description                                              | Example              |
| ------------------- | -------- | -------------------------------------------------------- | -------------------- |
| Name                | Required | Specify the name for this activity.                      | MyActivity           |
| Description         | Optional | Specify the description for this activity.               | Reads a file from S3 |
| Host                | Required | Server hostname or IP address.                           | SFTP Host            |
| Port                | Required | Port number.                                             | SFTP Port            |
| User                | Required | Username for authentication.                             | SFTP User            |
| Authentication Type | Optional | Authentication method Options: SSH, Password.            | SSH, Password        |
| SSH Key             | Optional | Drag and drop an SSH key certificate for authentication. |                      |
| Password            | Optional | Password for authentication.                             | SFTP Password        |

### Advanced

| Field                | Required | Description                                                                          | Example                                   |
| -------------------- | -------- | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| Timeout              | Optional | Request timeout in milliseconds.                                                     | Timeout Value                             |
| Connection Timeout   | Optional | Connection timeout in milliseconds.                                                  | Connection Timeout Value                  |
| Host Verification    | Optional | Host key verification method for SFTP Options: NONE, Host Key, Host Key Fingerprint. | NONE, Host Key, Host Key Fingerprint      |
| Host Key             | Optional | Host Key is of the format - example.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQD...   | Host Key                                  |
| Host Key Fingerprint | Optional | hex encoded format - d0:be:ab:cd:ef:12:34:56:78:90:...                               | Host Key Fingerprint - Hex encoded format |
