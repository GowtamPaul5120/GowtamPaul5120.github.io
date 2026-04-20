---
title: "V 1.1.31"
sidebar_position: 38
description: Release 16 June 2025
---


## New and Improved Features

### **AI History**

Resume previous AI-assisted conversations to continue configuration or troubleshooting without starting over. Ideal for long or complex tasks.

### **REST Service and Client Enhancements**

Timeout can now be configured in milliseconds (default: 15000 ms), giving users precise control over integration responsiveness.

### **Hashing Functions**

New functions introduced to support hashing workflows:

* **GenerateHash**: Generates a hash from input data.
* **VerifyHash**: Validates input against an expected hash.\
  Designed to handle repetitive and structured data consistently.

## **Bug Fixes**

**Mapper Improvements**\
Activity updates inside the Mapper now trigger validation reliably, ensuring correctness during schema or config changes.

**Git Enhancements**\
Changes no longer get incorrectly registered on activities when switching to a newly selected workflow, preventing unwanted diffs.
