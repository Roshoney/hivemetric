import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { results, sectionContent } from "@/lib/content";

export function Hero() {
  const { badge, headlineBefore, headlineHighlight, headlineAfter, description } = sectionContent.hero;

  return (
    <section className="relative overflow-hidden bg-grain pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(232,184,75,0.14) 0%, rgba(8,8,10,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(201,150,46,0.25), transparent 65%)" }}
      />

      <Container className="flex flex-col items-center text-center">
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-4 py-1.5 text-xs font-medium tracking-wide text-muted"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          {badge}
        </span>

        <h1
          className="font-display animate-fade-up mt-8 max-w-4xl text-4xl font-medium tracking-tight text-balance sm:text-6xl md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {headlineBefore}
          <span className="text-gradient-gold">{headlineHighlight}</span>
          {headlineAfter}
        </h1>

        <p
          className="animate-fade-up mt-7 max-w-2xl text-lg text-muted text-balance sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {description}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Button href="#contact" size="lg">
            Book a Consultation
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg">
            View Our Work
          </Button>
        </div>

        <div
          className="animate-fade-up mt-20 grid w-full max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {results.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-xs text-muted-2 text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
