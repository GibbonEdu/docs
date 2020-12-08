---
title: "Customizing Gibbon"
categories: ["support", "customization"]
tags: []
weight: 40
contributors: ["rossdotparker"]
---

Gibbon is designed on the idea that every school is different, and hopes to provide tools to meet a wide range of needs. The approach to customizing Gibbon to your school needs depends on the scope of change you're looking to make.

### 1) String Replacement

Gibbon has an internal String replacement system under ___Admin___ > ___System Admin___ > ___String Replacement___, which helps with a lot of the minor cosmetic changes and differences in terminology between one school and another.

### 2) User Custom Fields

The built-in [User Custom Fields]({{< relref "custom-fields.md" >}}) feature under ___Admin___ > ___User Admin___ > ___Manage User Custom Fields___ allows a fair amount of flexibility to add data a school needs.

### 3) Module System

Beyond the built-in tools, Gibbon's Module system allows you to extend the system quite considerably. A module can be anything from a few pages to a whole new set of tools and table data (the Free Learning module is a great example of a single module that can transform how Gibbon is used). There are also a few hooks that can be used by modules to insert content in specific places such as the dashboard: for more info view our [Module Development page](https://docs.gibbonedu.org/developers/getting-started/module-development/). Check out available modules on [our Extend page](https://gibbonedu.org/extend).

To install a Gibbon module:

1. Download and unzip the module file.
2. Copy the first-level sub-folder with the same name as the module (e.g. "Free Learning") into /modules in your Gibbon installation.
3. Browse to Admin > System Admin > Manage Modules in your Gibbon interface.
4. Scroll to the bottom of the page: the module will be listed in a table, highlighted in orange.
5. Click the plus icon in the table row for the new module.
6. The new module will appear in Gibbon's main menu.

### 4) Fork Gibbon Source Code

With Gibbon being open-source and [available through Github](https://github.com/GibbonEdu/core) it's also possible to make modifications to a forked copy and merge new versions back into it. With each new version (generally twice a year) one would merge the new version back into their Github fork and manually handle any conflicts between the two. This direction likely requires the most programming knowledge, but is certainly one option to maintain a set of changes from one version to another. As with anything open-source, if it's a change that the developer feels could benefit other schools they can try contributing it back to the core as a pull request.

### 5) Feature Request System

If there is an area that many schools may be needing to customize and there is a lot of interest in it, such features can be put forward in [the Feature Request category of our forum](https://ask.gibbonedu.org/categories/feature-requests). If you try something and find it's working well for your school be sure to share your findings [on our forum](https://ask.gibbonedu.org).
