import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '懒人客服官方文档',
  tagline: '懒人客服是一个旨在优化客户服务互动的多功能解决方案。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chat.lazaytools.top/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lazytools', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },
  plugins: [],
  scripts: [
    {
      src: 'https://anl.wizgadg.top/script.js',
      defer: true,
      'data-website-id': '3a8cbd70-3f91-48b7-9435-440517e968bf',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      // https://github.com/easyops-cn/docusaurus-search-local
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        indexDocs: true,
        indexPages: true,
        language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'https://img.qjwwy.com/articles/1704816941/1704816941878648.png',
    navbar: {
      title: 'ChatGPT-On-CS',
      logo: {
        alt: 'ChatGPT-On-CS Logo',
        src: 'img/logo.png',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        { to: '/blog', label: '更新日志', position: 'left' },
        {
          to: '/contact',
          label: '联系我们',
          position: 'right',
        },
        {
          href: 'https://github.com/cs-lazy-tools/ChatGPT-On-CS',
          label: '使用',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} lazytools.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
