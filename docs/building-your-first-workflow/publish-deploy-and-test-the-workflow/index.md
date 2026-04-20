---
title: "Publish, Deploy, and Test the Workflow"
sidebar_position: 4
---

Publishing, deploying, and testing are the final steps to make your workflows and applications ready for use.

1. Publishing saves a version of the workflow and prepares it for deployment.
2. Deployment moves the workflow to a specific environment, such as Development or Production.
3. Testing checks that the workflow works correctly before others start using it.

## **Publish Your Workflow**

1. Click the **Publish** icon in the toolbar above the Workflow Builder canvas to publish your workflow.\
   The Publish History side panel appears. This panel lists all versions of the workflow that you've published. In this instance, because this is the first time you're publishing your workflow, the panel should be empty.
2. Click **Publish Version** in the Publish History panel or the **+** icon in the top-right corner of the Publish History panel to add a new published version.\
   The Publish '\<Name of Your Workflow>' modal appears.
3. Optionally, enter a description of your published version and click **Publish**. \
   Your initial published version now appears as Version 1 in the Publish History panel. This means that your version is now published and ready for deployment.

## Deploy Your Workflow

1. Click **Deploy** adjacent to your version name.\
   The Deploy '\<Name of Your Workflow>' modal appears.
2. Enter a **Name** for your deployment, such as HelloWorld_Deployment1. Add comments as required. Leave the other fields unchanged.
3. Click **Deploy**.\
   If your workflow is configured and published correctly, it's deployed without errors, and a confirmation message appears. Also, you can see your deployment listed in the Deployments side panel.

You are now ready to test your workflow.

<figure><img src="../../../assets/images/Publish &#x26; Deploy.gif" alt=""/><figcaption></figcaption></figure>

## **Test the Workflow**

1. Click the **Test** button under your deployment name in the Deployments side panel.\
   The application now prepares your workflow for testing, and a confirmation message lets you know once your workflow is ready for testing, and that you will need to save your test configurations manually.
2. You can choose to update the name of your test. But you don't have to.
3. Click **Refresh Token** to ensure that your auth token is refreshed and valid.
4. Click **Save**. Your test case is now ready.

:::info
**Understanding the Test**

A quick review of the contents of your test case tells you what your workflow does when you click Test.

- It sends a GET command to the /Hello endpoint created within your application, which is hosted in the URL provided. Note that the URL includes the name of your workspace and application.
- You can see the headers--or additional required data--that will be sent along with the execution request as part of the test. This includes your authorization key, the content type that must be used to interpret the data being sent, and the subscription key associated with your request.
  :::

5. Click **Send** to trigger the test and send the GET request to the Azure endpoint. If your workflow is configured correctly, you must see a Status of 200 (meaning that your request succeeded) and the Message returned as `Hello World`.

<figure><img src="../../../assets/images/Test.gif" alt=""/><figcaption></figcaption></figure>

Congratulations! You've just created, published, deployed and tested your first workflow. Review the following sections for more information on managing workflows.

- [working-with-applications](../working-with-applications/ "mention")
- [working-with-workflows](../working-with-workflows/ "mention")
- [working-with-activities](../working-with-activities/ "mention")
