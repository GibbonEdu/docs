# Gibbon Documentation

This repository holds the back-end Hugo and Markdown files for the Gibbon docs. 

https://docs.gibbonedu.org/

# Local Installation

These installation steps were followed on a CentOS 7 laptop although the steps will be similar for other OSs.

```
yum install hugo
mkdir ~/docs/
cd ~/docs/
git clone https://github.com/GibbonEdu/docs.git ./
git submodule init
git submodule update themes/gibbon

# (Optional) Allow external traffic through the firewall
firewall-cmd --permanent --new-service=hugo
firewall-cmd --permanent --service=hugo --add-port=1313/tcp
firewall-cmd --permanent --zone=public --add-service=hugo

# If you intend on hosting on your local network. The baseURL is required as it's used to direct a couple of network requests
hugo serve --bind "192.168.1.61" --port 1313 --baseURL http://docs.local:1313

# If you intend on hosting locally. hugo serve assumes localhost:1313
hugo serve

```

If you are intending on serving using Apache, IIS etc. then you can edit config.toml to include the baseURL of your choice. It's the first line of that file. Once this is done, run `hugo` then check the public/ directory. This will contain the static files with the correct baseURL. Take heed, however. There are a couple of links to wp plugins which link to gibbonedu regardless of the provided baseURL.

# Installation on Windows
[Link here](https://docs.gibbonedu.org/administrators/getting-started/installing-gibbon/install-xampp/)

After installing the necessary requirements, you will need to download the core module either from 
i) [here](https://gibbonedu.org/download/) or 
ii) use the [cutting edge code](https://docs.gibbonedu.org/administrators/getting-started/installing-gibbon/cutting-edge-code/).


<i>Note</i>
How to install?
1. Go to windows command, run as admin. 
2. Navigate to xampp/apache/bin. Here I am using root directory.
> cd  C:\xampp\apache\bin
> 
3. Start your Apache server. Type in `httpd.exe`. You would see it running as per here. cd(/wp/2023/10/apache_1.png)](/wp/2015/03/apache_1.png)
4. Go to your xampp, click "Start" on the MySQL.
5. Navigate to your browser, type in localhost:<i>port</i>. You will be able to find the Core module.
6. Follow the instructions as per installation guide.

How to install requirements for PHP?
1. Go to Xampp > Apache > config > `php.ini`.
2. Refer [here](https://www.geeksforgeeks.org/how-to-install-php-extensions-on-windows/) for detailed descriptions. 
