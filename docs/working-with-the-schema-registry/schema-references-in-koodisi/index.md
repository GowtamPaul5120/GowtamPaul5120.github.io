---
title: "Schema References in Koodisi"
sidebar_position: 3
---

Schema references (or definitions) allow you to modularize and reuse JSON schema components within and across integrations in Koodisi.

For guidance on working with definitions, see [creating-and-managing-definitions.md](/docs/working-with-applications/managing-schemas/creating-and-managing-definitions) . For details on using definitions in schemas, see [working-with-schema-references.md](/docs/working-with-applications/managing-schemas/working-with-schema-references).

## Using References in the Mapper

While using references in the Mapper, you need to perform three tasks:

1. Set up the schema in the Mapper.
2. Map the schema references.
3. Deploy the mapped values.

### Setting up Schemas in the Mapper

To set up a schema in the Mapper:

1. Navigate to the **Output** tab of the REST activity.
2. Click the **Output** field and, from the drop-down list that appears, select the schema that you want to use.
3. Confirm that the schema loads correctly.

### Mapping Schema References

In the Mapper, select a schema with references.

You can see that referenced fields are automatically available.

**Example:**

```
input.address.city → target.address.city
```

### Deploying Mapped Values

To deploy mapped values:

1. Save the mapping.
2. Publish and deploy.
3. Test using the sandbox/test environment.

## Schema Reference Best Practices

#### Schema Draft Syntax

- **Draft 4–7**:

  ```
  #/definitions/<name>
  ```

- **Draft 2019–2020**:

  ```
  #/$defs/<name>
  ```

### Recommendations

- Modularize common schemas and reuse them across integrations.
- Avoid deeply nested or cyclic references.
- Use unique names across schemas to prevent mapping collisions.
- Always test schemas and mappings before production deployment.

## External Ref Considerations

| Area                 | Guidance                                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| Nested References    | Partially supported in visual Mapper (external → external not guaranteed) |
| Variable Conflicts   | Use unique naming to avoid conflicts during mapping                       |
| Network Availability | Ensure the URL is accessible at test and runtime                          |
| Versioning Strategy  | Publish shared schemas with version control for traceability              |
| Testing              | Validate schema resolution via REST Client and Mapper before deployment   |
