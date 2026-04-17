---
title: List of Available Activities
---


Activity groups in Koodisi are collections of related activities. For example, the AWSStorage activity group contains all activities that enable you to work with AWS storage.

Here's a list of all available activities and activity groups, organized alphabetically:

:::info
Depending on your administrator's configurations and your subscription level, some activities may not be accessible.
:::

| Activity Group | Activity | Description                                           |
| -------------- | -------- | ----------------------------------------------------- |
| AWSStorage     |          | Contains activities that enable you to work with AWS. |
|                | S3List   | Lists the contents of an S3 bucket.                   |
|                | S3Read   | Reads a file on S3.                                   |
|                | S3Write  | Writes to a file on S3.                               |
|                | S3Delete | Deletes a file in S3.                                 |

The HTTP group includes activities designed for managing HTTP-based communication, such as invoking APIs and handling webhook integrations. These activities enable seamless interaction with external services over HTTP protocols.

---

### **Rest Service**

Used to configure and invoke REST APIs with flexible request and response handling.

| **Tab** | **Field**     | **Required** | **Description**                              |
| ------- | ------------- | ------------ | -------------------------------------------- |
| Config  | Name          | No           | Unique identifier for the REST service.      |
|         | Description   | No           | Optional description for context.            |
|         | Path          | Yes          | Endpoint path for the REST service.          |
|         | Method        | Yes          | HTTP method (GET, POST, etc.).               |
|         | Media Types   | Yes          | Accepted media types for requests/responses. |
| Headers | Name          | Yes          | Header name for HTTP requests.               |
|         | Default Value | Optional     | Default value for the header.                |
|         | Request       | Optional     | Specifies if the header is for requests.     |
|         | Response      | Optional     | Specifies if the header is for responses.    |
| Params  | Name          | Yes          | Parameter name.                              |
|         | Default Value | Optional     | Default value for the parameter.             |
|         | Type          | Optional     | Data type of the parameter.                  |
|         | Required      | Optional     | Marks parameter as mandatory.                |
| Output  | Import Schema | No           | Allows importing a schema for output.        |

---

### **REST Client**

Facilitates sending HTTP requests to external services with custom configurations.

| **Tab** | **Field**       | **Required** | **Description**                                   |
| ------- | --------------- | ------------ | ------------------------------------------------- |
| Config  | Name            | No           | REST client configuration name.                   |
|         | Description     | No           | Optional description for the REST client.         |
|         | Scheme          | Yes          | Protocol type (HTTP/HTTPS).                       |
|         | URI             | Yes          | Full URI for the REST client.                     |
|         | Host            | Yes          | Hostname of the API server.                       |
|         | Port            | Yes          | Port number for the API server.                   |
|         | Method          | Yes          | HTTP method used by the client (GET, POST, etc.). |
| Headers | Name            | Yes          | Name of the HTTP header.                          |
|         | Default Value   | Optional     | Default value for the header.                     |
|         | Request         | Optional     | Specifies if the header is for requests.          |
|         | Response        | Optional     | Specifies if the header is for responses.         |
| Params  | Name            | Yes          | Parameter name.                                   |
|         | Default Value   | Optional     | Default parameter value.                          |
|         | Type            | Optional     | Data type of the parameter.                       |
|         | Required        | Optional     | Marks parameter as mandatory.                     |
| Auth    | Auth Type       | No           | Authentication type (e.g., Basic, OAuth).         |
| Input   | Mapper          | No           | Input mapping configuration.                      |
|         | Anonymous Array | Optional     | Toggle to map anonymous arrays.                   |
| Output  | Import Schema   | No           | Allows importing a schema for output.             |

---

### **Webhook**

Handles incoming HTTP requests triggered by external services or events.

| **Tab**           | **Field**             | **Required** | **Description**                       |
| ----------------- | --------------------- | ------------ | ------------------------------------- |
| Config            | Name                  | No           | Webhook name.                         |
|                   | Description           | No           | Webhook description.                  |
|                   | Path                  | Yes          | Webhook URL path.                     |
|                   | Method                | Yes          | HTTP method (POST, GET, etc.).        |
|                   | Allowed Media Types   | Yes          | Accepted media types.                 |
| Headers           | Name                  | Yes          | Header name for HTTP requests.        |
|                   | Default Value         | Optional     | Default value for the header.         |
| Webhook Signature | Encoding              | Yes          | Encoding for signature.               |
|                   | Algorithm             | Yes          | Signature algorithm.                  |
|                   | Secret                | Yes          | Secret key for signing requests.      |
|                   | Signed Content Format | Optional     | Format for signed content.            |
| Output            | Import Schema         | Optional     | Allows importing a schema for output. |

## Common Activities Group

The Common Activities group includes versatile tools for data manipulation, workflow control, logging, error handling, and general utilities. These activities support foundational workflow operations.

---

### **Response**

Sends a response within a workflow for downstream systems or services.

| **Tab** | **Field**       | **Required** | **Description**                                |
| ------- | --------------- | ------------ | ---------------------------------------------- |
| Config  | Name            | Yes          | Name of the response activity.                 |
|         | Description     | Optional     | Optional description for context.              |
|         | Stream          | Optional     | Enables response streaming.                    |
|         | Stream Resource | Optional     | Specifies the resource for streaming.          |
| Input   | Mapper          | Yes          | Maps input values for the response.            |
| Output  | Import Schema   | Optional     | Allows importing a schema for response output. |

---

### **UpdateWFVariable**

Updates workflow variables dynamically during execution.

| **Tab** | **Field**   | **Required** | **Description**                                 |
| ------- | ----------- | ------------ | ----------------------------------------------- |
| Config  | Name        | Yes          | Unique name for the workflow variable activity. |
|         | Description | Optional     | Optional description for context.               |
| Input   | Mapper      | Yes          | Maps input values to update workflow variables. |

---

### **Log**

Logs messages to track workflow execution or debug issues.

| **Tab** | **Field**   | **Required** | **Description**                                   |
| ------- | ----------- | ------------ | ------------------------------------------------- |
| Config  | Name        | Yes          | Name of the log activity.                         |
|         | Description | Optional     | Optional description for clarity.                 |
|         | Log Level   | Yes          | Level of log severity (e.g., Debug, Info, Error). |
|         | Logger      | Optional     | Logger name or identifier for grouping logs.      |

---

### **GenerateError**

Generates custom errors to handle unexpected situations in workflows.

| **Tab** | **Field**     | **Required** | **Description**                             |
| ------- | ------------- | ------------ | ------------------------------------------- |
| Config  | Name          | Yes          | Name of the error-generating activity.      |
|         | Description   | Optional     | Description of the error.                   |
|         | Error Code    | Optional     | Specifies the error code to generate.       |
|         | Error Message | Optional     | Custom message for the error.               |
| Input   | Mapper        | Yes          | Maps input values to provide error context. |

---

### **Lookup**

Fetches values from a predefined table based on input criteria.

| **Tab** | **Field**       | **Required** | **Description**                             |
| ------- | --------------- | ------------ | ------------------------------------------- |
| Config  | Name            | Yes          | Unique identifier for the lookup activity.  |
|         | Description     | Optional     | Optional description for the lookup.        |
|         | Lookup Table    | Yes          | Name of the table to perform the lookup.    |
|         | Workflow Loader | Optional     | Specifies the workflow loader interaction.  |
| Input   | Mapper          | Yes          | Maps input values to lookup parameters.     |
| Output  | Import Schema   | Optional     | Allows importing schema for lookup results. |

---

### **LookupUpsert**

Performs insert or update operations in a lookup table.

| **Tab** | **Field**     | **Required** | **Description**                                   |
| ------- | ------------- | ------------ | ------------------------------------------------- |
| Config  | Name          | Yes          | Unique identifier for the lookup upsert activity. |
|         | Description   | Optional     | Optional description for clarity.                 |
|         | Lookup Table  | Yes          | Table to perform the upsert operation.            |
| Input   | Mapper        | Yes          | Maps input values for upsert.                     |
| Output  | Import Schema | Optional     | Allows importing schema for upsert results.       |

---

### **Subflow**

Executes another workflow as a sub-process, with optional waiting for completion.

| **Tab** | **Field**           | **Required** | **Description**                                   |
| ------- | ------------------- | ------------ | ------------------------------------------------- |
| Config  | Name                | Yes          | Name of the subflow activity.                     |
|         | Description         | Optional     | Optional description for clarity.                 |
|         | Subflow Path        | Yes          | Path to the subflow workflow.                     |
|         | Wait for Completion | Optional     | Specifies whether to wait for subflow completion. |

---

### **SendToEngage**

Sends data to an Engage platform for further processing or tracking.

| **Tab**          | **Field**     | **Required** | **Description**                                 |
| ---------------- | ------------- | ------------ | ----------------------------------------------- |
| Config           | Name          | Yes          | Name of the SendToEngage activity.              |
|                  | Description   | Optional     | Optional description for clarity.               |
| Workflow Context | Import Schema | Optional     | Allows importing schema for engaging workflows. |

---

### **Schedule**

Automates execution based on time-based triggers.

| **Tab**  | **Field**            | **Required** | **Description**                               |
| -------- | -------------------- | ------------ | --------------------------------------------- |
| Config   | Name                 | Yes          | Unique identifier for the schedule activity.  |
|          | Description          | Optional     | Optional description for the schedule.        |
|          | Type                 | Yes          | Type of schedule (e.g., Recurring, One-Time). |
|          | Start On             | Yes          | Start date for the schedule.                  |
|          | At Time              | Yes          | Time to start the schedule.                   |
|          | Run Interval         | Yes          | Interval for repeating the schedule.          |
| Advanced | Date to End Schedule | Optional     | Optional end date for the schedule.           |
|          | Failure Threshold    | Yes          | Threshold for allowable failures.             |

---

### **Mapper**

Maps and transforms data from one format to another.

| **Tab** | **Field**   | **Required** | **Description**                             |
| ------- | ----------- | ------------ | ------------------------------------------- |
| Config  | Name        | Yes          | Name of the mapper activity.                |
|         | Description | Optional     | Description for the mapper.                 |
| Input   | Mapper      | Yes          | Maps input values for transformation.       |
| Output  | Mapper      | Yes          | Specifies how transformed data is returned. |

---

### **End**

Marks the termination of a workflow.

| **Tab** | **Field**   | **Required** | **Description**                                 |
| ------- | ----------- | ------------ | ----------------------------------------------- |
| Config  | Name        | Yes          | Name of the activity to end the workflow.       |
|         | Description | Optional     | Optional description for clarity.               |
| Input   | Mapper      | Yes          | Maps input values to finalize workflow outputs. |

## Azure Storage Group

### S3Read

Reads files from an Amazon S3 bucket with options for encryption and compression.

| **Tab** | **Field**           | **Required** | **Description**                                    |
| ------- | ------------------- | ------------ | -------------------------------------------------- |
| Config  | Name                | Yes          | Unique identifier for the S3Read activity.         |
|         | Description         | Optional     | Optional description of the activity.              |
|         | Resource            | Yes          | AWS S3 connection resource.                        |
|         | Bucket Name         | Yes          | Name of the S3 bucket.                             |
|         | File Path           | Yes          | Path to the file within the bucket.                |
|         | File Name           | Optional     | Name of the file to be read.                       |
|         | Encryption Type     | Optional     | Type of encryption used (e.g., NONE, SSE-S3).      |
|         | Encryption Resource | Optional     | Encryption key resource.                           |
|         | Compression Type    | Optional     | Compression format of the file (e.g., NONE, GZIP). |
|         | Content Type        | Yes          | Format of the file content (e.g., JSON, CSV).      |
|         | Buffer Size         | Optional     | Size of the buffer for reading files, in bytes.    |

---

### S3Write

Writes data to an S3 bucket with support for encryption, compression, and append options.

| **Tab** | **Field**           | **Required** | **Description**                                     |
| ------- | ------------------- | ------------ | --------------------------------------------------- |
| Config  | Name                | Yes          | Unique identifier for the S3Write activity.         |
|         | Description         | Optional     | Optional description of the activity.               |
|         | Resource            | Yes          | AWS S3 connection resource.                         |
|         | Bucket Name         | Yes          | Name of the S3 bucket.                              |
|         | File Path           | Yes          | Path where the file will be written in the bucket.  |
|         | File Name           | Yes          | Name of the file to create or update.               |
|         | Encryption Type     | Optional     | Type of encryption to apply (e.g., NONE, SSE-S3).   |
|         | Encryption Resource | Optional     | Encryption key resource.                            |
|         | Compression Type    | Optional     | Compression format for the file (e.g., NONE, GZIP). |
|         | Content Type        | Yes          | Format of the file content (e.g., JSON, CSV).       |
|         | Create Directory    | Optional     | Creates the directory if it does not exist.         |
|         | Append              | Optional     | Appends data to the file if enabled.                |

---

### S3Delete

Deletes files from a specified Amazon S3 bucket.

| **Tab** | **Field**   | **Required** | **Description**                              |
| ------- | ----------- | ------------ | -------------------------------------------- |
| Config  | Name        | Yes          | Unique identifier for the S3Delete activity. |
|         | Description | Optional     | Optional description of the activity.        |
|         | Resource    | Yes          | AWS S3 connection resource.                  |
|         | Bucket Name | Yes          | Name of the S3 bucket.                       |
|         | File Path   | Yes          | Path to the file within the bucket.          |
|         | File Name   | Optional     | Name of the file to be deleted.              |

---

### S3List

Lists files in an Amazon S3 bucket with filtering and sorting options.

| **Tab** | **Field**   | **Required** | **Description**                                     |
| ------- | ----------- | ------------ | --------------------------------------------------- |
| Config  | Name        | Yes          | Unique identifier for the S3List activity.          |
|         | Description | Optional     | Optional description of the activity.               |
|         | Resource    | Yes          | AWS S3 connection resource.                         |
|         | Bucket Name | Yes          | Name of the S3 bucket.                              |
|         | File Path   | Optional     | Path within the bucket to start listing files.      |
|         | Pattern     | Optional     | Regex pattern to filter file names.                 |
|         | Prefix      | Optional     | Common prefix to filter files.                      |
|         | Max Results | Optional     | Maximum number of files to return.                  |
|         | Recursive   | Optional     | Lists files recursively if enabled.                 |
|         | Descending  | Optional     | Sorts the file list in descending order if enabled. |

## Azure Storage Group

The Azure Storage group includes activities designed to interact with Azure Blob Storage, enabling efficient management of files and data within containers.

---

### **ABSWrite**

Writes data to Azure Blob Storage with options for creating or overwriting blobs.

| **Tab** | **Field**                      | **Required** | **Description**                               |
| ------- | ------------------------------ | ------------ | --------------------------------------------- |
| Config  | Name                           | Yes          | Unique identifier for the ABS Write activity. |
|         | Description                    | Optional     | Optional description of the activity.         |
|         | ABS Connection                 | Yes          | Azure Blob Storage connection resource.       |
|         | Container Name                 | Yes          | Name of the container in Azure Blob Storage.  |
|         | Path                           | Yes          | Path to store the blob within the container.  |
|         | Blob Name                      | Yes          | Name of the blob to create.                   |
|         | Blob Type                      | Yes          | Type of blob (Block, Append).                 |
|         | Create Container If Not Exists | Optional     | Creates the container if it does not exist.   |
|         | Overwrite Blob If Exists       | Optional     | Overwrites the blob if it already exists.     |
| Format  | Format                         | Yes          | Format for the blob (e.g., JSON, CSV).        |
|         | Formatter                      | Yes          | Specifies formatting logic.                   |

---

### **ABSCopy**

Copies or moves blobs between containers or paths in Azure Blob Storage.

| **Tab** | **Field**             | **Required** | **Description**                              |
| ------- | --------------------- | ------------ | -------------------------------------------- |
| Config  | Name                  | Yes          | Unique identifier for the ABS Copy activity. |
|         | Description           | Optional     | Optional description for the activity.       |
|         | Source ABS Connection | Yes          | Source Azure Blob Storage connection.        |
|         | Target ABS Connection | Yes          | Target Azure Blob Storage connection.        |
|         | Source Container      | Yes          | Name of the source container.                |
|         | Target Container      | Yes          | Name of the target container.                |
|         | Source Path           | Yes          | Path to the source blob.                     |
|         | Target Path           | Yes          | Path to the target blob.                     |
|         | Move                  | Optional     | Moves the blob instead of copying it.        |

---

### **ABSInfo**

Retrieves metadata and details about a specific blob in Azure Blob Storage.

| **Tab** | **Field**      | **Required** | **Description**                               |
| ------- | -------------- | ------------ | --------------------------------------------- |
| Config  | Name           | Yes          | Unique identifier for the ABS Info activity.  |
|         | ABS Connection | Yes          | Azure Blob Storage connection resource.       |
|         | Container Name | Yes          | Name of the container in Azure Blob Storage.  |
|         | Path           | Yes          | Path to the target blob within the container. |
|         | Blob Name      | Yes          | Name of the blob to fetch information for.    |

---

### **ABSList**

Lists blobs in a container with filtering and sorting options.

| **Tab** | **Field**      | **Required** | **Description**                              |
| ------- | -------------- | ------------ | -------------------------------------------- |
| Config  | Name           | Yes          | Unique identifier for the ABS List activity. |
|         | ABS Connection | Yes          | Azure Blob Storage connection resource.      |
|         | Container Name | Yes          | Name of the container in Azure Blob Storage. |
|         | Path           | Yes          | Path to the directory or container.          |
|         | Filter Prefix  | Optional     | Prefix to filter blobs in the container.     |
|         | Sort Option    | Yes          | Option to sort blobs (e.g., Name, Date).     |

## CSV Group

The CSV Group focuses on operations involving CSV files, enabling workflows to read structured data for processing and transformation.

---

### **CSVReader**

Reads and parses data from CSV files to enable further processing within workflows.

| **Tab** | **Field**         | **Required** | **Description**                           |
| ------- | ----------------- | ------------ | ----------------------------------------- |
| Config  | Name              | Yes          | Name of the CSV Reader activity.          |
|         | Description       | Optional     | Optional description for the activity.    |
|         | Source Definition | Optional     | Defines the source structure for CSV.     |
|         | Data Source       | Yes          | Path or location of the CSV file to read. |
| Input   | Mapper            | Yes          | Maps input data for reading the CSV file. |
| Output  | Import Schema     | Optional     | Allows importing a schema for CSV output. |

## Stream Group

The Stream Group includes activities for reading and writing streams, offering flexibility to handle files, databases, or other data sources.

---

### **ReadStream**

Reads data from a specified stream for processing or analysis.

| **Tab**  | **Field**         | **Required** | **Description**                          |
| -------- | ----------------- | ------------ | ---------------------------------------- |
| Config   | Name              | Yes          | Name of the ReadStream activity.         |
|          | Description       | Optional     | Optional description for clarity.        |
|          | Stream Type       | Yes          | Type of stream (e.g., File, Database).   |
|          | Stream Connection | Yes          | Connection resource for the stream.      |
|          | File Path         | Optional     | Path to the file to read.                |
|          | File Name         | Optional     | Name of the file to read.                |
|          | Read All          | Optional     | Reads all data in the stream.            |
|          | Multiline         | Optional     | Reads multiline data if enabled.         |
| Advanced | Format Type       | Yes          | Format for parsing the data.             |
|          | Formatter Config  | Yes          | Configuration for parsing data.          |
| Input    | Mapper            | Yes          | Maps input values for reading.           |
| Output   | Import Schema     | Optional     | Allows importing schema for output data. |

---

### **WriteStream**

Writes data to a specified stream with options for formatting and appending.

| **Tab**  | **Field**            | **Required** | **Description**                          |
| -------- | -------------------- | ------------ | ---------------------------------------- |
| Config   | Name                 | Yes          | Name of the WriteStream activity.        |
|          | Description          | Optional     | Optional description for clarity.        |
|          | Stream Type          | Yes          | Type of stream (e.g., File, Database).   |
|          | Stream Connection    | Yes          | Connection resource for the stream.      |
|          | File Path            | Optional     | Path to the file to write.               |
|          | File Name            | Optional     | Name of the file to write.               |
|          | Append If Exists     | Optional     | Appends data to the file if it exists.   |
|          | Create If Not Exists | Optional     | Creates the file if it does not exist.   |
| Advanced | Format Type          | Yes          | Format for the data (e.g., JSON, CSV).   |
|          | Formatter Config     | Yes          | Configuration for formatting data.       |
| Input    | Mapper               | Yes          | Maps input data for writing.             |
| Output   | Import Schema        | Optional     | Allows importing schema for output data. |

## RDB Group

The RDB Group includes activities designed for relational database operations, such as executing queries and performing insert or update actions.

---

### **Query**

Executes database queries and retrieves results for processing.

| **Tab** | **Field**     | **Required** | **Description**                              |
| ------- | ------------- | ------------ | -------------------------------------------- |
| Config  | Name          | Yes          | Name of the Query activity.                  |
|         | Description   | Optional     | Optional description for context.            |
|         | Connection    | Yes          | Connection resource for executing the query. |
|         | Query         | Yes          | SQL or database query to execute.            |
|         | Batch Size    | Optional     | Number of rows to process in each batch.     |
| Input   | Mapper        | Yes          | Maps input parameters for the query.         |
| Output  | Import Schema | Optional     | Allows importing schema for query results.   |

---

### **Upsert**

Performs insert or update operations in a relational database.

| **Tab** | **Field**     | **Required** | **Description**                               |
| ------- | ------------- | ------------ | --------------------------------------------- |
| Config  | Name          | Yes          | Name of the Upsert activity.                  |
|         | Description   | Optional     | Optional description for clarity.             |
|         | Connection    | Yes          | Connection resource for executing the upsert. |
|         | Statement     | Yes          | SQL or database statement for upsert.         |
|         | Return Keys   | Optional     | Specifies if keys should be returned.         |
| Input   | Mapper        | Yes          | Maps data for the upsert operation.           |
| Output  | Import Schema | Optional     | Allows importing schema for upsert results.   |
