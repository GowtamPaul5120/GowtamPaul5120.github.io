# Decrypt

The **Decrypt** activity decrypts data using the specified algorithm and key.

## Configuring the Decrypt Activity

To configure the **Decrypt** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Name of the Decrypt activity step | MyActivity |
| Description | Optional | Brief description of the decryption operation | Optional: describe what this activity does |
| Encryption Type | Required | Select the encryption method used to encrypt the input (e.g. PGP or SSL) Options: PGP, SSL / RSA, AES. | PGP, SSL / RSA, AES |
| Encryption Resource | Required | The certificate used to perform the decryption |  |
| SecretKey Format | Required | Select Secret Key format Options: Text, Binary (Base 64). | Text, Binary (Base 64) |
| Output Format | Required | Select Output format Options: Text, Binary (Base 64). | Text, Binary (Base 64) |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | Encrypted content to be decrypted (Base64-encoded) |  |
| Secret Key | Optional | String | Secret key used during decryption (Base64 or Text) |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Content | Optional | String | The original plaintext result after decryption |  |
