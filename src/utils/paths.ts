export function withBase(path: string) {
  if (!path) return path;

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
