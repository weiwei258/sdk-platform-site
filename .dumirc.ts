import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    logo: '/logo.png',
    name: '平台文档',
    nav: [
      {
        title: '快速接入',
        link: '/quick-start',
      },
      {
        title: '功能说明',
        link: '/function-description/performance',
      },
      {
        title: '前端SDK',
        link: 'https://algok-876.github.io/eagle-tracker/',
      },
      {
        title: '平台地址',
        link: 'http://weiwei8848.com:3000',
      },
      {
        title: 'github',
        link: 'https://github.com/weiwei258/sdk-platform-back-end',
      },
    ],
  },
});
