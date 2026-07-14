import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { whyUs } from "@/lib/content";

export function WhyHiveMetric() {
  return (
    <section className="py-24 sm:py-32 border-t border-border bg-elevated/40">
      <Container>
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.heading} description={whyUs.subheading} />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {whyUs.points.map((point, i) => (
            <RevealItem key={point.title} className="bg-background p-8 sm:p-10">
              <span className="text-sm text-gold-500/80 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-medium text-foreground">{point.title}</h3>
              <p className="mt-3 text-sm text-muted sm:text-base">{point.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
