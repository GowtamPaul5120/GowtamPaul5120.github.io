---
title: "V 1.1.41"
sidebar_position: 28
description: 31 July 2025
---


## Bug Fixes

1. **Workflow Deletion and Profiles**\
   Profiles are no longer deleted when associated workflows are removed, ensuring profile integrity across applications.
2. **Reliable Workflow Transitions**\
   Fixed an issue where transitions mistakenly routed to error even after success. Transitions now respect success context accurately.
3. **Topic and Queue Messaging**\
   Resolved a bug in outstanding message count logic—messages are now reliably sent and processed.
