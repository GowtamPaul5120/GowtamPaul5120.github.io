# Adding Attribute Tags to Activities

### **To add an attribute:**

1. Open an activity and navigate to the **Mapping** tab.
2. In the **Target** panel, right-click the desired node (for example, `departmentId` or `employeeNumber`).
3. From the menu, select **Add Attribute**.\
   The selected field is now marked as an attribute.
4. Attributes added to conditional nodes (`IF`, `ELSE IF`, `ELSE`) automatically propagate across all conditions.\
   You don’t need to add them manually to each branch.
5. Save and publish your workflow.

***

### **To view workflow attributes:**

1. Open the workflow’s **Configuration** view.
2. Select the **Attribute Tabs** section.\
   The list displays all workflow-level attributes with the following details:
   * **Activity Name** — The activity where the attribute is defined
   * **Attribute** — The attribute name
   * **Path** — The schema path of the attribute
   * **Action** — Remove the attribute if required

***

### **To analyze attribute data in Metrics:**

1. Navigate to the **Metrics** tab.
2. Open the **Query Builder**.
3. Enter the attribute name (for example, `employeeNumber` or `legalEntityId`) to search for related workflow runs and performance metrics.\
   It may take up to 60 seconds for new deployments to appear in the results.
