export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeLabels: Record<Locale, string> = {
  zh: "中",
  en: "EN"
};

function normalizePathname(pathname: string) {
  if (!pathname) return "/";
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalized = normalizePathname(pathname);
  return normalized === "/en/" || normalized.startsWith("/en/") ? "en" : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
  const normalized = normalizePathname(pathname);

  if (normalized === "/en/") return "/";
  if (normalized.startsWith("/en/")) return normalized.slice(3);

  return normalized;
}

export function localizePath(locale: Locale, pathname: string) {
  const normalized = normalizePathname(pathname);

  if (locale === defaultLocale) {
    return normalized;
  }

  return normalized === "/" ? `/${locale}/` : `/${locale}${normalized}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  return localizePath(targetLocale, stripLocaleFromPathname(pathname));
}

export function getLangTag(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en";
}
