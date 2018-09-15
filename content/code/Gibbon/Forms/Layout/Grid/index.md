---
title: "Grid"
weight: 0
class: \Gibbon\Forms\Layout\Grid
generated: true
---

## Grid <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr>, <abbr title="\Gibbon\Forms\ValidatableInterface">ValidatableInterface</abbr></i></small>

Grid



* Full name: \Gibbon\Forms\Layout\Grid
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create an element that displays a collection of elements in a flexible grid,</small>
- [setColumns](#setcolumns)<small> — Sets the number of columns wide to render the grid.</small>
- [addCell](#addcell)<small> — Add a cell to the internal collection and return the resulting object.</small>
- [getElements](#getelements)<small> — Get all cells in the grid.</small>
- [getOutput](#getoutput)<small> — Get the HTML output of the element. Iterate over elements to build a grid.</small>
- [addValidation](#addvalidation)<small> — Dead-end stub for interface: grids cannot validate.</small>
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

Create an element that displays a collection of elements in a flexible grid,

```php
Grid::__construct( \Gibbon\Forms\FormFactoryInterface $factory, string $id = '', $columns = 1 )
```









---

### setColumns

Sets the number of columns wide to render the grid.

```php
Grid::setColumns( integer $columns ): self
```






**Returns Self:** This method can be chained.



---

### addCell

Add a cell to the internal collection and return the resulting object.

```php
Grid::addCell( string $id = '' ): object
```






**Return Value:**
`object`  Column



---

### getElements

Get all cells in the grid.

```php
Grid::getElements( ): array
```






**Return Value:**
`array`  



---

### getOutput

Get the HTML output of the element. Iterate over elements to build a grid.

```php
Grid::getOutput( ): string
```






**Return Value:**
`string`  



---

### addValidation

Dead-end stub for interface: grids cannot validate.

```php
Grid::addValidation( string $name ): self
```






**Returns Self:** This method can be chained.



---

### getValidationOutput

Iterate over each element in the collection and get the combined validation output.

```php
Grid::getValidationOutput( ): string
```






**Return Value:**
`string`  



---

### loadFrom

Pass an array of $key => $value pairs into each element in the collection.

```php
Grid::loadFrom( &$data ): self
```






**Returns Self:** This method can be chained.



---

