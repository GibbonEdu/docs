---
title: Guide to Open Source
order: 10
draft: false
---
# Guide to Open Source

If you’re considering an open source platform like Gibbon for your school, this is a great place to start.

Perhaps you’ve researched and looked at many different platforms, and in your search you’ve come across an **open source** solution. It may not have the fanciest sales pitch or the shiniest marketing page, but it has something the other platforms don’t have: it’s free and it’s open.

> The goal of this guide is to help schools make an informed decision when choosing between a paid proprietary platform and an open source platform.

What does open source really mean? What are the benefits and drawbacks? What happens next when school administrators decide to use an open source school platform?

On an organizational side, this guide includes sections on needs assessment, creating a narrative for change, and developing support strategies. On the technical side, it includes a starter guide for establishing a team of people who will manage the server and administration of an open source platform.

::: tip Who should read this?
This is a guide for anyone considering an open source platform for their school. Although it has been created for and by the [Gibbon](https://gibbonedu.org) community, it is aimed to be general enough to apply to many different open source contexts.
:::

# Discover

---

If you’re new to open source or unsure about how it works, this **Discover** section is for you. It aims to clarify why open source is free and how community-oriented development works.
## Ask Questions

The best place to start is with questions. Read here, search the internet, or ask a friend. Many of the myths surrounding open source can be dispelled with some good questions and answers.

### What is open source?

The folks at [opensource.com](https://opensource.com/resources/what-open-source) have a great definition:

> “The term open source refers to something people can modify and share because its design is publicly accessible.”

“The term originated in the context of software development to designate a specific approach to creating computer programs. Today, however, “open source” designates a broader set of values—what we call “[the open source way](https://opensource.com/open-source-way).” Open source projects, products, or initiatives embrace and celebrate principles of open exchange, collaborative participation, rapid prototyping, transparency, meritocracy, and community-oriented development” ([opensource.com](http://opensource.com)).

Read more about [what open source is](https://opensource.com/resources/what-open-source), or check out the following video from the folks at Mozilla, creators of the [Firefox](https://www.mozilla.org/en-US/firefox/) web browser:

<ClientOnly>
<iframe width="660" height="415" src="https://www.youtube.com/embed/7c0IrsDsNaw?si=7TxZlsYJrYVjgD1J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ClientOnly>

[What Is Open Source?](https://www.youtube.com/watch?v=7c0IrsDsNaw "What Is Open Source?")

### Is it really free?

Yes! Open source is free. But, it’s not _just_ free as in cost.

In the English language, free can mean both giving something away “for free” (gratis) and providing something “with little or no restriction” (libre) ([“Gratis versus libre”](https://en.wikipedia.org/wiki/Gratis_versus_libre)). Free and Open Source Software (FOSS) is both free from a cost perspective, as well as open to amendment and culturally open.

::: warning Note
It’s important to note that open source refers to the software itself. Many platforms like Gibbon are web-based applications that require a web server to run. <u>Servers unfortunately are not free</u>. Schools will need to use an in-house server or find a service online that offers web hosting. Luckily, Gibbon itself runs on open source software like PHP and MySQL, which makes it easier for schools to find affordable hosting solutions.
:::

Along with “for free” (gratis) and "freedom" (libre), a third way to think of open source is **free as in "a free puppy"**. Someone who adopts a puppy for free will still need to house and care for the puppy. In the same way, while Gibbon is free open source software, you'll still need to host it on a server and administrate it yourself.

### Is open source viable?

It’s not uncommon to perceive open source as lower quality or having a shorter longevity than proprietary software. However, this perception stems from one of open source’s greatest strengths: its diversity. Open source includes everything from hobbyist projects, made over a weekend, to [international foundations](https://www.linuxfoundation.org/) that maintain the backbone of the internet. Open source is more prevalent than many people realize. For example, open source software accounts for 86% of web servers worldwide, and open source software contributes over $1 trillion in savings for all technology consumers annually ([Open Source software statistics](https://wifitalents.com/statistic/open-source-software/)).

It’s important to remain critical in your approach to <u>any</u> software platform—proprietary or open source. It pays to do your research and look into the history of the platform you’ll be investing your time in. For some ideas, check out the [evaluation criteria](#evaluate-the-platform) in the section below.

> If an open source project only has a couple core developers, you might ask: “What happens if something happens to you?”

It’s a common question! Luckily, the answer lies in the open source model: the code is already freely available for anyone else to step in and keep going. That doesn’t ensure against the unforeseeable, but consider the alternative: when a proprietary platform goes under, it’s source code may be gone for good.

### How is it developed?

Generally, open source projects are created and maintained through a community-oriented development model. This can involve a couple people or even thousands of developers—often all around the world—working together on the same codebase. They often do so through collaborative tools that enable them to share and manage their code, such [GitHub](https://github.com) and the [Git](https://git-scm.com/) version control system.

You may wonder: “Doesn’t that mean anyone can change the code?” Yes and no. Collaborative development includes checks and balances. For example, Gibbon uses a process of [code review and testing](/development/getting-started/developer-workflow):

> Anyone can edit the code, but not anyone can introduce changes directly into the official version of Gibbon.

Schools can make changes to their own copy of the code, and if they want to, they can share those changes with us for review. Our developers will read and test the code, and if the changes are good enough they’ll make it into Gibbon. But no one, other than a couple core developers, can make direct changes to the source code.

For more info, check out the excellent video by The Linux Foundation about how collaborative development works in the world’s largest open source project:

<ClientOnly>
<iframe width="660" height="415" src="https://www.youtube.com/embed/yVpbFMhOAwE?si=CFoDfLBxYxG2zSmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ClientOnly>

[How Linux is Built](https://www.youtube.com/watch?v=yVpbFMhOAwE "How Linux is Built")


## Evaluate the Platform

Not all open source projects are created or supported equally. When you’re looking at a platform for the first time, be sure to do some digging and see what you can learn about it.

- **Is it alive?**  
  An actively maintained webpage is a good first sign. Also check out when the latest version was released. Was it recent? For projects like Gibbon, you can also see the development activity on their [GitHub repository](https://github.com/GibbonEdu/core).

- **Does it have good documentation?**  
  [Documentation](https://docs.gibbonedu.org/) is likely to be your first stop for help getting up and running with a new system. Good documentation is clear and searchable, and covers a wide range of the platforms functionality.

- **Is there an active and healthy community?**  
  Beyond documentation, the greatest source of support for open source is [its community](https://ask.gibbonedu.org/). An active community helps each other solve problems and improve the platform. See the [Clay Shirky](https://www.youtube.com/watch?v=Xe1TZaElTAs) video at the end of this guide for a great perspective on open source community.

- **Can you learn it?**  
  Installing a new platform isn’t enough. You and your colleagues will have to learn how it works. Does the platform look user friendly? Are you able to demo the software before you use it? Do you have the time and resources to learn a new platform?

These evaluation criteria are based on Urko Masse’s excellent post on [Open Source in Education](http://urkomasse.blogspot.com/p/foss-in-education.html). Be sure to check it out for more great information and resources.

# Plan

---

::: tip This Section
You may be planning to use an open source platform, or planning to _consider_ using one. In both cases, this **Plan** section can help answer the most common questions you might have.
:::
## Assess your Needs

When adopting any new system, it pays to take time to assess your needs. A new school platform isn’t just a technological change, it will likely affect the daily workflows of your staff and students, and impact the flow of information and communication in your school.

It can help to take a systems theory approach to visualize your organization as a set of interconnected gears. Before turning the gear to implement the software itself, there are other gears and connections to consider. 
- Is your school ready for this change? 
- Do your staff have the time and resources to see it through? 
- Who are your stakeholders and are they onboard? 

These considerations are helpful regardless of open source or proprietary platforms, however the answers of who does what and who is affected may be different.

The following infographic offers questions that can help get the gears turning when introducing a new technology or software platform:

[![Assignment1-Visual](https://ask.gibbonedu.org/uploads/default/optimized/1X/94dc5f9b5684d05f10143706a9ba4ae851877a30_2_690x487.png)](https://ask.gibbonedu.org/uploads/default/original/1X/94dc5f9b5684d05f10143706a9ba4ae851877a30.png "Assignment1-Visual")

### Is open source the right choice?

It is perfectly valid to consider whether open source is even the right choice for your school. It’s possible that it’s not. Proprietary platforms generally offer a whole suite of hosting and support as a through-train, starting with the first marketing call and all the way to training and launch-day. 

::: warning NOTE
If you’re looking for a turn-key solution where everything is managed and handled for your school, then its likely that open source may not be for you. That's okay.
:::

Open source platforms can offer a lot of the software capabilities as proprietary platforms, but on the organizational side, <u>it’s up to you to setup a plan for implementation</u> and then connect the dots. The freedom that open source offers also means that it doesn’t come with the same scaffolding and structure that paid platforms do. But, that doesn’t mean there isn’t the same capacity for structure: for more information about the support-side of things, keep reading!

### Do I need a programmer on staff?

It’s true, open source is made by programmers, but that doesn’t mean you have to be a programmer to use it. Just in the same way, you don’t have to be a mechanic to own a car, but it certainly doesn’t hurt if you’re familiar looking under the hood and making your own tune ups.

<u>It all comes down to capacity and expectations</u>. If you’re willing to accept that the platform will hopefully meet lots of your needs, but doesn’t meet some of them exactly, then you don’t need a programmer to use open source. This is similar to closed source: you’ll need to work around what the software can and cannot do out of the box.

However, if you really want the platform to fit like a glove and do exactly what you need, then you may need a programmer. This may be someone in your organization who already has coding skills and is willing to learn a new system, or someone that you hire on a contract basis. Open source simply offers the potential to adapt and change the platform to suit your school’s needs. What you change, and how extensively you invest in those changes, is up to you.

## Make the Pitch

Perhaps you’ve discovered an open source platform but you’re not the ultimate decision maker in your school. Chances are, you’ll have to pitch the idea to someone else. Here are some ideas that may get you started.

### What is your value proposition?

If you’re aiming to pitch an idea or change, start with: “Why?” Why is this platform a good choice? Why this platform over other options?

Open source offers a number of different value propositions. Understanding these may help you to communicate the value of open source to other stakeholders, such as a board of governors.

Three primary considerations are:

1. **Affordable**  
   Open source software is free, which makes it an attractive and affordable option for schools. There are other costs to consider, such as hosting, but without a recurring licensing fee the overall costs of adopting an open source platform are lower than paid proprietary platforms.

2. **Collaborative**  
   A platform like Gibbon is made by a community of not only developers but also educators. The software was designed by teachers to meet the everyday needs of their schools.

3. **Extensible**  
   The option to extend open source is a boon for schools. Many schools have different workflows and different needs, and an out-of-the-box solution may not meet those needs. For Gibbon, this extensibility can take the form of one of the community-made modules available on the [Extend](https://gibbonedu.org/extend/) page, or the option to program new modules and features into the codebase itself.

Exploring these value propositions can help you define the exact value that an open source platform may have for your school. Each will likely have a different weight and meaning for different schools.

## Create a Vision

There are many different theories of [change management](https://malat-webspace.royalroads.ca/rru0128/leading-change/), but what many of them have in common is the need for a shared vision. Not just deciding what will change, but also why will it change. If you can create and communicate a vision for why your school is adopting a new open source platform, this can help reduce the friction that comes with any change.

### Who cares? _(in a good way)_

Your stakeholders can make or break a project. Taking time to find your change agents—the people who see your vision and want to act on it—can make the difference when launching a new platform.

Finding your change agents is often a matter of how you create and share your vision. On the surface, introducing a new piece of technology might seem like a simple IT decision. However, chances are it’ll affect many different people in many different capacities.

::: tip The Value Proposition
Your stakeholders may not know or care what open source means. That’s OK. However, if you can, taking the time to communicate what open source can offer them helps create a shared vision for change.
:::

> Many educators see the value in collaboration, and may be keen to know that the system they’re using is made by a community of fellow educators.

Is open source part of your vision for change? If not, its OK. You may have many other reasons for considering a new platform than whether or not it’s open source. On the other hand, if you haven’t considered what your vision for change is yet, then it’s worth looking into what open source means for your school.

One question to ask is:

> Does the model that produced the software that you want to use match the ideology of your school?

Open source is more than just a model for software licensing. It also represents a philosophy of collaboration, which the folks at [opensource.com](http://opensource.com) call “[the open source way](https://opensource.com/open-source-way).” Does this model align with your school values? If so, this idea can become part of your vision for change. Ross Parker, the creator of Gibbon, shared the following thoughts:

> “If you would rather educators in general and students and parents be given universal access to excellent software that genuinely meets their needs that is build from within the system that is community driven and is not for profit, then maybe open source is of interest to you.”

Choosing to use an open source platform doesn’t mean you too will have to become an open source advocate. You’re always welcome to use the software and not become part of it’s community. However, it’s worth being aware of not only the technical functionality of the software you use, but also the values it was created with.

It’s worth letting your stakeholders know why you’re using an open source platform. You can communicate these values to your school community through your vision for change, and for staff and parents, understanding this message need not be dependent on understanding open source itself.

## Plan a Timeline

Getting up and running with a new platform—whether its proprietary or open source—takes time. Planning your timeline and giving yourself lots of room to learn and configure your system will help set your school up for success.

Consider the following phases when you’re planning a timeline:

- **Evaluate**  
  Test out the platform in a demo install and see what its capable of.
- **Install**  
  Setup a web server and install the platform.
- **Configure**  
  Explore the settings and options to configure the system for your school’s needs.
- **Import**  
  If you have existing data, determine what format it is in and who will import or migrate it.
- **Train**  
  Key staff members will need to know how the system works before launching.
- **Launch**  
  Pick a date. Rollout can also be done in phases for different roles in the system.
- **Support**  
  Any users of a new system will need help. Will you create written support material, offer training sessions, or make video tutorials for your users?

::: warning What is a good timeline?
For [Gibbon](https://gibbonedu.org/), the average timeline from evaluation to launch is 3 to 5 months. Some schools move quicker and some schools may take the full school year to get ready for rollout. The exact pace will depend on your schools needs and resources.
:::

Are your IT staff able to setup a new web server? How available are your staff to learn a new system? Who will be the primary users of the system once it’s launched, and what kind of support will they need?

Are you migrating from an existing school platform or starting up for the first time? If you have existing data, you may need to plan more time to convert and import that data into the new system. Depending on the platforms, there are a variety of methods to move data over, from csv files to manual entry, but each of these methods will take time. As you’re planning a timeline, consider if there will be an overlap of using both systems.

# Support

::: tip This Section
Initially, open source can sound like a DIY project: do it yourself, you’re on your own, sink or swim. Luckily, that’s not the case. This **Support** section offers info about how open source support works and how to set your school up for success.
:::

## Explore your Options

Open source support may look a bit different than proprietary support, but it’s often still there, in the form of an open source community. One of the first steps when evaluating a platform should be to take some time to find where the community lives. This may be on a forum, a newsgroup, a platform like GitHub, or some other place on the internet. Do some checking, and if you can’t find the community, be sure to ask the project maintainers, chances are it’s there.

### Community Support

For Gibbon, support is available through [our community forums](http://ask.gibbonedu.org/). Here, you can ask questions as well as help answer questions, and by doing so you’re also building a knowledge base that others can search and find answers on. Gibbon also has [documentation and user guides](http://docs.gibbonedu.org/), which offers more step-by-step help for the most common areas of the system.

In the video below, Clay Shirky offers a great perspective on the value and effectiveness of community support in open source:
<ClientOnly>
<iframe width="660" height="415" src="https://www.youtube.com/embed/Xe1TZaElTAs?si=uJUrGbWJpzIYTNcH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</ClientOnly>

[Clay Shirky on Love, Internet Style](https://www.youtube.com/watch?v=Xe1TZaElTAs "Clay Shirky on Love, Internet Style")

### Paid Support

For schools that are used to a telephone hotline to support their paid platforms, forums and documentation may not seem like enough. If a school needs extra help, or runs into a situation where they need to talk to a human, they may worry about not having a support contract. This is normal: we need to know that there’s someone we can turn to in a pinch. Having support in place is a crucial for school administrators to know that the system is going to be reliable.

Be sure to explore if there are members of the community who can offer additional support. Not all open source platforms may offer 1:1 support, but it’s worth exploring what’s out there. These would be paid services, because they’re replying on someone else’s time and expertise, but they may be what your school need. For example, members of the Gibbon team provide Expert Support through [gibbonedu.com](http://gibbonedu.com). This is offered to schools who need additional email or video support to help get a system setup or provide additional training. Expert support is offered ad hoc as well as through a monthly support contract.

Paid support is not required for an open source platform, but it can provide peace of mind to school administrators. Another option, if your school has a technically-minded individual on staff, is for them to become familiar with the source code of the platform and make their own fixes and changes. They could even contribute these changes back to the community. Gibbon has created [a contributor guide](/development/contributing) to help explain how to become part of the developer community.

## Map your Responsibilities

The most important step you can take to support your open source platform is to plan ahead. Don’t wait until you run into an issue to start looking into your support options.

One of the best ways to do this is to map out the areas of the platform that you’re using, and for each area, figure out who is responsible on a day-to-day basis, and who you can turn to if you need extra support. Then make this map simple and easy to read and share it with your staff. This helps the users of your system know if they have an attendance issue or lesson planner question, who they can turn to.

Every school has regular processes that happen throughout the year. This may be admissions season, teacher conferences, billing periods, and rollover from one year to the next. Mapping out each of these recurring tasks and knowing who’s in charge can help provide a solid support system for your users, and make sure nothing gets forgotten about.

::: warning Example Checklist
Here’s an example of a school year startup spreadsheet created for Gibbon. Each task has a checkbox and reminders of how to complete it, as well as columns to record when and who is going to complete it. Feel free to make a copy and edit this template for your school.

[Gibbon: Example Checklist for School Year Startup](https://docs.google.com/spreadsheets/d/1Zq3QOvYqFIjxw26R2B1G2CEJ0Vrj5gmbXEdioCJ-XZU/edit?usp=drivesdk)
:::

---

**References**

Gratis versus libre. (n.d.). In Wikipedia. Retrieved July 20, 2020, from [https://en.wikipedia.org/wiki/Gratis_versus_libre](https://en.wikipedia.org/wiki/Gratis_versus_libre)

Kuipers, S. (2020). Leading change in digital learning environments [Infographic]. Retrieved from [https://malat-webspace.royalroads.ca/rru0128/wp-content/uploads/sites/158/2020/02/Assignment1-Visual.png](https://malat-webspace.royalroads.ca/rru0128/wp-content/uploads/sites/158/2020/02/Assignment1-Visual.png)

Masse, U. (2017). Open source in education. [Blog post]. Retrieved July 20, 2020 from [http://urkomasse.blogspot.com/p/foss-in-education.html](http://urkomasse.blogspot.com/p/foss-in-education.html)

Mozilla. (2017). What is open source? [Video]. Retrieved from [https://www.youtube.com/watch?v=7c0IrsDsNaw](https://www.youtube.com/watch?v=7c0IrsDsNaw)

[OpenSource.com](http://OpenSource.com). (n.d.). What is open source? Retrieved from [https://opensource.com/resources/what-open-source](https://opensource.com/resources/what-open-source)

Parker, R. (2014). In search of a flexible, open education management system. Retrieved from [https://opensource.com/education/14/2/gibbon-project-story](http://opensource.com/education/14/2/gibbon-project-story)

Shirky, C. (2007). Love, Internet Style [Video]. Retrieved from [https://www.youtube.com/watch?v=Xe1TZaElTAs](https://www.youtube.com/watch?v=Xe1TZaElTAs)

The Linux Foundation. (2013). How is Linux made? [Video]. Retrieved from [https://www.youtube.com/watch?v=yVpbFMhOAwE](https://www.youtube.com/watch?v=yVpbFMhOAwE)

Wired. (2013). In a world without open source. [Blog post]. Retrieved from [https://www.wired.com/insights/2013/07/in-a-world-without-open-source/](https://www.wired.com/insights/2013/07/in-a-world-without-open-source/)

---

**Attribution**

Created by Sandra Kuipers, July 2020, for the open source community.

This guide is provided under a Creative Commons Attribution Non Commercial Share Alike 4.0 International License [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1). Unless otherwise noted, all content may be used and shared under the terms of this license.
