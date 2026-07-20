"use client";

import { useApp } from "@/components/providers";
import { Section } from "@/components/section";
import { ExternalLinkIcon, GitHubIcon, StarIcon } from "@/components/icons";
import { links } from "@/lib/i18n";
import type { Repo } from "@/lib/github";

const MAX_REPOS = 9;

function ProjectCard({ repo, featured, featuredLabel }: { repo: Repo; featured: boolean; featuredLabel: string }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-lg border border-edge bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 ${
        featured ? "sm:col-span-1" : ""
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <GitHubIcon className="h-6 w-6 text-body/70" />
        <div className="flex items-center gap-3">
          {featured && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
              {featuredLabel}
            </span>
          )}
          <ExternalLinkIcon className="h-4 w-4 text-body/60 transition-colors group-hover:text-accent" />
        </div>
      </div>
      <h3 className="text-base font-semibold text-heading transition-colors group-hover:text-accent">
        {repo.name}
      </h3>
      <p className={`mt-2 flex-1 text-sm leading-relaxed ${featured ? "" : "line-clamp-3"}`}>{repo.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-body/80">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" aria-hidden="true" />
            {repo.language}
          </span>
        )}
        {repo.stars > 0 && (
          <span className="flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5" />
            {repo.stars}
          </span>
        )}
        {repo.topics.map((topic) => (
          <span key={topic} className="text-accent/80">
            #{topic}
          </span>
        ))}
      </div>
    </a>
  );
}

export function Projects({ repos }: { repos: Repo[] | null }) {
  const { t } = useApp();

  // Curated cards from the dictionary, upgraded with live API data (real repo
  // URL, stars, language, topics) whenever the matching repo was found.
  const featured: Repo[] = t.projects.featured.map((p, i) => {
    const api = repos?.find((r) => r.featuredIndex === i);
    return {
      name: p.name,
      description: api?.description || p.description,
      language: api?.language ?? p.language,
      stars: api?.stars ?? 0,
      topics: api?.topics.length ? api.topics : p.tags.map((tag) => tag.toLowerCase().replace(/\s+/g, "-")),
      url: api?.url ?? p.url,
      featuredIndex: i,
    };
  });

  const others = repos?.filter((r) => r.featuredIndex === -1).slice(0, MAX_REPOS) ?? [];

  return (
    <Section id="projects" heading={t.projects.heading} index="03.">
      {repos === null && (
        <p className="mb-6 rounded-md border border-edge bg-surface px-4 py-3 text-sm" role="status">
          {t.projects.apiError}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((repo) => (
          <ProjectCard key={repo.url + repo.name} repo={repo} featured featuredLabel={t.projects.featuredLabel} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((repo) => (
            <ProjectCard key={repo.url} repo={repo} featured={false} featuredLabel={t.projects.featuredLabel} />
          ))}
        </div>
      )}

      <p className="mt-8">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          {t.projects.viewOnGithub} <ExternalLinkIcon />
        </a>
      </p>
    </Section>
  );
}
