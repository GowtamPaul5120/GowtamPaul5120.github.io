---
title: "Data Tables"
---


Data Tables are lightweight, persistent, schema‑defined storage components built into Koodisi. They allow you to manage structured data without the need for external databases.

The new **Tables** menu combines both Lookups and Data Tables under a unified interface with separate tabs.

---

### Benefits

- **Reusable data logic**: Centralize your ID mappings, sync checkpoints, and configuration records.
- **High performance**: Optimized for quick access with optional TTL (Time to Live) caching.
- **Declarative querying**: Visual tools to filter, sort, group, and aggregate data without code.
- **No external DB required**: Eliminates infrastructure burden for transient or reference data.
- **Seamless integration**: Fully compatible with workflow activities.
- **Scoped & secure**: Bound by environment and role‑based access controls.

---

### How It Works

#### Creating Tables

1. Go to the **Tables** tab in the main navigation.
2. Choose to either create a table from scratch or import data from a CSV.
3. Define the schema: column names, types, and TTL in minutes.
4. Save the table for immediate use across workflows.

#### Using Tables in Workflows

You can use purpose‑built activities to interact with your Data Tables:

- **DataTableQuery** – Retrieve data using filters, sorting, aggregation, and pagination.
- **DataTableInsert** – Insert new rows.
- **DataTableUpdate** – Update existing records based on matching conditions.
- **DataTableUpsert** – Insert or update data based on unique key(s).
- **DataTableDelete** – Remove specific rows using filter conditions.
- **DataTableTruncate** – Bulk delete entire tables or filtered subsets.

---

### DataTableQuery

#### Description

Retrieves data from tables using filters, sorting, aggregation, and pagination options.

#### Configuration

| Field           | Required | Description                                                       | Example                                    |
| --------------- | -------- | ----------------------------------------------------------------- | ------------------------------------------ |
| **Name**        | Required | The name of the activity. This name must be unique in a workflow. | `DataTableQuery`                           |
| **Description** | Optional | A clear description to guide execution and collaboration.         | Retrieves customer data filtered by status |
| **Data Table**  | Required | A predefined resource for accessing the data table.               | Select Data Table                          |

**Columns Tab**

| Field  | Required | Description                         | Example                       |
| ------ | -------- | ----------------------------------- | ----------------------------- |
| Column | Required | The name of the column in the table | `name`, `age`, `id`           |
| Type   | Auto     | Data type of the column             | `string`, `number`, `boolean` |
| Key    | Optional | Indicates if it's a key column      | Selected/Deselected           |

**Conditions Tab**

| Field            | Required | Description                               | Example                |
| ---------------- | -------- | ----------------------------------------- | ---------------------- |
| Condition Group  | Optional | Named groups of conditions (AND/OR logic) | `group_1`, `group_2`   |
| Column           | Required | The column to apply the condition to      | `name`, `age`, `email` |
| Type             | Auto     | Data type of the column                   | `string`, `integer`    |
| Operator         | Required | Comparison operator                       | `=`, `!=`              |
| Filter Condition | Required | The value and logical operation           | AND, Select Operation  |

**Sorting Tab**

| Field       | Required | Description           | Example               |
| ----------- | -------- | --------------------- | --------------------- |
| Column Name | Optional | The column to sort by | `name`, `id`          |
| Sort Type   | Required | Direction of sort     | Ascending, Descending |

**Aggregation Tab**

| Field      | Required | Description                    | Example         |
| ---------- | -------- | ------------------------------ | --------------- |
| Function   | Required | Aggregation function           | SUM, COUNT, AVG |
| Column     | Required | Column to aggregate            | `id`, `age`     |
| Alias name | Optional | Name for the aggregated result | `DemoFunction1` |

#### Input Schema

| Field                                              | Required | Data Type | Description                                                  | Example                         |
| -------------------------------------------------- | -------- | --------- | ------------------------------------------------------------ | ------------------------------- |
| Dynamically generated based on query configuration | Optional | Various   | Mapping fields for conditions, columns, and other parameters | `group_1.name`, `group_2.email` |

#### Output Schema

| Field           | Required | Data Type | Description                                      | Example |
| --------------- | -------- | --------- | ------------------------------------------------ | ------- |
| dtQueryOutput   | Required | Object    | Container for all query results                  | –       |
| records         | Required | Array     | The rows returned                                | –       |
| totalCount      | Required | Integer   | Total number of records matching the query       | 156     |
| hasMoreRecords  | Required | Boolean   | Indicates if more records exist beyond this page | true    |
| nextOffset      | Optional | Integer   | Offset for retrieving the next page              | 100     |
| executionTimeMs | Required | Integer   | Query execution time in milliseconds             | 350     |

---

### DataTableUpsert

#### Description

Inserts new records or updates existing ones based on unique key(s).

#### Configuration

| Field           | Required | Description                                       | Example                                                  |
| --------------- | -------- | ------------------------------------------------- | -------------------------------------------------------- |
| **Name**        | Required | Unique name of the activity within a workflow.    | `DataTableUpsert`                                        |
| **Description** | Optional | Clear description for guidance and collaboration. | Updates product inventory or adds new products if absent |
| **Data Table**  | Required | Predefined resource for accessing the data table. | `regressiontest`                                         |
| **TTL**         | Required | Time‑to‑live for the stored data (in seconds).    | 60                                                       |

**Columns Tab**

| Field  | Required | Description                        | Example             |
| ------ | -------- | ---------------------------------- | ------------------- |
| Column | Required | The name of the column             | `name`, `age`, `id` |
| Type   | Auto     | Data type                          | `string`, `number`  |
| Key    | Required | Column(s) used to identify records | Selected/Deselected |

#### Input Schema

| Field   | Required | Data Type | Description                                 | Example |
| ------- | -------- | --------- | ------------------------------------------- | ------- |
| records | Required | Array     | Array of records to be upserted             | –       |
| record  | Required | Object    | Individual record matching selected columns | –       |

#### Output Schema

| Field          | Required | Data Type | Description                            | Example |
| -------------- | -------- | --------- | -------------------------------------- | ------- |
| dtUpsertOutput | Required | Object    | Container for upsert operation results | –       |
| rowsAffected   | Required | Integer   | Number of rows inserted or updated     | 5       |

---

### DataTableInsert

#### Description

Inserts new rows into a data table.

#### Configuration

| Field           | Required | Description                                       | Example                      |
| --------------- | -------- | ------------------------------------------------- | ---------------------------- |
| **Name**        | Required | Unique name of the activity.                      | `DataTableInsert`            |
| **Description** | Optional | Clear description for guidance and collaboration. | Inserts new employee records |
| **Data Table**  | Required | Predefined resource for accessing the data table. | `regressiontest`             |
| **TTL**         | Required | Time‑to‑live for the stored data (in seconds).    | 60                           |

**Columns Tab**

| Field  | Required | Description                    | Example             |
| ------ | -------- | ------------------------------ | ------------------- |
| Column | Required | The name of the column         | `name`, `age`       |
| Type   | Auto     | Data type                      | `string`, `integer` |
| Key    | Optional | Indicates if it’s a key column | Selected/Deselected |

#### Input Schema

| Field   | Required | Data Type | Description                                 | Example |
| ------- | -------- | --------- | ------------------------------------------- | ------- |
| records | Required | Array     | Array of records to be inserted             | –       |
| record  | Required | Object    | Individual record matching selected columns | –       |

#### Output Schema

Empty by default; extendable with custom fields such as:

| Field        | Required | Data Type | Description                          | Example |
| ------------ | -------- | --------- | ------------------------------------ | ------- |
| rowsAffected | Optional | Integer   | Number of rows successfully inserted | 5       |
| success      | Optional | Boolean   | Indicates operation success          | true    |
| errors       | Optional | Array     | Details of any failed insertions     | –       |

---

### DataTableDelete

#### Description

Removes specific rows from a data table using filter conditions.

#### Configuration

| Field           | Required | Description                                       | Example                           |
| --------------- | -------- | ------------------------------------------------- | --------------------------------- |
| **Name**        | Required | Unique name of the activity.                      | `DataTableDelete`                 |
| **Description** | Optional | Clear description for guidance and collaboration. | Removes obsolete customer records |
| **Data Table**  | Required | Predefined resource for accessing the data table. | `regressiontest`                  |

**Conditions Tab**

| Field               | Required | Description                                        | Example               |
| ------------------- | -------- | -------------------------------------------------- | --------------------- |
| Condition Group     | Optional | Named groups of conditions (AND/OR logic)          | `group_1`, `group_2`  |
| Column              | Required | The column to apply the condition to               | `name`, `id`, `email` |
| Type                | Auto     | Data type                                          | `string`, `number`    |
| Operator            | Required | Comparison operator                                | `=`, `!=`             |
| Filter Condition    | Required | The value and logical operation                    | AND, Select Operation |
| Add Condition       | Optional | Button to add additional conditions within a group | –                     |
| Add Condition Group | Optional | Button to add new condition groups                 | –                     |

#### Input Schema

| Field                  | Required | Data Type | Description                             | Example        |
| ---------------------- | -------- | --------- | --------------------------------------- | -------------- |
| conditions             | Required | Object    | Container for all condition groups      | –              |
| group_1, group_2, etc. | Optional | Object    | Named condition groups matching columns | –              |
| name, name_1, etc.     | Optional | Various   | Values for specified column conditions  | `"John"`, `42` |

#### Output Schema

Empty by default; extendable with custom fields such as:

| Field        | Required | Data Type | Description                     | Example |
| ------------ | -------- | --------- | ------------------------------- | ------- |
| rowsAffected | Optional | Integer   | Number of rows deleted          | 5       |
| success      | Optional | Boolean   | Indicates operation success     | true    |
| errors       | Optional | Array     | Details of any failed deletions | –       |

---

### DataTableTruncate

#### Description

Bulk deletes all data from a table, effectively resetting it while maintaining the table structure.

#### Configuration

| Field           | Required | Description                                       | Example                         |
| --------------- | -------- | ------------------------------------------------- | ------------------------------- |
| **Name**        | Required | Unique name of the activity.                      | `DataTableTruncate`             |
| **Description** | Optional | Clear description for guidance and collaboration. | Clears all records from staging |
| **Data Table**  | Required | Predefined resource for accessing the data table. | `regressiontest`                |

#### Output Schema

Empty by default; extendable with custom fields such as:

| Field           | Required | Data Type | Description                              | Example |
| --------------- | -------- | --------- | ---------------------------------------- | ------- |
| success         | Optional | Boolean   | Indicates operation success              | true    |
| rowsAffected    | Optional | Integer   | Number of rows deleted                   | 1250    |
| executionTimeMs | Optional | Integer   | Time taken to execute the operation (ms) | 350     |

---

### Operator Mapping Table

| Display Label                    | Operator Value     | Applies To                    | Notes / Logic                               |
| -------------------------------- | ------------------ | ----------------------------- | ------------------------------------------- |
| Equal To (=)                     | `=`                | string, number, date, boolean | Most common comparison                      |
| Not Equal To (!=)                | `!=` or `&lt;&gt;` | string, number, date, boolean | Both `!=` and `<>` are valid in SQL         |
| Greater Than (&gt;)              | `&gt;`             | number, date                  | Not applicable for string or boolean        |
| Less Than (&lt;)                 | `&lt;`             | number, date                  |                                             |
| Greater Than or Equal To (&gt;=) | `&gt;=`            | number, date                  |                                             |
| Less Than or Equal To (&lt;=)    | `&lt;=`            | number, date                  |                                             |
| Between                          | `BETWEEN`          | number, date                  | Requires two inputs; not for string/boolean |
| In                               | `IN`               | string, number, date, boolean | Accepts multiple values (mapped to `= ANY`) |
| Not In                           | `NOT IN`           | string, number, date, boolean | Converted to `&lt;&gt; ALL`                 |
| Like                             | `LIKE`             | string                        | Pattern match                               |
| Not Like                         | `NOT LIKE`         | string                        |                                             |
| Is Null                          | `IS NULL`          | all types                     | Checks for no value                         |
| Is Not Null                      | `IS NOT NULL`      | all types                     | Checks for presence of value                |

---

### UI Logic Rules (For Display)

| Type    | Allowed Operators                                                                                                                           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| string  | Equal To, Not Equal To, In, Not In, Like, Not Like, Is Null, Is Not Null                                                                    |
| number  | Equal To, Not Equal To, Greater Than, Less Than, Greater Than or Equal To, Less Than or Equal To, Between, In, Not In, Is Null, Is Not Null |
| date    | Equal To, Not Equal To, Greater Than, Less Than, Greater Than or Equal To, Less Than or Equal To, Between, In, Not In, Is Null, Is Not Null |
| boolean | Equal To, Not Equal To, In, Not In, Is Null, Is Not Null                                                                                    |
