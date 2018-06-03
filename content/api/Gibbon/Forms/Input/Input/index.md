---
title: "Input"
weight: 0
class: \Gibbon\Forms\Input\Input
generated: true
---

## Input

Abstract base class for form input elements.



* Full name: \Gibbon\Forms\Input\Input
* Parent class: \Gibbon\Forms\Layout\Element
* This class implements: \Gibbon\Forms\ValidatableInterface, \Gibbon\Forms\RowDependancyInterface

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
- [setName]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setname" >}})
- [getName]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getname" >}})
- [setValue]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setvalue" >}})
- [getValue]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getvalue" >}})
- [loadFrom]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfrom" >}})
- [loadFromCSV]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfromcsv" >}})
- [setSize]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setsize" >}})
- [getSize]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getsize" >}})
- [isDisabled]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isdisabled" >}})
- [setDisabled]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setdisabled" >}})
- [getDisabled]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getdisabled" >}})
- [isRequired]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isrequired" >}})
- [setRequired]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setrequired" >}})
- [getRequired]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getrequired" >}})
- [readonly]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#readonly" >}})
- [setReadonly]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setreadonly" >}})
- [getReadonly]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getreadonly" >}})
- [setTabIndex]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#settabindex" >}})
- [getTabIndex]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#gettabindex" >}})

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

### buildValidations

Get the array of current validations for this input.

```php
Input::buildValidations( ): array
```






**Return Value:**
`array`  



---

