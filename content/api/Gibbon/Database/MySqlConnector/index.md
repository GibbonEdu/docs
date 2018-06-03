---
title: "MySqlConnector"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Database\MySqlConnector
generated: true
---

## MySqlConnector

Establish a Database Connection.



* Full name: \Gibbon\Database\MySqlConnector

{{< api-example >}} 



### Methods

- [connect](#connect)<small> — Establish a database connection.</small>
- [useDatabase](#usedatabase)




### connect

Establish a database connection.

```php
MySqlConnector::connect( array $config ): \PDO
```






**Return Value:**
`\PDO`  



---

### useDatabase



```php
MySqlConnector::useDatabase( \Gibbon\Database\Connection $connection, $databaseName )
```









---

### getDsn

Get the DSN string for a host / port configuration.

```php
MySqlConnector::getDsn( array $config ): string
```






**Return Value:**
`string`  



---

### configureEncoding



```php
MySqlConnector::configureEncoding( \PDO $connection )
```









---

### setModes

Set the modes for the connection.

```php
MySqlConnector::setModes( \PDO $connection )
```









---

