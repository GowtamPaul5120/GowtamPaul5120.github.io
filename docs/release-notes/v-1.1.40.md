---
title: "V 1.1.39"
sidebar_position: 29
description: 21st July 2025
---


#### New and Improved Features

**Conditional Mapping Enhancement — Treat GV as Dependency**\
Global variables are now correctly treated as dependencies during conditional mapping evaluation on export and publish, ensuring accurate config resolution.

**Workspace Ownership Transfer**\
Admins can now transfer ownership of workspaces directly via UI and API, streamlining transitions and access control.

**Support for Documentation in Import & Templates**\
Import and template flows now retain associated documentation, improving knowledge transfer and template reusability.

**Activity Library & Artifacts Revamp**\
Improved layout and usability of the activity library and associated artifacts, enhancing discoverability and developer experience.

**Git Enhancements**\
Improved Git integration experience with better UX, reliability, and version traceability.

**API: Workspace Ownership Transfer Support**\
Extended API support for transferring ownership of workspaces, complementing the UI-based feature.

**API Cleanup: Delete Profiles on App Deletion**\
User profiles tied to deleted apps are now cleaned up automatically, preventing data residue.

***

#### Bug Fixes

**Audit Logs Checkbox Rendering Fix**\
Resolved visual inconsistencies in audit log checkbox UI.

**Cluster Activity Mapper Save Issue Fixed**\
Fixed a bug where saving mappers for cluster-type activities failed under certain conditions.

**UI Fix: Table Height and Team Search Input**\
Resolved layout issues with table rendering and improved responsiveness of the team member search field.

**Member Role Clearing & Permission Fix**\
Corrected issues where clearing roles led to incorrect permission resets or missing access.

