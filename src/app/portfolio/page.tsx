import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { portfolio, portfolioCategories, site, sectionContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Hive Metric's client work across Meta Ads performance, automation builds, CRM implementations, and analytics dashboards.",
  alternates: { canonical: `${site.url}/portfolio` },
};

export default function PortfolioPage() {
  const { eyebrow, title, description } = sectionContent.portfolioPage;

  return (
    <div className="pt-40 pb-28 sm:pt-48 sm:pb-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16">
          <PortfolioGrid items={portfolio} categories={portfolioCategories} />
        </div>
      </Container>
    </div>
  );
}
