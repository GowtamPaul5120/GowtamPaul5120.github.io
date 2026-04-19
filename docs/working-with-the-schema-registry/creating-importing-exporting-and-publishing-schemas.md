---
title: "Creating, Importing, Exporting, and Publishing Schemas"
sidebar_position: 1
---


Koodisi organizes your schemas into schema collections to better organize, manage, and reuse data schemas across multiple applications or modules.

## Creating Schema Collections

To create a schema collection:

1. Click the **Create or Import Schema** icon (+) in the Schema Registry panel.\
   The Create Collection modal appears.
2. Enter a **Name** for your schema collection and, optionally, provide a **Description**.
3. You can optionally choose to either import an existing schema into the new collection or create a schema from scratch. See [Creating Schemas](/docs/working-with-applications/managing-schemas/creating-schemas) and [Editing Schemas](/docs/working-with-applications/managing-schemas/editing-schemas) for details.
4. Click **Create**.

## Creating or Importing Schemas

To create a schema in the Schema Registry:

1. Navigate to the collection in which you want to create the schema and click **Upload a Schema**. \
   The Import Schema modal appears.
2. **Select a collection** using the drop-down list provided.&#x20;
3. Use the **Add to folder** drop-down list to select a child folder, if you created them earlier.
4. Specify how you want to upload the schema:
   1. **Upload a schema from your system.**
      1. Click **Upload** to browse for the schema you want to import from your system.
      2. Select the schema file that you want to import and click **Open**. The file is now imported.
      3. Click **Import**.
   2. **Paste schema content into a new schema.**
      1. Click **Paste in Editor** to copy the contents of your schema and paste it directly into a file in Koodisi. The NewSchema page appears.
      2. Koodisi enables you to either paste the contents of your schema directly into the code view or use the Editor view to build your schema using the controls provided. See [#editing-schema-details-using-the-editor](../working-with-applications/managing-schemas/editing-schemas.md#editing-schema-details-using-the-editor "mention") for more information.
      3. Once your schema is ready, click **Save** to return to the Import Schema modal.
5. Click **Import**.

## Exporting Schemas

To export a schema from an application or the Schema Registry, open it and click the **Export** icon.

## Publishing a Schema

Until you publish a schema, it remains available only to you. Once you're happy with its contents and structure, publish it as the initial version.&#x20;

To publish a schema:

1. Open the schema in the Schema Editor.
2. Click **Publish**.\
   The Publish \<Name of the Schema> modal appears.
3. Add **Comments** describing the schema.
4. Select the **Overwrite last version** check if required.
5. Click **Publish**.

## **Updating Schema Versions in Applications**

When you update a schema that's published in the Schema Registry, it's typically a good idea to update the version of that schema wherever it's being used. To update the schema version used in an application:

1. Navigate to the application in the Applications panel and click on the schema.\
   The schema's details appear.
2. Click the version number displayed in the Schema Editor and select the updated version.\
   Your selection is saved, and details associated with the updated schema appear.

:::info
Reverting to an old schema version in an application isn't supported.
:::
