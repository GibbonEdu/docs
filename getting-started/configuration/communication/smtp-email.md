---
title: "SMTP Email"
categories: ["support"]
tags: ["Miscellaneous"]
order: 70
contributors: ["jcarney2024", "skuipers"]
---
# SMTP Email

Setting up a new server, or migrating Gibbon from one server to another, can involve the following considerations and steps:

## How to Set Up SMTP Email Settings

* Setup an email account in your domain to use for sending emain from Gibbon, such as gibbon@yourdomain.com
* Navigate to Admin > System Admin > Third Party Settings > SMTP Mail
  * Set "Enable SMTP Mail" to "Yes"
  * Input the hostname of your SMTP email provider. (This is whoever services your email; GSuite, Microsoft Outlook, Zoho, etc.)
    * Some Common Examples of email providers:
      * GSuite: smtp.gmail.com
      * Outlook: smtp.office365.com
      * Zoho: smtp.zoho.com
    * Input your SMTP port: Most Commonly 587 or 465 (occasionally 25)
    * Select your SMTP Encryption type
      * Suggested: Automatic (Gibbon will automatically select the correct encryption type based on the port selected.)
    * SMTP Username: Enter the username for your account.
      * This may be the same as your emails set in Admin > System Settings > Organisation Email, otherwise this account needs to be able to access and send from the organisation email. **If this account is not able to send from your "Organisation Email" listed in Gibbon, you will not be able to send emails from Gibbon.**
    * Enter a password for the username entered above. **Make sure you're using an [](#app-specific-passwords) if you have two-factor authentication (2fA) enabled.**
    * Finally, click submit to save your changes.
    * Use the "Test Email" box to test your new settings!

## Common Issues with SMTP Email

### Important Update about Google SMTP Relay and Less Secure Apps

* As of June 15, 2024, the use of plain passwords with Less Secure Apps enabled will no longer be supported by Google. If you are using [Gmail SMTP Relay](https://apps.google.com/supportwidget/articlehome?hl=en&article_url=https%3A%2F%2Fsupport.google.com%2Fa%2Fanswer%2F2956491%3Fhl%3Den&assistant_id=generic-unu&product_context=2956491&product_name=UnuFlow&trigger_context=a) via smtp.gmail.com, you will need to use an App Password to continue sending email, which also requires enabling two-factor authentication (2FA) for your email account. See the instructions below to create an App Password.

### App Specific Passwords

* Some service providers may require you to use an app specific password to bypass two-factor authentication.
  * If you are using Google, or an account with 2FA enabled, this will be necessary to make your SMTP email settings work.
  * The App Password works like a regular SMTP username and password, however the password is replaced with a special token that can be tracked and revoked as needed.
  * Follow the instructions below to create your App Password, then be sure to update the password field in Gibbon to use this new password, and test your email sending. 
    * [Google App Specific Password Instructions](https://support.google.com/accounts/answer/185833?hl=en)
    * [Microsoft App Specific Password Instructions](https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-apps-that-don-t-support-two-step-verification-5896ed9b-4263-e681-128a-a6f2979a7944)
    * [Zoho App Specific Password Instructions](https://help.zoho.com/portal/en/kb/bigin/channels/email/articles/generate-an-app-specific-password)
  * If you are unsure about the correct actions to take, contact your email provider.

### Less Secure Apps

Some service providers block legacy authentication requests by default, in order to make their systems more secure. When using SMTP email, the service provider might block your request, and your email won't be sent. Here are some guides to enable legacy authentication.

* If you are using a Google Apps account, Less Secure Apps will no longer be supported after June 15, 2024. Please switch to using an App Password for authentication.
* If you are using a Microsoft Office 365 account, you may need to enable [legacy authentication](http://woshub.com/enable-modern-basic-auth-microsoft-365/) in your office admin center.
  * Navigate to your office admin center and click "Azure Active Directory" > "Properties" > "Manage Security Defaults" > "Enable Security Defaults"
    * Set to "No"
    * Click "Save"
    * If you are still having issues, please contact your domain administrator.
* At this time, it is not possible to enable less secure apps for Zoho. However, their current setup still allows you to use SMTP. 😄

If you experience any issues with setup, please reference the Gibbon Support Forums, and to the documentation provided by your SMTP provider.
