---
title: "Build Process"
categories: ["core"]
tags: []
weight: 20
contributors: ["skuipers"]
---

As of v18 Gibbon uses [Webpack](https://webpack.js.org) configured with [Tailwind CSS](https://tailwindcss.com) via the [Laravel Mix](https://laravel-mix.com) tool. More info about [Tailwind in Gibbon here](https://github.com/GibbonEdu/core/issues/805).

For the most part developers won't need to re-build the css files too often, as the utility classes in Tailwind provide lots of functionality out of the box. However during refactoring while we're creating some initial components, developers can use the build process to update css and js files for Gibbon core.

### Using the build tools

If you don't have [npm](https://www.npmjs.com/get-npm), be sure to install it first. On Mac OS, if you have Homebrew you can install npm with `brew install node`.

In the command line, browse to the `resources/build` directory from your Gibbon install location, then run `npm install` to setup the build tools. 

Once this is done, you can run `npm run build` to build the files, or `npm run watch` to automatically build files anytime they're changed.
