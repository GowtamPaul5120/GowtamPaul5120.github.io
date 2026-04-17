---
title: "Ternary Operator"
---


## Using the Ternary Operator

The ternary operator is a conditional operator that provides a shorthand for `if-else` statements. It is the only operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is truthy followed by a colon (`:`), and finally the expression to execute if the condition is falsy.

### Syntax

```javascript

condition ? exprIfTrue : exprIfFalse;

```

#### Parameters

* **`condition`**: An expression whose value is used as a condition.
* **`exprIfTrue`**: An expression which is evaluated if the `condition` evaluates to a truthy value (one which equals or can be converted to `true`).
* **`exprIfFalse`**: An expression which is evaluated if the `condition` is falsy (that is, has a value which can be converted to `false`).

### Examples

#### Basic Usage

Here's a simple example of using a ternary operator to decide which string to assign to a variable.

```javascript

$.RESTService.body.age >= 21 ? "Eligible to Vote" : "Not Eligible to Vote";

```

#### Chaining / Nested Ternary Operators

You can chain ternary operators for multiple conditions.

```javascript

$.RESTService.body.score > 90 ? "A" : ($.RESTService.body.score > 80 ? "B" : ($.RESTService.body.score > 70 ? "C" : "D"));

```

### Best Practices

* **Don't over-nest**: Deeply nested ternary operators can be very difficult to understand. Limit chaining to one or two levels at most.
