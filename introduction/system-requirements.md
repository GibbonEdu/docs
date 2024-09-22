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
	- With `mod_rewrite` enabled (or nginx equivalent)

2. **PHP** 
	- Version 7.4 or above
	- With extensions: `gettext`, `mbstring`, `curl`, `zip`, `xml`, `gd`, `intl`
	- Recommended to turn PHP `display_errors` off in production.

3. **MySQL** 
	- Version 5.7 or above 
	- Database collation set to `utf8_general_ci` or `utf8mb3_general_ci`
	- *You can optionally use a comparable version of MariaDB*

## Recommendations

- HTTPS via an SSL Certificate
- SSH keys for server access, rather than plain passwords