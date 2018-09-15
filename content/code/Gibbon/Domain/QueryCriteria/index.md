---
title: "QueryCriteria"
weight: 0
class: \Gibbon\Domain\QueryCriteria
generated: true
---

## QueryCriteria 

Object describing the filters applied to a Gateway query.



* Full name: \Gibbon\Domain\QueryCriteria

{{< api-example >}} 



### Methods

- [fromArray](#fromarray)<small> — Loads and sanitizes a set of criteria from array.</small>
- [toArray](#toarray)<small> — Return an array representing the criteria settings.</small>
- [fromJson](#fromjson)<small> — Loads and sanitizes a set of criteria from a JSON string.</small>
- [toJson](#tojson)<small> — Returns the criteria settings as a JSON string.</small>
- [page](#page)<small> — Sets the page number for paginated queries, applied to the sql offset.</small>
- [getPage](#getpage)<small> — Gets the page number.</small>
- [pageSize](#pagesize)<small> — Sets the page size for paginated queries, applied to the sql limit.</small>
- [getPageSize](#getpagesize)<small> — Gets the page size.</small>
- [searchBy](#searchby)<small> — Add a search string to the criteria for the specified columns.</small>
- [hasSearchColumn](#hassearchcolumn)<small> — Does the criteria have any search values set, by column or in total?</small>
- [hasSearchText](#hassearchtext)<small> — Does the criteria have any search values set, by column or in total?</small>
- [getSearchBy](#getsearchby)<small> — Get all the search values, if any.</small>
- [getSearchText](#getsearchtext)<small> — Gets the current search text, optionally including any current filters.</small>
- [getSearchColumns](#getsearchcolumns)<small> — Get the current searched columns.</small>
- [filterBy](#filterby)<small> — Add a filter to the criteria.</small>
- [hasFilter](#hasfilter)<small> — Does the criteria have a filter set, by name or in total?</small>
- [getFilterBy](#getfilterby)<small> — Get all the criteria filters, if any.</small>
- [getFilterValue](#getfiltervalue)<small> — Get a filter value by name, if it exists.</small>
- [getFilterString](#getfilterstring)<small> — Returns the current filter array as a string of name:value filters.</small>
- [sortBy](#sortby)<small> — Add a sort column to the criteria.</small>
- [hasSort](#hassort)<small> — Does the criteria have any sort values set, by column or in total?</small>
- [getSortBy](#getsortby)<small> — Get the sort value by column name, or return all search columns if none is specified.</small>
- [addFilterRule](#addfilterrule)<small> — Add a closure which defines the behaviour for a given filter by name.</small>
- [addFilterRules](#addfilterrules)<small> — Add multiple filter rules as an array.</small>
- [hasFilterRule](#hasfilterrule)<small> — Does the criteria have a filter rule for the given name?</small>
- [getFilterRule](#getfilterrule)<small> — Get the filter rule for a given name.</small>




### fromArray

Loads and sanitizes a set of criteria from array.

```php
QueryCriteria::fromArray( array $criteria ): self
```






**Returns Self:** This method can be chained.



---

### toArray

Return an array representing the criteria settings.

```php
QueryCriteria::toArray( ): array
```






**Return Value:**
`array`  



---

### fromJson

Loads and sanitizes a set of criteria from a JSON string.

```php
QueryCriteria::fromJson( string $jsonString ): self
```






**Returns Self:** This method can be chained.



---

### toJson

Returns the criteria settings as a JSON string.

```php
QueryCriteria::toJson( ): string
```






**Return Value:**
`string`  



---

### page

Sets the page number for paginated queries, applied to the sql offset.

```php
QueryCriteria::page( integer $page ): self
```






**Returns Self:** This method can be chained.



---

### getPage

Gets the page number.

```php
QueryCriteria::getPage( ): integer
```






**Return Value:**
`integer`  



---

### pageSize

Sets the page size for paginated queries, applied to the sql limit.

```php
QueryCriteria::pageSize( integer $pageSize ): self
```






**Returns Self:** This method can be chained.



---

### getPageSize

Gets the page size.

```php
QueryCriteria::getPageSize( ): integer
```






**Return Value:**
`integer`  



---

### searchBy

Add a search string to the criteria for the specified columns.

```php
QueryCriteria::searchBy( string|array $column, $text = null ): self
```

Accepts $column as a string or an array of columns to search.
Omitting the $text value will modify the columns for the current search.




**Returns Self:** This method can be chained.



---

### hasSearchColumn

Does the criteria have any search values set, by column or in total?

```php
QueryCriteria::hasSearchColumn( $column = null ): boolean
```






**Return Value:**
`boolean`  



---

### hasSearchText

Does the criteria have any search values set, by column or in total?

```php
QueryCriteria::hasSearchText( ): boolean
```






**Return Value:**
`boolean`  



---

### getSearchBy

Get all the search values, if any.

```php
QueryCriteria::getSearchBy( ): string|array
```






**Return Value:**
`string|array`  



---

### getSearchText

Gets the current search text, optionally including any current filters.

```php
QueryCriteria::getSearchText( boolean $includeFilters = false ): string
```






**Return Value:**
`string`  



---

### getSearchColumns

Get the current searched columns.

```php
QueryCriteria::getSearchColumns( ): array
```






**Return Value:**
`array`  



---

### filterBy

Add a filter to the criteria.

```php
QueryCriteria::filterBy( $name, string $value = null ): self
```

Accepts parameters as filter:value strings, or separate $name, $value params.
Values with spaces or other characters can also be quoted, as filter:"some value"




**Returns Self:** This method can be chained.



---

### hasFilter

Does the criteria have a filter set, by name or in total?

```php
QueryCriteria::hasFilter( $name = null, $value = null ): boolean
```






**Return Value:**
`boolean`  



---

### getFilterBy

Get all the criteria filters, if any.

```php
QueryCriteria::getFilterBy( ): array
```






**Return Value:**
`array`  



---

### getFilterValue

Get a filter value by name, if it exists.

```php
QueryCriteria::getFilterValue( $name ): array
```






**Return Value:**
`array`  



---

### getFilterString

Returns the current filter array as a string of name:value filters.

```php
QueryCriteria::getFilterString( ): string
```






**Return Value:**
`string`  



---

### sortBy

Add a sort column to the criteria.

```php
QueryCriteria::sortBy( string $column, string $direction = 'ASC' ): self
```

Accepts $column as a string or an array of columns to search.




**Returns Self:** This method can be chained.



---

### hasSort

Does the criteria have any sort values set, by column or in total?

```php
QueryCriteria::hasSort( $column = null ): boolean
```






**Return Value:**
`boolean`  



---

### getSortBy

Get the sort value by column name, or return all search columns if none is specified.

```php
QueryCriteria::getSortBy( string $column = null ): string|array
```






**Return Value:**
`string|array`  



---

### addFilterRule

Add a closure which defines the behaviour for a given filter by name.

```php
QueryCriteria::addFilterRule( string $name, \Closure $callback ): self
```






**Returns Self:** This method can be chained.



---

### addFilterRules

Add multiple filter rules as an array.

```php
QueryCriteria::addFilterRules( array $rules ): self
```






**Returns Self:** This method can be chained.



---

### hasFilterRule

Does the criteria have a filter rule for the given name?

```php
QueryCriteria::hasFilterRule( string $name ): boolean
```






**Return Value:**
`boolean`  



---

### getFilterRule

Get the filter rule for a given name.

```php
QueryCriteria::getFilterRule( string $name ): \Closure|null
```






**Return Value:**
`\Closure|null`  



---

