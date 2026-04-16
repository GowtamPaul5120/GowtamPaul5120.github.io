# GCP Cloud Storage Event

This guide will help you set up GCP Cloud Storage event notifications using Terraform Infrastructure as Code.

### Prerequisites

* GCP Project with billing enabled
* gcloud CLI installed
* Terminal/Command Line access
* Owner or Editor role in the GCP project

***

### Step 1: Install Required Tools

#### 1.1 Install gcloud CLI

**Check if already installed:**

```bash
gcloud --version
```

**For macOS:**

```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

**For Linux:**

```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

**For Windows:** Download from: https://cloud.google.com/sdk/docs/install

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

### Step 2: Authenticate with GCP

#### 2.1 Initialize gcloud

```bash
gcloud init
```

This will guide you through:

* Logging in to your Google account
* Selecting your GCP project
* Setting default compute region/zone

***

#### 2.2 Login to GCP

```bash
gcloud auth login
```

This will open your browser for authentication.

***

#### 2.3 Set Application Default Credentials

```bash
gcloud auth application-default login
```

This allows Terraform to authenticate with GCP.

***

#### 2.4 Set Your Project

List available projects:

```bash
gcloud projects list
```

Set the project you want to use:

```bash
gcloud config set project YOUR_PROJECT_ID
```

***

#### 2.5 Verify Current Project

```bash
gcloud config get-value project
```

***

### Step 3: Create Terraform Configuration Files

#### 3.1 Create Project Directory

```bash
mkdir gcp-event-notification-setup
cd gcp-event-notification-setup
```

***

#### 3.2 Create Main Terraform Configuration

Create a file named `main.tf` with the following content:

```hcl
terraform {
  required_version = ">= 1.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Variables for customization
variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region for resources"
  type        = string
  default     = "us-central1"
}

variable "service_account_name" {
  description = "Name for the service account"
  type        = string
  default     = "event-subscription-service"
}

variable "custom_role_id" {
  description = "ID for the custom IAM role"
  type        = string
  default     = "gcs_event_notification_manager"
}

variable "custom_role_title" {
  description = "Title for the custom IAM role"
  type        = string
  default     = "GCS Event Notification Manager"
}

# Enable required APIs
resource "google_project_service" "required_apis" {
  for_each = toset([
    "cloudresourcemanager.googleapis.com",
    "pubsub.googleapis.com",
    "storage.googleapis.com",
    "secretmanager.googleapis.com",
    "iam.googleapis.com",
    "iamcredentials.googleapis.com"
  ])

  project            = var.project_id
  service            = each.value
  disable_on_destroy = false
}

# Create Custom IAM Role
resource "google_project_iam_custom_role" "event_notification_manager" {
  role_id     = var.custom_role_id
  title       = var.custom_role_title
  description = "Allows management of Cloud Storage event notifications and Pub/Sub resources"
  project     = var.project_id
  stage       = "GA"

  permissions = [
    # Storage Permissions
    "storage.buckets.get",
    "storage.buckets.update",

    # Pub/Sub Topic Permissions
    "pubsub.topics.create",
    "pubsub.topics.delete",
    "pubsub.topics.get",
    "pubsub.topics.getIamPolicy",
    "pubsub.topics.list",
    "pubsub.topics.publish",
    "pubsub.topics.setIamPolicy",
    "pubsub.topics.attachSubscription",

    # Pub/Sub Subscription Permissions
    "pubsub.subscriptions.create",
    "pubsub.subscriptions.delete",
    "pubsub.subscriptions.get",
    "pubsub.subscriptions.getIamPolicy",
    "pubsub.subscriptions.list",
    "pubsub.subscriptions.setIamPolicy",
    "pubsub.subscriptions.update",
    "pubsub.subscriptions.consume",
    "pubsub.snapshots.seek",

    # Resource Manager Permissions
    "resourcemanager.projects.get",

    # IAM Permission
    "iam.serviceAccounts.actAs"
  ]

  depends_on = [google_project_service.required_apis]
}

# Create Service Account
resource "google_service_account" "event_subscription_service" {
  account_id   = var.service_account_name
  display_name = "Event Subscription Service Account"
  description  = "Service account for managing Cloud Storage event notifications"
  project      = var.project_id

  depends_on = [google_project_service.required_apis]
}

# Bind Custom Role to Service Account
resource "google_project_iam_member" "service_account_role_binding" {
  project = var.project_id
  role    = google_project_iam_custom_role.event_notification_manager.id
  member  = "serviceAccount:${google_service_account.event_subscription_service.email}"

  depends_on = [
    google_service_account.event_subscription_service,
    google_project_iam_custom_role.event_notification_manager
  ]
}

# Create Service Account Key
resource "google_service_account_key" "event_subscription_key" {
  service_account_id = google_service_account.event_subscription_service.name

  depends_on = [
    google_service_account.event_subscription_service,
    google_project_iam_member.service_account_role_binding
  ]
}

# Store Service Account Key in Secret Manager
resource "google_secret_manager_secret" "service_account_credentials" {
  secret_id = "${var.service_account_name}-credentials"
  project   = var.project_id

  replication {
    auto {}
  }

  labels = {
    purpose    = "gcs-event-subscription"
    managed-by = "terraform"
  }

  depends_on = [google_project_service.required_apis]
}

# Store the actual key content in the secret
resource "google_secret_manager_secret_version" "service_account_credentials_version" {
  secret      = google_secret_manager_secret.service_account_credentials.id
  secret_data = base64decode(google_service_account_key.event_subscription_key.private_key)

  depends_on = [google_secret_manager_secret.service_account_credentials]
}

# Grant the service account access to read its own credentials from Secret Manager
resource "google_secret_manager_secret_iam_member" "service_account_secret_accessor" {
  secret_id = google_secret_manager_secret.service_account_credentials.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.event_subscription_service.email}"

  depends_on = [google_secret_manager_secret_version.service_account_credentials_version]
}

# Store credentials in local file (optional - for manual retrieval)
resource "local_file" "credentials" {
  content         = base64decode(google_service_account_key.event_subscription_key.private_key)
  filename        = "${path.module}/gcp-credentials.json"
  file_permission = "0600"
}

# Outputs
output "project_id" {
  description = "GCP Project ID"
  value       = var.project_id
}

output "region" {
  description = "GCP Region"
  value       = var.region
}

output "service_account_email" {
  description = "Email of the created service account"
  value       = google_service_account.event_subscription_service.email
}

output "service_account_id" {
  description = "ID of the created service account"
  value       = google_service_account.event_subscription_service.id
}

output "custom_role_id" {
  description = "ID of the custom IAM role"
  value       = google_project_iam_custom_role.event_notification_manager.id
}

output "custom_role_name" {
  description = "Name of the custom IAM role"
  value       = google_project_iam_custom_role.event_notification_manager.name
}

output "secret_manager_secret_id" {
  description = "Secret Manager secret ID containing service account credentials"
  value       = google_secret_manager_secret.service_account_credentials.secret_id
}

output "secret_manager_secret_name" {
  description = "Full Secret Manager secret name"
  value       = google_secret_manager_secret.service_account_credentials.name
}

output "credentials_file" {
  description = "Path to credentials file"
  value       = "Credentials saved to: ${abspath(local_file.credentials.filename)}"
}

output "retrieve_credentials_command" {
  description = "Command to retrieve service account credentials from Secret Manager"
  value       = "gcloud secrets versions access latest --secret=${google_secret_manager_secret.service_account_credentials.secret_id} --project=${var.project_id}"
}

output "service_account_key_download_note" {
  description = "Note about downloading service account key"
  value       = "Service account key is stored in Secret Manager. Use the retrieve_credentials_command to get the credentials."
}
```

***

#### 3.3 Create Variables File

Create a file named `terraform.tfvars` with your values:

**Option A: Default Configuration (Recommended)**

```hcl
project_id           = "your-project-id"
region               = "us-central1"
service_account_name = "event-subscription-service"
```

**Option B: Custom Configuration**

```hcl
project_id           = "your-project-id"
region               = "us-east1"
service_account_name = "prod-event-service"
custom_role_id       = "custom_gcs_event_manager"
custom_role_title    = "Production Event Manager"
```

**Replace `your-project-id` with your actual GCP project ID.**

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
- Finding hashicorp/google versions matching "~> 5.0"...
Terraform has been successfully initialized!
```

***

#### 4.2 Preview Changes

```bash
terraform plan
```

This shows what will be created. Review carefully.

You should see:

* 6 APIs to be enabled
* 1 custom IAM role to be created
* 1 service account to be created
* 1 service account key to be generated
* 1 IAM role binding to be created
* 2 Secret Manager resources to be created
* 1 local file to be created

***

#### 4.3 Apply Configuration

```bash
terraform apply
```

Type `yes` when prompted.

**Deployment takes 2-3 minutes.**

***

#### 4.4 View Outputs

After successful deployment, you'll see outputs like:

```
Outputs:

credentials_file = "Credentials saved to: /path/to/gcp-event-notification-setup/gcp-credentials.json"
custom_role_id = "projects/your-project-id/roles/gcs_event_notification_manager"
custom_role_name = "projects/your-project-id/roles/gcs_event_notification_manager"
project_id = "your-project-id"
region = "us-central1"
retrieve_credentials_command = "gcloud secrets versions access latest --secret=event-subscription-service-credentials --project=your-project-id"
service_account_email = "event-subscription-service@your-project-id.iam.gserviceaccount.com"
service_account_id = "projects/your-project-id/serviceAccounts/event-subscription-service@your-project-id.iam.gserviceaccount.com"
service_account_key_download_note = "Service account key is stored in Secret Manager. Use the retrieve_credentials_command to get the credentials."
secret_manager_secret_id = "event-subscription-service-credentials"
secret_manager_secret_name = "projects/123456789/secrets/event-subscription-service-credentials"
```

***

### Step 5: Retrieve and Use Credentials

#### 5.1 Get Credentials from Local File

The credentials are automatically saved to a local file:

```bash
cat gcp-credentials.json
```

***

#### 5.2 Get Credentials from Secret Manager

Retrieve from Secret Manager (recommended for production):

```bash
gcloud secrets versions access latest \
  --secret=event-subscription-service-credentials \
  --project=your-project-id > retrieved-credentials.json
```

***

#### 5.3 Verify Service Account

Check the service account was created:

```bash
gcloud iam service-accounts list --project=your-project-id
```

You should see:

```
NAME                          EMAIL
Event Subscription Service Account   event-subscription-service@your-project-id.iam.gserviceaccount.com
```

***

#### 5.4 Verify Custom Role

Check the custom role:

```bash
gcloud iam roles describe gcs_event_notification_manager --project=your-project-id
```

***

#### 5.5 Verify Role Binding

Check IAM policy:

```bash
gcloud projects get-iam-policy your-project-id \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:event-subscription-service@*"
```

***

### Step 6: Verify Deployment

#### 6.1 View All Resources Created

```bash
terraform state list
```

Expected output:

```
google_project_iam_custom_role.event_notification_manager
google_project_iam_member.service_account_role_binding
google_project_service.required_apis["cloudresourcemanager.googleapis.com"]
google_project_service.required_apis["iam.googleapis.com"]
google_project_service.required_apis["iamcredentials.googleapis.com"]
google_project_service.required_apis["pubsub.googleapis.com"]
google_project_service.required_apis["secretmanager.googleapis.com"]
google_project_service.required_apis["storage.googleapis.com"]
google_secret_manager_secret.service_account_credentials
google_secret_manager_secret_iam_member.service_account_secret_accessor
google_secret_manager_secret_version.service_account_credentials_version
google_service_account.event_subscription_service
google_service_account_key.event_subscription_key
local_file.credentials
```

***

#### 6.2 Verify Service Account

Check the service account was created:

```bash
gcloud iam service-accounts list --project=your-project-id
```

You should see:

```
NAME                               EMAIL
Event Subscription Service Account event-subscription-service@your-project-id.iam.gserviceaccount.com
```

***

#### 6.3 Verify Custom Role

Check the custom role:

```bash
gcloud iam roles describe gcs_event_notification_manager --project=your-project-id
```

***

#### 6.4 Verify IAM Policy Binding

Check the role assignment:

```bash
gcloud projects get-iam-policy your-project-id \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:event-subscription-service@*"
```

***

#### 6.5 Verify Enabled APIs

```bash
gcloud services list --enabled --project=your-project-id
```

***

### Step 7: Retrieve Service Account Credentials

#### 7.1 Option 1: From Local File

The credentials are automatically saved to a local file:

```bash
cat gcp-credentials.json
```

***

#### 7.2 Option 2: From Secret Manager

Retrieve from Secret Manager (recommended for production):

```bash
gcloud secrets versions access latest \
  --secret=event-subscription-service-credentials \
  --project=your-project-id > retrieved-credentials.json
```

***

#### 7.3 Option 3: From Terraform Output

View the Terraform output that shows where credentials are stored:

```bash
terraform output credentials_file
terraform output retrieve_credentials_command
```

**Last Updated:** November 2025\
**Version:** 1.0\
**Author:** GCP Event Notification Setup Team
