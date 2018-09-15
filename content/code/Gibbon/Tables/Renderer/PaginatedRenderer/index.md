---
title: "PaginatedRenderer"
weight: 0
class: \Gibbon\Tables\Renderer\PaginatedRenderer
generated: true
---

## PaginatedRenderer <small><i>implements <abbr title="\Gibbon\Tables\Renderer\RendererInterface">RendererInterface</abbr></i></small>

PaginatedRenderer



* Full name: \Gibbon\Tables\Renderer\PaginatedRenderer
* Parent class: \Gibbon\Tables\Renderer\SimpleRenderer
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Creates a renderer that uses page info from the QueryCriteria to display a paginated data table.</small>
- [renderTable](#rendertable)<small> — Render the table to HTML. TODO: replace with Twig.</small>




###### Inherited from SimpleRenderer
- [__construct]({{< ref "code/Gibbon/Tables/Renderer/SimpleRenderer/index.md#__construct" >}})
- [renderTable]({{< ref "code/Gibbon/Tables/Renderer/SimpleRenderer/index.md#rendertable" >}})

###### Inherited from BasicAttributesTrait
- [setID]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setid" >}})
- [getID]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getid" >}})
- [setTitle]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#settitle" >}})
- [getTitle]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#gettitle" >}})
- [setClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setclass" >}})
- [addClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#addclass" >}})
- [removeClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#removeclass" >}})
- [getClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getclass" >}})
- [addData]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#adddata" >}})
- [getData]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getdata" >}})
- [getAttributeString]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getattributestring" >}})



### __construct

Creates a renderer that uses page info from the QueryCriteria to display a paginated data table.

```php
PaginatedRenderer::__construct( \Gibbon\Domain\QueryCriteria $criteria, string $path )
```

Hooks into the DataTable functionality in core.js to load using AJAX.







---

### renderTable

Render the table to HTML. TODO: replace with Twig.

```php
PaginatedRenderer::renderTable( \Gibbon\Tables\DataTable $table, \Gibbon\Domain\DataSet $dataSet ): string
```






**Return Value:**
`string`  



---

