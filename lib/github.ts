export type Repo = {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  topics: string[];
  url: string;
  /** Index into the featured list (0-based), or -1 for regular repos. */
  featuredIndex: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  html_url: string;
  fork: boolean;
  updated_at: string;
};

const REPOS_URL = "https://api.github.com/users/samuelbaldasso/repos?sort=updated&per_page=100";

// Substrings that identify the two pinned/featured repos, in display order.
const FEATURED_MATCHERS: string[][] = [
  ["banking", "ledger"],
  ["subscription"],
];

function featuredIndex(name: string): number {
  const lower = name.toLowerCase();
  return FEATURED_MATCHERS.findIndex((words) => words.some((w) => lower.includes(w)));
}

export function formatRepoName(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Fetches public repos at build/revalidate time (ISR, 1h). Returns null on any
 * failure (network, rate limit) so the UI can fall back to static featured cards.
 */
export async function getRepos(): Promise<Repo[] | null> {
  try {
    const res = await fetch(REPOS_URL, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const data: GitHubRepo[] = await res.json();
    return data
      // Featured repos stay even without a description — the UI enriches them
      // with the curated copy from the dictionaries.
      .filter((r) => !r.fork && (r.description || featuredIndex(r.name) !== -1))
      .sort((a, b) => {
        const ai = featuredIndex(a.name);
        const bi = featuredIndex(b.name);
        const rank = (ai === -1 ? FEATURED_MATCHERS.length : ai) - (bi === -1 ? FEATURED_MATCHERS.length : bi);
        if (rank !== 0) return rank;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .map((r) => ({
        name: formatRepoName(r.name),
        description: r.description ?? "",
        language: r.language,
        stars: r.stargazers_count,
        topics: (r.topics ?? []).slice(0, 5),
        url: r.html_url,
        featuredIndex: featuredIndex(r.name),
      }));
  } catch {
    return null;
  }
}
