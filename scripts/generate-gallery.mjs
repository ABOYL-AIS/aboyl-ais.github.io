import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const photosRoot = path.join(root, "public", "Photos");
const locales = ["zh", "en"];
const localeRoots = Object.fromEntries(
  locales.map((locale) => [locale, path.join(root, "src", "content", locale, "gallery")])
);

const categoryConfigs = [
  {
    folder: "avatar",
    slugPrefix: "anime-avatar",
    category: "Anime Avatar",
    medium: "Avatar Collection",
    zhTitlePrefix: "头像收藏",
    enTitlePrefix: "Avatar Collection",
    zhSummary: "一组二次元头像收藏，作为图集里的轻量分类条目展示。",
    enSummary: "A set of anime avatar picks presented as light gallery entries."
  },
  {
    folder: "img",
    slugPrefix: "anime-image",
    category: "Anime Image",
    medium: "Image Collection",
    zhTitlePrefix: "图像收藏",
    enTitlePrefix: "Image Collection",
    zhSummary: "一组二次元图像收藏，作为图集里的视觉条目展示。",
    enSummary: "A set of anime image picks presented as visual gallery entries."
  },
  {
    folder: "photo",
    slugPrefix: "photography",
    category: "Photography",
    medium: "Photography",
    zhTitlePrefix: "实拍照片",
    enTitlePrefix: "Photography",
    zhSummary: "一组实拍照片整理，作为图集里的现实向分类条目展示。",
    enSummary: "A set of photography picks presented as a real-world gallery collection."
  }
];

const validExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

function escapeYaml(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function padId(index) {
  return String(index).padStart(3, "0");
}

function normalizeDate(index) {
  const base = new Date(Date.UTC(2026, 2, 21, 12, 0, 0));
  base.setUTCMinutes(base.getUTCMinutes() - index);
  return base.toISOString();
}

function zhBody(name, category) {
  if (category === "Anime Avatar") {
    return `这是一条自动生成的二次元头像图集条目，对应资源为「${name}」。\n\n- 分类：二次元头像\n- 展示方式：图集卡片 + 详情页\n- 来源目录：\`/public/Photos/avatar/\`\n\n后续如果你希望补充更具体的角色说明、出处或个人偏好，可以直接在这篇条目里继续细化。`;
  }

  if (category === "Anime Image") {
    return `这是一条自动生成的二次元图像条目，对应资源为「${name}」。\n\n- 分类：二次元图片\n- 来源目录：\`/public/Photos/img/\`\n\n后续可以补充作品名、角色名、收藏原因或对应主题。`;
  }

  return `这是一条自动生成的实拍照片条目，对应资源为「${name}」。\n\n- 分类：实拍照片\n- 来源目录：\`/public/Photos/photo/\`\n\n后续可以补充拍摄地点、时间、主题和当时的记录。`;
}

function enBody(name, category) {
  if (category === "Anime Avatar") {
    return `This is an auto-generated anime avatar gallery entry for "${name}".\n\n- Category: Anime Avatar\n- Presentation: Gallery card and detail page\n- Source folder: \`/public/Photos/avatar/\`\n\nYou can later enrich this entry with a character name, source work, or your own note about why you kept it.`;
  }

  if (category === "Anime Image") {
    return `This is an auto-generated anime image gallery entry for "${name}".\n\n- Category: Anime Image\n- Source folder: \`/public/Photos/img/\`\n\nYou can later add the work title, character name, or your own curation note.`;
  }

  return `This is an auto-generated photography gallery entry for "${name}".\n\n- Category: Photography\n- Source folder: \`/public/Photos/photo/\`\n\nYou can later expand it with place, time, mood, or a short personal record.`;
}

function buildDoc({ locale, slug, title, summary, category, medium, image, date, body }) {
  return `---\ntitle: "${escapeYaml(title)}"\nsummary: "${escapeYaml(summary)}"\ndate: ${date}\nkind: Collection\ncategory: ${category}\nmedium: "${escapeYaml(medium)}"\nimage: ${image}\nfeatured: false\n---\n\n${body}\n`;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function listImages(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && validExtensions.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, "zh-CN"));
  } catch {
    return [];
  }
}

async function removeStaleGeneratedFiles(localeRoot, slugPrefix, validSlugs) {
  const entries = await fs.readdir(localeRoot, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.startsWith(`${slugPrefix}-`) && entry.name.endsWith(".md"))
      .map(async (entry) => {
        const slug = entry.name.replace(/\.md$/, "");
        if (!validSlugs.has(slug)) {
          await fs.unlink(path.join(localeRoot, entry.name));
        }
      })
  );
}

async function main() {
  for (const locale of locales) {
    await ensureDir(localeRoots[locale]);
  }

  for (const config of categoryConfigs) {
    const folderPath = path.join(photosRoot, config.folder);
    const files = await listImages(folderPath);
    const validSlugs = new Set();

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const basename = path.basename(file, path.extname(file));
      const id = padId(index + 1);
      const slug = `${config.slugPrefix}-${id}`;
      validSlugs.add(slug);
      const imagePath = `/Photos/${config.folder}/${file}`;
      const date = normalizeDate(index);

      const zhDoc = buildDoc({
        locale: "zh",
        slug,
        title: `${config.zhTitlePrefix} ${id} · ${basename}`,
        summary: config.zhSummary,
        category: config.category,
        medium: `${config.medium} ${id}`,
        image: imagePath,
        date,
        body: zhBody(basename, config.category)
      });

      const enDoc = buildDoc({
        locale: "en",
        slug,
        title: `${config.enTitlePrefix} ${id} · ${basename}`,
        summary: config.enSummary,
        category: config.category,
        medium: `${config.medium} ${id}`,
        image: imagePath,
        date,
        body: enBody(basename, config.category)
      });

      await fs.writeFile(path.join(localeRoots.zh, `${slug}.md`), zhDoc, "utf8");
      await fs.writeFile(path.join(localeRoots.en, `${slug}.md`), enDoc, "utf8");
    }

    await Promise.all(
      locales.map((locale) => removeStaleGeneratedFiles(localeRoots[locale], config.slugPrefix, validSlugs))
    );
  }

  console.log("Gallery entries generated from public/Photos.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
