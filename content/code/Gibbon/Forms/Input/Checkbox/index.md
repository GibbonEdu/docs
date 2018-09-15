---
title: "Checkbox"
weight: 0
class: \Gibbon\Forms\Input\Checkbox
generated: true
---

## Checkbox 

Checkbox



* Full name: \Gibbon\Forms\Input\Checkbox
* Parent class: \Gibbon\Forms\Input\Input

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a checkpox input with a default value of on when checked.</small>
- [description](#description)<small> — Sets an inline label next to the checkbox input.</small>
- [checked](#checked)<small> — Set a value or array of values that are currently checked.</small>
- [checkAll](#checkall)<small> — Set the checked element(s) to include all available options.</small>
- [addCheckAllNone](#addcheckallnone)<small> — Adds a checkall box to the top of the checkbox list, pass a label in otherwise defaults to All / None.</small>
- [inline](#inline)<small> — Sets multiple checkbox elements to display horizontally.</small>




###### Inherited from MultipleOptionsTrait
- [fromString]({{< ref "code/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromstring" >}})
- [fromArray]({{< ref "code/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromarray" >}})
- [fromQuery]({{< ref "code/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromquery" >}})
- [fromResults]({{< ref "code/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromresults" >}})
- [getOptions]({{< ref "code/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#getoptions" >}})
- [getOptionCount]({{< ref "code/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#getoptioncount" >}})

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



### __construct

Create a checkpox input with a default value of on when checked.

```php
Checkbox::__construct( string $name )
```









---

### description

Sets an inline label next to the checkbox input.

```php
Checkbox::description( string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

### checked

Set a value or array of values that are currently checked.

```php
Checkbox::checked( string $values ): self
```






**Returns Self:** This method can be chained.



---

### checkAll

Set the checked element(s) to include all available options.

```php
Checkbox::checkAll( ): self
```






**Returns Self:** This method can be chained.



---

### addCheckAllNone

Adds a checkall box to the top of the checkbox list, pass a label in otherwise defaults to All / None.

```php
Checkbox::addCheckAllNone( string $label = '' ): self
```






**Returns Self:** This method can be chained.



---

### inline

Sets multiple checkbox elements to display horizontally.

```php
Checkbox::inline( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

