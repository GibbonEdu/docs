---
title: "Timetabling"
categories: ["support"]
tags: []
weight: 10
contributors: ["rossdotparker"]
---

Gibbon supports storing and rendering of timetables using a non-grid-restrained approach. The timetable is created in a systematic, interactive procedure that is easy to achieve and understand. Before you proceed:

1.  You should have created the school year(s) and the term(s).
2.  You should have a list of all the days the school is active
3.  You should have a list of all the activities the school does in all days the school is on.
4.  This should be in terms of the periods, the times and the activities of a particular time set.

## Creating A Timetable

1.  Go to Admin > Timetable Admin
2.  Use **Manage Courses & Classes** to create courses, and within these establish necessary classes.
3.  Use **Course Enrollment** to assign teachers and students to classes.
4.  Use **Manage Columns** to create time structures for distinct day patterns you have in your timetable cycle (e.g. if Monday, Wednesday and Friday follow one set of times, and Tuesday and Thursday follow one set of times, you will need two columns). For each Column, add Rows for all time periods (e.g. add Lesson rows for each instructional period, some Break rows in between, etc)
5.  Use **Manage Timetables** to create as many timetables as you need in a given school year. Most schools will require one timetable, but some schools (e.g. through schools) may require more. Each Year Group in each school year can only be connected to one Timetable, but a Timetable can be shared by multiple Year Groups (e.g. you can have a timetable for Years 7-11 and a separate one for Years 12-13). In each Timetable you can specify a Day entry for each type of day in your cycle. Each of these Days is tied to a Column (see step 4.), whose Rows give it its timing structure. Once the Column is assigned to a Day, you can associate classes with the periods in that Day.
6.  The final step is to assign timetable days to calendar days, which is done using **Tie Days To Dates**. If no records show under **Tie Days to Dates** make sure you have set up school terms under School Admin > **Manage Terms** .

## Example Columns, Rows, Timetables, and Days

Let's say your school runs Monday to Friday using one set of time periods on Monday-Wednesday-Friday and another set of time periods on Tuesday-Thursday. Furthermore, the school uses different times for Year 7-11 (5 periods per day) than for Year 12-13 (a longer day with 6 periods). To set this up, you would do the following:
1. Manage Columns - Add four Columns: Upper MWF, Upper TuTh, Lower MWF, and Lower TuTh -- one for each combination of Year group and daily time pattern.
2. Add Rows - Add to each of the four Columns the Rows needed to define the 5 Lesson periods and 4 Break periods for the Lower year columns, and the 6 Lesson periods and 5 Break periods for the Upper year columns.
3. Manage Timetables - Add two Timetables: Upper, and Lower -- for each one, select the appropriate Year Groups (Upper = 12, 13; Lower = 7, 8, 9, 10, 11)
4. Add Days - Add five Days to each of the two Timetables: three Days named Monday, Wednesday, and Friday that refer to the Column Upper MWF, two Days name Tuesday and Thursday that refer to Column Upper TuTh, three Days that refer to the Column Lower MWF, and two Days that refer to the Column Lower TuTh.

## Notes

*   Timetabling is always tricky. Gibbon's approach is a little tedious at times, but gives great flexibility. If you have any questions, check out our [support forum](https://ask.gibbonedu.org).
