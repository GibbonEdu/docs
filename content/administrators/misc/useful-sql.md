---
title: "Useful SQL"
categories: ["support"]
tags: []
weight: 60
contributors: ["rossdotparker"]
---

{{% alert theme="danger" %}}**PLEASE NOTE THAT THIS PAGE IS NO LONGER UPDATED. ALL OF THESE USEFUL SQL QUERIES, PLUS MORE IN TIME, ARE NOW AVAILABLE TO RUN DIRECTLY IN GIBBON USING THE QUERY BUILDER MODULE. DOWNLOAD IT ON OUR [<span style="color: #ff0000;">EXTEND PAGE</span>](https://gibbonedu.org/extend/ "Extend").**{{% /alert %}}

* * *

The following SQL statements can be run on a Gibbon installation in order to extract the specified data. Use of a mySQL client (such as [phpMyAdmin](http://www.phpmyadmin.net)) is be required to run these commands.

### Markbook Entries for Year Group

This example is for students in Year 11, but its effectiveness depends on your standard for naming courses (e.g. having "11" in your course name).

    SELECT gibbonCourse.nameShort, gibbonMarkbookColumn.name, surname, preferredName, attainmentValue, effortValue FROM gibbonMarkbookColumn JOIN gibbonCourseClass ON ( gibbonMarkbookColumn.gibbonCourseClassID = gibbonCourseClass.gibbonCourseClassID ) JOIN gibbonCourse ON ( gibbonCourseClass.gibbonCourseID = gibbonCourse.gibbonCourseID ) JOIN gibbonMarkbookEntry ON ( gibbonMarkbookEntry.gibbonMarkbookColumnID = gibbonMarkbookColumn.gibbonMarkbookColumnID ) JOIN gibbonPerson ON ( gibbonMarkbookEntry.gibbonPersonIDStudent = gibbonPerson.gibbonPersonID ) WHERE gibbonSchoolYearID =(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') AND gibbonCourse.nameShort LIKE '%11' AND gibbonPerson.status='Full' ORDER BY gibbonCourse.nameShort, gibbonMarkbookColumn.name, surname, preferredName;

### Subject Selections for Year Group

This example is for students in Year 12, but its effectiveness depends on your standard for naming courses (e.g. having "12" in your course name).

    SELECT gibbonCourse.nameShort, gibbonCourseClass.nameShort, surname, preferredName FROM gibbonCourse JOIN gibbonCourseClass ON (gibbonCourseClass.gibbonCourseID=gibbonCourse.gibbonCourseID) JOIN gibbonCourseClassPerson ON (gibbonCourseClassPerson.gibbonCourseClassID=gibbonCourseClass.gibbonCourseClassID) JOIN gibbonPerson ON (gibbonCourseClassPerson.gibbonPersonID=gibbonPerson.gibbonPersonID) WHERE role='Student' AND status='Full' AND gibbonCourse.name LIKE '%12%' AND gibbonSchoolYearID=(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') ;

### Applications in Current Year

    SELECT surname, preferredName, dob, gender, schoolName1, schoolDate1, schoolName2, schoolDate2, languageHome, languageFirst, address1, address1District, address1Country, parent1surname, parent1preferredName, parent1phone1CountryCode, parent1phone1Type, parent1phone1, parent2surname, parent2preferredName, parent2phone1CountryCode, parent2phone1Type, parent2phone1, timestamp as dateSubmission FROM gibbonApplicationForm WHERE gibbonSchoolYearIDEntry=(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') ORDER by surname, preferredName

### Applications By DOB

    SELECT * FROM gibbonApplicationForm ORDER BY dob DESC

### Parent Contact Details by Student in Current Year

    SELECT student.surname AS studentSurname, student.preferredName AS studentpreferredName, gibbonFamily.name as family, homeAddress, homeAddressDistrict, homeAddressCountry,gibbonRollGroup.name as rollGroup, student.officialName AS studentOfficialName, student.nameInCharacters AS studentChineseName, student.studentID AS studentID, student.email AS studentEmail, student.phone1 AS studentPhone1, student.phone2 AS studentPhone2, parent1.title AS parent1Title, parent1.surname AS parent1Surname, parent1.preferredName AS parent1PreferredName, parent1.gender AS parent1Gender, parent1.email AS parent1Email, CONCAT(parent1.phone1Type,' ',parent1.phone1CountryCode,' ', parent1.phone1) AS phone1, CONCAT(parent1.phone2Type,' ',parent1.phone2CountryCode,' ', parent1.phone2) AS phone2, CONCAT(parent1.phone3Type,' ',parent1.phone3CountryCode,' ', parent1.phone3) AS phone3, CONCAT(parent1.phone4Type,' ',parent1.phone4CountryCode,' ', parent1.phone4) AS phone4, parent1.address1 AS parent1Address, parent1.address1District AS parent1AddressDistrict, parent1.address1Country AS parent1AddressCountry, parent1.vehicleRegistration AS parent1VehicleRegistration, parent1Fam.contactCall, parent1Fam.contactSMS, parent1Fam.contactEmail, parent1Fam.contactMail, parent1Fam.contactPriority, parent2.title AS parent2Title, parent2.surname AS parent2Surname, parent2.preferredName AS parent2PreferredName, parent2.gender AS parent2Gender, parent2.email AS parent2Email, CONCAT(parent2.phone1Type,' ',parent2.phone1CountryCode,' ', parent2.phone1) AS phone1, CONCAT(parent2.phone2Type,' ',parent2.phone2CountryCode,' ', parent2.phone2) AS phone2, CONCAT(parent2.phone3Type,' ',parent2.phone3CountryCode,' ', parent2.phone3) AS phone3, CONCAT(parent2.phone4Type,' ',parent2.phone4CountryCode,' ', parent2.phone4) AS phone4, parent2.address1 AS parent2Address, parent2.address1District AS parent2AddressDistrict, parent2.address1Country AS parent2AddressCountry, parent2.vehicleRegistration AS parent2VehicleRegistration, parent2Fam.contactCall, parent2Fam.contactSMS, parent2Fam.contactEmail, parent2Fam.contactMail, parent2Fam.contactPriority FROM gibbonPerson AS student JOIN gibbonStudentEnrolment ON (student.gibbonPersonID=gibbonStudentEnrolment.gibbonPersonID) JOIN gibbonRollGroup ON (gibbonRollGroup.gibbonRollGroupID=gibbonStudentEnrolment.gibbonRollGroupID) LEFT JOIN gibbonFamilyChild ON (gibbonFamilyChild.gibbonPersonID=student.gibbonPersonID) LEFT JOIN gibbonFamily ON (gibbonFamilyChild.gibbonFamilyID=gibbonFamily.gibbonFamilyID) LEFT JOIN gibbonFamilyAdult AS parent1Fam ON (parent1Fam.gibbonFamilyID=gibbonFamily.gibbonFamilyID AND parent1Fam.contactPriority=1) LEFT JOIN gibbonPerson AS parent1 ON (parent1Fam.gibbonPersonID=parent1.gibbonPersonID AND parent1.status='Full') LEFT JOIN gibbonFamilyAdult AS parent2Fam ON (parent2Fam.gibbonFamilyID=gibbonFamily.gibbonFamilyID AND parent2Fam.contactPriority=2) LEFT JOIN gibbonPerson AS parent2 ON (parent2Fam.gibbonPersonID=parent2.gibbonPersonID AND parent2.status='Full') WHERE gibbonStudentEnrolment.gibbonSchoolYearID=(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') AND student.status='Full' AND NOT (parent2.surname IS NULL AND parent2Fam.contactPriority IS NOT NULL) AND NOT (parent1.surname IS NULL AND parent1Fam.contactPriority IS NOT NULL);

### Sibling List In Current Year

    SELECT gibbonFamily.gibbonFamilyID AS familyKey, student.surname AS studentSurname, student.preferredName AS studentpreferredName, gibbonFamily.name as family, homeAddress, homeAddressDistrict, homeAddressCountry,gibbonRollGroup.name as rollGroup, ((SELECT COUNT(gibbonFamilyID) FROM gibbonFamilyChild JOIN gibbonPerson ON (gibbonFamilyChild.gibbonPersonID=gibbonPerson.gibbonPersonID) WHERE gibbonFamilyChild.gibbonFamilyID=familyKey AND status='Full' GROUP BY gibbonFamilyID)-1) AS siblings FROM gibbonPerson AS student JOIN gibbonStudentEnrolment ON (student.gibbonPersonID=gibbonStudentEnrolment.gibbonPersonID) JOIN gibbonRollGroup ON (gibbonRollGroup.gibbonRollGroupID=gibbonStudentEnrolment.gibbonRollGroupID) LEFT JOIN gibbonFamilyChild ON (gibbonFamilyChild.gibbonPersonID=student.gibbonPersonID) LEFT JOIN gibbonFamily ON (gibbonFamilyChild.gibbonFamilyID=gibbonFamily.gibbonFamilyID) WHERE gibbonStudentEnrolment.gibbonSchoolYearID=(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') AND student.status='Full' HAVING siblings>0 ORDER BY family, rollGroup DESC;

### Students With No Family

    SELECT student.surname AS studentSurname, student.preferredName AS studentpreferredName, student.email AS studentEmail, student.phone1 AS studentPhone1, student.phone2 AS studentPhone2 FROM gibbonPerson AS student JOIN gibbonStudentEnrolment ON (student.gibbonPersonID=gibbonStudentEnrolment.gibbonPersonID) JOIN gibbonRollGroup ON (gibbonRollGroup.gibbonRollGroupID=gibbonStudentEnrolment.gibbonRollGroupID) LEFT JOIN gibbonFamilyChild ON (gibbonFamilyChild.gibbonPersonID=student.gibbonPersonID) LEFT JOIN gibbonFamily ON (gibbonFamilyChild.gibbonFamilyID=gibbonFamily.gibbonFamilyID) WHERE gibbonStudentEnrolment.gibbonSchoolYearID=(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') AND student.status='Full' AND gibbonFamily.gibbonFamilyID IS NULL;

### Citizenship Frequency

    SELECT citizenship1, count(*) FROM gibbonPerson JOIN gibbonStudentEnrolment ON (gibbonStudentEnrolment.gibbonPersonID=gibbonPerson.gibbonPersonID) WHERE gibbonSchoolYearID=019 AND status='Full' GROUP BY citizenship1 ORDER BY citizenship1 LIMIT 0, 440

### Activity Choices in Current Year

    SELECT surname, preferredName, main.name AS Main, main.type AS mainType, gibbonActivityStudent.status AS mainStatus, backup.name AS BACKUP , backup.type AS backupType, transport, gibbonRollGroup.name AS roll FROM gibbonActivityStudent JOIN gibbonPerson ON ( gibbonActivityStudent.gibbonPersonID = gibbonPerson.gibbonPersonID ) JOIN gibbonStudentEnrolment ON ( gibbonStudentEnrolment.gibbonPersonID = gibbonPerson.gibbonPersonID ) JOIN gibbonRollGroup ON ( gibbonStudentEnrolment.gibbonRollGroupID = gibbonRollGroup.gibbonRollGroupID ) JOIN gibbonActivity AS main ON ( gibbonActivityStudent.gibbonActivityID = main.gibbonActivityID ) LEFT JOIN gibbonActivity AS BACKUP ON ( gibbonActivityStudent.gibbonActivityIDBackup = backup.gibbonActivityID ) WHERE gibbonStudentEnrolment.gibbonSchoolYearID = (SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE STATUS = 'Current' ) AND main.gibbonSchoolYearID = (SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE STATUS = 'Current' ) ORDER BY surname, preferredName

### All Staff

    SELECT surname, preferredName, email, type, gibbonStaff.jobTitle, dob, CONCAT(phone1Type,' ',phone1CountryCode,' ', phone1) AS phone1, CONCAT(phone2Type,' ',phone2CountryCode,' ', phone2) AS phone2, CONCAT(phone3Type,' ',phone3CountryCode,' ', phone3) AS phone3, CONCAT(phone4Type,' ',phone4CountryCode,' ', phone4) AS phone4, address1, address1District, address1Country, firstAidQualified, firstAidExpiry, vehicleRegistration FROM gibbonPerson JOIN gibbonStaff ON (gibbonStaff.gibbonPersonID=gibbonPerson.gibbonPersonID) WHERE status='Full' ORDER BY surname, preferredName

### Number of Years Students Have Been In School

    SELECT count(gibbonPerson.gibbonPersonID) AS years, surname, preferredName, username FROM gibbonPerson LEFT JOIN gibbonStudentEnrolment ON (gibbonStudentEnrolment.gibbonPersonID=gibbonPerson.gibbonPersonID) WHERE gibbonRoleIDPrimary=3 AND status='Full' GROUP BY gibbonPerson.gibbonPersonID ORDER BY years, surname, preferredName

### Hong Kong Education Bureau Survey

    SELECT surname, preferredName, gibbonYearGroup.name AS Year, gibbonRollGroup.name AS rollGroup, gender, dob, citizenship1, citizenship2, ethnicity, languageHome, languageFirst, homeAddressDistrict, residencyStatus FROM gibbonPerson JOIN gibbonStudentEnrolment ON ( gibbonStudentEnrolment.gibbonPersonID = gibbonPerson.gibbonPersonID) JOIN gibbonYearGroup ON (gibbonStudentEnrolment.gibbonYearGroupID=gibbonYearGroup.gibbonYearGroupID) JOIN gibbonRollGroup ON (gibbonStudentEnrolment.gibbonRollGroupID=gibbonRollGroup.gibbonRollGroupID) JOIN gibbonFamilyChild ON (gibbonFamilyChild.gibbonPersonID=gibbonPerson.gibbonPersonID) JOIN gibbonFamily ON (gibbonFamilyChild.gibbonFamilyID=gibbonFamily.gibbonFamilyID) WHERE gibbonPerson.status = 'Full' AND gibbonStudentEnrolment.gibbonSchoolYearID=(SELECT gibbonSchoolYearID FROM gibbonSchoolYear WHERE status='Current') ORDER BY rollGroup, surname, preferredName;
