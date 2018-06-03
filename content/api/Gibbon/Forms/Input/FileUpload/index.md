---
title: "FileUpload"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Forms\Input\FileUpload
generated: true
---

## FileUpload

TextField



* Full name: \Gibbon\Forms\Input\FileUpload
* Parent class: \Gibbon\Forms\Input\Input

{{< api-example >}} 



### Methods

- [accepts](#accepts)<small> — Set an array or CSV string of file extensions accepted by this file input.</small>
- [setAttachment](#setattachment)<small> — Set the attachment name and path.</small>
- [setAttachments](#setattachments)<small> — Set the attachment name and path.</small>
- [setDeleteAction](#setdeleteaction)<small> — Set the URL to visit if the delete action is clicked.</small>
- [setMaxUpload](#setmaxupload)<small> — Set the hidden input MAX_FILE_SIZE in MB and displays the amount (false to disable max upload).</small>
- [canDelete](#candelete)<small> — Sets whether the attachment will have a delete option.</small>
- [uploadMultiple](#uploadmultiple)<small> — Sets whether the input accepts multiple files.</small>




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



### accepts

Set an array or CSV string of file extensions accepted by this file input.

```php
FileUpload::accepts( array|string $accepts ): self
```






**Returns Self:** This method can be chained.



---

### setAttachment

Set the attachment name and path.

```php
FileUpload::setAttachment( string $name, string $absoluteURL, string $filePath = '' )
```









---

### setAttachments

Set the attachment name and path.

```php
FileUpload::setAttachments( string $absoluteURL, $attachments )
```









---

### setDeleteAction

Set the URL to visit if the delete action is clicked.

```php
FileUpload::setDeleteAction( string $actionURL )
```









---

### setMaxUpload

Set the hidden input MAX_FILE_SIZE in MB and displays the amount (false to disable max upload).

```php
FileUpload::setMaxUpload( string $value ): self
```






**Returns Self:** This method can be chained.



---

### canDelete

Sets whether the attachment will have a delete option.

```php
FileUpload::canDelete( boolean $value ): self
```






**Returns Self:** This method can be chained.



---

### uploadMultiple

Sets whether the input accepts multiple files.

```php
FileUpload::uploadMultiple( boolean $value = true ): self
```






**Returns Self:** This method can be chained.



---

### hasAttachments

Returns true if the file upload has attachments (and an absoluteURL)

```php
FileUpload::hasAttachments( ): boolean
```






**Return Value:**
`boolean`  



---

### getMaxUploadText

Gets the HTML output for the Maximum file size help-text

```php
FileUpload::getMaxUploadText( ): string
```






**Return Value:**
`string`  



---

### getElement

Gets the HTML output for this form element.

```php
FileUpload::getElement( ): string
```






**Return Value:**
`string`  



---

