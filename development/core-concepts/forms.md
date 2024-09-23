---
title: Forms
categories: 
tags: 
order: 30
draft: false
contributors:
  - skuipers
---
# Forms

Use this namespace for all forms:

`use Gibbon\Forms\Form;`

### Form - Basic example.

```php
$form = Form::create('action', $_SESSION[$guid]['absoluteURL'].'/modules/'.$_SESSION[$guid]['module'].'/thing.php');
                
$form->addHiddenValue('address', $_SESSION[$guid]['address']);

$row = $form->addRow();
    $row->addSubmit();

echo $form->getOutput();
```


### Delete Form

Namespace and form example.

```php
use Gibbon\Forms\Prefab\DeleteForm;

$form = DeleteForm::createForm($_SESSION[$guid]['absoluteURL'].'/modules/'.$_SESSION[$guid]['module']."/role_manage_deleteProcess.php?gibbonRoleID=$gibbonRoleID");
echo $form->getOutput();
```

### Search Form
```php
$form = Form::create('search', $_SESSION[$guid]['absoluteURL'].'/index.php', 'get');

$form->addHiddenValue('q', '/modules/'.$_SESSION[$guid]['module'].'/applicationForm_manage.php');

$row = $form->addRow();
    $row->addLabel('search', __('Search For'))->description(__('Preferred, surname, username.'));
    $row->addTextField('search')->setValue($search);

$row = $form->addRow();
    $row->addSearchSubmit($gibbon->session, __('Clear Search'));

echo $form->getOutput();
```

## Edit Forms
At the end of a form, you can call loadAllValuesFrom() with an array of values, and it will use the keys in that array to call setValue on each field in the form. This is the easiest way to load a record into a form for editing. Dates loaded this way are automatically converted from the YYYY-MM-DD format into the system locale.

```php
$form->loadAllValuesFrom($values);
```


## Sample Form Inputs

```php
// Text
$row = $form->addRow();
    $row->addLabel('name', __('Name'))->description(__('Description'));
    $row->addTextField('name')->required()->maxLength(10);

// Number
$row = $form->addRow();
    $row->addLabel('capacity', __('Capacity'));
    $row->addNumber('capacity')->maxLength(5)->decimalPlaces(0);

// Readonly
$row = $form->addRow();
    $row->addLabel('value', __('Label'))->description(__('Description'));
    $row->addTextField('value')->readonly()->setValue($value);

// Text Area
$row = $form->addRow();
    $row->addLabel('comment', __('Comment'));
    $row->addTextArea('comment')->setRows(8);

// Text Area - Full Width
$row = $form->addRow();
    $column = $row->addColumn();
    $column->addLabel('medicalInformation', __('Medical Information'))->description(__('Please indicate any medical conditions.'));
    $column->addTextArea('medicalInformation')->setRows(5)->setClass('fullWidth');

// Rich Text Editor
$row = $form->addRow();
    $column = $row->addColumn();
    $column->addLabel('body', __('Description'));
    $column->addEditor('body', $guid)->setRows(15)->showMedia()->setValue($body);

// Checkbox
$row = $form->addRow();
    $row->addLabel('value', __('Label'))->description(__('Description'));
    $row->addCheckbox('value')->fromArray($yearGroups)->checked($checked);

// Select
$row = $form->addRow();
    $row->addLabel('value', __('Label'));
    $row->addSelect('value');

// SQL Select
$sql = "SELECT gibbonScaleID as value, name FROM gibbonScale WHERE (active='Y') ORDER BY name";
$row = $form->addRow();
    $row->addLabel('value', __('Label'))->description(__('Description'));
    $row->addSelect('value')->fromQuery($pdo, $sql)->placeholder();

// Setting Select
$types = getSettingByScope($connection2, 'School Admin', 'facilityTypes');
$row = $form->addRow();
    $row->addLabel('type', __('Type'));
    $row->addSelect('type')->fromString($types);

// Alerts
$form->addRow()->addAlert($policy, 'warning');

// YesNo
$row = $form->addRow();
    $row->addLabel('value', __('Label'))->description(__('Description'));
    $row->addYesNo('value');

// URL
$row = $form->addRow();
    $row->addLabel('website', __('Website'))->description(__('Include http://'));
    $row->addURL('website')->maxLength(255);

// Date
$row = $form->addRow();
    $row->addLabel('currentDate', __('Date'))->description($_SESSION[$guid]['i18n']['dateFormat'])->prepend(__('Format:'));
    $row->addDate('currentDate')->setValue(Format::dateConvert($currentDate))->required();

// Time
$row = $form->addRow();
    $row->addLabel('timeIn', __('Time In'));
    $row->addTime('timeIn')->setValue(date('H:i'));

// Table

$table = $form->addRow()->addTable()->addClass('colorOddEven');

$header = $table->addHeaderRow();
$header->addContent(__('Name'));
$header->addContent(__('Role'));

$row = $table->addRow();
$row->addContent();
$row->addContent();
$row->addContent();
```

### Finish & Output Form
  
```php
$row = $form->addRow();
    $row->addFooter();
    $row->addSubmit();
    // OR $row->addSearchSubmit($gibbon->session);

echo $form->getOutput();
```


## Database

Add this namespace, and then use the setFactory method to add the DatabaseFormFactory.

`use Gibbon\Forms\DatabaseFormFactory;`

`$form->setFactory(DatabaseFormFactory::create($pdo));`


### Database Inputs
See the DatabaseFormFactory class for the full list.

```php
// SELECT - Example: all spaces
$row = $form->addRow();
    $row->addLabel('value', __('Label'));
    $row->addSelectSpace('value');

// SELECT All Users
$row = $form->addRow();
    $row->addLabel('gibbonPersonID', __('Users'));
    $row->addSelectUsers('gibbonPersonID');

// SELECT All Staff
$row = $form->addRow();
    $row->addLabel('staff', __('Staff'));
    $row->addSelectStaff('staff')->selectMultiple();

// SELECT All Students
$row = $form->addRow();
    $row->addLabel('gibbonPersonID', __('Child\'s Name'));
    $row->addSelectStudent('gibbonPersonID', $_SESSION[$guid]['gibbonSchoolYearID'])->selectMultiple();
```