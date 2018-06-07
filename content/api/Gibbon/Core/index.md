---
title: "Core"
weight: 0
class: \Gibbon\Core
generated: true
---

## Core 

Gibbon Core



* Full name: \Gibbon\Core

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct</small>
- [initializeCore](#initializecore)<small> — Setup the Gibbon core: Runs once (enforced), if Gibbon is installed & database connection exists</small>
- [isInstalled](#isinstalled)<small> — Is Gibbon Installed? Based on existance of config.php file</small>
- [isInstalling](#isinstalling)
- [guid](#guid)<small> — Gets the globally unique id, to allow multiple installs on the server</small>
- [getVersion](#getversion)<small> — Gets the current Gibbon version</small>
- [getConfig](#getconfig)<small> — Get a config value by name, othwerwise return the config array.</small>
- [getSystemRequirement](#getsystemrequirement)<small> — Gets a System Requirement by array key.</small>




### __construct

Construct

```php
Core::__construct( $directory )
```









---

### initializeCore

Setup the Gibbon core: Runs once (enforced), if Gibbon is installed & database connection exists

```php
Core::initializeCore( \Psr\Container\ContainerInterface $container )
```









---

### isInstalled

Is Gibbon Installed? Based on existance of config.php file

```php
Core::isInstalled( ): boolean
```






**Return Value:**
`boolean`  



---

### isInstalling



```php
Core::isInstalling( )
```









---

### guid

Gets the globally unique id, to allow multiple installs on the server

```php
Core::guid( ): string|null
```






**Return Value:**
`string|null`  



---

### getVersion

Gets the current Gibbon version

```php
Core::getVersion( ): string
```






**Return Value:**
`string`  



---

### getConfig

Get a config value by name, othwerwise return the config array.

```php
Core::getConfig( string $name = null ): mixed|array
```






**Return Value:**
`mixed|array`  



---

### getSystemRequirement

Gets a System Requirement by array key.

```php
Core::getSystemRequirement( $key ): string
```






**Return Value:**
`string`  



---

