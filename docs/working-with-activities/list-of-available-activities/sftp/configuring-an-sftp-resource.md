# Configuring an SFTP Resource

To add an SFTP connection resource:

1. Navigate to the **Resources** folder of the application for which you want to configure the SFTP connection resource. Right-click and select **Add Resource**.\
   \
   The Configure New Resource modal appears.
2. Select **SFTP Connection** as the connection type and click **Save**.\
   \
   Your resource is now created, and you can configure it as appropriate.
3. To configure a resource, click on it.

Here's a table that lists out details associated with each of the fields in the ABS Connection Configuration panel. This panel has two tabs, Configuration and Advanced.

## Basic Configuration Details

| Field               | Required                                                  | Content Type      | Description                                                                                                                              | Example                                                              |
| ------------------- | --------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Name                | Required                                                  | String            | A unique identifier for the SFTP configuration. This name will be used across the application to identify this specific storage account. | DailySalesSFTP                                                       |
| Description         | Optional                                                  | String            | Optional notes or context about the configuration.                                                                                       | Account used to connect to the sales server to upload daily reports. |
| Host                | Required                                                  | String            | The hostname or IP address of the SFTP server.                                                                                           | sftp.salesdata.com                                                   |
| Port                | Required                                                  | Number (Integer)  | The port used for the SFTP connection. Default is usually 22.                                                                            | 22                                                                   |
| User                | Required                                                  | String            | The username used to authenticate with the SFTP server.                                                                                  | sales_uploader                                                       |
| Authentication Type | Required                                                  | String            | Choose the method of authentication: SSH Key or Password.                                                                                | SSH                                                                  |
| SSH Key             | Required if SSH is the authentication type selected.      | Text (Multi-line) | The private SSH key used for authentication, typically in PEM format.                                                                    | -----BEGIN OPENSSH PRIVATE KEY----- ...                              |
| Password            | Required if Password is the authentication type selected. | String            | The password required to log into the SFTP server.                                                                                       | NA                                                                   |

![SFTP Configuration](../../../../assets/images/SFTP-Configuration.png)

## Advanced Configuration Details

| Field              | Required | Content Type     | Description                                                            | Example |
| ------------------ | -------- | ---------------- | ---------------------------------------------------------------------- | ------- |
| Timeout            | Optional | Number (Seconds) | Maximum time to wait for the full file transfer operation to complete. | 120     |
| Connection Timeout | Optional | Number (Seconds) | Time to wait while establishing the SFTP connection before failing.    | 30      |
| Host Verification  | Optional | String           | Specifies how the server's identity is verified during connection:     |

- **None**: No host verification (not recommended).
- **Host Key**: Validates against a known SSH host key. Displays the Host Key field.
- **Host Key Fingerprint**: Validates using a specific key fingerprint. Displays the Fingerprint field. | Host Key |
  | Host Key | Required if Host Key is selected as the method for host verification. | Text (SSH Key) | The full public SSH host key of the server to verify against. | ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA7... |
  | Host Key Fingerprint | Required if Host Key Fingerprint is selected as the method for host verification. | Text (String) | The expected fingerprint of the server’s host key (SHA256, MD5, etc.). | SHA256:AbCdEfGhIjKlMnOpQrStUvWxYz1234567890== |

![SFTP Advanced Configuration](../../../../assets/images/SFTP-Configuration-Advanced.png)
