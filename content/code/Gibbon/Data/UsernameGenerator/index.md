---
title: "UsernameGenerator"
weight: 0
class: \Gibbon\Data\UsernameGenerator
generated: true
---

## UsernameGenerator 

Helper class to generate a username based on a supplied format. Guarantees the uniqueness of the returned username.



* Full name: \Gibbon\Data\UsernameGenerator

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Class constructor with database dependancy injection.</small>
- [addToken](#addtoken)<small> — Adds a string token that's replaced with the corresponding value when processing the username format.</small>
- [addNumericToken](#addnumerictoken)<small> — Adds a numeric token with a starting value and size that's incremented each time it's generated.</small>
- [getToken](#gettoken)<small> — Get token data by name.</small>
- [generateByRole](#generatebyrole)<small> — Generates a username based on the provided gibbonRoleID, using the 'isDefault' format if none exists for that role.</small>
- [generate](#generate)<small> — Generates a username based on the provided string format, replacing tokens with their corresponding values.</small>
- [isUsernameUnique](#isusernameunique)<small> — Checks a username against the database for uniqueness.</small>




### __construct

Class constructor with database dependancy injection.

```php
UsernameGenerator::__construct( \Gibbon\Contracts\Database\Connection $pdo )
```









---

### addToken

Adds a string token that's replaced with the corresponding value when processing the username format.

```php
UsernameGenerator::addToken( string $name, string $value )
```









---

### addNumericToken

Adds a numeric token with a starting value and size that's incremented each time it's generated.

```php
UsernameGenerator::addNumericToken( string $name, string|integer $value, integer $size, integer $increment, \Gibbon\Data\function $callback = null )
```









---

### getToken

Get token data by name.

```php
UsernameGenerator::getToken( string $name ): array
```






**Return Value:**
`array`  Token data



---

### generateByRole

Generates a username based on the provided gibbonRoleID, using the 'isDefault' format if none exists for that role.

```php
UsernameGenerator::generateByRole( string|integer $gibbonRoleID ): string
```






**Return Value:**
`string`  Unique username



---

### generate

Generates a username based on the provided string format, replacing tokens with their corresponding values.

```php
UsernameGenerator::generate( string $format ): string
```






**Return Value:**
`string`  Unique username



---

### isUsernameUnique

Checks a username against the database for uniqueness.

```php
UsernameGenerator::isUsernameUnique( string $username ): boolean
```






**Return Value:**
`boolean`  True if unique



---

