---
title: "Label"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Forms\Layout\Label
generated: true
---

## Label

Label



* Full name: \Gibbon\Forms\Layout\Label
* Parent class: \Gibbon\Forms\Layout\Element
* This class implements: \Gibbon\Forms\RowDependancyInterface

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a label element with a for attribute linking to an input.</small>
- [setRow](#setrow)<small> — Method for RowDependancyInterface to automatically set a reference to the parent Row object.</small>
- [getName](#getname)<small> — Overload the getName method to prepend a label- prefix.</small>
- [getID](#getid)<small> — Overload the getID method to prepend a label prefix.</small>
- [getLabelText](#getlabeltext)<small> — Get the label text.</small>
- [description](#description)<small> — Set the smaller description text to be output with the label.</small>
- [getDescription](#getdescription)<small> — Gets the current label description.</small>
- [getOutput](#getoutput)<small> — Get the HTML output of the label element.</small>




###### Inherited from Element
- [__construct]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#__construct" >}})
- [__call]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#__call" >}})
- [setContent]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#setcontent" >}})
- [prepend]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#prepend" >}})
- [getPrepended]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#getprepended" >}})
- [append]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#append" >}})
- [getAppended]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#getappended" >}})
- [wrap]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#wrap" >}})
- [getOutput]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#getoutput" >}})

###### Inherited from BasicAttributesTrait
- [setID]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setid" >}})
- [getID]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getid" >}})
- [setTitle]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#settitle" >}})
- [getTitle]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#gettitle" >}})
- [setClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setclass" >}})
- [addClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#addclass" >}})
- [removeClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#removeclass" >}})
- [getClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getclass" >}})
- [addData]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#adddata" >}})
- [getData]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getdata" >}})
- [getAttributeString]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getattributestring" >}})



### __construct

Create a label element with a for attribute linking to an input.

```php
Label::__construct( string $for, string $label )
```









---

### setRow

Method for RowDependancyInterface to automatically set a reference to the parent Row object.

```php
Label::setRow( object $row )
```









---

### getName

Overload the getName method to prepend a label- prefix.

```php
Label::getName( ): string
```






**Return Value:**
`string`  



---

### getID

Overload the getID method to prepend a label prefix.

```php
Label::getID( ): string
```






**Return Value:**
`string`  



---

### getLabelText

Get the label text.

```php
Label::getLabelText( ): string
```






**Return Value:**
`string`  



---

### description

Set the smaller description text to be output with the label.

```php
Label::description( string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### getDescription

Gets the current label description.

```php
Label::getDescription( ): string
```






**Return Value:**
`string`  



---

### getRequired

Get the required status of the input this label is linked to.

```php
Label::getRequired( ): boolean
```






**Return Value:**
`boolean`  



---

### getReadOnly

Get the readonly status of the input this label is linked to.

```php
Label::getReadOnly( ): boolean
```






**Return Value:**
`boolean`  



---

### getLabelContext

Allows an element to define a string that is appended to the current label description.

```php
Label::getLabelContext( ): boolean|string
```






**Return Value:**
`boolean|string`  



---

### getLinkedElement



```php
Label::getLinkedElement( )
```









---

### getOutput

Get the HTML output of the label element.

```php
Label::getOutput( ): string
```






**Return Value:**
`string`  



---

