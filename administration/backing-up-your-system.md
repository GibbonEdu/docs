---
title: Backing Up Your System
categories:
  - support
tags: 
order: 30
contributors:
  - rossdotparker
---
# Backing Up Your System

With Gibbon up and running, you will want to protect your installation in case of disaster, allowing yourself to recover from server issues or drive failures. 

There are two main considerations for backing up:
- **Database Backup**  
  Ensure that you have a backed up copies of your MySQL database. These should ideally be daily backups with a rotation to keep multiple copies.
- **File System Backup**  
  Backing up the files in your Gibbon installation, ideally the full installation, but at the very least the `/uploads` and `/archive` directories, ensures that any files uploaded by users are not lost. This is generally achieved through a daily VM snapshot. 

::: tip Backup Recommendation
Your backup process should be **automated and scheduled** to occur at regular frequencies, with periodic check-ups to ensure backups are working as expected. You should also aim to include an **offsite backup** where at least one copy of your installation is stored in a separate physical location.
:::

## Shell Script

One option is to use a shell script ([example here](https://docs.gibbonedu.org/img/admin/getting-started/script_backup1.sh) for Linux servers) to copy all important files and database data to an external drive, which should be r<u>otated to maintain online and offline copies</u> of your data. On Linux servers, you can use cron to schedule the script to run on a regular basis (e.g. every night at 01:00):

```sh
0 1 * * * cd /home/user/ ; script_backup.sh
```

## AWS Cloud Backup

You can setup regular cloud backups to an AWS S3 bucket, to ensure you have offsite backups of your database. This requires a paid account with Amazon AWS, which is not covered in the scope of this documentation. However, once you have an account, you can use the following steps to setup your cloud backup:

- Install the [AWS CLI tools](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on your server and configure them.
- Create a shell script that runs mysqldump to backup your database, then connects to AWS to upload a copy of the backup to your S3 bucket.
- Schedule this shell script to run daily using a [cron task](/administration/command-line-tools).

An example of the shell script code can be found below. This example assumes your system user is `ubuntu`, your database name is `gibbon`, and your S3 bucket name is `gibbon-backup`. It stores your backup in a directory within your user home called `aws_bucket`. Update as necessary.

```
logger 'Backup started - database only - via AWS'

rm /home/ubuntu/aws_bucket/*

sudo mysqldump --defaults-file=/home/ubuntu/.my.cnf -u root -h localhost gibbon > /home/ubuntu/aws_bucket/gibbon_backup_$(date +%F-%H-%M).sql

/usr/local/bin/aws s3 sync /home/ubuntu/aws_bucket s3://gibbon-backup --delete

logger 'Backup complete - database only - via AWS'
```

If you host your system on AWS, you can also use the lifecycle manager on AWS to setup rotating snapshots of your whole instance, so that you are backing up not only your database but your whole system.
## MySQL Dump

A simple yet basic way to create database backups is to run the mysqldump utility:

``` sh
mysqldump -u [username] -p [database_name] > your_backup_file_name.sql
```

You can set this command to [run as a cron task](https://medium.com/@satriajanaka09/how-to-setup-a-scheduler-for-mysql-database-backup-with-crontab-63917e594bbb), to backup the database daily. The limitation of this method is that it generally overwrites the same file each day, and the backup still resides on the same volume as your server, so should there be drive failure, you'd lose the backup as well.
## AutoMySQLBackup

The [AutoMySQLBackup tool](https://github.com/sixhop/AutoMySQLBackup) is similar to the mysqldump utility, but it lets you setup a configuration file to create rotating backups, keeping a certain number of hourly, daily, weekly, and monthly backups. Similar to mysqldump, this still saves the database to the same volume, so you should setup a process to perioditcally copy or rotate these backups onto another drive or upload to another server.