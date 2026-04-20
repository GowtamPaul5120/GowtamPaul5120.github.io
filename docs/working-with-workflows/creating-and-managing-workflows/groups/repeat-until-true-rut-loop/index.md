---
title: "Repeat Until True (RUT) Loop"
sidebar_position: 3
---

Similar to the While loop, the Repeat Until True loop executes at least once and continues until a specified true condition is met. This loop can also use outputs from activities within the group to evaluate the condition.

> Usage: This loop is useful when the group of activities needs to be executed at least once and may continue based on a dynamic condition checked after each iteration.

#### Configuration Options

Condition Field: Define the condition that breaks the loop.

| Field     | Required | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| Condition | Yes      | Condition that must be true to break the loop. |
| Index     | Yes      | Specifies the position of current item.        |

#### Configuration Example

![Repeat Until True Loop Configuration](../../../../../assets/images/image (31).png)
