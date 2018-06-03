---
title: "TimetableGateway"
weight: 0
class: \Gibbon\Domain\Timetable\TimetableGateway
generated: true
---

## TimetableGateway

Gateway



* Full name: \Gibbon\Domain\Timetable\TimetableGateway
* Parent class: \Gibbon\Domain\Gateway

{{< api-example >}} 



### Methods

- [selectTimetablesBySchoolYear](#selecttimetablesbyschoolyear)
- [getNonTimetabledYearGroups](#getnontimetabledyeargroups)
- [getTTByID](#getttbyid)




###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### selectTimetablesBySchoolYear



```php
TimetableGateway::selectTimetablesBySchoolYear( $gibbonSchoolYearID )
```









---

### getNonTimetabledYearGroups



```php
TimetableGateway::getNonTimetabledYearGroups( $gibbonSchoolYearID, $gibbonTTID = null )
```









---

### getTTByID



```php
TimetableGateway::getTTByID( $gibbonTTID )
```









---

