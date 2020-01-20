---
title: "Template Builder"
categories: ["reports"]
tags: []
weight: 40
contributors: ["skuipers"]
date: "2020-01-20T14:00:00+08:00"
---
The template builder provides a visual drag-and-drop interface for building reports. Templates control the PDF layout of each report generated, can be re-used across multiple reports.

### Managing Assets

A number of template components have been included by default. For a fresh install, visit the ___Manage Assets___ page and run the ___Scan Asset Directories___ action once to update your components. Be sure to scan for changes again any time you manually change the template files.

You can duplicate and edit one of the built-in template files, as a basis for customising your reports. Template files are written in HTML and Twig template-tags, with some YML front-matter at the top for important settings. Check out the [Twig Documentation](https://twig.symfony.com/doc/2.x/) for more info about templating.

### Creating a Template

To create a new template, visit the ___Template Builder___ click Add to setup the basic document details, such as the page size, layout, and margins. The context determines whether the template will be used for reporting cycles (eg: report cards), or whether it is generated from student enrolment data (eg: transcripts).

![Template Builder](/reports/Template Builder.png)

- **Preview**: Each preview uses a set of fake data, which enables you to rapidly generate sample reports without exposing any private student information. The HTML preview provides a quick approximation of a report. It is for sample purposes and may not be an exact match to the final PDF. The PDF preview is a more accurate representation of the report template. 

- **Add Sections**: Add a section by dragging it from the right-side into either the Header, Body, or Footer of the report. You can drag and re-arrange sections on the left-hand side. There is a tab for Core template components, and any templates you have customised will show up under the Additional tab. You can preview a template section before adding it to your report with the hover-over icon in the top-right of the component.

- **Edit Sections**: Each section you add to the template can have a number of settings. There are a number of __Flags__ which are used to control page-breaks and other properties of the generated document. There are also a number of Configuration options that depend on the type of template component. For example, the Signature Box component lets you specify a digital signature image file, image height, and title.

- **Headers & Footers**: These are special sections that can show up on the top and bottom of your report. You can have more than one header and footer, and specify specific pages for each. For example, you may have a header with a logo on the first page of the report, and a simple header with report info on all other pages.

### Developer Info

The Reports module is new as of v19. We will be expanding on the template functionality and providing more developer info in the upcoming versions. Currently, the template functionality uses the limited HTML capabilities of the TCPDF library for PHP, and not all HTML tags or CSS attributes are supported. The PDF library may change in the future to enable better CSS support.
