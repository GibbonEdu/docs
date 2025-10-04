import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { withMermaid } from "vitepress-plugin-mermaid";
import timeline from "vitepress-markdown-timeline";

const vitepressSidebarOptions = {
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    capitalizeEachWords: true,
    hyphenToSpace: true,
    collapsed: true,
    collapseDepth: 1,
    manualSortFileNameByPriority: ['welcome.md', 'introduction', 'getting-started', 'administration', 'modules', 'user-guides', 'development'],
    frontmatterOrderDefaultValue: 9,
    sortMenusByFrontmatterOrder: true,
    excludeFilesByFrontmatterFieldName: 'draft',
    // excludePattern: ['**/README.md', '/templates/**', '/.obsidian', '*.canvas', '/deploy/**',],
    includeFolderIndexFile: false,
    keepMarkdownSyntaxFromTitle: true,
    convertSameNameSubFileToGroupIndexPage: false,
};

// https://vitepress.dev/reference/site-config
export default withMermaid({
    base: "/",
    title: "Gibbon Documentation",
    description: "The Free, Flexible, Open Source School Software",

    outDir: "./deploy",
    assetsDir: "assets",
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,

    head: [["link", { rel: "icon", href: "/favicon.ico" }]],

    srcExclude: ['**/README.md', '/templates/**', '/.obsidian', '*.canvas', '/deploy/**',],

    markdown: {
        config: (md) => {
            md.use(timeline);
        },
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "Gibbon Docs",
        logo: "/gibbon-purple.svg",

        nav: [
            {
                text: "Docs",
                activeMatch: '/introduction',
                items: [
                    { text: "Welcome", link: "/introduction/welcome" },
                    {
                        text: "New Users",
                        items: [
                            { text: "System Requirements", link: "/introduction/system-requirements" },
                            { text: "Installing Gibbon", link: "/introduction/installing-gibbon" },
                            { text: "Getting Started", link: "/getting-started/next-steps" },

                        ],
                    },
                    {
                        text: "Existing Users",
                        items: [
                            { text: "The Gibbon Lifecycle", link: "/administration/gibbon-lifecycle" },
                            { text: "Updating Gibbon", link: "/administration/updating-gibbon" },
                            { text: "Managing Modules", link: "/modules/modules" },
                        ],
                    },
                ],
            },

            {
                text: "Devs",
                activeMatch: '/development',
                items: [
                    { text: "Contributing", link: "/development/contributing" },
                    { text: "Gibbon Road Map", link: "/development/gibbon-road-map" },
                    {
                        text: "Getting Started",
                        items: [

                            { text: "Developer Workflow", link: "/development/getting-started/developer-workflow" },
                            { text: "Coding Standards", link: "/development/getting-started/coding-standards" },
                            { text: "Module Development", link: "/development/getting-started/module-development" },
                            { text: "Core Development", link: "/development/getting-started/core-development" },
                        ],
                    },
                    {
                        text: "Core Concepts",
                        items: [

                            { text: "Build Process", link: "/development/core-concepts/build-process" },
                            { text: "Database Changes", link: "/development/core-concepts/database-changes" },
                        ],
                    },

                ],
            },

            {
                text: "Support",
                items: [
                    { text: "Forums", link: "https://ask.gibbonedu.org" },
                    { text: "Expert Support", link: "https://gibbonedu.com/" },
                    { text: "Gibbon Partners", link: "https://gibbonedu.com" },
                    { text: "Certification", link: "https://gibbonedu.com/certification.php" },
                    { text: "Open Source Guide", link: "https://ask.gibbonedu.org/t/guide-to-going-open/8063" },
                    { text: "Support Page", link: "https://gibbonedu.org/support" },
                ],
            },
            {
                text: "v29.0.00",
                items: [
                    { text: "Download", link: "https://gibbonedu.org/download" },
                    {
                        text: "Changelog",
                        link: "https://github.com/GibbonEdu/core/blob/main/CHANGELOG.txt",
                    },
                    {
                        text: "Contributing",
                        link: "https://github.com/GibbonEdu/core/blob/main/.github/CONTRIBUTING.md",
                    },
                    { text: "Source Code", link: "https://github.com/GibbonEdu/core" },
                ],
            },
        ],

        sidebar: generateSidebar(vitepressSidebarOptions),

        search: {
            provider: "local",
        },

        editLink: {
            pattern: "https://github.com/GibbonEdu/docs/edit/main/:path",
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/GibbonEdu/core" },
        ],

        footer: {
            message:
                "Caught a mistake or want to improve the documentation? You are welcome to contribute! Look for the edit link on each page.<br/><br/>",
            copyright:
                `Copyright © 2010-${new Date().getFullYear()} <a href='https://gibbonedu.org/'>Gibbon Foundation</a> | Gibbon™ of Gibbon Education Ltd. (Hong Kong)<br/>Founded by Ross Parker at ICHK Secondary | Built by Ross Parker, Sandra Kuipers and the Gibbon community`,
        },
    },

    sitemap: {
        hostname: 'https://docs.gibbonedu.org',
    },

    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
        // class: "mermaid my-class", // set additional css classes for parent container 
    },

    // rewrites: {
    //     'administrators/getting-started/installing-gibbon/:file': 'administrators/installing-gibbon/:file'
    // }
});
