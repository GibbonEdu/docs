#!/bin/bash

#Backup files in the Gibbon installation to the backup drive
sudo rsync -rlptDzvv -delete [gibbonInstallPath] [backupPath]

#Dump the Gibbon database and copy to the backup drive
sudo mysqldump -u [databaseUsername] -p[databasePassword] -h [databaseServer] [databaseName] > ~/[databaseName].sql
sudo rm [backupPath]/mysql/[databaseName].sql
sudo mv ~/[databaseName].sql /[backupPath]/[databaseName]/

#Backup the home directory, which is where this backup script may be stored
sudo rsync -rlptDzvv -delete [homeDirectoryPath] [backupPath]

#Backup /etc, which contains a lot of important server config files
sudo rsync -rlptDzvv -delete /etc [backupPath]
