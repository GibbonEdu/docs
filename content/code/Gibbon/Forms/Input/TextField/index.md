---
title: "TextField"
weight: 0
class: \Gibbon\Forms\Input\TextField
generated: true
---

## TextField 

TextField



* Full name: \Gibbon\Forms\Input\TextField
* Parent class: \Gibbon\Forms\Input\Input

{{< api-example >}} 



### Methods

- [maxLength](#maxlength)<small> — Set a max character count for this text field.</small>
- [placeholder](#placeholder)<small> — Set the default text that appears before any text has been entered.</small>
- [autocomplete](#autocomplete)<small> — Enables javascript autocompletion from the supplied set of values.</small>
- [isUnique](#isunique)
- [getLabelContext](#getlabelcontext)<small> — Adds uniqueness text to the label description (if not already present)</small>




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



### maxLength

Set a max character count for this text field.

```php
TextField::maxLength( string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### placeholder

Set the default text that appears before any text has been entered.

```php
TextField::placeholder( string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### autocomplete

Enables javascript autocompletion from the supplied set of values.

```php
TextField::autocomplete( string|array $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### isUnique



```php
TextField::isUnique( $ajaxURL, $data = array() )
```









---

### getLabelContext

Adds uniqueness text to the label description (if not already present)

```php
TextField::getLabelContext( $label ): string|boolean
```






**Return Value:**
`string|boolean`  



---

