---
title: "ExpandableColumn"
weight: 0
class: \Gibbon\Tables\Columns\ExpandableColumn
generated: true
---

## ExpandableColumn

ExpandableColumn



* Full name: \Gibbon\Tables\Columns\ExpandableColumn
* Parent class: \Gibbon\Tables\Columns\Column

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Creates a pre-defined column for expanding rows with extra data.</small>
- [getLabel](#getlabel)<small> — Overrides the label.</small>
- [getOutput](#getoutput)<small> — Expander arrow.</small>
- [getExpandedContent](#getexpandedcontent)<small> — Output the content of the expanded row. Can be set by the column ID, or with the column's formatter callable.</small>




###### Inherited from Column
- [__construct]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#__construct" >}})
- [getLabel]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#getlabel" >}})
- [width]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#width" >}})
- [getWidth]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#getwidth" >}})
- [description]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#description" >}})
- [getDescription]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#getdescription" >}})
- [sortable]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#sortable" >}})
- [notSortable]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#notsortable" >}})
- [getSortable]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#getsortable" >}})
- [format]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#format" >}})
- [hasFormatter]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#hasformatter" >}})
- [modifyCells]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#modifycells" >}})
- [getCellModifiers]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#getcellmodifiers" >}})
- [getOutput]({{< ref "api/Gibbon/Tables/Columns/Column/index.md#getoutput" >}})

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

Creates a pre-defined column for expanding rows with extra data.

```php
ExpandableColumn::__construct( $id, \Gibbon\Tables\DataTable $table )
```









---

### getLabel

Overrides the label.

```php
ExpandableColumn::getLabel( ): string
```






**Return Value:**
`string`  



---

### getOutput

Expander arrow.

```php
ExpandableColumn::getOutput( array &$data = array() ): string
```






**Return Value:**
`string`  



---

### getExpandedContent

Output the content of the expanded row. Can be set by the column ID, or with the column's formatter callable.

```php
ExpandableColumn::getExpandedContent( array &$data = array(), integer $columnCount ): string
```






**Return Value:**
`string`  



---

