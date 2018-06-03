---
title: "TableAware"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Domain\Traits\TableAware
generated: true
---

## TableAware

Provides methods for Gateway classes that are tied to a specific database table.

For QueryableGateways, this trait implements the required countAll() method.

The classes using this trait must implement a static $tableName;

* Full name: \Gibbon\Domain\Traits\TableAware

{{< api-example >}} 



### Methods

- [getTableName](#gettablename)<small> — Gets the database table name.</small>
- [getTableSchema](#gettableschema)<small> — Gets the schema information for the columns in this database table.</small>
- [getSearchableColumns](#getsearchablecolumns)<small> — Get an internal pre-defined array of column names that are searchable.</small>
- [countAll](#countall)<small> — Gets the total number of rows in this database table.</small>




### getTableName

Gets the database table name.

```php
TableAware::getTableName( ): string
```






**Return Value:**
`string`  



---

### getTableSchema

Gets the schema information for the columns in this database table.

```php
TableAware::getTableSchema( ): array
```






**Return Value:**
`array`  



---

### getSearchableColumns

Get an internal pre-defined array of column names that are searchable.

```php
TableAware::getSearchableColumns( ): array
```






**Return Value:**
`array`  



---

### countAll

Gets the total number of rows in this database table.

```php
TableAware::countAll( ): integer
```






**Return Value:**
`integer`  



---

