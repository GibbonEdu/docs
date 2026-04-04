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

Gibbon requires PHP, MySQL, and a web server (Apache/NGINX). MAMP bundles these together for macOS, making setup easier.

### Install MAMP on Mac

1. Go to the [MAMP home page](https://www.mamp.info) and click the **Free Download** button to download **MAMP-MAMP-PRO-Downloader.zip**.
2. Double-click the zip file to extract **MAMP & MAP PRO Downloader.app**.
3. Double-click **MAMP & MAP PRO Downloader.app** to download the appropriate version of MAMP in a pkg file for your Mac.
4. Double-click the downloaded MAMP-MAMP-PRO pkg file to start the installation. By default, MAMP is installed at `/Applications/MAMP`.
5. Launch MAMP from `/Applications`.
6. Click the **Start** button on the MAMP application window to start Apache and MySQL servers.
7. Open http://localhost:8888 in your browser — you should see the MAMP start page.

### Configure database

1. Open http://localhost:8888/phpMyAdmin in your browser to access the MySQL database management interface.
2. Click the **Database** tab on the phpMyAdmin home page.
3. Type in **gibbon** as the name of a new database and click the **Create** button to create a new database.

::: info Database credentials
Note the username is **root** and password is **root** by default for this new database.
:::

### Create web directory for Gibbon

1. Create a new folder called **gibbon** in the MAMP web root directory. This can be done by running the following command in Terminal:

```
mkdir /Applications/MAMP/htdocs/gibbon
```

## Install and run Gibbon on Mac

1. Go to https://gibbonedu.org/download on your browser and click the **Download** button to obtain the latest version of Gibbon.
2. Double-click **GibbonEduCore-InstallBundle.zip** to extract the contents of the zip file.
3. Copy the contents of the **GibbonEduCore-InstallBundle** folder into the **gibbon** folder you created in the `MAMP/htdocs` directory:

```
cp ~/Downloads/GibbonEduCore-InstallBundle/* /Applications/MAMP/htdocs/gibbon/
```

4. Open http://localhost:8888/gibbon in your browser to access the Gibbon installation page.
5. The Gibbon installer will check its requirements have been met on your system. Click **Submit** button to proceed with installation.
6. Enter your database settings:
* Database Server: **localhost**
* Database Name: **gibbon**
* Username: **root**
* Password: **root**

Set the toggle switch to **yes** to install demo data, and click **Submit** to continue.

7. Enter your administrator account details:
* Surname: (enter your last name)
* First Name: (enter your first name)
* Email Address: (enter a valid email)
* Username: (choose an admin username)
* Password: (choose a secure password)

Leave the System Settings with their default values. 
Provide an organisation name and initials. 
In the Miscelleneous section, select your country, currency and timezone.
Finally, click **Submit** to continue.

8. Successfully completing the installation will redirect you to the Gibbon login page at http://localhost:8888/gibbon.
9. Log into Gibbon using the admin account created during installation.


## Where to go next

* Explore the [Gibbon home page](https://docs.gibbonedu.org/user-guides/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](https://docs.gibbonedu.org/user-guides/general/fast-finder).
* Perform [post-installation configuration and server configuration](https://docs.gibbonedu.org/introduction/post-installation) steps to ensure your systems runs smoothly.
* [Backing up your system](https://docs.gibbonedu.org/administration/backing-up-your-system) provides instructions on backing up data in Gibbon.
