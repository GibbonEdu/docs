---
title: "FormFactory"
weight: 0
class: \Gibbon\Forms\FormFactory
generated: true
---

## FormFactory <small><i>implements <abbr title="\Gibbon\Forms\FormFactoryInterface">FormFactoryInterface</abbr></i></small>

FormFactory

Handles Form object creation, including pre-defined elements. Replaceable component. Default factory can be extended to add types.

* Full name: \Gibbon\Forms\FormFactory
* This class implements: 
Warning: strrchr() expects parameter 1 to be string, object given in /Users/sankuipe/Desktop/Localhost/documentor/src/Extension/TwigMarkdownAnchorLink.php on line 108


{{< api-example >}} 



### Methods

- [create](#create)<small> — Create and return an instance of FormFactory.</small>
- [createRow](#createrow)
- [createColumn](#createcolumn)
- [createTable](#createtable)
- [createDataTable](#createdatatable)
- [createTableCell](#createtablecell)
- [createGrid](#creategrid)
- [createTrigger](#createtrigger)
- [createLabel](#createlabel)
- [createHeading](#createheading)
- [createContent](#createcontent)
- [createWebLink](#createweblink)
- [createCustomField](#createcustomfield)
- [createTextArea](#createtextarea)
- [createTextField](#createtextfield)
- [createFinder](#createfinder)
- [createEditor](#createeditor)
- [createEmail](#createemail)
- [createURL](#createurl)
- [createNumber](#createnumber)
- [createCurrency](#createcurrency)
- [createPassword](#createpassword)
- [createFileUpload](#createfileupload)
- [createDate](#createdate)
- [createTime](#createtime)
- [createCheckbox](#createcheckbox)
- [createRadio](#createradio)
- [createSelect](#createselect)
- [createMultiSelect](#createmultiselect)
- [createButton](#createbutton)
- [createCustomBlocks](#createcustomblocks)
- [createSubheading](#createsubheading)
- [createAlert](#createalert)
- [createSubmit](#createsubmit)
- [createSearchSubmit](#createsearchsubmit)
- [createConfirmSubmit](#createconfirmsubmit)
- [createFooter](#createfooter)
- [createYesNo](#createyesno)
- [createYesNoRadio](#createyesnoradio)
- [createCheckAll](#createcheckall)
- [createSelectTitle](#createselecttitle)
- [createSelectGender](#createselectgender)
- [createSelectRelationship](#createselectrelationship)
- [createSelectEmergencyRelationship](#createselectemergencyrelationship)
- [createSelectMaritalStatus](#createselectmaritalstatus)
- [createSelectBloodType](#createselectbloodtype)
- [createSelectCurrency](#createselectcurrency)




### create

Create and return an instance of FormFactory.

```php
static FormFactory::create( ): object
```



* This method is **static**.


**Return Value:**
`object`  FormFactory



---

### createRow



```php
FormFactory::createRow( $id = '' )
```









---

### createColumn



```php
FormFactory::createColumn( $id = '' )
```









---

### createTable



```php
FormFactory::createTable( $id = '' )
```









---

### createDataTable



```php
FormFactory::createDataTable( $id, $criteria )
```









---

### createTableCell



```php
FormFactory::createTableCell( $content = '' )
```









---

### createGrid



```php
FormFactory::createGrid( $id = '', $columns = 1 )
```









---

### createTrigger



```php
FormFactory::createTrigger( $selector = '' )
```









---

### createLabel



```php
FormFactory::createLabel( $for, $label )
```









---

### createHeading



```php
FormFactory::createHeading( $content = '' )
```









---

### createContent



```php
FormFactory::createContent( $content = '' )
```









---

### createWebLink



```php
FormFactory::createWebLink( $content = '' )
```









---

### createCustomField



```php
FormFactory::createCustomField( $name, $fields = array() )
```









---

### createTextArea



```php
FormFactory::createTextArea( $name )
```









---

### createTextField



```php
FormFactory::createTextField( $name )
```









---

### createFinder



```php
FormFactory::createFinder( $name )
```









---

### createEditor



```php
FormFactory::createEditor( $name, $guid )
```









---

### createEmail



```php
FormFactory::createEmail( $name )
```









---

### createURL



```php
FormFactory::createURL( $name )
```









---

### createNumber



```php
FormFactory::createNumber( $name )
```









---

### createCurrency



```php
FormFactory::createCurrency( $name )
```









---

### createPassword



```php
FormFactory::createPassword( $name )
```









---

### createFileUpload



```php
FormFactory::createFileUpload( $name )
```









---

### createDate



```php
FormFactory::createDate( $name )
```









---

### createTime



```php
FormFactory::createTime( $name )
```









---

### createCheckbox



```php
FormFactory::createCheckbox( $name )
```









---

### createRadio



```php
FormFactory::createRadio( $name )
```









---

### createSelect



```php
FormFactory::createSelect( $name )
```









---

### createMultiSelect



```php
FormFactory::createMultiSelect( $name )
```









---

### createButton



```php
FormFactory::createButton( $label = 'Button', $onClick = '', $id = null )
```









---

### createCustomBlocks



```php
FormFactory::createCustomBlocks( $name, \Gibbon\Session $session )
```









---

### createSubheading



```php
FormFactory::createSubheading( $content, $tag = 'h4' )
```









---

### createAlert



```php
FormFactory::createAlert( $content, $level = 'warning' )
```









---

### createSubmit



```php
FormFactory::createSubmit( $label = 'Submit' )
```









---

### createSearchSubmit



```php
FormFactory::createSearchSubmit( $session, $clearLabel = 'Clear Filters', $passParams = array() )
```









---

### createConfirmSubmit



```php
FormFactory::createConfirmSubmit( $label = 'Yes', $cancel = false )
```









---

### createFooter



```php
FormFactory::createFooter( $required = true )
```









---

### createYesNo



```php
FormFactory::createYesNo( $name )
```









---

### createYesNoRadio



```php
FormFactory::createYesNoRadio( $name )
```









---

### createCheckAll



```php
FormFactory::createCheckAll( $name = 'checkall' )
```









---

### createSelectTitle



```php
FormFactory::createSelectTitle( $name )
```









---

### createSelectGender



```php
FormFactory::createSelectGender( $name )
```









---

### createSelectRelationship



```php
FormFactory::createSelectRelationship( $name )
```









---

### createSelectEmergencyRelationship



```php
FormFactory::createSelectEmergencyRelationship( $name )
```









---

### createSelectMaritalStatus



```php
FormFactory::createSelectMaritalStatus( $name )
```









---

### createSelectBloodType



```php
FormFactory::createSelectBloodType( $name )
```









---

### createSelectCurrency



```php
FormFactory::createSelectCurrency( $name )
```









---

