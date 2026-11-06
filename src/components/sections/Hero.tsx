import { ArrowUpRight, Braces, Terminal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <main id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute top-0 right-[12%] h-72 w-px bg-gradient-to-b from-accent/30 to-transparent" />

      <section className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)] lg:px-10 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase text-accent">
            <span className="h-px w-8 bg-accent" />
            {t("availability")}
          </div>

          <h1 className="max-w-4xl text-[clamp(3.25rem,8vw,7rem)] font-semibold leading-[0.87] tracking-[-0.055em] text-foreground">
            {t("title")}
            <span className="block text-accent">{t("titleAccent")}</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg" className="h-12 px-5">
              <Link href="#contact">
                {t("primaryCta")}
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-5">
              <Link href="#projects">{t("secondaryCta")}</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 bg-accent/5 blur-3xl" />
          <div className="relative border border-border bg-card shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
            <div className="flex h-11 items-center justify-between border-b border-border px-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="size-2 rounded-full bg-zinc-700" />
                <span className="size-2 rounded-full bg-zinc-700" />
                <span className="size-2 rounded-full bg-accent" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                portfolio.tsx
              </span>
            </div>

            <div className="grid grid-cols-[3.25rem_1fr] font-mono text-xs leading-7 sm:text-sm sm:leading-8">
              <div className="select-none border-r border-border py-5 pr-3 text-right text-zinc-700">
                {Array.from({ length: 9 }, (_, index) => (
                  <div key={index}>{index + 1}</div>
                ))}
              </div>
              <div className="overflow-hidden py-5 pl-4 sm:pl-6">
                <p>
                  <span className="text-fuchsia-300">type</span>{" "}
                  <span className="text-sky-300">Developer</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-zinc-300">&#123;</span>
                </p>
                <p className="pl-4">
                  stack:{" "}
                  <span className="text-accent">&quot;Next.js&quot;</span>,
                </p>
                <p className="pl-4">
                  language:{" "}
                  <span className="text-accent">&quot;TypeScript&quot;</span>,
                </p>
                <p className="pl-4">
                  focus:{" "}
                  <span className="text-accent">&quot;Web products&quot;</span>,
                </p>
                <p>
                  <span className="text-zinc-300">&#125;</span>
                </p>
                <p className="mt-4 text-zinc-500">
                  {"// built for the real world"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Terminal className="size-3.5 text-accent" />
                <span>ready</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Braces className="size-3.5" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 -bottom-5 hidden items-center gap-2 border border-accent/40 bg-background px-3 py-2 font-mono text-[11px] text-accent shadow-xl sm:flex">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            build: successful
          </div>
        </div>
      </section>
    </main>
  );
}
