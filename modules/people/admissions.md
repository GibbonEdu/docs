# Admissions

## Action: Student Enrolment

**Path:** Admissions > Student Enrolment

**Purpose:**
Used to view, add, and manage students currently enrolled in the school. This section allows administrators to review enrolment lists by year group, form group, and status, and to manually add or edit enrolment details.

**Main Features:**

1. **Search and Filter**
   - Search by preferred name, surname, or username.
   - Filter by status or date (e.g., *Status: Full*, *Status: Left*, *After End Date*).

2. **Enrolment Table**
   - Displays all current enrolments with columns for student name, year group, and form group.
   - *Edit:* Opens the enrolment editor, allowing administrators to modify the student's year or form group and toggle auto-enrol.
   - *Delete:* Removes the enrolment record from the database. This does not delete the student's user record — only their current placement.

3. **+ Add Enrolment**
   - Opens the *Add Student Enrolment* screen where an existing user can be assigned to a form group.
   - Required fields: **Student**, **Year Group**, **Form Group**.
   - Optional fields: **Roll Order"**, **Auto-Enrol**".

::: tip Note
“Form Group” refers to the student’s homeroom or roll group. Adding an enrolment links a student’s record to their assigned year and form group for attendance and academic purposes.
:::

## Action: Withdraw Student

**Path:** Admissions > Withdraw Student

**Purpose:**
Used to formally mark a student as withdrawn from the school. This ensures that enrolment data is ended properly, historical records remain intact, and relevant staff are notified automatically.

**Main Sections:**

1. **Basic Information**
   - **Student:** Select from enrolled students.
   - **Status:** Typically *Left*.
   - **End Date:** Last day of attendance.
   - **Departure Reason:** Short explanation (e.g., *Transferred*, *Graduated*).
   - **Next School:** Optional record of the next institution.

2. **Notes**
   - **Withdraw Note:** Internal comments or details added to the student profile under *Student Notes*.

3. **Notifications**
   - Automatic notifications can be sent to key staff (e.g., Admissions Administrator, Head of Years, Form Tutors).
   - Optionally notify individual users such as Finance or IT.

**Result:**
- Updates the `gibbonStudentEnrolment` record with an end date.
- Changes student status to *Left*.
- Sends notifications to relevant roles.

## Action: Admissions Accounts

**Path:** Admissions > Admissions Accounts

**Purpose:**
Displays and manages all accounts created during the admissions process. These accounts are distinct from standard user accounts and are used to submit and track applications.

**Main Features:**

1. **Search**
   - Filter by person, family, or email.

2. **Admissions Accounts Table**
   - **Person:** Parent or guardian name.
   - **Family:** Associated family group.
   - **Email:** Login identifier.
   - **Last Active:** Last login date.
   - **Applications:** Number of submitted applications.
   - **Actions:** Edit or delete an account.

**Account Creation:**
- Automatically generated when a parent submits a *public* application form.
- When adding a new application (via *Manage Applications*), users can link it to:
  - An **existing user** (e.g., current parent).
  - An **existing admissions account**.
  - A **blank application** (manual entry).

**Notes:**
Admissions accounts ensure prospective families are managed separately from active users. Accepted applications convert admissions accounts into full Gibbon user records.

## Action: Manage Applications

**Path:** Admissions > Manage Applications

**Purpose:**
Central hub for managing student applications. Displays all active and pending submissions for the selected academic year.

**Main Features:**

1. **Search**
   - Filter by Application ID, Student Name, or Year Group.
   - Option to view complete or incomplete forms.

2. **Applications Table**
   - **ID:** Application identifier.
   - **Student:** Applicant name and submission date.
   - **Entry Year / Birth Year:** Used for placement decisions.
   - **Parents:** Linked guardian account.
   - **Status / Milestones:** Workflow progress (e.g., *Pending*, *Interview Scheduled*, *Accepted*).
   - **Priority:** Numeric ranking field.
   - **Actions:**
     - **Edit:** Modify form data.
     - **Accept:** Converts to student record.
     - **Reject:** Marks as declined.
     - **Delete:** Removes permanently.

3. **Form Builder Integration**
   - Quick access to *System Admin > Form Builder* for updating application structure.

4. **+ Add New Application**
   - Create new applications manually.
   - Link to existing user, admissions account, or start blank.

**After Acceptance:**
- Applicant data transfers to *Student Enrolment*.
- User and family records auto-created if needed.
- Notifications trigger for Admissions staff.

::: tip Note
This is the operational heart of Gibbon’s admissions workflow, connecting front-end forms to the core database.
:::

## Action: Left Students

**Path:** Admissions > Left Students

**Purpose:**
Lists students who have withdrawn or graduated. Enables administrators to access historical enrolment data and manage re-admissions if needed.

**Main Features:**
- Filter by academic year or reason for withdrawal.
- View or export data for offboarding and archival purposes.

## Action: New Students

**Path:** Admissions > New Students

**Purpose:**
Displays students newly accepted or transferred into the school for the current academic year.

**Main Features:**
- Filter by form group or enrolment date.
- Useful for tracking induction and orientation processes.

## Action: Student Enrolment Trends

**Path:** Admissions > Student Enrolment Trends

**Purpose:**
Provides a visual overview of enrolment changes over time, showing trends in admissions, withdrawals, and overall student population.

**Main Features:**
- Year-over-year comparison graphs.
- Supports data-driven planning for class sizes and staffing.

# Summary

The **Admissions module** in Gibbon provides a complete, internal workflow for student lifecycle management—from application to enrolment to withdrawal. When combined with the **Form Builder**, it replaces external application systems entirely while keeping all data within Gibbon’s unified database.