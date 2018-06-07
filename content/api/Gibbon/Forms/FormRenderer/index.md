---
title: "FormRenderer"
weight: 0
class: \Gibbon\Forms\FormRenderer
generated: true
---

## FormRenderer

FormRenderer

Handles turning the Rows and Elements of a Form into HTML output. Replaceable component for extensibility.

* Full name: \Gibbon\Forms\FormRenderer
* This class implements: \Gibbon\Forms\FormRendererInterface

{{< api-example >}} 



### Methods

- [create](#create)<small> — Create and return an instance of FormRenderer.</small>
- [setWrapper](#setwrapper)<small> — Change the defailt HTML wrappers for a particular scope.</small>
- [renderForm](#renderform)<small> — Transform a Form object into a string of HTML and javascript output.</small>




### create

Create and return an instance of FormRenderer.

```php
static FormRenderer::create( ): object
```



* This method is **static**.


**Return Value:**
`object`  FormRenderer



---

### setWrapper

Change the defailt HTML wrappers for a particular scope.

```php
FormRenderer::setWrapper( string $name, string $value )
```









---

### renderForm

Transform a Form object into a string of HTML and javascript output.

```php
FormRenderer::renderForm( \Gibbon\Forms\Form $form ): string
```






**Return Value:**
`string`  



---

