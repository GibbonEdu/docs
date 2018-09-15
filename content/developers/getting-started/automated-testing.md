---
title: "Automated Testing"
categories: ["testing"]
tags: []
weight: 40
contributors: ["skuipers"]
---

Gibbon uses PHPUnit and Codeception for automated testing, introduced in v14.0.00. Both testing frameworks can be installed and configured to run in your localhost.

### PHPUnit ###
PHPUnit tests can be run with the `phpunit .` command in the /tests folder

### Codeception ###
Codeception tests can be run with the `codecept run` command in the /tests folder

Codeception involves integration testing and makes use of a database connection; it will not run unless explicitly enabled. To enable Codeception testing in Gibbon, add the following to your config.php file:

```php
$testEnvironment = 'codeception';
```

### Travis CI ###

Pull requests and commits to the development branch are automatically built & tested using [Travis CI](https://travis-ci.org/GibbonEdu/core).
