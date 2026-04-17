---
title: Last Cached Value
---


## Overview

The **Last Value Cache** feature introduces two workflow activities:

* `GetLastValue`
* `SetLastValue`

These activities provide a simple key-value cache scoped **per application**.\
They allow workflows to store and retrieve the most recent value associated with a specific key.

This is useful for maintaining lightweight state between workflow runs without requiring external systems.

***

### When to Use These Activities

Use the Last Value Cache when you need to:

* Store the last processed timestamp
* Track the last successful sync ID
* Save the most recent event ID
* Maintain a checkpoint between executions
* Implement simple idempotency control
* Compare current value with previously stored value

These activities are ideal for small pieces of state that must persist across workflow executions within the same application.

***

### Scope and Isolation

Values are scoped per:

* Organization
* Workspace
* Application

Each application maintains its own isolated key-value entries.

***

## Activity: GetLastValue

#### Activity Group

`Common`

#### Purpose

Retrieves the previously stored value for a given key.

If no value has been stored yet, the activity indicates that no record was found.

***

### Configuration

```json
{
  "key": "myKey",
  "value": "value"
}
```
