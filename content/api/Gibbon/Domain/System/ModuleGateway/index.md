---
title: "ModuleGateway"
weight: 0
class: \Gibbon\Domain\System\ModuleGateway
generated: true
---

## ModuleGateway 

Module Gateway



* Full name: \Gibbon\Domain\System\ModuleGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryModules](#querymodules)<small> — Queries the list for the Manage Modules page.</small>
- [getAllModuleNames](#getallmodulenames)<small> — Gets an unfiltered list of all modules.</small>




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryModules

Queries the list for the Manage Modules page.

```php
ModuleGateway::queryModules( \Gibbon\Domain\QueryCriteria $criteria ): \Gibbon\Domain\System\DataSet
```






**Return Value:**
`\Gibbon\Domain\System\DataSet`  



---

### getAllModuleNames

Gets an unfiltered list of all modules.

```php
ModuleGateway::getAllModuleNames( ): array
```






**Return Value:**
`array`  



---

