---
title: "Get App Config"
sidebar_position: 12
---


The **Get App Config** activity retrieves application configuration values.

## Configuring the Get App Config Activity

To configure the **Get App Config** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Engage Operation | Optional | Fetching Engage app configuration based on the specified operation (all tenants or specific tenant info) Options: Get All Tenants, Get Tenant Info. | Get All Tenants, Get Tenant Info |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Tenant Id | Optional | String |  |  |
| Tags | Optional | Array |  |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Config | Optional | String |  |  |
