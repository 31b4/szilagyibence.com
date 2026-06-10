export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://new.szilagyibence.com";

export function assetPath(path: `/${string}`) {
  return `${basePath}${path}`;
}

export function absoluteUrl(path: `/${string}` = "/") {
  const normalizedSite = siteUrl.replace(/\/$/, "");
  const normalizedBase = basePath.replace(/\/$/, "");
  const normalizedPath = path === "/" ? "" : path;

  return `${normalizedSite}${normalizedBase}${normalizedPath}`;
}
