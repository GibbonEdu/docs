---
title: "ActivityGateway"
weight: 0
class: \Gibbon\Domain\Activities\ActivityGateway
generated: true
---

## ActivityGateway 

Activity Gateway



* Full name: \Gibbon\Domain\Activities\ActivityGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryActivitiesBySchoolYear](#queryactivitiesbyschoolyear)
- [selectWeekdayNamesByActivity](#selectweekdaynamesbyactivity)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryActivitiesBySchoolYear



```php
ActivityGateway::queryActivitiesBySchoolYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID ): \Gibbon\Domain\Activities\DataSet
```






**Return Value:**
`\Gibbon\Domain\Activities\DataSet`  



---

### selectWeekdayNamesByActivity



```php
ActivityGateway::selectWeekdayNamesByActivity( $gibbonActivityID )
```









---

