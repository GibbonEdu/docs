+++
title = "Notifications"
date = 2017-08-20T18:19:52+08:00
categories = ["support"]
tags = []
weight = 40
# Author Details
authorname = "Ross Parker"
authorurl = "http://rossparker.org/"
+++

As of v8.2.00, Gibbon has a new system for system-wide notifications. This replaces the old-fashioned (and very limited) approach of hard coding notifications into the sidebar. Any module, or indeed the core itself, can set a notification using the following system-wide function call:

    setNotification($connection2, $guid, $gibbonPersonID, $text, $moduleName, $actionLink);

*   **$gibbonPersonID** - the user to be targetted by the notification.
*   **$text** - the notification text to be shown to the user. If the same module sets multiple notifications with the same text to the same person, they will not be duplicated, but rather will have a counter incremented. This aims to prevent notification flooding.
*   **$moduleName** - the name of the module setting the notification, or NULL or empty string for the system itself.
*   **$actionLink** - when the user clicks on Action & Delete in the Notifications page, this is where they will be taken. e.g. `/index.php?q=/modules/Planner/planner_view_full.php&gibbonPlannerEntryID=$gibbonPlannerEntryID`
