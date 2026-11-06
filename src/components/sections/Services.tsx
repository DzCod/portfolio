import { Blocks, Building2, PanelsTopLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

const services = [
  { key: "landing", icon: PanelsTopLeft, number: "01", features: [0, 1, 2, 3] },
  { key: "business", icon: Building2, number: "02", features: [0, 1, 2, 3] },
  { key: "application", icon: Blocks, number: "03", features: [0, 1, 2, 3] },
];

export async function Services() {
  const t = await getTranslations("Services");

  return (
    <section
      id="services"
      className="relative scroll-mt-18 overflow-hidden border-t border-border/70"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute top-0 right-[18%] h-full w-px bg-gradient-to-b from-accent/20 via-border/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <header className="grid gap-7 border-b border-border pb-10 lg:grid-cols-[12rem_minmax(0,1fr)_22rem] lg:items-end">
          <p className="font-mono text-xs uppercase text-accent lg:self-start lg:pt-3">
            {t("label")}
          </p>
          <h2
            id="services-heading"
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-foreground"
          >
            {t("heading")}{" "}
            <span className="text-accent">{t("headingAccent")}</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:pb-1">
            {t("introduction")}
          </p>
        </header>

        <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
          {services.map(({ key, icon: Icon, number, features }, index) => (
            <article
              key={key}
              className={`group relative border border-border bg-card transition-colors duration-300 hover:border-accent/45 ${
                index === 1
                  ? "ml-auto lg:w-[92%]"
                  : index === 2
                    ? "mr-auto lg:w-[96%]"
                    : "lg:w-[88%]"
              }`}
            >
              <div className="grid md:grid-cols-[10rem_1fr]">
                <div className="flex min-h-28 items-center justify-between border-b border-border p-5 md:min-h-full md:flex-col md:border-r md:border-b-0 md:p-6">
                  <span className="font-mono text-xs text-accent">
                    {number}
                  </span>
                  <span className="grid size-12 place-items-center border border-border bg-background text-muted-foreground transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent md:size-14">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12 lg:p-8">
                  <div>
                    <p className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">
                      {t(`services.${key}.scope`)}
                    </p>
                    <h3 className="max-w-xl text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                      {t(`services.${key}.title`)}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                      {t(`services.${key}.description`)}
                    </p>
                  </div>

                  <div className="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
                    <p className="mb-3 font-mono text-[10px] uppercase text-zinc-600">
                      {t("capabilitiesLabel")}
                    </p>
                    <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                      {features.map((featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-foreground/80"
                        >
                          <span
                            className="size-1.5 shrink-0 bg-accent"
                            aria-hidden="true"
                          />
                          {t(`services.${key}.features.${featureIndex}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
