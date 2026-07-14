import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { founder, sectionContent } from "@/lib/content";

export function FounderSection() {
  const { label } = sectionContent.founder;

  return (
    <section id="founder" className="py-24 sm:py-32 border-t border-border bg-elevated/40">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <Reveal className="flex flex-col items-center gap-5 lg:items-start">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border-strong bg-elevated-2">
            {founder.photo ? (
              <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl font-medium text-gold-500">
                {founder.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="text-center lg:text-left">
            <p className="text-base font-medium text-foreground">{founder.name}</p>
            <p className="text-sm text-muted">{founder.role}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="right" className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
            {label}
          </span>
          <blockquote className="font-display text-2xl font-medium text-balance text-foreground sm:text-3xl">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>
          <p className="text-base text-muted sm:text-lg">{founder.bio}</p>
          <ul className="mt-2 flex flex-col gap-2">
            {founder.credentials.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-muted-2">
                <span className="h-1 w-1 rounded-full bg-gold-500" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
