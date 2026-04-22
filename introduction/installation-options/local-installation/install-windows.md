---
title: Installing on Windows
categories:
  - support
tags: 
order: 20
contributors:
  - xjlwi
  - pli888
---

# Install Gibbon on Windows

This page provides download links and step-by-step instructions for installing Gibbon on Windows.

::: warning

This installation method is intended only for local testing and evaluation.

- The default database credentials are insecure.
- Do **not** use this setup for live school environments.
- For real deployments, configure secure credentials and use a production‑grade server stack.
:::

## Prerequisites

### Install XAMPP

XAMPP provides Apache, PHP, and MySQL needed to run Gibbon.

1. Go to the [XAMPP home page](https://www.apachefriends.org/index.html) and download the **XAMPP for Windows** installer.
2. Double-click the installer in your Downloads folder and follow the prompts to install XAMPP.

::: info

Click **Yes** to continue with installation if you see a question regarding antivirus software running may interfere with XAMPP installation.
:::

::: info

Click **OK** if there is a message about Windows User Account Control (UAC) being activated and to avoid installing XAMPP to C:\Program Files.
:::

3. When XAMPP setup is completed, check the box to launch the XAMPP Control Panel and click **Finish**.

### Configure Apache

A few PHP Extensions required by Gibbon are not enabled by default in XAMPP. You will need to enable these extensions before you can proceed with installation.

1. Click **Config** in XAMPP Control Panel and select **PHP (php.ini)** to open this file in Notepad.
2. In **php.ini** file, find the following lines and remove the semicolon (\;) at the beginning of each line to enable the extensions:

```
;extension=zip
;extension=gd
;extension=intl
```

3. Save the **php.ini** file and close Notepad.

### Start XAMPP services

1. In the XAMPP Control Panel, click the **Start** button for Apache to start the web server.

::: info

Click **Allow** to enable public and private network access for Apache HTTP if prompted by Windows Firewall pop-up.
:::

2. Click **Start** button for **MySQL** to start the database server.

::: info

Click **Allow** to enable public and private network access for mysqld if prompted by Windows Firewall pop-up.
:::

3. Verify you can see XAMPP welcome page by opening http://localhost/dashboard in your web browser.

### Configure MySQL

Set a password for the root MySQL user.

1. Click **Shell** on the XAMPP Control Panel to open a command prompt window.
2. Run the following command to set a password for the root user:
```
mysql -u root -p
```

::: info

Press **Enter** when you are prompted for a password. This will log you in to MySQL without a password since the root user does not have one by default.
:::

3. Run the following command to set a password for root user:
```
alter user 'root'@'localhost' identified by 'root';
```

### Create database

Set up a database for Gibbon using phpMyAdmin.

1. Click **Admin** button for **MySQL** in the XAMPP Control Panel.
2. Your browser will open http://localhost/phpadmin/ in a new tab.
3. Click **Databases** tab.
4. Enter **gibbon** as the name of a new database and click **Create** button.

### Create web directory

Create a folder for Gibbon files.

1. Click **Shell** button located on right-hand side of XAMPP Control Panel.
2. In the shell window, run the following command:

```
mkdir htdocs\gibbon
```

3. Verify the new folder exists:
```
dir htdocs
```

## Download Gibbon

1. Go to [Gibbon's download page](https://gibbonedu.org/download) and download the latest version of Gibbon.
2. Right-click on **GibbonEduCore-InstallBundle.zip** in your Downloads folder, select **Extract All..** then click **Extract** button to unpack archive.
3. Copy contents in **GibbonEduCore-InstallBundle** folder into the `htdocs\gibbon` folder. You can do this in the file explorer or run the following command:

```
copy c:\Users\<your-username>\Downloads\GibbonEduCore-InstallBundle\* c:\xampp\htdocs\gibbon\
```

## Install Gibbon

1. Open http://localhost/gibbon.
2. The Gibbon installer will check system requirements. Click **Submit** button.
3. Enter your database settings:
* Database Server: **localhost**
* Database Name: **gibbon**
* Username: **root**
* Password: **root**

4. Set **Install demo data** to **Yes** then click **Submit**.
5. To finish installation:
* Enter surname, first name, email, username and password to create administrator account
* Leave System Settings with default values
* Provide an organization name and initials
* In the Miscellaneous section, select country, currency and timezone
* Click **Submit** to continue.

## Verify Gibbon installation

1. Go to the Gibbon login page at http://localhost/gibbon.
2. Log into Gibbon using the admin account you created.

## Where to go next

* Explore the [Gibbon home page](https://docs.gibbonedu.org/user-guides/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](https://docs.gibbonedu.org/user-guides/general/fast-finder).