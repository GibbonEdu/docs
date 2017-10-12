---
title: "Custom Code Loaders"
categories: ["support", "customization"]
tags: []
weight: 10
contributors: ["rossdotparker"]
---

As of Gibbon v10.0.00, there are two custom code loaders that will take a script of your own writing and load it into a specific spot on the system. The contents loaded are cached into a session variable, and so are not refreshed until the following login (or until you force them). To use these code loaders, create files as shown below:

*   **index_custom.php** - this content will be loaded into the top of the main panel on the logged in home page.
*   **index_customSidebar.php** - this content will be loaded into the top of the sidebar on the logged in home page.

The aim of these custom code loaders is to allow flexibility to alter the way a system works, in such a way that is not destroyed on a system upgrade.
