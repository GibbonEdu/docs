---
title: "GroupGateway"
weight: 0
class: \Gibbon\Domain\Messenger\GroupGateway
generated: true
---

## GroupGateway 

Group Gateway



* Full name: \Gibbon\Domain\Messenger\GroupGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryGroups](#querygroups)<small> — Queries the list of groups for the messenger Manage Groups page.</small>
- [queryGroupMembers](#querygroupmembers)<small> — Queries the group members based on group ID.</small>
- [selectGroupByID](#selectgroupbyid)
- [selectGroupByIDAndOwner](#selectgroupbyidandowner)
- [selectGroupPersonByID](#selectgrouppersonbyid)
- [insertGroup](#insertgroup)
- [insertGroupPerson](#insertgroupperson)
- [updateGroup](#updategroup)
- [deleteGroup](#deletegroup)
- [deleteGroupPerson](#deletegroupperson)
- [deletePeopleByGroupID](#deletepeoplebygroupid)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryGroups

Queries the list of groups for the messenger Manage Groups page.

```php
GroupGateway::queryGroups( \Gibbon\Domain\QueryCriteria $criteria, $gibbonPersonIDOwner = null ): \Gibbon\Domain\Messenger\DataSet
```






**Return Value:**
`\Gibbon\Domain\Messenger\DataSet`  



---

### queryGroupMembers

Queries the group members based on group ID.

```php
GroupGateway::queryGroupMembers( \Gibbon\Domain\QueryCriteria $criteria, string $gibbonGroupID ): \Gibbon\Domain\Messenger\DataSet
```






**Return Value:**
`\Gibbon\Domain\Messenger\DataSet`  



---

### selectGroupByID



```php
GroupGateway::selectGroupByID( $gibbonGroupID )
```









---

### selectGroupByIDAndOwner



```php
GroupGateway::selectGroupByIDAndOwner( $gibbonGroupID, $gibbonPersonIDOwner )
```









---

### selectGroupPersonByID



```php
GroupGateway::selectGroupPersonByID( $gibbonGroupID, $gibbonPersonID )
```









---

### insertGroup



```php
GroupGateway::insertGroup( array $data )
```









---

### insertGroupPerson



```php
GroupGateway::insertGroupPerson( array $data )
```









---

### updateGroup



```php
GroupGateway::updateGroup( array $data )
```









---

### deleteGroup



```php
GroupGateway::deleteGroup( $gibbonGroupID )
```









---

### deleteGroupPerson



```php
GroupGateway::deleteGroupPerson( $gibbonGroupID, $gibbonPersonID )
```









---

### deletePeopleByGroupID



```php
GroupGateway::deletePeopleByGroupID( $gibbonGroupID )
```









---

