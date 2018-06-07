---
title: "NotificationSender"
weight: 0
class: \Gibbon\Comms\NotificationSender
generated: true
---

## NotificationSender

Notification Sender

Holds a collection of notifications. Sends notifications by inserting in the database and optionally sends
by email based on the recipient's notification settings.

TODO: Add background processing for notification emails.

* Full name: \Gibbon\Comms\NotificationSender

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Injects a gateway and session dependency, used for database inserts and email formatting.</small>
- [addNotification](#addnotification)<small> — Adds a notification to the collection as an array.</small>
- [getNotificationCount](#getnotificationcount)<small> — Gets the current notification count.</small>
- [sendNotifications](#sendnotifications)<small> — Delivers all notifications by inserting/updating in database, and optionally by sends by email.</small>




### __construct

Injects a gateway and session dependency, used for database inserts and email formatting.

```php
NotificationSender::__construct( \Gibbon\Domain\System\NotificationGateway $gateway, \Gibbon\session $session )
```









---

### addNotification

Adds a notification to the collection as an array.

```php
NotificationSender::addNotification( integer|string $gibbonPersonID, string $text, string $moduleName, string $actionLink )
```









---

### getNotificationCount

Gets the current notification count.

```php
NotificationSender::getNotificationCount( ): integer
```






**Return Value:**
`integer`  



---

### sendNotifications

Delivers all notifications by inserting/updating in database, and optionally by sends by email.

```php
NotificationSender::sendNotifications( ): array
```






**Return Value:**
`array`  Send report with success/fail counts.



---

