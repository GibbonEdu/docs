---
title: Softaculous Installation
order: 20
draft: false
contributors:
  - pli888
---
# Install Gibbon using Softaculous

This page provides step-by-step instructions for installing Gibbon on Linux using [Softaculous](https://www.softaculous.com).

::: info
Gibbon cannot be installed using the free version of Softaculous. The premium version of Softaculous needs to be purchased to access the Gibbon installer.
:::

::: info
* A video showing how Gibbon is installed using Softaculous is available:

<div style="max-width:660px;margin:0 auto;">
  <ClientOnly>
    <iframe
      src="https://www.youtube.com/embed/5tfuT1CjAe8?rel=0"
      width="100%"
      height="360"
      style="border:0;display:block;"
      allowfullscreen
    ></iframe>
  </ClientOnly>
</div>
:::

## Access cPanel

1. Go to the cPanel login page `https://<server-domain.com>:2083` in your browser, replacing `<server-domain.com>` with the actual domain name for your server.
2. Log into the cPanel dashboard using the username and password provided by your hosting provider.

## Navigate to Gibbon Softaculous installation page

1. Scroll down to the **Software** section in the cPanel dashboard.
2. Click on the **Softaculous Apps Installer** icon to be redirected to the Softaculous dashboard.
3. Search for **Gibbon** in the search bar on the left-hand panel and click on **Gibbon** which will be located in the **Educational** section.

## Install Gibbon

1. Click the **Install** tab on the Softaculous Gibbon installation page.
2. Fill in the settings for your Gibbon installation. Important settings are:
   - **Choose Protocol**: Select the protocol (http:// or https://) for your Gibbon site.
   - **Choose Domain**: Select the domain name for the server where Gibbon will be installed.
   - **In Directory**: Leave this field blank to install Gibbon in the root directory of your domain, or enter a subdirectory name if you want to install it in a subfolder (e.g., `gibbon`).
   - **Admin Username**: Enter a username for the Gibbon administrator account.
   - **Admin Password**: Enter a strong password for the administrator account.
   - **Admin Email**: Enter an email address for the administrator account.
3. Click the **Install** button at the bottom of the page to start the installation process.

## Verify Gibbon installation

1. Go to the URL for the Gibbon login page on your browser.
::: info
The URL will be in the form of `<protocol>://<server-domain>/<directory>` which was set in the previous section. For example, if you selected `https://` protocol, `example.com` domain and `gibbon` directory, the URL will be https://example.com/gibbon.
:::
2. Log into Gibbon using admin account you created.

## Where to go next

* Explore the [Gibbon home page](https://docs.gibbonedu.org/user-guides/general/the-home-page).
* Access information within a Gibbon system using the [Fast Finder](https://docs.gibbonedu.org/user-guides/general/fast-finder).
