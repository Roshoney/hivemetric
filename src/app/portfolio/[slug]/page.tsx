import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { portfolio, getPortfolioItem, site } from "@/lib/content";

const categoryIcon: Record<string, string> = {
  "Meta Ads": "performance",
  Automation: "automation",
  CRM: "crm",
  "Sales Systems": "sales",
  Analytics: "analytics",
  "Funnel Optimization": "funnel",
};

export function generateStaticParams() {
  return portfolio.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `${site.url}/portfolio/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();

  return (
    <article className="pt-40 pb-28 sm:pt-48 sm:pb-32">
      <Container className="max-w-4xl">
        <Link href="/portfolio" className="text-sm text-muted hover:text-gold-400">
          &larr; Back to portfolio
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-3 py-1 text-xs font-medium text-gold-400">
            <ServiceIcon name={categoryIcon[item.category] ?? "strategy"} className="w-3.5 h-3.5" />
            {item.category}
          </span>
          <span className="text-xs text-muted-2">{item.industry}</span>
          {item.isSample && <SampleBadge />}
        </div>

        <h1 className="mt-6 text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          {item.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{item.client}</p>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-elevated">
          {item.featuredImage ? (
            <Image src={item.featuredImage} alt={item.title} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(232,184,75,0.16),transparent_60%)]">
              <ServiceIcon name={categoryIcon[item.category] ?? "strategy"} className="w-14 h-14 text-gold-500/40" />
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-3">
          {item.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-gradient-gold sm:text-3xl">{m.value}</span>
              <span className="text-xs text-muted-2">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Block title="The Problem" text={item.problem} />
          <Block title="Our Approach" text={item.approach} />
          <Block title="Execution" text={item.execution} />
        </div>

        {item.testimonialQuote && (
          <blockquote className="mt-16 rounded-2xl border border-border bg-elevated p-8 sm:p-10">
            <p className="text-xl font-medium text-balance text-foreground sm:text-2xl">
              &ldquo;{item.testimonialQuote}&rdquo;
            </p>
            {item.testimonialAuthor && (
              <cite className="mt-4 block text-sm not-italic text-muted-2">
                — {item.testimonialAuthor}
              </cite>
            )}
          </blockquote>
        )}

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-elevated p-10 text-center">
          <h2 className="text-xl font-medium text-foreground">Want results like this?</h2>
          <p className="max-w-md text-sm text-muted">
            Let&apos;s talk about the growth system your business needs next.
          </p>
          <Button href="/#contact" size="lg">
            Book a Consultation
          </Button>
        </div>
      </Container>
    </article>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium uppercase tracking-wide text-gold-500">{title}</h3>
      <p className="text-sm text-muted sm:text-base">{text}</p>
    </div>
  );
}
