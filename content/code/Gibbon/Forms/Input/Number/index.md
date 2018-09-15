---
title: "Number"
weight: 0
class: \Gibbon\Forms\Input\Number
generated: true
---

## Number 

TextField



* Full name: \Gibbon\Forms\Input\Number
* Parent class: \Gibbon\Forms\Input\TextField

{{< api-example >}} 



### Methods

- [minimum](#minimum)<small> — Define a minimum for this numeric value.</small>
- [maximum](#maximum)<small> — Define a maximum for this numeric value.</small>
- [decimalPlaces](#decimalplaces)<small> — Define a required number of decimal places (max) for this numeric value.</small>
- [onlyInteger](#onlyinteger)




###### Inherited from TextField
- [maxLength]({{< ref "code/Gibbon/Forms/Input/TextField/index.md#maxlength" >}})
- [placeholder]({{< ref "code/Gibbon/Forms/Input/TextField/index.md#placeholder" >}})
- [autocomplete]({{< ref "code/Gibbon/Forms/Input/TextField/index.md#autocomplete" >}})
- [isUnique]({{< ref "code/Gibbon/Forms/Input/TextField/index.md#isunique" >}})
- [getLabelContext]({{< ref "code/Gibbon/Forms/Input/TextField/index.md#getlabelcontext" >}})

###### Inherited from Element
- [__construct]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#__construct" >}})

###### Inherited from Input
- [setRow]({{< ref "code/Gibbon/Forms/Input/Input/index.md#setrow" >}})
- [addValidationOption]({{< ref "code/Gibbon/Forms/Input/Input/index.md#addvalidationoption" >}})
- [addValidation]({{< ref "code/Gibbon/Forms/Input/Input/index.md#addvalidation" >}})
- [isValidatable]({{< ref "code/Gibbon/Forms/Input/Input/index.md#isvalidatable" >}})
- [hasValidation]({{< ref "code/Gibbon/Forms/Input/Input/index.md#hasvalidation" >}})
- [getValidationAsJSON]({{< ref "code/Gibbon/Forms/Input/Input/index.md#getvalidationasjson" >}})
- [getValidationOutput]({{< ref "code/Gibbon/Forms/Input/Input/index.md#getvalidationoutput" >}})

###### Inherited from InputAttributesTrait
- [setName]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setname" >}})
- [getName]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getname" >}})
- [setValue]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setvalue" >}})
- [getValue]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getvalue" >}})
- [loadFrom]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfrom" >}})
- [loadFromCSV]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfromcsv" >}})
- [setSize]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setsize" >}})
- [getSize]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getsize" >}})
- [isDisabled]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isdisabled" >}})
- [setDisabled]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setdisabled" >}})
- [getDisabled]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getdisabled" >}})
- [isRequired]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isrequired" >}})
- [setRequired]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setrequired" >}})
- [getRequired]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getrequired" >}})
- [readonly]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#readonly" >}})
- [setReadonly]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setreadonly" >}})
- [getReadonly]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getreadonly" >}})
- [setTabIndex]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#settabindex" >}})
- [getTabIndex]({{< ref "code/Gibbon/Forms/Traits/InputAttributesTrait/index.md#gettabindex" >}})

###### Inherited from Element
- [__call]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#__call" >}})
- [setContent]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#setcontent" >}})
- [prepend]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#prepend" >}})
- [getPrepended]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#getprepended" >}})
- [append]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#append" >}})
- [getAppended]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#getappended" >}})
- [wrap]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#wrap" >}})
- [getOutput]({{< ref "code/Gibbon/Forms/Layout/Element/index.md#getoutput" >}})

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



### minimum

Define a minimum for this numeric value.

```php
Number::minimum( integer|float $value ): self
```






**Returns Self:** This method can be chained.



---

### maximum

Define a maximum for this numeric value.

```php
Number::maximum( integer|float $value ): self
```






**Returns Self:** This method can be chained.



---

### decimalPlaces

Define a required number of decimal places (max) for this numeric value.

```php
Number::decimalPlaces( integer $value ): self
```






**Returns Self:** This method can be chained.



---

### onlyInteger



```php
Number::onlyInteger( $value )
```









---

