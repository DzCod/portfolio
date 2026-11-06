import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations("Navigation");
  const localeT = await getTranslations("LocaleSwitcher");
  const items = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ];
  const languages = [
    { locale: "en", label: localeT("shortEn") },
    { locale: "fr", label: localeT("shortFr") },
  ];

  return (
    <header className="relative z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={t("brandAriaLabel")}
        >
          <span className="grid size-8 place-items-center border border-accent bg-accent text-xs font-semibold text-accent-foreground">
            /&gt;
          </span>
          <span className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-foreground">
            {t("brand")}
          </span>
        </Link>

        <nav
          aria-label={t("navigationLabel")}
          className="hidden items-center gap-7 lg:flex"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="hidden items-center gap-1 lg:flex"
          aria-label={localeT("label")}
        >
          {["en", "fr"].map((language) => (
            <Link
              key={language}
              href="/"
              locale={language}
              aria-current={locale === language ? "page" : undefined}
              className={`px-2 py-1 font-mono text-xs transition-colors ${
                locale === language
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {localeT(language === "en" ? "shortEn" : "shortFr")}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <MobileNavigation
            locale={locale}
            items={items}
            openLabel={t("openMenu")}
            navigationLabel={t("navigationLabel")}
            languageLabel={localeT("label")}
            languages={languages}
          />
        </div>
      </div>
    </header>
  );
}
