---
title: "While Loop"
sidebar_position: 2
---

The While loop repeatedly executes a group of activities as long as a specified condition remains false. This condition can be dynamic and utilize the output of activities within the group.

> <mark style={{ color: 'var(--ifm-menu-color-active)', background: 'transparent' }}>>Usage: Suitable for scenarios where the number of iterations is not known in advance and the continuation condition is evaluated at the start of each iteration.</mark>

#### Configuration Options

Condition Field: Set the condition that controls the loop execution.

| Field     | Required | Description                                   |
| --------- | -------- | --------------------------------------------- |
| Condition | Yes      | Condition that must be true to continue loop. |
| Index     | Yes      | Specifies the position of current item.       |

#### Configuration Example <a href="#id-2.3_repeat_until" id="id-2.3_repeat_until"></a>

![While Loop Configuration](../../../../../assets/images/image (30).png)
