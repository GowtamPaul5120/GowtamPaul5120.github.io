import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "PlatformNX Documentation",
  tagline: "Complete platform documentation with AI-powered search",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://gowtampaul5120.github.io",
  baseUrl: "/",

  organizationName: "GowtamPaul5120",
  projectName: "GowtamPaul5120.github.io",

  deploymentBranch: "gh-pages",
  trailingSlash: false,

  customFields: {
    searchEndpoint: "http://localhost:3001/api/search",
    editUrl:
      "https://github.com/GowtamPaul5120/GowtamPaul5120.github.io/edit/development/",
  },

  onBrokenLinks: "ignore",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/GowtamPaul5120/GowtamPaul5120.github.io/edit/development/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/GowtamPaul5120/GowtamPaul5120.github.io/edit/development/blog/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "PlatformNX",
      logo: {
        alt: "PlatformNX Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "platformSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/GowtamPaul5120/GowtamPaul5120.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "PlatformNX Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/GowtamPaul5120/GowtamPaul5120.github.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PlatformNX. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
