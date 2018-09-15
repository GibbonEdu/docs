---
title: "StudentGateway"
weight: 0
class: \Gibbon\Domain\Students\StudentGateway
generated: true
---

## StudentGateway 

Queryable Gateway



* Full name: \Gibbon\Domain\Students\StudentGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryStudentsBySchoolYear](#querystudentsbyschoolyear)
- [queryStudentEnrolmentBySchoolYear](#querystudentenrolmentbyschoolyear)
- [queryStudentsAndTeachersBySchoolYear](#querystudentsandteachersbyschoolyear)
- [selectActiveStudentsByFamilyAdult](#selectactivestudentsbyfamilyadult)
- [selectActiveStudentByPerson](#selectactivestudentbyperson)




###### Inherited from TableAware
- [getTableName]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from SharedUserLogic
- [getSharedUserRowHighlighter]({{< ref "code/Gibbon/Domain/Traits/SharedUserLogic/index.md#getshareduserrowhighlighter" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "code/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "code/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryStudentsBySchoolYear



```php
StudentGateway::queryStudentsBySchoolYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID, $searchFamilyDetails = false ): \Gibbon\Domain\Students\DataSet
```






**Return Value:**
`\Gibbon\Domain\Students\DataSet`  



---

### queryStudentEnrolmentBySchoolYear



```php
StudentGateway::queryStudentEnrolmentBySchoolYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID )
```









---

### queryStudentsAndTeachersBySchoolYear



```php
StudentGateway::queryStudentsAndTeachersBySchoolYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID )
```









---

### selectActiveStudentsByFamilyAdult



```php
StudentGateway::selectActiveStudentsByFamilyAdult( $gibbonSchoolYearID, $gibbonPersonID )
```









---

### selectActiveStudentByPerson



```php
StudentGateway::selectActiveStudentByPerson( $gibbonSchoolYearID, $gibbonPersonID )
```









---

