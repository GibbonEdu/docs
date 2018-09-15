---
title: "Select"
weight: 0
class: \Gibbon\Forms\Input\Select
generated: true
---

## Select 

Select



* Full name: \Gibbon\Forms\Input\Select
* Parent class: \Gibbon\Forms\Input\Input

{{< api-example >}} 



### Methods

- [selected](#selected)<small> — Sets the selected element(s) of the select input.</small>
- [placeholder](#placeholder)<small> — Adds an initial entry to the select input. Required elements default to 'Please select.</small>
- [selectAll](#selectall)<small> — Set the selected element(s) to include all available options.</small>
- [selectMultiple](#selectmultiple)<small> — Sets the select input attribute to handle multiple selections.</small>
- [getLabelContext](#getlabelcontext)<small> — Add extra help text to multi-select inputs.</small>
- [chainedTo](#chainedto)<small> — Provide an ID of another select input to chain the values in this input to the selected element of the first input.</small>
- [fromQueryChained](#fromquerychained)<small> — Build an internal options array from an SQL query with required value and name fields</small>




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



### selected

Sets the selected element(s) of the select input.

```php
Select::selected( mixed $value ): self
```






**Returns Self:** This method can be chained.



---

### placeholder

Adds an initial entry to the select input. Required elements default to 'Please select.

```php
Select::placeholder( string $value = '' ): self
```

..'




**Returns Self:** This method can be chained.



---

### selectAll

Set the selected element(s) to include all available options.

```php
Select::selectAll( ): self
```






**Returns Self:** This method can be chained.



---

### selectMultiple

Sets the select input attribute to handle multiple selections.

```php
Select::selectMultiple( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### getLabelContext

Add extra help text to multi-select inputs.

```php
Select::getLabelContext( $label ): string
```






**Return Value:**
`string`  



---

### chainedTo

Provide an ID of another select input to chain the values in this input to the selected element of the first input.

```php
Select::chainedTo( string $id, array $values ): self
```

Chained values are paired with the options array, and correlate to the available options in the first select input.




**Returns Self:** This method can be chained.



---

### fromQueryChained

Build an internal options array from an SQL query with required value and name fields

```php
Select::fromQueryChained( \Gibbon\Contracts\Database\Connection $pdo, string $sql, array $data = array(), $chainedToID = false, $groupBy = false ): self
```






**Returns Self:** This method can be chained.



---

