---
title: "Impersonate User"
categories: ["support"]
tags: []
order: 50
contributors: ["skuipers"]
---

# Impersonate User

This tool gives you the ability to login as another user and see everything they can see in Gibbon. 

## Enabling Access

Impersonating another user is a powerful level of access, so additional security measures have been put in place to restrict access:

- The Impersonate User permission must be enabled for the Administrator role in <u>User Admin > Manage Preferences</u>
- The user must have full **Administrator** access as their primary role
- Access must be enabled for that specific username in the config.php file, see below:

To enable Impersonate User for a particular administrator, edit your config.php file (in the root folder of Gibbon) and add their username to the `$allowImpersonateUser` array. In the following example, only three users would have access to this tool: example1, example2, and example3.

```php
/**
 * Enables the System Admin > Impersonate User action, for testing and development.
 * This option is off by default. Access can be granted by adding allowed 
 * usernames to the list below. Users must also have administrator access.
 */
$allowImpersonateUser = ['example1', 'example2', 'example3'];
```

## Impersonating a User

When you impersonate a user, it logs you out of your current session an logs you in to the selected user. You will be able to see and act as that user in the system. This is useful for testing and troubleshooting, especially when checking what permissions a user has or assisting them with a particular action. 

:::tip
When you are done, be sure to log out of that user to log back into your own account.
:::
