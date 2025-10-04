---
title: "Core Development"
categories: ["support", "customization"]
tags: []
order: 40
contributors: ["rossdotparker"]
---
# Core Development

The Gibbon core is developed and maintained by the Gibbon team, who are a small team of developers working in an international school in Hong Kong. We run a [regular release schedule](/development/getting-started/developer-workflow#release-schedule) for new versions of the core, and work to fix bugs and add new features with each version. 

The code for the Gibbon core can be found in the [GibbonEdu/core](https://github.com/GibbonEdu/core) repository on GitHub, which includes [stable releases](https://github.com/GibbonEdu/core/releases) as well as the the upcoming version in the [development branch](/development/getting-started/developer-workflow#branching-strategy).

## Modifying the Core

Since Gibbon is open source, you are welcome to modify the code in the core. However, keep in mind that your changes will be overwritten the next time you update Gibbon. In order to update to the next version and add new features, the files from the new version need to be copied into your installation and will replace the existing files.

::: tip Module Development
Whenever possible, it's best to try and create your changes as a [new module](/development/getting-started/module-development) in Gibbon, rather than modifying the core.
:::

Understandably, there are times when this is not possible and you find yourself making changes directly to the core. There are a few ways you can keep track of changes you make:

- For small tweaks and changes, you could make note of which files and lines you've changed in a document, to help remind you which changes to make again after an update. You will need to manually apply the code changes after each update to Gibbon.
- For larger sets of changes, the most reliable way to keep the changes you've made is to fork the [GibbonEdu/core](https://github.com/GibbonEdu/core) repository, and add your changes to a new branch on your fork.
  - With this approach, each time there is an update in Gibbon, you can pull the latest version into your fork, and then merge your branch back into that version, which will apply your changes on top of the new code.
  - This approach does require some knowledge of Git and GitHub. See the [Getting Started](/development/getting-started/developer-workflow#getting-setup) section for some pointers.


## Building New Core Features

If you are planning to build a whole new feature for the core, please get in touch with our team first via the [Developer section of the forums](https://ask.gibbonedu.org/c/developers/7), our developer Slack channel, or contact [support@gibbonedu.org](mailto:support@gibbonedu.org). While we welcome community contributions, its important to check with us to see if your feature will fit with the core if you'd like it to become part of an upcoming version. 

There are a number of considerations we make as core developers when considering new features for the core: 

- Is it maintainable?
  - The core team will need to maintain all the new code for the foreseeable future. Large scale changes, or changes that do not fit with the Gibbon code style, will be harder to maintain and not fit with the core.
- Is it useful and flexible?
  - A new feature should be designed in such a way that it can be turned off when needed, and includes configuration and permissions for schools to customize it to their needs. 
- Does it overlap with ongoing development?
  - We may already have plans to refactor areas of the codebase or add new features that are similar. Check in first to be sure!
- Does it fit the Gibbon ethos?
  - Gibbon is made with a set of core values that are human-centered and avoids tracking and automating processes that we believe should be human first. As such, features like facial recognition and AI analytics are unlikely to be accepted into the core.
- Could it be a module instead?
  - Any feature that is highly specific to one school's needs would be best in a custom module rather than in the core.

::: warning Important Note
For these reasons, we **strongly encourage** anyone considering core development to communicate with our team about their plans. We recognize the time and effort that goes into coding new features, so it is unfortunate if we are given code that does not fit into the core for one of the above reasons. 
:::
