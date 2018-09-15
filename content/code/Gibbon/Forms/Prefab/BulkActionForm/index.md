---
title: "BulkActionForm"
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
- [__construct]({{< ref "code/Gibbon/Forms/Form/index.md#__construct" >}})
- [create]({{< ref "code/Gibbon/Forms/Form/index.md#create" >}})
- [getFactory]({{< ref "code/Gibbon/Forms/Form/index.md#getfactory" >}})
- [setFactory]({{< ref "code/Gibbon/Forms/Form/index.md#setfactory" >}})
- [getRenderer]({{< ref "code/Gibbon/Forms/Form/index.md#getrenderer" >}})
- [setRenderer]({{< ref "code/Gibbon/Forms/Form/index.md#setrenderer" >}})
- [getMethod]({{< ref "code/Gibbon/Forms/Form/index.md#getmethod" >}})
- [getAction]({{< ref "code/Gibbon/Forms/Form/index.md#getaction" >}})
- [addRow]({{< ref "code/Gibbon/Forms/Form/index.md#addrow" >}})
- [getRow]({{< ref "code/Gibbon/Forms/Form/index.md#getrow" >}})
- [getRows]({{< ref "code/Gibbon/Forms/Form/index.md#getrows" >}})
- [addHiddenValue]({{< ref "code/Gibbon/Forms/Form/index.md#addhiddenvalue" >}})
- [getHiddenValues]({{< ref "code/Gibbon/Forms/Form/index.md#gethiddenvalues" >}})
- [getAutocomplete]({{< ref "code/Gibbon/Forms/Form/index.md#getautocomplete" >}})
- [setAutocomplete]({{< ref "code/Gibbon/Forms/Form/index.md#setautocomplete" >}})
- [addConfirmation]({{< ref "code/Gibbon/Forms/Form/index.md#addconfirmation" >}})
- [addTrigger]({{< ref "code/Gibbon/Forms/Form/index.md#addtrigger" >}})
- [getTriggers]({{< ref "code/Gibbon/Forms/Form/index.md#gettriggers" >}})
- [toggleVisibilityByClass]({{< ref "code/Gibbon/Forms/Form/index.md#togglevisibilitybyclass" >}})
- [toggleVisibilityByID]({{< ref "code/Gibbon/Forms/Form/index.md#togglevisibilitybyid" >}})
- [loadAllValuesFrom]({{< ref "code/Gibbon/Forms/Form/index.md#loadallvaluesfrom" >}})
- [loadStateFrom]({{< ref "code/Gibbon/Forms/Form/index.md#loadstatefrom" >}})
- [getOutput]({{< ref "code/Gibbon/Forms/Form/index.md#getoutput" >}})

###### Inherited from BasicAttributesTrait
- [setID]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setid" >}})
- [getID]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getid" >}})
- [setTitle]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#settitle" >}})
- [getTitle]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#gettitle" >}})
- [setClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#setclass" >}})
- [addClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#addclass" >}})
- [removeClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#removeclass" >}})
- [getClass]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getclass" >}})
- [addData]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#adddata" >}})
- [getData]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getdata" >}})
- [getAttributeString]({{< ref "code/Gibbon/Forms/Traits/BasicAttributesTrait/index.md#getattributestring" >}})



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

