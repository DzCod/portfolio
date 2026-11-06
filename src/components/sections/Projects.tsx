import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { getTranslations } from "next-intl/server";

const ecomixTechnologies = ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"];

const technicalProjects = [
  {
    key: "foodOrdering",
    name: "Food Ordering",
    features: ["cart", "authentication", "database"],
    technologies: ["Next.js", "Redux Toolkit", "NextAuth", "MongoDB", "Prisma"],
  },
  {
    key: "gamingShop",
    name: "Gaming Shop",
    features: ["cart", "checkout", "authentication", "protectedRoutes"],
    technologies: ["Next.js", "Redux Toolkit", "NextAuth", "MongoDB", "React Hook Form", "Zod"],
  },
  {
    key: "posNajm",
    name: "POS Najm",
    features: ["authentication", "orders", "dashboard", "pdf"],
    technologies: ["Next.js", "NextAuth", "MongoDB", "Mongoose", "React PDF"],
  },
] as const;

export async function Projects() {
  const t = await getTranslations("Projects");

  return (
    <section
      id="projects"
      className="relative scroll-mt-18 border-t border-border/70 bg-[#0d0d0d]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <header className="grid gap-7 border-b border-border pb-10 lg:grid-cols-[12rem_minmax(0,1fr)_22rem] lg:items-end">
          <p className="font-mono text-xs uppercase text-accent lg:self-start lg:pt-3">
            {t("label")}
          </p>
          <h2
            id="projects-heading"
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-foreground"
          >
            {t("heading")}
          </h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:pb-1">
            {t("introduction")}
          </p>
        </header>

        <article className="group mt-10 border-b border-border pb-10 sm:mt-14 sm:pb-14">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1.18fr)] lg:items-end lg:gap-12">
            <div className="lg:pb-2">
              <div className="mb-7 flex items-center justify-between font-mono text-[11px] uppercase">
                <span className="text-accent">{t("ecomix.number")}</span>
                <span className="text-muted-foreground">
                  {t("ecomix.category")}
                </span>
              </div>
              <h3 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Ecomix
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                {t("ecomix.description")}
              </p>
              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label={t("technologyLabel")}
              >
                {ecomixTechnologies.map((technology) => (
                  <li
                    key={technology}
                    className="border border-border px-3 py-1.5 font-mono text-[11px] text-foreground/75"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3" aria-label={t("ecomix.visualLabel")}>
              <figure className="group/image relative aspect-video overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-accent/50">
                <Image
                  src="/images/projects/ecomix/dashboard.webp"
                  alt={t("ecomix.screenshots.dashboardAlt")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-contain transition-transform duration-500 group-hover/image:scale-[1.01]"
                  priority
                />
              </figure>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { src: "/images/projects/ecomix/shipping-companies.webp", alt: t("ecomix.screenshots.shippingAlt") },
                  { src: "/images/projects/ecomix/landing-page.webp", alt: t("ecomix.screenshots.landingAlt") },
                ].map((screenshot) => (
                  <figure key={screenshot.src} className="group/image relative aspect-video overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-accent/50">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                      className="object-contain transition-transform duration-500 group-hover/image:scale-[1.01]"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="group mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[minmax(21rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
          <div
            className="relative min-h-[20rem] overflow-hidden border border-border bg-card sm:min-h-[24rem]"
            aria-label={t("najmcoiff.visualLabel")}
          >
            <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-border px-4 font-mono text-[10px] text-muted-foreground">
              <span>NAJMCOIFF</span>
              <span className="text-accent">
                SHOPIFY / {t("najmcoiff.customLabel")}
              </span>
            </div>
            <div className="absolute inset-x-5 top-16 bottom-5 grid grid-cols-[1fr_0.72fr] gap-3 sm:inset-x-8 sm:top-20 sm:gap-4">
              <div className="border border-border bg-background p-4 sm:p-5">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">
                  {t("najmcoiff.orderFormLabel")}
                </p>
                {[0, 1, 2].map((line) => (
                  <div key={line} className="mt-5 border-b border-border pb-2">
                    <div
                      className={`h-1.5 bg-zinc-700 ${line === 1 ? "w-2/3" : "w-full"}`}
                    />
                  </div>
                ))}
                <div className="mt-5 h-8 border border-accent/50 bg-accent-muted" />
              </div>
              <div className="border border-border bg-background p-4 sm:p-5">
                <ShoppingBag
                  className="size-5 text-accent"
                  aria-hidden="true"
                />
                <p className="mt-8 font-mono text-[10px] uppercase text-muted-foreground">
                  {t("najmcoiff.cartLabel")}
                </p>
                <div className="mt-5 h-px bg-border" />
                <div className="mt-5 flex gap-2">
                  <div className="size-9 border border-border bg-card" />
                  <div className="flex-1 pt-1">
                    <div className="h-1.5 w-full bg-zinc-700" />
                    <div className="mt-2 h-1.5 w-1/2 bg-zinc-800" />
                  </div>
                </div>
                <div className="mt-7 border-t border-border pt-3 font-mono text-[9px] text-accent">
                  {t("najmcoiff.checkoutLabel")}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-7 flex items-center justify-between font-mono text-[11px] uppercase">
              <span className="text-accent">{t("najmcoiff.number")}</span>
              <span className="text-muted-foreground">
                {t("najmcoiff.category")}
              </span>
            </div>
            <h3 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Najmcoiff
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {t("najmcoiff.description")}
            </p>
            <ul
              className="mt-7 border-t border-border"
              aria-label={t("contributionsLabel")}
            >
              {["website", "orderForm", "cart"].map((contribution, index) => (
                <li
                  key={contribution}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-4 text-sm text-foreground/80"
                >
                  <span className="font-mono text-[10px] text-zinc-600">
                    0{index + 1}
                  </span>
                  {t(`najmcoiff.features.${contribution}`)}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <section className="mt-20 border-t border-border pt-10 sm:mt-24 sm:pt-14" aria-labelledby="technical-projects-heading">
          <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:items-end">
            <p className="font-mono text-xs uppercase text-accent">{t("technical.label")}</p>
            <div>
              <h3 id="technical-projects-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t("technical.heading")}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                {t("technical.introduction")}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-border">
            {technicalProjects.map((project, index) => (
              <article key={project.key} className="group grid gap-6 border-b border-border py-8 md:grid-cols-[5rem_minmax(14rem,0.8fr)_minmax(0,1.2fr)] md:gap-8 md:py-10">
                <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">{t("technical.status")}</p>
                  <h4 className="mt-3 text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                    {project.name}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{t(`technical.projects.${project.key}.description`)}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">{t("technical.featuresLabel")}</p>
                    <ul className="mt-3 space-y-2" aria-label={t("technical.featuresLabel")}> 
                      {project.features.map((feature, featureIndex) => (
                        <li key={feature} className="flex gap-3 text-sm text-foreground/80">
                          <span className="font-mono text-[10px] text-zinc-600">{String(featureIndex + 1).padStart(2, "0")}</span>
                          {t(`technical.projects.${project.key}.features.${feature}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">{t("technologyLabel")}</p>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={t("technologyLabel")}> 
                      {project.technologies.map((technology) => (
                        <li key={technology} className="border border-border px-2.5 py-1.5 font-mono text-[10px] text-foreground/75">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
