---
title: "Creating and Updating Variables and Variable Groups"
sidebar_position: 1
---


## Creating Variable Groups

To create a variable group:

1. Navigate to the application for which you want to create variables.
2. Click the **Variables** icon.\
   The Variables side panel appears.
3. Click the + icon and select **Create Group** from the options that appear. The application saves variables in groups, enabling you to store related variables together. \
   A new row appears in your list of variable groups.
4. &#x20; Enter a clear and descriptive name for your variable group and press **\<Enter>**. (Examples: `UserDetails`, `OrderManagement`).\
   Your group is now created.

## Adding a Variable to a Variable Group

To add a variable to an existing group:

1. Navigate to the application for which you want to create variables.
2. Click the **Variables** icon.\
   The Variables side panel appears.
3. Click the variable group into which you want to create a variable, or select the variable group to which you want to add a variable.
4. Click the **Add Variable** link.\
   A row gets added to your existing list of variables.
5. Click the **Scope** icon to view and update the scope of the variable. By default, variables are available at the application level, but you can customize specific variables to be available to a specific deployment or client.
   1. **Scope: Application**: The variable will be available to all users  with access to the application, who can reference these variables in workflows in the application.
   2. **Scope: Deployment**: The variable will be available during deployment and continue to pass appropriate values whenever related workflows are triggered post-deployment.
   3. **Scope: Client**: The variable will be available to authorized client team members, who can manage the variable securely, while users can continue to reference the variable without needing to understand the details it retrieves.
6. Click the **Data Type** icon and select the data type to which your variable belongs. By default, this is set to _String_.
7. Click the **Attribute** field and enter a clear and descriptive name of the variable. (Examples: `userAge`, `orderTotal`.)
8. Click the **Value** field and specify the value that you want to associate with the variable attribute. This value can be text (String), a decimal number (Number), a whole number (Integer), true/false (Boolean), or a sensitive piece of information (Secret).
9. When you create more than one variable, use the drag handle that appears at the left of the row representing each variable to move them up or down the list as required.
10. Your changes are saved automatically even as you configure your variable.

**See Also:** [best-practices-for-managing-variables.md](/docs/working-with-applications/managing-variables/best-practices-for-managing-variables)
