---
title: "V 1.1.27"
sidebar_position: 42
description: 19 May 2025
---

### Beta Roll-Out

_Interface and developer-experience updates are now live in the beta environment._

Access them here: [https://beta-paycorintegrationstudio.koodisi.com](https://beta-paycorintegrationstudio.koodisi.com)

- **Multi-Tab Switch** – Open workflows, schemas, and resources side-by-side. Right-click any item → **Open in New Tab**; a prompt protects unsaved edits.
- **Test-Case Viewer** – Long payloads auto-wrap for smooth vertical scrolling.
- **Global Variable Cleanup** – Deleting a variable lists every reference before confirmation.
- **Sign-Out Flow** – Sessions always return to the login page.
- **Schema Registry Search** – Results display with consistent, polished styling.
- **Sidebar Selection** – Selecting an item reliably opens and highlights the correct tab.
- **Configuration Panel** – Closes automatically when no applications remain.
- **Multi-Tab UI Polish** – Refined alignment, spacing, and tooltips.
- **CI Versioning** – Build numbers now auto-increment across pipelines.

### Production Updates

_Validated items shipped to the Paycor working environment._

**Messaging Behavior Update**

#### **Auto Acknowledgment**

- Messages can continue to be **auto acknowledged** (existing behavior).
- If a message is **not acknowledged within 1 minute** (e.g., because the workflow is still processing), the **engine will automatically acknowledge** the message.\
  \
  **Advanced Tab Changes (Receive Message Activity)**
- **Redelivery Attempts** configuration has been **removed**.
- **OnError** handling (specific to message redelivery) has also been **removed** from the UI.
- Error handling can still be done **within the workflow itself** using standard failure handling constructs (e.g., transitions, error mappings).

**Gateway Timeout Notification**\

- If a workflow runs longer than 10 seconds (configurable up to 30 seconds), users will now receive either a **`503 Service Unavailable`** or a **`504 Gateway Timeout`** response, depending on where the timeout occurs. This replaces the previously used **`408 Request Timeout`**, which was incorrectly interpreted by some browsers (notably Chrome) as a client-side issue — leading them to retry the request automatically. \
  By using `503` or `504`, we now adhere to the correct HTTP specification and ensure better client-side behavior. This change prevents unintended retries and provides a more accurate signal that the server was unable to complete the request in time.

#### Activities

- **S3 Activities** – Streamlined field set and sturdier connection handling.
- **SFTP Activities** – Streamlined field set and sturdier connection handling.
- **Group Activity** – Any JSON object can now be grouped by a specified **id** field.

:::warning Heads-Up
Updated **S3** field configurations may require remapping in any existing workflows that use S3 activities.
:::
