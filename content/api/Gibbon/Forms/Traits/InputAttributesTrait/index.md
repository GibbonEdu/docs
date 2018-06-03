---
title: "InputAttributesTrait"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Forms\Traits\InputAttributesTrait
generated: true
---

## InputAttributesTrait

Basic HTML Input Attributes (name, type, value, required)



* Full name: \Gibbon\Forms\Traits\InputAttributesTrait

{{< api-example >}} 



### Methods

- [setName](#setname)<small> — Set the input's name attribute.</small>
- [getName](#getname)<small> — Gets the input's name attribute.</small>
- [setValue](#setvalue)<small> — Set the input's value.</small>
- [getValue](#getvalue)<small> — Gets the input's value.</small>
- [loadFrom](#loadfrom)<small> — Sets the input's value if the name matches a key in the provided data set.</small>
- [loadFromCSV](#loadfromcsv)<small> — Sets the input's array value from a CSV string if the name matches a key in the provided data set.</small>
- [setSize](#setsize)<small> — Set the input's size attribute.</small>
- [getSize](#getsize)<small> — Gets the input's size attribute.</small>
- [isDisabled](#isdisabled)<small> — Set the input to disabled.</small>
- [setDisabled](#setdisabled)<small> — Set the input's disabled attribute.</small>
- [getDisabled](#getdisabled)<small> — Gets the input's disabled attribute.</small>
- [isRequired](#isrequired)<small> — Set the input to required.</small>
- [setRequired](#setrequired)<small> — Set if the input is required.</small>
- [getRequired](#getrequired)<small> — Gets the input's required attribute.</small>
- [readonly](#readonly)<small> — Set the input to readonly.</small>
- [setReadonly](#setreadonly)<small> — Set the input's readonly attribute.</small>
- [getReadonly](#getreadonly)<small> — Gets the input's readonly attribute.</small>
- [setTabIndex](#settabindex)<small> — Set the input's tabindex attribute.</small>
- [getTabIndex](#gettabindex)<small> — Gets the input's tabindex attribute.</small>




### setName

Set the input's name attribute.

```php
InputAttributesTrait::setName( string $name = '' ): self
```






**Returns Self:** This method can be chained.



---

### getName

Gets the input's name attribute.

```php
InputAttributesTrait::getName( ): string
```






**Return Value:**
`string`  



---

### setValue

Set the input's value.

```php
InputAttributesTrait::setValue( string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### getValue

Gets the input's value.

```php
InputAttributesTrait::getValue( ): mixed
```






**Return Value:**
`mixed`  



---

### loadFrom

Sets the input's value if the name matches a key in the provided data set.

```php
InputAttributesTrait::loadFrom( &$data )
```









---

### loadFromCSV

Sets the input's array value from a CSV string if the name matches a key in the provided data set.

```php
InputAttributesTrait::loadFromCSV( &$data )
```









---

### setSize

Set the input's size attribute.

```php
InputAttributesTrait::setSize( string|integer $size = '' ): self
```






**Returns Self:** This method can be chained.



---

### getSize

Gets the input's size attribute.

```php
InputAttributesTrait::getSize( ): string|integer
```






**Return Value:**
`string|integer`  



---

### isDisabled

Set the input to disabled.

```php
InputAttributesTrait::isDisabled( $disabled = true ): self
```






**Returns Self:** This method can be chained.



---

### setDisabled

Set the input's disabled attribute.

```php
InputAttributesTrait::setDisabled( boolean $disabled ): self
```






**Returns Self:** This method can be chained.



---

### getDisabled

Gets the input's disabled attribute.

```php
InputAttributesTrait::getDisabled( ): boolean
```






**Return Value:**
`boolean`  



---

### isRequired

Set the input to required.

```php
InputAttributesTrait::isRequired( $required = true ): self
```






**Returns Self:** This method can be chained.



---

### setRequired

Set if the input is required.

```php
InputAttributesTrait::setRequired( boolean $required ): self
```






**Returns Self:** This method can be chained.



---

### getRequired

Gets the input's required attribute.

```php
InputAttributesTrait::getRequired( ): boolean
```






**Return Value:**
`boolean`  



---

### readonly

Set the input to readonly.

```php
InputAttributesTrait::readonly( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### setReadonly

Set the input's readonly attribute.

```php
InputAttributesTrait::setReadonly( string $value ): self
```






**Returns Self:** This method can be chained.



---

### getReadonly

Gets the input's readonly attribute.

```php
InputAttributesTrait::getReadonly( ): boolean
```






**Return Value:**
`boolean`  



---

### setTabIndex

Set the input's tabindex attribute.

```php
InputAttributesTrait::setTabIndex( string $value ): self
```






**Returns Self:** This method can be chained.



---

### getTabIndex

Gets the input's tabindex attribute.

```php
InputAttributesTrait::getTabIndex( ): integer
```






**Return Value:**
`integer`  



---

