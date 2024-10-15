// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PixelOS",
  url: "https://blog.pixelos.net",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "PixelOS Blog",
        logo: {
          alt: "PixelOS Logo",
          src: "img/favicon.png",
        },
        items: [
          { to: "/", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "ForUsers/faq",
            position: "left",
            label: "For Users",
          },
          {
            type: "doc",
            docId: "JoinTheTeam/JoinTheTeam",
            position: "left",
            label: "For Maintainers",
          },
          {
            type: "doc",
            docId: "resources/ImportantLinks",
            position: "left",
            label: "Resources",
          },
          {
            href: "https://pixelos.net/",
            label: "Website",
            position: "left",
          },
          {
            type: "doc",
            docId: "donate/donate",
            position: "right",
            label: "Donate",
          },
          {
            href: "https://github.com/PixelOS-AOSP/",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://t.me/PixelOSOfficial",
            label: "Telegram",
            position: "right",
          },
          {
            href: "https://twitter.com/PixelOSROM",
            label: "Twitter",
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
                label: "Join The Team",
                to: "/docs/JoinTheTeam",
              },
              {
                label: "Community Guidelines",
                to: "/docs/CommunityGuidelines",
              },
              {
                label: "FAQ",
                to: "/docs/faq",
              },
            ],
          },
          {
            title: "Telegram",
            items: [
              {
                label: "Support",
                href: "https://t.me/pixeloschat",
              },
              {
                label: "Releases",
                href: "https://t.me/PixelOSOfficial",
              },
              {
                label: "Automated Builds",
                href: "https://t.me/pixelosci",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/",
              },
              {
                label: "Important Links",
                to: "/docs/resources/ImportantLinks",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PixelOS Project. Built with Docusaurus.`,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "pixelos, Pixel OS, pos, android, Custom ROM, CustomROM, XDA",
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash"],
      },
    }),
};

module.exports = config;
