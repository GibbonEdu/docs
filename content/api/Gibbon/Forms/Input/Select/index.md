---
title: "Select"
date: 2018-06-03T12:46:34+00:00
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
- [fromString]({{< ref "api/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromstring" >}})
- [fromArray]({{< ref "api/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromarray" >}})
- [fromQuery]({{< ref "api/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromquery" >}})
- [fromResults]({{< ref "api/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#fromresults" >}})
- [getOptions]({{< ref "api/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#getoptions" >}})
- [getOptionCount]({{< ref "api/Gibbon/Forms/Traits/MultipleOptionsTrait/index.md#getoptioncount" >}})

###### Inherited from Element
- [__construct]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#__construct" >}})

###### Inherited from Input
- [setRow]({{< ref "api/Gibbon/Forms/Input/Input/index.md#setrow" >}})
- [addValidationOption]({{< ref "api/Gibbon/Forms/Input/Input/index.md#addvalidationoption" >}})
- [addValidation]({{< ref "api/Gibbon/Forms/Input/Input/index.md#addvalidation" >}})
- [isValidatable]({{< ref "api/Gibbon/Forms/Input/Input/index.md#isvalidatable" >}})
- [hasValidation]({{< ref "api/Gibbon/Forms/Input/Input/index.md#hasvalidation" >}})
- [getValidationAsJSON]({{< ref "api/Gibbon/Forms/Input/Input/index.md#getvalidationasjson" >}})
- [getValidationOutput]({{< ref "api/Gibbon/Forms/Input/Input/index.md#getvalidationoutput" >}})

###### Inherited from InputAttributesTrait
- [setName]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setname" >}})
- [getName]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getname" >}})
- [setValue]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setvalue" >}})
- [getValue]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getvalue" >}})
- [loadFrom]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfrom" >}})
- [loadFromCSV]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#loadfromcsv" >}})
- [setSize]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setsize" >}})
- [getSize]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getsize" >}})
- [isDisabled]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isdisabled" >}})
- [setDisabled]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setdisabled" >}})
- [getDisabled]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getdisabled" >}})
- [isRequired]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#isrequired" >}})
- [setRequired]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setrequired" >}})
- [getRequired]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getrequired" >}})
- [readonly]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#readonly" >}})
- [setReadonly]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#setreadonly" >}})
- [getReadonly]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#getreadonly" >}})
- [setTabIndex]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#settabindex" >}})
- [getTabIndex]({{< ref "api/Gibbon/Forms/Traits/InputAttributesTrait/index.md#gettabindex" >}})

###### Inherited from Element
- [__call]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#__call" >}})
- [setContent]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#setcontent" >}})
- [prepend]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#prepend" >}})
- [getPrepended]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#getprepended" >}})
- [append]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#append" >}})
- [getAppended]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#getappended" >}})
- [wrap]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#wrap" >}})
- [getOutput]({{< ref "api/Gibbon/Forms/Layout/Element/index.md#getoutput" >}})

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

### isOptionSelected

Return true if the value passed in is in the array of selected options.

```php
Select::isOptionSelected( string $value ): boolean
```






**Return Value:**
`boolean`  



---

### getElement

Gets the HTML output for this form element.

```php
Select::getElement( ): string
```






**Return Value:**
`string`  



---

