---
title: Installing with MAMP
order: 10
draft: false
---
# Installing with MAMP

If you have a Macbook or iMac, you can install a local web server on your computer using MAMP, which stands for Mac Apache MySQL PHP. These are all the ingredients that Gibbon needs to run. MAMP is a great way to setup a quick local server to test out Gibbon or begin developing on a mac.

1. [Download MAMP](https://www.mamp.info/) using the free download option (you do not need MAMP Pro).
2. Extract and install MAMP on your computer, following the steps in the installer.
3. Once installed, locate the MAMP folder in your Applications directory.
4. Launch MAMP (not MAMP Pro) and click Start to start your local web server.

::: tip Developer Tip
The default root folder of MAMP is `~/Applications/MAMP/htdocs`. However, you can update the MAMP settings to use a different folder, to make it easier to find and access your server.
:::

Once you have MAMP installed and running, click the WebStart button, which has some useful links to MySQL database credentials and phpMyAdmin.

Your web server will be located at http://localhost, and any folders you create in your root MAMP htdocs will become a path on your website. To install Gibbon, we recommend creating a folder called `gibbon` inside your `~/Applications/MAMP/htdocs` directory, and accessing it via http://localhost/gibbon.

From here, follow the regular [installation instructions](/introduction/installing-gibbon) to setup Gibbon on your MAMP server, placing your downloaded Gibbon files into the `/gibbon` folder you created.