---
title: "Connection"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Contracts\Database\Connection
generated: true
---

## Connection

Database Connection Interface
Borrowed in part from Illuminate\Database\ConnectionInterface



* Full name: \Gibbon\Contracts\Database\Connection

{{< api-example >}} 



### Methods

- [getConnection](#getconnection)<small> — Get the current PDO connection.</small>
- [selectOne](#selectone)<small> — Run a select statement and return a single result.</small>
- [select](#select)<small> — Run a select statement against the database.</small>
- [insert](#insert)<small> — Run an insert statement and return the last insert ID.</small>
- [update](#update)<small> — Run an update statement against the database.</small>
- [delete](#delete)<small> — Run a delete statement against the database.</small>
- [statement](#statement)<small> — Execute an SQL statement and return the boolean result.</small>
- [affectingStatement](#affectingstatement)<small> — Run an SQL statement and get the number of rows affected.</small>
- [executeQuery](#executequery)




### getConnection

Get the current PDO connection.

```php
Connection::getConnection( ): \PDO
```






**Return Value:**
`\PDO`  



---

### selectOne

Run a select statement and return a single result.

```php
Connection::selectOne( string $query, array $bindings = array() ): mixed
```






**Return Value:**
`mixed`  



---

### select

Run a select statement against the database.

```php
Connection::select( string $query, array $bindings = array() ): array
```






**Return Value:**
`array`  



---

### insert

Run an insert statement and return the last insert ID.

```php
Connection::insert( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### update

Run an update statement against the database.

```php
Connection::update( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### delete

Run a delete statement against the database.

```php
Connection::delete( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### statement

Execute an SQL statement and return the boolean result.

```php
Connection::statement( string $query, array $bindings = array() ): boolean
```






**Return Value:**
`boolean`  



---

### affectingStatement

Run an SQL statement and get the number of rows affected.

```php
Connection::affectingStatement( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### executeQuery



```php
Connection::executeQuery( array $bindings = array(), string $query ): boolean
```



* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.



**Return Value:**
`boolean`  



---

