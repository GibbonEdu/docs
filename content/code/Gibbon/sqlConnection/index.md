---
title: "sqlConnection"
weight: 0
class: \Gibbon\sqlConnection
generated: true
---

## sqlConnection <small><i>implements <abbr title="\Gibbon\Contracts\Database\Connection">Connection</abbr></i></small>





* Full name: \Gibbon\sqlConnection
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108

* **Warning:** this class is **deprecated**. This means that this class will likely be removed in a future version.

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct</small>
- [getConnection](#getconnection)<small> — Get connection. Required for backwards compatibilty in Gibbon.</small>
- [getSuccess](#getsuccess)<small> — Get Connection Success</small>
- [getQuerySuccess](#getquerysuccess)<small> — Get Query Success</small>
- [executeQuery](#executequery)<small> — Execute Query</small>
- [selectOne](#selectone)<small> — Run a select statement and return a single result.</small>
- [select](#select)<small> — Run a select statement against the database.</small>
- [insert](#insert)<small> — Run an insert statement and return the last insert ID.</small>
- [update](#update)<small> — Run an update statement against the database.</small>
- [delete](#delete)<small> — Run a delete statement against the database.</small>
- [statement](#statement)<small> — Execute an SQL statement and return the boolean result.</small>
- [affectingStatement](#affectingstatement)<small> — Run an SQL statement and get the number of rows affected.</small>
- [getResult](#getresult)<small> — Get Result</small>
- [getVersion](#getversion)<small> — Get Version</small>
- [getCollation](#getcollation)<small> — Get Collation</small>
- [installBypass](#installbypass)<small> — Install Bypass</small>
- [escIdentifier](#escidentifier)<small> — Escape an SQL identifier such as a table or database name with backticks.</small>




### __construct

Construct

```php
sqlConnection::__construct( $message = null ): Object
```






**Return Value:**
`Object`  PDO Connection



---

### getConnection

Get connection. Required for backwards compatibilty in Gibbon.

```php
sqlConnection::getConnection( ): Object
```






**Return Value:**
`Object`  PDO COnnection



---

### getSuccess

Get Connection Success

```php
sqlConnection::getSuccess( ): Object
```






**Return Value:**
`Object`  PDO COnnection



---

### getQuerySuccess

Get Query Success

```php
sqlConnection::getQuerySuccess( ): Object
```






**Return Value:**
`Object`  PDO COnnection



---

### executeQuery

Execute Query

```php
sqlConnection::executeQuery( $data, string $query, $error = NULL ): Object
```






**Return Value:**
`Object`  PDO Result



---

### selectOne

Run a select statement and return a single result.

```php
sqlConnection::selectOne( string $query, array $bindings = array() ): mixed
```






**Return Value:**
`mixed`  



---

### select

Run a select statement against the database.

```php
sqlConnection::select( string $query, array $bindings = array() ): array
```






**Return Value:**
`array`  



---

### insert

Run an insert statement and return the last insert ID.

```php
sqlConnection::insert( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### update

Run an update statement against the database.

```php
sqlConnection::update( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### delete

Run a delete statement against the database.

```php
sqlConnection::delete( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### statement

Execute an SQL statement and return the boolean result.

```php
sqlConnection::statement( string $query, array $bindings = array() ): boolean
```






**Return Value:**
`boolean`  



---

### affectingStatement

Run an SQL statement and get the number of rows affected.

```php
sqlConnection::affectingStatement( string $query, array $bindings = array() ): integer
```






**Return Value:**
`integer`  



---

### getResult

Get Result

```php
sqlConnection::getResult( ): Object
```






**Return Value:**
`Object`  PDOStatement



---

### getVersion

Get Version

```php
sqlConnection::getVersion( ): string
```






**Return Value:**
`string`  Version



---

### getCollation

Get Collation

```php
sqlConnection::getCollation( ): string
```






**Return Value:**
`string`  Collation



---

### installBypass

Install Bypass

```php
sqlConnection::installBypass( $databaseServer, $databaseName, $databaseUsername, $databasePassword, $message = null ): Object
```






**Return Value:**
`Object`  PDO Connection



---

### escIdentifier

Escape an SQL identifier such as a table or database name with backticks.

```php
sqlConnection::escIdentifier( string $value ): string
```






**Return Value:**
`string`  



---

