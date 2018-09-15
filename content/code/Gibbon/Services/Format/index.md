---
title: "Format"
weight: 0
class: \Gibbon\Services\Format
generated: true
---

## Format 

Format values based on locale and system settings.



* Full name: \Gibbon\Services\Format

{{< api-example >}} 



### Methods

- [setup](#setup)<small> — Sets the internal formatting options from an array.</small>
- [setupFromSession](#setupfromsession)<small> — Sets the formatting options from session i18n and database settings.</small>
- [date](#date)<small> — Formats a YYYY-MM-DD date with the language-specific format. Optionally provide a format string to use instead.</small>
- [dateConvert](#dateconvert)<small> — Converts a date in the language-specific format to YYYY-MM-DD.</small>
- [dateTime](#datetime)<small> — Formats a YYYY-MM-DD H:I:S MySQL timestamp as a readable string. Optionally provide a format string to use.</small>
- [dateReadable](#datereadable)<small> — Formats a YYYY-MM-DD date as a readable string with month names.</small>
- [dateRange](#daterange)<small> — Formats two YYYY-MM-DD dates with the language-specific format. Optionally provide a format string to use instead.</small>
- [dateRangeReadable](#daterangereadable)<small> — Formats two YYYY-MM-DD dates as a readable string, collapsing same months and same years.</small>
- [dateFromTimestamp](#datefromtimestamp)<small> — Formats a Unix timestamp as the language-specific format. Optionally provide a format string to use instead.</small>
- [timestamp](#timestamp)<small> — Converts a YYYY-MM-DD date to a Unix timestamp.</small>
- [time](#time)<small> — Formats a time from a given MySQL time or timestamp value.</small>
- [timeRange](#timerange)<small> — Formats a range of times from two given MySQL time or timestamp values.</small>
- [number](#number)<small> — Formats a number to an optional decimal points.</small>
- [currency](#currency)<small> — Formats a currency with a symbol and two decimals, optionally displaying the currency name in brackets.</small>
- [yesNo](#yesno)<small> — Formats a Y/N value as Yes or No in the current language.</small>
- [link](#link)<small> — Formats a link from a url. Automatically adds target _blank to external links.</small>
- [age](#age)<small> — Formats a YYYY-MM-DD date as a relative age with years and months.</small>
- [phone](#phone)<small> — Formats phone numbers, optionally including countrt code and types.</small>
- [address](#address)<small> — Formats an address including optional district and country.</small>
- [name](#name)<small> — Formats a name based on the provided Role Category. Optionally reverses the name (surname first) or uses an informal format (no title).</small>
- [nameList](#namelist)<small> — Formats a list of names from an array containing standard title, preferredName & surname fields.</small>
- [userPhoto](#userphoto)<small> — Returns an HTML <img> based on the supplied photo path, using a placeholder image if none exists. Size may be either 75 or 240 at this time.</small>
- [userStatusInfo](#userstatusinfo)
- [courseClassName](#courseclassname)<small> — Returns the course and class name concatenated with a . (dot). The separator could become a setting at some point?</small>




###### Inherited from FormatResolver
- [addFormatter]({{< ref "code/Gibbon/Services/FormatResolver/index.md#addformatter" >}})
- [getFormatter]({{< ref "code/Gibbon/Services/FormatResolver/index.md#getformatter" >}})
- [using]({{< ref "code/Gibbon/Services/FormatResolver/index.md#using" >}})
- [keyValue]({{< ref "code/Gibbon/Services/FormatResolver/index.md#keyvalue" >}})
- [__callStatic]({{< ref "code/Gibbon/Services/FormatResolver/index.md#__callstatic" >}})



### setup

Sets the internal formatting options from an array.

```php
static Format::setup( array $settings )
```



* This method is **static**.





---

### setupFromSession

Sets the formatting options from session i18n and database settings.

```php
static Format::setupFromSession( \Gibbon\Session $session )
```



* This method is **static**.





---

### date

Formats a YYYY-MM-DD date with the language-specific format. Optionally provide a format string to use instead.

```php
static Format::date( string $dateString, string $format = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### dateConvert

Converts a date in the language-specific format to YYYY-MM-DD.

```php
static Format::dateConvert( string $dateString ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### dateTime

Formats a YYYY-MM-DD H:I:S MySQL timestamp as a readable string. Optionally provide a format string to use.

```php
static Format::dateTime( string $dateString, string $format = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### dateReadable

Formats a YYYY-MM-DD date as a readable string with month names.

```php
static Format::dateReadable( string $dateString ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### dateRange

Formats two YYYY-MM-DD dates with the language-specific format. Optionally provide a format string to use instead.

```php
static Format::dateRange( string $dateFrom, string $dateTo, $format = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### dateRangeReadable

Formats two YYYY-MM-DD dates as a readable string, collapsing same months and same years.

```php
static Format::dateRangeReadable( string $dateFrom, string $dateTo ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### dateFromTimestamp

Formats a Unix timestamp as the language-specific format. Optionally provide a format string to use instead.

```php
static Format::dateFromTimestamp( string|integer $timestamp, string $format = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### timestamp

Converts a YYYY-MM-DD date to a Unix timestamp.

```php
static Format::timestamp( $dateString ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### time

Formats a time from a given MySQL time or timestamp value.

```php
static Format::time( string $timeString, string|boolean $format = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### timeRange

Formats a range of times from two given MySQL time or timestamp values.

```php
static Format::timeRange( string $timeFrom, string $timeTo, string|boolean $format = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### number

Formats a number to an optional decimal points.

```php
static Format::number( integer|string $value, integer $decimals ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### currency

Formats a currency with a symbol and two decimals, optionally displaying the currency name in brackets.

```php
static Format::currency( string|integer $value, boolean $includeName = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### yesNo

Formats a Y/N value as Yes or No in the current language.

```php
static Format::yesNo( string $value, boolean $translate = true ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### link

Formats a link from a url. Automatically adds target _blank to external links.

```php
static Format::link( string $url, string $text = '', string $title = '' ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### age

Formats a YYYY-MM-DD date as a relative age with years and months.

```php
static Format::age( string $dateString, boolean $short = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### phone

Formats phone numbers, optionally including countrt code and types.

```php
static Format::phone( string|integer $number, boolean $countryCode = false, boolean $type = false ): string
```

Adds spaces to 7-10 digit numbers based on the most common global formats.

* This method is **static**.


**Return Value:**
`string`  



---

### address

Formats an address including optional district and country.

```php
static Format::address( string $address, string $addressDistrict, string $addressCountry ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### name

Formats a name based on the provided Role Category. Optionally reverses the name (surname first) or uses an informal format (no title).

```php
static Format::name( string $title, string $preferredName, string $surname, string $roleCategory = 'Staff', boolean $reverse = false, boolean $informal = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### nameList

Formats a list of names from an array containing standard title, preferredName & surname fields.

```php
static Format::nameList( array $list, string $roleCategory = 'Staff', boolean $reverse = false, boolean $informal = false ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### userPhoto

Returns an HTML <img> based on the supplied photo path, using a placeholder image if none exists. Size may be either 75 or 240 at this time.

```php
static Format::userPhoto( string $path, integer $size = 75 ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

### userStatusInfo



```php
static Format::userStatusInfo( $person = array() )
```



* This method is **static**.





---

### courseClassName

Returns the course and class name concatenated with a . (dot). The separator could become a setting at some point?

```php
static Format::courseClassName( string $courseName, string $className ): string
```



* This method is **static**.


**Return Value:**
`string`  



---

