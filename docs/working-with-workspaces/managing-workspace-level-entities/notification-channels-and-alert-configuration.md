# Notification Channels & Alert Configuration

#### User Guide

***

### Table of Contents

1. Overview
2. Getting Started
3. Part 1 -- Notification Channels
4. Part 2 -- Alert Configuration
   * Scheduler Alert
   * Batch Alert
   * HTTP Alert (REST Client)
5. Managing Your Alerts
6. Quick Reference

***

### Overview

The **Alert Configuration** feature lets you monitor your application workflows and get notified when something needs attention. It has two parts:

| Part                      | What it does                                             |
| ------------------------- | -------------------------------------------------------- |
| **Notification Channels** | Defines _where_ alerts are sent (e.g., email recipients) |
| **Alert Configuration**   | Defines _what_ to monitor and _when_ to trigger an alert |

There are **3 types** of alerts you can create:

| Alert Type             | Best For                                 |
| ---------------------- | ---------------------------------------- |
| **Scheduler**          | Monitoring scheduled workflow executions |
| **Batch**              | Monitoring batch job executions          |
| **HTTP (REST Client)** | Monitoring REST API calls for errors     |

***

### Getting Started

#### How to Navigate

1. Click the **Settings** icon (gear icon) in the top-right corner of the dashboard.
2. Go to **Workspace > General**.
3. You will see the **Alert Configuration** section.

There are **two tabs** at the top of this section:

* **Notification Channel** -- Set up where alerts are sent
* **Alert Configuration** -- Create and manage alerts

> **Important:** Set up at least one Notification Channel _before_ creating alerts, because every alert needs a channel to send notifications to.

***

### Part 1 -- Notification Channels

A Notification Channel defines _who receives_ the alert notifications. Currently, **Email** is the supported channel type.

#### Create a Notification Channel

1. Switch to the **Notification Channel** tab.
2. Click the **"Create Notification Channel"** button (top-right).
3.  A side panel (drawer) opens. Fill in:

    | Field                | What to Enter                                              |
    | -------------------- | ---------------------------------------------------------- |
    | **Channel Name**     | A descriptive name (e.g., `Engineering Team Alerts`)       |
    | **Channel Type**     | Select **Email**                                           |
    | **Email Recipients** | Type an email address and press Enter. Repeat to add more. |
4. Click **Save**.

Done! Your channel now appears in the table.

#### Edit a Notification Channel

* Click the **channel name** (blue link) in the table, **OR**
* Click the **three-dot menu** (right side) and select **Edit**.
* Make your changes and click **Save**.

#### Delete a Notification Channel

* Click the **three-dot menu** and select **Delete**.
* Confirm the deletion in the popup dialog.

> **Note:** Channel names must be unique. You cannot have two channels with the same name.

***

### Part 2 -- Alert Configuration

#### Create an Alert

1. Switch to the **Alert Configuration** tab.
2. Click the **"+ Create Alert"** button (top-right).
3. A side panel opens with a step-by-step form.

The form has **3 steps** (2 steps for HTTP alerts). The fields change depending on which alert type you select. Below are the details for each type.

***

#### Type 1: Scheduler Alert

Use this to monitor **scheduled workflow executions**. You get notified when metrics cross a threshold.

**Step 1 -- Basic Info**

| Field                    | What to Do                                                                              |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **Alert Name**           | Enter a unique name (e.g., `Daily Scheduler Alert`)                                     |
| **Scheduler Type**       | Select **Scheduler**                                                                    |
| **Application Name**     | Pick your application (only apps with scheduler workflows appear)                       |
| **Aggregation Function** | Choose how data is aggregated: `count`, `min`, `max`, `sum`, `avg`, or `count_distinct` |
| **Span Scope**           | Choose which spans to monitor: `All Spans`, `Root Spans`, or `Entry Point Spans`        |
| **Step Interval (m)**    | _(Optional)_ Step interval in minutes                                                   |

**Step 2 -- Set Alert Conditions**

This section reads like a sentence you fill in:

> "Send a notification when **\[operator]** the threshold(s) **\[match type]** during the **\[evaluation window]**"

| Field                     | Options                                                                          |
| ------------------------- | -------------------------------------------------------------------------------- |
| **Operator**              | `ABOVE`, `BELOW`, `EQUAL TO`, `NOT EQUAL TO`                                     |
| **Match Type**            | `AT LEAST ONCE`, `ALL THE TIME`, `ON AVERAGE`, `IN TOTAL`, `LAST`                |
| **Evaluation Window**     | Choose **Rolling** (5m, 15m, 30m, 1h) or **Cumulative** (Hourly, Daily, Monthly) |
| **Severity**              | `Critical` (red), `Warning` (orange), or `Info` (blue)                           |
| **Threshold Value**       | Enter the numeric threshold (e.g., `5`)                                          |
| **Notification Channels** | Select one or more channels to send alerts to                                    |

**Advanced Options** (expand the collapsible section):

| Option                           | Description                                                           |
| -------------------------------- | --------------------------------------------------------------------- |
| **How often to check**           | How frequently the alert checks your data. Default: every 30 minutes. |
| **Alert when data stops coming** | Toggle ON to get notified if no data arrives for X minutes.           |
| **Minimum data required**        | Toggle ON to only trigger when there are enough data points.          |

**Step 3 -- Notification Settings**

| Option                   | Description                                                                  |
| ------------------------ | ---------------------------------------------------------------------------- |
| **Repeat Notifications** | Toggle ON to keep getting notified while the alert condition remains active. |
| When enabled:            | Set frequency -- e.g., _"Every 30 Minutes while Firing, No Data"_            |

Click **Save** to create the alert.

***

#### Type 2: Batch Alert

Use this to monitor **batch job executions**. The setup is almost identical to Scheduler alerts.

**Step 1 -- Basic Info**

| Field                    | What to Do                                                       |
| ------------------------ | ---------------------------------------------------------------- |
| **Alert Name**           | Enter a unique name (e.g., `Nightly Batch Alert`)                |
| **Scheduler Type**       | Select **Batch**                                                 |
| **Application Name**     | Pick your application (only apps with batch workflows appear)    |
| **Aggregation Function** | Choose: `count`, `min`, `max`, `sum`, `avg`, or `count_distinct` |
| **Span Scope**           | Choose: `All Spans`, `Root Spans`, or `Entry Point Spans`        |
| **Step Interval (m)**    | _(Optional)_ Step interval in minutes                            |

**Step 2 -- Set Alert Conditions**

Same as Scheduler (see above):

* Set the **Operator**, **Match Type**, **Evaluation Window**
* Choose **Severity** and enter a **Threshold Value**
* Select **Notification Channels**
* Configure **Advanced Options** if needed

**Step 3 -- Notification Settings**

Same as Scheduler -- configure **Repeat Notifications** if desired.

Click **Save** to create the alert.

***

#### Type 3: HTTP Alert (REST Client)

Use this to monitor **REST API calls** for errors. This type has a simpler, time-window based setup (no threshold metrics).

> **Note:** HTTP alerts use a 2-step form (no Step 3).

**Step 1 -- Basic Info**

| Field                | What to Do                                                           |
| -------------------- | -------------------------------------------------------------------- |
| **Alert Name**       | Enter a unique name (e.g., `API Error Monitor`)                      |
| **Scheduler Type**   | Select **REST Client**                                               |
| **Application Name** | Pick your application (only apps with REST Client activities appear) |

_(No Aggregation Function or Span Scope needed for this type.)_

**Step 2 -- Set Alert Conditions**

| Field                     | What to Do                                                                                                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Active Window Start**   | Set the start time (HH:mm format, e.g., `00:00`)                                                                                                                             |
| **Active Window End**     | Set the end time (HH:mm format, e.g., `23:59`)                                                                                                                               |
| **Active Days**           | Select which days the alert should be active (Mon--Sun). Use _Select All_ or _Clear All_ for quick selection.                                                                |
| **Timezone**              | Choose your timezone (`Asia/Kolkata` or `UTC`)                                                                                                                               |
| **Enabled**               | Toggle ON/OFF to enable or disable the alert                                                                                                                                 |
| **Error Codes**           | Select one or more HTTP error codes to monitor. Available codes: `400`, `401`, `403`, `405`, `409`, `415`, `422`, `500`, `502`, `503`, `504`. At least one code is required. |
| **Notification Channels** | Select one or more channels                                                                                                                                                  |

Click **Save** to create the alert.

***

### Managing Your Alerts

#### View Alerts

* All configured alerts appear in the **Alert Configuration** table.
* Use the **Active / Inactive** toggle (top-left) to filter by status.
* Use the **Search** bar to find alerts by name.
* Click the **Refresh** button to reload the list.

#### Edit an Alert

* Click the **three-dot menu** on the alert row and select **Edit**.
* Modify the fields and click **Save**.

#### Activate / Deactivate an Alert

* Click the **three-dot menu** and select **Activate** or **Deactivate**.
* This lets you temporarily pause an alert without deleting it.

#### Delete an Alert

* Click the **three-dot menu** and select **Delete**.
* Confirm the deletion. This action is **irreversible**.

***

### Quick Reference

#### Alert Types at a Glance

|                          |       Scheduler      |         Batch        | HTTP (REST Client) |
| ------------------------ | :------------------: | :------------------: | :----------------: |
| **What it monitors**     |  Scheduled workflows |      Batch jobs      |   REST API calls   |
| **Threshold-based**      |          Yes         |          Yes         |         No         |
| **Time-window based**    |          No          |          No          |         Yes        |
| **Evaluation Windows**   | Rolling & Cumulative | Rolling & Cumulative | Active time window |
| **Severity levels**      |          Yes         |          Yes         |         No         |
| **Repeat Notifications** |          Yes         |          Yes         |         No         |
| **Advanced Options**     |          Yes         |          Yes         |         No         |
| **Form steps**           |           3          |           3          |          2         |

#### Severity Levels (Scheduler & Batch)

| Level        | Color  | When to Use                       |
| ------------ | ------ | --------------------------------- |
| **Critical** | Red    | Immediate attention needed        |
| **Warning**  | Orange | Something may need attention soon |
| **Info**     | Blue   | Informational, no action needed   |

#### Evaluation Window Types (Scheduler & Batch)

| Type           | Options                       | How It Works                         |
| -------------- | ----------------------------- | ------------------------------------ |
| **Rolling**    | 5 min, 15 min, 30 min, 1 hour | Checks data in a sliding time window |
| **Cumulative** | Hourly, Daily, Monthly        | Resets at the start of each period   |

#### Checklist Before Creating an Alert

* [ ] At least one **Notification Channel** is created
* [ ] Your application has the right workflow type (Scheduler / Batch / REST Client)
* [ ] You've decided on the alert conditions (threshold, time window, etc.)
