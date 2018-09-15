---
title: "DataTable"
weight: 0
class: \Gibbon\Tables\DataTable
generated: true
---

## DataTable <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr></i></small>

DataTable



* Full name: \Gibbon\Tables\DataTable
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a data table with optional renderer.</small>
- [create](#create)<small> — Static create method, for ease of method chaining. Defaults to a simple table renderer.</small>
- [createPaginated](#createpaginated)<small> — Helper method to create a default paginated data table, using criteria from a gateway query.</small>
- [setID](#setid)<small> — Set the table ID.</small>
- [getID](#getid)<small> — Get the table ID.</small>
- [withData](#withdata)<small> — Set the table data internally.</small>
- [setRenderer](#setrenderer)<small> — Set the renderer for the data table. Can also be supplied ad hoc in the render method.</small>
- [getRenderer](#getrenderer)<small> — Get the current data table renderer.</small>
- [addColumn](#addcolumn)<small> — Add a column to the table, by name and optional label. Returns the created column.</small>
- [addActionColumn](#addactioncolumn)<small> — Add an action column to the table, which is generally rendered on the right-hand side.</small>
- [addCheckboxColumn](#addcheckboxcolumn)<small> — Add a checkbox column to the table, used for bulk-action tables.</small>
- [addExpandableColumn](#addexpandablecolumn)<small> — Add an expander arrow for</small>
- [getColumns](#getcolumns)<small> — Get all columns in the table.</small>
- [getColumnCount](#getcolumncount)<small> — Count all columns in the table.</small>
- [addHeaderAction](#addheaderaction)<small> — Add an action to the table, generally displayed in the header right-hand side.</small>
- [getHeader](#getheader)<small> — Get all header content in the table.</small>
- [addMetaData](#addmetadata)<small> — Add a piece of meta data to the table. Can be used for renderer-specific details.</small>
- [getMetaData](#getmetadata)<small> — Gets the value of a meta data entry by name.</small>
- [modifyRows](#modifyrows)<small> — Add a callable function that can modify each row based on that row's data.</small>
- [getRowModifiers](#getrowmodifiers)<small> — Get the row logic array of callables.</small>
- [render](#render)<small> — Render the data table, either with the supplied renderer or default to the built-in one.</small>
- [getOutput](#getoutput)<small> — Implement the OutputtableInterface to combine DataTables + Forms.</small>




### __construct

Create a data table with optional renderer.

```php
DataTable::__construct( string $id, \Gibbon\Tables\Renderer\RendererInterface $renderer = null )
```









---

### create

Static create method, for ease of method chaining. Defaults to a simple table renderer.

```php
static DataTable::create( string $id, \Gibbon\Tables\Renderer\RendererInterface $renderer = null ): self
```



* This method is **static**.


**Returns Self:** This method can be chained.



---

### createPaginated

Helper method to create a default paginated data table, using criteria from a gateway query.

```php
static DataTable::createPaginated( string $id, \Gibbon\Domain\QueryCriteria $criteria ): self
```



* This method is **static**.


**Returns Self:** This method can be chained.



---

### setID

Set the table ID.

```php
DataTable::setID( string $id ): self
```






**Returns Self:** This method can be chained.



---

### getID

Get the table ID.

```php
DataTable::getID( ): string
```






**Return Value:**
`string`  



---

### withData

Set the table data internally.

```php
DataTable::withData( \Gibbon\Domain\DataSet $data ): self
```






**Returns Self:** This method can be chained.



---

### setRenderer

Set the renderer for the data table. Can also be supplied ad hoc in the render method.

```php
DataTable::setRenderer( \Gibbon\Tables\Renderer\RendererInterface $renderer ): self
```






**Returns Self:** This method can be chained.



---

### getRenderer

Get the current data table renderer.

```php
DataTable::getRenderer( ): \Gibbon\Tables\Renderer\RendererInterface
```






**Return Value:**
`\Gibbon\Tables\Renderer\RendererInterface`  



---

### addColumn

Add a column to the table, by name and optional label. Returns the created column.

```php
DataTable::addColumn( $id, string $label = '' ): \Gibbon\Tables\Columns\Column
```






**Return Value:**
`\Gibbon\Tables\Columns\Column`  



---

### addActionColumn

Add an action column to the table, which is generally rendered on the right-hand side.

```php
DataTable::addActionColumn( ): \Gibbon\Tables\Columns\ActionColumn
```






**Return Value:**
`\Gibbon\Tables\Columns\ActionColumn`  



---

### addCheckboxColumn

Add a checkbox column to the table, used for bulk-action tables.

```php
DataTable::addCheckboxColumn( $id, $key = '' ): \Gibbon\Tables\Columns\CheckboxColumn
```






**Return Value:**
`\Gibbon\Tables\Columns\CheckboxColumn`  



---

### addExpandableColumn

Add an expander arrow for

```php
DataTable::addExpandableColumn( $id ): \Gibbon\Tables\Columns\ExpandableColumn
```






**Return Value:**
`\Gibbon\Tables\Columns\ExpandableColumn`  



---

### getColumns

Get all columns in the table.

```php
DataTable::getColumns( ): array
```






**Return Value:**
`array`  



---

### getColumnCount

Count all columns in the table.

```php
DataTable::getColumnCount( ): integer
```






**Return Value:**
`integer`  



---

### addHeaderAction

Add an action to the table, generally displayed in the header right-hand side.

```php
DataTable::addHeaderAction( string $name, string $label = '' ): \Gibbon\Tables\Action
```






**Return Value:**
`\Gibbon\Tables\Action`  



---

### getHeader

Get all header content in the table.

```php
DataTable::getHeader( ): array
```






**Return Value:**
`array`  



---

### addMetaData

Add a piece of meta data to the table. Can be used for renderer-specific details.

```php
DataTable::addMetaData( string $name, mixed $value ): self
```






**Returns Self:** This method can be chained.



---

### getMetaData

Gets the value of a meta data entry by name.

```php
DataTable::getMetaData( string $name, $defaultValue = null ): mixed
```






**Return Value:**
`mixed`  



---

### modifyRows

Add a callable function that can modify each row based on that row's data.

```php
DataTable::modifyRows( callable $callable ): self
```






**Returns Self:** This method can be chained.



---

### getRowModifiers

Get the row logic array of callables.

```php
DataTable::getRowModifiers( ): array
```






**Return Value:**
`array`  



---

### render

Render the data table, either with the supplied renderer or default to the built-in one.

```php
DataTable::render( \Gibbon\Domain\DataSet $dataSet, \Gibbon\Tables\Renderer\RendererInterface $renderer = null ): string
```






**Return Value:**
`string`  



---

### getOutput

Implement the OutputtableInterface to combine DataTables + Forms.

```php
DataTable::getOutput( ): string
```






**Return Value:**
`string`  



---

