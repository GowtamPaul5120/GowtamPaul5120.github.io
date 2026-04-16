# Configuring Event Notifiers

Event Notifiers enable your workflows to receive real-time notifications when files are added, modified, or deleted in cloud storage (AWS S3, Azure Blob Storage, or Google Cloud Storage). Instead of continuously checking for new files (polling), your workflows are automatically triggered the moment a file event occurs.

#### Key Benefits

* **Real-time Processing**: Workflows trigger instantly when files arrive (typically within 2-5 seconds)
* **Reduced Load**: Eliminates constant polling, reducing system resource usage by up to 90%
* **Cost Efficient**: Pay only for actual file events, not continuous monitoring
* **Scalable**: Handle thousands of file events per second without performance degradation
* **Event Filtering**: Monitor specific folders and file types only

### Getting Started

#### Prerequisites

* Active workspace and application in the platform
* Cloud storage account (AWS S3, Azure Blob Storage, or GCS)
* Appropriate permissions to configure cloud resources
* Workflow with webhook trigger deployed

#### Quick Start Guide

**For Workflow Developers:**

1. Create a workflow with a webhook trigger
2. Deploy the workflow
3. Copy the webhook path
4. Provide the `Workspace Name, Application Name and Webhook Path` details to your platform admin

**For Platform Admins:**

1. Navigate to Settings → Organization → Event Notifiers
2. Click "Configure" and select your cloud provider
3. Fill in the configuration form
4. Monitor the metrics for traces

Learn how to configure event notifiers next.
