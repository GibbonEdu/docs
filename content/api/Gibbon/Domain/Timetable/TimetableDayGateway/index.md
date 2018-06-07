---
title: "TimetableDayGateway"
weight: 0
class: \Gibbon\Domain\Timetable\TimetableDayGateway
generated: true
---

## TimetableDayGateway 

Gateway



* Full name: \Gibbon\Domain\Timetable\TimetableDayGateway
* Parent class: \Gibbon\Domain\Gateway

{{< api-example >}} 



### Methods

- [selectTTDaysByID](#selectttdaysbyid)
- [selectTTDayRowsByID](#selectttdayrowsbyid)
- [selectTTDayRowClassesByID](#selectttdayrowclassesbyid)
- [selectTTDayRowClassTeachersByID](#selectttdayrowclassteachersbyid)
- [selectTTDayRowClassExceptionsByID](#selectttdayrowclassexceptionsbyid)
- [getTTDayByID](#getttdaybyid)
- [getTTDayRowByID](#getttdayrowbyid)
- [getTTDayRowClassByID](#getttdayrowclassbyid)
- [getTTDayRowClassExceptionByID](#getttdayrowclassexceptionbyid)




###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### selectTTDaysByID



```php
TimetableDayGateway::selectTTDaysByID( $gibbonTTID )
```









---

### selectTTDayRowsByID



```php
TimetableDayGateway::selectTTDayRowsByID( $gibbonTTDayID )
```









---

### selectTTDayRowClassesByID



```php
TimetableDayGateway::selectTTDayRowClassesByID( $gibbonTTDayID, $gibbonTTColumnRowID )
```









---

### selectTTDayRowClassTeachersByID



```php
TimetableDayGateway::selectTTDayRowClassTeachersByID( $gibbonTTDayRowClassID )
```









---

### selectTTDayRowClassExceptionsByID



```php
TimetableDayGateway::selectTTDayRowClassExceptionsByID( $gibbonTTDayRowClassID )
```









---

### getTTDayByID



```php
TimetableDayGateway::getTTDayByID( $gibbonTTDayID )
```









---

### getTTDayRowByID



```php
TimetableDayGateway::getTTDayRowByID( $gibbonTTDayID, $gibbonTTColumnRowID )
```









---

### getTTDayRowClassByID



```php
TimetableDayGateway::getTTDayRowClassByID( $gibbonTTDayID, $gibbonTTColumnRowID, $gibbonCourseClassID )
```









---

### getTTDayRowClassExceptionByID



```php
TimetableDayGateway::getTTDayRowClassExceptionByID( $gibbonTTDayRowClassExceptionID )
```









---

