---
title: "BasicAttributesTrait"
weight: 0
class: \Gibbon\Forms\Traits\BasicAttributesTrait
generated: true
---

## BasicAttributesTrait 

Basic HTML Attributes (id, class)



* Full name: \Gibbon\Forms\Traits\BasicAttributesTrait

{{< api-example >}} 



### Methods

- [setID](#setid)<small> — Set the id attribute.</small>
- [getID](#getid)<small> — Gets the id attribute.</small>
- [setTitle](#settitle)<small> — Set the title attribute.</small>
- [getTitle](#gettitle)<small> — Gets the title attribute.</small>
- [setClass](#setclass)<small> — Set the class attribute. Replaces any existing classes.</small>
- [addClass](#addclass)<small> — Add a class to the element's class atrribute.</small>
- [removeClass](#removeclass)<small> — Remove a class from the element's class atrribute.</small>
- [getClass](#getclass)<small> — Gets the class attribute.</small>
- [addData](#adddata)<small> — Set a data-* attribute for passing values to scripts.</small>
- [getData](#getdata)<small> — Gets a data-* attribute value by name.</small>
- [getAttributeString](#getattributestring)<small> — Flattens an array of $name => $value pairs into an HTML attribues string name="value". Omits empty values and handles booleans.</small>




### setID

Set the id attribute.

```php
BasicAttributesTrait::setID( string $id = '' ): self
```






**Returns Self:** This method can be chained.



---

### getID

Gets the id attribute.

```php
BasicAttributesTrait::getID( ): string
```






**Return Value:**
`string`  



---

### setTitle

Set the title attribute.

```php
BasicAttributesTrait::setTitle( string $title = '' ): self
```






**Returns Self:** This method can be chained.



---

### getTitle

Gets the title attribute.

```php
BasicAttributesTrait::getTitle( ): string
```






**Return Value:**
`string`  



---

### setClass

Set the class attribute. Replaces any existing classes.

```php
BasicAttributesTrait::setClass( string $class = '' ): self
```






**Returns Self:** This method can be chained.



---

### addClass

Add a class to the element's class atrribute.

```php
BasicAttributesTrait::addClass( string $class = '' )
```









---

### removeClass

Remove a class from the element's class atrribute.

```php
BasicAttributesTrait::removeClass( string $class = '' )
```









---

### getClass

Gets the class attribute.

```php
BasicAttributesTrait::getClass( ): string
```






**Return Value:**
`string`  



---

### addData

Set a data-* attribute for passing values to scripts.

```php
BasicAttributesTrait::addData( string $name, mixed $data = '', $encode = false ): self
```






**Returns Self:** This method can be chained.



---

### getData

Gets a data-* attribute value by name.

```php
BasicAttributesTrait::getData( $name, $decode = false ): string
```






**Return Value:**
`string`  $name



---

### getAttributeString

Flattens an array of $name => $value pairs into an HTML attribues string name="value". Omits empty values and handles booleans.

```php
BasicAttributesTrait::getAttributeString( array|boolean $filter = false ): string
```






**Return Value:**
`string`  



---

