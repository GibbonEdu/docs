---
title: "Password"
weight: 0
class: \Gibbon\Forms\Input\Password
generated: true
---

## Password

Password



* Full name: \Gibbon\Forms\Input\Password
* Parent class: \Gibbon\Forms\Input\TextField

{{< api-example >}} 



### Methods

- [addPasswordPolicy](#addpasswordpolicy)<small> — Attach the validation requirements for the system-wide password policy.</small>
- [addGeneratePasswordButton](#addgeneratepasswordbutton)<small> — Adds a button to the field that uses JS to generate and insert a password into the form.</small>
- [addConfirmation](#addconfirmation)<small> — Adds the validation to indicate this password field is a confirmation for another field.</small>




###### Inherited from TextField
- [maxLength]({{< ref "api/Gibbon/Forms/Input/TextField/index.md#maxlength" >}})
- [placeholder]({{< ref "api/Gibbon/Forms/Input/TextField/index.md#placeholder" >}})
- [autocomplete]({{< ref "api/Gibbon/Forms/Input/TextField/index.md#autocomplete" >}})
- [isUnique]({{< ref "api/Gibbon/Forms/Input/TextField/index.md#isunique" >}})
- [getLabelContext]({{< ref "api/Gibbon/Forms/Input/TextField/index.md#getlabelcontext" >}})

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



### addPasswordPolicy

Attach the validation requirements for the system-wide password policy.

```php
Password::addPasswordPolicy( \Gibbon\Contracts\Database\Connection $pdo ): self
```






**Returns Self:** This method can be chained.



---

### addGeneratePasswordButton

Adds a button to the field that uses JS to generate and insert a password into the form.

```php
Password::addGeneratePasswordButton( \Gibbon\Forms\Input\Form $form, $sourceField = 'passwordNew', $confirmField = 'passwordConfirm' ): self
```






**Returns Self:** This method can be chained.



---

### addConfirmation

Adds the validation to indicate this password field is a confirmation for another field.

```php
Password::addConfirmation( $fieldName ): self
```






**Returns Self:** This method can be chained.



---

