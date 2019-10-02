---
title: "Getting Started With Gibbon"
linktitle: "Getting Started"
categories: ["support"]
tags: ["getting started", "video"]
weight: 20
contributors: ["rossdotparker"]
---

Gibbon aims to cater to all sorts of schools, and the back end has a correspondingly large assortment of options. This can be overwhelming to start with, so this page aims to highlight the most important options when first setting up a school. The video below gives a quick start guide, with the following text going into more detail:

<div style="width: 100%; text-align: center; margin-bottom: 20px;"><iframe src="https://www.youtube.com/embed/r3w0Lo_AwZQ?rel=0" allowfullscreen="allowfullscreen" width="640" height="480" frameborder="0"></iframe></div>

## Demo Data

Integrated into the Gibbon installer, opt to include demo data when you configure your database to see what Gibbon looks like in a fully operational school.

## System Settings

Before setting up the structure of your school, complete as many of the settings as possible in ___Admin___ > ___System Admin___ > ___System Settings___. This will help ensure that you have access to as much of the system's functionality as possible.

## School Structure

Use the following options in the right-hand menu under **Admin** > **School Admin** to set up basic structures in your school.

#### Years, Days & Times

1.  ___Manage School Years___ - almost all of Gibbon's functionality is reliant on the concept of a school or academic year: this helps you see only the information that is relevant in many views. To function your system needs a "Current" school year, and can have any number of "Past" and "Upcoming" years. Each school year has a unique "sequence number", which shows how it is ordered in relation to other years.
2.  ___Manage Days of the Week___ - here you can turn on or off individual days in the week, as well as setting start and end times for your various school days.
3.  ___Manage Terms___ - if your school year is divided into terms of semesters, you should create one entry here for each term. Otherwise, just create a single term the same length as your school year.
4.  ___Manage Special Days___ - here you can specify public holidays, mid-term breaks and other school closures. This is important as it helps determine whether things like school attendance should be enabled on any given day.

#### Groupings

1.  ___Manage Year Groups___- year groups represent the way that schools divides students on the basis of age. By default, Gibbon ships with Years 7-13 preset. Use this area to add, edit and delete school years. Each year group has a unique "sequence number", which shows how it is ordered in relation to other year groups.
2.  ___Manage Roll Group___ - roll groups (aka tutor groups, home room, form groups) are the groups in which students have their attendance taken and/or receive pastoral care. Roll groups can contain students from a single year group, or can be mixed across years.
3.  ___Manage Departments___ - departments, which can be either learning areas or administrative, represent staff groupings. These are mainly used in the Planner, Departments and Library modules. To make use of this area, you will most likely want to added staff to your school (see below).

#### Others

1.  ___Manage Spaces___ - spaces are any areas in your school that you might want to use in the timetable, including classrooms, labs, offices, sports facilities, etc.

The other settings in School Admin are not so fundamental to the running of a school, and so will not be covered here. Mostly, these are used to control the functioning of single module (e.g. Manage Student Settings).

## Users

Most users of Gibbon will fit into three main categories: staff, student, parents. Gibbon uses roles, actions and permissions to control access to various parts of the system. Use the following options in the right-hand menu under **Admin** > **User Admin** to set up users and access.

#### User Management - Access

1.  ___Manage Roles___ - roles in Gibbon are groupings based on what a user can do within the system. Gibbon ships with the following default roles: Administrator (that's you), Parent, Student, Support Staff and Teacher. Add new roles according to the way you want to allow access to the system. For example, if you have some students with extended system privileges, create a new role called something like "Student Ext".
2.  ___Manage Permissions___ - permissions turn individual module actions on or off for selected roles, allowing you to control who can do what to a relatively fine-grained level. Gibbon ships with sensible, common defaults, but it is worth auditing this area thoroughly to avoid nasty surprises in behaviour. For example, you probably would not want to give parents access to full student profiles, preferring instead to stick with brief profiles for parents, and full for staff.

#### User Management - Users

1.  ___Manage Users___ - with your access rights ready, you can now start adding users, and the ___Manage Users___ area lets you do this by hand. There is also an [Import from File]({{< relref "administrators/getting-started/importing-users/" >}}) option in System Admin which allows you to upload users in bulk using CSV-formatted spreadsheets. Later on, come back to Manage Users to reset passwords, assign new roles and much more. Note that users can be assigned multiple roles, and can use the Role Switcher on their homepage sidebar to access them. If you would like users to update their own information, this can be achieved under ___People___ > ___Data Updater___.
2.  ___Student Enrolment___ - students much be enrolled in the current school year if they are to appear in most areas of the system. On enrolment, students are placed into year and role groups. When the end of year arrives, use ___Rollover___ under the Admissions sub-menu to automate enrolment for the following year.
3.  ___Manage Families___ - staff, students and parents can all exist within families, which act as the basic mechanism for granting parent users access to information on student users.
4.  ___Manage Staff___ - all staff users should be registered as staff in order that they can be used in various areas of the system.

#### Admissions

1.  **<span style="text-decoration: underline;">Application Form Settings</span> -** if you are looking to reduce paper work and data entry, set up your Application Form parameters and make sure public applications are enabled. Your admissions officer (specified in System Settings above) will receive emails when new applications arrive, and can then manage these under ___Manage Applications___.

## Timetable

Enabling and configuring a timetable improves staff efficiency in many of the other areas of the system (such as the planner). This is covered in more detail in the [Timetabling]({{< relref "administrators/timetable/timetabling.md" >}}) section.
