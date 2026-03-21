import { getCollection } from "astro:content";
import { defaultLocale, isLocale, type Locale } from "../i18n/config";

export type PageSlug = "home" | "about" | "contact" | "projects" | "research" | "notes" | "gallery";

export function getEntryLocale(id: string): Locale {
  const [segment] = id.split("/");
  return isLocale(segment) ? segment : defaultLocale;
}

export function getEntrySlug(id: string) {
  const segments = id.split("/");
  return isLocale(segments[0]) ? segments.slice(2).join("/") : id;
}

export async function getLocalizedCollection<
  C extends "projects" | "research" | "notes" | "about" | "pages"
>(collection: C, locale: Locale) {
  const entries = await getCollection(collection);
  return entries.filter((entry) => getEntryLocale(entry.id) === locale);
}

export async function getLocalizedPageEntry(
  locale: Locale,
  slug: PageSlug
) {
  const entries = await getLocalizedCollection("pages", locale);
  return entries.find((entry) => getEntrySlug(entry.id) === slug);
}

export async function requireLocalizedPageEntry(locale: Locale, slug: PageSlug) {
  const entry = await getLocalizedPageEntry(locale, slug);
  if (!entry) {
    throw new Error(`Missing pages content entry for locale "${locale}" and slug "${slug}".`);
  }
  return entry;
}
