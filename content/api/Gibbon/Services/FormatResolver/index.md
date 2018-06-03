---
title: "FormatResolver"
weight: 0
class: \Gibbon\Services\FormatResolver
generated: true
---

## FormatResolver

The resolver allows modules to add their own formatters, which can be accessed with Format::newMethod
I can also return a formatter as a closure with the using() method, which can be provided to classes
such as the DataTable that loop over and format array data.



* Full name: \Gibbon\Services\FormatResolver

{{< api-example >}} 



### Methods

- [addFormatter](#addformatter)
- [getFormatter](#getformatter)
- [using](#using)
- [__callStatic](#__callstatic)




### addFormatter



```php
static FormatResolver::addFormatter( $method, callable $callable )
```



* This method is **static**.





---

### getFormatter



```php
static FormatResolver::getFormatter( $method )
```



* This method is **static**.





---

### using



```php
static FormatResolver::using( $method, $param )
```



* This method is **static**.





---

### __callStatic



```php
static FormatResolver::__callStatic( $method, $arguments = array() )
```



* This method is **static**.





---

