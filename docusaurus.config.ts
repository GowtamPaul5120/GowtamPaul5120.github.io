import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Koodisi Documentation",
  tagline: "Complete platform documentation with AI-powered search",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://gowtampaul5120.github.io",
  baseUrl: "/",

  organizationName: "Koodisi",
  projectName: "Koodisi Documentation",

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
      title: "Koodisi",
      logo: {
        alt: "Koodisi Logo",
        src: "img/logo.svg",
      },
    },

    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Koodisi. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      appId: "YCCE1SPXJ2",
      apiKey: "a6c4159cd603a50384988196665294a2",
      indexName: "PlatformNX Documentation",
      contextualSearch: true,
      searchParameters: {},
      askAi: {
        assistantId: "823b9f23-2bd5-4ddc-b233-c387303b0989",
      },
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "algolia-site-verification",
        content: "E96C57BD169CC212",
      },
    },
  ],
};

export default config;
