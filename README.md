# Gibbon Documentation

This repository holds the back-end Hugo and Markdown files for the Gibbon docs. 

https://docs.gibbonedu.org/

# Local Installation

These installation steps were followed on a CentOS 7 laptop although the steps will be similar for other OSs.

```
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
