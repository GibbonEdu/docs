---
title: "Excel"
weight: 0
class: \Gibbon\Excel
generated: true
---

## Excel

Export to Excel



* Full name: \Gibbon\Excel
* Parent class: 

{{< api-example >}} 



### Methods

- [exportWithQuery](#exportwithquery)<small> — Export with Query</small>
- [defineWorksheet](#defineworksheet)<small> — define Worksheet</small>
- [exportWorksheet](#exportworksheet)<small> — export Worksheet</small>
- [__construct](#__construct)<small> — construct</small>
- [cellColour](#cellcolour)<small> — cell Colour</small>
- [cellColor](#cellcolor)<small> — cell Color  (American)</small>
- [estimateCellCount](#estimatecellcount)<small> — Estimate Cell Count in Spreadsheet</small>
- [cellFontColour](#cellfontcolour)<small> — cell Font Colour</small>
- [cellFontColor](#cellfontcolor)<small> — cell Font Color  (American)</small>
- [num2alpha](#num2alpha)<small> — Get a column letter name for given number</small>




### exportWithQuery

Export with Query

```php
Excel::exportWithQuery( $qry, $excel_file_name, $conn ): string
```






**Return Value:**
`string`  Export to Browser.



---

### defineWorksheet

define Worksheet

```php
Excel::defineWorksheet( $fileName ): void
```









---

### exportWorksheet

export Worksheet

```php
Excel::exportWorksheet( $openXML = true ): void
```









---

### __construct

construct

```php
Excel::__construct( $fileName = NULL ): void
```









---

### cellColour

cell Colour

```php
Excel::cellColour( $cells, $colour )
```









---

### cellColor

cell Color  (American)

```php
Excel::cellColor( $cells, $colour )
```









---

### estimateCellCount

Estimate Cell Count in Spreadsheet

```php
Excel::estimateCellCount( \Gibbon\Contracts\Database\Connection $pdo )
```









---

### cellFontColour

cell Font Colour

```php
Excel::cellFontColour( $cells, $colour )
```









---

### cellFontColor

cell Font Color  (American)

```php
Excel::cellFontColor( $cells, $colour )
```









---

### num2alpha

Get a column letter name for given number

```php
Excel::num2alpha( $n ): string
```






**Return Value:**
`string`  letter



---

