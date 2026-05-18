---
title: Post-Installation
order: 40
---
# Post-Install & Server Config

After installing Gibbon please take the following steps to ensure your system runs smoothly:

 1. Set permissions of all Gibbon files so they are not publicly writeable (e.g. `chmod -Rv 755`).
 2. Set file permissions for the `/uploads` folder (created by the installer) to allow writing by web server (avoid chmod 777 for security reasons).
 3. Turn folder browsing off. On shared host, use .htaccess `Options -Indexes`
 4. Set PHP's `max_file_uploads` to at least the number of students in a class.
 5. Set PHP's `max_input_vars` setting to 5,000 (otherwise Manage Permissions breaks).
 6. Set PHP's error to be `error_reporting = E_ALL & ~E_NOTICE` or less aggressive.
 7. Set PHP to allow URLs as files with `allow_url_fopen=On` (otherwise Calendar overlay in TT will not work). 
 8. On systems that use selinux make sure to run `setsebool -P httpd_can_sendmail 1` to enable Gibbon to send mail.

## Secure your Uploads Folder

Files uploaded to Gibbon are stored in the uploads folder. It's essential for your school's security to ensure that this folder cannot be browsed and accessed by random people. The steps to do this depend on your server setup. Some instructions for Apache servers is included below.

**Apache**:

1.  Edit your apache2 config file, often located at /etc/apache2/apache2.conf
2.  Look for the directory config, which often looks like `<Directory /var/www/>` ... `</Directory>`
3.  Inside the config, if you see `Options Indexes FollowSymLinks` change this to `Options FollowSymLinks` removing the Indexes config
4.  Reload your updated config, on Ubuntu use the command `sudo service apache2 reload`
5.  Check to see that your /uploads folder returns a 403 Forbidden or 404 Not Found result

## Create a Backup Plan

Now that you have Gibbon installed, it's never too soon to think of your backup procedures. Be sure to visit the [Backing Up Your System](/administration/backing-up-your-system) page.

## MySQL Database Privileges

For additional security, it's recommended to setup a MySQL user that has the minimum required database privileges. This is a common practice for web-based apps, to ensure that, should the credentials be compromised, the MySQL user cannot escalate their access in the system.

The minimum GRANTS required for Gibbon are: 
``` sql
SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, LOCK TABLES
```

You can view your current grants with the command:
`SHOW GRANTS FOR yourusername`

You can reset the grants for a user with the following commands. See the [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/show-grants.html) for more info.
``` sql
REVOKE ALL PRIVILEGES ON *.* FROM 'yourusername'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, LOCK TABLES ON `yourdatabase`.* TO 'yourusername'@'%';
```
