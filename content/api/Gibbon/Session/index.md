---
title: "Session"
weight: 0
class: \Gibbon\Session
generated: true
---

## Session

Session Class



* Full name: \Gibbon\Session

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct</small>
- [setDatabaseConnection](#setdatabaseconnection)<small> — Set Database Connection</small>
- [guid](#guid)<small> — Return the guid string
TODO: Remove this</small>
- [get](#get)<small> — Get Session Value</small>
- [set](#set)<small> — Set Session Value</small>
- [setAll](#setall)<small> — Set Multiple Session Values</small>
- [loadSystemSettings](#loadsystemsettings)
- [loadLanguageSettings](#loadlanguagesettings)
- [createUserSession](#createusersession)
- [cacheFastFinderActions](#cachefastfinderactions)<small> — Cache translated FastFinder actions to allow searching actions with the current locale</small>




### __construct

Construct

```php
Session::__construct( \Psr\Container\ContainerInterface $container )
```









---

### setDatabaseConnection

Set Database Connection

```php
Session::setDatabaseConnection( \Gibbon\Gibbon\Contracts\Database\Connection $pdo )
```









---

### guid

Return the guid string
TODO: Remove this

```php
Session::guid( ): string
```






**Return Value:**
`string`  



---

### get

Get Session Value

```php
Session::get( $name, $default = null ): mixed
```






**Return Value:**
`mixed`  



---

### set

Set Session Value

```php
Session::set( $name, $value ): object
```






**Return Value:**
`object`  Gibbon\session



---

### setAll

Set Multiple Session Values

```php
Session::setAll( array $values ): object
```






**Return Value:**
`object`  Gibbon\session



---

### loadSystemSettings



```php
Session::loadSystemSettings( \Gibbon\Contracts\Database\Connection $pdo )
```









---

### loadLanguageSettings



```php
Session::loadLanguageSettings( \Gibbon\Contracts\Database\Connection $pdo )
```









---

### createUserSession



```php
Session::createUserSession( $username, $userData )
```









---

### cacheFastFinderActions

Cache translated FastFinder actions to allow searching actions with the current locale

```php
Session::cacheFastFinderActions( string $gibbonRoleIDCurrent )
```









---

