---
title: Verify Signature
---


The **Verify Signature** activity verifies a digital signature against a certificate.

## Configuring the Verify Signature Activity

To configure the **Verify Signature** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Encryption Type | Required | Select the encryption type to verify the signature Options: PGP, SSL. | PGP, SSL |
| Encryption Resource | Required | Select the certificate used to verify the digital signature |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | The text or data that was originally signed |  |
| Signature | Optional | String | The digital signature string that needs to be verified |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Verified | Optional | Boolean | True if the digital signature is valid, false otherwise |  |
