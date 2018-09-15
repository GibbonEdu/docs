---
title: "Result"
weight: 0
class: \Gibbon\Database\Result
generated: true
---

## Result <small><i>implements <abbr title="\Gibbon\Contracts\Database\Result">Result</abbr></i></small>

Methods to improve the intent and readability of database code.



* Full name: \Gibbon\Database\Result
* Parent class: 
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [isEmpty](#isempty)<small> — Does the result contain no database rows?</small>
- [isNotEmpty](#isnotempty)<small> — Does the result contain any database rows?</small>
- [fetchGrouped](#fetchgrouped)<small> — Fetches all as an array, grouped by key using the first column in the result set.</small>
- [fetchGroupedUnique](#fetchgroupedunique)<small> — Fetches all as an array, grouped by key where the contents</small>
- [fetchKeyPair](#fetchkeypair)<small> — Fetches all as an associative array of key => value pairs. The query may only have two columns.</small>
- [toDataSet](#todataset)<small> — Fetches all results and returns it as a DataSet object.</small>




### isEmpty

Does the result contain no database rows?

```php
Result::isEmpty( ): boolean
```






**Return Value:**
`boolean`  



---

### isNotEmpty

Does the result contain any database rows?

```php
Result::isNotEmpty( ): boolean
```






**Return Value:**
`boolean`  



---

### fetchGrouped

Fetches all as an array, grouped by key using the first column in the result set.

```php
Result::fetchGrouped( ): array
```






**Return Value:**
`array`  



---

### fetchGroupedUnique

Fetches all as an array, grouped by key where the contents

```php
Result::fetchGroupedUnique( ): array
```






**Return Value:**
`array`  



---

### fetchKeyPair

Fetches all as an associative array of key => value pairs. The query may only have two columns.

```php
Result::fetchKeyPair( ): array
```






**Return Value:**
`array`  



---

### toDataSet

Fetches all results and returns it as a DataSet object.

```php
Result::toDataSet( ): array
```






**Return Value:**
`array`  



---

