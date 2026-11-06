import { ArrowDownRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactActions } from "@/components/sections/ContactActions";

const email = "zighedmohamednassim@gmail.com";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section
      id="contact"
      className="relative scroll-mt-18 overflow-hidden border-t border-border/70"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute right-[8%] bottom-0 h-[70%] w-px bg-gradient-to-t from-accent/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <header className="grid gap-7 border-b border-border pb-10 lg:grid-cols-[12rem_minmax(0,1fr)_22rem] lg:items-end">
          <p className="font-mono text-xs uppercase text-accent lg:self-start lg:pt-3">
            {t("label")}
          </p>
          <h2
            id="contact-heading"
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-foreground"
          >
            {t("heading")}
            <span className="text-accent">{t("headingAccent")}</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:pb-1">
            {t("introduction")}
          </p>
        </header>

        <div className="grid gap-14 pt-10 sm:pt-14 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <aside>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
              <span className="size-2 bg-accent" aria-hidden="true" />
              {t("availability")}
            </div>
            <p className="mt-7 max-w-md text-xl leading-8 text-foreground">
              {t("invitation")}
            </p>
            <div className="mt-10 border-l border-accent/50 pl-5">
              <p className="font-mono text-[10px] uppercase text-zinc-600">{t("responseLabel")}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("response")}</p>
            </div>
            <ArrowDownRight className="mt-12 hidden size-20 text-accent/25 lg:block" strokeWidth={1} aria-hidden="true" />
          </aside>

          <div>
            <p className="font-mono text-[10px] uppercase text-muted-foreground">{t("emailLabel")}</p>
            <ContactActions
              email={email}
              copyLabel={t("copy")}
              copiedLabel={t("copied")}
              sendLabel={t("send")}
              subjectPrefix={t("subjectPrefix")}
              nameLabel={t("form.name")}
              emailLabel={t("form.email")}
              messageLabel={t("form.message")}
              namePlaceholder={t("form.namePlaceholder")}
              emailPlaceholder={t("form.emailPlaceholder")}
              messagePlaceholder={t("form.messagePlaceholder")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
