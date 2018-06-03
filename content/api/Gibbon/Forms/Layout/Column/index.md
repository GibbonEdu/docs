---
title: "Column"
weight: 0
class: \Gibbon\Forms\Layout\Column
generated: true
---

## Column

Holds a collection of form elements to be output vertically.



* Full name: \Gibbon\Forms\Layout\Column
* Parent class: \Gibbon\Forms\Layout\Row
* This class implements: \Gibbon\Forms\OutputableInterface, \Gibbon\Forms\ValidatableInterface

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct a column with access to a specific factory.</small>
- [getRequired](#getrequired)<small> — Gets the required attribute of the internal element matching the column's ID.</small>
- [getLabelContext](#getlabelcontext)
- [getOutput](#getoutput)<small> — Iterate over each element in the collection and concatenate the output.</small>
- [addValidation](#addvalidation)<small> — Dead-end stub for interface: columns cannot validate.</small>
- [getValidationOutput](#getvalidationoutput)<small> — Iterate over each element in the collection and get the combined validation output.</small>




###### Inherited from Row
- [__construct]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#__construct" >}})
- [__call]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#__call" >}})
- [onlyIf]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#onlyif" >}})
- [addElement]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#addelement" >}})
- [getElement]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#getelement" >}})
- [getElements]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#getelements" >}})
- [getElementCount]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#getelementcount" >}})
- [isLastElement]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#islastelement" >}})
- [loadFrom]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#loadfrom" >}})
- [loadState]({{< ref "api/Gibbon/Forms/Layout/Row/index.md#loadstate" >}})

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

Construct a column with access to a specific factory.

```php
Column::__construct( \Gibbon\Forms\FormFactoryInterface $factory, string $id = '' )
```









---

### getRequired

Gets the required attribute of the internal element matching the column's ID.

```php
Column::getRequired( ): boolean
```






**Return Value:**
`boolean`  



---

### getLabelContext



```php
Column::getLabelContext( $label )
```









---

### getOutput

Iterate over each element in the collection and concatenate the output.

```php
Column::getOutput( ): string
```






**Return Value:**
`string`  



---

### addValidation

Dead-end stub for interface: columns cannot validate.

```php
Column::addValidation( string $name ): self
```






**Returns Self:** This method can be chained.



---

### getValidationOutput

Iterate over each element in the collection and get the combined validation output.

```php
Column::getValidationOutput( ): string
```






**Return Value:**
`string`  



---

### getContainerClass

Gets the classname for the div container inside the column.

```php
Column::getContainerClass( \Gibbon\Forms\Layout\Element $element ): string
```






**Return Value:**
`string`  



---

