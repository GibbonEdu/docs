---
title: "Element"
weight: 0
class: \Gibbon\Forms\Layout\Element
generated: true
---

## Element <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr></i></small>

Element



* Full name: \Gibbon\Forms\Layout\Element
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a generic form element that only holds content.</small>
- [__call](#__call)
- [setContent](#setcontent)<small> — Set the content of the element, replaces existing content.</small>
- [prepend](#prepend)<small> — Add a string to the beginning of the current content.</small>
- [getPrepended](#getprepended)<small> — Get the currently prepended string.</small>
- [append](#append)<small> — Add a string to the end of the current content.</small>
- [getAppended](#getappended)<small> — Get the currently appended string.</small>
- [wrap](#wrap)<small> — Add strings before and after to wrap the current content.</small>
- [getOutput](#getoutput)<small> — Get the HTML output of the content element.</small>




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

Create a generic form element that only holds content.

```php
Element::__construct( string $content = '' )
```









---

### __call



```php
Element::__call( $name, $arguments )
```









---

### setContent

Set the content of the element, replaces existing content.

```php
Element::setContent( string $value ): self
```






**Returns Self:** This method can be chained.



---

### prepend

Add a string to the beginning of the current content.

```php
Element::prepend( string $value ): self
```






**Returns Self:** This method can be chained.



---

### getPrepended

Get the currently prepended string.

```php
Element::getPrepended( ): string
```






**Return Value:**
`string`  



---

### append

Add a string to the end of the current content.

```php
Element::append( string $value ): self
```






**Returns Self:** This method can be chained.



---

### getAppended

Get the currently appended string.

```php
Element::getAppended( ): string
```






**Return Value:**
`string`  



---

### wrap

Add strings before and after to wrap the current content.

```php
Element::wrap( $before, $after ): self
```






**Returns Self:** This method can be chained.



---

### getOutput

Get the HTML output of the content element.

```php
Element::getOutput( ): string
```






**Return Value:**
`string`  



---

