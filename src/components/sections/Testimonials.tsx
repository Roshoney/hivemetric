import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials, sectionContent } from "@/lib/content";

export function Testimonials() {
  const { eyebrow, title } = sectionContent.testimonials;

  return (
    <section className="py-24 sm:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.company}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-elevated p-8">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  className="text-gold-500/60"
                  aria-hidden="true"
                >
                  <path
                    d="M0 20V11.6C0 4.6 4.2 0.6 11.4 0L12.6 3.2C8 4 6 6.4 6 10h6v10H0Zm16 0V11.6c0-7 4.2-11 11.4-11.6L28.6 3.2c-4.6.8-6.6 3.2-6.6 6.8h6v10H16Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="text-base text-foreground/90 sm:text-lg text-balance">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-900/40 text-sm font-medium text-gold-400">
                    {t.company.charAt(0)}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-medium text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-2">{t.company}</span>
                  </div>
                  {t.isSample && <SampleBadge className="ml-auto" />}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
