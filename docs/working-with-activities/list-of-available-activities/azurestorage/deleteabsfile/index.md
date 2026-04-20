---
title: "DeleteABSFile"
---

Description

Deletes blob files in the specified virtual directory.

:::info

- Ensure that you have a properly configured SFTP connection resource set up under the Resources folder.
- SFTP file names are typically case-sensitive; therefore, abc.JPG, abc.jpg, and ABC.jpg will be saved as different files. To ensure consistency, we recommend using lower-case file names and extensions: abc.jpg.
  :::

## Configuring the DeleteABSFile Activity

The DeleteABSFile Configuration panel has four tabs: [Configuration](deleteabsfile.md#configuration), Advanced, Input, and Output.

### Configuration

| Field          | Required | Description                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name           | Required | The name of the activity. This name must be unique in a workflow.                                                                                                                                                                                                                                                     | Purge Temporary Processing Files                                                                                                                                                                                                                                                                                                                                                        |
| Description    | Optional | The description of the activity. We recommend you make this as clear as possible to guide execution, foster understanding, and support collaboration.                                                                                                                                                                 | Deletes temporary processing files after the regulatory retention period.                                                                                                                                                                                                                                                                                                               |
| Resource       | Required | A predefined resource for accessing ABS blobs.                                                                                                                                                                                                                                                                        | /Resources/ABSConnection                                                                                                                                                                                                                                                                                                                                                                |
| Container Name | Required | The name of the container in ABS.                                                                                                                                                                                                                                                                                     | temp-processing                                                                                                                                                                                                                                                                                                                                                                         |
| File Path      | Required | <p>The location of the virtual directory that contains the blob that you want to delete.</p><p><strong>Note</strong></p><p><em>While entering the path, only include the virtual directories without adding the container name, because the container name is already specified (see Container Name, above).</em></p> | <p>For example, consider the following complete path:</p><p><code>temp-processing/image-processing/temp/</code></p><p>In this complete path:</p><ul><li><code>temp-processing</code> is the blob container.</li><li><code>temp</code> is the virtual directory that contains the blob you want to update.</li><li><code>image-processing/temp</code> is the path to the blob.</li></ul> |
| File Name      | Required | The name of the blob file that you want to delete.                                                                                                                                                                                                                                                                    | job-123-original.jpg.tmp                                                                                                                                                                                                                                                                                                                                                                |



See the Advanced Configuration section below for more details.

### Input

| Field    | Required | Data Type | Description                                                                                                        | Example                    |
| -------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| filepath | Optional | String    | The location of the virtual directory (without the container name) that contains the blob that you want to delete. | `image-processing/temp`    |
| filename | Optional | String    | The name of the file that you want to delete.                                                                      | `job-123-original.jpg.tmp` |

### Output

| Field       | Required | Data Type | Description                           | Example |
| ----------- | -------- | --------- | ------------------------------------- | ------- |
| JSON Schema | Optional | NA        | A custom schema that can be imported. | NA      |
