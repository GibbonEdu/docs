---
title: "CourseEnrolmentGateway"
weight: 0
class: \Gibbon\Domain\Timetable\CourseEnrolmentGateway
generated: true
---

## CourseEnrolmentGateway 

Queryable Gateway



* Full name: \Gibbon\Domain\Timetable\CourseEnrolmentGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryCourseEnrolmentByClass](#querycourseenrolmentbyclass)
- [queryCourseEnrolmentByPerson](#querycourseenrolmentbyperson)
- [selectEnrolableClassesByYearGroup](#selectenrolableclassesbyyeargroup)
- [selectEnrolableStudentsByYearGroup](#selectenrolablestudentsbyyeargroup)
- [selectCourseEnrolmentByRollGroup](#selectcourseenrolmentbyrollgroup)




###### Inherited from TableAware
- [getTableName]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "code/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "code/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryCourseEnrolmentByClass



```php
CourseEnrolmentGateway::queryCourseEnrolmentByClass( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID, $gibbonCourseClassID, $left = false ): \Gibbon\Domain\Timetable\DataSet
```






**Return Value:**
`\Gibbon\Domain\Timetable\DataSet`  



---

### queryCourseEnrolmentByPerson



```php
CourseEnrolmentGateway::queryCourseEnrolmentByPerson( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID, $gibbonPersonID, $left = false )
```









---

### selectEnrolableClassesByYearGroup



```php
CourseEnrolmentGateway::selectEnrolableClassesByYearGroup( $gibbonSchoolYearID, $gibbonYearGroupID )
```









---

### selectEnrolableStudentsByYearGroup



```php
CourseEnrolmentGateway::selectEnrolableStudentsByYearGroup( $gibbonSchoolYearID, $gibbonYearGroupID )
```









---

### selectCourseEnrolmentByRollGroup



```php
CourseEnrolmentGateway::selectCourseEnrolmentByRollGroup( $gibbonRollGroupID )
```









---

