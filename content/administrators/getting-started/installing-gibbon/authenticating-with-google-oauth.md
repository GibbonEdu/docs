---
title: "Google Integration"
slug: google-oauth
categories: ["support"]
tags: []
weight: 20
contributors: ["rossdotparker"]
---

If your school uses GSuite (Formerly Google Apps), you can enable single sign on and calendar integration via Gibbon. This process makes use of Google APIs, including OAuth, and allows a user to access Gibbon without a username and password, provided that their listed email address is a Google account to which they have access

1\. Log in to the <a href="https://cloud.google.com/console/project" target="_blank">Google developer console.</a> This requires that you have an account with administrative privileges on your G Suite domain.

2\. Once logged in you need to create a new project by clicking the ___Create Project___ button:

[![Create Project](/wp/getting-started/images/create-project.png)](/wp/getting-started/images/create-project.png)

3\. In the new project set-up dialog, give your project a name. Click the ___Create___ button:

[![Project Name](/wp/getting-started/images/project-name.png)](/wp/getting-started/images/project-name.png)

4\. Projects in ___Organisations___:

If you do not see this image, then goto step 6.

[![Project in Organisation](/wp/getting-started/images/OrganisationError.JPG)](/wp/getting-started/images/OrganisationError.JPG)

5\. Select the ___Project___ to use.

[![Project in Organisation](/wp/getting-started/images/SelectProject.JPG)](/wp/getting-started/images/SelectProject.JPG)

6\.Click on the ___Credentials___ tab:

[![Finding the Credentials](/wp/getting-started/images/ClickCredentials.JPG)](/wp/getting-started/images/ClickCredentials.JPG)

7\. Then click <span style="text-decoration: underline;">**Create** **credentials**</span>:

[![Create Credentials](/wp/getting-started/images/create-credentials.png)](/wp/getting-started/images/05-select-credential-300x158.png)

8\. Click Choose **<span style="text-decoration: underline;">OAuth2 Client ID</span>**:

[![OAuth Client ID](/wp/getting-started/images/oauth-clientid.png)](/wp/getting-started/images/oauth-clientid.png)

9\. If you have not already configured the consent screen, at this point you will be required to do so:

[![Consent Screen Warning](/wp/getting-started/images/consent-screen.png)](/wp/getting-started/images/consent-screen.png)

10\. Fill in the details for the ___Application Name___, ___Support Email___ and ___Authorised Domains___ then click Save.

[![Consent Details](/wp/getting-started/images/OAuthConsentScreen1.JPG)](/wp/getting-started/images/OAuthConsentScreen1.JPG)

[![](/wp/getting-started/images/OAuthConsentScreen2.JPG)](/wp/getting-started/images/OAuthConsentScreen2.JPG)

11\. In the new client ID window, do the following:

*   Choose Web Application.
*   Set Authorised Javascript origins to the url of gibbon on your server.
*   Set Authorised Redirect URI to http://www.your-gibbon-install/lib/google/index.php. The googleOAuth folder is in the in the lib folder of Gibbon v14.0.00 and above on your server.
*   Click create client ID:

[![](/wp/getting-started/images/create-client-id.png)](/wp/getting-started/images/create-client-id.png)

12\. After this is complete, the client id details will be given to you: 

[![](/wp/getting-started/images/client-id-details.png)](/wp/getting-started/images/client-id-details.png)

(Save the client ID and client secret for step 18.)

13\. Create an API key: 

[![](/wp/getting-started/images/api-key.png)](/wp/getting-started/images/api-key.png)

14\. Save the API Key for step 18: 

[![](/wp/getting-started/images/api-key-created.png)](/wp/getting-started/images/api-key-created.png)

15\. Leave the Key Restriction blank: 

[![](/wp/getting-started/images/key-restriction.png)](/wp/getting-started/images/key-restriction.png)

16\. Add the Calendar API by ___Selecting the Library___

[![](/wp/getting-started/images/SelectLibrary.JPG)](/wp/getting-started/images/SelectLibrary.JPG)

17\. Select the ___Calendar API___ in the ___G Suite___ Section

[![](/wp/getting-started/images/EnableCalendarAPI.JPG)](/wp/getting-started/images/EnableCalendarAPI.JPG)

18\. Everything is now set up on the Google side, so you can enter your details into Gibbon by going to ___Home___ > ___System Admin___ > **<span style="text-decoration: underline;">Third Party Settings</span>**. The details you need to enter into are as follows.

*   Google Developers Client Name
*   Google Developers Redirect URI (See step 9 above)

[![](/wp/getting-started/images/AuthenticationGibbon.png)](/wp/getting-started/images/AuthenticationGibbon.png) 

Use details from steps 12 & 14 or click on the Credentials tab: For the following use: Google Developers Client ID = Yellow Google Developers Client Secret = Red Google Developers Client Name = Blue Google Developers Redirect Url = Green 

[![](/wp/getting-started/images/ClientId.png)](/wp/getting-started/images/ClientId.png) 

API Key (Called ___Developer Key___ on Gibbon in older versions.): 

[![](/wp/getting-started/images/APIKeyDetails.png)](/wp/getting-started/images/APIKeyDetails.png)

19\. On the Gibbon home page when you Logout, you should now see a ___Sign In With Google___ button, which allows users to enter the system without their Gibbon username and password.

20\. When a user logs in using Google, their personal calendar, if not yet set, will be set to their primary Google Calendar.

21\. In additional, the school can specify a Google Calendar for all users to have in their timetable. To set this up, go to ___Home___ > **<span style="text-decoration: underline;">System Admin</span>** > ___Third Party Settings___ and set the ___School Google Calendar ID___
___School Google Calendar ID___ field to the ID of a shared Google Calendar.
