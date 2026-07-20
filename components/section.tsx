import { Reveal } from "@/components/reveal";

export function Section({
  id,
  heading,
  index,
  children,
}: {
  id: string;
  heading: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-label={heading} className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-heading">
          <span className="font-mono text-base font-medium text-accent" aria-hidden="true">
            {index}
          </span>
          {heading}
          <span className="ml-2 hidden h-px flex-1 max-w-xs bg-edge sm:block" aria-hidden="true" />
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
