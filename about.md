---
title: "About the Docs"
order: 500
contributors: ["skuipers"]
---
# About the Docs

## Open Source!

All of our docs are open source, written and maintained by members of the Gibbon community. 

::: tip GitHub Login
Suggesting edits for the docs requires logging in to a GitHub account. You can [create one for free](https://github.com/join) if you don't already have an account.
:::

If you'd like to contribute to the Gibbon docs, you could:

- ###### Edit a Page
  Look for the <u>Edit this Page</u> link in the bottom left corner of each page. If you spot a typo or would like to help update the docs, feel free to [edit the page](https://help.github.com/articles/editing-files-in-another-user-s-repository/). Each page has a part at the top inside `---`s called front-matter, which contains extra details about the page, and the area below that is the page's body content.

- ###### Create a New Page
  Click the <u>Edit this Page</u> link on a page that's in the same section, then use the breadcrumb navigation to go up one level into the folder that page is in. From here, you should see an Add File in the GitHub interface in the top right.

- ###### Submit an Issue
  Feel free to [submit an issue](https://github.com/GibbonEdu/docs/issues) through GitHub if you spot anything that can't be fixed with the options above.

Any time you edit or create a page you'll be submitting a GitHub [Pull Request](https://help.github.com/articles/about-pull-requests/) to notify us of your changes. Once submitted, please allow some time for us to review your PR and merge them into the docs. 

## Written in Markdown

The docs are written in [Markdown](https://en.wikipedia.org/wiki/Markdown), a simple plain-text format that can be authored with any text editor, a number of [online](https://dillinger.io/) [tools](http://www.ctrlshift.net/project/markdowneditor/), or directly in the GitHub editor. You can learn more about the Markdown syntax with a quick [online guide](https://guides.github.com/features/mastering-markdown/) or [tutorial](https://www.markdowntutorial.com/).

## Built with VitePress

These docs are built with the awesome open-source static site generator [VitePress](https://vitepress.dev).

## Deploys with Netlify

Each time a change is made to the [Gibbon Docs repository](https://github.com/GibbonEdu/docs/) on GitHub the whole site is automatically generated and deployed via the amazing JAM-stack wizardry of [Netlify](http://netlify.com).

## Advanced Editing

[Obsidian](https://obsidian.md/) is an excellent tool for editing markdown files, and many of the docs have been written using Obsidian + GitHub. 

1. If you're familiar with the Git workflow, you can [fork the Docs repository](https://github.com/GibbonEdu/docs/fork) and clone it locally to set up a copy of the docs that you can edit on your computer. 
2. Then, launch Obsidian and choose "Open folder as vault," navigating to your directory with the docs repository in it. 
3. The configuration files already exist, and you should now be able to view and edit any of the documentation files in Obsidian.
4. Once you've made changes, use the command line or your [favourite](https://www.sourcetreeapp.com/) Git GUI to push your changes from your local repository to your remote repository.
5. Finally, PR the changes to the Docs repository. After pushing changes, GitHub offers a pop-up to make this even easier.