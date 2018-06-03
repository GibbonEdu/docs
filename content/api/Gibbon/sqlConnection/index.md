---
title: "sqlConnection"
weight: 0
class: \Gibbon\sqlConnection
generated: true
---

## sqlConnection





* Full name: \Gibbon\sqlConnection
* **Warning:** this class is **deprecated**. This means that this class will likely be removed in a future version.

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Construct</small>
- [getConnection](#getconnection)<small> — Get connection. Required for backwards compatibilty in Gibbon.</small>
- [getSuccess](#getsuccess)<small> — Get Connection Success</small>
- [getQuerySuccess](#getquerysuccess)<small> — Get Query Success</small>
- [executeQuery](#executequery)<small> — Execute Query</small>
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

### generateConnection

generate Connection

```php
sqlConnection::generateConnection( $databaseServer, $databaseName, $databaseUsername, $databasePassword, $databasePort = NULL, $message = NULL ): Object
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
sqlConnection::executeQuery( $data, $query, $error = NULL ): Object
```






**Return Value:**
`Object`  PDO Result



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

### setSQLMode

Set SQL Mode

```php
sqlConnection::setSQLMode( )
```









---

