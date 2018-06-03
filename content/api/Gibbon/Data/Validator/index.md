---
title: "Validator"
date: 2018-06-03T12:46:34+00:00
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

### stripTags

Wrapper for strip_tags, accepts an array of tags rather than a string.

```php
Validator::stripTags( &$value, &$allowableTags = array() ): string
```






**Return Value:**
`string`  



---

### stripAttributes

Strip disallowed attributes from tags using the DOM classes to walk over the HTML elements.

```php
Validator::stripAttributes( &$value, &$allowableTags = array() ): string
```






**Return Value:**
`string`  



---

### parseTagsFromString

Parse a tag string into an array of tag => array(attrs). Handles strip_tags and tinymce-style strings.

```php
Validator::parseTagsFromString( $tagString = '' ): array
```






**Return Value:**
`array`  



---

