---
title: "Editing Schemas"
sidebar_position: 3
---


To edit a schema:

1. Navigate to the Schemas folder of the application that contains the schema you want to edit.
2. Click the schema to open it in read-only mode.\
   The Schema Editor appears.
3. Click **Edit** in the top-right corner of the Schema Editor.

## Renaming a Schema

To rename a schema, right-click it and select **Rename**. Update the name as appropriate and press **\<Enter>**.

You can also open the schema in the Schema Editor, click **Edit**, and then click the **Edit** icon adjacent to the name of the schema.

Another way to update the name of a schema is to open the schema in Edit view, go into the code view, and update the value in the `title` attribute.

## Editing Schema Details Using the Editor

After you open a schema in Edit mode, you can update its details either using the Code view or the Editor view. If you're familiar with schemas and are used to working with them directly, use the Code view. If you're relatively new to schemas, we recommend using the Editor. This section offers guidance on how you can edit a schema using the Editor.

:::info
Published schemas can only be modified in the Schema Registry.
:::

### The Schema Editor Toolbar

The Schema Editor toolbar appears above the Schema Editor and offers the following controls:

| Field           | Description                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Undo            | Reverts the last change made to the schema. Useful for correcting mistakes.                                                                                                                                               |
| Redo            | Re-applies an action that was previously undone.                                                                                                                                                                          |
| Definitions     | Opens the Schema Definitions modal where you can view and edit shared components or reusable definitions. See [creating-and-managing-definitions.md](/docs/working-with-applications/managing-schemas/creating-and-managing-definitions)for more information. |
| Discard         | Discards all unsaved changes made to the current schema.                                                                                                                                                                  |
| Export          | Downloads the current schema in JSON format.                                                                                                                                                                              |
| Code View       | Switches the editor to display raw schema code in JSON.                                                                                                                                                                   |
| UI View         | Toggles the visual UI editor, offering a form-based way to edit the schema.                                                                                                                                               |
| Save            | Saves the current schema. This typically updates the stored or working version.                                                                                                                                           |
| Generate Schema | Automatically generates a schema based on defined prompts.                                                                                                                                                                |
| Close           | Closes the schema.                                                                                                                                                                                                        |

### The Schema Editor

Each row in the Editor refers to a schema element.&#x20;

- At the top of the schema, you can see the root element.
- If the element is a node, the Editor displays controls that enable you to expand or collapse the node.&#x20;
- Similarly, if the element is an array, you can see the Array icon adjacent to it, and an items placeholder appears under the array node, which you can update with values as required. You can also define the data type of items in the array using the data type icons listed in the **Select Type** field-set.

Select the **Required** check box adjacent to an element to indicate that it's mandatory.

Click **Add** to enter a new attribute. \
The Add Attribute modal appears. Use this modal to provide details associated with the attribute you want to add.

You can update properties associated with other attributes in the schema as well, without having to leave the Add Attribute modal. You can either **Search for nodes** or use the **Back** and **Next** buttons to display properties associated with specific attributes.

#### Schema Attribute Controls

Here's a table that provides guidance on each of the fields available to you in the Add Attribute modal:

| Field                                                 | Required? | Available for Attributes of Type | Data Type | Description                                                                             | Example                                    |
| ----------------------------------------------------- | --------- | -------------------------------- | --------- | --------------------------------------------------------------------------------------- | ------------------------------------------ |
| Name                                                  | Required  | All Attribute Types              | String    | The name of the property.                                                               | product_id                                 |
| Default                                               | Optional  | String, Boolean, Number, Integer | String    | The default value of the property.                                                      | PROD-0001                                  |
| Description                                           | Optional  | All Attribute Types              | String    | Description of the attribute.                                                           | The unique identifier of a product record. |
| Example                                               | Optional  | String, Boolean, Number, Integer | String    | Example of the property.                                                                | PROD-1234                                  |
| Select Type                                           | Mandatory | All Attribute Types              | String    | <p>The data type of the attribute.</p><p>Default = String</p>                           | String                                     |
| Schema Validation Options (`allOf`, `anyOf`, `oneOf`) | Optional  | NA                               | NA        | Enables you to apply complex validation rules to the contents of a single data element. |

**Options available:** `allOf`, `anyOf`, `oneOf`.

See [Schema Validation Options](editing-schemas.md#schema-validation-options) for more information. | `allOf` |
| **Advanced** | | | | | |
| Format | Required | String | String | The format of the string associated with the attribute. | Object |
| Regex | Optional | String | String | The regular expression that the string value must match. This field enables you to enforce specific patterns and formats for the property. | <p>^PROD-\d{4}$ for a product code that must start with PROD-, followed by four digits.</p><p>Example: PROD-0023</p> |
| Min Length | Optional | String | Integer | The minimum character length of the string. | 9 (See the previous example.) |
| Max Length | Optional | String | Integer | The maximum character length of the string. | 9 (See the previous example.) |
| Min Value | Optional | Number, Integer | Integer | The minimum value that can be entered for this property. | 10 |
| Max Value | Optional | Number, Integer | Integer | The maximum value that can be entered for this property. | 100 |
| Min Items | Optional | Array | Integer | The minimum number of items that the array must contain. | 1 |
| Max Items | Optional | Array | Integer | The maximum number of items that the array must contain. | 10 |
| Content Encoding | Optional | String | String | The encoding scheme that you want to use to represent binary data as a string. Use this option when you need to store or transmit binary information (like JSON or CSV files) within a text-based attribute in your schema, ensuring data integrity and compatibility with text-based systems. | base32 |
| Content Media Type | Mandatory if content encoding is enabled. | String | String | The original type of the binary data encoded into the string format. | JSON |
| Required | Optional | All Attribute Types | Boolean | Indicates that the attribute is required for an object created using the schema. | True |
| Nullable | Optional | All Attribute Types | Boolean | <p>Indicates that this value can be null.</p><p> </p><p><strong>Note</strong>: <em>This property is unavailable when the Required check box is selected.</em></p> | False |
| Masked | Optional | All Attribute Types | Boolean | <p>Indicates whether the value of the attribute should be obscured or hidden when displayed or logged, typically for privacy or security reasons.</p><p> </p><p><strong>Note</strong>: <em>The schema itself doesn't usually define how the masking is performed. It simply flags the attribute as "Masked." The application or system that consumes the schema is then responsible for implementing the actual masking logic when rendering or displaying the data.</em></p> | True |

### Schema Validation Options

In a schema element's property settings, `allOf`, `anyOf`, and `oneOf` are keywords used for combining schemas, typically in JSON Schema. They allow you to define complex data structures by applying multiple validation rules to a single piece of data.

- **`allOf` (AND)**:
  - **Meaning:** The data must be valid against _all_ of the subschemas listed in `allOf`.
  - **Analogy:** Think of it as a logical "AND". If you have `allOf: [schemaA, schemaB]`, then the data must satisfy the rules of `schemaA` **AND** the rules of `schemaB`.
  - **Use Case:** Often used for extending a base schema or combining different sets of requirements. For example, if you have a `Person` schema and you want to define an `Employee` as a `Person` _and_ someone with an `employeeId` and `department`, you'd use `allOf`.
  - **Example:**&#x4A;SON

    ```
    {
      "allOf": [
        { "type": "string", "minLength": 5 },
        { "pattern": "^[A-Za-z]+$" }
      ]
    }
    ```

    This means the string must be at least 5 characters long _and_ contain only letters.

- **`anyOf` (OR)**:
  - **Meaning:** The data must be valid against _at least one_ of the subschemas listed in `anyOf`.
  - **Analogy:** Think of it as a logical "OR". If you have `anyOf: [schemaA, schemaB]`, then the data must satisfy the rules of `schemaA` **OR** the rules of `schemaB` (or both).
  - **Use Case:** Useful when a property can have different valid forms or types. For instance, a field might accept either a string or a number.
  - **Example:**&#x4A;SON

    ```
    {
      "anyOf": [
        { "type": "string" },
        { "type": "integer" }
      ]
    }
    ```

    This means the value can be either a string _or_ an integer.

- **`oneOf` (XOR - Exclusive OR)**:
  - **Meaning:** The data must be valid against _exactly one_ of the subschemas listed in `oneOf`.
  - **Analogy:** Think of it as a logical "Exclusive OR". If you have `oneOf: [schemaA, schemaB]`, then the data must satisfy the rules of `schemaA` **OR** the rules of `schemaB`, **but not both**.
  - **Use Case:** Ideal for representing mutually exclusive options. For example, a payment method might be "credit card" _or_ "bank transfer", but not both simultaneously.
  - **Example:**&#x4A;SON

    ```
    {
      "oneOf": [
        {
          "type": "object",
          "properties": { "card_number": { "type": "string" } },
          "required": ["card_number"]
        },
        {
          "type": "object",
          "properties": { "bank_account": { "type": "string" } },
          "required": ["bank_account"]
        }
      ]
    }
    ```

    This means the object must have either a `card_number` _or_ a `bank_account`, but not both.
