---
title: "Send Message"
---


The **Send Message** activity sends a message to a messaging queue or topic.

## Configuring the Send Message Activity

To configure the **Send Message** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Channel Type | Optional | Queue delivers to one consumer. Topic broadcasts to all subscribers Options: Point to Point (Queue), Pub Sub (Topic). |  |
| Channel Name | Required | Name of the message queue or topic. |  |
| Include Profile | Optional | Pass the current profile to the receiver |  |

### Input

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Channel Name | Required | String | Name of the channel or topic where the message will be published. |  |
| Headers | Optional | Object | Metadata headers that accompany the message. |  |
| Properties | Optional | Object | Custom message properties for downstream processing. |  |
| Body | Optional | Object | Actual content of the message to be sent. |  |
| Schedule | Optional | Object | Schedule settings for delayed delivery. |  |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Message Id | Optional | String |  |  |
