"use client";

import { useApp } from "@/components/providers";
import { MoonIcon, SunIcon } from "@/components/icons";

export function Header() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-edge/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-mono text-lg font-bold text-accent" aria-label="Samuel Baldasso — home">
          SB<span className="text-heading">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-body transition-colors hover:text-accent focus-visible:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="rounded-md border border-edge px-2.5 py-1.5 font-mono text-xs font-semibold text-body transition-colors hover:border-accent hover:text-accent"
            aria-label={lang === "en" ? "Mudar idioma para português" : "Switch language to English"}
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md border border-edge p-1.5 text-body transition-colors hover:border-accent hover:text-accent"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
