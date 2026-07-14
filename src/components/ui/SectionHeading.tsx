import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-500">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted text-balance">{description}</p>
      )}
    </Reveal>
  );
}
