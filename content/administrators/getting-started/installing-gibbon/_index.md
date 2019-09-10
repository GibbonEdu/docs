---
title: "Installing Gibbon"
short: "Installation"
categories: ["support"]
tags: []
weight: 10
contributors: ["rossdotparker"]
---

## Server Requirements

1.  Apache 2
2.  PHP 7.0 or above (with PDO, gettext, CURL, GD, ZIP. Recommended to turn display_errors off.)
3.  MySQL 5 (collation set to utf8_general_ci)


## Manual Installation

After download and unzipping:

1.  Copy all files to your server, choosing either the root directory or a sub-folder within it.
2.  Navigate your browser to the folder on your server where Gibbon has been located.
3.  Follow the on-screen instructions in Gibbon's new installer.
4.  Check out the [Getting Started With Gibbon]({{< relref "getting-started-with-gibbon.md" >}}) page for more information.

_Note: If you want to help test and develop Gibbon, you can select the [Cutting Edge Code]({{< relref "cutting-edge-code.md" >}}) option in the installer. This allows you to run the latest code from [our GitHub repo](https://github.com/GibbonEdu/core). This is not recommended for production environments._

{{% panel %}}
Looking for a quick install? [Download](https://www.softaculous.com/apps/educational/Gibbon) Gibbon via Softaculous. [![](/wp/2014/11/softaculous.gif)](https://www.softaculous.com/apps/educational/Gibbon)
{{% /panel %}}

## Softaculous Installation

If you are using a web hosting company that provides Softaculous via CPanel, you can follow the instructions in the video below to install Gibbon:<iframe src="https://www.youtube.com/embed/5tfuT1CjAe8?rel=0" allowfullscreen="allowfullscreen" width="560" height="315" frameborder="0"></iframe>

## Post-Install & Server Config

1.  Set permissions of all Gibbon files so they are not publicly writeable (e.g. `chmod -Rv 755`).
2.  Create folder `/uploads` and set file permissions for to allow writing by web server (avoid chmod 777 for security reasons).
3.  To improve security and reliability, `magic_quotes_gpc` should be turned off in php.ini. This is supposed to be deprecated in PHP 5.3, but experience shows sometimes it is better to turn it off anyway.
4.  Turn PHP `register_globals` off. On shared host, use .htaccess `php_flag register_globals off` to do this
5.  Set PHP to allow `<?` as well as `<?php`. Turn `short_open_tag` on. (This is not required for running the Core as of v8.0.00 or greater. Update your additional modules to the latest version.)
6.  Turn folder browsing off. On shared host, use .htaccess `Options -Indexes`
7.  Set PHP's `max_file_uploads` to at least the number of students in a class.
8.  Set PHP's error to be `error_reporting = E_ALL & ~E_NOTICE` or less aggressive
9.  Set PHP to allow URLs as files (otherwise Calendar overlay in TT will not work). `allow_url_fopen=On`
10.  Set PHP's `max_input_vars` setting to 5,000 (otherwise Manage Permissions breaks)
11. On systems that use selinux make sure to run `setsebool -P httpd_can_sendmail 1` to enable Gibbon to send mail.
