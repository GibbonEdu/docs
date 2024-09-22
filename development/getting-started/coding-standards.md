---
title: "Coding Standards"
categories: ["support"]
tags: []
order: 20
contributors: ["rossdotparker", "skuipers"]
---
# Coding Standards

## Security

1.  When using `isActionAccessible()`, always hard code the address, rather than relying on session, get, post or server variables.
2.  For database connections, use the PDO class (instead of the more common mysql one), and parameterise any user-generated inputs. With PDO's parameters, you do not need to escape your input.

## Code Style

> Borrowed from Symfony: http://symfony.com/doc/current/contributing/code/standards.html

Gibbon follows the standards defined in the PSR-0, PSR-1, PSR-2 and PSR-4 documents.

Since a picture - or some code - is worth a thousand words, here's a short example containing most features described below:

```php
<?php
/*
Gibbon, Flexible & Open School System
Copyright (C) 2010, Ross Parker

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

namespace Acme;

/**
 * Coding standards demonstration.
 */
class FooBar
{
    const SOME_CONST = 42;

    /**
     * @var string
     */
    private $fooBar;

    /**
     * @param string $dummy Some argument description
     */
    public function __construct($dummy)
    {
        $this->fooBar = $this->transformText($dummy);
    }

    /**
     * @return string
     *
     * @deprecated
     */
    public function someDeprecatedMethod()
    {
        @trigger_error(sprintf('The %s() method is deprecated since version 2.8 and will be removed in 3.0. Use Acme\Baz::someMethod() instead.', __METHOD__), E_USER_DEPRECATED);

        return Baz::someMethod();
    }

    /**
     * Transforms the input given as first argument.
     *
     * @param bool|string $dummy   Some argument description
     * @param array       $options An options collection to be used within the transformation
     *
     * @return string|null The transformed input
     *
     * @throws \RuntimeException When an invalid option is provided
     */
    private function transformText($dummy, array $options = array())
    {
        $defaultOptions = array(
            'some_default' => 'values',
            'another_default' => 'more values',
        );

        foreach ($options as $option) {
            if (!in_array($option, $defaultOptions)) {
                throw new \RuntimeException(sprintf('Unrecognized option "%s"', $option));
            }
        }

        $mergedOptions = array_merge(
            $defaultOptions,
            $options
        );

        if (true === $dummy) {
            return null;
        }

        if ('string' === $dummy) {
            if ('values' === $mergedOptions['some_default']) {
                return substr($dummy, 0, 5);
            }

            return ucwords($dummy);
        }
    }

    /**
     * Performs some basic check for a given value.
     *
     * @param mixed $value     Some value to check against
     * @param bool  $theSwitch Some switch to control the method's flow
     *
     * @return bool|void The resultant check if $theSwitch isn't false, void otherwise
     */
    private function reverseBoolean($value = null, $theSwitch = false)
    {
        if (!$theSwitch) {
            return;
        }

        return !$value;
    }
}

```

### Structure

- Add a single space after each comma delimiter;
- Add a single space around binary operators (==, &&, ...), with the exception of the concatenation (.) operator;
- Place unary operators (!, --, ...) adjacent to the affected variable;
- Always use identical comparison unless you need type juggling;
- Use Yoda conditions when checking a variable against an expression to avoid an accidental assignment inside the condition statement (this applies to ==, !=, ===, and !==);
- Add a comma after each array item in a multi-line array, even after the last one;
- Add a blank line before return statements, unless the return is alone inside a statement-group (like an if statement);
- Use return null; when a function explicitly returns null values and use return; when the function returns void values;
- Use braces to indicate control structure body regardless of the number of statements it contains;
- Define one class per file - this does not apply to private helper classes that are not intended to be instantiated from the outside and thus are not concerned by the PSR-0 and PSR-4 autoload standards;
- Declare the class inheritance and all the implemented interfaces on the same line as the class name;
- Declare class properties before methods;
- Declare public methods first, then protected ones and finally private ones. The exceptions to this rule are the class constructor and the setUp and tearDown methods of PHPUnit tests, which must always be the first methods to increase readability;
- Declare all the arguments on the same line as the method/function name, no matter how many arguments there are;
- Use parentheses when instantiating classes regardless of the number of arguments the constructor has;
- Exception and error message strings must be concatenated using sprintf;
- Calls to trigger_error with type E_USER_DEPRECATED must be switched to opt-in via @ operator. Read more at Deprecations;
- Do not use else, elseif, break after if and case conditions which return or throw something;
- Do not use spaces around `[` offset accessor and before `]` offset accessor.

### Naming Conventions

- Use camelCase, not underscores, for variable, function and method names, arguments;
- Use underscores for option names and parameter names;
- Use namespaces for all classes;
- Prefix abstract classes with Abstract;
- Suffix interfaces with Interface;
- Suffix traits with Trait;
- Suffix exceptions with Exception;
- Use alphanumeric characters and underscores for file names;
- For type-hinting in PHPDocs and casting, use bool (instead of boolean or Boolean), int (instead of integer), float (instead of double or real);
- Don't forget to look at the more verbose Conventions document for more subjective naming considerations.

### Service Naming Conventions

- A service name contains groups, separated by dots;
- The DI alias of the bundle is the first group (e.g. fos_user);
- Use lowercase letters for service and parameter names;
- A group name uses the underscore notation.

### Documentation

- Add PHPDoc blocks for all classes, methods, and functions;
- Group annotations together so that annotations of the same type immediately follow each other, and annotations of a different type are separated by a single blank line;
- Omit the @return tag if the method does not return anything;
- The @package and @subpackage annotations are not used.

### License

- Gibbon is released under the GNU General Public License, and the license block has to be present at the top of every PHP file, before the namespace.
