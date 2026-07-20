"use client";

import { useApp } from "@/components/providers";
import { Section } from "@/components/section";

export function Skills() {
  const { t } = useApp();

  return (
    <Section id="skills" heading={t.skills.heading} index="04.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div key={group.title} className="rounded-lg border border-edge bg-surface p-5">
            <h3 className="mb-3 font-mono text-sm font-semibold text-accent">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-edge px-3 py-1 text-xs font-medium text-heading"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
