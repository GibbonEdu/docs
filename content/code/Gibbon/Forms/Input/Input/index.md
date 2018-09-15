---
title: "Input"
weight: 0
class: \Gibbon\Forms\Input\Input
generated: true
---

## Input <small><i>implements <abbr title="\Gibbon\Forms\ValidatableInterface">ValidatableInterface</abbr>, <abbr title="\Gibbon\Forms\RowDependancyInterface">RowDependancyInterface</abbr></i></small>

Abstract base class for form input elements.



* Full name: \Gibbon\Forms\Input\Input
* Parent class: \Gibbon\Forms\Layout\Element
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create an HTML form input.</small>
- [setRow](#setrow)<small> — Method for RowDependancyInterface to automatically set a reference to the parent Row object.</small>
- [addValidationOption](#addvalidationoption)<small> — Add a LiveValidation option to the javascript object (eg: onlyOnSubmit: true, onlyOnBlur: true)</small>
- [addValidation](#addvalidation)<small> — Add a LiveValidation setting to this element by type (eg: Validate.Presence)</small>
- [isValidatable](#isvalidatable)<small> — Can this input be validated? Prevent LiveValidation for elements with no ID, and readonly inputs.</small>
- [hasValidation](#hasvalidation)<small> — An input has validation if it's validatable and either required or has defined validations.</small>
- [getValidationAsJSON](#getvalidationasjson)<small> — Get a stringified json object of the current validations.</small>
- [getValidationOutput](#getvalidationoutput)<small> — Gets the HTML output for this form element.</small>




###### Inherited from InputAttributesTrait
- [setName]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setname" >}})
- [getName]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getname" >}})
- [setValue]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setvalue" >}})
- [getValue]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getvalue" >}})
- [loadFrom]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfrom" >}})
- [loadFromCSV]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfromcsv" >}})
- [setSize]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setsize" >}})
- [getSize]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getsize" >}})
- [isDisabled]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isdisabled" >}})
- [setDisabled]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setdisabled" >}})
- [getDisabled]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getdisabled" >}})
- [isRequired]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isrequired" >}})
- [setRequired]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setrequired" >}})
- [getRequired]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getrequired" >}})
- [readonly]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#readonly" >}})
- [setReadonly]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setreadonly" >}})
- [getReadonly]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getreadonly" >}})
- [setTabIndex]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#settabindex" >}})
- [getTabIndex]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#gettabindex" >}})

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

Create an HTML form input.

```php
Input::__construct( string $name )
```









---

### setRow

Method for RowDependancyInterface to automatically set a reference to the parent Row object.

```php
Input::setRow( object $row )
```









---

### addValidationOption

Add a LiveValidation option to the javascript object (eg: onlyOnSubmit: true, onlyOnBlur: true)

```php
Input::addValidationOption( string $option = '' )
```









---

### addValidation

Add a LiveValidation setting to this element by type (eg: Validate.Presence)

```php
Input::addValidation( string $type, string $params = '' )
```









---

### isValidatable

Can this input be validated? Prevent LiveValidation for elements with no ID, and readonly inputs.

```php
Input::isValidatable( ): boolean
```






**Return Value:**
`boolean`  



---

### hasValidation

An input has validation if it's validatable and either required or has defined validations.

```php
Input::hasValidation( ): boolean
```






**Return Value:**
`boolean`  



---

### getValidationAsJSON

Get a stringified json object of the current validations.

```php
Input::getValidationAsJSON( ): string
```






**Return Value:**
`string`  



---

### getValidationOutput

Gets the HTML output for this form element.

```php
Input::getValidationOutput( ): string
```






**Return Value:**
`string`  



---

