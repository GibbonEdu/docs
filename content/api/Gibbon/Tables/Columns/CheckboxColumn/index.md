---
title: "CheckboxColumn"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Tables\Columns\CheckboxColumn
generated: true
---

## CheckboxColumn

CheckboxColumn



* Full name: \Gibbon\Tables\Columns\CheckboxColumn
* Parent class: \Gibbon\Tables\Columns\Column

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Creates a pre-defined column for bulk-action checkboxes.</small>
- [getLabel](#getlabel)<small> — Overrides the label with a checkall checkbox.</small>
- [getOutput](#getoutput)<small> — Renders a bulk-action checkbox, grabbing the value by key from $data.</small>




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

Creates a pre-defined column for bulk-action checkboxes.

```php
CheckboxColumn::__construct( $id, $key = null )
```









---

### getLabel

Overrides the label with a checkall checkbox.

```php
CheckboxColumn::getLabel( ): string
```






**Return Value:**
`string`  



---

### getOutput

Renders a bulk-action checkbox, grabbing the value by key from $data.

```php
CheckboxColumn::getOutput( array &$data = array() ): string
```






**Return Value:**
`string`  



---

