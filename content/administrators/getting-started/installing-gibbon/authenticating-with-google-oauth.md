---
title: "Google Integration"
slug: google-oauth
categories: ["support"]
tags: []
weight: 20
contributors: ["rossdotparker"]
---

If your school uses GSuite (Formerly Google Apps), you can enable single sign on and calendar integration via Gibbon. This process makes use of Google APIs, including OAuth, and allows a user to access Gibbon without a username and password, provided that their listed email address is a Google account to which they have access

1\. Log in to the [Google developer console](https://cloud.google.com/console/project). This requires that you have an account with administrative privileges on your G Suite domain.

2\. Once logged in you need to create a new project by clicking the ___Create Project___ button:

[![](/wp/2014/02/02-create-project-300x49.png)](/wp/2014/02/02-create-project.png)

3\. In the new project set-up dialog, give your project a name. Click the ___C______reate___ button:

[![](/wp/2014/02/03-project-name-300x134.png)](/wp/2014/02/03-project-name.png)

4.Click on the ___Credentials___ tab:

[![](/wp/2014/02/05-select-credentialstab-300x274.png)](/wp/2014/02/05-select-credentialstab.png)

5\. Then click <span style="text-decoration: underline;">**Create** **credentials**</span>:

[![](/wp/2014/02/05-create-credentials-300x158.png)](/wp/2014/02/05-create-credentials.png)

6\. Click Choose **<span style="text-decoration: underline;">OAuth2 Client ID</span>**:

[![](/wp/2014/02/06-OAuth-ClientID-300x210.png)](/wp/2014/02/06-OAuth-ClientID.png)

7\. If you have not already configured the consent screen, at this point you will be required to do so:

[![](/wp/2014/02/07a-consent-screen-300x107.png)](/wp/2014/02/07a-consent-screen.png)

8\. Fill in the details for the Product Name and click Save.

[![](/wp/2014/02/07b-product-name-300x290.png)](/wp/2014/02/07b-product-name.png)

9\. In the new client ID window, do the following:

*   Choose Web Application.
*   Set Authorised Javascript origins to the url of gibbon on your server.
*   Set Authorised Redirect URI to http://www.your-gibbon-intall/lib/google/index.php. The googleOAuth folder is in the in the lib folder of Gibbon v14.0.00 and above on your server.
*   Click create client ID:

[![](/wp/2014/02/07c-create-client-id-274x300.png)](/wp/2014/02/07c-create-client-id.png) 10\. After this is complete, the client id details will be given to you: [![](/wp/2014/02/07d-client-id-details-300x140.png)](/wp/2014/02/07d-client-id-details.png) (Save the client ID and client secret for step 14.) 11\. Create an API key: [![](/wp/2014/02/08a-API-key-300x268.png)](/wp/2014/02/08a-API-key.png) 12\. Save the API Key for step 14: [![](/wp/2014/02/08b-API-key-created-300x158.png)](/wp/2014/02/08b-API-key-created.png) 13\. Leave the Key Restriction blank: [![](/wp/2014/02/10-key-restriction-300x281.png)](/wp/2014/02/10-key-restriction.png) 14\. Everything is now set up on the Google side, so you can enter your details into Gibbon by going to ___Home___ > ___System Admin___ > **<span style="text-decoration: underline;">Third Party Settings</span>**. The details you need to enter into are as follows.

*   Google Developers Client Name
*   Google Developers Redirect URI (See step 9 above)

[![](/wp/2014/02/11a-Authentication-Gibbon-300x181.png)](/wp/2014/02/11a-Authentication-Gibbon.png) Use details from steps 7-8 or click on the Credentials tab: For the following use: Google Developers Client ID = Yellow Google Developers Client Secret = Red Google Developers Client Name = Blue Google Developers Redirect Url = Green [![](/wp/2014/02/11b-Client-id-285x300.png)](/wp/2014/02/11b-Client-id.png) API Key: [![](/wp/2014/02/11c-API-key-300x119.png)](/wp/2014/02/11c-API-key.png) 15\. To turn the required APIs, click on Library tab for APIs: [![](/wp/2014/02/12a-Library-APIs-300x148.png)](/wp/2014/02/12a-Library-APIs.png) Enable:

*   Google+ API
*   Google+ Domains API
*   Calendar API

For example: [![](/wp/2014/02/12b-Google-300x228.png)](/wp/2014/02/12b-Google.png) 16\. On the Gibbon home page, you should now see a ___Sign In With Google___ button, which allows users to enter the system without their Gibbon username and password. 17\. When a user logs in using Google, their personal calendar, if not yet set, will be set to their primary Google Calendar. 18\. In additional, the school can specify a Google Calendar for all users to have in their timetable. To set this up, go to ___Home___ > **<span style="text-decoration: underline;">System Admin</span>** > ___Third Party Settings___ and set the ___School Google Calendar ID___
___School Google Calendar ID___ field to the ID of a shared Google Calendar.
