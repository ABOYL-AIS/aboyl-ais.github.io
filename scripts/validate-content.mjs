import { access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const locales = ["zh", "en"];
const requiredPages = ["home", "about", "contact", "projects", "research", "notes", "gallery"];
const requiredAboutSections = ["profile", "news", "award", "products", "research", "collaborators"];
const requiredPublicAssets = [
  "public/favicon.jpg",
  "public/Wechat.png",
  "public/团队LOGO.png",
  "public/QiLiu_Lior_2026_CV_CN.pdf",
];
const requiredDirectories = [
  "public/Photos/avatar",
  "public/Photos/img",
  "public/Photos/photo",
  "public/award",
];

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const missing = [];

  for (const locale of locales) {
    for (const slug of requiredPages) {
      const file = `src/content/${locale}/pages/${slug}.md`;
      if (!(await exists(file))) {
        missing.push(file);
      }
    }

    for (const section of requiredAboutSections) {
      const file = `src/content/${locale}/about/${section}.md`;
      if (!(await exists(file))) {
        missing.push(file);
      }
    }
  }

  for (const asset of requiredPublicAssets) {
    if (!(await exists(asset))) {
      missing.push(asset);
    }
  }

  for (const dir of requiredDirectories) {
    if (!(await exists(dir))) {
      missing.push(dir);
    }
  }

  if (missing.length > 0) {
    console.error("Content validation failed. Missing required files or directories:");
    for (const item of missing) {
      console.error(`- ${item}`);
    }
    process.exit(1);
  }

  console.log("Content structure check passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
