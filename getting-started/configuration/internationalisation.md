---
title: Languages & Translation
categories:
  - support
tags: 
order: 30
contributors:
  - rossdotparker
---

# Multilingual, Internationalisation & Localisation

Thanks to our amazing volunteers, Gibbon is available in several different languages. If you would like to help translate Gibbon, please email [support@gibbonedu.org](mailto:support@gibbonedu.org). Your help would be most appreciated!

## Troubleshooting

The most common cause of Gibbon's multilingual features not working is the server's OS not having the correct locales installed. This is usually fairly trivial to solve, as shown in the example below, which installs the Great Britain locale for use with English, under Ubuntu: `sudo locale-gen en_GB` There is plenty of guidance online for the equivalent commands for other languages and platforms.

## Setting up Locales in Windows

Setting up languages and locales in Windows is a bit different than Linux systems. Our community member, [Manuel A. Ruiz P.](https://ask.gibbonedu.org/profile/manuelruizp84), has shared the following steps to help Windows users setup a language variable to use for Gibbon.

Steps:

1. Make sure your Gibbon installation has a 100% passed system check (you will need to installed certain PHP extensions).
2. Install the Languages you want.
3. Create a System Variable in Windows called LANG
4. Change the variable to the language code you prefer (requires adding the language to the Gibbon installation). For example: LANG=es_MX to use Gibbon in Spanish
5. Restart Apache server
6. Refresh browser
7. Start using Gibbon in the language you prefer. (Note: Windows must be set to the language that will be used in Gibbon).

Please ask any questions [on this forum post](https://ask.gibbonedu.org/t/translate-gibbon-into-another-language-in-a-windows-environment/3385) if you get stuck. Thanks!
