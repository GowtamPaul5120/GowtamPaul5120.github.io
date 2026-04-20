---
title: "VerifySignature"
---

## Description

Confirms whether content hasn’t been tampered with and comes
from a trusted source.

## Configuration

| Field               | Required | Description                                                                                                                                            | Example                                                                  |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Name                | Required | The name of the activity. This name must be unique in a workflow.                                                                                      | Verify Deployment Script Signature                                       |
| Description         | Optional | The description of the activity. We recommend you make th<br/>s clear as possible to guide execution, foster understanding, and support collaboration. | Verifies the digital signature hash associated with a deployment script. |
| Encryption Type     | Required | The encryption method, such as PGP and SSL, used for verification.                                                                                     | PGP                                                                      |
| Encryption Resource | Required | <p>The certificate used to verify the signature. </p><p>You can drag and drop it from the list of available resources.</p>                             | NA                                                                       |

## Input

| Field     | Required | Data Type | Description                           | Example |
| --------- | -------- | --------- | ------------------------------------- | ------- |
| Content   | Yes      | String    | The original signed content.          | NA      |
| Signature | Yes      | String    | The digital signature to be verified. | NA      |

## Output

| Field    | Required | Data Type | Description                                               | Example |
| -------- | -------- | --------- | --------------------------------------------------------- | ------- |
| Verified | Yes      | Boolean   | Evaluates to `true` if the signature matches the content. | `true`  |
