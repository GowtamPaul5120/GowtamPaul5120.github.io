---
title: Configuring an S3 (Amazon Web Services) Resource
---


To add an S3 (Amazon Web Services) connection resource:

1. Navigate to the **Resources** folder of the application for which you want to configure the S3 connection resource. Right-click and select **Add Resource**.\
   \
   The Configure New Resource modal appears.<br/>
2. Select **S3 Connection** as the connection type and click **Save**.\
   \
   Your resource is now created, and you can configure it as appropriate.<br/>
3. To configure a resource, click on it.

Here's a table that lists out details associated with each of the fields in the S3 Connection Configuration panel.

| Field             | Required | Content Type | Description                                                                                                                                                                                                             | Example                                                                            |
| ----------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Name              | Required | String       | A user-friendly name for this connection. This name will be used within the application to identify this specific storage account.                                                                                      | Website Media Account                                                              |
| Description       | Optional | String       | An optional field to provide a more detailed explanation or purpose of this connection.                                                                                                                                 | Used by the marketing team to host image and video assets for the company website. |
| Auth Type         | Required | String       | <p>Specifies the method used to authenticate and authorize access to the S3 bucket.</p><p>As of now, only Access Key authentication type is supported.</p>                                                              | Access Key                                                                         |
| Region            | Required | String       | The AWS region where your target S3 bucket is located. Choosing the correct region is essential for performance and to avoid unnecessary data transfer costs.                                                           | us-east-1 (North Virginia)                                                         |
| Access Key ID     | Required | String       | <p>The public identifier of your AWS IAM user's access key.</p><p></p><p><strong>Note:</strong> <em>Exercise caution when handling access keys and ensure the appropriate access permissions have been set up.</em></p> | AKIAIOSFODNN7EXAMPLE                                                               |
| Secret Access Key | Required | String       | <p>The private key associated with the access key ID. </p><p><strong>Note:</strong> <em>This key must be kept confidential and securely managed.</em></p>                                                               | wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY                                           |
