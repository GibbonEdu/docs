---
title: "BulkActionForm"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Forms\Prefab\BulkActionForm
generated: true
---

## BulkActionForm

BulkActionForm



* Full name: \Gibbon\Forms\Prefab\BulkActionForm
* Parent class: \Gibbon\Forms\Form

{{< api-example >}} 



### Methods

- [create](#create)<small> — Create a form with the default factory and renderer.</small>
- [addBulkActionRow](#addbulkactionrow)
- [createBulkActionColumn](#createbulkactioncolumn)




###### Inherited from Form
- [__construct]({{< ref "api/Gibbon/Forms/Form/index.md#__construct" >}})
- [create]({{< ref "api/Gibbon/Forms/Form/index.md#create" >}})
- [getFactory]({{< ref "api/Gibbon/Forms/Form/index.md#getfactory" >}})
- [setFactory]({{< ref "api/Gibbon/Forms/Form/index.md#setfactory" >}})
- [getRenderer]({{< ref "api/Gibbon/Forms/Form/index.md#getrenderer" >}})
- [setRenderer]({{< ref "api/Gibbon/Forms/Form/index.md#setrenderer" >}})
- [getMethod]({{< ref "api/Gibbon/Forms/Form/index.md#getmethod" >}})
- [getAction]({{< ref "api/Gibbon/Forms/Form/index.md#getaction" >}})
- [addRow]({{< ref "api/Gibbon/Forms/Form/index.md#addrow" >}})
- [getRow]({{< ref "api/Gibbon/Forms/Form/index.md#getrow" >}})
- [getRows]({{< ref "api/Gibbon/Forms/Form/index.md#getrows" >}})
- [addHiddenValue]({{< ref "api/Gibbon/Forms/Form/index.md#addhiddenvalue" >}})
- [getHiddenValues]({{< ref "api/Gibbon/Forms/Form/index.md#gethiddenvalues" >}})
- [getAutocomplete]({{< ref "api/Gibbon/Forms/Form/index.md#getautocomplete" >}})
- [setAutocomplete]({{< ref "api/Gibbon/Forms/Form/index.md#setautocomplete" >}})
- [addConfirmation]({{< ref "api/Gibbon/Forms/Form/index.md#addconfirmation" >}})
- [addTrigger]({{< ref "api/Gibbon/Forms/Form/index.md#addtrigger" >}})
- [getTriggers]({{< ref "api/Gibbon/Forms/Form/index.md#gettriggers" >}})
- [toggleVisibilityByClass]({{< ref "api/Gibbon/Forms/Form/index.md#togglevisibilitybyclass" >}})
- [toggleVisibilityByID]({{< ref "api/Gibbon/Forms/Form/index.md#togglevisibilitybyid" >}})
- [loadAllValuesFrom]({{< ref "api/Gibbon/Forms/Form/index.md#loadallvaluesfrom" >}})
- [loadStateFrom]({{< ref "api/Gibbon/Forms/Form/index.md#loadstatefrom" >}})
- [getOutput]({{< ref "api/Gibbon/Forms/Form/index.md#getoutput" >}})

###### Inherited from BasicAttributesTrait
- [setID]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setid" >}})
- [getID]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getid" >}})
- [setTitle]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#settitle" >}})
- [getTitle]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#gettitle" >}})
- [setClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setclass" >}})
- [addClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#addclass" >}})
- [removeClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#removeclass" >}})
- [getClass]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getclass" >}})
- [addData]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#adddata" >}})
- [getData]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getdata" >}})
- [getAttributeString]({{< ref "api/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getattributestring" >}})



### create

Create a form with the default factory and renderer.

```php
static BulkActionForm::create( string $id, string $action, string $method = 'post', string $class = 'smallIntBorder fullWidth bulkActionForm' ): object
```



* This method is **static**.


**Return Value:**
`object`  Form object



---

### addBulkActionRow



```php
BulkActionForm::addBulkActionRow( $actions = array() )
```









---

### createBulkActionColumn



```php
BulkActionForm::createBulkActionColumn( $actions = array() )
```









---
