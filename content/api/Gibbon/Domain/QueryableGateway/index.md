---
title: "QueryableGateway"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Domain\QueryableGateway
generated: true
---

## QueryableGateway

Queryable Gateway



* Full name: \Gibbon\Domain\QueryableGateway
* Parent class: \Gibbon\Domain\Gateway

{{< api-example >}} 



### Methods

- [newQueryCriteria](#newquerycriteria)<small> — Creates a new QueryCriteria instance.</small>




###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### newQueryCriteria

Creates a new QueryCriteria instance.

```php
QueryableGateway::newQueryCriteria( ): \Gibbon\Domain\QueryCriteria
```






**Return Value:**
`\Gibbon\Domain\QueryCriteria`  



---

### newQuery

Creates a new instance of the Select class.

```php
QueryableGateway::newQuery( ): \Aura\SqlQuery\Common\SelectInterface
```






**Return Value:**
`\Aura\SqlQuery\Common\SelectInterface`  



---

### runQuery

Runs a query with a defined set of criteria and returns the result as a data set with pagination info.

```php
QueryableGateway::runQuery( \Aura\SqlQuery\Common\SelectInterface $query, \Gibbon\Domain\QueryCriteria $criteria ): \Gibbon\Domain\DataSet
```






**Return Value:**
`\Gibbon\Domain\DataSet`  



---

### applyCriteria

Applies a set of criteria to an existing query and returns the resulting query.

```php
QueryableGateway::applyCriteria( \Aura\SqlQuery\Common\SelectInterface $query, \Gibbon\Domain\QueryCriteria $criteria ): \Aura\SqlQuery\Common\SelectInterface
```






**Return Value:**
`\Aura\SqlQuery\Common\SelectInterface`  



---

### getDefaultFilterRules

Returns a set of built-in rules available to all queryable gateways.

```php
QueryableGateway::getDefaultFilterRules( \Gibbon\Domain\QueryCriteria $criteria ): array
```






**Return Value:**
`array`  



---

### countAll

The total count of all queryable rows. Commonly provided through the TableAware trait.

```php
abstract QueryableGateway::countAll( ): integer
```






**Return Value:**
`integer`  



---

### getSearchableColumns

The column names that are valid when searching. Commonly provided through the TableAware trait.

```php
abstract QueryableGateway::getSearchableColumns( ): array
```






**Return Value:**
`array`  



---

### getQueryFactory

Gets the internal QueryFactory. Lazy-loaded and static to maintain a single instance.

```php
QueryableGateway::getQueryFactory( ): \Aura\SqlQuery\QueryFactory
```






**Return Value:**
`\Aura\SqlQuery\QueryFactory`  



---

### escapeIdentifier

Wraps all SQL identifiers in ` backticks, escaping existing backticks; handles tableName.columnName

```php
QueryableGateway::escapeIdentifier( string $value ): string
```






**Return Value:**
`string`  



---

