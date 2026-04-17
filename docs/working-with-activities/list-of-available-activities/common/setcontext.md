---
title: "Set Context"
---


The **Set Context** activity sets a value in the workflow context.

## Configuring the Set Context Activity

To configure the **Set Context** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Optional | Name for this Step | MyActivity |
| Description | Optional | Description of what this step is intended to do | Reads a file from S3 |
| Select Context | Optional | Select the contexts that you wish to set, input mapping is generated based on the selections |  |
| Overwrite | Optional | When checked, the context will be overwritten if it has already been set — either explicitly by the user or inherited from the main flow. |  |

### Input

_Map the required input fields to provide data for this activity._
