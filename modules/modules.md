---
title: Managing Modules
order: 5
draft: false
---
# Managing Modules

## Core Modules

Gibbon includes a number of built-in modules, which make up the core of Gibbon. These modules are enabled by default, but can be disabled through the <u>System Admin > Manage Modules</u> page. You can also customise the main menu of Gibbon by editing the categories for each module. 

::: tip
Core modules do not need updated individually, and are always kept up-to-date when upgrading Gibbon to the latest version.
:::
## Additional Modules

Beyond the built-in tools, Gibbon's Module system allows you to extend the system quite considerably. A module can be anything from a few pages to a whole new set of tools and table data (the Free Learning module is a great example of a single module that can transform how Gibbon is used).

Check out available modules on [our Extend page](https://gibbonedu.org/extend).

**To install a Gibbon module**:

1. Download and unzip the module file.
2. Copy the first-level sub-folder with the same name as the module (e.g. "Free Learning") into /modules in your Gibbon installation.
3. Browse to <u>System Admin > Manage Modules</u> in your Gibbon interface.
4. Scroll to the bottom of the page: the module will be listed in a table, highlighted in orange.
5. Click the plus icon in the table row for the new module.
6. The new module will appear in Gibbon's main menu.

::: tip
Additional modules need updated manually when new versions are available. New module versions may be released more or less frequently, and do not necessarily match the release cycle of the Core. Check the [Extend](https://gibbonedu.org/extend) page when downloading a new version to ensure it is compatible with your version of Gibbon.
:::

**To update a module**:

1. Download and unzip the module file.
2. Copy the first-level sub-folder with the same name as the module (e.g. "Free Learning") over the old version of the module in /modules in your Gibbon installation.
3. Browse to <u>System Admin > Manage Modules</u> in your Gibbon interface.
4. Scroll down to find the relevant module in the list of installed module: it will be highlighted in green.
5. Click the package icon in the table row for the upgraded module and follow on screen instructions.

## Custom Modules

Schools can also develop their own custom modules to meet their needs. While this is an excellent benefit of Gibbon being open source, it will require some investment on the school's part, often through finding, training or hiring a software developer. Creating a new module required someone who can write and test code through a [development environment](/development/getting-started/developer-workflow).

For more info view our [Module Development page](/development/getting-started/module-development).
