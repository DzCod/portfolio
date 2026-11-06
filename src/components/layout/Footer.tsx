import { getTranslations } from "next-intl/server";
import { SocialLinks } from "@/components/SocialLinks";

const name = "Nassim";
const email = "zighedmohamednassim@gmail.com";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-7 py-10 sm:py-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="text-base font-medium text-foreground">{name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t("statement")}</p>
          </div>

          <nav aria-label={t("linksLabel")} className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={`mailto:${email}`}
              aria-label={t("emailAriaLabel")}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              {t("email")}
            </a>
            <SocialLinks
              githubLabel={t("github")}
              linkedinLabel={t("linkedin")}
              linkClassName="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            />
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/70 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright", { year, name })}</p>
          <p>{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
