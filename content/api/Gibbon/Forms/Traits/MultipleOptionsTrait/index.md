---
title: "MultipleOptionsTrait"
weight: 0
class: \Gibbon\Forms\Traits\MultipleOptionsTrait
generated: true
---

## MultipleOptionsTrait 

MultipleOptions

Adds functionaly for types of input that offer users multiple options. Methods are provided for reading options from a variety of sources.

* Full name: \Gibbon\Forms\Traits\MultipleOptionsTrait

{{< api-example >}} 



### Methods

- [fromString](#fromstring)<small> — Build an internal options array from a provided CSV string.</small>
- [fromArray](#fromarray)<small> — Build an internal options array from a provided array of $key => $value pairs.</small>
- [fromQuery](#fromquery)<small> — Build an internal options array from an SQL query with required value and name fields</small>
- [fromResults](#fromresults)<small> — Build an internal options array from the result set of a PDO query.</small>
- [getOptions](#getoptions)<small> — Gets the internal options collection.</small>
- [getOptionCount](#getoptioncount)<small> — Recursivly count the total options in the collection.</small>




### fromString

Build an internal options array from a provided CSV string.

```php
MultipleOptionsTrait::fromString( string $value ): self
```






**Returns Self:** This method can be chained.



---

### fromArray

Build an internal options array from a provided array of $key => $value pairs.

```php
MultipleOptionsTrait::fromArray( array $values ): self
```






**Returns Self:** This method can be chained.



---

### fromQuery

Build an internal options array from an SQL query with required value and name fields

```php
MultipleOptionsTrait::fromQuery( \Gibbon\Contracts\Database\Connection $pdo, string $sql, array $data = array(), $groupBy = false ): self
```






**Returns Self:** This method can be chained.



---

### fromResults

Build an internal options array from the result set of a PDO query.

```php
MultipleOptionsTrait::fromResults( object $results, $groupBy = false ): string
```






**Return Value:**
`string`  



---

### getOptions

Gets the internal options collection.

```php
MultipleOptionsTrait::getOptions( ): array
```






**Return Value:**
`array`  



---

### getOptionCount

Recursivly count the total options in the collection.

```php
MultipleOptionsTrait::getOptionCount( ): integer
```






**Return Value:**
`integer`  



---

