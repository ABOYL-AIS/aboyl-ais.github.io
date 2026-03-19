export const siteMeta = {
  name: "ABOYL-AIS",
  title: "ABOYL-AIS | Personal Archive",
  description:
    "一个以内容与排版为主的个人静态网站，用于承载项目、论文、记录、图集与长期表达。",
  heroLabel: "PERSONAL EDITION",
  heroTitle: "让个人表达安静落下，\n也让内容长期生长。",
  heroIntro:
    "这里不是学术主页，不是企业官网，也不是典型的开发者 portfolio。它更像一座克制、柔和、可持续扩展的个人品牌站，用来承载作品、研究、记录与审美表达。",
  heroNote:
    "内容优先 / 轻主视觉 / 低饱和配色 / GitHub Pages & Vercel Ready",
  status: [
    "项目",
    "论文",
    "记录",
    "图集",
    "语句集合"
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Projects", href: "/projects/" },
    { label: "Research", href: "/research/" },
    { label: "Notes", href: "/notes/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact/" }
  ],
  quickFacts: [
    { label: "气质方向", value: "柔和 · 克制 · 典雅" },
    { label: "内容核心", value: "排版优先" },
    { label: "部署方式", value: "GitHub Pages / Vercel" }
  ],
  profile: {
    name: "ABOYL-AIS",
    summary:
      "这里暂时使用公开安全的演示型个人简介：一位偏内容导向、关注信息结构与视觉秩序的创作者。这个网站会承载个人介绍、项目、研究、记录与审美收藏。",
    background:
      "当前背景说明同样属于占位文本，用于展示站点定位与信息层级。整体方向不是传统 academic homepage，也不是常见的 developer portfolio，而是更克制、更长期主义的个人品牌站。",
    keywords: ["Content-led", "Research-aware", "Editorial", "Static-first", "Anime-soft"],
    skills: ["Astro", "Tailwind CSS", "TypeScript", "Content Architecture", "UI System"],
    interests: ["前端设计", "个人出版", "信息架构", "二次元审美", "图文收藏"]
  },
  contact: {
    intro:
      "如果后续需要合作、交流、项目讨论或内容沟通，这里可以作为对外联系入口。当前版本先保留安全、公开的联系占位。",
    items: [
      { label: "GitHub", value: "ABOYL-AIS", href: "https://github.com/ABOYL-AIS" },
      { label: "Site", value: "aboyl-ais.github.io", href: "https://aboyl-ais.github.io/" },
      { label: "Email", value: "可在上线前替换为正式邮箱", href: "" }
    ]
  }
};

export const homeSections = {
  statement:
    "保留一点二次元主视觉的气息，但让图片只做点缀。真正支撑整个网站的，是排版、留白、层级和内容组织。",
  about:
    "当前版本先把长期维护的基础结构搭稳：页面不是模板拼装，内容也不被某一种展示形式锁死。后续可以逐步扩展到论文、图集、语句集合与更多专题页面。",
  footer:
    "Built with Astro. Shaped as a calm, content-led personal archive."
};

export const bentoHighlights = [
  {
    kicker: "About",
    title: "个人信息、背景、关键词、技能与兴趣会集中在 About 中完整展开。",
    body: "首页只给出清晰入口，详细自我介绍留在单独页面，保持阅读节奏和信息密度。",
    tone: "rose"
  },
  {
    kicker: "Research",
    title: "论文、竞赛、报告与成果统一进入 Research。",
    body: "研究型内容共享一套更正式的展示框架，但通过类型字段区分它们的语义与语气。",
    tone: "neutral"
  },
  {
    kicker: "Gallery",
    title: "图集、二次元收藏、Favorite Quotes 与图文碎片进入 Gallery。",
    body: "审美表达被保留，但始终作为节奏和氛围的一部分，不压过内容本身。",
    tone: "soft"
  }
];
