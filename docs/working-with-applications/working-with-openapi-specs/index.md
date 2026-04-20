---
title: "Working with OpenAPI Specs"
sidebar_position: 1
---


OpenAPI integration lets you import API specifications into the Studio and use them to configure workflow activities automatically. Instead of entering endpoint URLs, headers, and schemas by hand, you point the Studio at an OpenAPI spec and it fills everything in for you.

***

### Table of Contents

1. Importing an OpenAPI Spec to the Registry
2. Updating a Spec in the Registry
3. Deleting a Spec from the Registry
4. Configuring Activities with OpenAPI
5. Validating OpenAPI References

***

### Registry vs. One-Time Use

When you configure an activity or generate workflows using OpenAPI — outside the Schema Registry panel — you can choose whether to save the spec to the registry or use it once. This choice appears as a **Save OpenAPI** checkbox, visible only to users with Schema Registry permission.

Specs imported directly through the Schema Registry panel are always saved to the registry. There is no checkbox there — saving is the entire purpose of that flow.

|                            | Saved to Registry                            | One-time use                                     |
| -------------------------- | -------------------------------------------- | ------------------------------------------------ |
| **Activity config fields** | Read-only — driven by the spec               | Editable                                         |
| **Schemas**                | Fetched dynamically from the spec each time  | Created as application schemas at configure time |
| **Change detection**       | Flagged automatically when the spec changes  | Not tracked — snapshot at configure time         |
| **Reuse**                  | Available across any application or workflow | Not stored anywhere                              |

***

### 1. Importing an OpenAPI Spec to the Registry

The Schema Registry stores OpenAPI specs at the organisation level so they can be reused across applications and workflows.

#### Supported versions

Only **OpenAPI 3.x.x** specs are accepted. Swagger 2.x and earlier are not supported.

#### How to import

Open the **Schema Registry** panel in the left toolbar and use the import action. The dropzone accepts specs in two ways:

| Option         | How it works                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Upload**     | Drag and drop, or click to browse. Accepts `.json` and `.yaml` files. Only single-file upload is supported.                                              |
| **Paste Link** | Enter a public URL pointing to the spec. The Studio fetches and parses it immediately. The URL is stored alongside the spec so you can refresh it later. |

Once loaded, the spec name is read from the `info.title` field in the document. You can edit it inline before saving.

#### Validation before saving

The spec is validated as soon as it is loaded. Two things are checked:

**Spec version** — Only OpenAPI 3.x.x is accepted. An unsupported version rejects the spec immediately.

**Name rules** — The spec name must:

* Contain only letters, numbers, underscores, and spaces.
* Be unique — a name that already exists in the registry is rejected.

If either check fails, the error is displayed inline and the save button stays disabled until the issue is resolved.

***

### 2. Updating a Spec in the Registry

When an API changes, you can replace the stored spec in the registry. The update flow is a two-step process that shows you what changed before you commit.

#### Step 1 — Provide the new spec

Open the spec's context menu in the Schema Registry panel and choose **Update**. The same dropzone from the import flow appears. Three options are available:

* **Upload a new file** — replaces the spec content. The stored URL is cleared because the spec is no longer tied to a remote source.
* **Paste a new URL** — replaces both the spec content and the stored URL.
* **Check for Updates** — shown automatically when the spec was originally imported via URL. Re-fetches the spec from that URL and loads it as the pending change. The URL is preserved.

Once a spec is loaded, click **Review** to proceed.

#### Step 2 — Review changes before saving

The review screen compares the existing registry spec against the new one endpoint by endpoint and shows:

**Changes tab** — a diff of every endpoint in the spec. Each endpoint is tagged:

| Tag         | Meaning                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| `Added`     | New endpoint not in the current spec                                     |
| `Removed`   | Endpoint that exists now but will be gone after the update               |
| `Updated`   | Endpoint that exists in both but has changed (parameters, schemas, etc.) |
| `Unchanged` | No difference                                                            |

**Activities Affected tab** — shown when any changed or removed endpoints are currently used by workflow activities. Lists every affected activity grouped by workflow, so you can see what is at risk before confirming. The tab label shows the count, e.g. _Activities Affected (3)_.

**Export Report** — when there are any non-unchanged endpoints, an **Export Report** button appears in the footer. This downloads a summary of the diff and the list of affected activities.

The **Update OpenAPI** button is only enabled if the new spec actually differs from the stored one (different content or different URL). If nothing changed, the button stays disabled.

***

### 3. Deleting a Spec from the Registry

Open the spec's context menu in the Schema Registry panel and choose **Delete**.

Deleting a spec does not automatically reconfigure the activities that reference it. Those activities will be flagged via the validation system so you can review and remediate them.

***

### 4. Configuring with OpenAPI

OpenAPI configuration can be applied in three ways depending on whether you are working with an existing activity, an existing application, or starting from scratch.

Three activity types support OpenAPI configuration:

| Activity        | What gets configured                                                                  |
| --------------- | ------------------------------------------------------------------------------------- |
| **RESTService** | Method, URL, headers, query params, path params, request body schema, response schema |
| **RESTClient**  | Method, URL, headers, query params, path params, request body schema                  |
| **Response**    | Response schema                                                                       |

#### Way 1 — Configure an activity

Applies an OpenAPI endpoint to an existing supported activity, updating its config fields and linking it to the spec.

Right-click a supported activity on the workflow canvas (or use its action menu) and choose **Configure using OpenAPI**. The modal has two steps.

**Step 1 — Select a spec**

Use the dropzone to provide a spec in one of three ways:

* **Upload** a `.json` or `.yaml` file.
* **Paste Link** to fetch from a URL.
* **Search Registry** to pick an existing spec from the organisation registry.

When providing a spec via file upload or URL, a **Save OpenAPI** checkbox is shown to users with Schema Registry permission. Check it to save the spec to the registry and link the activity to it. Leave it unchecked to configure the activity one-time without storing the spec.

> A warning is shown at the bottom of the modal: the activity's current configuration will be fully replaced by the one from the selected endpoint.

**Step 2 — Select an endpoint**

The spec's endpoints are listed grouped by path. Select the endpoint (path + HTTP method) to use. Only one endpoint can be selected per activity. Click **Create** to apply.

#### Way 2 — Create workflows from OpenAPI

Creates one new workflow per selected endpoint inside an existing application's workflow folder. Each workflow is scaffolded with a **RESTService** activity (representing the API request) and a **Response** activity (representing the API response), pre-configured for that endpoint.

Open the **OpenAPI Workflow** action on a workflow folder inside an existing application. The modal has three steps.

**Step 1 — Select a spec**

Provide a spec via file upload, URL, or by searching the registry.

**Step 2 — Select endpoints**

All endpoints in the spec are listed. Select one or more — each selected endpoint creates one workflow in the folder. Click **Create** to generate.

**Step 3 — Review import**

Each endpoint is shown with a `success` or `error` badge. Successfully created workflows are immediately available in the application.

#### Way 3 — Create an application from OpenAPI

Creates a new application with all selected endpoints scaffolded as workflows directly in the `Workflows` folder. Each workflow follows the same RESTService + Response structure as Way 2.

Open the **Create Application from OpenAPI** action. Select a spec, choose the endpoints, and confirm. The application and all its workflows are created in one step.

***

#### Linked vs. unlinked configuration

The behaviour after any of the three configuration methods depends on whether the spec is linked to the registry — either by picking it from the registry, or by checking **Save OpenAPI** when uploading a file or pasting a URL.

**Linked to registry**

* The activity stores a reference to the registry spec (`specId`, `path`, `method`).
* The form fields for URL, method, headers, query params, and path params are **read-only** in the activity editor — they are driven by the spec.
* Request body and response schemas are **fetched dynamically** from the spec each time they are needed (e.g. in the data mapper). No schema copies are stored in the application.
* If the spec changes in the registry, the activity is flagged for review (see Validating OpenAPI References).

**Not linked to registry** (Save OpenAPI was unchecked, or the spec was uploaded/pasted without saving)

* No registry reference is stored on the activity.
* The request body and response schemas are extracted from the spec and **created as application schemas** linked to the activity config.
* The form fields are editable.
* Changes to the original spec file have no effect on this activity — it is a snapshot.

#### Unlinking an activity from the registry

If an activity is linked to the registry and you want to break that link while keeping the current configuration, use the **Unlink** action. The activity is reconfigured using the same spec content but without the registry reference. It becomes a snapshot, identical in behaviour to an unlinked configuration.

***

### 5. Validating OpenAPI References

The Studio continuously monitors whether the specs referenced by your activities are still up to date in the registry. This happens automatically in the background — you do not need to trigger it manually.

#### How validation works

Whenever the set of referenced spec IDs in your loaded applications changes, the Studio sends those IDs to the registry for validation. The registry responds with one of three statuses per spec:

| Status      | Meaning                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------- |
| `unchanged` | The spec in the registry matches what the activity was configured with. No action needed. |
| `updated`   | The spec exists but has been modified since the activity was configured.                  |
| `deleted`   | The spec has been removed from the registry.                                              |

For `updated` specs, the Studio goes one level deeper and compares the specific endpoint (`path` + `method`) that each activity is using. An activity is only flagged if its specific endpoint was actually changed or removed — not just because something else in the spec changed.

#### The impact alert banner

When one or more activities in the current application or workflow are affected, a **warning banner** appears at the top of the page. There is one banner per affected spec.

The banner describes whether the spec was **updated** or **removed** and which scope is affected (the current workflow or the wider application). Each banner has:

* A **Review** button to open the detail modal.
* A **dismiss** (×) button to hide that spec's banner for the current session. The banner reappears if you navigate to a different application or workflow and come back.

#### Reviewing and applying changes

Clicking **Review** on a banner opens the **Review Activities Affected** modal. It lists every affected activity grouped by workflow, with each activity tagged as `updated` or `removed`.

| Tag       | What will happen when you apply                                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `updated` | The activity is reconfigured using the latest version of the spec in the registry. The registry link is preserved.         |
| `removed` | The activity is reconfigured using the last known spec content and the registry link is removed — equivalent to unlinking. |

Click **Apply Changes** to start. Progress is shown per workflow (`loading` → `success` or `error`). After all workflows are processed, the modal switches to a **Report** view showing the outcome for each workflow.

Click **Close** when done. Successfully applied changes clear the corresponding banner.
