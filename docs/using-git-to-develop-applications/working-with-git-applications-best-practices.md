# Working with Git Applications: Best Practices

1. **Use Empty Repository for New Applications**
   * Create new Git-enabled applications only in empty repositories.
2. **Protected Branches**
   * Use feature branches for protected main/master branches, merging via pull requests.
3. **Multi-Module Repository Management**
   * Clearly specify the application when cloning.
   * To add applications, either clone again under a different name or create a new multi-module application specifying the same repository.
4. **Branching and Merging**
   * Regularly pull remote changes.
   * Commit local changes before pulling.
5. **Credential Management**
   * Prefer existing credentials.
   * Ensure appropriate permissions for new credentials.
6. **Schema Management**
   * Do not delete schemas from git applications, as this can break references in Git-enabled or cloned applications.
   * Always use registry or deprecate schemas instead of removing them to maintain integrity across applications.
7. **Regular Backups**
   * Push local changes regularly to remote.
   * Remember, LocalDataStore is browser-specific; remote backups prevent data loss.
8. **Naming Conventions**
   * Use clear and descriptive application and branch names for easy organization.
