---
title: "Editor"
weight: 0
class: \Gibbon\Forms\Input\Editor
generated: true
---

## Editor 

Editor - Rich text



* Full name: \Gibbon\Forms\Input\Editor
* Parent class: \Gibbon\Forms\Input\Input

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a tinyMCE rich-text editor input.</small>
- [setRows](#setrows)<small> — Set the textarea rows attribute to control the height of the editor box.</small>
- [showMedia](#showmedia)<small> — Set whether the media bar for upload and quick inser is available.</small>
- [initiallyHidden](#initiallyhidden)<small> — Set whether the editor input is initially hidden.</small>
- [allowUpload](#allowupload)<small> — Allow resources to be uploaded through the editor window.</small>
- [resourceAlphaSort](#resourcealphasort)<small> — Sets the sort order for resource upload.</small>
- [initialFilter](#initialfilter)<small> — Sets a filter for resource upload.</small>




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

Create a tinyMCE rich-text editor input.

```php
Editor::__construct( string $name, string $guid )
```









---

### setRows

Set the textarea rows attribute to control the height of the editor box.

```php
Editor::setRows( integer $count ): self
```






**Returns Self:** This method can be chained.



---

### showMedia

Set whether the media bar for upload and quick inser is available.

```php
Editor::showMedia( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### initiallyHidden

Set whether the editor input is initially hidden.

```php
Editor::initiallyHidden( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### allowUpload

Allow resources to be uploaded through the editor window.

```php
Editor::allowUpload( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### resourceAlphaSort

Sets the sort order for resource upload.

```php
Editor::resourceAlphaSort( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### initialFilter

Sets a filter for resource upload.

```php
Editor::initialFilter( string $value = '' ): self
```






**Returns Self:** This method can be chained.



---

