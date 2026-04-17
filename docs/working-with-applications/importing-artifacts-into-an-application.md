---
title: "Importing Artifacts into an Application"
---


Koodisi enables you to import applications--or any of their components--into another application. Once you import an application or any of its components, you can modify it to suit your specific business requirements.

## Importing an Application

To import an application into another:

1. Right-click on the application and select **Import**.\
   The Import Files modal appears.
2. Click and drag ZIP files from your system on to the modal to import them, or click the modal to browse and select the file.\
   The Import Files modal refreshes to display the contents of the application you imported.&#x20;
3. Click **New Application** to import the application as an independent application in your workspace, or leave the **Existing Application** option selected to import the application into the application listed in the Select Application field. \
   \
   By default, the application listed in this field is the one on which you performed the right-click. To change the import destination application, click the **Select Application** field and select the new destination application.&#x20;

:::info
When you choose to import the application as a new independent application, the system checks for existing applications with the same name. If a conflict is found, you'll be prompted to rename the file.
:::

3.  In the area below the Select Application field, you can review the contents of the ZIP file you imported. Deselect artifacts that you don't want to import.&#x20;

    \
    If the artifacts you deselected is referenced by other assets, you can choose to discard the references or retain them.&#x20;

4.  Click **Import**. The artifacts you selected are imported, and the system lets you know if there are any existing artifacts with the same name.&#x20;
    1. Click **Copy All** to create new renamed artifacts.
    2. Click **Replace All** to overwrite the existing artifacts.

    The import process runs, and the Review Import modal appears.

5.  Review the imports made and click **Close**.

## Importing Application Artifacts

To import application artifacts, such as an exported workflow, into an application:

1. Right-click on the application into which you want to import the workflow and select **Import**.\
   The Import Files modal appears.
2. Click and drag on to the modal a ZIP file that contains the workflow you want to import, or click the modal to browse and select the file.\
   The Import Files modal refreshes to display the workflow you imported in the file hierarchy of the target application. If the workflow has associated files, such as schemas, they also are imported and displayed in the appropriate subfolder.
3. Click **New Application** to import the workflow inside a new, independent application in your workspace, or leave the **Existing Application** option selected to import into the application listed in the Select Application field. \
   \
   By default, the application listed in this field is the one on which you performed the right-click. To change the import destination application, click the **Select Application** field and select the new destination application.&#x20;
4. In the area below the Select Application field, you can review the contents of the ZIP file you imported. Deselect artifacts that you don't want to import.&#x20;

   \
   If the artifacts you deselected is referenced by other assets, you can choose to discard the references or retain them.&#x20;

5. Click **Import**. The artifacts you selected are imported, and the system lets you know if there are any existing artifacts with the same name.&#x20;
   1. Click **Copy All** to create new renamed artifacts.
   2. Click **Replace All** to overwrite the existing artifacts.

   The import process runs, and the Review Import modal appears.

6. Review the imports made and click **Close**.

:::info

1. You can similarly import resources.
2. You can't import schemas individually.
   :::
