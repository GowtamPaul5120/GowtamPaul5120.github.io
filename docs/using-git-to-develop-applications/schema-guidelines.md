---
title: Schema Guidelines
---


### Overview

We have updated the way application schemas are handled to ensure backward compatibility while enabling branch-specific schema tracking. These changes bring Git-based versioning closer to application schemas, but with some nuances that teams should be aware of.

### Backward Compatibility

Existing schemas that were referenced will continue to function as they are. When edits are made to a schema, the content is now added back into the schema file. This ensures that the schema can be tracked in Git. These changes are scoped per branch: edits made in one branch will only affect that branch's schema until merged into other branches.

Note: Newly created schemas will follow this updated approach automatically. However, older schemas will not be converted automatically, so some inconsistencies may exist.

### What to Expect

Older schemas will continue to work as references across branches, showing the same content. If a schema is edited in one branch, the content will be written back to Git and tracked from that point forward. Other branches will continue using the reference until a merge occurs. To minimize inconsistencies, schema edits should be merged back to 'develop' or other parent branches as soon as possible.

### Working Across Multiple Branches

When multiple team members are working on the same application or feature across multiple branches, there may be cases where one branch continues using schema references while another has moved to direct content. To resolve this, all team members should merge branches regularly and follow the established practices outlined in earlier documentation.

### Incremental Schema Migration

Migrating older schemas to the new format requires manual edits. Once edited, schema content is added back into the file and tracked in Git for that branch. The migration will only apply to the branch where edits are made until merged into parent or sibling branches.

### Recommended migration strategy:

\- Create a new branch from 'develop' or another up-to-date branch.\
\- Apply schema edits in that branch.\
\- Merge this branch into all other relevant branches, ensuring only schema changes are accepted during the merge.

This process ensures long-term consistency across schemas and branches.
