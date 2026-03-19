import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.PUBLIC_SITE_URL || "https://aboyl-ais.github.io";
const base =
  process.env.PUBLIC_BASE_PATH && process.env.PUBLIC_BASE_PATH !== "/"
    ? process.env.PUBLIC_BASE_PATH
    : undefined;

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
