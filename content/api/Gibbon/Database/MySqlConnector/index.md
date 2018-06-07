---
title: "MySqlConnector"
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

