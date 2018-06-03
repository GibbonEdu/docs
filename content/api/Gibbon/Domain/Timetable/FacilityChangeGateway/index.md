---
title: "FacilityChangeGateway"
weight: 0
class: \Gibbon\Domain\Timetable\FacilityChangeGateway
generated: true
---

## FacilityChangeGateway

Queryable Gateway



* Full name: \Gibbon\Domain\Timetable\FacilityChangeGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryFacilityChanges](#queryfacilitychanges)
- [queryFacilityChangesByDepartment](#queryfacilitychangesbydepartment)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryFacilityChanges



```php
FacilityChangeGateway::queryFacilityChanges( \Gibbon\Domain\QueryCriteria $criteria, $gibbonPersonID = null ): \Gibbon\Domain\Timetable\DataSet
```






**Return Value:**
`\Gibbon\Domain\Timetable\DataSet`  



---

### queryFacilityChangesByDepartment



```php
FacilityChangeGateway::queryFacilityChangesByDepartment( \Gibbon\Domain\QueryCriteria $criteria, $gibbonPersonID ): \Gibbon\Domain\Timetable\DataSet
```






**Return Value:**
`\Gibbon\Domain\Timetable\DataSet`  



---

