---
title: "NotificationEvent"
weight: 0
class: \Gibbon\Comms\NotificationEvent
generated: true
---

## NotificationEvent 

Notification Event

Raises an event and collects recipients. Looks for matching event listeners, then pushes resulting notifications to a sender.

* Full name: \Gibbon\Comms\NotificationEvent

{{< api-example >}} 



### Methods

- [__construct](#__construct)<small> — Create a new notification event which correlates to an event type defined in gibbonNotificationEvents.</small>
- [setNotificationText](#setnotificationtext)<small> — Defines the body text of the notification, added to the notifications page and optionally emailed to recipients.</small>
- [setActionLink](#setactionlink)<small> — Sets the link that opens when the notification is viewed and archived.</small>
- [addScope](#addscope)<small> — Add a scopeType => scopeID pair to the list. This defines which filters will match when looking for event listeners.</small>
- [addRecipient](#addrecipient)<small> — Adds a recipient to the list. Avoids duplicates by checking presence in the the array.</small>
- [getRecipientCount](#getrecipientcount)<small> — Gets the current recipient count for this event. If called after pushNotifications() it will all include listener count.</small>
- [sendNotifications](#sendnotifications)<small> — Collects and sends all notifications for this event, returning a send report array.</small>
- [sendNotificationsAsBcc](#sendnotificationsasbcc)<small> — Send notifications for this event as BCC. Helper method to clarify the intent of the sending option.</small>
- [pushNotifications](#pushnotifications)<small> — Adds event listeners to the recipients list, then pushes a notification for each recipient to the notification sender.</small>
- [getEventDetails](#geteventdetails)<small> — Get the event row from the database (lazy-load)</small>




### __construct

Create a new notification event which correlates to an event type defined in gibbonNotificationEvents.

```php
NotificationEvent::__construct( string $moduleName, string $event )
```









---

### setNotificationText

Defines the body text of the notification, added to the notifications page and optionally emailed to recipients.

```php
NotificationEvent::setNotificationText( string $text )
```









---

### setActionLink

Sets the link that opens when the notification is viewed and archived.

```php
NotificationEvent::setActionLink( string $actionLink )
```









---

### addScope

Add a scopeType => scopeID pair to the list. This defines which filters will match when looking for event listeners.

```php
NotificationEvent::addScope( string $type, integer|array $id )
```

Eg: a scopeType of gibbonYearGroupID will only match listeners for that specific year group ID.
Prevent duplicates using a type+id array key







---

### addRecipient

Adds a recipient to the list. Avoids duplicates by checking presence in the the array.

```php
NotificationEvent::addRecipient( integer|string $gibbonPersonID ): boolean
```






**Return Value:**
`boolean`  



---

### getRecipientCount

Gets the current recipient count for this event. If called after pushNotifications() it will all include listener count.

```php
NotificationEvent::getRecipientCount( ): integer
```






**Return Value:**
`integer`  



---

### sendNotifications

Collects and sends all notifications for this event, returning a send report array.

```php
NotificationEvent::sendNotifications( \Gibbon\Contracts\Database\Connection $pdo, \Gibbon\session $session, boolean $bccMode = false ): array
```






**Return Value:**
`array`  Send report with success/fail counts.



---

### sendNotificationsAsBcc

Send notifications for this event as BCC. Helper method to clarify the intent of the sending option.

```php
NotificationEvent::sendNotificationsAsBcc( \Gibbon\Contracts\Database\Connection $pdo, \Gibbon\session $session ): array
```






**Return Value:**
`array`  Send report with success/fail counts.



---

### pushNotifications

Adds event listeners to the recipients list, then pushes a notification for each recipient to the notification sender.

```php
NotificationEvent::pushNotifications( \Gibbon\Domain\System\NotificationGateway $gateway, \Gibbon\Comms\NotificationSender $sender ): integer|boolean
```

Does not perform the sending of notifications (can be used for bulk processing).




**Return Value:**
`integer|boolean`  Final recipient count, false on failure



---

### getEventDetails

Get the event row from the database (lazy-load)

```php
NotificationEvent::getEventDetails( \Gibbon\Domain\System\NotificationGateway $gateway, $key = null ): array
```






**Return Value:**
`array`  Datbase row, null on failure



---

