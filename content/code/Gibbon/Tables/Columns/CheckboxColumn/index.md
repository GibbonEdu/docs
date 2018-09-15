---
title: "CheckboxColumn"
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

