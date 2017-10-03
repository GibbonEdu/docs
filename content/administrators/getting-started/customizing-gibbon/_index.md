---
title: "Customizing Gibbon"
date: 2017-08-20T14:10:32+08:00
categories: ["support", "customization"]
tags: []
weight: 40

authorname: "Ross Parker"
authorurl: "http://rossparker.org/"
---

Gibbon is designed on the idea that every school is different, and hopes to provide tools to meet a wide range of needs. The approach to customizing Gibbon to your school needs depends on the scope of change you're looking to make.

### 1) String Replacement

Gibbon has an internal String replacement system under ___Admin___ > ___System Admin___ > ___String Replacement___, which helps with a lot of the minor cosmetic changes and differences in terminology between one school and another.

### 2) User Custom Fields

The built-in [User Custom Fields]({{< relref "custom-fields.md" >}}) feature under ___Admin___ > ___User Admin___ > ___Manage User Custom Fields___ allows a fair amount of flexibility to add data a school needs.

### 3) Module System

Beyond the built-in tools, Gibbon's Module system allows you to extend the system quite considerably. A module can be anything from a few pages to a whole new set of tools and table data (the Free Learning module is a great example of a single module that can transform how Gibbon is used). There are also a few hooks that can be used by modules to insert content in specific places such as the dashboard: for more info view our [Module Development page](). Check out available modules on [our Extend page](https://gibbonedu.org/extend).

### 4) Fork Gibbon Source Code

With Gibbon being open-source and [available through Github](https://github.com/GibbonEdu/core) it's also possible to make modifications to a forked copy and merge new versions back into it. With each new version (generally twice a year) one would merge the new version back into their Github fork and manually handle any conflicts between the two. This direction likely requires the most programming knowledge, but is certainly one option to maintain a set of changes from one version to another. As with anything open-source, if it's a change that the developer feels could benefit other schools they can try contributing it back to the core as a pull request.

### 5) Feature Request System

If there is an area that many schools may be needing to customize and there is a lot of interest in it, such features can be put forward in [the Feature Request category of our forum](https://ask.gibbonedu.org/categories/feature-requests). If you try something and find it's working well for your school be sure to share your findings [on our forum](https://ask.gibbonedu.org).
