---
title: "Form"
weight: 0
class: \Gibbon\Forms\Form
generated: true
---

## Form <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr></i></small>

Form



* Full name: \Gibbon\Forms\Form
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a form with a specific factory and renderer.</small>
- [create](#create)<small> — Create a form with the default factory and renderer.</small>
- [getFactory](#getfactory)<small> — Get the current factory.</small>
- [setFactory](#setfactory)<small> — Set the factory.</small>
- [getRenderer](#getrenderer)<small> — Get the current renderer.</small>
- [setRenderer](#setrenderer)<small> — Set the renderer.</small>
- [getMethod](#getmethod)<small> — Get the current HTTP method for this form (default: post)</small>
- [getAction](#getaction)<small> — Get the current action URL for the form.</small>
- [addRow](#addrow)<small> — Adds a Row object to the form and returns it.</small>
- [getRow](#getrow)<small> — Cet the last added Row object, null if none exist.</small>
- [getRows](#getrows)<small> — Get an array of all Row objects in the form.</small>
- [addHiddenValue](#addhiddenvalue)<small> — Adds an input type=hidden value to the form.</small>
- [getHiddenValues](#gethiddenvalues)<small> — Get an array of all hidden values.</small>
- [getAutocomplete](#getautocomplete)<small> — Get the value of the autocomplete HTML form attribute.</small>
- [setAutocomplete](#setautocomplete)<small> — Turn autocomplete for the form On or Off.</small>
- [addConfirmation](#addconfirmation)<small> — Add a confirmation message to display before form submission.</small>
- [addTrigger](#addtrigger)<small> — Adds a Trigger object that injects javascript to respond to form events.</small>
- [getTriggers](#gettriggers)<small> — Get an array of all Trigger objects.</small>
- [toggleVisibilityByClass](#togglevisibilitybyclass)<small> — Adds a visibility trigger to the form by class name.</small>
- [toggleVisibilityByID](#togglevisibilitybyid)<small> — Adds a visibility trigger to the form by element ID.</small>
- [loadAllValuesFrom](#loadallvaluesfrom)<small> — Loads an array of $key => $value pairs into any form elements with a matching name.</small>
- [loadStateFrom](#loadstatefrom)<small> — Loads the state for several form elements by calling $method with values from $data.</small>
- [getOutput](#getoutput)<small> — Renders the form to HTML.</small>




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

Create a form with a specific factory and renderer.

```php
Form::__construct( \Gibbon\Forms\FormFactoryInterface $factory, \Gibbon\Forms\FormRendererInterface $renderer, string $action, string $method )
```









---

### create

Create a form with the default factory and renderer.

```php
static Form::create( string $id, string $action, string $method = 'post', string $class = 'smallIntBorder fullWidth standardForm' ): object
```



* This method is **static**.


**Return Value:**
`object`  Form object



---

### getFactory

Get the current factory.

```php
Form::getFactory( ): object
```






**Return Value:**
`object`  FormFactoryInterface



---

### setFactory

Set the factory.

```php
Form::setFactory( \Gibbon\Forms\FormFactoryInterface $factory )
```









---

### getRenderer

Get the current renderer.

```php
Form::getRenderer( ): object
```






**Return Value:**
`object`  FormRendererInterface



---

### setRenderer

Set the renderer.

```php
Form::setRenderer( \Gibbon\Forms\FormRendererInterface $renderer )
```









---

### getMethod

Get the current HTTP method for this form (default: post)

```php
Form::getMethod( ): string
```






**Return Value:**
`string`  



---

### getAction

Get the current action URL for the form.

```php
Form::getAction( ): string
```






**Return Value:**
`string`  



---

### addRow

Adds a Row object to the form and returns it.

```php
Form::addRow( string $id = '' ): object
```






**Return Value:**
`object`  Row



---

### getRow

Cet the last added Row object, null if none exist.

```php
Form::getRow( ): object|null
```






**Return Value:**
`object|null`  



---

### getRows

Get an array of all Row objects in the form.

```php
Form::getRows( ): array
```






**Return Value:**
`array`  



---

### addHiddenValue

Adds an input type=hidden value to the form.

```php
Form::addHiddenValue( string $name, string $value )
```









---

### getHiddenValues

Get an array of all hidden values.

```php
Form::getHiddenValues( ): array
```






**Return Value:**
`array`  



---

### getAutocomplete

Get the value of the autocomplete HTML form attribute.

```php
Form::getAutocomplete( ): string
```






**Return Value:**
`string`  



---

### setAutocomplete

Turn autocomplete for the form On or Off.

```php
Form::setAutocomplete( string $value ): self
```






**Returns Self:** This method can be chained.



---

### addConfirmation

Add a confirmation message to display before form submission.

```php
Form::addConfirmation( string $message ): self
```






**Returns Self:** This method can be chained.



---

### addTrigger

Adds a Trigger object that injects javascript to respond to form events.

```php
Form::addTrigger( string $selector, object $trigger )
```









---

### getTriggers

Get an array of all Trigger objects.

```php
Form::getTriggers( ): array
```






**Return Value:**
`array`  



---

### toggleVisibilityByClass

Adds a visibility trigger to the form by class name.

```php
Form::toggleVisibilityByClass( string $class ): object
```






**Return Value:**
`object`  Trigger



---

### toggleVisibilityByID

Adds a visibility trigger to the form by element ID.

```php
Form::toggleVisibilityByID( string $id ): object
```






**Return Value:**
`object`  Trigger



---

### loadAllValuesFrom

Loads an array of $key => $value pairs into any form elements with a matching name.

```php
Form::loadAllValuesFrom( &$data ): self
```






**Returns Self:** This method can be chained.



---

### loadStateFrom

Loads the state for several form elements by calling $method with values from $data.

```php
Form::loadStateFrom( string $method, array &$data ): void
```









---

### getOutput

Renders the form to HTML.

```php
Form::getOutput( ): string
```






**Return Value:**
`string`  



---

