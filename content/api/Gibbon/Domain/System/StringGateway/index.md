---
title: "StringGateway"
weight: 0
class: \Gibbon\Domain\System\StringGateway
generated: true
---

## StringGateway 

String Repalcement Gateway



* Full name: \Gibbon\Domain\System\StringGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryStrings](#querystrings)<small> — Queries the list of strings for the Manage String Replacements page.</small>




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryStrings

Queries the list of strings for the Manage String Replacements page.

```php
StringGateway::queryStrings( \Gibbon\Domain\QueryCriteria $criteria ): \Gibbon\Domain\System\DataSet
```






**Return Value:**
`\Gibbon\Domain\System\DataSet`  



---

