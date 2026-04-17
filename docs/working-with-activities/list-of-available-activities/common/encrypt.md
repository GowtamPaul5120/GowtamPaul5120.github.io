---
title: "Encrypt"
---


The **Encrypt** activity encrypts data using the specified algorithm and key.

## Configuring the Encrypt Activity

To configure the **Encrypt** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the Encrypt activity step | MyActivity |
| Description | Optional | Brief description of the encryption operation | Optional: describe what this activity does |
| Encryption Type | Required | Select the encryption method to be used (e.g. PGP or SSL) Options: PGP, SSL. | PGP, SSL |
| Encryption Resource | Required | The certificate used to perform the encryption |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | The original text or data to be encrypted |  |
| Secret Key | Optional | String | Secret key used during encryption (Base64-encoded) |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Encrypted Data | Optional | String | The encrypted data as a Base64-encoded string |  |
