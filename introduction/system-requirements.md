---
title: System Requirements
order: 20
---
# System Requirements

Gibbon is web-based software written in PHP, CSS and JavaScript using a MySQL database. As such, it needs to be installed and hosted on a web server.

::: tip Important Note
Before getting started, it's important to understand that Gibbon is self-hosted open-source software which you can download and install on a server. This gives you the freedom and flexibility to choose how and where to host your server. 

It also means that **all of your private school data belongs to you** on your own server, which no one else has access to. For this reason, Gibbon does not use the Software as a Service (SaaS) model.
:::

## What You'll Need

- A domain name or sub-domain for Gibbon to be accessed via the web
- A server for Gibbon to run on, whether self-hosted, shared-hosting, or cloud-based
- An administrator to install, manage and maintain Gibbon *(often, this is you)*

## Server Requirements

1. **Apache 2** or **Nginx**
	- With `mod_rewrite` enabled (or equivalent)
	- *You can optionally use an alternate web server, but please note that these docs are aimed at Linux servers, and our capacity to support other platforms is limited*
2. **PHP** 
	- Version 7.4 or above
	- With extensions: `gettext`, `mbstring`, `curl`, `zip`, `xml`, `gd`, `intl`
	- Recommended to turn PHP `display_errors` off in production

3. **MySQL** 
	- Version 5.7 or above 
	- Database collation set to `utf8_general_ci` or `utf8mb3_general_ci`
	- *You can optionally use a comparable version of MariaDB*


## Server Recommendations

The processor, memory, hard disk size, and bandwidth required by your server will depend on your number of users and how frequently they use Gibbon. The following are recommendations, but the exact numbers will depend on the needs of your school. 

- **Small Schools** or Light Use <Badge type="info">self-hosted example</Badge>
	- 2 CPUs
	- 4–8 GB Memory
	- 50 GB Hard Disk
  
- **Larger Schools** or Frequent Use <Badge type="info">AWS t3.xlarge example</Badge>
	- 4 vCPUs at up to 3.1GHz
	- 16 GB Memory
	- 300 GB Hard Disk
  

::: tip Hosting tip
Many servers and hosting services can be scaled up as a school's needs increase. Check with your system administrator to see if this option is available. 
:::

## Additional Recommendations

- HTTPS setup on your domain via an SSL Certificate. You can set this up for free on your server using [CertBot](https://certbot.eff.org/) via [LetsEncrypt](https://letsencrypt.org/).
- SSH keys for server access, rather than plain passwords. Otherwise, ensure your system passwords are sufficiently complex, and consider additional layers of security such as IP address restrictions or VPN access.