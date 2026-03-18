# ABOYL-AIS

ABOYL-AIS 是一个部署在 GitHub Pages 上的静态博客站点，提供文章阅读、分类归档、标签浏览、站内搜索和中英文页面。

站点地址：`https://aboyl-ais.github.io/`

## 内容概览

- 博客文章页面
- 分类与标签归档
- 站内搜索
- 归档页与友情链接页
- 404 页面
- 中英文页面入口

## 技术说明

- 静态站点生成器：`Hugo 0.132.1`
- 主题：`hugo-theme-stack 3.26.0`
- 部署方式：`GitHub Pages`

当前仓库保存的是已经生成完成的静态站点文件，可直接用于发布。

## 目录结构

```text
.
├─ index.html
├─ 404.html
├─ index.xml
├─ sitemap.xml
├─ 关于/
├─ archives/
├─ categories/
├─ en/
├─ img/
├─ links/
├─ p/
├─ page/
├─ post/
├─ scss/
├─ search/
├─ tags/
├─ ts/
└─ zh-cn/
```

## 本地预览

在仓库根目录启动一个本地静态服务器即可预览：

```powershell
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080/
```

## 说明

仓库中包含一部分兼容旧链接或分页别名的跳转页，用于保持历史地址可访问。
