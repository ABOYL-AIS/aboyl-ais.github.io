import { getCollection } from "astro:content";
import { defaultLocale, isLocale, type Locale } from "../i18n/config";

export function getEntryLocale(id: string): Locale {
  const [segment] = id.split("/");
  return isLocale(segment) ? segment : defaultLocale;
}

export function getEntrySlug(id: string) {
  const segments = id.split("/");
  return isLocale(segments[0]) ? segments.slice(2).join("/") : id;
}

export async function getLocalizedCollection<
  C extends "projects" | "research" | "notes" | "gallery"
>(collection: C, locale: Locale) {
  const entries = await getCollection(collection);
  return entries.filter((entry) => getEntryLocale(entry.id) === locale);
}
