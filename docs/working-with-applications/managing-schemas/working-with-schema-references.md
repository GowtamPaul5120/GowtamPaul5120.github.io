---
title: Working with Schema References
---


In Koodisi, schemas help define the structure and format of data that flows within workflows. Schema references are pointers to these schema definitions, ensuring that data handled across different activities and components follows the same consistent structure and format. This helps maintain data integrity and validation throughout your workflows.

You can create schema references to locally managed schema definitions or to published schemas within or outside the Koodisi Schema Registry.

## What's a local reference?

A local reference in a schema uses the `$ref` keyword with a URI fragment identifier (e.g., #) to refer to a part of the same document. This allows you to reuse schema components without duplicating definitions.

For example, the schema below captures details associated with a person and uses an Address definition (`"$ref": "#/definitions/Address"`) to include address details in the schema:

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "title": "PersonWithAddress",
  "type": "object",
  "properties": {
    "Employee": {
      "type": "object",
      "properties": {
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Address": {
          "$ref": "#/definitions/Address"
        }
      },
      "required": ["FirstName", "LastName", "Address"]
    }
  },
  "definitions": {
    "Address": {
      "type": "object",
      "properties": {
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        }
      },
      "required": ["City", "State"]
    }
  }
}
```

## Creating Local Schema References

For details on how you can create a local schema reference, see [creating-and-managing-definitions.md](/docs/working-with-applications/managing-schemas/creating-and-managing-definitions). \
Once your definitions are in place, you can use schema references to include them into your schemas.

## Creating External Schema References

An external schema reference is any reference that isn't part of the schema. Therefore, even if you want to create a reference to a published schema from the Koodisi Schema Repository, you'll need to create an external reference.

1. **Publish the schema.**
   1. Go to the **Schema Registry**.
   2. Publish the schema that you want to reuse if it isn't already published.
   3. Copy the public URL (HTTP-accessible).
2. **Create external references.**
   1. Display the Property modal associated with the schema property that you want to associate with the schema to be reused.
   2. Paste the URL you copied into the **Reference** field.\
      \
      Example: `https://schemas.koodisi.com/v1/address-schema.json`&#x20;
   3. Click **Apply**.

:::info
Do not append "$ref" to the UI. Pasting the URL is enough.
:::
