import type { Locale } from "../i18n/config";

type Tone = "rose" | "neutral" | "soft";

type SiteCopy = {
  name: string;
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
    aboutPortrait: string;
    aboutPortraitAlt: string;
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
    favoriteQuote: string;
    closingNote: string;
  };
  hero: {
    label: string;
    kicker: string;
    title: string;
    intro: string;
    note: string;
    visualKicker: string;
    palette: string;
    visualImage: string;
    visualImageAlt: string;
    visualCaption: string;
    visualTag: string;
    scopeKicker: string;
    facts: Array<{ label: string; value: string }>;
    status: string[];
  };
  footer: {
    note: string;
    tagline: string;
    contacts: Array<{
      label: string;
      value: string;
      href?: string;
      kind: "phone" | "email" | "qq" | "wechat" | "github" | "team";
      imageSrc?: string;
      imageAlt?: string;
    }>;
  };
  home: {
    designPrinciple: {
      kicker: string;
      title: string;
      body: string;
    };
    structure: {
      kicker: string;
      title: string;
      intro: string;
    };
    highlights: Array<{
      kicker: string;
      title: string;
      body: string;
      href: string;
      tone: Tone;
      className?: string;
    }>;
    keywordCard: {
      kicker: string;
      body: string;
      href: string;
      tone: Tone;
    };
    selectedProjects: {
      kicker: string;
      title: string;
      intro: string;
    };
    research: {
      kicker: string;
      title: string;
      intro: string;
    };
    notes: {
      kicker: string;
      title: string;
      intro: string;
    };
    quote: {
      kicker: string;
      title: string;
      intro: string;
    };
    galleryPreview: {
      kicker: string;
      title: string;
      intro: string;
    };
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    intro: string;
    affiliations: Array<{
      text: string;
      href?: string;
    }>;
    profileLabel: string;
    backgroundLabel: string;
    keywordsLabel: string;
    profile: {
      summary: string;
      background: string;
      keywords: string[];
    };
    sections: Array<{
      kicker: string;
      title: string;
      body: string;
      items?: string[];
      subsections?: Array<{
        title: string;
        body: string;
      }>;
    }>;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    intro: string;
    sections: Array<{
      kicker: string;
      title: string;
      body: string;
      links: Array<{
        label: string;
        value: string;
        href: string;
      }>;
    }>;
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
  collections: {
    projects: {
      metaTitle: string;
      metaDescription: string;
      kicker: string;
      title: string;
      intro: string;
    };
    research: {
      metaTitle: string;
      metaDescription: string;
      kicker: string;
      title: string;
      intro: string;
    };
    notes: {
      metaTitle: string;
      metaDescription: string;
      kicker: string;
      title: string;
      intro: string;
    };
    gallery: {
      metaTitle: string;
      metaDescription: string;
      kicker: string;
      title: string;
      intro: string;
    };
  };
};

const siteCopy: Record<Locale, SiteCopy> = {
  zh: {
    name: "ABOYL-AIS",
    meta: {
      title: "ABOYL-AIS | Personal Archive",
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
      markImageAlt: "ABOYL-AIS anime icon",
      wordmarkImage: "",
      wordmarkImageAlt: "ABOYL-AIS wordmark",
      editionLabel: "You can be more than you seem!",
      aboutPortrait: "/images/about/二存.jpg",
      aboutPortraitAlt: "Qi Liu portrait",
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
      favoriteQuote: "Favorite Quote",
      closingNote: "Closing Note",
    },
    hero: {
      label: "PERSONAL EDITION",
      kicker: "Quiet Presence",
      title: "让个人表达安静落下，\n也让内容长期生长。",
      intro:
        "这里不是学术主页，不是企业官网，也不是典型的开发者 portfolio。它更像一座克制、柔和、可持续扩展的个人品牌站，用来承载作品、研究、记录与审美表达。",
      note: "内容优先 / 轻主视觉 / 低饱和配色 / GitHub Pages & Vercel Ready",
      visualKicker: "Main Visual",
      palette: "Mist Blue · Sakura Pink",
      visualImage: "/images/hero/main-visual.jpg",
      visualImageAlt: "Anime-style homepage visual",
      visualCaption:
        "主视觉更像一张情绪插页，只给首页留下一点辨识度，不抢走阅读的重心。",
      visualTag: "Editorial Anime",
      scopeKicker: "Site Scope",
      facts: [
        { label: "气质方向", value: "柔和 · 克制 · 典雅" },
        { label: "内容核心", value: "排版优先" },
        { label: "部署方式", value: "GitHub Pages / Vercel" },
      ],
      status: ["项目", "论文", "记录", "图集", "语句集合"],
    },
    footer: {
      note: "欢迎随时联系，期待您的交流！",
      tagline: "无论是学术、项目、团队合作，还是日常沟通，我都很欢迎！",
      contacts: [
        {
          label: "电话",
          value: "18372779323",
          kind: "phone",
        },
        {
          label: "Email",
          value: "18372779323@163.com",
          kind: "email",
        },
        {
          label: "微信",
          value: "GuGuai_MR7",
          imageSrc: "/Wechat.png",
          imageAlt: "WeChat QR code",
          kind: "wechat",
        },
        {
          label: "GitHub",
          value: "个人主页",
          href: "https://github.com/ABOYL-AIS",
          kind: "github",
        },
        {
          label: "AIS Team",
          value: "团队主页",
          href: "https://github.com/Advanced-Informatics-Scholar",
          kind: "team",
          imageSrc: "/团队LOGO.png",
          imageAlt: "Advanced Informatics Scholar team logo",
        },
      ],
    },
    home: {
      designPrinciple: {
        kicker: "Design Principle",
        title: "保留一点二次元主视觉的气息，但让图片只做点缀。",
        body: "真正支撑整个网站的，是排版、留白、层级和内容组织。当前版本先把长期维护的基础结构搭稳：页面不是模板拼装，内容也不被某一种展示形式锁死。",
      },
      structure: {
        kicker: "Homepage Structure",
        title: "首页负责建立气质与层级，而不是试图解释一切。",
        intro:
          "这里保留卡片式入口，但把模板味压低，让每个区块更像一张安静的内容索引卡。",
      },
      highlights: [
        {
          kicker: "About",
          title:
            "个人信息、背景、关键词、技能与兴趣会集中在 About 中完整展开。",
          body: "首页只给出清晰入口，详细自我介绍留在单独页面，保持阅读节奏和信息密度。",
          href: "/about/",
          tone: "rose",
          className: "lg:col-span-2",
        },
        {
          kicker: "Research",
          title: "论文、竞赛、报告与成果统一进入 Research。",
          body: "研究型内容共享一套更正式的展示框架，但通过类型字段区分它们的语义与语气。",
          href: "/research/",
          tone: "neutral",
        },
        {
          kicker: "Gallery",
          title: "图集、二次元收藏、Favorite Quotes 与图文碎片进入 Gallery。",
          body: "审美表达被保留，但始终作为节奏和氛围的一部分，不压过内容本身。",
          href: "/gallery/",
          tone: "soft",
        },
      ],
      keywordCard: {
        kicker: "Keywords",
        body: "方向关键词会在 About 中作为更完整的个人信息展开。",
        href: "/about/",
        tone: "soft",
      },
      selectedProjects: {
        kicker: "Selected Projects",
        title: "项目页承担公开展示，但不把整个站点做成作品集模板。",
        intro:
          "项目是站点的一部分，而不是站点的全部。这里会展示持续建设中的模块、专题与公开成果。",
      },
      research: {
        kicker: "Research",
        title: "研究、竞赛、报告与成果共享同一层正式展示。",
        intro:
          "Research 页面用于承载更正式的输出，不让它们散落在普通笔记和项目列表之间。",
      },
      notes: {
        kicker: "Notes",
        title: "记录与随笔保留轻重层次。",
        intro:
          "Notes 承接技术记录、灵感随笔、阶段总结与其他长期沉淀中的文字内容。",
      },
      quote: {
        kicker: "Quote",
        title: "留一小块位置，专门放值得反复回看的句子。",
        intro: "Quote 不被并入长文列表，而是作为更轻、更私人的内容入口存在。",
      },
      galleryPreview: {
        kicker: "Gallery Preview",
        title: "让图像成为气质的补充，而不是页面的主角。",
        intro:
          "这里保留图集与小型图文收藏的预览，图片负责情绪，排版负责秩序，语气则更私人一些。",
      },
    },
    about: {
      metaTitle: "关于 | ABOYL-AIS",
      metaDescription: "关于 ABOYL-AIS",
      kicker: "About",
      title: "INFJ | Qi Liu（刘琪）",
      intro:
        "攀至小坡，仰高山远上!同不失道上所景，亦可伴偕侧良人，向阳逐心中所念!",
      affiliations: [
        {
          text: "西北大学（中国）软件工程大四本科在读",
          href: "https://www.nwu.edu.cn/",
        },
        {
          text: "上海交通大学博士生-直博（Incoming | 博0）",
          href: "https://www.sjtu.edu.cn/",
        },
        { text: "Advanced Informatics Scholar 团队负责人" },
      ],
      profileLabel: "Profile",
      backgroundLabel: "Background",
      keywordsLabel: "Keywords",
      profile: {
        summary:
          "我更在意长期主义的表达方式，而不是一次性地堆满信息。这个站点会持续承载个人经历、研究兴趣、团队建设、项目实践与一些更私人的文字沉淀。",
        background:
          "目前正处在从本科阶段向博士阶段过渡的时期，我希望能逐步把研究、工程、领导力和长文表达组织成一个连贯的个人轨迹。未来很长一段时间将围绕Agent技术及相关应用展开，希望可以做一些有意义的工作！",
        keywords: [
          "统筹组织",
          "INFJ-深度思考",
          "Agent应用研究",
          "AI-LLM",
          "自然风景",
          "二次元萌系",
          "樱花粉",
        ],
      },
      sections: [
        {
          kicker: "News",
          title: "个人 & 团队的最新动态与阶段性里程碑",
          body:
            "",
        },
        {
          kicker: "Award",
          title: "个人 & 团队的奖项、荣誉与阶段性认可",
          body:
            "",
        },
        {
          kicker: "Products",
          title: "个人 & 团队的系统、应用与公开工程成果",
          body:
            "",
        },
        {
          kicker: "Research",
          title: "个人 & 团队的研究方向、论文、竞赛、报告与成果",
          body:
            "",
          subsections: [
            {
              title: "Recent Interest",
              body: "",
            },
            {
              title: "Publication",
              body: "",
            },
            {
              title: "Preprint",
              body: "",
            },
          ],
        },
        {
          kicker: "Collaborators",
          title: "合作导师、同学、团队伙伴（友链）",
          body:
            "",
        },
      ],
    },
    contact: {
      metaTitle: "Contact | ABOYL-AIS",
      metaDescription: "联系 ABOYL-AIS",
      kicker: "Contact",
      title: "欢迎与我联系，期待您的交流！",
      intro:
        "如果你对我或者我的团队做的一些东西感兴趣，随时欢迎您的交流，也非常欢迎各位同仁加入我的团队！",
      sections: [
        {
          kicker: "Personal Contact",
          title: "如果你想直接联系我",
          body:
            "适合用于学术交流、项目讨论、合作邀约、内容沟通，或者只是想围绕 Agent、LLM、研究路径与个人成长展开一次认真对话。邮件会是最稳定的方式，GitHub 和站点则更适合先了解我现在在做什么。",
          links: [
            {
              label: "Email",
              value: "18372779323@163.com",
              href: "mailto:18372779323@163.com",
            },
            {
              label: "GitHub",
              value: "ABOYL-AIS",
              href: "https://github.com/ABOYL-AIS",
            }
          ],
        },
        {
          kicker: "AIS Team",
          title: "如果你想联系 Advanced Informatics Scholar 团队",
          body:
            "适合用于团队交流、项目合作、活动邀请、技术共建或未来想进一步了解 AIS 的同学与伙伴。现阶段可以先通过公开站点与 GitHub 入口建立联系，后续我会再补充更正式的团队信息页。",
          links: [
            {
              label: "AIS-Team GitHub",
              value: "Advanced-Informatics-Scholar",
              href: "https://github.com/Advanced-Informatics-Scholar",
            }
          ],
        },
      ],
    },
    notFound: {
      metaTitle: "404 | ABOYL-AIS",
      metaDescription: "页面未找到",
      kicker: "404",
      title: "这页没有被留在当前站点里。",
      intro: "可能是链接已变更、内容尚未公开，或你访问了一个不存在的静态路径。",
      body: "当前站点使用 Astro 静态构建并发布到 GitHub Pages / Vercel。若内容尚未同步生成，请返回首页或使用顶部导航继续浏览。",
      homeLink: "返回首页",
      notesLink: "查看 Notes",
    },
    collections: {
      projects: {
        metaTitle: "项目 | ABOYL-AIS",
        metaDescription: "ABOYL-AIS 项目展示页",
        kicker: "Projects",
        title: "重大项目 | 产品 | 系统的集中展示页！",
        intro:
          "关于本人主要参与的项目、产品、系统等工程化成果的集中展示页！欢迎各位同仁进行阅览与交流！",
      },
      research: {
        metaTitle: "Research | ABOYL-AIS",
        metaDescription: "Papers, competitions, reports and achievements",
        kicker: "Research",
        title: "论文、竞赛、报告与成果展示页！",
        intro:
          "关于本人主要参与的论文、竞赛、报告与成果的集中展示页！欢迎各位同仁进行阅览与交流！",
      },
      notes: {
        metaTitle: "Notes | ABOYL-AIS",
        metaDescription: "Notes, technical records and essays",
        kicker: "Notes",
        title: "写一些INFJ-绿老头的深度思考......",
        intro:
          "不善言辞，但乐于思考和表达,在这里记录一些自己的所思所想,INFJ-绿老头向你发起共鸣！Ask me anything !",
      },
      gallery: {
        metaTitle: "Gallery | ABOYL-AIS",
        metaDescription: "Gallery, visual collections and favorite quotes",
        kicker: "Gallery",
        title: "分享好看的小图片！",
        intro:
          "在这里同大家分享一些本人在网络上找到的好看的图片,以及一些个人生活实拍的照片！"
      },
    },
  },
  en: {
    name: "ABOYL-AIS",
    meta: {
      title: "ABOYL-AIS | Personal Archive",
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
      markImageAlt: "ABOYL-AIS anime icon",
      wordmarkImage: "",
      wordmarkImageAlt: "ABOYL-AIS wordmark",
      editionLabel: "You can be more than you seem!",
      aboutPortrait: "/images/about/二存.jpg",
      aboutPortraitAlt: "Qi Liu portrait",
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
      favoriteQuote: "Favorite Quote",
      closingNote: "Closing Note",
    },
    hero: {
      label: "PERSONAL EDITION",
      kicker: "Quiet Presence",
      title:
        "Let personal expression settle softly,\nand let content keep growing.",
      intro:
        "This is not an academic homepage, a corporate site, or a typical developer portfolio. It is a restrained, soft, extensible personal brand archive for projects, research, notes, and aesthetic fragments.",
      note: "Content first / Light main visual / Low-saturation palette / GitHub Pages & Vercel Ready",
      visualKicker: "Main Visual",
      palette: "Mist Blue · Sakura Pink",
      visualImage: "/images/hero/main-visual.jpg",
      visualImageAlt: "Anime-style homepage visual",
      visualCaption:
        "The hero visual behaves more like an editorial insert: enough identity for the homepage, without stealing attention from reading.",
      visualTag: "Editorial Anime",
      scopeKicker: "Site Scope",
      facts: [
        { label: "Visual tone", value: "Soft · Restrained · Elegant" },
        { label: "Content core", value: "Typography first" },
        { label: "Deployment", value: "GitHub Pages / Vercel" },
      ],
      status: ["Projects", "Papers", "Notes", "Gallery", "Quotes"],
    },
    footer: {
      note: "Feel free to reach out. I would be glad to hear from you.",
      tagline: "Academic exchange, projects, teamwork, and thoughtful conversation are all welcome.",
      contacts: [
        {
          label: "Phone",
          value: "18372779323",
          kind: "phone",
        },
        {
          label: "Email",
          value: "18372779323@163.com",
          kind: "email",
        },
        {
          label: "WeChat",
          value: "GuGuai_MR7",
          imageSrc: "/Wechat.png",
          imageAlt: "WeChat QR code",
          kind: "wechat",
        },
        {
          label: "GitHub",
          value: "Personal",
          href: "https://github.com/ABOYL-AIS",
          kind: "github",
        },
        {
          label: "AIS Team",
          value: "Team",
          href: "https://github.com/Advanced-Informatics-Scholar",
          kind: "team",
          imageSrc: "/团队LOGO.png",
          imageAlt: "Advanced Informatics Scholar team logo",
        },
      ],
    },
    home: {
      designPrinciple: {
        kicker: "Design Principle",
        title:
          "Keep a trace of anime softness in the hero, but let imagery stay secondary.",
        body: "What truly holds the site together is typography, spacing, hierarchy, and content structure. The current version stabilizes the long-term foundation before expanding the archive further.",
      },
      structure: {
        kicker: "Homepage Structure",
        title:
          "The homepage sets tone and hierarchy. It does not need to explain everything.",
        intro:
          "The card structure stays, but the template feel is reduced so each block reads like a quiet editorial index.",
      },
      highlights: [
        {
          kicker: "About",
          title:
            "Profile, background, keywords, skills, and interests are expanded in one dedicated page.",
          body: "The homepage only provides a clear entry point, keeping the introduction page itself focused and readable.",
          href: "/about/",
          tone: "rose",
          className: "lg:col-span-2",
        },
        {
          kicker: "Research",
          title:
            "Papers, competitions, reports, and achievements live inside one shared research layer.",
          body: "Research-oriented content uses a more formal frame, while type metadata keeps each item semantically distinct.",
          href: "/research/",
          tone: "neutral",
        },
        {
          kicker: "Gallery",
          title:
            "Gallery gathers visual fragments, anime-inspired collections, and favorite quotes.",
          body: "Aesthetic expression stays present, but always as part of rhythm and atmosphere rather than the dominant voice.",
          href: "/gallery/",
          tone: "soft",
        },
      ],
      keywordCard: {
        kicker: "Keywords",
        body: "These directional keywords are unpacked more fully on the About page.",
        href: "/about/",
        tone: "soft",
      },
      selectedProjects: {
        kicker: "Selected Projects",
        title:
          "Projects are visible here, without turning the whole site into a portfolio template.",
        intro:
          "Projects are one part of the archive, not its entire identity. This section presents ongoing modules, focused experiments, and public outcomes.",
      },
      research: {
        kicker: "Research",
        title:
          "Papers, competitions, reports, and achievements share the same formal layer.",
        intro:
          "The Research page is meant for more formal outputs, keeping them from being scattered between ordinary notes and project lists.",
      },
      notes: {
        kicker: "Notes",
        title: "Notes and essays keep their own weight and rhythm.",
        intro:
          "Notes collects technical records, idea fragments, stage summaries, and long-term writing in progress.",
      },
      quote: {
        kicker: "Quote",
        title: "A small space is reserved for lines worth revisiting.",
        intro:
          "Quotes are not buried inside article lists. They remain a lighter, more private entry point.",
      },
      galleryPreview: {
        kicker: "Gallery Preview",
        title:
          "Let images support the atmosphere instead of becoming the page itself.",
        intro:
          "These previews keep visuals present, but typography still leads the reading rhythm and structure.",
      },
    },
    about: {
      metaTitle: "About | ABOYL-AIS",
      metaDescription: "About ABOYL-AIS",
      kicker: "About",
      title: "INFJ | Qi Liu（刘琪）",
      intro:
        "Climb the hill, look up to the distant mountains! You can enjoy the view and chase your dreams with good company along the way!",
      affiliations: [
        {
          text: "Senior undergraduate student in Software Engineering @ Northwest University (China)",
          href: "https://www.nwu.edu.cn/",
        },
        {
          text: "Prospective direct Ph.D. student @ Shanghai Jiao Tong University",
          href: "https://www.sjtu.edu.cn/",
        },
        { text: "Team Leader of Advanced Informatics Scholar" },
      ],
      profileLabel: "Profile",
      backgroundLabel: "Background",
      keywordsLabel: "Keywords",
      profile: {
        summary:
          "I care more about building a long-term line of expression than displaying everything at once. This site is meant to hold my academic path, research interests, team work, technical projects, and more personal writing over time.",
        background:
          "I am currently in the transition from undergraduate to Ph.D., hoping to gradually organize research, engineering, leadership, and long-form expression into a coherent personal trajectory. For a long time to come, I will focus on agent technology and related applications, hoping to do some meaningful work in this area!",
        keywords: [
          "Organized People",
          "INFJ-Deep Thinker",
          "Agent Application Research",
          "AI-LLM",
          "Natural Scenery",
          "Moe Anime",
          "Sakura Pink",
        ],
      },
      sections: [
        {
          kicker: "News",
          title: "Latest news and milestones for both myself and the team",
          body:
            "",
        },
        {
          kicker: "Award",
          title: "Awards, honors, and recognitions for both myself and the team",
          body:
            "",
        },
        {
          kicker: "Products",
          title: "Systems, applications, and public engineering outcomes for both myself and the team",
          body:
            "",
        },
        {
          kicker: "Research",
          title: "Research directions, papers, competitions, reports, and achievements for both myself and the team",
          body:
            "",
          subsections: [
            {
              title: "Recent Interest",
              body: "",
            },
            {
              title: "Publication",
              body: ""
            },
            {
              title: "Preprint",
              body: "",
            },
          ],
        },
        {
          kicker: "Collaborators",
          title: "Collaborators, including advisors, classmates, team members, and friendly links",
          body:
            "",
        },
      ],
    },
    contact: {
      metaTitle: "Contact | ABOYL-AIS",
      metaDescription: "Contact ABOYL-AIS",
      kicker: "Contact",
      title: "Feel free to reach out. I would be glad to hear from you.",
      intro:
        "If you are interested in me or some of the things I do, I would be glad to hear from you. I also welcome anyone who wants to join my team!",
      sections: [
        {
          kicker: "Personal Contact",
          title: "If you want to reach me directly",
          body:
            "This is the right channel for research exchange, project discussion, collaboration ideas, or a more thoughtful conversation around agents, large models, academic direction, and personal growth. Email is the most reliable starting point, while GitHub and the site help provide context first.",
          links: [
            {
              label: "Email",
              value: "18372779323@163.com",
              href: "mailto:18372779323@163.com",
            },
            {
              label: "GitHub",
              value: "ABOYL-AIS",
              href: "https://github.com/ABOYL-AIS",
            }
          ],
        },
        {
          kicker: "AIS Team",
          title: "If you want to contact the Advanced Informatics Scholar team",
          body:
            "This is better for team-level communication, project collaboration, activity invitations, technical co-building, or anyone who wants to learn more about AIS as an evolving group. For now, the public site and GitHub remain the cleanest entry points.",
          links: [
            {
              label: "AIS-Team GitHub",
              value: "Advanced-Informatics-Scholar",
              href: "https://github.com/Advanced-Informatics-Scholar",
            }
          ],
        },
      ],
    },
    notFound: {
      metaTitle: "404 | ABOYL-AIS",
      metaDescription: "Page not found",
      kicker: "404",
      title: "This page is not part of the current archive.",
      intro:
        "The link may have changed, the content may not be public yet, or you may have reached a static path that does not exist.",
      body: "This site is statically built with Astro and deployed to GitHub Pages / Vercel. If the content has not been generated yet, return to the homepage or continue through the navigation above.",
      homeLink: "Back home",
      notesLink: "Browse notes",
    },
    collections: {
      projects: {
        metaTitle: "Projects | ABOYL-AIS",
        metaDescription: "Project showcase for ABOYL-AIS",
        kicker: "Projects",
        title:
          "A dedicated showcase for major projects, products, and systems!",
        intro:
          "A dedicated showcase for major projects, products, systems, and public engineering outputs I have been involved in! Welcome to browse and exchange!",
      },
      research: {
        metaTitle: "Research | ABOYL-AIS",
        metaDescription: "Papers, competitions, reports, and achievements",
        kicker: "Research",
        title: "Papers, competitions, reports, and achievements.",
        intro:
          "Research-related material is collected here inside a cleaner, more formal frame suitable for long-term expansion.",
      },
      notes: {
        metaTitle: "Notes | ABOYL-AIS",
        metaDescription: "Notes, technical records, and essays",
        kicker: "Notes",
        title: "Some deep thoughts from an INFJ-绿老头......",
        intro:
          "Not great at talking, but love to think and express. Here I record some of my thoughts, and INFJ-绿老头 resonates with you! Ask me anything!",
      },
      gallery: {
        metaTitle: "Gallery | ABOYL-AIS",
        metaDescription: "Gallery, visual collections, and favorite quotes",
        kicker: "Gallery",
        title: "Sharing small, beautiful images!",
        intro:
          "Here I share some beautiful images I found on the internet, as well as some personal photos from my life!",
      },
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
