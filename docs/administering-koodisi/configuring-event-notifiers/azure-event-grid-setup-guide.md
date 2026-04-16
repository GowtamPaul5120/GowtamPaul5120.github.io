# Azure Event Grid Setup Guide

This guide will help you set up Azure Event Grid for blob storage events using Terraform Infrastructure as Code.

### Prerequisites

* Azure Subscription
* Azure CLI installed
* Terminal/Command Line access
* Owner or Contributor role in the Azure subscription

***

### Step 1: Install Required Tools

#### 1.1 Install Azure CLI

**Check if already installed:**

```bash
az --version
```

**For macOS:**

```bash
brew update && brew install azure-cli
```

**For Linux:**

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

**For Windows:** Download from: https://aka.ms/installazurecliwindows

***

#### 1.2 Install Terraform

**For macOS:**

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**For Linux:**

```bash
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

**For Windows:** Download from: https://www.terraform.io/downloads

**Verify installation:**

```bash
terraform --version
```

***

### Step 2: Authenticate with Azure

#### 2.1 Login to Azure

```bash
az login
```

This will open your browser for authentication.

***

#### 2.2 Set Your Subscription

List available subscriptions:

```bash
az account list --output table
```

Set the subscription you want to use:

```bash
az account set --subscription "YOUR_SUBSCRIPTION_ID"
```

***

#### 2.3 Verify Current Subscription

```bash
az account show
```

***

### Step 3: Create Terraform Configuration Files

#### 3.1 Create Project Directory

```bash
mkdir azure-event-grid-setup
cd azure-event-grid-setup
```

***

#### 3.2 Create Main Terraform Configuration

Create a file named `main.tf` with the following content:

```hcl
terraform {
  required_version = ">= 1.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
    azuread = {
      source  = "hashicorp/azuread"
      version = "~> 2.0"
    }
  }
}

provider "azurerm" {
  features {}
}

provider "azuread" {}

# Variables for customization
variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

variable "application_name" {
  description = "Name for the Azure AD application"
  type        = string
  default     = "event-subscription-service"
}

variable "client_secret_expiration_years" {
  description = "Number of years until client secret expires"
  type        = number
  default     = 2
}

variable "resource_group_scope" {
  description = "Optional resource group name for scoped permissions. Leave empty for subscription-level permissions."
  type        = string
  default     = ""
}

# Get current Azure AD configuration
data "azuread_client_config" "current" {}

data "azurerm_subscription" "current" {}

data "azurerm_resource_group" "target" {
  count = var.resource_group_scope != "" ? 1 : 0
  name  = var.resource_group_scope
}

# Create Azure AD Application
resource "azuread_application" "event_subscription" {
  display_name = var.application_name
  owners       = [data.azuread_client_config.current.object_id]
}

# Create Service Principal for the Application
resource "azuread_service_principal" "event_subscription" {
  client_id = azuread_application.event_subscription.client_id
  owners    = [data.azuread_client_config.current.object_id]
}

# Create Client Secret
resource "azuread_application_password" "event_subscription" {
  application_id = azuread_application.event_subscription.id
  display_name   = "Terraform managed secret"
  end_date       = timeadd(timestamp(), "${var.client_secret_expiration_years * 8760}h")
}

# Assign EventGrid EventSubscription Contributor role
resource "azurerm_role_assignment" "event_grid_contributor" {
  scope                = var.resource_group_scope != "" ? data.azurerm_resource_group.target[0].id : data.azurerm_subscription.current.id
  role_definition_name = "EventGrid EventSubscription Contributor"
  principal_id         = azuread_service_principal.event_subscription.object_id
}

# Store credentials in local file (optional - for manual retrieval)
resource "local_file" "credentials" {
  content = jsonencode({
    tenantId     = data.azuread_client_config.current.tenant_id
    clientId     = azuread_application.event_subscription.client_id
    clientSecret = azuread_application_password.event_subscription.value
    subscriptionId = data.azurerm_subscription.current.subscription_id
  })
  filename = "${path.module}/azure-credentials.json"
  file_permission = "0600"
}

# Outputs
output "tenant_id" {
  description = "Azure AD Tenant ID"
  value       = data.azuread_client_config.current.tenant_id
}

output "subscription_id" {
  description = "Azure Subscription ID"
  value       = data.azurerm_subscription.current.subscription_id
}

output "client_id" {
  description = "Application (Client) ID"
  value       = azuread_application.event_subscription.client_id
}

output "client_secret" {
  description = "Client Secret (sensitive)"
  value       = azuread_application_password.event_subscription.value
  sensitive   = true
}

output "application_name" {
  description = "Application Name"
  value       = azuread_application.event_subscription.display_name
}

output "service_principal_object_id" {
  description = "Service Principal Object ID"
  value       = azuread_service_principal.event_subscription.object_id
}

output "role_assignment_scope" {
  description = "Scope where role is assigned"
  value       = var.resource_group_scope != "" ? "Resource Group: ${var.resource_group_scope}" : "Subscription: ${data.azurerm_subscription.current.display_name}"
}

output "credentials_file" {
  description = "Path to credentials file"
  value       = "Credentials saved to: ${abspath(local_file.credentials.filename)}"
}

output "retrieve_client_secret_command" {
  description = "Command to retrieve client secret from Terraform state"
  value       = "terraform output -raw client_secret"
}
```

***

#### 3.3 Create Variables File

Create a file named `terraform.tfvars` with your values:

**Option A: Subscription-Level Permissions (Recommended)**

```hcl
subscription_id = "your-subscription-id"
application_name = "event-subscription-service"
```

**Option B: Resource Group-Level Permissions (More Restrictive)**

```hcl
subscription_id = "your-subscription-id"
application_name = "event-subscription-service"
resource_group_scope = "your-resource-group-name"
```

**Option C: Full Customization**

```hcl
subscription_id                  = "your-subscription-id"
application_name                 = "prod-event-subscription-service"
client_secret_expiration_years   = 2
resource_group_scope             = ""
```

**Replace values with your actual Azure details.**

***

### Step 4: Deploy Infrastructure

#### 4.1 Initialize Terraform

```bash
terraform init
```

Expected output:

```
Initializing the backend...
Initializing provider plugins...
Terraform has been successfully initialized!
```

***

#### 4.2 Preview Changes

```bash
terraform plan
```

This shows what will be created. Review carefully.

***

#### 4.3 Apply Configuration

```bash
terraform apply
```

Type `yes` when prompted.

**Deployment takes 1-2 minutes.**

***

#### 4.4 View Outputs

After successful deployment, you'll see outputs like:

```
Outputs:

application_name = "event-subscription-service"
client_id = "12345678-1234-1234-1234-123456789abc"
client_secret = <sensitive>
credentials_file = "Credentials saved to: /path/to/azure-event-grid-setup/azure-credentials.json"
retrieve_client_secret_command = "terraform output -raw client_secret"
role_assignment_scope = "Subscription: Your Subscription Name"
service_principal_object_id = "87654321-4321-4321-4321-cba987654321"
subscription_id = "11111111-2222-3333-4444-555555555555"
tenant_id = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
```

**Save these outputs for later use!**

***

### Step 5: Retrieve Client Secret

#### 5.1 View Client Secret

```bash
terraform output -raw client_secret
```

This will display the client secret value.

***

#### 5.2 View Complete Credentials

The credentials are automatically saved to `azure-credentials.json`:

```bash
cat azure-credentials.json
```

Output:

```json
{
  "tenantId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "clientId": "12345678-1234-1234-1234-123456789abc",
  "clientSecret": "abc123~XYZ789.secretvalue123456",
  "subscriptionId": "11111111-2222-3333-4444-555555555555"
}
```

**Important:** Keep this file secure and never commit it to version control!

***

### Step 6: Verify Resources in Azure Portal

#### 6.1 Verify Application Registration

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for **Azure Active Directory** (or **Microsoft Entra ID**)
3. Click **App registrations**
4. You should see: `event-subscription-service`
5. Click on it to view details

***

#### 6.2 Verify Service Principal

1. In Azure AD, click **Enterprise applications**
2. Change filter to **All applications**
3. Search for: `event-subscription-service`
4. You should see the service principal

***

#### 6.3 Verify Role Assignment

**For Subscription-Level:**

1. Search for **Subscriptions**
2. Click on your subscription
3. Click **Access control (IAM)**
4. Click **Role assignments** tab
5. Search for your application name
6. You should see: `EventGrid EventSubscription Contributor` role

**For Resource Group-Level:**

1. Search for **Resource groups**
2. Click on your resource group
3. Follow steps 3-6 above

***

#### 6.4 Verify Client Secret

1. In your app registration, click **Certificates & secrets**
2. You should see one client secret with description "Terraform managed secret"
3. Note the expiration date

***

### Step 7: Configuration Summary

After completing all steps, you have:

```json
{
  "tenantId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "clientId": "12345678-1234-1234-1234-123456789abc",
  "clientSecret": "abc123~XYZ789.secretvalue123456",
  "subscriptionId": "11111111-2222-3333-4444-555555555555",
  "applicationName": "event-subscription-service",
  "roleAssignmentScope": "Subscription or Resource Group"
}
```

***

### Step 8: Using the Service Principal

Now you can use the service principal credentials in your application.

#### Example: Create Event Grid Subscription

```bash
curl -X POST http://localhost:8080/api/blob-events/subscriptions \
  -H "Content-Type: application/json" \
  -d '{
    "tenantId": "YOUR_TENANT_ID",
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET",
    "subscriptionId": "YOUR_SUBSCRIPTION_ID",
    "resourceGroupName": "YOUR_RESOURCE_GROUP",
    "storageAccountName": "YOUR_STORAGE_ACCOUNT",
    "eventSubscriptionName": "my-blob-events-subscription",
    "webhookEndpoint": "https://yourdomain.com/azure/webhook",
    "eventFilter": {
      "includedEventTypes": [
        "Microsoft.Storage.BlobCreated",
        "Microsoft.Storage.BlobDeleted"
      ]
    }
  }'
```

***

### Customization Options

#### Available Variables

| Variable                         | Required | Default                    | Description                                |
| -------------------------------- | -------- | -------------------------- | ------------------------------------------ |
| `subscription_id`                | **Yes**  | -                          | Your Azure Subscription ID                 |
| `application_name`               | No       | event-subscription-service | App registration name                      |
| `client_secret_expiration_years` | No       | 2                          | Years until secret expires (1-2 years)     |
| `resource_group_scope`           | No       | "" (subscription-level)    | Resource group name for scoped permissions |

***

#### Example Custom Configurations

**Production Environment:**

```hcl
# terraform.tfvars
subscription_id = "prod-subscription-id"
application_name = "prod-event-subscription-service"
client_secret_expiration_years = 1
resource_group_scope = "prod-storage-rg"
```

**Development Environment:**

```hcl
# terraform.tfvars
subscription_id = "dev-subscription-id"
application_name = "dev-event-subscription-service"
client_secret_expiration_years = 2
resource_group_scope = ""
```

***

### Troubleshooting

#### Error: "Insufficient privileges"

**Cause:** Your user account doesn't have permissions to create app registrations.

**Solution:**

* Ensure you have **Application Administrator** or **Global Administrator** role in Azure AD
* Or ask your Azure AD admin to create the app registration for you

***

#### Error: "Role assignment already exists"

**Cause:** The service principal already has the role assigned.

**Solution:** This is usually safe to ignore. If deployment fails:

```bash
# Import the existing role assignment
terraform import azurerm_role_assignment.event_grid_contributor /subscriptions/YOUR_SUB_ID/providers/Microsoft.Authorization/roleAssignments/ASSIGNMENT_ID
```

***

#### Error: "Application already exists"

**Cause:** An app with the same name already exists.

**Solution:** Either:

1. Use a different `application_name` in `terraform.tfvars`
2. Delete the existing app via Azure Portal
3. Import the existing app:

```bash
terraform import azuread_application.event_subscription /applications/APPLICATION_OBJECT_ID
```

***

#### Error: "Subscription not found"

**Cause:** The subscription ID is incorrect or you don't have access.

**Solution:**

```bash
# List available subscriptions
az account list --output table

# Set the correct subscription
az account set --subscription "SUBSCRIPTION_ID"
```

***

#### Error: "Resource group not found"

**Cause:** The resource group specified in `resource_group_scope` doesn't exist.

**Solution:**

* Verify the resource group name is correct
* Create the resource group first, or
* Use subscription-level permissions by leaving `resource_group_scope` empty

***

### Managing Your Infrastructure

#### View Current State

```bash
terraform show
```

***

#### Update Configuration

1. Edit `terraform.tfvars` with new values
2. Run:

```bash
terraform plan
terraform apply
```

***

#### Rotate Client Secret

To create a new client secret:

1. Update expiration in `terraform.tfvars` (this forces recreation):

```hcl
client_secret_expiration_years = 2
```

2. Apply changes:

```bash
terraform apply
```

This will create a new secret and revoke the old one.

***

#### Destroy All Resources

**Warning:** This will delete all created resources!

```bash
terraform destroy
```

Type `yes` when prompted.

**What gets deleted:**

* Azure AD Application
* Service Principal
* Client Secret
* Role Assignment
* Local credentials file

***

### Security Best Practices

#### 1. Client Secret Management

**DO:**

* Store secrets in Azure Key Vault for production
* Rotate secrets every 12-24 months
* Use managed identities when possible
* Set expiration dates on all secrets

**DON'T:**

* Commit secrets to version control (add `*.json` to `.gitignore`)
* Share secrets via email or chat
* Use the same secret across multiple environments
* Set secrets to never expire

***

#### 2. Principle of Least Privilege

**DO:**

* Use resource group-level permissions when possible
* Create separate service principals for different environments
* Regularly audit role assignments
* Remove unused service principals

**DON'T:**

* Grant subscription-level permissions unless necessary
* Use Owner or Contributor roles when specific roles exist
* Share service principals across applications

***

#### 3. Terraform State Management

**DO:**

* Store Terraform state in Azure Storage Account with encryption
* Enable state locking
* Restrict access to state files
* Use separate state files for different environments

**DON'T:**

* Commit `terraform.tfstate` to version control
* Share state files publicly
* Skip state backups

**Example: Remote State Configuration**

Add to your `main.tf`:

```hcl
terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-state-rg"
    storage_account_name = "tfstate123"
    container_name       = "tfstate"
    key                  = "azure-event-grid.tfstate"
  }
}
```

***

#### 4. Monitoring and Alerting

**DO:**

* Enable Azure AD sign-in logs
* Monitor service principal usage
* Set up alerts for unusual activity
* Review audit logs regularly

```bash
# View service principal sign-ins
az ad sp show --id YOUR_CLIENT_ID --query "signInAudience"
```

***

### Cost Optimization

#### Terraform Resources Cost

| Resource             | Cost |
| -------------------- | ---- |
| Azure AD Application | Free |
| Service Principal    | Free |
| Client Secret        | Free |
| Role Assignment      | Free |

#### Ongoing Costs (when using Event Grid)

| Service               | Cost                         |
| --------------------- | ---------------------------- |
| Event Grid operations | $0.60 per million operations |
| Storage events        | Free                         |
| Webhook delivery      | Included in operations cost  |

***

### Comparison: Manual vs Terraform Approach

| Aspect                  | Manual (Portal)        | Terraform (IaC)      |
| ----------------------- | ---------------------- | -------------------- |
| Time to setup           | 10-15 minutes          | 5 minutes            |
| Reproducibility         | Manual steps each time | One command          |
| Environment consistency | Prone to human error   | Identical every time |
| Version control         | Not possible           | Full Git history     |
| Team collaboration      | Difficult to share     | Easy with code       |
| Audit trail             | Limited                | Complete in Git      |
| Automation              | Not possible           | Fully automated      |
| Secret rotation         | Manual process         | Automated            |

***

### Next Steps

After completing this setup, you can:

1. **Create Storage Accounts** for your event sources
2. **Configure Event Grid Subscriptions** using the service principal
3. **Set up Webhooks** to receive events
4. **Integrate with your application** using the credentials

***

### Additional Resources

* [Terraform Azure Provider Documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
* [Terraform Azure AD Provider Documentation](https://registry.terraform.io/providers/hashicorp/azuread/latest/docs)
* [Azure Event Grid Documentation](https://learn.microsoft.com/en-us/azure/event-grid/)
* [Service Principal Best Practices](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)
* [Azure Storage Events Schema](https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage)

***

### Appendix A: Quick Reference Commands

```bash
# Azure CLI Commands
az login
az account list --output table
az account set --subscription "SUBSCRIPTION_ID"
az account show

# Terraform Commands
terraform init
terraform plan
terraform apply
terraform destroy
terraform show
terraform state list
terraform output -raw client_secret

# Verify Resources
az ad app list --display-name "event-subscription-service"
az ad sp list --display-name "event-subscription-service"
az role assignment list --assignee CLIENT_ID
```

***

### Appendix B: Terraform State Files

After running Terraform, you'll have these files:

```
azure-event-grid-setup/
├── main.tf                    # Main configuration
├── terraform.tfvars           # Your variables (gitignore this)
├── azure-credentials.json     # Generated credentials (gitignore this)
├── .terraform/                # Terraform plugins (gitignore this)
├── terraform.tfstate          # Current state (gitignore this)
└── terraform.tfstate.backup   # Previous state (gitignore this)
```

**Recommended `.gitignore`:**

```
# Terraform
.terraform/
*.tfstate
*.tfstate.*
*.tfvars

# Credentials
*.json
azure-credentials.json

# OS files
.DS_Store
Thumbs.db
```

***

### Appendix C: Using Azure Key Vault for Secrets

For production environments, store credentials in Azure Key Vault:

```hcl
# Add to main.tf
resource "azurerm_key_vault_secret" "client_secret" {
  name         = "event-subscription-client-secret"
  value        = azuread_application_password.event_subscription.value
  key_vault_id = data.azurerm_key_vault.existing.id
}
```

Retrieve from Key Vault:

```bash
az keyvault secret show --name "event-subscription-client-secret" --vault-name "your-vault-name" --query "value" -o tsv
```

***

**Last Updated:** October 2025\
**Version:** 1.0\
**Author:** Azure Event Grid Setup Team
