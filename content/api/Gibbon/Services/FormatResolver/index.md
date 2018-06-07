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

- [addFormatter](#addformatter)<small> — Add a callable as an available format during runtime. Useful for additional modules.</small>
- [getFormatter](#getformatter)<small> — Get the callable function or method for a format by name.</small>
- [using](#using)<small> — Returns a callable function that can be used to format a bulk array of data.</small>
- [keyValue](#keyvalue)<small> — Formats an array of data into key => value pairs by applying a format method to each returned value.</small>
- [__callStatic](#__callstatic)<small> — Calls a format method by name, allowing pre-defined formatters to be used.</small>




### addFormatter

Add a callable as an available format during runtime. Useful for additional modules.

```php
static FormatResolver::addFormatter( string $method, callable $callable )
```



* This method is **static**.





---

### getFormatter

Get the callable function or method for a format by name.

```php
static FormatResolver::getFormatter( string $method ): callable
```



* This method is **static**.


**Return Value:**
`callable`  



---

### using

Returns a callable function that can be used to format a bulk array of data.

```php
static FormatResolver::using( string $method, array $param = null ): callable
```

The callable returned takes a single array of data and returns the formatted string.

* This method is **static**.


**Return Value:**
`callable`  



---

### keyValue

Formats an array of data into key => value pairs by applying a format method to each returned value.

```php
static FormatResolver::keyValue( array $data, string $key, string $method, array $param = null ): array
```



* This method is **static**.


**Return Value:**
`array`  



---

### __callStatic

Calls a format method by name, allowing pre-defined formatters to be used.

```php
static FormatResolver::__callStatic( string $method, array $arguments = array() ): mixed
```



* This method is **static**.


**Return Value:**
`mixed`  



---

