---
title: "Label"
weight: 0
class: \Gibbon\Forms\Layout\Label
generated: true
---

## Label <small><i>implements <abbr title="\Gibbon\Forms\RowDependancyInterface">RowDependancyInterface</abbr></i></small>

Label



* Full name: \Gibbon\Forms\Layout\Label
* Parent class: \Gibbon\Forms\Layout\Element
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


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
- [__construct]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#__construct" >}})
- [__call]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#__call" >}})
- [setContent]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#setcontent" >}})
- [prepend]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#prepend" >}})
- [getPrepended]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#getprepended" >}})
- [append]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#append" >}})
- [getAppended]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#getappended" >}})
- [wrap]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#wrap" >}})
- [getOutput]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#getoutput" >}})

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

### getOutput

Get the HTML output of the label element.

```php
Label::getOutput( ): string
```






**Return Value:**
`string`  



---

