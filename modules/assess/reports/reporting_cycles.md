---
title: "Reporting Cycles"
categories: ["reports"]
tags: []
order: 10
contributors: ["skuipers"]
date: "2020-01-20T14:00:00+08:00"
---
# Reporting Cycles

A reporting cycle is a period of time within the school year that reporting data is collected. Reporting cycles are separate from school year terms, which gives schools flexibility for when and how their reports are written. 

Each reporting cycle can be setup through ___Manage Reporting Cycles___. The start and end date determine when the reporting cycle occurs throughout the school year. These dates are separate from when users have access to the reporting cycle, which is set through ___Manage Access___.

- **Cycle Number**: If there is more than one reporting cycle in a year, you can set the Cycle Number and Total Cycles, which are used by report templates to display progressive and cumulative reporting data.

- **Milestones**: A reporting cycle can have a number of Milestones, which are important dates within the reporting cycle. These can act as reminders for users, and are shown on the My Reporting page as a timeline of events.
  ![Milestones](https://docs.gibbonedu.org/img/reports/Milestones.png)


## Scopes and Criteria

The scopes and criteria in a reporting cycle determine *what* is being reported on, and *who* can report on it. For example, this is where you set up whether a reporting cycle involves comments and grades, or just comments, or a mix of different criteria.

**Scopes** determine the larger group of users who are involved in a reporting cycle. 

- The __Year Group__ scope is available to users who have been set as the Head of Year in ___School Admin > Manage Year Groups___.

- The __Form Group__ scope is available to users who have been assigned as a tutor for a form group through ___School Admin > Manage Form Groups___.

- The __Course__ scope is available to users who have been added as a Teacher of a course through ___Timetable Admin > Course Enrolment by Class___.

**Criteria** determine what kind of data is being recoded for each student. The criteria system is flexible, enabling different sets of data to be collected for different courses, form groups, and year groups.

- The __name__ and __description__ of a criteria are displayed to users who are writing the reports, to help them know what kind of data they're entering.

- The __target__ for a criteria determines if it is written individually Per Student, or collectively Per Group for all students in the selected course, form group, or year group. For example, schools may wish to differentiate between one comment written Per Student, as well as a single general comment written Per Group.

**Criteria Types** are the generic types of data being recorded. There are some Comment types added by default, and you're encouraged to add criteria types as needed by your school. These are reusable from year to year, and enable template builders to design different layouts for different types of criteria in the reports. For example, if a school has two different types of grades on a report card, such as a Term Grade and a Final Grade, they may want to set these up as separate criteria types so they can differentiate this data.


## Setting up Access

Users will not be able to enter reporting data until they have been granted access. Access for each reporting cycle is determined by role, and you can select multiple roles by holding ctrl/command. Access is also determined by scope, which can be limited to one or more reporting scopes. 

Reporting access is limited by a start and end date, which automatically opens and closes report writing access for users based on these dates.

Users with __Can Write__ access are able to write reports within their scope. If Can Write is set to No, users can view a read-only cope of the reports from the My Reporting page.

If __Can Proof Read__ is enabled, users with this access can view and suggest edits on comments written by other users in the same reporting scope.

![Access](https://docs.gibbonedu.org/img/reports/Reporting%20Access.png)


## Rolling Over to a new School Year

Once you already have reports, templates, and reporting cycles, it's much quicker to setup for future school years.

**Reporting Cycles**

- You can login to a previous school year (or use the Year Switcher on the dashboard) and navigate to the ___Reports > Manage Reporting Cycles___ page.

- Then, use the __Duplicate__ option on a reporting cycle to copy it to the following year. Be sure to select the target school year, enter the start and end date of the new reporting cycle as well as update the cycle numbers.

- Duplicating a cycle will copy all the scopes and criteria, but not the grades, into a new reporting cycle.

- Once you've duplicated your reporting cycles, use the Year Switcher to return to ___Reports > Manage Reporting Cycles___ in your target school year.

- From here it's a good idea to Edit the reporting cycle(s) and update the milestones.

- If you have added any new form groups or new courses in the target school year, you will also want to go into __Scopes & Criteria__ to add these into the respective areas.

**Reports**

- Create new reports for these reporting cycles through ___Reports > Manage Reports___. These will connect your templates to the criteria you've defined in your reporting cycles.

**Templates**

- Templates can be re-used from year to year and are not attached to a school year, so they do not need duplicated.

- If you are making large changes to your template, it's best to create a new template and keep the old template should you need to re-generate old reports in the future.
