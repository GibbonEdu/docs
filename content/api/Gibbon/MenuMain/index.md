---
title: "MenuMain"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\MenuMain
generated: true
---

## MenuMain

Main menu building Class



* Full name: \Gibbon\MenuMain

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct</small>
- [setMenu](#setmenu)<small> — Construct and store main menu in session</small>
- [getMenu](#getmenu)<small> — Return the module menu (stored in session)</small>




### __construct

Construct

```php
MenuMain::__construct( \Gibbon\Core $gibbon, \Gibbon\Contracts\Database\Connection $pdo )
```









---

### setMenu

Construct and store main menu in session

```php
MenuMain::setMenu( )
```









---

### getMenu

Return the module menu (stored in session)

```php
MenuMain::getMenu( ): string
```






**Return Value:**
`string`  



---

