---
title: "Command Line Tools"
categories: ["support"]
tags: []
weight: 10
contributors: ["rossdotparker"]
---

Gibbon features command line tools that allow you to automate certain tasks using cron, including the following:

### Weekly Parent Email Summary of Homework & Behaviour

This script generates emails to contact priority 1 parents of each student, outlining their homework deadlines and giving a behaviour summary for the last week. It can be set to run on any day, but is best run after school on the last day of the week (e.g. Friday afternoon for many schools). Parents can use a link in the email to confirm that they have received and read the email. Form tutors can use a report (still being developed) to show which parents have read the reports for a given week. To run this script, run the following commands, or put them within cron on a *nix machine:

    cd [absolutePath]/cli php planner_parentWeeklyEmailSummary.php

### User Management

This script:

*   Finds users who are 'Expected' and have reached or exceeded their start date, and sets their status to 'Full'.
*   Finds users who are 'Full' and have exceeded their end date, and sets status to 'Left'.
*   Finds parents of students who have exceeded their end date, have no other active children in school and are not staff members, and sets their status to 'Left'.

To run this script, run the following commands, or put them within cron on a *nix machine:

    cd [absolutePath]/cli php userAdmin_statusCheckAndFix.php

### Incomplete Attendance Email

This script checks attendance taking for the current day, and emails those tutors who have not taken attendance. The report is also sent to the system administrator. To run this script, run the following commands, or put them within cron on a *nix machine:

    cd [absolutePath]/cli php attendance_dailyIncompleteEmail.php

### Behaviour Letters

This script works to automatically send letters to parents of children who have reached certain threshold levels of negative behaviour. The script uses a variety of settings, which can be accessed via __<u>Admin</u>__ > __<u>School Admin</u>__ in the main menu and then __<u>Manage Behaviour Settings</u>__ in the module menu. To run this script, run the following commands, or put them within cron on a *nix machine:

    cd [absolutePath]/cli php behaviour_letters.php

### Overdue Library Loan Items

This script works to automatically notify the person responsible for each overdue loan item in the Library. To run this script, run the following commands, or put them within cron on a *nix machine:

    cd [absolutePath]/cli php library_overdueNotification.php

### Using Cron

Cron is different on different *nix systems, but the following should generally get the User Management script above to run at 1am each day:

    0 1 * * * cd /var/www/gibbon/cli/ ; php userAdmin_statusCheckAndFix.php
