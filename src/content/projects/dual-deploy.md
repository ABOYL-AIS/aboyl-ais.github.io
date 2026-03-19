---
title: Dual Deploy Setup
summary: 为 GitHub Pages 和 Vercel 同时准备的静态部署配置，确保构建路径与站点地址可持续管理。
year: "2026"
role: Deployment
cover: /images/covers/dual-deploy.svg
coverAlt: Dual Deploy Setup cover
tags:
  - GitHub Pages
  - Vercel
  - CI
featured: false
status: Ready
github: https://github.com/ABOYL-AIS/aboyl-ais.github.io
writeup: /projects/dual-deploy/
---

部署配置保持简单：

- Astro 使用 `static` 输出
- 站点地址由环境变量控制
- GitHub Pages 使用工作流自动构建部署
- Vercel 保持零服务器依赖的静态部署路径
