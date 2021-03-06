---
title: Hexo博客搭建：（一）安装及使用初体验
tags:
  - hexo
  - github
categories: hexo
abbrlink: df2452f4
date: 2018-04-28 22:32:45
---

## 前言

一直都有想过搭建博客,记录一些技术上的问题或者是生活上遇到什么事 ,也想过用 WordPress 来搭建博客,但一直没找到自己满意的主题,自己去写呢,又一直没写,还是因为自己懒,在 17 年的时候用 PHP 也写过博客,前台和后台已经写好了,就差部署了,但是呢又觉得那里不好,so 就一直拖到现在了.本文主要是记录下在使用 hexo 来搭建博客的过程和优化

<!-- more -->

## hexo

Hexo 是一个由 Node.js 驱动的快速、简洁、高效的博客框架。

Hexo 具有许多优点，使用它我们可以快速地搭建自己的本地博客站点，并能将其推送到 GitHub 仓库。这篇文章简单介绍了 Hexo 地安装及初次使用。

## 安装前提

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/)

此处就不再赘述以上二者的安装过程，点击链接去官网下载与自己操作系统对应的版本，按照默认配置一步步安装即可。不会就去谷歌或者是问度娘

安装完成之后,命令提示输入以下命令

```bash
  $ git --version
  $ node --version
```

出现 Git 版本号和 node 版本号,到此 Git 和 node 就安装好了

## 安装 hexo

在命令行输入以下命令，以将 Hexo 安装到全局环境：

```bash
  $ npm install hexo-cli -g
```

成功安装后，会出现诸如 -- hexo-cli@1.0.2 的提示信息。

注意！提示信息末尾可能会出现 npm WARN 警告信息，不过不要怕，那不会影响使用的，只要不是 npm ERROR 错误消息就好 (^\_^)！

## 初始化站点文件夹

接下来,运行命令初始化一个文件夹,作为我们的站点名称

```bash
  $  hexo init <站点名称>
```

接着下来就是新建的文件夹<站点名称>,继续安装站点所需要的 npm 依赖

```bash
  $ cd <站点名称>
  $ npm install
```

## 站点初体验

别担心，尽管到现在为止我们一篇文章也没写，而且站点主题也没经过任何配置，但还是会看到效果的。因为 Hexo 初始化的全新站点文件夹有一个内置的默认主题样式，同时也有一篇 Hello World 文章。

## 清理缓存文件

```bash
  $ hexo clean
```

此命令用于清除缓存文件（db.json）和已生成的静态文件(public)。

## 生成静态文件

```bash
  $ hexo generate
```

此命令用于生成静态文件，就是按照主题的模板文件配置将 markdown 文件生成为静态 html 文件。

此命令可简写为 `hexo g`。

当运行上述命令后，我们站点文件夹的目录结构下会多出一个 public 文件夹，这个文件夹中的文件就是 Hexo 帮我们生成的站点静态文件。

## 启动服务器

```bash
  $ hexo server
```

此命令会启动 hexo 服务器,可简写为 `hexo s`

默认状态下，我们的网站是运行在 http://localhost:4000 ，使用浏览器打开这个地址就可看到效果。
