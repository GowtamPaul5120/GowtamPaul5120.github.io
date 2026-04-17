---
title: "Decrypt"
---


## Description

Decrypts previously encrypted base64-encoded data using the appropriate certificate and&#x20;algorithm to retrieve the original content.

## Configuration

| Field               | Required | Description                                                                                                                                           | Example                                                   |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Name                | Required | The name of the activity. This name must be unique in a workflow.                                                                                     | Decrypt Zipped Log Files                                  |
| Description         | Optional | The description of the activity. We recommend you make this as clear as possible to guide execution, foster understanding, and support collaboration. | Decrypts the retrieved ZIP file containing the log files. |
| Encryption Type     | Required | The encryption method, such as PGP and SSL, which was originally used to encrypt the file, and which will now be used to decrypt it.                  | PGP                                                       |
| Encryption Resource | Required | The certificate used for decryption.                                                                                                                  | NA                                                        |
| Algorthm Type       | Required | The algorithm, such as RSA and AES, used for decryption.                                                                                              | RSA                                                       |

## Input

| Field      | Required | Data Type | Description                                           | Example |
| ---------- | -------- | --------- | ----------------------------------------------------- | ------- |
| Content    | Yes      | String    | The encrypted data to be decrypted.                   | NA      |
| Secret Key | Yes      | String    | The base64-encoded secret key used during decryption. | NA      |

## Output

| Field          | Required | Data Type | Description                         | Example |
| -------------- | -------- | --------- | ----------------------------------- | ------- |
| Decrypted Data | Yes      | Boolean   | The original text after decryption. | NA      |
