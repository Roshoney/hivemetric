import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { process, sectionContent } from "@/lib/content";

export function Process() {
  const { eyebrow, title, description } = sectionContent.process;

  return (
    <section id="process" className="py-24 sm:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {process.map((step, i) => (
            <RevealItem
              key={step.step}
              className={`relative flex flex-col gap-3 py-8 pr-6 ${
                i !== process.length - 1 ? "lg:border-r lg:border-border" : ""
              } ${i !== 0 ? "border-t border-border lg:border-t-0" : ""}`}
            >
              <span className="text-3xl font-semibold text-gold-500/70 font-mono">
                {step.step}
              </span>
              <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
