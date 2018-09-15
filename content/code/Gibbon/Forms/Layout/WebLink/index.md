---
title: "WebLink"
weight: 0
class: \Gibbon\Forms\Layout\WebLink
generated: true
---

## WebLink 

Element



* Full name: \Gibbon\Forms\Layout\WebLink
* Parent class: \Gibbon\Forms\Layout\Element

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a generic form element that only holds content.</small>
- [onClick](#onclick)
- [setURL](#seturl)<small> — Sets the link href attribute.</small>
- [getURL](#geturl)<small> — Gets the link href attribute.</small>
- [setTarget](#settarget)<small> — Sets the link target attribute.</small>
- [getTarget](#gettarget)<small> — Gets the link target attribute.</small>
- [setRel](#setrel)<small> — Sets the link rel attribute.</small>
- [getRel](#getrel)<small> — Gets the link rel attribute.</small>
- [addConfirmation](#addconfirmation)<small> — Add a confirmation message to display on click.</small>
- [addParam](#addparam)<small> — Adds a URL parameter to be appended to the link URL.</small>
- [addParams](#addparams)<small> — Adds an array of URL parameters to be appended to the link URL.</small>
- [addEmbeddedElement](#addembeddedelement)<small> — Adds an embedded element to output inside the link tag.</small>
- [setEmbeddedElements](#setembeddedelements)<small> — Sets an array of embedded elements to output inside the link tag.</small>
- [getEmbeddedElements](#getembeddedelements)<small> — Gets the output of all embedded elements as a string.</small>
- [getElement](#getelement)<small> — Gets the HTML output for this form element.</small>




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

Create a generic form element that only holds content.

```php
WebLink::__construct( string $content = '' )
```









---

### onClick



```php
WebLink::onClick( $value )
```









---

### setURL

Sets the link href attribute.

```php
WebLink::setURL( string $url ): self
```






**Returns Self:** This method can be chained.



---

### getURL

Gets the link href attribute.

```php
WebLink::getURL( ): string
```






**Return Value:**
`string`  



---

### setTarget

Sets the link target attribute.

```php
WebLink::setTarget( string $target ): self
```






**Returns Self:** This method can be chained.



---

### getTarget

Gets the link target attribute.

```php
WebLink::getTarget( ): string
```






**Return Value:**
`string`  



---

### setRel

Sets the link rel attribute.

```php
WebLink::setRel( string $rel ): self
```






**Returns Self:** This method can be chained.



---

### getRel

Gets the link rel attribute.

```php
WebLink::getRel( ): string
```






**Return Value:**
`string`  



---

### addConfirmation

Add a confirmation message to display on click.

```php
WebLink::addConfirmation( string $message ): self
```






**Returns Self:** This method can be chained.



---

### addParam

Adds a URL parameter to be appended to the link URL.

```php
WebLink::addParam( string $name, string $value ): self
```






**Returns Self:** This method can be chained.



---

### addParams

Adds an array of URL parameters to be appended to the link URL.

```php
WebLink::addParams( array $values ): self
```






**Returns Self:** This method can be chained.



---

### addEmbeddedElement

Adds an embedded element to output inside the link tag.

```php
WebLink::addEmbeddedElement( \Gibbon\Forms\Layout\OutputtableInterface $element ): self
```






**Returns Self:** This method can be chained.



---

### setEmbeddedElements

Sets an array of embedded elements to output inside the link tag.

```php
WebLink::setEmbeddedElements( $elements ): self
```






**Returns Self:** This method can be chained.



---

### getEmbeddedElements

Gets the output of all embedded elements as a string.

```php
WebLink::getEmbeddedElements( ): string
```






**Return Value:**
`string`  



---

### getElement

Gets the HTML output for this form element.

```php
WebLink::getElement( ): string
```






**Return Value:**
`string`  



---

