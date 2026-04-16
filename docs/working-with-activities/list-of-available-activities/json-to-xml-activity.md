# JSON to XML Activity

### Overview <a href="#overview" id="overview"></a>

The JSON to XML activity converts JSON documents to XML. Define your XML structure within `jsonContent`, and optionally configure namespaces, XML declaration, and output formatting options.

***

### Activity Configuration <a href="#activity-configuration" id="activity-configuration"></a>

| Option                | Type    | Default | Description                                 |
| --------------------- | ------- | ------- | ------------------------------------------- |
| `prettyPrint`         | boolean | `false` | Format output with indentation and newlines |
| `skipEmptyElements`   | boolean | `false` | Exclude elements with empty string values   |
| `skipEmptyAttributes` | boolean | `false` | Exclude attributes with empty string values |
| `skipNullElements`    | boolean | `true`  | Exclude elements with null values           |
| `skipNullAttributes`  | boolean | `true`  | Exclude attributes with null values         |

#### Empty and Null Handling <a href="#empty-and-null-handling" id="empty-and-null-handling"></a>

**Input:**

```
{
  "jsonContent": {
    "Order": {
      "_attributes": {
        "id": "ORD-001",
        "priority": "",
        "region": null
      },
      "Name": "Test Order",
      "Description": "",
      "Notes": null
    }
  }
}
```

**Output with defaults (`skipEmpty*=false`, `skipNull*=true`):**

```
<Order id="ORD-001" priority="">
  <Name>Test Order</Name>
  <Description></Description>
</Order>
```

**Output with `skipEmptyElements=true`, `skipEmptyAttributes=true`:**

```
<Order id="ORD-001">
  <Name>Test Order</Name>
</Order>
```

***

### Schema Structure <a href="#schema-structure" id="schema-structure"></a>

```
{
  "$schema": "https://platform.ivoyant.io/schemas/json-to-xml/v1.0.0",
  "_declaration": {
    "version": "1.0",
    "encoding": "UTF-8",
    "standalone": "yes"
  },
  "_namespaces": {
    "default": "http://example.com/orders",
    "cust": "http://example.com/customer"
  },
  "jsonContent": {
    "Order": {
      ...
    }
  }
}
```

| Field          | Required | Description                                               |
| -------------- | -------- | --------------------------------------------------------- |
| `$schema`      | No       | Schema reference for validation                           |
| `_declaration` | No       | XML declaration. If omitted, no `<?xml?>` header is added |
| `_namespaces`  | No       | Namespace declarations. If omitted, produces simple XML   |
| `jsonContent`  | Yes      | Your XML content definition                               |

***

### Basic Elements <a href="#basic-elements" id="basic-elements"></a>

JSON keys become XML element names. Simple values become text content.

**JSON:**

```
{
  "jsonContent": {
    "Order": {
      "OrderDate": "2024-01-15",
      "Status": "confirmed",
      "Total": 299.99
    }
  }
}
```

**XML:**

```
<Order>
  <OrderDate>2024-01-15</OrderDate>
  <Status>confirmed</Status>
  <Total>299.99</Total>
</Order>
```

***

### Adding Attributes <a href="#adding-attributes" id="adding-attributes"></a>

Use `_attributes` to add XML attributes to an element.

**JSON:**

```
{
  "jsonContent": {
    "Order": {
      "_attributes": {
        "id": "ORD-2024-001",
        "status": "confirmed"
      },
      "OrderDate": "2024-01-15",
      "Customer": {
        "_attributes": { "id": "CUST-123" },
        "Name": "Acme Corp"
      }
    }
  }
}
```

**XML:**

```
<Order id="ORD-2024-001" status="confirmed">
  <OrderDate>2024-01-15</OrderDate>
  <Customer id="CUST-123">
    <Name>Acme Corp</Name>
  </Customer>
</Order>
```

***

### Adding Namespaces <a href="#adding-namespaces" id="adding-namespaces"></a>

1. Declare namespaces in `_namespaces` (use `default` for the default namespace)
2. Use `_ns` on elements to apply a namespace prefix
3. Child elements inherit the parent's namespace prefix

**JSON:**

```
{
  "_namespaces": {
    "default": "http://example.com/orders",
    "cust": "http://example.com/customer"
  },
  "jsonContent": {
    "Order": {
      "_attributes": { "id": "ORD-001" },
      "Customer": {
        "_ns": "cust",
        "_attributes": { "id": "CUST-123" },
        "Name": "Acme Corp",
        "Email": "orders@acme.com"
      }
    }
  }
}
```

**XML:**

```
<Order xmlns="http://example.com/orders" xmlns:cust="http://example.com/customer" id="ORD-001">
  <cust:Customer id="CUST-123">
    <cust:Name>Acme Corp</cust:Name>
    <cust:Email>orders@acme.com</cust:Email>
  </cust:Customer>
</Order>
```

> **Note:** Using an undeclared namespace prefix will result in an error.

***

### Repeating Elements (Arrays) <a href="#repeating-elements-arrays" id="repeating-elements-arrays"></a>

Use JSON arrays for repeating XML elements.

**JSON:**

```
{
  "jsonContent": {
    "Order": {
      "Items": {
        "Item": [
          {
            "_attributes": { "sku": "WIDGET-001" },
            "Description": "Premium Widget",
            "Quantity": 5
          },
          {
            "_attributes": { "sku": "GADGET-002" },
            "Description": "Super Gadget",
            "Quantity": 2
          }
        ]
      }
    }
  }
}
```

**XML:**

```
<Order>
  <Items>
    <Item sku="WIDGET-001">
      <Description>Premium Widget</Description>
      <Quantity>5</Quantity>
    </Item>
    <Item sku="GADGET-002">
      <Description>Super Gadget</Description>
      <Quantity>2</Quantity>
    </Item>
  </Items>
</Order>
```

***

### Special Content <a href="#special-content" id="special-content"></a>

| Field      | Purpose            | Use Case                                        |
| ---------- | ------------------ | ----------------------------------------------- |
| `_text`    | Plain text content | Mixed content or explicit text                  |
| `_cdata`   | CDATA section      | Content with special characters (`<`, `>`, `&`) |
| `_comment` | XML comment        | Documentation within XML                        |

**JSON:**

```
{
  "jsonContent": {
    "Order": {
      "_comment": "Order notes section",
      "Message": {
        "_text": "Thank you for your order"
      },
      "Script": {
        "_cdata": "if (x < 10 && y > 5) { return true; }"
      }
    }
  }
}
```

**XML:**

```
<Order>
  <!-- Order notes section -->
  <Message>Thank you for your order</Message>
  <Script><![CDATA[if (x < 10 && y > 5) { return true; }]]></Script>
</Order>
```

***

### Quick Reference <a href="#quick-reference" id="quick-reference"></a>

| JSON                           | XML Result                             |
| ------------------------------ | -------------------------------------- |
| `"Name": "John"`               | `<Name>John</Name>`                    |
| `"_attributes": { "id": "1" }` | `id="1"` on element                    |
| `"_ns": "cust"`                | `cust:` prefix on element and children |
| `"Item": [{...}, {...}]`       | Multiple `<Item>` elements             |
| `"_text": "Hello"`             | Text content                           |
| `"_cdata": "<raw>"`            | `<![CDATA[<raw>]]>`                    |
| `"_comment": "Note"`           | `<!-- Note -->`                        |

***

### Complete Example <a href="#complete-example" id="complete-example"></a>

```
{
  "$schema": "https://platform.ivoyant.io/schemas/json-to-xml/v1.0.0",
  "_declaration": {
    "version": "1.0",
    "encoding": "UTF-8"
  },
  "_namespaces": {
    "default": "http://api.example.com/orders/v1",
    "cust": "http://api.example.com/customer/v1"
  },
  "jsonContent": {
    "Order": {
      "_attributes": {
        "id": "ORD-2024-00123",
        "status": "confirmed"
      },
      "OrderDate": "2024-01-15",
      "_comment": "Customer information",
      "Customer": {
        "_ns": "cust",
        "_attributes": { "id": "CUST-456" },
        "Name": "Acme Corporation",
        "Email": "orders@acme.com"
      },
      "Items": {
        "Item": [
          {
            "_attributes": { "sku": "WIDGET-001" },
            "Description": "Premium Widget",
            "Quantity": 10,
            "Price": 29.99
          }
        ]
      },
      "Notes": {
        "_cdata": "Rush order: Contact <ops@acme.com> for questions"
      }
    }
  }
}
```

**XML Output:**

```
<?xml version="1.0" encoding="UTF-8"?>
<Order xmlns="http://api.example.com/orders/v1" 
       xmlns:cust="http://api.example.com/customer/v1" 
       id="ORD-2024-00123" 
       status="confirmed">
  <OrderDate>2024-01-15</OrderDate>
  <!-- Customer information -->
  <cust:Customer id="CUST-456">
    <cust:Name>Acme Corporation</cust:Name>
    <cust:Email>orders@acme.com</cust:Email>
  </cust:Customer>
  <Items>
    <Item sku="WIDGET-001">
      <Description>Premium Widget</Description>
      <Quantity>10</Quantity>
      <Price>29.99</Price>
    </Item>
  </Items>
  <Notes><![CDATA[Rush order: Contact <ops@acme.com> for questions]]></Notes>
</Order>
```
