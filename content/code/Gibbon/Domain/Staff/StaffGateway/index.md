---
title: "StaffGateway"
weight: 0
class: \Gibbon\Domain\Staff\StaffGateway
generated: true
---

## StaffGateway 

Staff Gateway



* Full name: \Gibbon\Domain\Staff\StaffGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryAllStaff](#queryallstaff)<small> — Queries the list of users for the Manage Staff page.</small>
- [selectStaffByID](#selectstaffbyid)




###### Inherited from TableAware
- [getTableName]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "code/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "code/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "code/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryAllStaff

Queries the list of users for the Manage Staff page.

```php
StaffGateway::queryAllStaff( \Gibbon\Domain\QueryCriteria $criteria ): \Gibbon\Domain\Staff\DataSet
```






**Return Value:**
`\Gibbon\Domain\Staff\DataSet`  



---

### selectStaffByID



```php
StaffGateway::selectStaffByID( $gibbonPersonID, $type = null )
```









---

