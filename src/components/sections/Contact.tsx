import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site, sectionContent } from "@/lib/content";

export function Contact() {
  const { eyebrow, title, description } = sectionContent.contact;

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="text-base text-muted sm:text-lg">{description}</p>

          <div className="mt-4 flex flex-col gap-4 border-t border-border pt-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-foreground/85 hover:text-gold-400">
              <IconMail /> {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 text-sm text-foreground/85 hover:text-gold-400">
              <IconPhone /> {site.phone}
            </a>
            <span className="flex items-center gap-3 text-sm text-muted">
              <IconPin /> {site.addressLine}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="right" className="rounded-3xl border border-border bg-elevated p-6 sm:p-10">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="text-gold-500 shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="text-gold-500 shrink-0">
      <path d="M4 5c0 8.5 6.5 15 15 15l3-4-6-3-2 2c-2.5-1.2-4.8-3.5-6-6l2-2-3-6-4 0Z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="text-gold-500 shrink-0">
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}
