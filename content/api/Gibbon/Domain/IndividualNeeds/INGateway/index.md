---
title: "INGateway"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Domain\IndividualNeeds\INGateway
generated: true
---

## INGateway

Queryable Gateway



* Full name: \Gibbon\Domain\IndividualNeeds\INGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryINBySchoolYear](#queryinbyschoolyear)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryINBySchoolYear



```php
INGateway::queryINBySchoolYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID ): \Gibbon\Domain\IndividualNeeds\DataSet
```






**Return Value:**
`\Gibbon\Domain\IndividualNeeds\DataSet`  



---

