---
title: "Trigger"
weight: 0
class: \Gibbon\Forms\Layout\Trigger
generated: true
---

## Trigger <small><i>implements <abbr title="\Gibbon\Forms\OutputableInterface">OutputableInterface</abbr></i></small>

Trigger



* Full name: \Gibbon\Forms\Layout\Trigger
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a trigger to toggle visibility of the specified CSS/jQuery selector.</small>
- [onSelect](#onselect)<small> — Link this trigger to a select input by name.</small>
- [onCheckbox](#oncheckbox)<small> — Link this trigger to a checkbox input by name.</small>
- [onRadio](#onradio)<small> — Link this trigger to a radio input by name.</small>
- [when](#when)<small> — Set which value the trigger should respond to.</small>
- [whenNot](#whennot)<small> — Set the trigger to respond to all values except the specified one.</small>
- [getOutput](#getoutput)<small> — Get the javascript output of the trigger.</small>




### __construct

Create a trigger to toggle visibility of the specified CSS/jQuery selector.

```php
Trigger::__construct( string $selector )
```









---

### onSelect

Link this trigger to a select input by name.

```php
Trigger::onSelect( string $name ): self
```






**Returns Self:** This method can be chained.



---

### onCheckbox

Link this trigger to a checkbox input by name.

```php
Trigger::onCheckbox( string $name ): self
```






**Returns Self:** This method can be chained.



---

### onRadio

Link this trigger to a radio input by name.

```php
Trigger::onRadio( string $name ): self
```






**Returns Self:** This method can be chained.



---

### when

Set which value the trigger should respond to.

```php
Trigger::when( string $value ): self
```






**Returns Self:** This method can be chained.



---

### whenNot

Set the trigger to respond to all values except the specified one.

```php
Trigger::whenNot( string $value ): self
```






**Returns Self:** This method can be chained.



---

### getOutput

Get the javascript output of the trigger.

```php
Trigger::getOutput( ): string
```






**Return Value:**
`string`  



---

