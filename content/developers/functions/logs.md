+++
title = "Logs"
date = 2017-08-20T18:19:13+08:00
categories = ["support"]
tags = []
weight = 30
# Author Details
authorname = "Ross Parker"
authorurl = "http://rossparker.org/"
+++

As of v10.0.00, Gibbon has a new system for system-wide logs. This will allow you to create or replace a log system to keep track of certain events or create reports or statistics using the logs. Any module, or indeed the core itself, can set or get logs using the following system-wide function call:

    setLog($connection2, $gibbonSchoolYearID, $gibbonModuleID, $gibbonPersonID, $title, $array);

*   **$gibbonSchoolYearID** - The current school year ID.
*   **$gibbonModuleID** - Your module's ID.
*   **$gibbonPersonID** - The user ID of the person doing the action that will be logged.
*   **$title** - The title of the action.
*   **$array (Optional)** - Any other information that needs to be stored with the log.

This function will return the ID of the log.

    getLog($connection2, $gibbonSchoolYearID, $gibbonModuleID, $gibbonPersonID, $title, $startDate, $endDate);

*   **$gibbonSchoolYearID** - The ID of the year that the log was submitted in.
*   **$gibbonModuleID (Optional)** - The ID of the module that submitted the log.
*   **$gibbonPersonID **(Optional)**** - The ID of the person who caused the log to be submitted.
*   **$title **(Optional)**** - The title of the log.
*   **$startDate **(Optional)**** - The start of a date range to search in (if no end date is set it will search all until today).
*   **$endDate **(Optional)**** - The end of a date range to search in (if no start date is set it will search all until the first log).

This function will return a PDO result of the query.

    getLogByID($connection2, $gibbonLogID);

*   **$gibbonLogID** - The ID of the log you are looking for.

This function will return a PDO result of the query.
