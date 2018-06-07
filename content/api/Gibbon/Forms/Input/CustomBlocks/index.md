---
title: "CustomBlocks"
weight: 0
class: \Gibbon\Forms\Input\CustomBlocks
generated: true
---

## CustomBlocks <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr></i></small>

Custom Blocks



* Full name: \Gibbon\Forms\Input\CustomBlocks
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a Blocks input with a given template.</small>
- [fromTemplate](#fromtemplate)<small> — Set a predefined layout using OutputableInterface which will be cloned for each new block.</small>
- [placeholder](#placeholder)<small> — Changes the placeholder string when no blocks are present.</small>
- [settings](#settings)<small> — Updates the settings array which is passed as json params to JS.</small>
- [addToolInput](#addtoolinput)<small> — Adds the given input into the tool bar at the bottom.</small>
- [addBlockButton](#addblockbutton)<small> — Adds the given button to the sidebar of each block.</small>
- [addBlock](#addblock)<small> — Adds a block from an array of data.</small>
- [addPredefinedBlock](#addpredefinedblock)<small> — Add a set of data that a new block can be created from via an identifier + add block trigger.</small>
- [getOutput](#getoutput)<small> — Gets the HTML output for this form element.</small>




### __construct

Create a Blocks input with a given template.

```php
CustomBlocks::__construct( \Gibbon\Forms\FormFactoryInterface &$factory, string $name, \Gibbon\Forms\Input\Session $session )
```









---

### fromTemplate

Set a predefined layout using OutputableInterface which will be cloned for each new block.

```php
CustomBlocks::fromTemplate( \Gibbon\Forms\OutputableInterface $block ): void
```

TODO: add fromAjax option for loading in templates dynamically?







---

### placeholder

Changes the placeholder string when no blocks are present.

```php
CustomBlocks::placeholder( string $value ): self
```






**Returns Self:** This method can be chained.



---

### settings

Updates the settings array which is passed as json params to JS.

```php
CustomBlocks::settings( string $value ): self
```






**Returns Self:** This method can be chained.



---

### addToolInput

Adds the given input into the tool bar at the bottom.

```php
CustomBlocks::addToolInput( \Gibbon\Forms\OutputableInterface $input ): self
```






**Returns Self:** This method can be chained.



---

### addBlockButton

Adds the given button to the sidebar of each block.

```php
CustomBlocks::addBlockButton( string $name, string $title, string $icon, $class = '' ): self
```

Note: The name of the button is triggered as an event on the Block element when clicked, as function(event, block, button)




**Returns Self:** This method can be chained.



---

### addBlock

Adds a block from an array of data.

```php
CustomBlocks::addBlock( string $id, array $data = array() ): self
```






**Returns Self:** This method can be chained.



---

### addPredefinedBlock

Add a set of data that a new block can be created from via an identifier + add block trigger.

```php
CustomBlocks::addPredefinedBlock( string $id, array $data = array() ): self
```






**Returns Self:** This method can be chained.



---

### getOutput

Gets the HTML output for this form element.

```php
CustomBlocks::getOutput( ): string
```






**Return Value:**
`string`  



---

