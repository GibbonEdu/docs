---
title: "SpreadsheetRenderer"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Tables\Renderer\SpreadsheetRenderer
generated: true
---

## SpreadsheetRenderer

SpreadsheetRenderer



* Full name: \Gibbon\Tables\Renderer\SpreadsheetRenderer
* This class implements: \Gibbon\Tables\Renderer\RendererInterface

{{< api-example >}} 



### Methods

- [__construct](#__construct)
- [renderTable](#rendertable)<small> — Render the table to a spreadsheet file: xlsx, xls, csv</small>




### __construct



```php
SpreadsheetRenderer::__construct( $absolutePath )
```









---

### renderTable

Render the table to a spreadsheet file: xlsx, xls, csv

```php
SpreadsheetRenderer::renderTable( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

### num2alpha



```php
SpreadsheetRenderer::num2alpha( $n )
```









---

