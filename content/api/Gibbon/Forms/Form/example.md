#### Example

```php
<?php
$form = Form::create('action', $_SESSION[$guid]['absoluteURL'].'/modules/'.$_SESSION[$guid]['module'].'/thing.php');
                
$form->addHiddenValue('address', $_SESSION[$guid]['address']);

$row = $form->addRow();
    $row->addFooter();
    $row->addSubmit();

echo $form->getOutput();
```