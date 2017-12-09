---
title: "Backing Up Your Installation"
categories: ["support"]
tags: []
weight: 60
contributors: ["rossdotparker"]
---


With Gibbon up and running, you will want to protect your installation in case of disaster, allowing yourself to recover. Our recommendation is to use a shell script ([example here](/wp/2015/04/script_backup1.sh) for *nix servers) to copy all important files and database data to an external drive, which should be rotated to maintain online and offline copies of your data. On *nix servers, you can use cron to schedule the script to run on a regular basis (e.g. every night at 01:00):

    0 1 * * * cd /home/user/ ; script_backup.sh
