+++
title = "Module Development"
date = 2017-08-20T18:16:23+08:00
categories = ["support", "customization"]
tags = []
weight = 30
# Author Details
authorname = "Ross Parker"
authorurl = "http://rossparker.org/"
+++

If you are interested in developing a module for Gibbon, use the instructions below. Contact [support@gibbonedu.org](mailto:support@gibbonedu.org) if you are stuck.

## Module Basics

Modules are the easiest way to extend Gibbon without having to hack the core, and risk losing your changes on upgrade. Each module provides one or more actions, and each action can be assigned to user roles through a system of permissions. Modules can be installed, updated and uninstalled.

## Starter Module

Download the [starter module](https://gibbonedu.org/wp-content/uploads/2012/11/Starter-Module-v12.0.00.zip) and use it to begin coding up a module. Remove or replace the GNU GPL statement depending on your needs. The starter module consists of:

*   **CHANGEDB.php** - stores database changes for each version of the module, used in upgrades.
*   **CHANGELOG.txt** - list of changes per version
*   **css/module.css** - CSS file loaded up by the core for the module, allowing for per-module styling
*   **img** - a space to store any images for the module
*   **index.php** - a sample landing page. Replace isModuleAvailable() with isActionAvailable() if you want to test for access to a specific action rather than the whole system.
*   **js/module.js** - JavaScript file loaded up by the core for the module, allowing for per-module scripting
*   **manifest.php** - used to install the software, creates all actions, permissions, tables, settings, etc
*   **moduleFunctions.php** - a place for any module-specific PHP functions
*   **version.php** - the version number for the code (as opposed to the database version number, the difference between is used in the upgrade progress).

## Module Translation

As of Gibbon v13 (released on January 20th 2016), additional modules are translatable. [v4.5.00 of the Free Learning module](https://github.com/GibbonEdu/module-freeLearning/commit/410f6a7efa4f8a6bb8d96aa0b915a7fc7402f4a8) is available as a model to demonstrate how module translation works (it is not yet translated, but can be). To prepare a module for translation:

*   Add a/i18n folder into the module root, and include sub folders for each language, as follows:
    *   /i18n
        *   es_ES
            *   LC_MESSAGES
*   The LC_MESSAGES subfolder for each language should contain a PO and an MO file (using the GNU GetText system), each named with the module name (e.g. Free Learning.po and Free Learning.mo)
*   The manifest.php file should have a Translatables section, with one entry for each string from the database that is not in module's (such as action descriptions), marking them for translation:
    *   e.g. `__($guid, 'Allows a user to browse all active units.');`
*   For any translatable text in the module's code, wrap it for translation as:
    *   e.g. `__($guid, $row['nameDisplay'], 'Free Learning');` where the third argument is the module name and sets the domain for translation.
    *   This process is not yet 100% complete on the Free Learning module.
*   In order to generate your PO file, use a variant of this [xgettextGenerationCommands.sh shell script](https://gibbonedu.org/wp-content/uploads/2012/11/xgettextGenerationCommands.sh)
    *   This script could be improved by filtering on the domain in `__()`, so as to ignore any strings that already exist in gibbon.PO, and so need not be retranslated. _Any takers?_

The PO file can now be translated, and the resulting MO file produced. Installing and using such a module should lead to the relevant strings being translated.

## Module Hooks

The Gibbon Core provides three hooks, which allow additional modules to insert data into the interface of the Core modules. These hooks are for Public Home Page, Student Profile and Unit. To use one of the hooks, your module's manifest file must write an entry to the core database table gibbonHook, specifying:

1.  **name** - The name of the hook will be displayed in the interface: for example, a Unit hook called "IB MYP" will result in such units being labelled as "IB MYP Unit" through the system.
2.  **type**- The system currently provides the following hook types
    1.  Parent Dashboard
    2.  Student Dashboard (v12+ only)
    3.  Staff Dashboard (v12+ only)
    4.  Public Homepage
    5.  Student Profile
    6.  Unit
3.  **options**- This field consists of a serialized array of options for the hook. The exact options depend on the hook, as described below:
    1.  Parent/Student/Staff Dashboard
        1.  sourceModuleName - the name of the source module that data is being drawn from (e.g. IB Diploma)
        2.  sourceModuleAction - the name of the action in the source module that the user needs to have access to in order to see this data
        3.  sourceModuleInclude - the php file to include, which spits out the data into the Parental Dashboard
    2.  Public Home Page
        1.  toggleSettingName - the name of the gibbonSetting setting which allows this home page element to be turned on or off
        2.  toggleSettingScope - the scope of the gibbonSetting setting which allows this home page element to be turned on or off
        3.  toggleSettingValue - the "on" value of the gibbonSetting setting which allows this home page element to be turned on or off
        4.  title - the title of the section to be displayed on the public home page
        5.  text - the text of the section to be displayed on the public home page
    3.  Student Profile
        1.  sourceModuleName - the name of the source module that data is being drawn from (e.g. IB Diploma)
        2.  sourceModuleAction - the name of the action in the source module that the user needs to have access to in order to see this data
        3.  sourceModuleInclude - the php file to include, which spits out the data into the Student Profile page
    4.  Unit
        1.  unitTable - The name of the table containing units to be hooked in
        2.  unitIDField - The unique id field for unitTable
        3.  unitCourseIDField - The foreign key field to link unitTable to gibbonCourse (ties unit to a course)
        4.  unitNameField - The field in unitTable which holds the name of the unit
        5.  unitDescriptionField - The field in unitTable which holds the description of the unit
        6.  unitSmartBlockTable - The name of the table where a unit's smart blocks are stored
        7.  unitSmartBlockIDField - The unique id field for unitSmartBlockIDField
        8.  unitSmartBlockJoinField - The name of the field used to join unitTable and unitSmartBlockJoinField in mySQL
        9.  unitSmartBlockTitleField - The field for storing title
        10.  unitSmartBlockTypeField - The field for storing type
        11.  unitSmartBlockLengthField - The field for storing length
        12.  unitSmartBlockContentsField - The field for storing contents
        13.  unitSmartBlockTeachersNotesField - The field for storing teachersNotes
        14.  unitSmartBlockSequenceNumberField - The field for storing sequenceNumber
        15.  classLinkTable - The name of the table which links a hooked unit to a particular class
        16.  classLinkIDField - The unique id field for classLinkTable
        17.  classLinkJoinFieldUnit - The name of the field used to join unitTable and classLinkTable in mySQL
        18.  classLinkJoinFieldClass - The name of the field used to join classLinkTable to gibbonCourseClass in mySQL
        19.  classSmartBlockTable - The name of the table where a unit's smart blocks are stored
        20.  classSmartBlockIDField - The unique id field for classSmartBlockTable
        21.  classSmartBlockJoinField - The name of the field used to join classLinkTable and classSmartBlockTable in mySQL
        22.  classSmartBlockPlannerJoin - the name of the field which links to a Gibbon Planner entry (e.g. gibbonPlannerEntryID)
        23.  classSmartBlockUnitBlockJoinField - the name of the field which links to the master block that this block was made from (e.g. the unique ID field f
        24.  classSmartBlockTitleField - The field for storing title
        25.  classSmartBlockTypeField - The field for storing type
        26.  classSmartBlockLengthField - The field for storing length
        27.  classSmartBlockContentsField - The field for storing contents
        28.  classSmartBlockTeachersNotesField - The field for storing teachersNotes
        29.  classSmartBlockSequenceNumberField - The field for storing sequenceNumber
        30.  classSmartBlockCompleteField - The field for storing complete
4.  **gibbonModuleID** - This is needed to remove hooks when a module is uninstalled.
    1.  Because the module ID is generated on install, you cannot hard code it into your module. You can use the following sql as a subquery when you create your hook insertion query: `SELECT gibbonModuleID FROM gibbonModule WHERE name='$name'`

As an example, if you want to use the Units hook, you could use the following code in your manifest, setting your own array values according to your database table design:

    $array['unitTable'] = 'test';
    $array['unitIDField'] = 'gibbonUnitID';
    $array['unitCourseIDField'] = 'gibbonCourseID';
    $array['unitNameField'] = 'name';
    $array['unitDescriptionField'] = 'description';
    $array['classLinkTable'] = 'testClass';
    $array['classLinkJoinField'] = 'gibbonUnitID';
    $array['classLinkIDField'] = 'gibbonCourseClassID';
    $array['classLinkStartDateField'] = 'date';
    print_r($array);
