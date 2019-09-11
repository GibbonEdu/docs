---
title: "Installing Gibbon on Ubuntu/Debian"
linktitle: "Installing on Ubuntu/Debian"
short: "Installation"
categories: ["support"]
tags: []
weight: 10
contributors: ["jimbo8098"]
---

## Foreword
An installation of Pop!_OS was used to write this documentation, however, installation will be the same on most popular versions. Bear in mind that this guide will refer to the generic pacakages for each requirement. This will generally be fine as popular Linux distros such as Ubuntu and Debian will ship with stable versions of these packages, however it does help to be aware of the implications of this.

## General Package Installation/Setup

Firstly, be aware these will need to be run as root so sudo/su - appropriately!

`apt install apache2 php mysql-server php-gd php-mysql php-zip php-curl php-gettext php-pdo`

The relevant packages will be installed, however, you still need to enable mod_rewrite on Apache.

`a2enmod rewrite`

Next, restart Apache!

`systemctl restart apache2`

## Configuration

1. Copy the default configuration from /etc/apache2/sites-available/000-default.conf to /etc/apache2/sites-available/gibbon.local.conf. Symlink /etc/apache2/sites-enabled/gibbon.local.conf to the copied file so it's enabled.
```
cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/gibbon.local.conf
ln -s ../sites-available/gibbon.local.conf /etc/apache2/sites-enabled/gibbon.local.conf
```

2. Amend the configuration to your taste. In a VirtualHosts environment, change the ServerName and DocumentRoot at least. I used /var/www/gibbon.local/ as my DocumentRoot. If you're not sure what to put there, consult the Apache documentation.

3. Go to the document root and copy the Gibbon files in. The download link can be found at https://gibbonedu.org/download/ . Copy the download URL then `wget` the URL. Unzip the file (You may need to `apt install unzip` to do so)

4. In your `/etc/apache2/envvars` file, you'll find the apache user/group. Allow the extracted files to be accessible to this user. In my case, I amended these to be apache and www respectively, therefore:

```
chown apache:www -R /var/www/gibbon.local/
chmod 755 -R /var/www/gibbon.local/
```

There's no need to set uploads to anything else in this case.

5. Next, we need to setup mysql:
```
mysql
create database gibbon;
create user 'gibbon'@'localhost' identified by '*password*';
grant all on gibbon.* to 'gibbon'@'localhost';
flush privileges;
```
6. A couple of PHP variables need to be set. All of the below are found in /etc/php/*version*/apache2/php.ini . Firstly, the max_file_uploads variable must be higher than the number of students in a class. magic_quotes_gpc and register_globals should be off
short_open_tag and allow_url_fopen should be on. max_input_vars should be more than 5000 to allow manage permissions to work.
You may wish to edit the error reporting value to make this less aggressive in production.

7. Go to your Gibbon URL, as configured in step 2. If you are using an invalid URL like I was, you may need to add a reference to your `/etc/hosts` file. If you are using Chrome to view the page, you'll also need to specify the protocol otherwise Chrome will search for the URL. You should see the Gibbon installation page and if you followed the steps before correctly, all requirements should be satisfied.
