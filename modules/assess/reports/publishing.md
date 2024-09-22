---
title: "Publishing"
categories: ["reports"]
tags: []
order: 30
contributors: ["skuipers"]
date: "2020-01-20T14:00:00+08:00"
---
# Publishing

Data from within Gibbon can be published to PDF by setting up a report and selecting an appropriate template. The most common type of report is for publishing Reporting Cycles, but the flexibility of the reports system enables it to be used for other types of reports, such as transcript and progress reports.

## Setting up Reports

Each report in Manage Reports represents a single type of PDF document that can be generated. They commonly relate 1-to-1 to a reporting cycle, but they can also be used for a standalone document such as a transcript.

- **Template**: The template you select determines what the PDF looks like. Templates are created and edited in the Template Builder.

- **Archive**: Each report will save its PDF files into an archive. The archive determines who can access the report and where it is stored on the server. 

- **Go Live Date**: Both a date and time can be specified for a report. It will not be available to users through the archive before this time, unless they have the `View Draft Reports` permission.

## Generating Reports

You can generate two types of report PDFs: a combined batch-report of all students per Year Group, as well as a single individual report per Student.
  ![Generate Reports](/img/reports/Generate%20Reports.png)

- **Batch Generation**: Depending on the complexity of the report, the PDF generation may take several minutes. The system will display a progress indicator for reports that are running, and will email the person who started the process once it it complete. You can cancel a batch-report while it is generating. When you batch-generate a report, it will also generate the individual reports per-student, to ensure these always match. 

- **Single Report Generation**: You can run a single report per student, as well as use the bulk-action checkboxes to select a number of students at a time. This is handy if the data for one student has changed, but you don't want to re-run the whole batch.

- **Draft Reports**: By default, reports will be generated as a draft copy. This add a message and timestamp to the top of the report, disables any digital signatures, and ensures it cannot be viewed by parents or students. Drafts are labeled as such in all screens, and users must have the `View Draft Reports` permission to view draft reports in the archive.

- **Final Reports**: When a report is generated as Final, it becomes available to view in the archive. For a report to be visible to parents and students, it must be a Final report, have passed its Go Live date, and the user must have been granted access the report's archive through Manage Archives.

- **Background Processing**: Gibbon v19 uses background processing to generate report PDFs.  If your system does not support background processing, or you wish to disable it, you can find a system-wide Background Processing setting in ___System Admin > System Settings___.

## Teacher and Admin Access

Teachers and other staff can access the archive through View by Report as well as View by Student. 
  ![Archive by Student](/img/reports/Archive%20by%20Student.png)

- **View by Report**: This shows a combined view of available reports, further subdivided by year group and form group. The ___Read___ progress indicator shows the overall number of student reports that have been accessed by a parent in their family. Users with permission van view and download batch PDF files through this page.

- **View by Student**: This shows individual reports per student, with options to search and filter the archive page. Reports that have been accessed by a member of the family are highlighted with a Read indicator.

- **Draft Reports**: By default, users will only be able to view reports marked as Final. With the `View Draft Reports` permission, they can see and download draft reports. This is useful for proofing the reports before they are shared with parents and students.

- **Past Reports**: Users will only be able to access reports from the current school year, unless they have the `View Past Reports` 
permission.

- **Archive Access**: Access to an archive is toggled per role category through the Manage Archive page. Is is possible to have an archive that is viewable by staff only, and not to parents or students.

## Parent and Student Access

Parents and student access to reports is optional, and can be controlled per report as well as per archive. There are a number of factors which control which reports are visible to them:

- **User Permissions**: Parents and students must have access to `View Reports_myChildren` or `View Reports_my`, respectively. This can be set in User Admin > Manage Permissions. Without this access they cannot view any reports.
- **Go Live Date**: Only reports which have passed the Go Live date and time will be visible to parents and students.
- **Archive Access**: Access to an archive is toggled per role category through the Manage Archive page.
- **Final Reports**: A report must be marked Final before it is visible to parents and students.
- **Past Reports**: Reports which do not belong to the current school year will only be visible if users have the `View Past Reports` permission.

## Managing Archives

Archives control where on your server the report files are stored. You may chose to store different types of reports in different archives, in order to control who has access to them.

- **Path**: The path you supply must be relative to the Gibbon root folder, which is the same as your Base Path defined in ___System Admin > System Settings___. You can use a `/./` at the beginning of your path to save files in a directory *above* your root folder.

- **Visibility**: Each archive can toggle visibility by role category. This gives administrators a definitive control over who can see and download reports.

- **Importing Reports**: An importer has been included to help migrate archived PDFs from the Reporting module by Andy Statham. This is an experimental feature, and may not work with older versions of the Reporting module. Visit the Import Reports page and select an archive to import into. The page will indicate if it detects reports that can be imported. Reporting data and criteria will ___NOT___ be transferred: only the archived PDFs will be imported. Once successfully imported, the Reporting PDFs should be accessible through the Archive > View by Student page.

::: danger
**Security Note**: Report files are generated with an obfuscated filename to help ensure they remain private, however the default  archive path is in the `/uploads` folder, which is web-accessible. To ensure your reports are secure and private, it is **___highly recommended___** to set your archive path to a directory outside your web root. This can often be done by using one or more `/./` in your archive path, and setting up a new directory that is only server-side accessible.
:::
