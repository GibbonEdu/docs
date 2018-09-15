---
title: "Locale"
weight: 0
class: \Gibbon\Locale
generated: true
---

## Locale 

Localization & Internationalization Class



* Full name: \Gibbon\Locale

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct</small>
- [setLocale](#setlocale)<small> — Set the current i18n code</small>
- [getLocale](#getlocale)<small> — Get the current i18n code</small>
- [setTimezone](#settimezone)
- [getTimezone](#gettimezone)
- [setTextDomain](#settextdomain)<small> — Set the default domain and load module domains</small>
- [setStringReplacementList](#setstringreplacementlist)<small> — Get and store custom string replacements in session</small>
- [translate](#translate)<small> — Custom translation function to allow custom string replacement</small>




### __construct

Construct

```php
Locale::__construct( \Psr\Container\ContainerInterface $container )
```









---

### setLocale

Set the current i18n code

```php
Locale::setLocale( string $i18ncode )
```









---

### getLocale

Get the current i18n code

```php
Locale::getLocale( ): string
```






**Return Value:**
`string`  



---

### setTimezone



```php
Locale::setTimezone( $timezone )
```









---

### getTimezone



```php
Locale::getTimezone( )
```









---

### setTextDomain

Set the default domain and load module domains

```php
Locale::setTextDomain( \Gibbon\Gibbon\Contracts\Database\Connection $pdo )
```









---

### setStringReplacementList

Get and store custom string replacements in session

```php
Locale::setStringReplacementList( \Gibbon\Gibbon\Contracts\Database\Connection $pdo, $forceRefresh = false )
```









---

### translate

Custom translation function to allow custom string replacement

```php
Locale::translate( $text, $domain = null ): string
```






**Return Value:**
`string`  Translated Text



---

