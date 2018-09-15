---
title: "Column"
weight: 0
class: \Gibbon\Tables\Columns\Column
generated: true
---

## Column 

Column



* Full name: \Gibbon\Tables\Columns\Column

{{< api-example >}} 



### Methods

- [__construct](#__construct)
- [getLabel](#getlabel)<small> — Gets the column label, often displayed in the table heading.</small>
- [width](#width)<small> — Sets the column width.</small>
- [getWidth](#getwidth)<small> — Gets the column width.</small>
- [description](#description)<small> — Sets the column description, often displayed as smaller text below the label.</small>
- [getDescription](#getdescription)<small> — Gets the column description, often displayed as smaller text below the label.</small>
- [sortable](#sortable)<small> — Sets the names of table columns to sort on. Blank defaults to the column name, false disables sorting.</small>
- [notSortable](#notsortable)<small> — Disables sorting for this column.</small>
- [getSortable](#getsortable)<small> — Gets the name of table columns to sort on, or false if sorting is disabled.</small>
- [format](#format)<small> — Sets the formatter as a callable, which should accept a $data param of row data.</small>
- [hasFormatter](#hasformatter)<small> — Does the column have a valid formatter?</small>
- [modifyCells](#modifycells)<small> — Set a callable function that can modify each cell and/or row based on that row's data.</small>
- [getCellModifiers](#getcellmodifiers)<small> — Get the array of column logic callables.</small>
- [getOutput](#getoutput)<small> — Renders the column by either passing the row $data to a formatter,
or grabbing the row data by key based on the column name.</small>




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



```php
Column::__construct( $id, $label = '' )
```









---

### getLabel

Gets the column label, often displayed in the table heading.

```php
Column::getLabel( ): string
```






**Return Value:**
`string`  



---

### width

Sets the column width.

```php
Column::width( string|integer $width ): self
```






**Returns Self:** This method can be chained.



---

### getWidth

Gets the column width.

```php
Column::getWidth( ): string|integer
```






**Return Value:**
`string|integer`  



---

### description

Sets the column description, often displayed as smaller text below the label.

```php
Column::description( string $description ): self
```






**Returns Self:** This method can be chained.



---

### getDescription

Gets the column description, often displayed as smaller text below the label.

```php
Column::getDescription( ): string
```






**Return Value:**
`string`  



---

### sortable

Sets the names of table columns to sort on. Blank defaults to the column name, false disables sorting.

```php
Column::sortable( array|boolean $value = null ): self
```






**Returns Self:** This method can be chained.



---

### notSortable

Disables sorting for this column.

```php
Column::notSortable( ): self
```






**Returns Self:** This method can be chained.



---

### getSortable

Gets the name of table columns to sort on, or false if sorting is disabled.

```php
Column::getSortable( ): array|boolean
```






**Return Value:**
`array|boolean`  



---

### format

Sets the formatter as a callable, which should accept a $data param of row data.

```php
Column::format( callable $formatter ): self
```






**Returns Self:** This method can be chained.



---

### hasFormatter

Does the column have a valid formatter?

```php
Column::hasFormatter( ): boolean
```






**Return Value:**
`boolean`  



---

### modifyCells

Set a callable function that can modify each cell and/or row based on that row's data.

```php
Column::modifyCells( callable $callable ): self
```






**Returns Self:** This method can be chained.



---

### getCellModifiers

Get the array of column logic callables.

```php
Column::getCellModifiers( ): callable
```






**Return Value:**
`callable`  



---

### getOutput

Renders the column by either passing the row $data to a formatter,
or grabbing the row data by key based on the column name.

```php
Column::getOutput( array &$data = array() ): string
```






**Return Value:**
`string`  



---

