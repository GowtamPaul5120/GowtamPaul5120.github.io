---
title: "Managing Secrets"
sidebar_position: 3
---

Use the Secret Manager to safeguard sensitive information (such as API keys, passwords, and certificates) and ensure secure controlled access.

The Secret Manager uses vaults to store secrets at the workspace level, and only users with specific permissions can configure them and control access to them.

## **Accessing the Secret Manager**

To access the Secret Manager, open the **Settings** option from the side menu, and in the Workspace section, click **Vaults**.

### **2.Managing Secrets**

**1. Configuring Lookup Storage**

- Go to the **Lookup** tab.
- Create a blank lookup or configure an existing one.
- Set the storage type to **Vault** and choose appropriate vaults for each environment.

**2. Adding and Fetching Lookup Values**

- To add values, use the `lookupUpsert` activity.
- To retrieve values, use the `lookup` activity.

---

### **3. Vault Management**

**1. Creating and Securing Secrets**

- Define a **SecretType** in the variables section.
- Secure the SecretType
  - Go to the variables tab and click the **Secure Vault** icon.

**2. Managing Secrets**

- Assign secrets to client-managed vaults or platform-managed vaults based on requirements.

**3. Environment-Specific Storage**

- Assign vault variables to environment-specific key vaults (e.g., Azure Key Vault) for tailored security and management.

---

### **4.Deployment and Promotion**

**1. Confident Deployment**

- During deployments, ensure that new vault values are protected.
- Verify the integrity of secrets throughout the deployment process.

---

#### **Best Practices**

- Always use environment-specific vaults for enhanced security.
- Regularly review and update permissions for vault access.
- Monitor and audit secret usage to ensure compliance with security policies.

What are secrets, and how are they organized into vaults in Koodisi?

Who can access secrets?

How secrets work with workflows?

Accessing Vaults

How do you add secrets into a vault?

\--------------
