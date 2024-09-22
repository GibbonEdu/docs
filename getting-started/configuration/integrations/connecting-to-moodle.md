---
title: "Connecting to Moodle"
categories: ["support"]
tags: []
order: 20
contributors: ["rossdotparker"]
---
# Connecting to Moodle

By using the Gibbon module "Moodle" you can use Gibbon to populate Moodle with users and courses. To do this you will need to install the module (see [Extend](https://gibbonedu.org/extend/ "Extend")) and then configure 2 areas of Moodle with the settings shown below:

*   __Home > Site administration > Plugins > Authentication > External database__ (click on the image for more detail)

[![Moodle Users](/img/admin/misc/Moodle-Users.png)](/img/admin/misc/Moodle-Users.png)

*   __Home > Site administration > Plugins > Enrolments > External database__ (click on the image for more detail)

[![Moodle Enrolment](/img/admin/misc/Moodle-Enrolment.png)](/img/admin/misc/Moodle-Enrolment.png)

Beyond this, follow the Moodle instructions for using cron to periodically pull data across from Gibbon to Moodle.
