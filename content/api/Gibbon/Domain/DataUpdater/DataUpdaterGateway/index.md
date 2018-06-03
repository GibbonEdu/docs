---
title: "DataUpdaterGateway"
weight: 0
class: \Gibbon\Domain\DataUpdater\DataUpdaterGateway
generated: true
---

## DataUpdaterGateway

Data Updater Gateway



* Full name: \Gibbon\Domain\DataUpdater\DataUpdaterGateway
* Parent class: \Gibbon\Domain\Gateway

{{< api-example >}} 



### Methods

- [selectUpdatableUsersByPerson](#selectupdatableusersbyperson)<small> — Gets a list of users this person can update data for, checking by family. Always returns the user themself even if not in a family.</small>
- [selectDataUpdatesByPerson](#selectdataupdatesbyperson)<small> — Gets a list of data updates and the last updated timestamp for a given user.</small>
- [countAllRequiredUpdatesByPerson](#countallrequiredupdatesbyperson)




###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### selectUpdatableUsersByPerson

Gets a list of users this person can update data for, checking by family. Always returns the user themself even if not in a family.

```php
DataUpdaterGateway::selectUpdatableUsersByPerson( string $gibbonPersonID ): \PDOStatement
```






**Return Value:**
`\PDOStatement`  



---

### selectDataUpdatesByPerson

Gets a list of data updates and the last updated timestamp for a given user.

```php
DataUpdaterGateway::selectDataUpdatesByPerson( string $gibbonPersonID, $gibbonPersonIDSource = '' ): \PDOStatement
```






**Return Value:**
`\PDOStatement`  



---

### countAllRequiredUpdatesByPerson



```php
DataUpdaterGateway::countAllRequiredUpdatesByPerson( $gibbonPersonID )
```









---

