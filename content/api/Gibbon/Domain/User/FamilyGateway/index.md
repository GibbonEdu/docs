---
title: "FamilyGateway"
weight: 0
class: \Gibbon\Domain\User\FamilyGateway
generated: true
---

## FamilyGateway

Queryable Gateway



* Full name: \Gibbon\Domain\User\FamilyGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryFamilies](#queryfamilies)
- [selectAdultsByFamily](#selectadultsbyfamily)
- [selectChildrenByFamily](#selectchildrenbyfamily)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryFamilies



```php
FamilyGateway::queryFamilies( \Gibbon\Domain\QueryCriteria $criteria ): \Gibbon\Domain\User\DataSet
```






**Return Value:**
`\Gibbon\Domain\User\DataSet`  



---

### selectAdultsByFamily



```php
FamilyGateway::selectAdultsByFamily( $gibbonFamilyIDList )
```









---

### selectChildrenByFamily



```php
FamilyGateway::selectChildrenByFamily( $gibbonFamilyIDList )
```









---

