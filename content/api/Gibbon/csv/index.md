---
title: "csv"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\csv
generated: true
---

## csv

CSV Generator



* Full name: \Gibbon\csv

{{< api-example >}} 



### Methods

- [generate](#generate)<small> — Generate</small>




### generate

Generate

```php
static csv::generate( \Gibbon\Contracts\Database\Connection $pdo, $title, $header = NULL ): void
```

direct output of csv to browser.

* This method is **static**.





---

### testTitle

Test Title

```php
static csv::testTitle( $title ): string
```



* This method is **static**.


**Return Value:**
`string`  Title



---

### encodeCSVField

encode CSV Field

```php
static csv::encodeCSVField( $string ): string
```



* This method is **static**.


**Return Value:**
`string`  CSV Data



---

