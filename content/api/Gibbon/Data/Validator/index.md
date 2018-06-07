---
title: "Validator"
weight: 0
class: \Gibbon\Data\Validator
generated: true
---

## Validator

Validaton & Sanitization Class



* Full name: \Gibbon\Data\Validator

{{< api-example >}} 



### Methods

- [sanitize](#sanitize)<small> — Sanitize the input data.</small>
- [sanitizeHTML](#sanitizehtml)<small> — Sanitize an HTML string by stripping tags and handling the attributes within allowable tags.</small>




### sanitize

Sanitize the input data.

```php
Validator::sanitize( array $input, array $allowableTags = array(), boolean $utf8_encode = true ): array
```






**Return Value:**
`array`  



---

### sanitizeHTML

Sanitize an HTML string by stripping tags and handling the attributes within allowable tags.

```php
Validator::sanitizeHTML( &$value, array $allowableTags = array() ): string
```






**Return Value:**
`string`  



---

