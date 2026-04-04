---
title: Installing on Mac
order: 10
draft: false
contributors:
  - pli888
---
# Install Gibbon on Mac

This page provides download links and step-by-step instructions for installing Gibbon on Mac.

## Prerequisites

### Install and start MAMP

MAMP provides Apache, PHP, and MySQL needed to run Gibbon.

1. Go to [MAMP home page](https://www.mamp.info) and click **Free Download** button to download **MAMP-MAMP-PRO-Downloader.zip**.
2. Double-click zip file to extract **MAMP & MAP PRO Downloader.app**.
3. Double-click **MAMP & MAP PRO Downloader.app** to download the appropriate version of MAMP in a pkg file for your Mac.
4. Double-click the MAMP-MAMP-PRO pkg installer. By default, MAMP is installed at `/Applications/MAMP`.
5. Open MAMP.app from `/Applications`.
6. Click **Start** button on MAMP application window to start Apache and MySQL.
7. Open http://localhost:8888 in your browser — you should see the MAMP start page.

### Create database

1. Go to http://localhost:8888/phpMyAdmin.
2. Click **Database** tab on the phpMyAdmin home page.
3. Type **gibbon** as the name of a new database and click **Create** button.

::: info Database credentials
Note the username is **root** and password is **root** by default for this new database.
:::

### Create web directory for Gibbon

1. Create a folder called **gibbon** in the MAMP web root directory by running the following command in a Terminal:

```
mkdir /Applications/MAMP/htdocs/gibbon
```

## Install and run Gibbon

1. Go to https://gibbonedu.org/download and click **Download** button to obtain the latest version of Gibbon.
2. Double-click **GibbonEduCore-InstallBundle.zip** to extract the contents of the zip file.
3. Copy contents of the **GibbonEduCore-InstallBundle** folder into the **gibbon** folder:

```
cp ~/Downloads/GibbonEduCore-InstallBundle/* /Applications/MAMP/htdocs/gibbon/
```

4. Open http://localhost:8888/gibbon to access the Gibbon installation page.
5. The installer will check requirements are met on your system. Click **Submit** button.
6. Enter your database settings:
* Database Server: **localhost**
* Database Name: **gibbon**
* Username: **root**
* Password: **root**

Set **Install demo data** to **Yes** then click **Submit**.

7. To finish installation:
* Enter surname, first name, email, username and password to create administrator account
* Leave System Settings with default values
* Provide an organisation name and initials
* In the Miscellaneous section, select country, currency and timezone
* Click **Submit** to continue.

8. Successfully completing the installation will redirect you to the Gibbon login page at http://localhost:8888/gibbon.
9. Verify installation by logging into Gibbon using the admin account.


## Where to go next

* Explore the [Gibbon home page](https://docs.gibbonedu.org/user-guides/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](https://docs.gibbonedu.org/user-guides/general/fast-finder).
* Perform [post-installation configuration and server configuration](https://docs.gibbonedu.org/introduction/post-installation) steps to ensure your systems runs smoothly.
* [Backing up your system](https://docs.gibbonedu.org/administration/backing-up-your-system) provides instructions on backing up data in Gibbon.
