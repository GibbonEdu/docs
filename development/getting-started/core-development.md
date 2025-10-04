---
title: "Core Development"
categories: ["support", "customization"]
tags: []
order: 40
contributors: ["rossdotparker"]
---
# Core Development

The Gibbon core is developed and maintained by the Gibbon team, who are a small team of developers working in an international school in Hong Kong. We run a [regular release schedule](/development/getting-started/developer-workflow#release-schedule) for new versions of the core, and work to fix bugs and add new features with each version. The code for the Gibbon core can be found in the [GibbonEdu/core](https://github.com/GibbonEdu/core) repository on GitHub, which includes [s]table releases](https://github.com/GibbonEdu/core/releases) as well as the the upcoming version in the [development branch](/development/getting-started/developer-workflow#branching-strategy).

## Modifying the Core

Since Gibbon is open source, you are welcome to modify the code in the core. However, keep in mind that your changes will be overwritten the next time you update Gibbon. In order to update to the next version and add new features, the files from the new version need to be copied into your installation and will replace the existing files.

Whenever possible, it's best to try and create your changes as a [new module](/development/getting-started/module-development) in Gibbon, rather than modifying the core. However, and understandable, there are times when this is not possible and you find yourself making changes directly to the core.

There are a few ways you can keep track of changes you make:

- For small tweaks and changes, you could make note of which files and lines you've changed in a document, to help remind you which changes to make again after an update. You will need to manually apply the code changes after each update to Gibbon.
- For larger sets of changes, the most reliable way to keep the changes you've made is to fork the [GibbonEdu/core](https://github.com/GibbonEdu/core) repository, and add your changes to a new branch on your fork.
  - With this approach, each time there is an update in Gibbon, you can pull the latest version into your fork, and then merge your branch back into that version, which will apply your changes on top of the new code.
  - This approach does require some knowledge of Git and GitHub. See the [pGetting Started](/development/getting-started/developer-workflow#getting-setup) section for some pointers.


## Building New Core Features

If you are planning to build a whole new feature for the core, please get in touch with our team first via the [Developer section of the forums](https://ask.gibbonedu.org/c/developers/7), our developer Slack channel, or contact [support@gibbonedu.org](mailto:support@gibbonedu.org). While we welcome community contributions, its important to check with us to see if your feature will fit with the core if you'd like it to become part of an upcoming version. 

There are a number of considerations we make as core developers when considering new features for the core: 

- Is it maintainable?
- Is it useful and flexible?
- Does it overlap with ongoing development?
- Does it fit the Gibbon ethos?
- Could it be a module instead?

For these reasons, we **strongly encourage** anyone considering core development to communicate with our team about their plans. We recognize the time and effort that goes into coding new features, so it is tough for us if we are given code that does not fit into the core for one of the above reasons. 
