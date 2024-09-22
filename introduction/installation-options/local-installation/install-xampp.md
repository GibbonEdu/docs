---
title: Install XAMPP
categories:
  - support
tags: 
order: 20
contributors:
  - rossdotparker
---

# Install Xampp for Testing on Windows

The Gibbon school platform requires the PHP programming language and the MySQL database. The industry standard is to use the Linux operating system which runs most publicly facing web sites. However there are packages (or stacks) of software designed to make it easy to run under Microsoft Windows. Two of these are XAMPP and WAMPP. Note that both of these packages are aimed at making it easy to set up and experiment with on a local machine rather than for production use. Because of this they are designed to ignore security issues and so should not be used to run live sites. For example the default installation would allow a person with passing knowledge to login to your setup and delete all databases. So please do not use on live sites. In this tutorial, we will look at setting up XAMPP, in order to be ready to install Gibbon. Download XAMPP from the Apache Friends website [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html). There are several different versions of the install, the one used here was called xampp-win32-5.6.3-0-VC11-installer.exe When you run it you will probably get an alert similar to the following ![XAMPP install first page](/img/admin/installing-gibbon/xampp_install_1.png) Don't worry, it is part of the standard install process. You may then get a message that says

[![xampp_install_2](/img/admin/installing-gibbon/xampp_install_2.png)](/img/admin/installing-gibbon/xampp_install_2.png)

Again, don't worry this is standard. Next you should see this [![xampp_install_3](/img/admin/installing-gibbon/xampp_install_3.png)](/img/admin/installing-gibbon/xampp_install_3.png)   Click the next button to display the following

[![xampp_install_4](/img/admin/installing-gibbon/xampp_install_4.png)](/img/admin/installing-gibbon/xampp_install_4.png)

  Click the next button and you will see a screen like the following

[![xampp_install_5](/img/admin/installing-gibbon/xampp_install_5.png)](/img/admin/installing-gibbon/xampp_install_5.png)

I recommend accepting the default, even though installing directly off the [c:\](file:///c:/) root may seem a little odd. On the next screen uncheck the button after “Learn more about Bitnami for XAMPP” (otherwise it will fire up your browser and take you to the web site explaining how you install many other free web applications)

[![xampp_install_6](/img/admin/installing-gibbon/xampp_install_6.png)](/img/admin/installing-gibbon/xampp_install_6.png)

The installer is now ready to go

[![xampp_install_7](/img/admin/installing-gibbon/xampp_install_7.png)](/img/admin/installing-gibbon/xampp_install_7.png)

Now might be a good time to put the kettle on as it may take a while to unpack and install all the files depending on the speed of your computer. At the end of the install process you should see a screen similar to the following:

[![xampp_install_8](/img/admin/installing-gibbon/xampp_install_8.png)](/img/admin/installing-gibbon/xampp_install_8.png)

You do want to see the control panel so click Finish and you should see something like the following. By the way, if you ever need to run it from the file explorer the control panel program is called xampp-control.exe. [![XMPP_control_panel](/img/admin/installing-gibbon/XMPP_control_panel.png)](/img/admin/installing-gibbon/XMPP_control_panel.png)

Click the Apache and MySQL start buttons and the start labels should turn into stop buttons as in the following screen shot. [![XMPP_control_panel_running](/img/admin/installing-gibbon/XMPP_control_panel_running.png)](/img/admin/installing-gibbon/XMPP_control_panel_running.png)

If either Apache or MySQL do not start you will need to do some web searches and trouble shooting as Gibbon cannot work without both running. To check that XAMPP really is working point your browser to [http://localhost](http://localhost/) If you see a page like the following then things are going well [![xampp_start_page](/img/admin/installing-gibbon/xampp_start_page.png)](/img/admin/installing-gibbon/xampp_start_page.png)

You can now follow the Installing Gibbon guide, using <span id="yui_3_17_2_4_1431926974574_1055" class="ya-q-full-text">C:/xampp/htdocs/ (aka the XAMPP document root)</span> as the location into which you place the Gibbon files.
