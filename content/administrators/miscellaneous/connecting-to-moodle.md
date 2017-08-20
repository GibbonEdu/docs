+++
title = "Connecting to Moodle"
date = 2017-08-20T15:07:45+08:00
categories = ["support"]
tags = []
weight = 20
# Author Details
authorname = "Ross Parker"
authorurl = "http://rossparker.org/"
+++

By using the Gibbon module "Moodle" you can use Gibbon to populate Moodle with users and courses. To do this you will need to install the module (see [Extend](https://gibbonedu.org/extend/ "Extend")) and then configure 2 areas of Moodle with the settings shown below:

*   __Home > Site administration > Plugins > Authentication > External database__ (click on the image for more detail)

[![Moodle Users](https://gibbonedu.org/wp-content/uploads/2013/02/Moodle-Users-43x300.png)](https://gibbonedu.org/wp-content/uploads/2013/02/Moodle-Users.png)

*   __Home > Site administration > Plugins > Enrolments > External database__ (click on the image for more detail)

[![Moodle Enrolment](https://gibbonedu.org/wp-content/uploads/2013/02/Moodle-Enrolment-66x300.png)](https://gibbonedu.org/wp-content/uploads/2013/02/Moodle-Enrolment.png)

Beyond this, follow the Moodle instructions for using cron to periodically pull data across from Gibbon to Moodle.
