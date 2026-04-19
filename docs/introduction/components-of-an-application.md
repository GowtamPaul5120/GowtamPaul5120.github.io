---
title: "Components of an Application"
sidebar_position: 2
---


Here's a graphic that illustrates the key components that make Koodisi work.

<div data-full-width="true"><img src={require('../../assets/images/Koodisi components.png').default} /></div>

## Organization

An organization represents the business entity within which you've deployed Koodisi and is the highest-level component in the application.&#x20;

Depending on the scale of your enterprise and your need to segregate processes and portfolios across departments or regions, you may want to deploy separate instances of Koodisi across your enterprise.&#x20;

:::info
Only an administrator can manage organizations.
:::

## **Workspace**

The Workspace is the main environment within which applications are built, managed, and organized. Each workspace provides access to all the essential components that you need to develop, test, and deploy your applications and workflows.

Depending on the nature of your requirements, you can flexibly integrate your workflows across workspaces while managing the workflows within a workspace modularly.

For more information on workspaces, see [working-with-workspaces](/docs/working-with-workspaces).

:::info
Only an administrator can manage workspaces.
:::

## **Applications**

Applications are individual solutions created within a workspace. They consist of various elements, such as workflows, resources, and schemas, that help you easily automate processes and integrate systems.

Continue reading to learn more about each of these components.

For more information on applications see [working-with-applications](/docs/working-with-applications).

## Workflows

Workflows define the sequence of operations or processes within an application, outlining data flow and actions. These workflows consist of interconnected activities, linked by transition lines. Each activity contains mappings that define its specific function.

For more information on workflows, see [working-with-workflows](/docs/working-with-workflows).

## **Activities**&#x20;

Activities are the core tasks or functions in a workflow, such as sending a request, processing data, or triggering an event.

## Mappings

Mappings are configurations within activities that identify the data that is transferred from one step to another. They link output values from the previous activity to the input fields of the next one in the workflow.&#x20;

- **Transition Lines**\
  Transition lines visually connect activities, showing the logical flow and sequence of operations in the workflow.
- **Groups**\
  Groups help organize and manage related activities and components within workflows for better clarity and structure.

**Resources**

Resources are reusable configurations or services (e.g., API connections, authentication settings) that support workflow execution.

**Schemas**

Schemas define the structure and format of data used within workflows, ensuring consistency in data handling.

**Variable Groups**

Variable groups are collections of related variables used to store and manage data across workflows.

- **Variables**\
  Variables hold dynamic data that can be used and updated throughout the workflow, enabling flexible and dynamic operations.
