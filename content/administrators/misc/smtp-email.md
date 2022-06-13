---
title: "SMTP Email"
categories: ["support"]
tags: ["Miscellaneous"]
weight: 70
contributors: ["jcarney2024"]
---
Setting up a new server, or migrating Gibbon from one server to another, can involve the following considerations and steps:

### How to Set Up SMTP Email Settings
*   Navigate to Admin > Third Party Settings > SMTP Mail
    *   Set "Enable SMTP Mail" to "Yes"
    *   Input the hostname of your SMTP email provider. (This is whoever services your email; GSuite, Microsoft Outlook, Zoho, etc.)
        *   Some Common Examples of email providers:
            *   GSuite: smtp.gmail.com
            *   Outlook: smtp.office365.com
    *   Input your SMTP port; Most Commonly: 25, 465, 587
    *   Select your SMTP Encryption type: Suggested: Automatic
        *   Gibbon will automatically select the correct encryption type based on the port selected.
    *   SMTP Username: Enter a username that is able to access and send from the email set on Admin > System Settings > Organisation Email.
    *   Enter a password for the username entered above.
    *   Finally, click submit to save your changes.
    *   A "Test Email" box will appear, where you can test your new settings!

If you experience any issues with setup, please reference the Gibbon Support Forums. 
