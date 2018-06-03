---
title: "PaginatedRenderer"
weight: 0
class: \Gibbon\Tables\Renderer\PaginatedRenderer
generated: true
---

## PaginatedRenderer

PaginatedRenderer



* Full name: \Gibbon\Tables\Renderer\PaginatedRenderer
* Parent class: \Gibbon\Tables\Renderer\SimpleRenderer
* This class implements: \Gibbon\Tables\Renderer\RendererInterface

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Creates a renderer that uses page info from the QueryCriteria to display a paginated data table.</small>
- [renderTable](#rendertable)<small> — Render the table to HTML. TODO: replace with Twig.</small>




###### Inherited from SimpleRenderer
- [__construct]({{< ref "api/Gibbon/Tables/Renderer/SimpleRenderer/index.md#__construct" >}})
- [renderTable]({{< ref "api/Gibbon/Tables/Renderer/SimpleRenderer/index.md#rendertable" >}})



### __construct

Creates a renderer that uses page info from the QueryCriteria to display a paginated data table.

```php
PaginatedRenderer::__construct( \Gibbon\Domain\QueryCriteria $criteria, string $path )
```

Hooks into the DataTable functionality in core.js to load using AJAX.







---

### renderTable

Render the table to HTML. TODO: replace with Twig.

```php
PaginatedRenderer::renderTable( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderHeader

Adds the pagination and filter controls to the pre-table header.

```php
PaginatedRenderer::renderHeader( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderFooter

Optionally adds the pagination to the post-table footer.

```php
PaginatedRenderer::renderFooter( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### createTableHeader

Overrides the SimpleRenderer header to add sortable column classes & data attribute.

```php
PaginatedRenderer::createTableHeader( \Gibbon\Tables\Columns\Column $column ): \Gibbon\Tables\Renderer\Element
```






**Return Value:**
`\Gibbon\Tables\Renderer\Element`  



---

### renderPageCount

Render the record count for this page, and total record count.

```php
PaginatedRenderer::renderPageCount( \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderPageFilters

Render the currently active filters for this data set.

```php
PaginatedRenderer::renderPageFilters( \Gibbon\Domain\DataSet $dataSet, array $filters ): string
```






**Return Value:**
`string`  



---

### renderFilterOptions

Render the available options for filtering the data set.

```php
PaginatedRenderer::renderFilterOptions( \Gibbon\Domain\DataSet $dataSet, array $filters ): string
```






**Return Value:**
`string`  



---

### renderPageSize

Render the page size drop-down. Hidden if there's less than one page of total results.

```php
PaginatedRenderer::renderPageSize( \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderPagination

Render the set of numeric page buttons for naigating paginated data sets.

```php
PaginatedRenderer::renderPagination( \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderBulkActions

Display the bulk action panel.

```php
PaginatedRenderer::renderBulkActions( \Gibbon\Tables\DataTable $table ): string
```






**Return Value:**
`string`  



---

