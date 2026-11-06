import { Braces, Database, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";

const categories = [
  {
    key: "frontend",
    icon: Braces,
    number: "01",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive UI",
    ],
  },
  {
    key: "backend",
    icon: Database,
    number: "02",
    skills: [
      "MongoDB",
      "REST APIs",
      "Next.js Server",
      "Shopify",
      "Custom integrations",
      "OMS workflows",
    ],
  },
  {
    key: "workflow",
    icon: Wrench,
    number: "03",
    skills: [
      "Git",
      "npm",
      "App Router",
      "Next-intl",
      "Server Components",
      "Maintainable code",
    ],
  },
];

export async function Skills() {
  const t = await getTranslations("Skills");

  return (
    <section
      id="skills"
      className="relative scroll-mt-18 border-t border-border/70 bg-[#0d0d0d]"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <header className="grid gap-7 border-b border-border pb-10 lg:grid-cols-[12rem_minmax(0,1fr)_22rem] lg:items-end">
          <p className="font-mono text-xs uppercase text-accent lg:self-start lg:pt-3">
            {t("label")}
          </p>
          <h2
            id="skills-heading"
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-foreground"
          >
            {t("heading")}
          </h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:pb-1">
            {t("introduction")}
          </p>
        </header>

        <div className="mt-10 border-t border-border sm:mt-14">
          {categories.map(({ key, icon: Icon, number, skills }, index) => (
            <article
              key={key}
              className={`group grid border-b border-border py-8 transition-colors duration-300 hover:bg-card/40 sm:py-10 lg:grid-cols-[7rem_4rem_minmax(13rem,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-8 lg:py-12 ${
                index === 1 ? "lg:px-8" : ""
              }`}
            >
              <div className="mb-6 flex items-center justify-between lg:mb-0">
                <span className="font-mono text-xs text-accent">{number}</span>
                <span className="hidden font-mono text-[10px] uppercase text-zinc-600 lg:block">
                  {t(`${key}.code`)}
                </span>
              </div>

              <span className="hidden size-12 place-items-center border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent lg:grid">
                <Icon className="size-5" aria-hidden="true" />
              </span>

              <div>
                <div className="flex items-center gap-3 lg:block">
                  <span className="grid size-10 place-items-center border border-border bg-background text-muted-foreground lg:hidden">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {t(`${key}.title`)}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </div>

              <ul className="mt-7 grid gap-x-5 gap-y-0 border-t border-border sm:grid-cols-2 lg:mt-0">
                {skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex min-h-12 items-center gap-3 border-b border-border text-sm text-foreground/80"
                  >
                    <span
                      className="font-mono text-[9px] text-accent/80"
                      aria-hidden="true"
                    >
                      {String(skillIndex + 1).padStart(2, "0")}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
