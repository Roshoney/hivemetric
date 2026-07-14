import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services, sectionContent } from "@/lib/content";

export function Services() {
  const { eyebrow, title, description } = sectionContent.services;

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <RevealItem
              key={service.slug}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-gold-500/50 hover:bg-elevated-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/25 bg-gold-900/40 text-gold-400">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
              <p className="text-sm text-muted">{service.summary}</p>
              <ul className="mt-1 flex flex-col gap-2 border-t border-border pt-4">
                {service.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-xs text-muted-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
