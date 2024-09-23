---
title: "Developer Workflow"
categories: ["support"]
tags: []
order: 1
contributors: ["skuipers"]
---
# Developer Workflow
## Getting Setup

1. Fork the [GibbonEdu/core](https://github.com/GibbonEdu/core) repository on GitHub and [clone a copy](https://help.github.com/articles/cloning-a-repository/) on your local machine.
2. If you're running [cutting edge code](/introduction/installation-options/cutting-edge-code), run the `composer install --no-dev` command to install all required libraries in your vendor folder.
4. Write some code and push your changes to your repo using the command line or your [favourite](https://www.sourcetreeapp.com/) Git GUI.
5. Create a [new pull request](https://github.com/GibbonEdu/core/pulls) and fill in the template provided to tell us about your change.
6. Be sure you're submitting your pull request to the development branch _(and not master)_.
7. Submissions should have a [changelog entry](https://github.com/GibbonEdu/core/blob/main/CHANGELOG.txt) noting what was added, changed or fixed.

If you're unsure where to begin with GitHub feel free to reach out on the [Support forum](https://ask.gibbonedu.org) or check out these great guides: [makeapullrequest.com](http://makeapullrequest.com/) and [opensource.guide](https://opensource.guide/how-to-contribute/)


## Release Schedule

We aim to release a new version every 6 months. Starting with v26, releases are every November and April. There is a string freeze one month before each release, where all interface strings fixed and shared with translators via POEditor.

Each version, stable or development, is denoted with a major semantic version (e.g., v16.0.0). Updates to a stable version are only released in the case of a security concern, and are tagged as a patch version (e.g., v16.0.1). 

## Branching Strategy

Gibbon uses a simple branching strategy. The current stable version is released and tagged on the `Master` branch. Development branches are setup after each release and increment to the next major version (e.g., v16.0.00 to v17.0.00). The dev branch does not currently track semantic versioning, and a built-in updater handles database changes for cutting edge code.

## Dependency Management

::: tip Composer Required
As of Gibbon v22.0.00, cutting edge code uses composer to manage the vendor folder. See the [cutting edge code](/introduction/installation-options/cutting-edge-code) page for installation and update instructions.
:::

Gibbon depends on a number of libraries written and managed by other developers, which are stored in the `vendor` folder. As of v22.0.00, developers will need to use PHP's dependency manager, [Composer](https://getcomposer.org/), to install and update libraries in their vendor folder. Stable releases include a full copy of the vendor folder and do not require composer.

## Development Philosophy

Our general philosophy is to make incremental, testable changes to an ongoing development branch. To keep things running smoothly—especially as we refactor the codebase—it helps to keep each new change small and self-contained.

There are a few schools running cutting edge code in production which helps to continuously test new changes before release. With this in mind, we aim to keep the development branch as stable as possible. 

## Pull Request & Code Review

Each pull request should contain only one new feature or improvement. Ideally, split any larger change sets into multiple PRs if they involve more than a handful of files. Long running branches with breaking changes are unlikely to be merged into the core.

Pull requests can be submitted to the [current development branch](https://docs.gibbonedu.org/developers/getting-started/gibbon-road-map/) and not to `Master` (which is our stable release). Please take some time to describe your changes, there’s a PR template on GitHub to get you started.

Our CI robots will [automatically built & test](/development/core-concepts/testing) any pull requests. Our code coverage isn’t extensive yet, so a green checkmark on GitHub isn’t necessarily a green light to merge: there’ll always be a human review too.

Each pull request is reviewed by at least one Gibbon Maintainer. Complex changes may require more than one set of eyes and some hearty discussion. Focus on code readability and bite-size commits and your PRs will be in good shape to merge.

## Browser Support

In general, Gibbon is designed for and tested using the recent stable versions of Chrome, Firefox, Edge, and Safari. Our aim is to support, at a minimum, the past three years of any specific major browser version. A best attempt is made to support IE versions 9 to 11, however IE is considered out of date and functionality cannot be guarunteed in the future. Alternate browsers, such as Opera and Brave, aren't specifically tested, however alternate browsers should work with Gibbon provided they support modern HTML, CSS and JavaScript standards.
