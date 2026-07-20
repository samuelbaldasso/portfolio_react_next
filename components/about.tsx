"use client";

import { useApp } from "@/components/providers";
import { Section } from "@/components/section";
import { MetricText } from "@/components/metric-text";

export function About() {
  const { t } = useApp();

  return (
    <Section id="about" heading={t.about.heading} index="01.">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>
            <MetricText text={p} />
          </p>
        ))}
      </div>
    </Section>
  );
}
