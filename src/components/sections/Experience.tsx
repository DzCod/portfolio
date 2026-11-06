import { Code2, Layers3 } from "lucide-react";
import { getTranslations } from "next-intl/server";

const experience = [
  {
    key: "najmcoiff",
    icon: Layers3,
    number: "01",
    technologies: [],
  },
  {
    key: "ecomix",
    icon: Code2,
    number: "02",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
  },
];

export async function Experience() {
  const t = await getTranslations("Experience");

  return (
    <section
      id="experience"
      className="relative scroll-mt-18 border-t border-border/70"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <header className="grid gap-7 border-b border-border pb-10 lg:grid-cols-[12rem_minmax(0,1fr)_22rem] lg:items-end">
          <p className="font-mono text-xs uppercase text-accent lg:self-start lg:pt-3">
            {t("label")}
          </p>
          <h2
            id="experience-heading"
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-foreground"
          >
            {t("heading")}
          </h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:pb-1">
            {t("introduction")}
          </p>
        </header>

        <div className="mt-10 sm:mt-14">
          {experience.map(
            ({ key, icon: Icon, number, technologies }, index) => (
              <article
                key={key}
                className={`group grid gap-6 border-b border-border py-10 first:border-t sm:py-12 lg:grid-cols-[10rem_5rem_minmax(0,1fr)_18rem] lg:gap-8 lg:py-14 ${
                  index === 1 ? "bg-card px-5 sm:px-7 lg:-mx-2 lg:px-9" : ""
                }`}
              >
                <div className="flex items-start justify-between lg:block">
                  <p className="font-mono text-xs text-accent">{number}</p>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground lg:mt-12">
                    {t(`${key}.status`)}
                  </p>
                </div>

                <div className="relative flex items-start">
                  <span className="grid size-12 place-items-center border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent lg:size-14">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className="absolute top-14 bottom-[-3.5rem] left-6 hidden w-px bg-border lg:block"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">
                    {t(`${key}.role`)}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {t(`${key}.company`)}
                  </h3>
                  <ul className="mt-7 space-y-3.5">
                    {[
                      "0",
                      "1",
                      "2",
                      ...(key === "najmcoiff" ? ["3"] : ["3", "4"]),
                    ].map((item) => (
                      <li
                        key={item}
                        className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span
                          className="mt-[0.55rem] size-1.5 bg-accent/70"
                          aria-hidden="true"
                        />
                        <span>{t(`${key}.responsibilities.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
                  <p className="font-mono text-[10px] uppercase text-zinc-600">
                    {t("technologyLabel")}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.length > 0 ? (
                      technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-border px-3 py-1.5 font-mono text-[10px] text-foreground/75"
                        >
                          {technology}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {t(`${key}.technologyNote`)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
