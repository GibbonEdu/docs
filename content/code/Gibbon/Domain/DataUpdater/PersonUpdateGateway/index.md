---
title: "PersonUpdateGateway"
weight: 0
class: \Gibbon\Domain\DataUpdater\PersonUpdateGateway
generated: true
---

## PersonUpdateGateway 

Queryable Gateway



* Full name: \Gibbon\Domain\DataUpdater\PersonUpdateGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryDataUpdates](#querydataupdates)
- [queryStudentUpdaterHistory](#querystudentupdaterhistory)
- [selectParentEmailsByPersonID](#selectparentemailsbypersonid)




###### Inherited from TableAware
- [getTableName]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "code/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "code/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryDataUpdates



```php
PersonUpdateGateway::queryDataUpdates( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID ): \Gibbon\Domain\DataUpdater\DataSet
```






**Return Value:**
`\Gibbon\Domain\DataUpdater\DataSet`  



---

### queryStudentUpdaterHistory



```php
PersonUpdateGateway::queryStudentUpdaterHistory( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID, $gibbonPersonIDList ): \Gibbon\Domain\DataUpdater\DataSet
```






**Return Value:**
`\Gibbon\Domain\DataUpdater\DataSet`  



---

### selectParentEmailsByPersonID



```php
PersonUpdateGateway::selectParentEmailsByPersonID( $gibbonPersonIDList )
```









---

