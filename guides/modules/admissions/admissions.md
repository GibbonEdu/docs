---
title: Admissions
description: Manage student applications, enrolments, and withdrawals in Gibbon.
---

# Admissions

## Overview
The **Admissions** module manages the full student lifecycle — from initial application through enrolment to withdrawal. It connects external-facing application forms with internal records, ensuring every student’s journey is accurately tracked and integrated across the system.

Schools use this module to monitor applications, manage enrolments, handle withdrawals, and review trends over time. Admissions staff and administrators can coordinate processes efficiently without needing external systems.

## Key Actions
- Manage student applications  
- Create and review enrolments  
- Withdraw students formally  
- Track new and left students  
- Analyse enrolment trends  

## Typical Workflow
Admissions staff begin with submitted applications, which are stored as **Admissions Accounts**. Once an application is accepted, the applicant’s data transfers automatically to **Student Enrolment**, where they become part of the active student body.

Withdrawals are handled through the **Withdraw Student** section, which ensures records are archived correctly and notifications are sent to relevant staff. Administrators can then use **Left Students** and **Enrolment Trends** to report on changes and plan for the future.

::: tip
Admissions integrates closely with the [Form Builder](../system-admin/form-builder.md), which controls the structure of application forms.
:::

## Sections

### Student Enrolment
Used to view, add, and manage students currently enrolled in the school. Administrators can review enrolments by year group, form group, or status, and manually adjust student placements.

Typical uses include:
- Adding a new enrolment for an accepted student  
- Updating a student’s year or form group  
- Reviewing enrolment lists for reporting  

::: tip
“Form Group” refers to the student’s homeroom or roll group. Updating a student’s enrolment here automatically aligns attendance and reporting data across the system.
:::

### Withdraw Student
Marks a student as formally withdrawn while maintaining their historical records.  
This ensures continuity for reporting, audits, and re-admissions.

Withdrawals include:
- Setting a final attendance date  
- Recording a departure reason (e.g., *Graduated*, *Transferred*)  
- Optionally noting the next school  

Notifications can be sent automatically to key roles such as Heads of Year or Form Tutors.

::: info
When a student is withdrawn, their enrolment record is closed and their status updates to **Left**, preserving full history.
:::

### Admissions Accounts
Manages parent or guardian accounts created during the admissions process.  
These accounts exist separately from regular user accounts and are used to submit and track applications.

Admissions accounts are:
- Created automatically when a public form is submitted  
- Linked to families and applications  
- Converted to standard user accounts when an application is accepted  

::: tip
Keeping admissions accounts separate helps schools manage prospective families securely until acceptance.
:::

### Manage Applications
The operational hub of the admissions process, displaying all active and pending submissions for the current academic year. Staff can review, edit, and decide on applications here.

Common actions:
- Review application details and status  
- Accept or reject applications  
- Link applications to existing users or admissions accounts  
- Access related forms through the **Form Builder**

Upon acceptance:
- Applicant data transfers into the **Student Enrolment** table  
- Family and user records are created automatically  
- Notifications alert relevant admissions staff  

### Left Students
Lists students who have graduated or withdrawn. This section provides access to historical data and supports re-admissions when needed.

Administrators can:
- Filter by academic year or departure reason  
- Export data for archiving or reporting  

### New Students
Displays students who have been newly accepted or transferred in for the current academic year. Useful for orientation and onboarding processes.

### Student Enrolment Trends
Provides visual summaries of enrolment changes across years. Helps leadership teams identify trends and support planning for class sizes, staffing, and resources.

## Related Modules
See also the [Form Builder](../system-admin/form-builder.md) documentation for details on configuring application forms.
