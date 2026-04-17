---
title: "Managing Schema Versions"
---


A schema version tracks changes to the underlying structure of your workflows' data or the global schemas you use. It's vital because it ensures that as you evolve your applications, your data remains compatible, migrations are smooth, and the integrity of your hard work is always preserved.

This section offers guidance on how you can perform the following tasks:

- [Create a schema version](managing-schema-versions.md#creating-a-schema-version)
- [Viewing schema versions](managing-schema-versions.md#viewing-schema-versions)
- [Deleting schema versions](managing-schema-versions.md#deleting-schema-versions)
- [Exporting schema versions](managing-schema-versions.md#exporting-schema-versions)
- [Working with the Schema Publication History Side Panel](managing-schema-versions.md#working-with-the-schema-publication-history)

## Creating a Schema Version

You can create schema versions only in the Schema Registry.

To create a schema version:

1. Click the **Schema Registry** main menu icon.
2. Click the schema for which you want to create a version.\
   The details associated with the schema appear.
3. Click **Edit** to make the changes you need.\
   The schema is now rendered editable.
4. Make the updates required.
5. Once you are done with your changes, click **Save Draft**.\
   Your updates are now saved as a draft, and you can re-edit them if required until you’re ready to publish them.
6. When you’re ready to publish your changes as a new version, click **Publish**.\
   The Publish \<Name of Schema> modal appears.
7. Optionally, enter **Comments** associated with the updates you made.
8. If you want the new version to replace the existing one, select the **Overwrite last version** check box.
9. Click **Publish**.

Your updates are now published as a new version, and you can see your published version when you navigate to the application where you have used the schema.

:::info

- You can duplicate a previous version for reuse or modification.
- The application alerts you if you're not using the latest version of the schema.
  :::

## Viewing Schema Versions

You can’t view schema versions in the Schema Registry, because the Schema Registry displays only the latest version for you to review or edit. You can see schema versions and select the version you want to use only when you’re inserting a schema into a workflow.

To view schema versions and choose from the ones available:

1. Navigate to the **Schemas** folder in your application and click the schema whose versions you want to view.\
   By default, the application displays the schema version that you used the last time.
2. To view and change the schema version, click the **Version** drop-down list and select the version you want to use.\
   \
   Details associated with the schema version you selected appear, and that version is automatically assigned to the schema. You can similarly revert to a previous version if required.

## Deleting Schema Versions

You can’t delete a schema version, but you can replace it with a new one. To do so:

1. Go to the Schema Registry and click the schema whose version you want to delete/replace.
2. Click **Edit** and update the schema as required.
3. Once you are satisfied with your changes, click **Save Draft**.
4. Click **Publish**.\
   The Publish \<Name of Schema> modal appears.
5. Optionally, enter **Comments** describing the replacement.
6. Select the **Override last version** checkbox.
7. Click **Publish** to replace the latest version.

:::info

- You can only delete/replace the latest version.
- Before you delete an existing version, ensure that it is not being used in any application.
  :::

## Exporting Schema Versions

You can always download the schema version by clicking on the **Export** button on the toolbar.

If you want to export/download a particular version:

1. Open the schema from the application hierarchy and select the schema version from the drop-down menu.\
   The active version of the schema changes to the version you selected.
2. Click the **Export** button to download a copy of the selected schema version.

## Working with the Schema Publication History

The Publication History side panel enables you to view the various versions of a schema. You can also perform specific tasks on each.

To view the publication history of a schema, click the **Publication History** (![](../../assets/images/Publication_History.png)) icon in the toolbar.

The Publication History side panel enables you to perform the following tasks:

- [Preview the contents of a schema version](managing-schema-versions.md#previewing-a-schema-version)
- [Copy the link to a schema version](managing-schema-versions.md#copying-the-link-to-a-schema-version)
- [Deprecate a schema version](managing-schema-versions.md#deprecating-a-schema-version)

### Previewing a Schema Version

To preview the contents of a schema version, click the ellipsis icon adjacent to it and, from the drop-down list that appears, select **Preview**. A read-only display of the contents of the schema version appears.

Click the Collapse (![](../../assets/images/Preview-Collapse.png)) icon in the top-right corner of the preview to close it.

### Copying the Link to a Schema Version

Copying the link to a schema version enables you to easily share or point to the version from any workflow in your workspace.

To copy the link to a scheme version, click the ellipse icon adjacent to the version and select **Copy Link**. The link is copied to your clipboard, and you can paste it directly into workflows or activities as required.

### Deprecating a Schema Version

Deprecating schema versions is crucial for maintaining a healthy and evolving application. It signals that specific, older data structures are no longer recommended for new development and will eventually be removed. This guides users towards current best practices, reduces technical debt by phasing out obsolete schemas, and streamlines future development by keeping the data model clean and efficient.

To deprecate a schema version, click the ellipsis icon adjacent to it and select **Deprecate**. Confirm your choice in the warning message that appears.

Once a schema version is deprecated, it continues to appear in the list of schema versions, but it can’t be clicked.

:::info
You can't deprecate the latest version of a schema.
:::
