---
title: "Koodisi: Key Tasks"
sidebar_position: 4
---

This page lists the key tasks that typical users perform, in the order in which they perform it. Use this page to understand the overall process that Koodisi enables, and to understand dependencies in the application.

:::info
Some of these tasks require specific permissions. Please work with your administrator to secure them if required.
:::

## 1. Create Workspace

**Role: Platform Administrator**

- Workspaces are dedicated collaborative environments where you can organize and manage your applications and workflows.
- They provide a centralized location for teams to share resources, control access, and streamline collaboration.
- Workspaces allow you to separate different projects or teams, with the ability to designate them as public or private depending on your needs.
- Setting up workspaces is essential because it helps maintain structure, ensures that related resources are grouped together, and facilitates secure and efficient teamwork.

See [creating-a-workspace.md](/docs/working-with-workspaces/creating-a-workspace) for more information.

## 2. Create Application

**Role: Integration Specialist**

- Applications in Koodisi are individual solutions created within a workspace.
- They bundle together all the necessary components required for automating business processes, such as workflows, resources, and schemas. Essentially, an application is an organized collection of workflows and other supporting elements (like actions to communicate with external systems, data structure definitions, and reusable configurations) that together streamline and automate the tasks within your organization.
- Applications allow you to automate workflows, maintain integration and consistency, and enhance manageability. This modular approach also supports scalability and better organization across different parts of your enterprise.
- By setting up applications in Koodisi, you ensure that your enterprise can efficiently handle complex data flows, reduce manual tasks, and achieve a more agile response to business changes.

See [creating-an-application.md](/docs/working-with-applications/creating-an-application) for more information.

## 3. Add Resources

**Role: Integration Specialist**

- In Koodisi, resources are reusable configurations or services—such as API connections and authentication settings—that support the execution of workflows.
- Setting them up is essential because they enable you to streamline workflow execution by centralizing key configurations, reducing the need to repeatedly configure these settings in each workflow, and ensuring consistency and ease of maintenance across your applications.

See [creating-and-renaming-resources.md](/docs/working-with-applications/managing-resources/creating-and-renaming-resources) for more information.

## 4. Define Schemas

**Role: Integration Specialist**

- Defining schemas in Koodisi is essential because a schema acts as a blueprint for your data.
- It organizes the structure of your data by specifying the types, rules, and format, which ensures that your workflows and operations run smoothly and consistently.
- Schemas help in maintaining data integrity and allow for predictable interactions within your system.

See [creating-schemas.md](/docs/working-with-applications/managing-schemas/creating-schemas) for more information.

## 5. Configure Variables

**Role: Integration Specialist**

- Variables are placeholders used to store and manage data within workflows.
- They are defined at the application level, which means that they can be shared and accessed across all workflows within an application.
- Using variables allows you to dynamically integrate data into your workflows, making them flexible and efficient by enabling you to drag and drop, type, or map the variable into activity input fields.

See [managing-variables](/docs/working-with-applications/managing-variables) for more information.

## 6. Create Workflows

**Role: Integration Specialist**

- Workflows are the central constructs around which your applications are built.
- They define the structured sequences of actions and processes that automate tasks, connect systems, and transform data across your organization. Essentially, a workflow in Koodisi provides a no-code/low-code environment to visually design and execute business logic by chaining together various activities (such as HTTP integrations, data mapping, logging, and more) to accomplish specific tasks.
- Use workflows to streamline and automate complex integrations, reduce manual effort, and enable rapid development cycles. By using workflows, organizations can ensure standardized, efficient processes that improve collaboration, reduce errors, and accelerate time-to-market.
- Build a workflow to encapsulate your business logic and integrate required activities. Integrate triggers (such as REST services, Webhooks, or other activity-based initiators) to activate the workflow.

See [creating-a-workflow.md](/docs/working-with-workflows/creating-and-managing-workflows/creating-a-workflow) for more information.

## 7. Set up Activity Mapping

**Role: Integration Specialist (with input from Business User)**

- In Koodisi, activity mapping refers to the process of defining how data is associated with and transferred between different activities within a workflow.
- It involves configuring the inputs and outputs for each activity so that data is transformed, routed, and processed correctly throughout your automated processes.
- Set up activity mapping to ensure that each activity in your workflow correctly receives the data it needs and that the output is appropriately formatted for downstream activities. This mapping is key to achieving seamless integration, accurate data transformation, and reliable task execution across systems, which ultimately helps in optimizing and streamlining your automated processes.

See [mapping](/docs/working-with-workflows/creating-and-managing-workflows/mapping) for more information.

## 8. Configure Transition Lines

**Role: Integration Specialist**

- Transition lines define how workflows move from one activity to the next based on certain conditions, such as success or error states.
- Transition lines control workflow execution based on whether business rules succeed or fail, and establish complementary behavior for matching and non-matching outcomes.
- Configuring transition lines ensures that both expected (success) and unexpected (error) outcomes are handled correctly, which is essential for robust and predictable workflow behavior.

See [transition-lines.md](/docs/working-with-workflows/creating-and-managing-workflows/transition-lines) for more information.

## 9. Set up Deployment Profiles

**Role: Platform Administrator**

- Deployment profiles simplify the deployment and execution of workflows by managing environment-specific configurations securely and flexibly.
- Deployment profiles enable you to:
  - Manage environment-specific and client-scoped variables.
  - Enable and customize logging for activities at the application or workflow level.
  - Apply granular permissions to control access to profiles. This feature ensures that only a specific set of people will be able to perform a specific set of tasks on your profiles.

See [publish-deploy-and-test-the-workflow.md](/docs/building-your-first-workflow/publish-deploy-and-test-the-workflow) for more information.

## 10. Publish Workflows

**Role: Integration Specialist**

- Publishing your workflows is an important step in ensuring that only thoroughly tested and reliable workflows are deployed into production environments.
- Publishing typically follows a phase of testing, which guarantees that your workflows are not only functional but also meet the organizational standards for integration and automation.
- A published workflow is ready for deployment. This makes the transition from development to production smoother, reducing time-to-market and potential errors in live environments.
- When workflows are published, they can be shared with other team members or organizational units, promoting reuse, consistent practices, and collaborative development.
- The act of publishing often supports promoting workflows to higher environments (such as from development to production), ensuring that environment-specific configurations are properly applied.

See [publishing-workflows.md](/docs/working-with-workflows/creating-and-managing-workflows/publishing-workflows) for more information.

## 11. Deploy to Environment

**Role: Platform Administrator**

- Publish your tested and finalized workflows (and sometimes applications) to a designated, production-like setting where they can interact with real data and processes.
- In practice, after creating and thoroughly testing your workflows using the Koodisi no-code/low-code builder, you promote these workflows to higher environments that are configured specifically for production use.
- This step is crucial because it ensures that all changes are properly validated and work as intended in an environment that closely resembles the actual operating conditions.
- It also helps in managing the transition from development to production by applying environment-specific configurations, thereby reducing risks and guaranteeing smoother operational performance.

See [publish-deploy-and-test-the-workflow.md](/docs/building-your-first-workflow/publish-deploy-and-test-the-workflow) for more information.

## 12. Test and Monitor

**Roles: Integration Specialist (Test); Platform Administrator (Monitoring)**

- In Koodisi, testing an application after deployment means running your workflows—either manually through a test interface or via external tools—to ensure that each part of your application functions as expected.
- This process involves verifying that business logic is correctly implemented, activities are properly linked, and any error-handling is effective before the application is rolled out for operational use.
- Monitoring an application refers to continuously overseeing the application's performance post-deployment using built-in tools such as the Metrics Dashboard, trace searches, and system logs.
- Monitoring tracks execution metrics (like error counts, latency, and request counts), helps identify issues in real time, and enables performance optimization.
- These practices are important because they ensure that the application not only works correctly at launch but also maintains its performance, reliability, and security as it scales.

See [the-metrics-dashboard.md](/docs/the-metrics-dashboard) for more information.

## 13. Promote to Production

**Role: Platform Administrator (with approval from Business User)**

- In Koodisi, promote to production refers to the process of transitioning finalized workflows or APIs from a development or testing environment into the production environment.
- This involves applying environment-specific configurations so that the deployed workflow or API operates reliably under production conditions.
