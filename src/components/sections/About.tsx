import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { sectionContent } from "@/lib/content";

export function About() {
  const { eyebrow, title, paragraphs } = sectionContent.about;

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeading align="left" eyebrow={eyebrow} title={title} />
        <Reveal delay={0.1} direction="right" className="flex flex-col gap-6 text-base text-muted sm:text-lg">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className={i === paragraphs.length - 1 ? "text-foreground" : undefined}>
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
