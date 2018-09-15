---
title: "ActionColumn"
weight: 0
class: \Gibbon\Tables\Columns\ActionColumn
generated: true
---

## ActionColumn 

ActionColumn



* Full name: \Gibbon\Tables\Columns\ActionColumn
* Parent class: \Gibbon\Tables\Columns\Column

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Creates a pre-defined column for grouped sets of action icons.</small>
- [addAction](#addaction)<small> — Adds a named action to the column and returns the new Action object.</small>
- [addParam](#addparam)<small> — Adds a URL parameter to the column that is passed to _each_ action.</small>
- [addParams](#addparams)<small> — Adds an array of URL parameters to be appended to the link URL.</small>
- [getWidth](#getwidth)<small> — Sets a column width based on the number of actions.</small>
- [getOutput](#getoutput)<small> — Iterates over and renders each action, passing in the row data and URL parameters.</small>




###### Inherited from Column
- [__construct]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#__construct" >}})
- [getLabel]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#getlabel" >}})
- [width]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#width" >}})
- [getWidth]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#getwidth" >}})
- [description]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#description" >}})
- [getDescription]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#getdescription" >}})
- [sortable]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#sortable" >}})
- [notSortable]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#notsortable" >}})
- [getSortable]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#getsortable" >}})
- [format]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#format" >}})
- [hasFormatter]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#hasformatter" >}})
- [modifyCells]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#modifycells" >}})
- [getCellModifiers]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#getcellmodifiers" >}})
- [getOutput]({{< ref "code/Gibbon/Tables/Columns/Column/index.md#getoutput" >}})

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

Creates a pre-defined column for grouped sets of action icons.

```php
ActionColumn::__construct( )
```









---

### addAction

Adds a named action to the column and returns the new Action object.

```php
ActionColumn::addAction( string $name, string $label = '' ): \Gibbon\Tables\Action
```






**Return Value:**
`\Gibbon\Tables\Action`  



---

### addParam

Adds a URL parameter to the column that is passed to _each_ action.

```php
ActionColumn::addParam( string $name, string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### addParams

Adds an array of URL parameters to be appended to the link URL.

```php
ActionColumn::addParams( array $values ): self
```






**Returns Self:** This method can be chained.



---

### getWidth

Sets a column width based on the number of actions.

```php
ActionColumn::getWidth( ): string
```






**Return Value:**
`string`  



---

### getOutput

Iterates over and renders each action, passing in the row data and URL parameters.

```php
ActionColumn::getOutput( array &$data = array() ): string
```






**Return Value:**
`string`  



---

