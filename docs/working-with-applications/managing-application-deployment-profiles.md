---
title: "Managing Application Deployment Profiles"
sidebar_position: 12
---

Deployment Profiles offer a structured and repeatable approach to application deployment across environments. These profiles act as configuration blueprints, encapsulating environment-specific settings, deployment methods, and pre/post-deployment actions. By leveraging profiles, teams can:

- Ensure consistent and automated deployments.
- Simplify environment management.
- Reduce deployment errors.
- Streamline the application lifecycle from testing to production.

## **Creating and Managing Profiles**

To create a deplyment profile for an application:

1. Navigate to the application for which you want to create a deployment profile.
2. Click the **Profiles** ![](../../assets/images/Profiles-Icon.png) icon.\
   The Profiles side panel appears.
3. Click **Create Profile**.\
   The Profile modal

#### **1. Navigate to Deployment Profiles**

- Open the **Deployment Profiles** panel from the application’s deployment toolbar.

#### **2. Add a New Profile**

- Click **Add Profile**
- Fill in:
  - **Name** (e.g., `Dev`, `Prod`)
  - **Environment** (Development, Production)
  - **Description** (optional)

> **Note:** Only users with the **"create deployment profile"** permission can create profiles.

#### **3. Set as Default (Optional)**

- Enable **"Use this profile as default"** for the environment.

> Requires **"set default deployment profile"** permission.

#### **4. Load Variables & Workflows**

- Variables and workflows are auto-loaded from the latest deployment.
- If no data is available, profile creation is blocked with a **"No Data Found"** message.

#### **5. Save the Profile**

- Click **Save** to persist the profile.

---

### **Configuring Variables**

#### **Add Variables**

- Go to the **Variables** tab and click **Add Variable**.
- Provide:
  - **Name**
  - **Scope**: Application, Deployment, or Client
  - **Value** (editable for Deployment and Client scopes only)
  - **Description** (optional)

---

### **Configuring Logging** _(In Development)_

#### **1. Enable "Log All Activities"**

- Logs all activities when toggled ON.
- If OFF, logging is configurable at app/workflow levels.

#### **2. Application-Level Logging**

- Configure log behavior per activity type (e.g., RESTService, Start):
  - **Always Logged**
  - **Log Input**
  - **Log Output**

#### **3. Workflow-Specific Logging**

- Add workflows and configure logging on individual activities.

---

### **Configuring Permissions**

- Navigate to the **Permissions** tab.
- The profile creator gets **View, Edit, and Delete** permissions by default.
- Editors can add users or teams with specific permissions.

---

### **Syncing with Latest Deployment**

- Users with Edit permission can sync the profile to pull updated variables/workflows from the latest deployment version.

---

### **Using Profiles in Test Page**

- Add the `X-Profile-Name` header when testing a RESTService-triggered workflow.
- This allows test execution with a specific deployment profile.

---

### **Recent Behavior Changes**

- Profile selection is **no longer available in the deployment modal**.
- All executions must specify the profile at runtime via header configuration.

---

### **Important Considerations**

- Only **RestService Trigger** workflows support Deployment Profiles.
- All subflows executed as part of the workflow inherit the profile context.
- Secret variables are **masked** and stored securely using **Key Vaults**.
