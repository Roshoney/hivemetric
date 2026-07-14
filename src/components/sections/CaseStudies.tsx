import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { featuredPortfolio, sectionContent } from "@/lib/content";

export function CaseStudies() {
  const { eyebrow, title, description, ctaLabel } = sectionContent.caseStudies;

  return (
    <section id="case-studies" className="py-24 sm:py-32 border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />
          <Button href="/portfolio" variant="secondary" className="shrink-0">
            {ctaLabel}
          </Button>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredPortfolio.map((item) => (
            <RevealItem key={item.slug} className="h-full">
              <PortfolioCard item={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
