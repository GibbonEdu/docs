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

