---
title: "Action"
weight: 0
class: \Gibbon\Tables\Action
generated: true
---

## Action 

Action



* Full name: \Gibbon\Tables\Action
* Parent class: \Gibbon\Forms\Layout\WebLink

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a generic form element that only holds content.</small>
- [setURL](#seturl)<small> — Sets the internal url for this action.</small>
- [setLabel](#setlabel)<small> — Sets the action label, displayed on hover.</small>
- [getLabel](#getlabel)<small> — Gets the action label.</small>
- [displayLabel](#displaylabel)<small> — Display the action label as text next to the icon.</small>
- [setIcon](#seticon)<small> — Set the icon name, without any path or filetype</small>
- [getIcon](#geticon)<small> — Gets the action icon.</small>
- [isModal](#ismodal)<small> — Load the action URL in a modal window rather than loading a new page. Commonly used for delete actions.</small>
- [isDirect](#isdirect)<small> — The action link will not prepend an index.php?q=</small>
- [getOutput](#getoutput)<small> — Renders the action as an icon and url, adding in any nessesary url parameters.</small>




###### Inherited from Element
- [__construct]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#__construct" >}})

###### Inherited from WebLink
- [onClick]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#onclick" >}})
- [setURL]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#seturl" >}})
- [getURL]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#geturl" >}})
- [setTarget]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#settarget" >}})
- [getTarget]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#gettarget" >}})
- [setRel]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#setrel" >}})
- [getRel]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#getrel" >}})
- [addConfirmation]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#addconfirmation" >}})
- [addParam]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#addparam" >}})
- [addParams]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#addparams" >}})
- [addEmbeddedElement]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#addembeddedelement" >}})
- [setEmbeddedElements]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#setembeddedelements" >}})
- [getEmbeddedElements]({{< ref "code/Gibbon/Forms/Layout/WebLink/index.md#getembeddedelements" >}})

###### Inherited from Element
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
Action::__construct( $name, $label = '' )
```









---

### setURL

Sets the internal url for this action.

```php
Action::setURL( string $url ): self
```






**Returns Self:** This method can be chained.



---

### setLabel

Sets the action label, displayed on hover.

```php
Action::setLabel( string $label ): self
```






**Returns Self:** This method can be chained.



---

### getLabel

Gets the action label.

```php
Action::getLabel( ): string
```






**Return Value:**
`string`  



---

### displayLabel

Display the action label as text next to the icon.

```php
Action::displayLabel( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### setIcon

Set the icon name, without any path or filetype

```php
Action::setIcon( string $icon ): self
```






**Returns Self:** This method can be chained.



---

### getIcon

Gets the action icon.

```php
Action::getIcon( ): string
```






**Return Value:**
`string`  



---

### isModal

Load the action URL in a modal window rather than loading a new page. Commonly used for delete actions.

```php
Action::isModal( $width = 650, $height = 650 ): self
```






**Returns Self:** This method can be chained.



---

### isDirect

The action link will not prepend an index.php?q=

```php
Action::isDirect( ): self
```






**Returns Self:** This method can be chained.



---

### getOutput

Renders the action as an icon and url, adding in any nessesary url parameters.

```php
Action::getOutput( array &$data = array(), array $params = array() ): string
```






**Return Value:**
`string`  



---

