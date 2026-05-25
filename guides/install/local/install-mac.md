---
title: Installing on Mac
order: 10
draft: false
contributors:
  - pli888
---
# Install Gibbon on Mac

This page provides download links and step-by-step instructions for installing Gibbon on Mac.

::: warning

This installation method is intended **only for local testing and evaluation**.

- The default database credentials are insecure.
- Do **not** use this setup for live school environments.
- For real deployments, configure secure credentials and use a production‑grade server stack.
:::

## Prerequisites

### Install MAMP

MAMP provides Apache, PHP, and MySQL needed to run Gibbon.

1. Go to [MAMP home page](https://www.mamp.info) and click **Free Download** button to download **MAMP-MAMP-PRO-Downloader**.
2. Double-click the **MAMP-MAMP-PRO-Downloader.zip** file in your Download folder to unpack ZIP archive.
3. Double-click **MAMP & MAP PRO Downloader.app** in your Download folder.
4. An appropriate version of MAMP for your system will be downloaded as a pkg file.
5. Double-click pkg installer and follow prompts to install MAMP. By default, it will be installed at `/Applications/MAMP`.

### Start MAMP services

1. Open MAMP.app from `/Applications` directory.
2. Click **Start** button on MAMP application window to start Apache and MySQL.
3. Open http://localhost:8888 in your browser. You should see a page entitled **Index of /** which confirms Apache is running.

### Create database

Set up a database for Gibbon using phpMyAdmin.

1. Go to http://localhost:8888/phpMyAdmin.
2. Click **Database** tab.
3. Enter **gibbon** as the name of a new database and click **Create** button.

::: info Database credentials
The username is **root** and password is **root** by default for this new database.
:::

### Create web directory

Prepare a folder for Gibbon files.

1. Run the following command in a Terminal:

```
mkdir /Applications/MAMP/htdocs/gibbon
```

## Download Gibbon

1. Go to [Gibbon's download page](https://gibbonedu.org/download) and download the latest version of Gibbon.
2. Double-click **GibbonEduCore-InstallBundle.zip** in your download folder to unpack archive.
3. Copy contents in **GibbonEduCore-InstallBundle** folder into MAMP:

```
cp ~/Downloads/GibbonEduCore-InstallBundle/* /Applications/MAMP/htdocs/gibbon/
```

## Install Gibbon

1. Open http://localhost:8888/gibbon.
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
* Provide an organisation name and initials
* In the Miscellaneous section, select country, currency and timezone
* Click **Submit** to continue.

## Verify Gibbon installation

1. Successfully completing the installation will redirect you to the Gibbon login page at http://localhost:8888/gibbon.
2. Log into Gibbon using admin account you created.


## Where to go next

* Explore the [Gibbon home page](https://docs.gibbonedu.org/user-guides/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](/tutorials/using-gibbon/general/fast-finder).
