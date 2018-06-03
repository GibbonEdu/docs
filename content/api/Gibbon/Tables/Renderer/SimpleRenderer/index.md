---
title: "SimpleRenderer"
weight: 0
class: \Gibbon\Tables\Renderer\SimpleRenderer
generated: true
---

## SimpleRenderer

SimpleRenderer



* Full name: \Gibbon\Tables\Renderer\SimpleRenderer
* This class implements: \Gibbon\Tables\Renderer\RendererInterface

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — So simple .</small>
- [renderTable](#rendertable)<small> — Render the table to HTML. TODO: replace with Twig.</small>




### __construct

So simple .

```php
SimpleRenderer::__construct( )
```

..







---

### renderTable

Render the table to HTML. TODO: replace with Twig.

```php
SimpleRenderer::renderTable( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderHeader

Render a pre-table header section. Defaults to any header actions added to the table.

```php
SimpleRenderer::renderHeader( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### renderFooter

Render a post-table footer section.

```php
SimpleRenderer::renderFooter( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### createTableHeader

Creates the HTML object for the <th> tag.

```php
SimpleRenderer::createTableHeader( \Gibbon\Tables\Columns\Column $column ): \Gibbon\Forms\Layout\Element
```






**Return Value:**
`\Gibbon\Forms\Layout\Element`  



---

### createTableRow

Creates the HTML object for the <tr> tag, applies optional rowLogic callable to modify the output.

```php
SimpleRenderer::createTableRow( array $data, \Gibbon\Tables\DataTable $table ): \Gibbon\Forms\Layout\Element
```






**Return Value:**
`\Gibbon\Forms\Layout\Element`  



---

### createTableCell

Creates the HTML object for the <td> tag, applies optional cellLogic callable to modify the output.

```php
SimpleRenderer::createTableCell( array $data, \Gibbon\Tables\DataTable $table, \Gibbon\Tables\Columns\Column $column ): \Gibbon\Forms\Layout\Element
```






**Return Value:**
`\Gibbon\Forms\Layout\Element`  



---

