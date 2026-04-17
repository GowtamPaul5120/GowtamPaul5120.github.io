---
title: Receive Message
---


The **Receive Message** activity receives a message from a messaging queue or topic.

## Configuring the Receive Message Activity

To configure the **Receive Message** activity, fill in the required fields in the activity panel.

### Configuration

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| Name | Required | Specify the name for this activity. | MyActivity |
| Description | Optional | Specify the description for this activity. | Reads a file from S3 |
| Channel Type | Optional | Select the Channel Type Options: Point to Point (Queue), Pub Sub (Topic). | Point to Point (Queue), Pub Sub (Topic) |
| Channel Name | Required | A message on this channel will trigger this workflow | my-queue |
| Channel Name | Optional | A message on this channel will trigger this workflow |  |
| Subscription Name | Optional | Specify the subscription name for the Pub Sub channel to filter and receive relevant messages | Subscription Name |
| Auto Acknowledge | Optional | When enabled, delivery of this event be acknowledged automatically. In case of failures, this event will not be redelivered. |  |

### Advanced

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| On Error | Optional | Action to take on Processing error Options: Discard, Dead Letter. | Discard, Dead Letter |
| Redelivery Attempts | Optional | Number of times the message will be redelivered on failure | Redelivery Attempts |
| Max Message Rate | Optional | Maximum rate at which messages can be consumed(messages per minute). | Max Message Rate (messages/min) |
| Max Unprocessed Messages | Optional | Maximum number of unprocessed or outstanding messages allowed before stopping further processing | Max Unprocessed Messages |
| Max Failed Messages | Optional | Number of consecutive message failures required to open the circuit breaker and temporarily stop further message consumption. | Max Failed Messages |
| Reset Timeout | Optional | Time in seconds to wait before closing the circuit breaker and resuming message processing after it has been opened. | Reset Timeout (Seconds) |

### Output

| Field | Required | Data Type | Description | Example |
|-------|----------|-----------|-------------|---------|
| Queue Name | Required | String |  | my-queue |
| Topic Name | Optional | String |  |  |
| Subscription Name | Optional | String |  | Subscription Name |
| Header | Optional | Object |  |  |
| Properties | Optional | Object |  |  |
| Additional Properties | Optional | Array |  |  |
| Body | Optional | Object |  |  |
