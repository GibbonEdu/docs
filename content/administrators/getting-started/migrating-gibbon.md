---
title: "Migrating Gibbon"
categories: ["support"]
tags: ["Miscellaneous"]
weight: 50
contributors: ["rossdotparker"]
---
Migrating Gibbon from one server to another can involve the following considerations and steps:

1.  **Files**
    *   Download or copy your files to a staging location.
    *   Edit /config.php to adjust the database settings for your new server.
    *   Upload your files to your new server.
2.  **Database**
    *   Download your entire database (e.g. structures, content, auto_increment) to an SQL file.
    *   Use find and replace in a text editor to locate all instances of your system's current URL and update them to the new URL (this will include absoluteURL in the gibbonSettings table).
    *   Locate the absolutePath entry in the gibbonSettings table, and update its value field to contain the location of Gibbon in your new server's file system.
    *   Upload your edited SQL file to your a database on your new server.
3. **Config**
    *   Ensure the file permissions on your new server are secure, and that /uploads is writable by your web server.
    *   Ensure that the configuration of your new server meets Gibbon's requirements.
    *   Admin > System Admin > System Check can help in both of these regards.
4. **Decommissioning
    *   Once your new server is up and running, and well tested, decommission your old server, backing up and scrubbing data as needed.
