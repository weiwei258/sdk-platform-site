---
nav: 快速接入
title: 快速接入
order: 1
---

# 快速接入

## 步骤 1：创建业务系统

- 登陆系统：<a href="http://weiwei8848.com:3000" target="_blank" rel="noreferrer">eagle-tracker-platform</a>
- 登陆后（如没账号则需先注册）后点击在右上角新建一个应用
  <img src="/step1.png"/>
- 然后选择需要接入的应用
  <img  src="/step2.png"/>

## 步骤 2：安装前端 SDK

- 安装

```jsx | pure
npm i @eagle-tracker/core
```

- 使用

```jsx | pure
import { EagleTracker } from '@eagle-tracker/core';

const eagle = new EagleTracker({
  isTest: true,
  // 填入刚才的应用ID
  appId: 'xxxx',
  // 填入刚才的appKey
  appKey: 'xxxx',
  // 发送模式选择post
  sendMode: 'post',
  dsn: 'http:/weiwei8848.com:7001/log',
});
eagle.start();
```

- 详细请看前端 SDK 地址：<a href="https://algok-876.github.io/eagle-tracker/" target="_blank" rel="noreferrer">eagle-tracker</a>

## 步骤 3：上传.map 文件

- 在系统上选择管理.map 页面

  <img src="/step3.png"/>

- 或者可以选择 webpack 或 vite 插件批量上传

  - webpack

```jsx | pure
npm i @eagle-tracker-plugin/webpack-plugin
```

```jsx | pure
const {
  default: UploadSourceMapPlugin,
} = require('@tool-plugin/webpack-plugin');
const fs = require('fs');

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 添加自定义插件到 webpack 配置中
    config.plugins.push(
      new UploadSourceMapPlugin({
        appId: 'xxx',
        appKey: 'xxx',
      }),
    );

    return config;
  },
};
```

- vite

```jsx | pure
npm i @eagle-tracker-plugin/vite-plugin
```

```jsx | pure
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePlugin from '@eagle-tracker-plugin/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePlugin({
      appId: 'xxx',
      appKey: 'xxx',
    }),
  ],
});
```

## 步骤 4：然后进入应用即可

  <img width="300px" src="/step4.png"/>
  <img src="/step5.png"/>
