---
title: "Row"
weight: 0
class: \Gibbon\Forms\Layout\Row
generated: true
---

## Row 

Holds a collection of form elements to be output horizontally.



* Full name: \Gibbon\Forms\Layout\Row

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct a row with access to a specific factory.</small>
- [__call](#__call)<small> — Invoke factory method for creating elements when an "add" method is called on this row.</small>
- [onlyIf](#onlyif)<small> — Allows a conditional to be chained into the form row elements, rather than wrapping the whole section in an if statement.</small>
- [addElement](#addelement)<small> — Adds an outputtable element to the row's internal collection.</small>
- [getElement](#getelement)<small> — Get a row element by ID</small>
- [getElements](#getelements)<small> — Get an array of all row elements.</small>
- [getElementCount](#getelementcount)<small> — Count the elements array.</small>
- [isLastElement](#islastelement)<small> — Determine of the supplied Eelement object is the last element in the collection.</small>
- [loadFrom](#loadfrom)<small> — Pass an array of $key => $value pairs into each element in the collection.</small>
- [loadState](#loadstate)<small> — Load the state of several fields at once by calling $method on each element present in $data by key, passing in the value of $data.</small>




###### Inherited from BasicAttributesTrait
- [setID]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setid" >}})
- [getID]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getid" >}})
- [setTitle]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#settitle" >}})
- [getTitle]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#gettitle" >}})
- [setClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setclass" >}})
- [addClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#addclass" >}})
- [removeClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#removeclass" >}})
- [getClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getclass" >}})
- [addData]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#adddata" >}})
- [getData]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getdata" >}})
- [getAttributeString]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getattributestring" >}})



### __construct

Construct a row with access to a specific factory.

```php
Row::__construct( \Gibbon\Forms\FormFactoryInterface $factory, string $id = '' )
```









---

### __call

Invoke factory method for creating elements when an "add" method is called on this row.

```php
Row::__call( string $function, array $args ): object
```






**Return Value:**
`object`  Element



---

### onlyIf

Allows a conditional to be chained into the form row elements, rather than wrapping the whole section in an if statement.

```php
Row::onlyIf( boolean $conditional ): object
```






**Return Value:**
`object`  OutputableInterface



---

### addElement

Adds an outputtable element to the row's internal collection.

```php
Row::addElement( \Gibbon\Forms\OutputableInterface $element )
```









---

### getElement

Get a row element by ID

```php
Row::getElement( string $id = '' ): object
```






**Return Value:**
`object`  Element



---

### getElements

Get an array of all row elements.

```php
Row::getElements( ): array
```






**Return Value:**
`array`  



---

### getElementCount

Count the elements array.

```php
Row::getElementCount( ): integer
```






**Return Value:**
`integer`  



---

### isLastElement

Determine of the supplied Eelement object is the last element in the collection.

```php
Row::isLastElement( object $element ): boolean
```






**Return Value:**
`boolean`  



---

### loadFrom

Pass an array of $key => $value pairs into each element in the collection.

```php
Row::loadFrom( &$data ): self
```






**Returns Self:** This method can be chained.



---

### loadState

Load the state of several fields at once by calling $method on each element present in $data by key, passing in the value of $data.

```php
Row::loadState( string $method, array &$data, $extract = true ): self
```






**Returns Self:** This method can be chained.



---

