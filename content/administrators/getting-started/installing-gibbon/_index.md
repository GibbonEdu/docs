---
title: "Installing Gibbon"
short: "Installation"
categories: ["support"]
tags: []
weight: 10
contributors: ["rossdotparker"]
---

## Server Requirements

1.  Apache 2 (with mod_rewrite)
2.  PHP 7.3 or above (with PDO, gettext, CURL, GD, ZIP. Recommended to turn display_errors off.)
3.  MySQL 5.6 (collation set to utf8_general_ci)


## Manual Installation

After download and unzipping:

1.  Copy all files to your server, choosing either the root directory or a sub-folder within it.
2.  Navigate your browser to the folder on your server where Gibbon has been located.
3.  Follow the on-screen instructions in Gibbon's new installer.
4.  Check out the [Getting Started With Gibbon]({{< relref "getting-started-with-gibbon.md" >}}) page for more information.

_Note: If you want to help test and develop Gibbon, you can select the [Cutting Edge Code]({{< relref "cutting-edge-code.md" >}}) option in the installer. This allows you to run the latest code from [our GitHub repo](https://github.com/GibbonEdu/core). This is not recommended for production environments._

The video below gives an overview of the installation process:

<div style="width: 100%; text-align: center; margin-bottom: 20px;"><iframe src="https://www.youtube.com/embed/jTj4KLEB-w8?start=133&end=1179" allowfullscreen="allowfullscreen" width="560" height="315" frameborder="0"></iframe></div>

{{% panel %}}
Looking for a quick install? [Download](https://www.softaculous.com/apps/educational/Gibbon) Gibbon via Softaculous.
{{% /panel %}}

## Softaculous Installation

If you are using a web hosting company that provides Softaculous via CPanel, you can follow the instructions in the video below to install Gibbon:<iframe src="https://www.youtube.com/embed/5tfuT1CjAe8?rel=0" allowfullscreen="allowfullscreen" width="560" height="315" frameborder="0"></iframe>

## Post-Install & Server Config

1.  Set permissions of all Gibbon files so they are not publicly writeable (e.g. `chmod -Rv 755`).
2.  Create folder `/uploads` and set file permissions for to allow writing by web server (avoid chmod 777 for security reasons).
3.  Turn PHP `register_globals` off. On shared host, use .htaccess `php_flag register_globals off` to do this.
4.  Turn folder browsing off. On shared host, use .htaccess `Options -Indexes`
5.  Set PHP's `max_file_uploads` to at least the number of students in a class.
6.  Set PHP's `max_input_vars` setting to 5,000 (otherwise Manage Permissions breaks).
7.  Set PHP's error to be `error_reporting = E_ALL & ~E_NOTICE` or less aggressive.
8.  Set PHP to allow URLs as files with `allow_url_fopen=On` (otherwise Calendar overlay in TT will not work). 
9. On systems that use selinux make sure to run `setsebool -P httpd_can_sendmail 1` to enable Gibbon to send mail.

## Securing your Uploads Folder

Files uploaded to Gibbon are stored in the uploads folder. It's essential for your school's security to ensure that this folder cannot be browsed and accessed by random people. The steps to do this depend on your server setup. Some instructions for Apache servers is included below.

**Apache**:
- Edit your apache2 config file, often located at /etc/apache2/apache2.conf
- Look for the directory config, which often looks like `<Directory /var/www/>` ... `</Directory>`
- Inside the config, if you see `Options Indexes FollowSymLinks` change this to `Options FollowSymLinks` removing the Indexes config
- Reload your updated config, on Ubuntu use the command `sudo service apache2 reload`
- Check to see that your /uploads folder returns a 403 Forbidden or 404 Not Found result


## MySQL Database Privileges

For additional security, it's recommended to setup a MySQL user that has the minimum required database privileges. This is a common practice for web-based apps, to ensure that, should the credentials be compromised, the MySQL user cannot escalate their access in the system.

The minimum GRANTS required for Gibbon are: 
```
SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, LOCK TABLES
```

You can view your current grants with the command:
`SHOW GRANTS FOR yourusername`

You can reset the grants for a user with the following commands. See the [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/show-grants.html) for more info.
```
REVOKE ALL PRIVILEGES ON *.* FROM 'yourusername'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, LOCK TABLES ON `yourdatabase`.* TO 'yourusername'@'%';
```
