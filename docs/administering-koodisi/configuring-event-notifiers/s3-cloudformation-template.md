---
title: "S3 Event Notifications - CloudFormation Template"
sidebar_position: 1
---


This CloudFormation template creates the necessary IAM resources for managing S3 event notifications with SNS topics.

### Overview

The template provisions:

* IAM User with programmatic access
* IAM Policy with S3 and SNS permissions
* Access Key for the IAM user
* AWS Secrets Manager secret to store credentials securely

### Resources Created

#### IAM Policy (`S3EventSubscriptionPolicy`)

Grants permissions for:

* **S3 Operations**: GetBucketNotification, PutBucketNotification, ListAllMyBuckets, GetBucketLocation
* **SNS Operations**: CreateTopic, DeleteTopic, Subscribe, Unsubscribe, ListSubscriptions, ListSubscriptionsByTopic, ListTopics, GetTopicAttributes, SetTopicAttributes, Publish

#### IAM User (`EventSubscriptionUser`)

* Programmatic access user with the above policy attached
* Tagged for identification and management

#### Access Key (`EventSubscriptionUserAccessKey`)

* Active access key for the IAM user
* Stored securely in AWS Secrets Manager

#### Secrets Manager Secret (`EventSubscriptionCredentials`)

Stores:

* Access Key ID
* Secret Access Key
* AWS Region

### Parameters

| Parameter     | Description             | Default Value                     |
| ------------- | ----------------------- | --------------------------------- |
| `IAMUserName` | Name for the IAM user   | `event-subscription-service-user` |
| `PolicyName`  | Name for the IAM policy | `S3EventSubscriptionPolicy`       |

### Deployment Instructions

#### Prerequisites

* AWS CLI configured with appropriate permissions
* Access to AWS CloudFormation console or CLI

#### Console Deployment

1. **Navigate to CloudFormation**
2. **Create Stack**
   * Click "Create stack" button
   * Select "With new resources (standard)"
3. **Specify Template**
   * Choose "Upload a template file"
   * Upload the `s3-event-notifications_CF.yaml` file
   * Click "Next"
4. **Specify Stack Details**
   * Enter stack name: `s3-event-notifications-cf-test-v1` (or your preferred name)
   * Configure parameters:
     * IAMUserName: `event-subscription-service-user-v1`
     * PolicyName: `S3EventSubscriptionPolicy-v1`
   * Click "Next"
5. **Configure Stack Options**
   * Add tags (optional)
   * Configure additional options as needed
   * Click "Next"
6. **Review and Create**
   * Review all configurations
   * Acknowledge IAM resource creation
   * Click "Submit"
7. **Monitor Stack Creation**
   * Wait for stack status to show `CREATE_COMPLETE`

#### CLI Deployment

```bash
aws cloudformation create-stack \
  --stack-name s3-event-notifications-cf-test \
  --template-body file://s3-event-notifications_CF.yaml \
  --parameters \
    ParameterKey=IAMUserName,ParameterValue=event-subscription-service-user \
    ParameterKey=PolicyName,ParameterValue=S3EventSubscriptionPolicy \
  --capabilities CAPABILITY_NAMED_IAM
```

### Outputs

After successful deployment, the stack provides the following outputs:

| Output                       | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| `IAMUserName`                | Name of the created IAM user                              |
| `IAMUserArn`                 | ARN of the IAM user                                       |
| `SecretsManagerSecretName`   | Name of the Secrets Manager secret containing credentials |
| `Region`                     | AWS Region where resources were created                   |
| `RetrieveCredentialsCommand` | AWS CLI command to retrieve credentials                   |

### Retrieving Credentials

#### From Secrets Manager Console

1. Navigate to AWS Secrets Manager
2. Find the secret: `event-subscription-service-user-v1-credentials`
3. Click "Retrieve secret value"

#### Using AWS CLI

Use the command provided in the stack outputs:

```bash
aws secretsmanager get-secret-value \
  --secret-id <secret-name> \
  --query SecretString \
  --output text
```

The secret contains:

```json
{
  "accessKeyId": "AKIA...",
  "secretAccessKey": "...",
  "region": "us-east-1"
}
```

### Stack Management

#### Updating the Stack

#### Deleting the Stack

**Warning**: Deleting the stack will remove all resources including the IAM user, policy, access keys, and the Secrets Manager secret.

### Security Considerations

1. **Credential Rotation**: Regularly rotate the access keys stored in Secrets Manager
2. **Least Privilege**: Review and adjust IAM permissions based on your specific requirements
3. **Secret Access**: Restrict access to the Secrets Manager secret using resource policies
4. **Monitoring**: Enable CloudTrail logging to monitor API calls made by the IAM user

### Troubleshooting

#### Stack Creation Fails

* Ensure you have `iam:CreateUser`, `iam:CreateAccessKey`, and `secretsmanager:CreateSecret` permissions
* Check that the IAM user name doesn't already exist
* Verify CloudFormation has the `CAPABILITY_NAMED_IAM` capability

#### Cannot Retrieve Credentials

* Verify you have `secretsmanager:GetSecretValue` permission
* Ensure the secret name matches the stack output
* Check the secret hasn't been deleted

### Template Structure

```
Resources:
├── S3EventSubscriptionPolicy (IAM::ManagedPolicy)
├── EventSubscriptionUser (IAM::User)
├── EventSubscriptionUserAccessKey (IAM::AccessKey)
└── EventSubscriptionCredentials (SecretsManager::Secret)
```

### Support

For issues or questions:

* Review CloudFormation stack events for error messages
* Check CloudWatch Logs for detailed error information
* Verify IAM permissions are correctly configured

### License

This template is provided as-is for use in your AWS environment.

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'CloudFormation template for S3 Event Notifications - Creates IAM user with S3 and SNS permissions'

Parameters:
  IAMUserName:
    Type: String
    Description: Name for the IAM user
    Default: event-subscription-service-user

  PolicyName:
    Type: String
    Description: Name for the IAM policy
    Default: S3EventSubscriptionPolicy

Resources:
  # IAM Policy for S3 and SNS operations
  S3EventSubscriptionPolicy:
    Type: AWS::IAM::ManagedPolicy
    Properties:
      ManagedPolicyName: !Ref PolicyName
      Description: Allows S3 event notification configuration and SNS topic management
      PolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Sid: S3NotificationPermissions
            Effect: Allow
            Action:
              - s3:GetBucketNotification
              - s3:PutBucketNotification
              - s3:ListAllMyBuckets
              - s3:GetBucketLocation
            Resource: '*'
          - Sid: SNSPermissions
            Effect: Allow
            Action:
              - sns:CreateTopic
              - sns:DeleteTopic
              - sns:Subscribe
              - sns:Unsubscribe
              - sns:ListSubscriptions
              - sns:ListSubscriptionsByTopic
              - sns:ListTopics
              - sns:GetTopicAttributes
              - sns:SetTopicAttributes
              - sns:Publish
            Resource: '*'

  # IAM User
  EventSubscriptionUser:
    Type: AWS::IAM::User
    Properties:
      UserName: !Ref IAMUserName
      ManagedPolicyArns:
        - !Ref S3EventSubscriptionPolicy
      Tags:
        - Key: Purpose
          Value: S3EventSubscription
        - Key: ManagedBy
          Value: CloudFormation

  # Access Key for the IAM User
  EventSubscriptionUserAccessKey:
    Type: AWS::IAM::AccessKey
    Properties:
      UserName: !Ref EventSubscriptionUser
      Status: Active

  # Secret to store credentials securely
  EventSubscriptionCredentials:
    Type: AWS::SecretsManager::Secret
    Properties:
      Name: !Sub '${IAMUserName}-credentials'
      Description: Credentials for S3 Event Subscription Service
      SecretString: !Sub |
        {
          "accessKeyId": "${EventSubscriptionUserAccessKey}",
          "secretAccessKey": "${EventSubscriptionUserAccessKey.SecretAccessKey}",
          "region": "${AWS::Region}"
        }
      Tags:
        - Key: Purpose
          Value: S3EventSubscription
        - Key: ManagedBy
          Value: CloudFormation

Outputs:
  IAMUserName:
    Description: Name of the IAM user
    Value: !Ref EventSubscriptionUser
    Export:
      Name: !Sub '${AWS::StackName}-IAMUserName'

  IAMUserArn:
    Description: ARN of the IAM user
    Value: !GetAtt EventSubscriptionUser.Arn
    Export:
      Name: !Sub '${AWS::StackName}-IAMUserArn'

  SecretsManagerSecretName:
    Description: Name of the Secrets Manager secret containing credentials
    Value: !Ref EventSubscriptionCredentials
    Export:
      Name: !Sub '${AWS::StackName}-SecretName'

  Region:
    Description: AWS Region where resources were created
    Value: !Ref AWS::Region

  RetrieveCredentialsCommand:
    Description: AWS CLI command to retrieve credentials from Secrets Manager
    Value: !Sub |
      aws secretsmanager get-secret-value --secret-id ${EventSubscriptionCredentials} --query SecretString --output text
```
