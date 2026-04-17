---
title: REST Service
---


The **REST Service** activity exposes a REST endpoint that triggers the workflow when called.

:::info
This activity acts as a REST service trigger. It must be the first step in a workflow.
:::

## Configuring the REST Service Activity

To configure the **REST Service** activity, fill in the required fields in the activity panel.

### Configuration

| Field       | Required | Description                                                                                                         | Example               |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Name        | Optional | Name of the step, should be unique within this workflow.                                                            | MyActivity            |
| Description | Optional | Brief description of what this step does.                                                                           | Reads a file from S3  |
| Path        | Required | The API route pattern, optionally containing &#123;&#125; for path parameters and `&` to separate query parameters. | /users/&#123;id&#125; |
| Method      | Optional | Allowed HTTP methods for this route Options: GET, POST, PUT, PATCH, DELETE.                                         | GET                   |
| Media Types | Optional | Specifies which media types this endpoint supports (e.g., JSON, XML, etc.).                                         |                       |

### Output

| Field              | Required | Data Type | Description                                                                                                     | Example                                        |
| ------------------ | -------- | --------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Method             | Optional | String    | HTTP method to use for the request (e.g., GET, POST, PUT).                                                      | GET                                            |
| Uri                | Optional | String    | URI of the resource, optionally containing &#123;&#125; for path parameters and & to separate query parameters. |                                                |
| Headers            | Optional | Object    | Standard HTTP headers to include in the request.                                                                | &#123;"Content-Type": "application/json"&#125; |
| Additional Headers | Optional | Array     | List of additional custom headers to include in the request.                                                    |                                                |
| Query Params       | Optional | Object    | Query parameters to append to the URI as a query string.                                                        |                                                |
| Path Params        | Optional | Object    | Path parameters to replace &#123;&#125; placeholders in the URI.                                                |                                                |
| Body               | Optional | Object    | Payload body for the request. Typically used for POST, PUT, and PATCH requests.                                 |                                                |
