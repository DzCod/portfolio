"use client";

import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavigationProps {
  locale: string;
  items: Array<{ label: string; href: string }>;
  openLabel: string;
  navigationLabel: string;
  languageLabel: string;
  languages: Array<{ locale: string; label: string }>;
}

export function MobileNavigation({
  locale,
  items,
  openLabel,
  navigationLabel,
  languageLabel,
  languages,
}: MobileNavigationProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={openLabel}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(88vw,22rem)] px-6 py-8">
        <SheetHeader className="p-0">
          <SheetTitle className="text-left font-mono text-sm uppercase text-accent">
            {navigationLabel}
          </SheetTitle>
        </SheetHeader>

        <nav aria-label={navigationLabel} className="mt-10 flex flex-col">
          {items.map((item) => (
            <SheetTrigger asChild key={item.href}>
              <Link
                href={item.href}
                className="border-b border-border py-4 text-2xl font-medium text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </SheetTrigger>
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-6">
          <p className="mb-3 text-xs uppercase text-muted-foreground">
            {languageLabel}
          </p>
          <div className="flex gap-2">
            {languages.map((language) => (
              <Button
                key={language.locale}
                asChild
                variant={locale === language.locale ? "accent" : "outline"}
                size="sm"
              >
                <Link href="/" locale={language.locale}>
                  {language.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
