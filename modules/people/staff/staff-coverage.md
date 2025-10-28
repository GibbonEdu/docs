# Staff Coverage and Substitute Settings

## Overview
Gibbon supports two distinct coverage modes, which determine how substitute teachers are managed and assigned when regular staff members are absent. These can be configured in **User Admin > Staff Settings** under the **Coverage Mode** option.

Coverage ensures that when a teacher is marked absent, another user can be assigned to take over their classes for the affected dates.

---

## Internal Coverage Mode
**Internal coverage** is used when teachers cover each other’s classes. In this mode, all active staff members can be assigned as substitutes, and their priority is determined through the **People > Staff > Manage Staff > Edit Staff** interface.

Each staff profile contains a **Coverage Priority** field and an **Exclude from Staff Coverage** toggle.

- **Coverage Priority:** A higher number indicates higher priority. Staff with priority `9` will appear first in the list when assigning internal coverage.  
- **Exclude from Staff Coverage:** If enabled, the staff member will not appear in internal substitute lists.  

This setting is ideal for schools where teachers share coverage responsibilities within the faculty.

---

## External Coverage Mode
**External coverage** allows schools to assign substitute teachers who are not part of the regular teaching staff. These users may include parents, alumni, or part-time substitute teachers who do not have staff status in Gibbon.

External substitutes are managed under **People > Staff > Manage Substitutes**.

In this interface, you can:
- Add existing user accounts as external substitutes  
- Set each substitute’s **Priority** (a higher number represents higher priority)  
- Remove or edit substitute availability  

Only users listed in this section will appear as options when assigning substitutes under external coverage mode.

---

## How Coverage Priority Works
The **coverage priority** value determines the order in which substitutes appear when assigning cover:

- **Internal coverage:** Uses the priority defined in *Manage Staff > Edit Staff*.  
- **External coverage:** Uses the priority defined in *Manage Substitutes*.  
- Each mode is independent — changing one does not affect the other.  

If a user is listed as both a staff member and a substitute, their priority in *Manage Staff* will only apply when the system is in internal coverage mode. Their priority in *Manage Substitutes* applies only when external coverage mode is active.

---

## Common Scenarios and Tips
- If your school uses only internal staff for coverage, leave coverage mode set to **Internal** and manage all settings from the **Manage Staff** page.  
- If you rely on non-staff substitutes, enable **External coverage mode** and maintain your substitute pool through **Manage Substitutes**.  
- Coverage lists are automatically ordered by priority (highest to lowest). Users excluded from staff coverage or without an assigned role will not appear.  

---

## Notes
Coverage settings and absence management are found in **People > Staff > Manage Staff Absences**.  
Substitute availability and priority do not automatically update when switching coverage modes — verify your settings after changes.

---

## See Also
- [Staff Absences](https://docs.gibbonedu.org/modules/people/staff/staff-absences/)