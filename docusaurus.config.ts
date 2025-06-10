import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mini Courses',
  tagline: 'Learn by doing',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sujithq.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mini-courses/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sujithq', // Usually your GitHub org/user name.
  projectName: 'mini-courses', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom2.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azure-course1',
        path: 'tutorials/azure/course1',
        routeBasePath: 'azure/course1',
        sidebarPath: './sidebars.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azure-course2',
        path: 'tutorials/azure/course2',
        routeBasePath: 'azure/course2',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'github-course1',
        path: 'tutorials/github/course1',
        routeBasePath: 'github/course1',
        sidebarPath: './sidebars.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'github-course2',
        path: 'tutorials/github/course2',
        routeBasePath: 'github/course2',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Mini Courses',
      logo: {
        alt: 'Mini Courses Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/azure',
          position: 'left',
          label: 'Azure',
          activeBaseRegex: `/azure/`,
        },
        {
          to: '/github',
          position: 'left',
          label: 'GitHub',
          activeBaseRegex: `/github/`,
        },
        {href: 'https://sujithq.github.io', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sujithq/mini-courses',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Areas',
          items: [
            {
              label: 'Azure Intro',
              to: '/azure',
            },
            {
              label: 'GitHub Intro',
              to: '/github',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/SujithQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://sujithq.github.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sujithq/mini-courses',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sujith Quintelier. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
