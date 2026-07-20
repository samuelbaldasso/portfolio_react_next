"use client";

import { useState } from "react";
import { useApp } from "@/components/providers";
import { Section } from "@/components/section";
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { links } from "@/lib/i18n";

export function Contact() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  }

  return (
    <Section id="contact" heading={t.contact.heading} index="05.">
      <div className="max-w-xl">
        <p className="leading-relaxed">{t.contact.blurb}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${links.email}`}
            className="rounded-md border border-accent/50 bg-accent/10 px-4 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
            aria-label={t.contact.emailLabel}
          >
            {links.email}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-edge px-3 py-2.5 text-sm text-body transition-colors hover:border-accent hover:text-accent"
            aria-live="polite"
          >
            {copied ? <CheckIcon className="h-4 w-4 text-accent" /> : <CopyIcon />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
        </div>

        <div className="mt-6 flex items-center gap-5">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-body transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-body transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
}
