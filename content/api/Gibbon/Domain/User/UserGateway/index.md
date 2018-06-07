---
title: "UserGateway"
weight: 0
class: \Gibbon\Domain\User\UserGateway
generated: true
---

## UserGateway 

User Gateway



* Full name: \Gibbon\Domain\User\UserGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryAllUsers](#queryallusers)<small> — Queries the list of users for the Manage Users page.</small>
- [selectFamilyDetailsByPersonID](#selectfamilydetailsbypersonid)<small> — Selects the family info for a subset of users. Primarily used to join family data to the queryAllUsers results.</small>
- [selectUserNamesByStatus](#selectusernamesbystatus)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from SharedUserLogic
- [getSharedUserRowHighlighter]({{< ref "api/Gibbon/Domain/Traits/SharedUserLogic/index.md#getshareduserrowhighlighter" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryAllUsers

Queries the list of users for the Manage Users page.

```php
UserGateway::queryAllUsers( \Gibbon\Domain\QueryCriteria $criteria ): \Gibbon\Domain\User\DataSet
```






**Return Value:**
`\Gibbon\Domain\User\DataSet`  



---

### selectFamilyDetailsByPersonID

Selects the family info for a subset of users. Primarily used to join family data to the queryAllUsers results.

```php
UserGateway::selectFamilyDetailsByPersonID( string|array $gibbonPersonIDList ): \Gibbon\Domain\User\Result
```






**Return Value:**
`\Gibbon\Domain\User\Result`  



---

### selectUserNamesByStatus



```php
UserGateway::selectUserNamesByStatus( $status = 'Full' )
```









---

