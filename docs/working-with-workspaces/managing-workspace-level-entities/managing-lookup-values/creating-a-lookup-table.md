---
title: "Creating a Lookup Table"
sidebar_position: 1
---

Click the **Lookup Tables** menu item to access the Lookup Tables panel.

Koodisi enables you to create lookup tables in two ways, from a blank table and by uploading a CSV file.

## Creating a Lookup Table Using a Blank Table

To create a lookup table using a blank table:

1. Click the + icon on the Lookup Tables panel. From the context menu that appears, choose **Create from Blank Table**.\
   The Create Lookup Table modal appears.
2. Enter the **Name**, and optionally, the **Description** of the new lookup table. Click **Next**.\
   The Define Table Entries modal appears. This modal displays an empty table with columns for attributes. Each row in this table represents a column in your lookup table.\
   \
   Here's a brief description of the columns and how you can use them:
   1. **Name**: Enter the name of the attribute. This is the attribute for which you are creating the lookup table.
   2. **Type**: Select the type of the attribute; for example, String.
   3. **Key**: Select this check box to indicate that no two values of this attribute can be the same, that each value must be unique. Thus, triggers can be configured based on these values, and further processing can be set up as required.
   4. **Masked**: Select this check box if the attribute contains sensitive data that must be masked from users. Doing so is important to maintain privacy and security standards.
   5. **Description**: Enter a description of the attribute. While this isn't a mandatory attribute, it's good practice to add description of lookup values to ensure that they're easy to understand and modify when required.
3. Enter at least the **Name** and **Type** of the first attribute.
4. You must have at least two rows in a lookup table. Click **Add a row**. Configure it as required.
5. Repeat these steps for each row until you've captured all your variables together. Your lookup table is now ready. Click **Next** to specify where you want to store this lookup table.\
   The Storage modal appears.
6. Click the **Storage** field and select the vault that you want to use to store the lookup table.
7. If you have created separate values for your **Development** and **Production** environments, select the relevant vaults.
8. Click **Create**. \
   Your lookup table is now saved, and the new lookup table appears on the Lookup Tables page.

## Creating a Lookup Table Using a CSV File

To create a lookup table using a CSV file:

1. Click the + icon on the Lookup Tables panel. From the context menu that appears, choose **Create from CSV**.\
   The Create from CSV modal appears.
2. Enter a **Name** for the lookup table and, optionally, provide a description.
3. Click and drag the CSV file that you want to use to create the lookup table, or click the area below the Name field to browse for the file. For guidance on structuring the CSV file, see [#creating-the-lookup-table-csv-file](creating-a-lookup-table.md#creating-the-lookup-table-csv-file "mention").
4. Click **Next**. \
   The data you imported is saved, and the Create from CSV modal now shows the data you imported.
5. Review and update the lookup table details. For details on the fields available, see [#creating-a-lookup-table-using-a-blank-table](creating-a-lookup-table.md#creating-a-lookup-table-using-a-blank-table "mention").
6. Click **Next** once you're satisfied with your updates.
7. You must now select the vault into which you want to save the lookup table. Click the **Storage** field and select the vault that you want to use to store the lookup table.
8. If you have created separate values for your **Development** and **Production** environments, select the relevant vaults.
9. Click **Create**. \
   Your lookup table is now saved, and the new lookup table appears on the Lookup Tables page.

### Creating the Lookup Table CSV File

To create a lookup table in a CSV file, enter all the properties of an attribute in one column, and populate the table with details associated with each attribute similarly. Do not add column headers.

Here's an example of what your CSV file should look like:

| Employee Type                                                                      | Work Type                                                | Pay Rate                                                          | Currency                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| String                                                                             | String                                                   | Decimal                                                           | String                                                                    |
| Yes                                                                                | Yes                                                      | No                                                                | No                                                                        |
| The employment type of the employee (e.g., "Full-Time", "Part-Time", "Consultant") | The type of work performed (e.g., "Regular", "Overtime") | The hourly pay rate for the specified employee type and work type | The currency in which the pay rate is defined (e.g., "USD", "EUR", "INR") |

Here's a sample CSV file that you can download, update as appropriate, and import into Koodisi:

Download sample CSV file: [Pay Rates.csv](../../../../assets/images/Pay Rates.csv)

## Adding Values to Lookup Tables

Once your lookup table is created, you can now add values to it whenever you're ready. Click **Add new row** to start adding lookup values. For details on the fields available, see [#creating-a-lookup-table-using-a-blank-table](creating-a-lookup-table.md#creating-a-lookup-table-using-a-blank-table "mention").

## Adding Columns to a Lookup Table

You can add new columns to your lookup table when required. To do so:

1. Open the lookup table that you want to update.
2. Click the **Add** icon in the upper-right corner of the lookup table to add a new lookup attribute.\
   The Add Column modal appears.
3. Enter the required values as appropriate and click **Save**. For details on the fields available, see [#creating-a-lookup-table-using-a-blank-table](creating-a-lookup-table.md#creating-a-lookup-table-using-a-blank-table "mention").

## Creating a Lookup Table: Example

Say your company needs to manage different pay rates for its employees based on their employment type (full-time, part-time, consultant) and the type of work (regular hours or overtime). You create a lookup table called Pay Rates, with the following details:

| Name          | Type    | Key                                                                                | Masked                                           | Description                                                                       |
| ------------- | ------- | ---------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Employee Type | String  | Yes (So you can configure actions based on values associated with this attribute.) | No                                               | The employment type of the employee (Full-Time, Part-Time, Consultant).           |
| Work Type     | String  | Yes                                                                                | No                                               | The type of work performed (Regular, Overtime).                                   |
| Pay Rate      | Decimal | No                                                                                 | Yes (Masked because pay rates are confidential.) | The hourly pay rate for the specified employee type and work type.                |
| Currency      | String  | No                                                                                 | No                                               | The currency in which the pay rate is defined (such as USD, EUR, INR, and so on). |

You can now use this lookup table to provide separate pay rates for employees of different types working full-time or part-time as required.

## Renaming a Lookup Table

To rename a lookup table:

1. Click on the lookup table in the Lookup Tables panel.\
   Details of that lookup table appear.
2. Hover over the Name of the Lookup Table in the main section of the page and select the **Edit** icon that appears.
3. Update the name and press \<Enter>.

:::info
Renaming automatically updates the lookup’s name wherever it is referenced.
:::
