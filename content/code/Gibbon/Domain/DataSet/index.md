---
title: "DataSet"
weight: 0
class: \Gibbon\Domain\DataSet
generated: true
---

## DataSet <small><i>implements <abbr title="\Countable">Countable</abbr>, <abbr title="\IteratorAggregate">IteratorAggregate</abbr></i></small>

Object representing the paginated results of a Gateway query.



* Full name: \Gibbon\Domain\DataSet
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Creates a new data set from an array and calculates the result counts and pagination based on array size.</small>
- [setResultCount](#setresultcount)<small> — Sets the result count (that this page may be a subset of), and the total count of all possible results.</small>
- [setPagination](#setpagination)<small> — Set the page and pageSize for the data set.</small>
- [count](#count)<small> — Implements \Countable, allowing the data set to be counted.</small>
- [getIterator](#getiterator)<small> — Implements IteratorAggregate, allowing this object to be looped over in a foreach.</small>
- [toArray](#toarray)<small> — Returns the internal array of row data.</small>
- [getTotalCount](#gettotalcount)<small> — The total number of rows in the table being queried.</small>
- [getResultCount](#getresultcount)<small> — The total un-paginated number of rows for this data set.</small>
- [getPage](#getpage)<small> — The current page number, counting from 1.</small>
- [getPageSize](#getpagesize)<small> — The number of rows per page in this result set.</small>
- [getPageCount](#getpagecount)<small> — The total number of pages in this result set.</small>
- [getPrevPageNumber](#getprevpagenumber)<small> — Get the previous page number.</small>
- [getNextPageNumber](#getnextpagenumber)<small> — Get the next page number.</small>
- [getPageFrom](#getpagefrom)<small> — The row number for the lower bounds of the current page.</small>
- [getPageTo](#getpageto)<small> — The row number for the upper bounds of the current page.</small>
- [getPaginatedRange](#getpaginatedrange)<small> — Returns a range of page numbers with sections collapsed into a placeholder string.</small>
- [isSubset](#issubset)<small> — This result is a subset of the whole table if searches or filters have been applied.</small>
- [isFirstPage](#isfirstpage)<small> — Is the current page the first one in the data set?</small>
- [isLastPage](#islastpage)<small> — Is the current page the last one in the data set?</small>
- [getRow](#getrow)<small> — Extract a single row from the result set as an array.</small>
- [getColumn](#getcolumn)<small> — Extract a single column from the result set as an array.</small>
- [joinColumn](#joincolumn)<small> — Joins a column of data to the result set based on a common key in both data.</small>
- [transform](#transform)<small> — Transform a data set by applying a callback to each row.</small>




### __construct

Creates a new data set from an array and calculates the result counts and pagination based on array size.

```php
DataSet::__construct( array $data )
```









---

### setResultCount

Sets the result count (that this page may be a subset of), and the total count of all possible results.

```php
DataSet::setResultCount( integer $resultCount = null, integer $totalCount = null ): self
```






**Returns Self:** This method can be chained.



---

### setPagination

Set the page and pageSize for the data set.

```php
DataSet::setPagination( integer $page = 1, integer $pageSize = null ): self
```






**Returns Self:** This method can be chained.



---

### count

Implements \Countable, allowing the data set to be counted.

```php
DataSet::count( ): integer
```






**Return Value:**
`integer`  



---

### getIterator

Implements IteratorAggregate, allowing this object to be looped over in a foreach.

```php
DataSet::getIterator( ): \ArrayIterator
```






**Return Value:**
`\ArrayIterator`  



---

### toArray

Returns the internal array of row data.

```php
DataSet::toArray( ): array
```






**Return Value:**
`array`  



---

### getTotalCount

The total number of rows in the table being queried.

```php
DataSet::getTotalCount( ): integer
```






**Return Value:**
`integer`  



---

### getResultCount

The total un-paginated number of rows for this data set.

```php
DataSet::getResultCount( ): integer
```

Will be less than the totalCount if the results have criteria applied.




**Return Value:**
`integer`  



---

### getPage

The current page number, counting from 1.

```php
DataSet::getPage( ): integer
```






**Return Value:**
`integer`  



---

### getPageSize

The number of rows per page in this result set.

```php
DataSet::getPageSize( ): integer
```






**Return Value:**
`integer`  



---

### getPageCount

The total number of pages in this result set.

```php
DataSet::getPageCount( ): integer
```






**Return Value:**
`integer`  



---

### getPrevPageNumber

Get the previous page number.

```php
DataSet::getPrevPageNumber( ): integer
```






**Return Value:**
`integer`  



---

### getNextPageNumber

Get the next page number.

```php
DataSet::getNextPageNumber( ): integer
```






**Return Value:**
`integer`  



---

### getPageFrom

The row number for the lower bounds of the current page.

```php
DataSet::getPageFrom( ): integer
```






**Return Value:**
`integer`  



---

### getPageTo

The row number for the upper bounds of the current page.

```php
DataSet::getPageTo( ): integer
```






**Return Value:**
`integer`  



---

### getPaginatedRange

Returns a range of page numbers with sections collapsed into a placeholder string.

```php
DataSet::getPaginatedRange( string $placeholder = '...', integer $midSize = 2, integer $endSize = 2 ): array
```

The midSize sets how many pages are displayed on either side of the current page.
The endSize sets how many pages are displayed on both ends of the range.




**Return Value:**
`array`  



---

### isSubset

This result is a subset of the whole table if searches or filters have been applied.

```php
DataSet::isSubset( ): boolean
```

Ignores paginated row counts and looks at the total results vs the total table size.




**Return Value:**
`boolean`  



---

### isFirstPage

Is the current page the first one in the data set?

```php
DataSet::isFirstPage( ): boolean
```






**Return Value:**
`boolean`  



---

### isLastPage

Is the current page the last one in the data set?

```php
DataSet::isLastPage( ): boolean
```






**Return Value:**
`boolean`  



---

### getRow

Extract a single row from the result set as an array.

```php
DataSet::getRow( string $index ): array
```






**Return Value:**
`array`  



---

### getColumn

Extract a single column from the result set as an array.

```php
DataSet::getColumn( string $columnName ): array
```






**Return Value:**
`array`  



---

### joinColumn

Joins a column of data to the result set based on a common key in both data.

```php
DataSet::joinColumn( string $keyName, string $columnName, array &$columnData )
```









---

### transform

Transform a data set by applying a callback to each row.

```php
DataSet::transform( callable $callable )
```









---

