"use client";

import { Check, Copy, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";

interface ContactActionsProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  sendLabel: string;
  subjectPrefix: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  githubLabel: string;
  linkedinLabel: string;
  socialLabel: string;
}

export function ContactActions({
  email,
  copyLabel,
  copiedLabel,
  sendLabel,
  subjectPrefix,
  nameLabel,
  emailLabel,
  messageLabel,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  githubLabel,
  linkedinLabel,
  socialLabel,
}: ContactActionsProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`${subjectPrefix} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${senderEmail}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <div className="mt-8 flex items-center gap-3 border-y border-border py-4">
        <span className="min-w-0 flex-1 truncate font-mono text-sm text-foreground sm:text-base">{email}</span>
        <Button type="button" variant="outline" size="sm" onClick={copyEmail} aria-label={copied ? copiedLabel : copyLabel}>
          {copied ? <Check className="text-accent" /> : <Copy />}
          <span className="hidden sm:inline">{copied ? copiedLabel : copyLabel}</span>
        </Button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <span className="font-mono text-[10px] uppercase text-muted-foreground">{socialLabel}</span>
        <SocialLinks
          githubLabel={githubLabel}
          linkedinLabel={linkedinLabel}
          className="gap-5"
          linkClassName="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>

      <form className="mt-8 grid gap-5" onSubmit={sendMessage}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-xs uppercase text-muted-foreground">
            {nameLabel}
            <input
              name="name"
              required
              autoComplete="name"
              placeholder={namePlaceholder}
              className="h-11 border border-border bg-background px-3 text-sm normal-case text-foreground outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
            />
          </label>
          <label className="grid gap-2 text-xs uppercase text-muted-foreground">
            {emailLabel}
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={emailPlaceholder}
              className="h-11 border border-border bg-background px-3 text-sm normal-case text-foreground outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
            />
          </label>
        </div>
        <label className="grid gap-2 text-xs uppercase text-muted-foreground">
          {messageLabel}
          <textarea
            name="message"
            required
            rows={5}
            placeholder={messagePlaceholder}
            className="resize-y border border-border bg-background px-3 py-3 text-sm normal-case leading-6 text-foreground outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
          />
        </label>
        <Button type="submit" variant="accent" size="lg" className="h-12 justify-self-start px-5">
          {sendLabel}
          <Send />
        </Button>
      </form>
    </>
  );
}
