import type { Locale } from "../i18n/config";

type SiteCopy = {
  name: string;
  secondaryName: string;
  meta: {
    title: string;
    description: string;
  };
  nav: Array<{ label: string; href: string }>;
  brand: {
    markLetter: string;
    markImage: string;
    markImageAlt: string;
    wordmarkImage: string;
    wordmarkImageAlt: string;
    editionLabel: string;
  };
  common: {
    skipToContent: string;
    menu: string;
    languageToggle: string;
    themeToggle: string;
    dayMode: string;
    nightMode: string;
    viewContent: string;
    viewDetail: string;
    viewCollection: string;
    roleLabel: string;
    venueLabel: string;
  };
  notFound: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    intro: string;
    body: string;
    homeLink: string;
    notesLink: string;
  };
};

const siteCopy: Record<Locale, SiteCopy> = {
  zh: {
    name: "Lior",
    secondaryName: "ABOYL-AIS",
    meta: {
      title: "Lior | ABOYL-AIS",
      description:
        "一个以内容与排版为主的个人静态网站，用于承载项目、论文、记录、图集与长期表达。",
    },
    nav: [
      { label: "首页", href: "/" },
      { label: "关于", href: "/about/" },
      { label: "项目", href: "/projects/" },
      { label: "研究", href: "/research/" },
      { label: "笔记", href: "/notes/" },
      { label: "图集", href: "/gallery/" },
      { label: "联系", href: "/contact/" },
    ],
    brand: {
      markLetter: "A",
      markImage: "/images/brand/icon.jpg",
      markImageAlt: "Lior / ABOYL-AIS anime icon",
      wordmarkImage: "",
      wordmarkImageAlt: "Lior / ABOYL-AIS wordmark",
      editionLabel: "You can be more than you seem!",
    },
    common: {
      skipToContent: "跳到主要内容",
      menu: "菜单",
      languageToggle: "切换语言",
      themeToggle: "切换主题",
      dayMode: "日间",
      nightMode: "夜间",
      viewContent: "查看内容",
      viewDetail: "查看详情",
      viewCollection: "查看收藏",
      roleLabel: "定位",
      venueLabel: "载体",
    },
    notFound: {
      metaTitle: "404 | Lior | ABOYL-AIS",
      metaDescription: "页面未找到",
      kicker: "404",
      title: "这页没有被留在当前站点里。",
      intro: "可能是链接已变更、内容尚未公开，或你访问了一个不存在的静态路径。",
      body: "当前站点使用 Astro 静态构建并发布到 GitHub Pages / Vercel。若内容尚未同步生成，请返回首页或使用顶部导航继续浏览。",
      homeLink: "返回首页",
      notesLink: "查看 Notes",
    },
  },
  en: {
    name: "Lior",
    secondaryName: "ABOYL-AIS",
    meta: {
      title: "Lior | ABOYL-AIS",
      description:
        "A content-led personal static site for projects, research, notes, gallery fragments, and long-form self-expression.",
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Projects", href: "/projects/" },
      { label: "Research", href: "/research/" },
      { label: "Notes", href: "/notes/" },
      { label: "Gallery", href: "/gallery/" },
      { label: "Contact", href: "/contact/" },
    ],
    brand: {
      markLetter: "A",
      markImage: "/images/brand/icon.jpg",
      markImageAlt: "Lior / ABOYL-AIS anime icon",
      wordmarkImage: "",
      wordmarkImageAlt: "Lior / ABOYL-AIS wordmark",
      editionLabel: "You can be more than you seem!",
    },
    common: {
      skipToContent: "Skip to main content",
      menu: "Menu",
      languageToggle: "Switch language",
      themeToggle: "Switch theme",
      dayMode: "Light",
      nightMode: "Dark",
      viewContent: "View content",
      viewDetail: "View details",
      viewCollection: "View collection",
      roleLabel: "Role",
      venueLabel: "Venue",
    },
    notFound: {
      metaTitle: "404 | Lior | ABOYL-AIS",
      metaDescription: "Page not found",
      kicker: "404",
      title: "This page is not part of the current archive.",
      intro:
        "The link may have changed, the content may not be public yet, or you may have reached a static path that does not exist.",
      body: "This site is statically built with Astro and deployed to GitHub Pages / Vercel. If the content has not been generated yet, return to the homepage or continue through the navigation above.",
      homeLink: "Back home",
      notesLink: "Browse notes",
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}

export function getBrandTitle(locale: Locale) {
  const copy = getSiteCopy(locale);
  return `${copy.name} | ${copy.secondaryName}`;
}

export function getCompositeBrandName(locale: Locale) {
  const copy = getSiteCopy(locale);
  return `${copy.name} / ${copy.secondaryName}`;
}
