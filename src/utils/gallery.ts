import { readdir } from "node:fs/promises";
import path from "node:path";

export type GalleryFolder = "avatar" | "img" | "photo";

export type GalleryImage = {
  name: string;
  src: string;
  folder: GalleryFolder;
};

const validExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

export async function getGalleryImages(folder: GalleryFolder) {
  const dir = path.join(process.cwd(), "public", "Photos", folder);

  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && validExtensions.has(path.extname(entry.name).toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"))
      .map((entry) => ({
        name: entry.name,
        folder,
        src: `/Photos/${folder}/${encodeURIComponent(entry.name)}`,
      }) satisfies GalleryImage);
  } catch {
    return [];
  }
}

export async function getAllGalleryImages() {
  const groups = await Promise.all([
    getGalleryImages("avatar"),
    getGalleryImages("img"),
    getGalleryImages("photo"),
  ]);

  return groups.flat();
}
