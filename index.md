---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
order: 0

hero:
  name: "Gibbon Docs"
  text: "Documentation & Guides to Get Started"
  tagline: "The Free, Flexible, Open Source School Software"
  image:
    src: /assets/documentation_2.svg
    alt: Gibbon Docs

  actions:
    - theme: brand
      text: Introduction
      link: /introduction/welcome
    - theme: alt
      text: Installing Gibbon
      link: /introduction/installing-gibbon
    - theme: alt
      text: Getting Started
      link: /getting-started/next-steps
    # - theme: alt
    #   text: Updating
    #   link: /administrators/getting-started/updating-gibbon

features:
  - icon: 
      src: assets/github.svg
    title: Open Source!
    details: Just like Gibbon, all of our docs are open source, written and maintained by members of the Gibbon community.
    link: https://github.com/GibbonEdu/docs
  - icon: 
      src: assets/markdown.svg
    title: Written in Markdown
    details: Markdown is a simple plain-text format that can be authored with any text editor or directly in GitHub.
    link: https://guides.github.com/features/mastering-markdown/
  - icon: 
      src: assets/vitepress.svg
    title: Built with VitePress
    details: These docs are built with the awesome open-source static site generator VitePress.
    link: https://vitepress.dev/
  - icon: 
      src: assets/netlify.svg
    title: Deploys with Netlify
    details: Each time a change is made, the whole site is automatically deployed via the amazing JAM-stack wizardry of Netlify.
    link: https://www.netlify.com/
---

