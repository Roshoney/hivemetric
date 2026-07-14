export function SampleBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-900/20 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-gold-400 ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-gold-500" />
      Illustrative example
    </span>
  );
}
