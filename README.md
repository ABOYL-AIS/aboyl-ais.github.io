# ABOYL-AIS

一个基于 `Astro + Tailwind CSS` 的静态个人网站，用于承载个人简介、项目、研究、笔记与审美收藏。

当前站点保持：

- 静态优先
- 组件化
- 内容与展示分离
- 中文默认 + 英文 `/en/` 双语路由
- 日 / 夜主题切换
- 同时兼容 GitHub Pages 与 Vercel

## 技术栈

- `Astro`
- `Tailwind CSS`
- `Astro Content Collections`
- `Astro file-based i18n-style routing`
- `GitHub Actions`
- `Vercel`

## 目录结构

```text
.
├─ public/
│  └─ images/
│     ├─ covers/
│     └─ gallery/
├─ src/
│  ├─ components/
│  ├─ content/
│  │  ├─ zh/
│  │  │  ├─ gallery/
│  │  │  ├─ notes/
│  │  │  ├─ projects/
│  │  │  └─ research/
│  │  └─ en/
│  │     ├─ gallery/
│  │     ├─ notes/
│  │     ├─ projects/
│  │     └─ research/
│  ├─ data/
│  ├─ i18n/
│  ├─ layouts/
│  ├─ pages/
│  │  ├─ en/
│  │  ├─ gallery/
│  │  ├─ notes/
│  │  ├─ projects/
│  │  ├─ research/
│  │  ├─ 404.astro
│  │  ├─ about.astro
│  │  ├─ contact.astro
│  │  └─ index.astro
│  ├─ styles/
│  ├─ utils/
│  └─ content.config.ts
├─ .github/workflows/deploy.yml
├─ astro.config.mjs
├─ package.json
└─ vercel.json
```

说明：

- `public/` 放静态资源，如项目封面图和 Gallery 图片。
- `src/content/` 放结构化内容条目。
- `src/content/zh/*` 与 `src/content/en/*` 分别维护中英文内容。
- `src/pages/` 放页面路由和详情页模板。
- `src/pages/en/` 提供英文页面路由，中文仍保持根路径。
- `src/components/` 放可复用 UI 组件。
- `src/utils/paths.ts` 统一处理 `base path`，避免 GitHub Pages 子路径兼容问题。

## 内容集合

内容集合定义在 `src/content.config.ts`。

站点级文案和导航文案统一维护在 `src/data/site.ts`，语言识别与路径切换辅助函数维护在 `src/i18n/config.ts`。

当前包含 4 类：

- `projects`
  - 项目卡片、项目详情、封面图、GitHub / Demo / Write-up
- `research`
  - Papers / Competitions / Reports / Achievements
- `notes`
  - Notes / 技术记录 / 随笔 / 阶段总结
- `gallery`
  - 图集、视觉收藏、Favorite Quotes

当前 `Favorite Quotes` 作为 `gallery` 集合中的 `kind: Quote` 条目维护，这样导航保持简洁，但内容上仍可独立区分。

## 当前占位内容说明

当前版本为了先完成结构、风格与部署验证，仍保留了一批演示型占位内容：

- `src/data/site.ts`
  - About 页个人简介
  - Background 文案
  - Contact 页中的邮箱说明
- `src/content/projects/`
  - 当前项目条目均为演示型样例
- `src/content/research/`
  - 当前研究条目均为演示型样例
- `src/content/notes/`
  - 当前笔记条目均为演示型样例
- `src/content/gallery/`
  - 当前图集与 Quote 条目均为演示型样例

这些内容的作用是：

- 验证页面结构是否成立
- 验证内容集合字段是否合理
- 验证 GitHub Pages / Vercel 构建与路由是否稳定
- 验证中英双语路由和主题切换是否稳定

## 本地运行

安装依赖：

```bash
npm ci
```

启动开发环境：

```bash
npm run dev
```

默认本地地址通常为：

```text
http://localhost:4321
```

英文首页地址为：

```text
http://localhost:4321/en/
```

## 构建与预览

构建静态产物：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

构建输出目录为：

```text
dist/
```

## GitHub Pages 部署

本项目已经包含 GitHub Pages 工作流：

- 工作流文件：`.github/workflows/deploy.yml`
- 触发条件：推送到 `main`
- 构建方式：`npm ci` + `npm run build`

仓库设置需要确认：

1. GitHub 仓库默认分支为 `main`
2. `Settings -> Pages`
3. `Source` 选择 `GitHub Actions`

当前仓库名称是 `aboyl-ais.github.io`，属于用户站点命名方式，因此默认可直接使用：

```text
PUBLIC_SITE_URL=https://aboyl-ais.github.io
```

如果以后改成普通仓库名的 project site，例如 `username.github.io/my-site`，还需要额外设置：

```text
PUBLIC_BASE_PATH=/my-site
```

对应配置入口在 `astro.config.mjs`。

## Vercel 部署

本项目已经包含最小化配置文件：

- `vercel.json`

Vercel 部署建议：

1. 直接导入此 GitHub 仓库
2. Framework Preset 选择 `Astro`
3. Build Command 使用 `npm run build`
4. Output Directory 使用 `dist`

推荐环境变量：

```text
PUBLIC_SITE_URL=https://your-domain.example
```

如果 Vercel 站点不部署在根路径，也可以补充：

```text
PUBLIC_BASE_PATH=/sub-path
```

## 静态资源与路径兼容

静态资源统一放在 `public/` 下，例如：

- `public/images/covers/`
- `public/images/gallery/`

内容 frontmatter 中可以写成：

```yaml
cover: /images/covers/example.svg
image: /images/gallery/example.svg
```

渲染层会通过 `src/utils/paths.ts` 自动拼接 `BASE_URL`，因此：

- GitHub Pages 用户站点可直接使用
- Vercel 根域名可直接使用
- 后续如果改成子路径部署，不需要全站手动改链接

## 语言与主题切换

- 中文为默认语言，使用根路径，例如 `/about/`
- 英文使用 `/en/` 前缀，例如 `/en/about/`
- Header 中提供语言切换按钮，并尽量跳转到当前页面对应语言版本
- 日 / 夜主题切换通过全局设计变量实现，用户选择会保存在本地

内容层遵循：

- UI 文案集中在 `src/data/site.ts`
- 长内容分别维护中英文版本
- 组件、布局和大部分页面模板只保留一套共享实现

## 后续维护说明

### 新增项目

在 `src/content/zh/projects/` 或 `src/content/en/projects/` 下新增一个 `md` 文件，至少填写：

```yaml
title:
summary:
year:
role:
cover:
coverAlt:
tags:
status:
featured:
github:
demo:
writeup:
```

封面图放到 `public/images/covers/`。

### 新增研究内容

在 `src/content/zh/research/` 或 `src/content/en/research/` 下新增 `md` 文件，至少填写：

```yaml
title:
summary:
date:
kind:
venue:
tags:
featured:
```

`kind` 目前支持：

- `Paper`
- `Competition`
- `Report`
- `Achievement`

### 新增笔记

在 `src/content/zh/notes/` 或 `src/content/en/notes/` 下新增 `md` 文件，至少填写：

```yaml
title:
summary:
date:
kind:
featured:
```

`kind` 目前支持：

- `Note`
- `Tech Record`
- `Essay`
- `Summary`

### 新增图集或 Quote

在 `src/content/zh/gallery/` 或 `src/content/en/gallery/` 下新增 `md` 文件，至少填写：

```yaml
title:
summary:
date:
kind:
medium:
image:
source:
featured:
```

`kind` 目前支持：

- `Artwork`
- `Collection`
- `Quote`

如果是图片内容：

- 图片文件放到 `public/images/gallery/`
- `image` 字段填 `/images/gallery/xxx.xxx`

如果是 Favorite Quote：

- `kind` 写 `Quote`
- `source` 填作者、作品或出处
- `image` 可留空

## 当前维护建议

- 真实上线前，优先替换 `src/data/site.ts` 中的占位个人信息。
- 真实上线前，检查 `Contact` 页面中的公开联系方式是否已经替换为正式值。
- 新增内容时，中英文 slug 应保持一致，便于语言切换时映射到对应详情页。
- 新增内容时优先复用现有字段，不要随意增加 frontmatter 结构。
- 若后续确实需要独立的 `quotes` 集合，再单独扩展内容模型，不建议在当前 MVP 阶段提前拆分。
