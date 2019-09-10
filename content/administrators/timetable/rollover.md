---
title: "Rollover"
categories: ["support"]
tags: []
weight: 20
contributors: ["rossdotparker"]
---

The Rollover is Gibbon's tool for moving your installation from one school year to another, updating various records in one go.

*   To access the rollover, go to ___Admin___ > ___User Admin___ in the main menu, and then ___Rollover___ in the module menu.
*   Before attempting the rollover, backup your database as a precaution against unexpected behaviour. <span style="color: #ff0000;">**_Without a backup, there is no way to undo this process._**</span>
*   The rollover consists of the following 3 steps:
    1.  Warning - make sure you have backed up.
    2.  Getting Ready - this step presents the following options, which allow you to control how the rollover proceeds:
        1.  ___Add Year Following Current School Year___ - only displays if there are no Upcoming years succeeding the Current year.
        2.  ___Set Expected Users To Full___ - this step primes newcomers who have status set to "Expected" to be enroled as students or added as staff (see below).
        3.  ___Enrol New Students (Status Expected)___ - take students who are marked expected and enrol them. All parents of new students who are enroled below will have their status set to "Full". If a student is not enroled, they will be set to "Left".
        4.  ___Enrol New Students (Status Full)___ - take new students who are already set as full, but who were not enroled last year, and enrol them. These students probably came through the Online Application form, and may already be enroled in next year: if this is the case, their enrolment will be preset automatically. All parents of new students who are enroled below will have their status set to "Full". If a student is not enroled, they will be set to "Left".
        5.  ___Re-Enrol Other Students___ - any students who are not re-enroled will have their status set to "Left". Students who are already enroled will have their enrolment updated.
        6.  ___Set Final Year Students To Left___ - students in the last year of school will be set to left, unless set otherwise (e.g. to repeat a year).
        7.  ___Register New Staff___ - Any staff who are not registered will have their status set to "Left".
    3.  Go - when Submit is pressed on Step 2, the school year will be incremented, and the actions specified above will be processed. Users (except the user running the rollover process) will need to log out and log back in to be in the new year. Feedback on each action will be given on screen as Step 3 is processed.
*   In order to have less work to do during the rollover, you can do the following in advance. When you run the roll group, the values set will automatically appear as form group choices for students in Step 5 above.
    *   Form Groups - in the current years' form groups, specify a form group for students to move into in the coming year. You can do this in Admin > School Admin > Manage Form Groups (a.k.a. Manage Roll Groups in US English).
    *   Individual Students - if form group progression is not so straight forward, you can set individual student form groups by enroling students ahead of time. To do this go to Admin > User Admin > Student Enrolment and use the Next Year link to jump forward a year. Then add enrolment records for the relevant students, setting their form groups.
