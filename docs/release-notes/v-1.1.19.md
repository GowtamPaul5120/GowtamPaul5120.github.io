---
title: "V 1.1.19"
sidebar_position: 50
description: 2 April 2025
---

## **New Features & Improvements**

- **Form Builder** now supports **AutoComplete** for input fields.
- **Git Applications**:
  - Schema API calls have been optimized for better performance.
  - Issues related to **stage** and **URL validation** have been addressed.
- **Lookups**:
  - Lookup tables are now **automatically referenced on import**.
  - Validation now handles **trailing spaces** in lookup names.
- **Workspace**:
  - The **creation flow** has been improved for better usability.
- **Redux State Management**: Ensures proper **reset of attributes** on workspace refresh.
- **Enum Support**:
  - Added **enum validation**.
  - Nodes with a **`_` prefix** are now supported.
- **Context API**: Application now integrates with **Context API** for global state management.

## **Bug Fixes**

- Handled deserialization of `null` properties correctly.
- Fixed issue where the **right panel hides and navigates to parent folder** on delete.
- Users are now navigated to an **empty page** when a collection is selected with no data.

## **UI/UX Updates**

- Applied updates to **text and content** from the UI documentation.
