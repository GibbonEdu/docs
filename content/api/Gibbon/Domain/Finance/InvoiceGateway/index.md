---
title: "InvoiceGateway"
weight: 0
class: \Gibbon\Domain\Finance\InvoiceGateway
generated: true
---

## InvoiceGateway

Invoice Gateway



* Full name: \Gibbon\Domain\Finance\InvoiceGateway
* Parent class: \Gibbon\Domain\QueryableGateway

{{< api-example >}} 



### Methods

- [queryInvoicesByYear](#queryinvoicesbyyear)




###### Inherited from TableAware
- [getTableName]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettablename" >}})
- [getTableSchema]({{< ref "api/Gibbon/Domain/Traits/TableAware/index.md#gettableschema" >}})

###### Inherited from QueryableGateway
- [newQueryCriteria]({{< ref "api/Gibbon/Domain/QueryableGateway/index.md#newquerycriteria" >}})

###### Inherited from Gateway
- [__construct]({{< ref "api/Gibbon/Domain/Gateway/index.md#__construct" >}})



### queryInvoicesByYear



```php
InvoiceGateway::queryInvoicesByYear( \Gibbon\Domain\QueryCriteria $criteria, $gibbonSchoolYearID ): \Gibbon\Domain\Finance\DataSet
```






**Return Value:**
`\Gibbon\Domain\Finance\DataSet`  



---

