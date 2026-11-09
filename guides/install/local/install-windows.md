---
title: Installing on Windows
categories:
  - support
tags: []
order: 10
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

1. Go to the [XAMPP home page](https://www.apachefriends.org/index.html) and download the latest version of **XAMPP for Windows** installer.
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

### Create a MySQL database

Set a password for the root MySQL user.

1. Click **Shell** on the XAMPP Control Panel to open a command prompt window.
2. Run the following command to access the MySQL command-line client:
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

4. Create a database for Gibbon by executing this command:
```
create database gibbon;
```

::: info
The new password for the MySQL root user needs to be provided to phpMyAdmin in its `config.inc.php` file if you need access to this database tool. 
:::

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
2. Right-click on **GibbonEduCore-InstallBundle.zip** in your Downloads folder, select **Extract All..** and extract files into the `C:\xampp\htdocs\gibbon` folder.

## Install Gibbon

1. Open http://localhost/gibbon.
2. On the INSTALLATION - STEP 1 page, check if all your System Requirements have been passed by the Gibbon installer. Click **Submit** button.

::: info
For testing purposes, a **Secure HTTPS Connection** is not required when evaluating Gibbon.

If PHP Extension curl is showing as not installed, use a shell window to copy the brotlidec.dll file into the XAMPP Apache bin folder:
```
copy C:\xampp\php\brotlidec.dll C:\xampp\apache\bin
```

Then use the XAMPP Control Panel to **Stop** and **Start** Apache. Refresh the http://localhost/gibbon page and check that PHP Extension curl is now installed.
:::

3. On the INSTALLATION - STEP 2 page, enter the following settings and then click **Submit**:
* Database Server: **localhost**
* Database Name: **gibbon**
* Username: **root**
* Password: **root**
* Set **Install demo data** to **Yes**
4. On the INSTALLATION - STEP 3 page, provide the requested information and click **Submit** to finish installation:
* Enter surname, first name, email, username and password to create administrator user account
* System Settings should contain the following values:
  * Base URL: `http://localhost/gibbon`
  * Base Path: `C:\xampp\htdocs\gibbon`
  * System Name: Gibbon
  * Install Type: Testing

::: info
Ensure the Base URL contains forward slashes `[/]` in the `http://localhost/gibbon` URL.
:::

* Provide an organization name and initials
* In the Miscellaneous section, select country, currency and timezone

## Verify Gibbon installation

1. Go to the Gibbon login page at http://localhost/gibbon.
2. Log into Gibbon using the admin account you created.

## Where to go next

* Explore the [Gibbon home page](/tutorials/using-gibbon/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](/tutorials/using-gibbon/general/fast-finder).