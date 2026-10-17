# Bing / Google 搜索切换

[简体中文](README.md) | [English](README_EN.md)

这是一个油猴脚本。在 Bing 或 Google 搜索结果页点击右下角按钮，即可保留当前关键词并在当前标签页切换到另一个搜索引擎。

## 安装

1. 在浏览器中安装 Tampermonkey（油猴）扩展。
2. 打开油猴管理面板，选择“添加新脚本”。
3. 删除编辑器里的默认内容，把 `search-engine-switcher.user.js` 的全部内容粘贴进去。
4. 保存脚本。

## 使用

- 在 Bing 搜索时，右下角会显示“切换到 Google”。
- 在 Google 搜索时，右下角会显示“切换到 Bing”。
- 点击按钮后，当前标签页会跳转，并保留原来的搜索关键词。

脚本支持 `www.bing.com`、`cn.bing.com`，以及常见的 Google 地区域名。
