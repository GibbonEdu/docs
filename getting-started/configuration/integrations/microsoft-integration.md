---
title: "Microsoft Integration"
slug: microsoft-oauth
categories: ["support"]
tags: []
order: 20
contributors: ["skuipers"]
---
# Microsoft Integration

The following are some quick instructions for setting up the Microsoft SSO in Gibbon. This documentation is a work in progress, but should help get users started. Please let us know in our forums if you have any questions: [https://ask.gibbonedu.org](https://ask.gibbonedu.org)

1. Begin by logging into your Microsoft account via [Azure Portal](https://portal.azure.com/). If you don't have an account you can set one up, however you may certainly need an enterprise level account from Microsoft if you are looking to enable SSO for your entire organization.
2. Once logged in, select [](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview) from the sidebar menu.
3. Then select [](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) from the list of Manage options in the sidebar.
4. Click + New Registration and give it a name and select your account type.
5. For the Redirect URI, this will come from Gibbon.
    - Go into System Admin > Third Party Settings and select the Edit pencil next to the Microsoft SSO option.
    - <img width="575" alt="Screenshot 2022-03-21 at 10 42 09 AM" src="https://user-images.githubusercontent.com/897700/159198749-ec8dec62-5b87-48b5-ad71-bff814ea7bd1.png">
    - Select Yes next to APi Enabled to turn this API on.
    - Select and copy the value next to API Redirect Uri. This takes the form of http://yourdomain.com/login.php
    - Paste this into the Redirect URI field in the Microsoft page, selecting Web as the platform.
    - Click the Register button to create your app registration.
    <img width="815" alt="Screenshot 2022-03-21 at 10 41 45 AM" src="https://user-images.githubusercontent.com/897700/159198763-275c3ded-1f07-4908-b2bc-5e58a78af869.png">
6. Once the app has been created, copy the value next to "Application (client) ID" in Microsoft. Go into the previous page in Gibbon and paste it under "API Client ID".
  <img width="815" alt="Screenshot 2022-03-21 at 10 34 01 AM" src="https://user-images.githubusercontent.com/897700/159198682-3cb0c107-30be-40c1-8662-c826c20d0be5.png">

7. Where it says Client Credentials, click the link "Add a certificate or secret".
8. Click the + New Client Secret button, use the default description and expiry.
9. Immediatly copy the "Value" shown after creation (you will not be able to access it again without creating a new secret).
10. Paste this value into the "API Client Secret" field in Gibbon, then press Submit to save your changes.

If you've successfully followed the above steps, you should now be able to log out and back in using the Microsoft SSO option. As an important note, the email used by Microsoft **must match** the email used in Gibbon, and must be unique in Gibbon, for this login method to work. 

Give a shout on our forums if you have any questions: [https://ask.gibbonedu.org](https://ask.gibbonedu.org)
