---
title: "Gateway"
weight: 0
class: \Gibbon\Domain\Gateway
generated: true
---

## Gateway

Gateway



* Full name: \Gibbon\Domain\Gateway

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a new gateway instance using the supplied database connection.</small>




### __construct

Create a new gateway instance using the supplied database connection.

```php
Gateway::__construct( \Gibbon\Contracts\Database\Connection $db )
```









---

### db

Inheriting classes can get the current database connection.

```php
Gateway::db( ): \Gibbon\Contracts\Database\Connection
```






**Return Value:**
`\Gibbon\Contracts\Database\Connection`  



---

