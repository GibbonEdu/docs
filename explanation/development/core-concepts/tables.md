---
title: Tables
categories: 
tags: 
order: 40
draft: false
contributors:
  - skuipers
---
# Tables

Use this namespace for basic tables:

`use Gibbon\Tables\DataTable;`

Our goal with the table ooification is to refactor the current tables, which are written as a mix of procedural php + html + javascript + inline css. These are being replaced with a set of `DataTable` classes and functionality, which aim to provide an easily readable set of methods for developers to compose a DataTable object. 

::: info Refactoring is Ongoing  
Eventually, once routing and controllers are introduced, these DataTable objects will be passed to a View rather than echoed out in the script itself. More on that later!
:::

**For example:**

[An original Roll Groups table](https://github.com/GibbonEdu/core/blob/v15.0.01/modules/Roll%20Groups/rollGroups.php)
and
[the refactored version of the same table.](https://github.com/GibbonEdu/core/blob/v18.0.00/modules/Roll%20Groups/rollGroups.php)

Part of this refactoring involves introducing Gateway classes, which help us to collect together the bits of SQL queries in the codebase into a reusable, maintainable class. This is done by creating a new Gateway class per table and transplanting the `$data` and `$sql` strings from the script into a method, such as `selectRollGroupsBySchoolYear()` (see [RollGroupGateway](https://github.com/GibbonEdu/core/blob/v18.0.00/src/Domain/RollGroups/RollGroupGateway.php#L66) based on the above example).

The gateway classes also help to automatically handle passing the sort, filter and pagination variables from the UI via javascript back into the DataTable. This is done with an SQL Query Builder library and extending the `QueryableGateway` class. It passes in a `QueryCriteria` object for DataTable and handles the rest. See [queryRollGroups](https://github.com/GibbonEdu/core/blob/v18.0.00/src/Domain/RollGroups/RollGroupGateway.php#L39) from the above example.

**The table ooification process goes something like:**

- Create a Gateway class for the database table (if one doesn’t exist)
- Instantiate a new DataTable object: 
	`$table = DataTable::create('rollGroups’);`
- Add columns with `addColumn` and use `->format()` as needed to format the output. There’s a static `Format` utility class which provides the most common formats used in Gibbon.
- Add an Action column if the table has one with `addActionColumn()`
- See below for more examples.

The above works well for simple tables. Many of the tables in Gibbon also need pagination and search/sort/filters. To do this, use something like:
	`$table = DataTable::createPaginated('users’, $criteria);`
	
Then:
- Extend the Gateway class from `QueryableGateway`.
- Re-write the `$sql` string as a `querySomeTable()` method, using the [Aura SQL Query](https://github.com/auraphp/Aura.SqlQuery/blob/3.x/docs/index.md) syntax.
- Instantiate a `QueryCriteria` object using the `newQueryCriteria()` method on the Gateway class. Pass this in to your `querySomeTable()` method.
- See below for some examples.

```php
<?php

/**
 * Simple Data Table
 * 
 * The minimum components of a simple table are some columns and a DataSet (actions are optional).
 *
 * The ->toDataSet() method can be called on any $result from a PDO query, and doesn't require QueryCriteria.
 * 
 * The ->addColumn($name, $title) method will grab array values by $name. Otherwise, if you need to display
 * different types of data, call ->format() with a callable function ($row) {} or a Format::using() method.
 */

$table = DataTable::create('rollGroups');

$table->addColumn('name', __('Name'));
$table->addColumn('tutors', __('Form Tutors'))->format(Format::using('nameList', ['Staff', true, true]));
$table->addColumn('space', __('Room'));
$table->addColumn('students', __('Students'));
$table->addColumn('website', __('Website'))->format(Format::using('link', 'website'));

$actions = $table->addActionColumn()->addParam('gibbonRollGroupID');
$actions->addAction('view', __('View'))
        ->setURL('/modules/Roll Groups/rollGroups_details.php');

echo $table->render($result->toDataSet());


/**
 * Paginated Data Table
 * 
 * This type of table automatically handles pagination, sorting, etc. To get started make a QueryableGateway.
 * This is any Gateway class that extends QueryableGateway, see src/Domain eg: Domain\Staff\StaffGateway
 */

$staffGateway = $container->get(StaffGateway::class);

/**
 * Creating the $criteria sets the defaults for this table, which are modified as the user interacts with it.
 * 
 * Optional: Pass in any search strings here if the table has a search form. Optionally set a default sortBy.
 * The ->fromPOST() method is always added last so it overwrites any defaults.
 * 
 * The minimum for creating this criteria would be $staffGateway->newQueryCriteria()->fromPOST();
 */

// QUERY
$criteria = $staffGateway->newQueryCriteria()
    ->searchBy($staffGateway->getSearchableColumns(), $search)
    ->filterBy('all', $allStaff)
    ->sortBy(['surname', 'preferredName'])
    ->fromPOST();

$staff = $staffGateway->queryAllStaff($criteria);

/**
 * Create a data table and pass in the criteria. This is used to render the table to display sort, filters, etc.
 * 
 * Optional: Header actons can be added here for convenience. To display a Filters drop-down on the table, 
 * pass in an array of value => label pairs. Meta Data is optional and used by different renderers, 
 * in this case a PaginatedRenderer.
 */
    
// DATA TABLE
$table = DataTable::createPaginated('staffManage', $criteria);

$table->addHeaderAction('add', __('Add'))
    ->setURL('/modules/Staff/staff_manage_add.php')
    ->addParam('search', $search)
    ->displayLabel();

$table->addMetaData('filterOptions', [
    'all:on'      => __('All Staff'),
    'status:full' => __('Status').': '.__('Full'),
    'status:left' => __('Status').': '.__('Left'),
    'active:Y'    => __('Active').': '.__('Yes'),
    'active:N'    => __('Active').': '.__('No'),
]);

/**
 * Add columns, with or without a format(). Methods include ->title() for hover text, ->description() 
 * and ->width() as a % or pixel value.
 * 
 * The ->sortable() method can take the name of a single column, or an array of columns to sort by, plus 
 * an optional direction ASC/DESC as a second parameter. Call ->notSortable() to disable sorting.
 */
// COLUMNS

$table->addColumn('image_240', __('Photo'))
      ->width('10%')
      ->notSortable()
      ->format(Format::using('userPhoto', 'image_240'));

$table->addColumn('name', __('Name'))
    ->sortable(['surname', 'preferredName']);

$table->addColumn('status', __('Status'))->width('10%');


/**
 * Actions are added inside a ->format() function call so they can be modified based on the $row data.
 * 
 * URL params can be passed in to the ActionColumn with ->addParam($name, $value) and they'll be 
 * added to _every_ action. The ->addParam() or ->addParams() can also be called on an individual Action.
 */

// ACTIONS
$table->addActionColumn()
    ->addParam('gibbonStaffID')
    ->addParam('search', $criteria->getSearchText(true))
    ->format(function ($row, $actions) use ($guid) {
        $actions->addAction('edit', __('Edit'))
                ->setURL('/modules/Staff/staff_manage_edit.php');

        $actions->addAction('delete', __('Delete'))
                ->setURL('/modules/Staff/staff_manage_delete.php');
    });


echo $table->render($staff);


/**
 * Formatting (any type of DataTable)
 * 
 * Use the ->format() method with any type of callable to display things that depend on the $row data.
 * 
 * When using an anonymous function, the current $row data is passed in as the first param.
 */

$table->addColumn('thing', __('Display Thing'))->format(function ($row) {
    return $row['active'] == 'Y' ? 'Some Thing' : 'Other Thing';
});

/**
 * When using built-in Format, the Format::using($methodName, $params) method tells the formatter
 * which $row values to pass into the named method. Eg: Format::using('date', 'dateCreated').
 * The second argument can be a single value or array of values. 
 * 
 * If the array key doesnt exist in $row, the raw value will be passed to the formatter. In this example,
 * the first three keys in the array are likely pulled from $row data, the last three are passed raw.
 */

$table->addColumn('name', __('Name'))
    ->format(Format::using('name', ['title', 'preferredName', 'surname', 'Staff', true, true]));

/**
 * You can also use Format methods inside a function if you need to combine $row data.
 */

$table->addColumn('name', __('Name'))->format(function ($row) {
    return Format::date($row['dob']) .' ('. Format::age($row['dob']).')';
});
```