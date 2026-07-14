import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { results, sectionContent } from "@/lib/content";

export function ResultsMetrics() {
  const { eyebrow, title, description } = sectionContent.resultsMetrics;

  return (
    <section id="results" className="py-24 sm:py-32 border-t border-border bg-elevated/40">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <RevealGroup className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {results.map((stat) => (
            <RevealItem
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-background px-4 py-10 text-center"
            >
              <span className="text-4xl font-semibold text-gradient-gold sm:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
