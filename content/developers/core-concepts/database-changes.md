---
title: "Database Changes"
categories: ["core"]
tags: []
weight: 30
contributors: ["skuipers"]
---

Gibbon tracks database migrations through the [CHANGEDB.php](https://github.com/GibbonEdu/core/blob/master/CHANGEDB.php) file. 

The SQL lines in the CHANGEDB.php file are run automatically by the Update process in  	__System Admin > Update__. For standard installs, these changes are run once per version. For cutting edge installs, the updater tracks which lines have been already run, and only runs new lines. Internally this is saved in the `gibbonSetting` table under `cuttingEdgeCodeLine`;

Database migrations are one-way only. Always be sure to backup your database before running updates.

### Making Database Changes

Each version's changes are held in a separate string in file, denoted by the version number. Each SQL statement is a separate line in the string, and must end with `;end`

If you're submitting database changes in a PR, please be sure to add them to the bottom of CHANGEDB, inside the string for the current development version. 

Database changes to fix something in a previous line need to be submitted as a new SQL statement at the bottom of the CHANGEDB. Once a change is committed to the core, it may have already been run by other developers, so we aim to avoid making edits to any previous lines.
