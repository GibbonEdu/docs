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

