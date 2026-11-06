import { Braces, Gauge, Layers3, Users } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const principles = [
  { key: "product", icon: Layers3, number: "01" },
  { key: "architecture", icon: Braces, number: "02" },
  { key: "experience", icon: Users, number: "03" },
  { key: "performance", icon: Gauge, number: "04" },
];

export async function About() {
  const t = await getTranslations("About");

  return (
    <section
      id="about"
      className="relative scroll-mt-18 border-t border-border/70 bg-[#0d0d0d]"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mb-14 grid gap-6 border-b border-border pb-10 md:grid-cols-[12rem_1fr] md:items-end lg:mb-20">
          <p className="font-mono text-xs uppercase text-accent">
            {t("label")}
          </p>
          <h2
            id="about-heading"
            className="max-w-4xl text-[clamp(2.8rem,7vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-foreground"
          >
            {t("heading")}
            <span className="text-accent"> {t("headingAccent")}</span>
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-20">
          <div className="lg:pt-3">
            <p className="max-w-2xl text-xl leading-[1.55] text-foreground sm:text-2xl sm:leading-[1.45]">
              {t("introduction")}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-start">
              <figure className="relative aspect-square w-full max-w-44 overflow-hidden border border-border bg-card sm:max-w-none">
                <Image
                  src="/images/profile/profile.webp"
                  alt={t("profileAlt")}
                  fill
                  sizes="(max-width: 640px) 176px, 176px"
                  className="object-cover object-top"
                  priority={false}
                />
              </figure>
              <div className="grid gap-6 border-l border-accent/50 pl-5 sm:grid-cols-2 sm:border-l-0 sm:pl-0">
                <p className="text-sm leading-7 text-muted-foreground sm:border-l sm:border-accent/50 sm:pl-5">
                  {t("approach")}
                </p>
                <p className="text-sm leading-7 text-muted-foreground sm:border-l sm:border-border sm:pl-5">
                  {t("craft")}
                </p>
              </div>
            </div>
          </div>

          <div className="border-y border-border">
            <div className="grid grid-cols-[1fr_auto] border-b border-border py-3 font-mono text-[10px] uppercase text-muted-foreground sm:text-xs">
              <span>{t("principlesTitle")}</span>
              <span>{t("principlesCount")}</span>
            </div>
            {principles.map(({ key, icon: Icon, number }) => (
              <article
                key={key}
                className="group grid grid-cols-[2.75rem_2.75rem_1fr] items-start gap-3 border-b border-border py-5 last:border-b-0 sm:grid-cols-[3rem_3rem_1fr] sm:gap-4 sm:py-6"
              >
                <span className="pt-1 font-mono text-[11px] text-zinc-600 transition-colors group-hover:text-accent">
                  {number}
                </span>
                <span className="grid size-11 place-items-center border border-border bg-card text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {t(`principles.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm leading-6 text-muted-foreground">
                    {t(`principles.${key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
