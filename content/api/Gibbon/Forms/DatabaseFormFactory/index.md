---
title: "DatabaseFormFactory"
weight: 0
class: \Gibbon\Forms\DatabaseFormFactory
generated: true
---

## DatabaseFormFactory 

DatabaseFormFactory

Handles Form object creation that are pre-loaded from SQL queries

* Full name: \Gibbon\Forms\DatabaseFormFactory
* Parent class: \Gibbon\Forms\FormFactory

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a factory with access to the provided a database connection.</small>
- [create](#create)<small> — Create and return an instance of DatabaseFormFactory.</small>
- [createSelectSchoolYear](#createselectschoolyear)
- [createSelectYearGroup](#createselectyeargroup)
- [createSelectRollGroup](#createselectrollgroup)
- [createSelectClass](#createselectclass)
- [createCheckboxYearGroup](#createcheckboxyeargroup)
- [createCheckboxSchoolYearTerm](#createcheckboxschoolyearterm)
- [createSelectDepartment](#createselectdepartment)
- [createSelectSchoolYearTerm](#createselectschoolyearterm)
- [createSelectLanguage](#createselectlanguage)
- [createSelectCountry](#createselectcountry)
- [createSelectRole](#createselectrole)
- [createSelectStatus](#createselectstatus)
- [createSelectStaff](#createselectstaff)
- [createSelectUsers](#createselectusers)
- [createSelectStudent](#createselectstudent)
- [createSelectGradeScale](#createselectgradescale)
- [createSelectGradeScaleGrade](#createselectgradescalegrade)
- [createSelectRubric](#createselectrubric)
- [createPhoneNumber](#createphonenumber)
- [createSequenceNumber](#createsequencenumber)
- [createSelectTransport](#createselecttransport)
- [createSelectSpace](#createselectspace)
- [createTextFieldDistrict](#createtextfielddistrict)
- [createSelectAlert](#createselectalert)




###### Inherited from FormFactory
- [create]({{< ref "api/Gibbon/Forms/FormFactory/index.md#create" >}})
- [createRow]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createrow" >}})
- [createColumn]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcolumn" >}})
- [createTable]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createtable" >}})
- [createDataTable]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createdatatable" >}})
- [createTableCell]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createtablecell" >}})
- [createGrid]({{< ref "api/Gibbon/Forms/FormFactory/index.md#creategrid" >}})
- [createTrigger]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createtrigger" >}})
- [createLabel]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createlabel" >}})
- [createHeading]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createheading" >}})
- [createContent]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcontent" >}})
- [createWebLink]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createweblink" >}})
- [createCustomField]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcustomfield" >}})
- [createTextArea]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createtextarea" >}})
- [createTextField]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createtextfield" >}})
- [createFinder]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createfinder" >}})
- [createEditor]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createeditor" >}})
- [createEmail]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createemail" >}})
- [createURL]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createurl" >}})
- [createNumber]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createnumber" >}})
- [createCurrency]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcurrency" >}})
- [createPassword]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createpassword" >}})
- [createFileUpload]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createfileupload" >}})
- [createDate]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createdate" >}})
- [createTime]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createtime" >}})
- [createCheckbox]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcheckbox" >}})
- [createRadio]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createradio" >}})
- [createSelect]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselect" >}})
- [createMultiSelect]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createmultiselect" >}})
- [createButton]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createbutton" >}})
- [createCustomBlocks]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcustomblocks" >}})
- [createSubheading]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createsubheading" >}})
- [createAlert]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createalert" >}})
- [createSubmit]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createsubmit" >}})
- [createSearchSubmit]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createsearchsubmit" >}})
- [createConfirmSubmit]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createconfirmsubmit" >}})
- [createFooter]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createfooter" >}})
- [createYesNo]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createyesno" >}})
- [createYesNoRadio]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createyesnoradio" >}})
- [createCheckAll]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createcheckall" >}})
- [createSelectTitle]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselecttitle" >}})
- [createSelectGender]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselectgender" >}})
- [createSelectRelationship]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselectrelationship" >}})
- [createSelectEmergencyRelationship]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselectemergencyrelationship" >}})
- [createSelectMaritalStatus]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselectmaritalstatus" >}})
- [createSelectBloodType]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselectbloodtype" >}})
- [createSelectCurrency]({{< ref "api/Gibbon/Forms/FormFactory/index.md#createselectcurrency" >}})



### __construct

Create a factory with access to the provided a database connection.

```php
DatabaseFormFactory::__construct( \Gibbon\Forms\Gibbon\Contracts\Database\Connection $pdo )
```









---

### create

Create and return an instance of DatabaseFormFactory.

```php
static DatabaseFormFactory::create( \Gibbon\Contracts\Database\Connection $pdo = null ): object
```



* This method is **static**.


**Return Value:**
`object`  DatabaseFormFactory



---

### createSelectSchoolYear



```php
DatabaseFormFactory::createSelectSchoolYear( $name, $status = 'All', $orderBy = 'ASC' )
```









---

### createSelectYearGroup



```php
DatabaseFormFactory::createSelectYearGroup( $name, $all = false )
```









---

### createSelectRollGroup



```php
DatabaseFormFactory::createSelectRollGroup( $name, $gibbonSchoolYearID, $all = false )
```









---

### createSelectClass



```php
DatabaseFormFactory::createSelectClass( $name, $gibbonSchoolYearID, $gibbonPersonID = null, $params = array() )
```









---

### createCheckboxYearGroup



```php
DatabaseFormFactory::createCheckboxYearGroup( $name )
```









---

### createCheckboxSchoolYearTerm



```php
DatabaseFormFactory::createCheckboxSchoolYearTerm( $name, $gibbonSchoolYearID )
```









---

### createSelectDepartment



```php
DatabaseFormFactory::createSelectDepartment( $name )
```









---

### createSelectSchoolYearTerm



```php
DatabaseFormFactory::createSelectSchoolYearTerm( $name, $gibbonSchoolYearID )
```









---

### createSelectLanguage



```php
DatabaseFormFactory::createSelectLanguage( $name )
```









---

### createSelectCountry



```php
DatabaseFormFactory::createSelectCountry( $name )
```









---

### createSelectRole



```php
DatabaseFormFactory::createSelectRole( $name )
```









---

### createSelectStatus



```php
DatabaseFormFactory::createSelectStatus( $name )
```









---

### createSelectStaff



```php
DatabaseFormFactory::createSelectStaff( $name )
```









---

### createSelectUsers



```php
DatabaseFormFactory::createSelectUsers( $name, $gibbonSchoolYearID = false, $params = array() )
```









---

### createSelectStudent



```php
DatabaseFormFactory::createSelectStudent( $name, $gibbonSchoolYearID, $params = array() )
```









---

### createSelectGradeScale



```php
DatabaseFormFactory::createSelectGradeScale( $name )
```









---

### createSelectGradeScaleGrade



```php
DatabaseFormFactory::createSelectGradeScaleGrade( $name, $gibbonScaleID, $params = array() )
```









---

### createSelectRubric



```php
DatabaseFormFactory::createSelectRubric( $name, $gibbonYearGroupIDList = '', $gibbonDepartmentID = '' )
```









---

### createPhoneNumber



```php
DatabaseFormFactory::createPhoneNumber( $name )
```









---

### createSequenceNumber



```php
DatabaseFormFactory::createSequenceNumber( $name, $tableName, $sequenceNumber = '', $columnName = null )
```









---

### createSelectTransport



```php
DatabaseFormFactory::createSelectTransport( $name, $all = false )
```









---

### createSelectSpace



```php
DatabaseFormFactory::createSelectSpace( $name )
```









---

### createTextFieldDistrict



```php
DatabaseFormFactory::createTextFieldDistrict( $name )
```









---

### createSelectAlert



```php
DatabaseFormFactory::createSelectAlert( $name )
```









---

