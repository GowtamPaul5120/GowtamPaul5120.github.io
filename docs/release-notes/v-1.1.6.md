---
title: "V 1.1.6"
sidebar_position: 63
description: 21 January 2025
---


**General Updates**

* Standardized spelling across the application by changing  "organisation" to "organization".

**Bug Fixes**

* Fixed errors with navigation, including the disabled state in the left toolbar.
* Corrected usability issues with lookup table names and improved form state checks for default values.
* Fixed issues with error handling, including proper modal display after publishing and deploying the workflow.

**Enhancements**

* Updated the scheduler to use UTC format for UI and validation.
* Added guard conditions to improve workflow trace reliability.
* Improved user permission handling by redirecting unauthorized users from restricted areas.
* Enhanced the validation for activity installation and fixed group ignore issues.
* Included a feature to manage subflows with "Wait for Completion" settings.
* Added loading states, such as spinners for application metadata in the context menu, to provide better feedback during operations.

**Canvas Improvements**

* Upgraded the UI on the flowboard to enhance navigation, usability, and overall user experience.

**Updates to Lazy Expressions Evaluation**

Upgrades

* **Lazy Expression Evaluation**: Enhanced the evaluation of relational and logical operations to be performed lazily. For example, in previous versions, the expression `value1 && value2` evaluated both `value1` and `value2` regardless of `value1`'s value. Now, `value2` is only evaluated if `value1` is `true`. This optimization improves performance and aligns with expected short-circuit behavior.\
  Similar improvements were made to other comparison operators.
* **Nested `IF` Statement Support**: Added support for nested `IF` statements, allowing more complex conditional logic in generated code.
* **Enhanced Codegen for `oneOf`/`anyOf` Nodes**: Implemented support for generating code that handles `oneOf` and `anyOf` nodes, enabling more flexible schema processing.

Fixes

* Resolved an issue with object variable creation inside `switch-case` statements. Variables defined within a `case` block now correctly adhere to scoping rules, ensuring reliable execution.
