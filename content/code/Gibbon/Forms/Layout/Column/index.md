---
title: "Column"
weight: 0
class: \Gibbon\Forms\Layout\Column
generated: true
---

## Column <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr>, <abbr title="\Gibbon\Forms\ValidatableInterface">ValidatableInterface</abbr></i></small>

Holds a collection of form elements to be output vertically.



* Full name: \Gibbon\Forms\Layout\Column
* Parent class: \Gibbon\Forms\Layout\Row
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct a column with access to a specific factory.</small>
- [getRequired](#getrequired)<small> — Gets the required attribute of the internal element matching the column's ID.</small>
- [getLabelContext](#getlabelcontext)
- [getOutput](#getoutput)<small> — Iterate over each element in the collection and concatenate the output.</small>
- [addValidation](#addvalidation)<small> — Dead-end stub for interface: columns cannot validate.</small>
- [getValidationOutput](#getvalidationoutput)<small> — Iterate over each element in the collection and get the combined validation output.</small>




###### Inherited from Row
- [__construct]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#__construct" >}})
- [__call]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#__call" >}})
- [onlyIf]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#onlyif" >}})
- [addElement]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#addelement" >}})
- [getElement]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#getelement" >}})
- [getElements]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#getelements" >}})
- [getElementCount]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#getelementcount" >}})
- [isLastElement]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#islastelement" >}})
- [loadFrom]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#loadfrom" >}})
- [loadState]({{< ref "code/Gibbon/Forms/Layout/Row/index.md#loadstate" >}})

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

