The minimum components of a simple table are some columns and a DataSet (actions are optional).

The `->toDataSet()` method can be called on any $result from a PDO query, and doesn't require QueryCriteria.

The `->addColumn($name, $title)` method will grab array values by $name. Otherwise, if you need to display
different types of data, call `->format()` with a callable `function ($row) {}` or a `Format::using()` method.

```php
<?php
$table = DataTable::create('rollGroups');

$table->addColumn('name', __('Name'));
$table->addColumn('tutors', __('Form Tutors'))
      ->format(Format::using('nameList', ['Staff', true, true]));
$table->addColumn('space', __('Room'));
$table->addColumn('students', __('Students'));
$table->addColumn('website', __('Website'))
      ->format(Format::using('link', 'website'));

$actions = $table->addActionColumn()->addParam('gibbonRollGroupID');
$actions->addAction('view', __('View'))
        ->setURL('/modules/Roll Groups/rollGroups_details.php');

echo $table->render($result->toDataSet());
```