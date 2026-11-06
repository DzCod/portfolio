const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): URL {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  const value = configuredUrl
    ? configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")
      ? configuredUrl
      : `https://${configuredUrl}`
    : LOCAL_SITE_URL;

  return new URL(value);
}

export function getLocalizedUrl(locale: "en" | "fr"): string {
  return new URL(`/${locale}`, getSiteUrl()).toString().replace(/\/$/, "");
}
