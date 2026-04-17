---
title: Data Tables
---


## Data Tables

### Description

Data Tables are lightweight, persistent, schema‑defined storage components built into Koodisi. They allow you to manage structured data such as ID maps, configuration, sync checkpoints, and reference lists—without the need for external databases.

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

| Field           | Required | Description                                                       | Example                           |
| --------------- | -------- | ----------------------------------------------------------------- | --------------------------------- |
| **Name**        | Yes      | The name of the activity. This name must be unique in a workflow. | `DataTableQuery`                  |
| **Description** | No       | A clear description to guide execution and collaboration.         | Retrieves customer data by status |
| **Data Table**  | Yes      | A predefined resource for accessing the data table.               | `CustomerConfig`                  |

**Columns Tab**

| Field  | Required | Description                         | Example             |
| ------ | -------- | ----------------------------------- | ------------------- |
| Column | Yes      | The name of the column in the table | `name`, `age`       |
| Type   | Auto     | Data type of the column             | `string`, `number`  |
| Key    | No       | Indicates if it's a key column      | Selected/Deselected |

**Conditions Tab**

| Field           | Required | Description                               | Example   |
| --------------- | -------- | ----------------------------------------- | --------- |
| Condition Group | No       | Named groups of conditions (AND/OR logic) | `group_1` |
| Column          | Yes      | The column to apply the condition to      | `status`  |
| Type            | Auto     | Data type of the column                   | `string`  |
| Operator        | Yes      | Comparison operator                       | `=`       |
| Filter Value    | Yes      | The value to compare against              | `active`  |

**Sorting Tab**

| Field       | Required | Description           | Example     |
| ----------- | -------- | --------------------- | ----------- |
| Column Name | No       | The column to sort by | `createdAt` |
| Sort Type   | Yes      | Direction of sort     | Ascending   |

**Aggregation Tab**

| Field      | Required | Description                    | Example      |
| ---------- | -------- | ------------------------------ | ------------ |
| Function   | Yes      | Aggregation function           | `COUNT`      |
| Column     | Yes      | Column to aggregate            | `id`         |
| Alias Name | No       | Name for the aggregated result | `totalCount` |

#### Input Schema

| Field      | Required | Data Type | Description                                      | Example             |
| ---------- | -------- | --------- | ------------------------------------------------ | ------------------- |
| parameters | No       | Object    | Mapping fields for columns/conditions/pagination | `{ \"limit\": 10 }` |

#### Output Schema

| Field           | Required | Data Type | Description                                      | Example |
| --------------- | -------- | --------- | ------------------------------------------------ | ------- |
| `dtQueryOutput` | Yes      | Object    | Container for all query results                  | –       |
| `records`       | Yes      | Array     | The rows returned                                | –       |
| `totalCount`    | Yes      | Integer   | Total number of records matching the query       | 156     |
| `hasMore`       | Yes      | Boolean   | Indicates if more records exist beyond this page | true    |
| `nextOffset`    | No       | Integer   | Offset for retrieving the next page              | 100     |
| `executionMs`   | Yes      | Integer   | Query execution time in milliseconds             | 350     |

---

### DataTableUpsert

#### Description

Inserts new records or updates existing ones based on unique key(s).

#### Configuration

| Field           | Required | Description                                       | Example                |
| --------------- | -------- | ------------------------------------------------- | ---------------------- |
| **Name**        | Yes      | Unique name of the activity within a workflow.    | `DataTableUpsert`      |
| **Description** | No       | Clear description for guidance and collaboration. | Sync product inventory |
| **Data Table**  | Yes      | Predefined resource for accessing the data table. | `Inventory`            |
| **TTL**         | Yes      | Time‑to‑live for the stored data (seconds).       | 3600                   |

**Columns Tab**

| Field  | Required | Description                        | Example             |
| ------ | -------- | ---------------------------------- | ------------------- |
| Column | Yes      | The name of the column             | `sku`, `quantity`   |
| Type   | Auto     | Data type                          | `string`, `integer` |
| Key    | Yes      | Column(s) used to identify records | Selected            |

#### Input Schema

| Field   | Required | Data Type | Description                     | Example                              |
| ------- | -------- | --------- | ------------------------------- | ------------------------------------ |
| records | Yes      | Array     | Array of records to be upserted | `[ { "sku": "A1", "quantity": 5 } ]` |

#### Output Schema

| Field          | Required | Data Type | Description                            | Example |
| -------------- | -------- | --------- | -------------------------------------- | ------- |
| `dtUpsertOut`  | Yes      | Object    | Container for upsert operation results | –       |
| `rowsAffected` | Yes      | Integer   | Number of rows inserted or updated     | 5       |

---

### DataTableInsert

#### Description

Inserts new rows into a data table.

#### Configuration

| Field           | Required | Description                                       | Example                |
| --------------- | -------- | ------------------------------------------------- | ---------------------- |
| **Name**        | Yes      | Unique name of the activity.                      | `DataTableInsert`      |
| **Description** | No       | Clear description for guidance                    | Batch import employees |
| **Data Table**  | Yes      | Predefined resource for accessing the data table. | `Employees`            |
| **TTL**         | Yes      | Time‑to‑live for the stored data (seconds).       | 1800                   |

**Columns Tab**

| Field  | Required | Description                    | Example              |
| ------ | -------- | ------------------------------ | -------------------- |
| Column | Yes      | The name of the column         | `firstName`, `email` |
| Type   | Auto     | Data type                      | `string`             |
| Key    | No       | Indicates if it’s a key column | Deselected           |

#### Input Schema

| Field   | Required | Data Type | Description                   | Example                       |
| ------- | -------- | --------- | ----------------------------- | ----------------------------- |
| records | Yes      | Array     | Array of records to inserting | `[ { "firstName": "Jane" } ]` |

#### Output Schema (extendable)

| Field          | Required | Data Type | Description                          | Example |
| -------------- | -------- | --------- | ------------------------------------ | ------- |
| `rowsAffected` | No       | Integer   | Number of rows successfully inserted | 10      |
| `success`      | No       | Boolean   | Indicates operation success          | true    |
| `errors`       | No       | Array     | Error details if insertions failed   | –       |

---

### DataTableDelete

#### Description

Removes specific rows from a data table using filter conditions.

#### Configuration

| Field           | Required | Description                                       | Example                   |
| --------------- | -------- | ------------------------------------------------- | ------------------------- |
| **Name**        | Yes      | Unique name of the activity.                      | `DataTableDelete`         |
| **Description** | No       | Clear description for guidance                    | Remove inactive customers |
| **Data Table**  | Yes      | Predefined resource for accessing the data table. | `Customers`               |

**Conditions Tab**

| Field           | Required | Description                                        | Example       |
| --------------- | -------- | -------------------------------------------------- | ------------- |
| ConditionGroup  | No       | Named group of conditions (AND/OR logic)           | `expiryCheck` |
| Column          | Yes      | The column to apply the condition                  | `status`      |
| Type            | Auto     | Data type                                          | `string`      |
| Operator        | Yes      | Comparison operator                                | `=`           |
| Filter Value    | Yes      | The value to compare                               | `inactive`    |
| AddCondition    | No       | Button to add additional conditions within a group | –             |
| AddConditionGrp | No       | Button to add new condition groups                 | –             |

#### Input Schema

| Field      | Required | Data Type | Description                        | Example |
| ---------- | -------- | --------- | ---------------------------------- | ------- |
| conditions | Yes      | Object    | Container for all condition groups | –       |

#### Output Schema (extendable)

| Field          | Required | Data Type | Description                         | Example |
| -------------- | -------- | --------- | ----------------------------------- | ------- |
| `rowsAffected` | No       | Integer   | Number of rows successfully deleted | 5       |
| `success`      | No       | Boolean   | Indicates operation success         | true    |
| `errors`       | No       | Array     | Error details if deletions failed   | –       |

---

### DataTableTruncate

#### Description

Bulk deletes all data from a table while maintaining its structure.

#### Configuration

| Field           | Required | Description                                       | Example             |
| --------------- | -------- | ------------------------------------------------- | ------------------- |
| **Name**        | Yes      | Unique name of the activity.                      | `DataTableTruncate` |
| **Description** | No       | Clear description for guidance                    | Reset staging data  |
| **Data Table**  | Yes      | Predefined resource for accessing the data table. | `StagingRecords`    |

#### Output Schema (extendable)

| Field             | Required | Data Type | Description                              | Example |
| ----------------- | -------- | --------- | ---------------------------------------- | ------- |
| `success`         | No       | Boolean   | Indicates operation success              | true    |
| `rowsAffected`    | No       | Integer   | Number of rows deleted                   | 1250    |
| `executionTimeMs` | No       | Integer   | Time taken to execute the operation (ms) | 350     |

---

### TTL and Temporary Storage

All Data Tables are **temporary storage** governed by the TTL you configure (in minutes). Once the TTL period expires:

- Records are automatically **deleted** and **will not** be returned by any query or activity.
- In the event of any infrastructure failure (e.g. disk outage, service restart), data within the TTL window **may** be **unrecoverable**. Integrations relying on that data must be designed to **recreate** or **re-fetch** it as needed.

### When to Use Lookups vs. Data Tables

- **Data Tables**: Ideal for **execution data**—transient data created and accessed during the runtime of an integration (e.g., sync checkpoints, temporary buffers, session states).
- **Lookup Tables**: Designed for **persisted reference data** or **secure storage**, such as credentials, mapping definitions, or metadata. Use **vault-backed** lookups only when you need encryption or strict access control; otherwise, non-vault lookup tables offer better performance.

### Operator Mapping Table

| Display Label                    | Operator Value | Applies To     |
| -------------------------------- | -------------- | -------------- |
| Equal To (=)                     | =              | all types      |
| Not Equal To (!=)                | !=, &lt;&gt;   | all types      |
| Greater Than (&gt;)              | &gt;           | number, date   |
| Less Than (&lt;)                 | &lt;           | number, date   |
| Greater Than or Equal To (&gt;=) | &gt;=          | number, date   |
| Less Than or Equal To (&lt;=)    | &lt;=          | number, date   |
| Between                          | BETWEEN        | number, date   |
| In                               | IN             | multiple types |
| Not In                           | NOT IN         | multiple types |
| Like                             | LIKE           | string         |
| Not Like                         | NOT LIKE       | string         |
| Is Null                          | IS NULL        | all types      |
| Is Not Null                      | IS NOT NULL    | all types      |
