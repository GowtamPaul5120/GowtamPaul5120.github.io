# Using Variables in Activities

Use variables to specify reusable data in the following situations:

* When defining connection resources
* When adding header details for activities
* When adding headers to REST activities

## Using Variables When Configuring Connection Resources

To use variables when you configure a connection resource, such as an Azure Blob Storage account:&#x20;

1. &#x20;Create a resource or click on an existing resource to view its details.
2. Open the Variables side panel.
3. Click on the handle adjacent to the variable that you want to use and drag it onto a field that holds data that can be reused. Example: Account Name.
4. Click **Save**.

## Using Variables When Adding Header Details for Activities

Using variables in headers offers enhanced flexibility and dynamic behavior in applications and integrations.

To use variables in a header associated with an activity:

1. Add the activity to your workflow and click on it to view its configuration details.
2. Click the **Input** tab. If the Input tab of the activity configuration has a **gv** node, it means it supports variables.&#x20;
3. Expand the **gv** node to view your variable groups. Expand the variable group that contains the variable you want to use.
4. Expand the target node that contains the attribute to which you want to map your variable.
5. To connect a variable to a target attribute, click and drag the desired variable directly onto the target field.\
   \
   You can also use additional functions if required. For example, use the **concat** function to associate more than one variable to the same target attribute.

## Using Variables When Adding Headers to REST Activities

Adding variables to REST tasks enables dynamic requests. You can customize API endpoints, headers, bodies, and parameters based on workflow data. This allows for more flexible integrations, where the REST task adapts to different scenarios and data inputs within the same workflow definition, making it more powerful and reusable.

To add a variable to the header of a REST activity:

1. Add the REST activity to your workflow and click the **Configuration > Headers** tab.
2. Open the Variables side panel.
3. To include a custom header in your REST request, click **Add a row** to define a new header field.
4. To set a default value for a field, click and drag the desired variable directly into the **Default Value** field.
5. Add other details as required and click **Save**.
