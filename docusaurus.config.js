// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PixelOS Wiki',
  url: 'https://wiki.pixelos.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PixelOS Wiki',
        hideOnScroll: true,
        logo: {
          alt: 'PixelOS Logo',
          src: 'img/favicon-32x32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'faq',
            position: 'left',
            label: 'For Users',
          },
          {
            type: 'doc',
            docId: 'JoinTheTeam',
            position: 'left',
            label: 'For Maintainers',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'resources/ImportantLinks',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://github.com/PixelOS-Pixelish/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://t.me/PixelOSOfficial',
            label: 'Telegram',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Join The Team',
                to: '/JoinTheTeam',
              },
            ],
          },
          {
            title: 'Community and Updates',
            items: [
              {
                label: 'Telegram Group Chat',
                href: 'https://t.me/pixeloschat',
              },
              {
                label: 'Telegram Channel',
                href: 'https://t.me/PixelOSOfficial',
              },
              {
                label: 'CI',
                href: 'https://t.me/pixelosci',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PixelOS-Pixelish/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PixelOS Project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
