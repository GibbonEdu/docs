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

The default database credentials are insecure.
Do not use this setup for live school environments.
For real deployments, configure secure credentials and use a production‑grade server stack.
:::

## Prerequisites

### Install XAMPP

XAMPP provides Apache, PHP, and MariaDB (MySQL replacement) needed to run Gibbon.

1. Go to [XAMPP home page](https://www.apachefriends.org/index.html) and click **XAMPP for Windows** button to download the XAMPP installer.
2. Double-click the installer in your Downloads folder and follow the prompts to install XAMPP.
3. Click **Yes** to continue with installation if you see a question regarding antivirus software running may interfere with XAMPP installation.
4. Click **OK** if there is a message about Windows User Account Control (UAC) being enabled.
5. When XAMPP setup has completed, check the box to launch the XAMPP Control Panel and click **Finish**.

### Start XAMPP services

1. In the XAMPP Control Panel, click **Start** next to **Apache** to start the web server.
2. Click **Allow** to enable public and private network access for Apache HTTP if prompted by Windows Firewall pop-up. 
3. In the XAMPP Control Panel, click **Start** next to **MySQL** to start the database server.
4. Click **Allow** to enable public and private network access for mysqld if prompted by Windows Firewall pop-up.

### Create database

Set up a database for Gibbon using phpMyAdmin.

1. Click **Admin** button next to **MySQL** in the XAMPP Control Panel.
2. Your browser will then open http://localhost/phpadmin/ in a new tab.
3. Click **Databases** tab.
4. Enter **gibbon** as the name of a new database and click **Create** button.

### Create web directory

Create a folder for Gibbon files.

1. Click **Shell** button which is located on right-hand side of XAMPP Control Panel.
2. In the shell window, run the following command:

```
mkdir htdocs\gibbon
```

3. Verify the folder exists:
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
