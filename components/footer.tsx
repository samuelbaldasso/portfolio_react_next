"use client";

import { useApp } from "@/components/providers";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-edge/60 py-8">
      <div className="mx-auto max-w-content px-6 text-center font-mono text-xs text-body/70 md:px-10">
        <p>
          © {new Date().getFullYear()} Samuel Baldasso · {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
