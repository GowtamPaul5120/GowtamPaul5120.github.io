---
title: "Retry Policy"
sidebar_position: 23
---


The **Retry Policy** activity configures retry behavior for a segment of the workflow.

## Configuring the Retry Policy Activity

To configure the **Retry Policy** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Max Attempts | Required | Total number of retry attempts. |  |
| Delay Time | Required | Base delay (in milliseconds) before each retry attempt. |  |
| Max Jitter | Optional | Maximum random delay (in milliseconds) added on top of the base delay to avoid retry spikes. |  |
| Max Delay Time | Optional | Maximum allowed delay (in milliseconds) after applying delay and jitter. Acts as a hard cap. |  |
