const fallbackSiteUrl = "https://szilagyibence.com";

function normalizeBasePath(value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed || trimmed === "/") {
    return "";
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;

  return withLeadingSlash.replace(/\/+$/, "");
}

function normalizeSiteUrl(value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return fallbackSiteUrl;
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export function assetPath(path: `/${string}`) {
  return `${basePath}${path}`;
}

export function absoluteUrl(path: `/${string}` = "/") {
  const normalizedSite = siteUrl.replace(/\/$/, "");
  const normalizedBase = basePath.replace(/\/$/, "");
  const normalizedPath = path === "/" ? "" : path;

  return `${normalizedSite}${normalizedBase}${normalizedPath}`;
}
