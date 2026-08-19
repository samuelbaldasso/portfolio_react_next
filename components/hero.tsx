"use client";

import Image from "next/image";
import { useApp } from "@/components/providers";
import { MetricText } from "@/components/metric-text";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { links } from "@/lib/i18n";

export function Hero() {
  const { t } = useApp();

  return (
    <section
      id="top"
      className="flex min-h-[calc(100vh-4rem)] flex-col-reverse items-center gap-10 py-20 md:flex-row md:justify-between"
    >
      <div className="max-w-2xl">
        <p className="mb-4 font-mono text-accent">{t.hero.greeting}</p>
        <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-6xl">Samuel Baldasso</h1>
        <p className="mt-3 text-xl font-medium text-body sm:text-2xl">{t.hero.title}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          <MetricText text={t.hero.tagline} />
        </p>
        <p className="mt-3 font-mono text-sm text-body/80">{t.hero.location}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
          >
            <GitHubIcon className="h-4 w-4" />
            {t.hero.ctaGithub}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-edge px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            {t.hero.ctaLinkedin}
          </a>
          <a
            href={links.resume}
            download
            className="inline-flex items-center gap-2 rounded-md border border-edge px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon />
            {t.hero.ctaResume}
          </a>
        </div>
      </div>

      <Image
        src="/profile.jpg"
        alt="Samuel Baldasso"
        width={220}
        height={220}
        priority
        className="h-40 w-40 shrink-0 rounded-full border-2 border-accent/40 object-cover sm:h-52 sm:w-52 md:h-56 md:w-56"
      />
    </section>
  );
}
