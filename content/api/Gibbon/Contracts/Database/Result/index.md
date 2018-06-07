---
title: "Result"
weight: 0
class: \Gibbon\Contracts\Database\Result
generated: true
---

## Result 





* Full name: \Gibbon\Contracts\Database\Result

{{< api-example >}} 



### Methods

- [rowCount](#rowcount)<small> — Returns the number of rows affected by the last SQL statement.</small>
- [isEmpty](#isempty)<small> — Does the result contain no database rows?</small>
- [isNotEmpty](#isnotempty)<small> — Does the result contain any database rows?</small>
- [fetch](#fetch)<small> — Fetches the next row from a result set.</small>
- [fetchAll](#fetchall)<small> — Returns an array containing all of the result set rows.</small>
- [fetchColumn](#fetchcolumn)<small> — Returns a single column from the next row of a result set.</small>
- [fetchGrouped](#fetchgrouped)<small> — Fetches all as an array, grouped by key using the first column in the result set.</small>
- [fetchGroupedUnique](#fetchgroupedunique)<small> — Fetches all as an array, grouped by key where the contents</small>
- [fetchKeyPair](#fetchkeypair)<small> — Fetches all as an associative array of key => value pairs. The query may only have two columns.</small>
- [setFetchMode](#setfetchmode)<small> — Returns the number of rows affected by the last SQL statement.</small>
- [toDataSet](#todataset)<small> — Fetches all results and returns it as a DataSet object.</small>




### rowCount

Returns the number of rows affected by the last SQL statement.

```php
Result::rowCount( ): integer
```

PDOStatement method.




**Return Value:**
`integer`  



---

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

### fetch

Fetches the next row from a result set.

```php
Result::fetch( integer|null $fetch_style = null, integer|null $cursor_orientation = null, integer|null $cursor_offset = null ): mixed
```

PDOStatement method.




**Return Value:**
`mixed`  



---

### fetchAll

Returns an array containing all of the result set rows.

```php
Result::fetchAll( integer|null $fetch_style = null, integer|string|null $fetch_argument = null, array|null $ctor_args = null ): array
```

PDOStatement method.




**Return Value:**
`array`  



---

### fetchColumn

Returns a single column from the next row of a result set.

```php
Result::fetchColumn( integer $column_number ): string
```

PDOStatement method.




**Return Value:**
`string`  



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

### setFetchMode

Returns the number of rows affected by the last SQL statement.

```php
Result::setFetchMode( integer $mode, mixed|null $params = null ): boolean
```

PDOStatement method.




**Return Value:**
`boolean`  



---

### toDataSet

Fetches all results and returns it as a DataSet object.

```php
Result::toDataSet( ): array
```






**Return Value:**
`array`  



---

