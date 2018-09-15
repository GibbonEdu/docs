---
title: "Table"
weight: 0
class: \Gibbon\Forms\Layout\Table
generated: true
---

## Table <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr>, <abbr title="\Gibbon\Forms\ValidatableInterface">ValidatableInterface</abbr></i></small>

Column



* Full name: \Gibbon\Forms\Layout\Table
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create an element that holds an internal collection of rows and optional header.</small>
- [addHeaderRow](#addheaderrow)<small> — Add a header to the internal collection and return the resulting Row object.</small>
- [addRow](#addrow)<small> — Add a row to the internal collection and return the resulting object.</small>
- [getHeaders](#getheaders)<small> — Get all rows defined as headers.</small>
- [getElements](#getelements)<small> — Get all rows in the table.</small>
- [getOutput](#getoutput)<small> — Get the HTML output of the table element. Iterate over headers and rows to build a table.</small>
- [addValidation](#addvalidation)<small> — Dead-end stub for interface: columns cannot validate.</small>
- [getValidationOutput](#getvalidationoutput)<small> — Iterate over each element in the collection and get the combined validation output.</small>
- [loadFrom](#loadfrom)<small> — Pass an array of $key => $value pairs into each element in the collection.</small>




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

Create an element that holds an internal collection of rows and optional header.

```php
Table::__construct( \Gibbon\Forms\FormFactoryInterface $factory, string $id = '' )
```









---

### addHeaderRow

Add a header to the internal collection and return the resulting Row object.

```php
Table::addHeaderRow( string $id = '' ): object
```






**Return Value:**
`object`  Row



---

### addRow

Add a row to the internal collection and return the resulting object.

```php
Table::addRow( string $id = '' ): object
```






**Return Value:**
`object`  Row



---

### getHeaders

Get all rows defined as headers.

```php
Table::getHeaders( ): array
```






**Return Value:**
`array`  



---

### getElements

Get all rows in the table.

```php
Table::getElements( ): array
```






**Return Value:**
`array`  



---

### getOutput

Get the HTML output of the table element. Iterate over headers and rows to build a table.

```php
Table::getOutput( ): string
```






**Return Value:**
`string`  



---

### addValidation

Dead-end stub for interface: columns cannot validate.

```php
Table::addValidation( string $name ): self
```






**Returns Self:** This method can be chained.



---

### getValidationOutput

Iterate over each element in the collection and get the combined validation output.

```php
Table::getValidationOutput( ): string
```






**Return Value:**
`string`  



---

### loadFrom

Pass an array of $key => $value pairs into each element in the collection.

```php
Table::loadFrom( &$data ): self
```






**Returns Self:** This method can be chained.



---

