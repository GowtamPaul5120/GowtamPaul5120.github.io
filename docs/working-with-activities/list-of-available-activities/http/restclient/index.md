---
title: "REST Client"
sidebar_position: 3
---


The **REST Client** activity sends HTTP requests to external REST APIs and returns the response.

## Configuring the REST Client Activity

To configure the **REST Client** activity, fill in the required fields in the activity panel.

### Configuration

| Field               | Required | Description                                                                                                                           | Example              |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Name                | Optional | Name of the step, should be unique within this workflow.                                                                              | MyActivity           |
| Description         | Optional | Describe the purpose or function of this step.                                                                                        | Reads a file from S3 |
| Scheme              | Optional | Scheme to use for request (mapping supported) Options: HTTP, HTTPS.                                                                   |                      |
| URI                 | Optional | URI of the resource, optionally containing &#123;&#125; for path parameters and `&` to separate query parameters (mapping supported). |                      |
| Host                | Optional | Domain name or IP address of the target server (mapping supported).                                                                   | sftp.example.com     |
| Port                | Optional | Port number to connect to on the server (mapping supported).                                                                          | 22                   |
| Method              | Optional | HTTP method to use for the request (mapping supported) Options: GET, POST, PUT, PATCH, DELETE.                                        | GET                  |
| Select Auth Context | Optional | Authorization context used to authenticate the request.                                                                               |                      |

### Advanced

| Field                 | Required | Description                                                                                                                                                                                                                                           | Example                     |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Enable Caching        | Optional | If checked response will be cached                                                                                                                                                                                                                    |                             |
| Cache TTL             | Optional | Time to Live (in minutes) for cached response, after which it will be evicted                                                                                                                                                                         |                             |
| Timeout               | Optional | Maximum time (in milliseconds) to wait for a response from the server. If the server does not respond within this time, the request will be terminated and marked as a timeout error. Increase this value only for slower services or large payloads. | Timeout value for this call |
| Send to Engage        | Optional | Indicates if the result should be forwarded to Engage.                                                                                                                                                                                                |                             |
| Select Engage Context | Optional | Engage context for reporting this event.                                                                                                                                                                                                              |                             |
| Select Engage Event   | Optional | Select Event data to map for sending to engage                                                                                                                                                                                                        |                             |
| Enable Retry          | Optional | Retry after Failure.                                                                                                                                                                                                                                  |                             |
| Retry Policy Resource | Optional | Drag and drop a Retry Policy resource from the workspace.                                                                                                                                                                                             |                             |

### Input

| Field              | Required | Data Type | Description                                                                                                                                                                                                                                           | Example                                        |
| ------------------ | -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Method             | Optional | String    | HTTP method to use for the request (e.g., GET, POST, PUT).                                                                                                                                                                                            | GET                                            |
| Scheme             | Optional | String    | Protocol scheme to use for the request.                                                                                                                                                                                                               |                                                |
| Host               | Optional | String    | Hostname or IP address of the target service.                                                                                                                                                                                                         | sftp.example.com                               |
| Port               | Optional | Integer   | Port number to connect to on the server                                                                                                                                                                                                               | 22                                             |
| Uri                | Optional | String    | URI of the resource, optionally containing &#123;&#125; for path parameters and `&` to separate query parameters.                                                                                                                                     |                                                |
| Timeout            | Optional | Integer   | Maximum time (in milliseconds) to wait for a response from the server. If the server does not respond within this time, the request will be terminated and marked as a timeout error. Increase this value only for slower services or large payloads. | 15000                                          |
| Headers            | Optional | Object    | Standard HTTP headers to include in the request.                                                                                                                                                                                                      | &#123;"Content-Type": "application/json"&#125; |
| Additional Headers | Optional | Array     | List of additional headers to include in the request.                                                                                                                                                                                                 |                                                |
| Query Params       | Optional | Object    | Query parameters to be appended to the request URL.                                                                                                                                                                                                   |                                                |
| Path Params        | Optional | Object    | Path parameters used to dynamically populate URI segments.                                                                                                                                                                                            |                                                |
| Body               | Optional | Object    | Payload body for requests that support it (e.g., POST, PUT).                                                                                                                                                                                          |                                                |

### Output

| Field              | Required | Data Type | Description                                                    | Example                                        |
| ------------------ | -------- | --------- | -------------------------------------------------------------- | ---------------------------------------------- |
| Status             | Optional | Object    | HTTP response status details.                                  |                                                |
| Headers            | Optional | Object    | HTTP response headers.                                         | &#123;"Content-Type": "application/json"&#125; |
| Additional Headers | Optional | Array     | List of custom response headers returned by the server.        |                                                |
| Body               | Optional | Object    | Parsed body of the HTTP response. Can be any valid JSON value. |                                                |
