---
title: "SMTP Email"
categories: ["support"]
tags: ["Miscellaneous"]
weight: 70
contributors: ["jcarney2024"]
---
Setting up a new server, or migrating Gibbon from one server to another, can involve the following considerations and steps:

## How to Set Up SMTP Email Settings

* Enable [Less Secure Apps](#less-secure-apps) through your email provider.
* Navigate to Admin > System Admin > Third Party Settings > SMTP Mail
  * Set "Enable SMTP Mail" to "Yes"
  * Input the hostname of your SMTP email provider. (This is whoever services your email; GSuite, Microsoft Outlook, Zoho, etc.)
    * Some Common Examples of email providers:
      * GSuite: smtp.gmail.com
      * Outlook: smtp.office365.com
      * Zoho: smtp.zoho.com
    * Input your SMTP port; Most Commonly: 25, 465, 587
    * Select your SMTP Encryption type
      * Suggested: Automatic (Gibbon will automatically select the correct encryption type based on the port selected.)
    * SMTP Username: Enter a username that is able to access and send from the email set on Admin > System Settings > Organisation Email. **If this account is not able to send from your "Organisation Email" listed in Gibbon, you will not be able to send emails from Gibbon.**
    * Enter a password for the username entered above. **Make sure you're using an [app specific password](#app-specific-passwords), in order to bypass two-factor authentication**
    * Finally, click submit to save your changes.
    * A "Test Email" box will appear, where you can test your new settings!

## Common Issues with SMTP Email

### App Specific Passwords

* Some service providers may require you to use an app specific password to bypass two-factor authentication.
  * In addition to enabling [less secure apps](#less-secure-apps), this may be necessary to make your SMTP email settings work.
    * [Google App Specific Password Instructions](https://support.google.com/accounts/answer/185833?hl=en)
    * [Microsoft App Specific Password Instructions](https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-apps-that-don-t-support-two-step-verification-5896ed9b-4263-e681-128a-a6f2979a7944)
    * [Zoho App Specific Password Instructions](https://help.zoho.com/portal/en/kb/bigin/channels/email/articles/generate-an-app-specific-password)
  * If you are unsure about the correct actions to take, contact your email provider.

### Less Secure Apps
Some service providers block legacy authentication requests by default, to make their systems more secure. However, when using SMTP email, the service provider might block your request, and your email won't be sent.

* If you are using a Google Apps account, you may need to enable [less secure apps](https://support.google.com/a/answer/6260879) in your google admin center.
  * Navigate to your google admin center and click "Admin console" > "Security" > "Less Secure Apps"
    * Click "Turn on"
    * Click "Save"
    * If you are still having issues, please contact your domain administrator.
* If you are using a Microsoft Office 365 account, you may need to enable [legacy authentication](http://woshub.com/enable-modern-basic-auth-microsoft-365/) in your office admin center.
  * Navigate to your office admin center and click "Azure Active Directory" > "Properties" > "Manage Security Defaults" > "Enable Security Defaults"
    * Set to "No"
    * Click "Save"
    * If you are still having issues, please contact your domain administrator.
* If you are using a Zoho account, you may need to enable [less secure apps](https://www.zoho.com/mail/help/less-secure-apps.html) in your zoho admin center.
  * Navigate to your zoho admin center and click "Settings" > "Customer Portal" > "Authentication" > "SAML"
    * Click "Turn on"
    * Click "Save"
    * If you are still having issues, please contact your domain administrator.

If you experience any issues with setup, please reference the Gibbon Support Forums, and to the documentation provided by your SMTP provider.
