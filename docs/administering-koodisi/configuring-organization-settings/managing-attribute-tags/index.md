---
title: "Managing Attribute Tags"
---


You can create up to 10 custom attribute tags and use them in your workflows to trigger specific conditions as needed.

For example, say you want to trigger a specific set of customer rewards based on their Loyalty Tier value: Bronze, Silver, or Gold. You can then create a custom attribute called `LoyaltyTier` and trigger separate reward workflows depending on the loyalty tier value associated with each customer.

Attribute tags are directly used in workflow rules. This is why you can't directly delete an attribute tag; you can only deprecate them. Deprecation also gives you adequate time to use a tag over a specific period, after which it becomes unavailable automatically. If you have any workflows that use deprecated tags, you can update them as appropriate over a period of 90 days. If you do not remove deprecated tags within this period, the workflows that use them will stop working.
