---
title: "Updating Gibbon"
categories: ["support"]
tags: ["getting started"]
weight: 50
contributors: ["rossdotparker", "fvlasie"]
---

## Core Updates

1.  The system will alert you of new updates to the core, when you visit System Admin.
    *   Note, that this does not apply to systems running [Cutting Edge Code](https://gibbonedu.org/cutting-edge-code/).
2.  Use the Update action in System Admin for semi-automatic updates to the core, as follows:
    1.  <span style="text-decoration: underline; color: #ff0000;">**Backup your database and installation files.**</span>
    2.  Download and unzip the latest version of Gibbon.
    3.  Login to your Gibbon installation and got to Admin > System Admin > Update.
    4.  Update your install base with the newly downloaded files, taking care not to overwrite any additional modules and themes you have installed.
    5.  Refresh the Update page, and it should show there are some database updates to be run. Run these by pressing the Submit button.
    6.  If the new version includes a lot of theme changes, you may need to refresh your page a few times to see things correctly.
    7.  In some cases you might need to log out and back in for all changes to be effective.
    
    
    **Tips for updating via the command line**
    
    For step 4: Supposing you have installed Gibbon in <code>/var/www/html/c/</code> you could run the following commands on your system:
   
      *  cd /var/www/html
      *  wget https://github.com/GibbonEdu/core/archive/v18.0.01.zip
      *  unzip v18.0.01.zip
      *  rm -rf v18.0.01.zip
      *  chown apache:apache -R core-18.0.01
      *  rsync -vua core-18.0.01/ c/
      *  rm -rf core-18.0.01

    The above commands are for upgrading to v18. You will need to get the URL for the version to which you are upgrading here: https://github.com/GibbonEdu/core . Also, your Gibbon install may use a different directory than "c" in the rsync command. Remember to run the database update from Gibbon's Home > System Admin > Update page. 

## Module Updates

1.  Use the Update function in System Admin > Manage Modules for semi-automatic module updates, as follows:
    1.  <span style="text-decoration: underline; color: #ff0000;">**Backup your database and installation files.**</span>
    2.  Download and unzip the latest version of the module in question.
    3.  Login to your Gibbon installation and got to Admin > Manage Modules and press the Update icon for the relevant module.
    4.  Update your install base with the newly module downloaded files.
    5.  Press the Submit page to update the module.

## Theme Updates

1.  Use the Update function in System Admin > Manage Themes for semi-automatic theme updates, as follows:
    1.  <span style="text-decoration: underline; color: #ff0000;">**Backup your database and installation files.**</span>
    2.  Download and unzip the latest version of the theme in question.
    3.  Login to your Gibbon installation and got to Admin > Manage Modules.
    4.  Update your install base with the newly downloaded theme files.
    5.  Reload the Manage Module page (all themes are then checked and updated in one go)
