---
title: "NotificationGateway"
date: 2018-06-03T12:46:34+00:00
weight: 0
class: \Gibbon\Domain\System\NotificationGateway
generated: true
---

## NotificationGateway

Notification Gateway

Provides a data access layer for the gibbonNotification table

* Full name: \Gibbon\Domain\System\NotificationGateway

{{< api-example >}} 



### Methods

- [__construct](#__construct)
- [selectNotification](#selectnotification)
- [selectNotificationByStatus](#selectnotificationbystatus)
- [updateNotificationCount](#updatenotificationcount)
- [insertNotification](#insertnotification)
- [selectNotificationEventByID](#selectnotificationeventbyid)
- [selectNotificationEventByName](#selectnotificationeventbyname)
- [selectAllNotificationEvents](#selectallnotificationevents)
- [updateNotificationEvent](#updatenotificationevent)
- [selectNotificationListener](#selectnotificationlistener)
- [selectAllNotificationListeners](#selectallnotificationlisteners)
- [selectNotificationListenersByScope](#selectnotificationlistenersbyscope)
- [insertNotificationListener](#insertnotificationlistener)
- [deleteNotificationListener](#deletenotificationlistener)
- [getNotificationPreference](#getnotificationpreference)




### __construct



```php
NotificationGateway::__construct( \Gibbon\Contracts\Database\Connection $pdo )
```









---

### selectNotification



```php
NotificationGateway::selectNotification( $gibbonNotificationID )
```









---

### selectNotificationByStatus



```php
NotificationGateway::selectNotificationByStatus( $data, $status = 'New' )
```









---

### updateNotificationCount



```php
NotificationGateway::updateNotificationCount( $gibbonNotificationID, $count )
```









---

### insertNotification



```php
NotificationGateway::insertNotification( $data )
```









---

### selectNotificationEventByID



```php
NotificationGateway::selectNotificationEventByID( $gibbonNotificationEventID )
```









---

### selectNotificationEventByName



```php
NotificationGateway::selectNotificationEventByName( $moduleName, $event )
```









---

### selectAllNotificationEvents



```php
NotificationGateway::selectAllNotificationEvents( )
```









---

### updateNotificationEvent



```php
NotificationGateway::updateNotificationEvent( $update )
```









---

### selectNotificationListener



```php
NotificationGateway::selectNotificationListener( $gibbonNotificationListenerID )
```









---

### selectAllNotificationListeners



```php
NotificationGateway::selectAllNotificationListeners( $gibbonNotificationEventID, $groupByPerson = true )
```









---

### selectNotificationListenersByScope



```php
NotificationGateway::selectNotificationListenersByScope( $gibbonNotificationEventID, $scopes = array() )
```









---

### insertNotificationListener



```php
NotificationGateway::insertNotificationListener( $data )
```









---

### deleteNotificationListener



```php
NotificationGateway::deleteNotificationListener( $gibbonNotificationListenerID )
```









---

### getNotificationPreference



```php
NotificationGateway::getNotificationPreference( $gibbonPersonID )
```









---

