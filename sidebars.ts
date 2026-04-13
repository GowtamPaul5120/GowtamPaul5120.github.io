import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main PlatformNX sidebar with nested accordion structure
  platformSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/what-is-platformnx",
        "getting-started/installation",
        "getting-started/quick-start",
      ],
    },
    {
      type: "category",
      label: "Components",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Core Components",
          collapsible: true,
          collapsed: true,
          items: ["components/core/authentication"],
        },
      ],
    },
    // Tutorial content from default Docusaurus setup
    {
      type: "category",
      label: "Tutorial - Basics",
      collapsible: true,
      collapsed: true,
      items: [
        "tutorial-basics/create-a-document",
        "tutorial-basics/create-a-page",
        "tutorial-basics/create-a-blog-post",
        "tutorial-basics/markdown-features",
        "tutorial-basics/deploy-your-site",
        "tutorial-basics/congratulations",
      ],
    },
    {
      type: "category",
      label: "Tutorial - Extras",
      collapsible: true,
      collapsed: true,
      items: [
        "tutorial-extras/manage-docs-versions",
        "tutorial-extras/translate-your-site",
      ],
    },
  ],
};

export default sidebars;
