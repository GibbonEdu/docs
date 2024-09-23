---
title: "Automated Testing"
categories: ["testing"]
tags: []
order: 80
contributors: ["skuipers"]
---
# Automated Testing

Gibbon uses [PHPUnit](https://phpunit.de/) and [Codeception](https://codeception.com/) for automated testing. Both testing frameworks can be installed and configured to run in your localhost.

::: warning Note
Our refactoring efforts are ongoing, and the code coverage for automated tests is not all-encompassing. A passing test does not guarantee a working codebase: please always test manually too.
:::
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
