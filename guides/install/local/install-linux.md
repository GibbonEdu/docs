---
title: Installing on Linux
order: 10
draft: false
contributors:
  - pli888
---

# Install Gibbon on Linux

This page provides download links and step-by-step instructions for installing Gibbon on an Ubuntu distribution of Linux.

::: warning

This installation method is intended only for local testing and evaluation.

- The default database credentials are insecure.
- Do **not** use this setup for live school environments.
- For real deployments, configure secure credentials and use a production‑grade server stack.
  :::

## Prerequisites

### Install PHP, Apache, and MySQL

1. Open a terminal and run the following command to install Apache and its PHP module:
``` bash
sudo apt-get update
sudo apt install -y apache2 libapache2-mod-php
```
2. Install MySQL:
``` bash
sudo apt install -y mysql-server
```
3. Install PHP and required PHP extensions:
``` bash
sudo apt install -y php \
    php-common \
    php-sqlite3 \
    php-mysql \
    php-gmp \
    php-curl \
    php-intl \
    php-mbstring \
    php-xmlrpc \
    php-gd \
    php-bcmath \
    php-xml \
    php-cli \
    php-zip \
    php-php-gettext
```
4. Install additional dependencies:
``` bash
sudo apt install -y unzip \
    git \
    composer
```
5. Go to http://localhost in your browser. You should see a page entitled **Apache2 Ubuntu Default Page** which confirms Apache is running.

### Create database

Set up a database for Gibbon using MySQL.

1. In your terminal, log in to MySQL as root:
``` bash
sudo mysql
```

2. Create a database for Gibbon:
``` sql
CREATE DATABASE gibbon;
```
3. Create a user for Gibbon:
``` sql
CREATE USER 'gibbon'@'localhost' IDENTIFIED BY 'gibbon';
```
4. Enable user to access gibbon database:
``` sql
GRANT ALL ON gibbon.* TO 'gibbon'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
```

### Create web directory

1. Create a folder for Gibbon files:
``` bash
sudo mkdir /var/www/html/gibbon
```

## Download Gibbon and install its PHP dependencies

1. Go to [Gibbon's download page](https://gibbonedu.org/download) and download the latest version of Gibbon into your `~Downloads` folder.
2. Unzip the contents of the downloaded file into `/var/www/html/gibbon`:
``` bash
sudo unzip ~/Downloads/GibbonEduCore-InstallBundle.zip -d /var/www/html/gibbon
```
3. Install composer dependencies:
``` bash
cd /var/www/html/gibbon
sudo composer install
```
::: info

Press **return** when asked to continue as root/super user for installing dependencies.
:::

## Configure Apache to access Gibbon

1. Allow files in Gibbon to be accessible by Apache:
``` bash
sudo chown -R www-data:www-data /var/www/html/gibbon/
sudo chmod -R 755 /var/www/html/gibbon/
sudo chmod -R 750 /var/www/html/gibbon/uploads/
```
2. Enable mod_rewrite on Apache:
``` bash
sudo a2enmod rewrite
```
3. Restart Apache:
``` bash
systemctl restart apache2
```

## Install Gibbon

1. Open http://localhost/gibbon.
2. The Gibbon installer will check system requirements. Click **Submit** button.
3. Enter your database settings:
* Database Server: **localhost**
* Database Name: **gibbon**
* Username: **gibbon**
* Password: **gibbon**

4. Set **Install demo data** to **Yes** then click **Submit**.
5. To finish installation:
* Enter surname, first name, email, username and password to create administrator account
* Leave System Settings with default values
* Provide an organisation name and initials
* In the Miscellaneous section, select country, currency and timezone
* Click **Submit** to continue.

## Verify Gibbon installation

1. Go to http://localhost/gibbon and log into Gibbon using admin account you created.


## Where to go next

* Explore the [Gibbon home page](https://docs.gibbonedu.org/user-guides/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](/tutorials/using-gibbon/general/fast-finder).


