---
title: "MultiSelect"
weight: 0
class: \Gibbon\Forms\Input\MultiSelect
generated: true
---

## MultiSelect

Multi Select



* Full name: \Gibbon\Forms\Input\MultiSelect
* This class implements: \Gibbon\Forms\OutputableInterface, \Gibbon\Forms\ValidatableInterface

{{< api-example >}} 



### Methods

- [__construct](#__construct)
- [getID](#getid)
- [addSortableAttribute](#addsortableattribute)
- [setSize](#setsize)
- [isRequired](#isrequired)<small> — Set the multi-select to required.</small>
- [getRequired](#getrequired)<small> — Gets the multi-select's required state.</small>
- [source](#source)
- [destination](#destination)
- [getOutput](#getoutput)
- [addValidation](#addvalidation)<small> — Add a LiveValidation setting to the right-hand select by type (eg: Validate.Presence)</small>
- [getValidationOutput](#getvalidationoutput)<small> — Get the combined validation output from the right-hand select.</small>
- [getClass](#getclass)




### __construct



```php
MultiSelect::__construct( \Gibbon\Forms\FormFactoryInterface &$factory, $name )
```









---

### getID



```php
MultiSelect::getID( )
```









---

### addSortableAttribute



```php
MultiSelect::addSortableAttribute( $attribute, $values )
```









---

### setSize



```php
MultiSelect::setSize( $size = 8 )
```









---

### isRequired

Set the multi-select to required.

```php
MultiSelect::isRequired( $required = true ): self
```






**Returns Self:** This method can be chained.



---

### getRequired

Gets the multi-select's required state.

```php
MultiSelect::getRequired( ): boolean
```






**Return Value:**
`boolean`  



---

### source



```php
MultiSelect::source( )
```









---

### destination



```php
MultiSelect::destination( )
```









---

### getOutput



```php
MultiSelect::getOutput( )
```









---

### addValidation

Add a LiveValidation setting to the right-hand select by type (eg: Validate.Presence)

```php
MultiSelect::addValidation( string $type, string $params = '' )
```









---

### getValidationOutput

Get the combined validation output from the right-hand select.

```php
MultiSelect::getValidationOutput( ): string
```






**Return Value:**
`string`  



---

### getClass



```php
MultiSelect::getClass( )
```









---

