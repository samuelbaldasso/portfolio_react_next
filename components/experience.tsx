"use client";

import { useApp } from "@/components/providers";
import { Section } from "@/components/section";
import { MetricText } from "@/components/metric-text";

export function Experience() {
  const { t } = useApp();

  return (
    <Section id="experience" heading={t.experience.heading} index="02.">
      <ol className="relative ml-2 space-y-10 border-l border-edge pl-8">
        {t.experience.items.map((item) => (
          <li key={item.company} className="relative">
            <span
              className="absolute -left-[38.5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-heading">{item.company}</h3>
              <span className="font-mono text-xs text-accent">{item.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-body/90">{item.role}</p>
            <ul className="mt-3 space-y-2">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    ▸
                  </span>
                  <span>
                    <MetricText text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
