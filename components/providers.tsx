"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n";

type AppContext = {
  lang: Lang;
  t: Dictionary;
  toggleLang: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const Context = createContext<AppContext | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "pt" || storedLang === "en") {
      setLang(storedLang);
      document.documentElement.lang = storedLang === "pt" ? "pt-BR" : "en";
    }
    if (localStorage.getItem("theme") === "light") setTheme("light");
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("lang", next);
      document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }, []);

  return (
    <Context.Provider value={{ lang, t: dictionaries[lang], toggleLang, theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
}

export function useApp(): AppContext {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}
