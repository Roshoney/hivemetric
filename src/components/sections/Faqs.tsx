import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { faqs, sectionContent } from "@/lib/content";

export function Faqs() {
  const { eyebrow, title } = sectionContent.faqs;

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-border">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <RevealGroup className="mt-12 flex flex-col divide-y divide-border border-t border-b border-border">
          {faqs.map((faq) => (
            <RevealItem key={faq.question}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground marker:content-none">
                  {faq.question}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="shrink-0 text-gold-500 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 4v16M4 12h16" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted sm:text-base">{faq.answer}</p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
