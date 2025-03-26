---
title: Installing on Windows
categories:
  - support
tags: 
order: 20
contributors:
  - xjlwi
---

# Installing on Windows

To install XAMPP, follow the instructions here: [Install Xampp](/introduction/installation-options/local-installation/install-xampp)

After installing the necessary requirements, you will need to download the core module either from [here](https://gibbonedu.org/download/) or use the [cutting edge code](/introduction/installation-options/cutting-edge-code).

::: warning Important Note
Gibbon uses case-sensitive table names. If you are using a Windows database, please be sure that `lower_case_table_names` is not turned on, as this can result in all table names being forced to lower case, and may cause compatibility issues with modules and other servers. [Please see the MySQL docs for more information](https://dev.mysql.com/doc/refman/8.0/en/identifier-case-sensitivity.html).
:::

## How to install?
1. Go to windows command, run as admin. 
2. Navigate to xampp/apache/bin. Here I am using root directory.
  ``` sh
  cd  C:\xampp\apache\bin
  ```

3. Start your Apache server. Type in `httpd.exe`. You would see it running as per here. 
  ``` sh
  C:\xampp\apache\bin>httpd.exe
  ```
4. Go to your xampp, click "Start" on the MySQL.
5. Navigate to your browser, type in localhost:<i>port</i>. You will be able to find the Core module.
6. Follow the instructions as per installation guide.


## How to install required extensions for PHP?
1. Go to Xampp > Apache > config > `php.ini`.
2. Refer [here](https://www.geeksforgeeks.org/how-to-install-php-extensions-on-windows/) for detailed descriptions. 
