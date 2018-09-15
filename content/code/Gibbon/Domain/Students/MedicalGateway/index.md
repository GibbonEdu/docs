---
title: "MedicalGateway"
weight: 0
class: \Gibbon\Domain\Students\MedicalGateway
generated: true
---

## MedicalGateway 

Queryable Gateway



* Full name: \Gibbon\Domain\Students\MedicalGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryMedicalFormsBySchoolYear](#querymedicalformsbyschoolyear)
- [selectMedicalConditionsByID](#selectmedicalconditionsbyid)
- [getMedicalFormByID](#getmedicalformbyid)
- [getMedicalConditionByID](#getmedicalconditionbyid)




###### Inherited from TableAware
- [getTableName]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "code/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "code/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryMedicalFormsBySchoolYear



```php
MedicalGateway::queryMedicalFormsBySchoolYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID ): \Gibbon\Domain\Students\DataSet
```






**Return Value:**
`\Gibbon\Domain\Students\DataSet`  



---

### selectMedicalConditionsByID



```php
MedicalGateway::selectMedicalConditionsByID( $gibbonPersonMedicalID )
```









---

### getMedicalFormByID



```php
MedicalGateway::getMedicalFormByID( $gibbonPersonMedicalID )
```









---

### getMedicalConditionByID



```php
MedicalGateway::getMedicalConditionByID( $gibbonPersonMedicalConditionID )
```









---

