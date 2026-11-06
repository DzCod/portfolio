import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getLocalizedUrl, getSiteUrl } from "@/lib/site-url";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locale === "fr" ? "fr" : "en";
  setRequestLocale(validLocale);
  const t = await getTranslations({ locale: validLocale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");
  const canonicalUrl = getLocalizedUrl(validLocale);
  const englishUrl = getLocalizedUrl("en");
  const frenchUrl = getLocalizedUrl("fr");
  const imageUrl = new URL("/images/profile/profile.webp", getSiteUrl()).toString();

  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    applicationName: "Nassim Portfolio",
    authors: [{ name: "Nassim" }],
    creator: "Nassim",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: englishUrl,
        fr: frenchUrl,
        "x-default": englishUrl,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: "Nassim Portfolio",
      locale: validLocale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: validLocale === "fr" ? ["en_US"] : ["fr_FR"],
      images: [{ url: imageUrl, width: 1024, height: 1024, alt: validLocale === "fr" ? "Portrait de Nassim" : "Portrait of Nassim" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Retrieve the messages for the current locale
  const messages = await getMessages();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nassim",
    url: getLocalizedUrl(locale as "en" | "fr"),
    jobTitle: "Next.js and TypeScript Developer",
    description:
      locale === "fr"
        ? "Développeur web freelance Next.js et TypeScript en Algérie."
        : "Freelance Next.js and TypeScript web developer based in Algeria.",
    image: new URL("/images/profile/profile.webp", getSiteUrl()).toString(),
    address: {
      "@type": "PostalAddress",
      addressCountry: "DZ",
    },
  };

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
