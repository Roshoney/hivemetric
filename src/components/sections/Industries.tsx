import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { industries, sectionContent } from "@/lib/content";

export function Industries() {
  const { eyebrow, title, description } = sectionContent.industries;

  return (
    <section className="py-24 sm:py-32 border-t border-border bg-elevated/40">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <RevealItem
              key={industry.title}
              className="rounded-2xl border border-border bg-background p-7 transition-colors hover:border-gold-500/40"
            >
              <h3 className="text-lg font-medium text-foreground">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted">{industry.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
