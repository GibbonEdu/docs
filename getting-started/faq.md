---
title: Frequently Asked Questions
order: 200
draft: false
---
# Frequently Asked Questions

## How much does Gibbon cost?

Gibbon is free. As open source software, it is both available "for free" (gratis) and available "with freedom" to modify the code (libre) ([“Gratis versus libre”](https://en.wikipedia.org/wiki/Gratis_versus_libre)). 

To help sustain the Gibbon ecosystem, there are some paid services available for support and development through [GibbonEdu.com](https://gibbonedu.com). However, Gibbon does not use the [freemium](https://en.wikipedia.org/wiki/Freemium) or [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) model, and all the core features of Gibbon are—**and will always remain**—free.

Web servers, unfortunately, are not free. Schools should be aware that running and maintaining a web server does cost money, so it is recommended to [budget for these costs](/introduction/guide-to-open-source#is-it-really-free).

## What license does Gibbon use?

Gibbon is a free and open source project released under the [GNU GPL license](https://www.gnu.org/licenses/gpl-3.0.html).
## Who maintains Gibbon?

Gibbon is an independent project, maintained by a core development team and supported by a community of volunteer contributors. It was created by Ross Parker in 2010 to meet the needs of International College Hong Kong (ICHK) in Hong Kong. 

Since then, through its open-source roots, Gibbon has grown into a global project. In 2018, Sandra Kuipers stepped into the role of Gibbon's maintainer. Sandra currently leads the development of Gibbon, setting the short-term goals and long-range architecture plans.

In 2023 the [Gibbon Foundation](/introduction/welcome#gibbon-foundation) was established as a non-profit entity incorporated in Hong Kong to further support Gibbon a global project, and the copyright of the Gibbon codebase was transferred from Ross Parker to the Gibbon Foundation.
## Is Gibbon reliable?

One of the core development principles of Gibbon is to maintain stable, reliable software. After all, the school where Gibbon is developed {{ new Date().getFullYear() - 2010 }} years ago still uses it daily for all aspects of school management. While some software companies "[move fast and break things](https://en.wikipedia.org/wiki/Move_fast_and_break_things)," the Gibbon project "moves deliberately and sustains things." Schools need software that can be relied upon from day-to-day, and this philosophy is at the heart of our [developer workflow](development/getting-started/developer-workflow.md) and [release cycle](development/gibbon-road-map.md).

## How many schools use Gibbon?

As of 2024, there have been more than 18,000 installations of Gibbon, with thousands of schools using Gibbon world-wide. We cannot know the exact number of schools using it, since the software is freely available to download, but we have a strong indication from the opt-in installer statistics and the activity on community forums.

## How can I translate Gibbon into my language?

Thanks to our amazing volunteers, Gibbon is available in 21 different languages, with many more in translation. If you would like to help translate Gibbon, please email [support@gibbonedu.org](mailto:support@gibbonedu.org). Your help would be most appreciated!

Gibbon uses the POEditor online translation platform to manage and collect translations from community volunteers. When you join the translation team, we'll send you an invite to create an account. Newly translated terms are published with [each Gibbon release](development/gibbon-road-map.md).

## How do I add a new feature to Gibbon?

Upcoming features can be found on our [road map](/development/gibbon-road-map), and you are welcome to [request new features](https://ask.gibbonedu.org/c/feature-requests/12) on our forums. However, please note that development capacity is generally focused towards features that are sustainable and provide the greatest value to the widest range of schools. Our small development team also focuses much of our capacity on refactoring and maintaining the codebase.

Schools who have or hire a developer can [create their own modules](/development/getting-started/module-development) to meet their needs. This is the most flexible and sustainable way to add new functionality. Developers are also welcome to [program new features](development/getting-started/developer-workflow.md) for the core, but are recommended to get in touch with our team to ensure their changes fit within the scope and direction of the core.

## Does Gibbon have an API?

As of 2024, Gibbon does not currently have a general-purpose API. The reasons for this are many and varied, partially due to ongoing refactoring efforts, and the limited capacity of the core development team. We do have plans to implement an API in the future, but aim to only do so once certain infrastructure is in place to ensure that the API security layer is rock-solid, since any API in Gibbon would entail access to private school data.

## Does Gibbon support multi-installs or school districts?

A multi-tenant option is one of the future goals of Gibbon, to enable installing and managing multiple schools on a single server. However, currently to make this work, there are a number of architectural changes and refactoring initiatives that need to be completed first. For this reason, a multi-install or school-district version of Gibbon remains on the [long-term road map](/development/gibbon-road-map).
## Can I use Gibbon for higher education?

Gibbon was designed for K to 12 schools, so there are certain assumptions that the system makes about admissions and enrolment (eg: that the student is attached to a family). However, this does not prevent using Gibbon for different needs. But, it's important to keep in mind that the needs and demands of a university will be very different than a K-12 school, especially depending on the size of the school. For this reason, if you're looking at Gibbon for alternate purposes, we encourage you to [download and install](/introduction/installing-gibbon) the software locally to test its functionalities to see if they suit your needs.

## Can I use Gibbon for training centres or other schools?

Like its namesake animal, Gibbon has been designed to be highly flexible. So, while it was designed with traditional schools in mind, we have seen community members use it successfully for home schools, music schools, and private tutoring centres. It all depends on the needs of the school and how these map to the available features in Gibbon. Be sure to download and test it out, and [search on the forums](https://ask.gibbonedu.org) to see how other schools have adapted Gibbon.