// Renders strings from the dictionaries where metrics are wrapped in **…**,
// highlighting them in accent-colored mono type.
export function MetricText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-mono text-sm font-semibold text-accent">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
