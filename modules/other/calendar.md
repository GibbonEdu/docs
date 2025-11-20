---
title: "Calendar"
categories: ["support"]
tags: []
order: 10
contributors: ["skuipers"]
---

### Calendar

The calendar module enables creating and managing events and participants. Unlike previous calendar implementations, the Calendar module does not require Google SSO or Microsoft SSO. You can create a variety of different calendars with different editors and view permissions, and assign them different colours which will show up on timetables as well as the View Calendar page.

## Key Actions

- Create calendars and set view and edit permissions for the calendar
- Add events to calendars, including descriptions and location details
- Add participants and organisers to events
- Send an email list of participants to selected staff
- View a combined calendar of all events visible to that user
- View calendar events on the timetable and see event details

### Event Types

Each event has a type. We've added some defaults, such as School Event and Meeting, however you can edit these and add your own event types for your school's needs. This option is found in Calendar > Manage Calendars, and look for the Event Types button.

### View Access

Each calendar can have it's own view permissions, configured when you add and edit the calendar in Manage Calendars. If a user has view access to a calender, they will be able to see it on their timetable as well as in the View Calendar page.

**Public**: Any user will be able to see events on a public calendar. 

**Viewable by Participants**: Users who have been added as an organiser or participant of an event will always be able to see this event on their calendar and timetable. This supersedes other view permissions, and will allow users who cannot see an entire calendar to still see the events they are part of. Particularly useful for meetings.

**Viewable by Role Category**: There are four primary role categories in Gibbon: Staff, Student, Parent, and Other. These view toggles let you control if users with these role categories (which depend on their user roles) can see the events in this calendar. 

### Edit Access

Users need to have Manage Events access to be able to add and edit events. The calendars they have access to change depends on the specific Editor access they have been granted.

**All Staff**: With this option, any staff member can add or edit their own events on this calendar. They cannot make changed to events that others have created.

**Editors**: Alternatively, you can add a specific list of users who have access to add and edit events on the calendar. By default they can only edit their own events.

**Edit All Events**: With this option, the editor can edit all events on the calendar, including events created by other users. 

### View Calendar

This page uses a well-known JavaScript calendar library called [FullCalendar](fullcalendar.io) to display all the event that are visible to a given user. It has controls to view events by month, week, day, or list. Users with Manage Events permission can click an event to see more details, such as the list of participants.

Users with Manage Events permission and Editor access to one or more calendar can also click (or click-and-drag) to add new events to their calendar.

### Timetable

Calendar events show up on the timetable in the chosen colour of that calendar. There is a dropdown in the timetable interface where users can toggle calendars on and off. They can also re-order how the calendar events display on their timetable with the Reorder Layers option. Users can also click the "Only Show My Events" to hide events that they are not a participant of.


