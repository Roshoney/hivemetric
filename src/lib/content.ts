import siteJson from "@/content/site.json";
import servicesJson from "@/content/services.json";
import whyUsJson from "@/content/why-us.json";
import processJson from "@/content/process.json";
import portfolioJson from "@/content/portfolio.json";
import testimonialsJson from "@/content/testimonials.json";
import industriesJson from "@/content/industries.json";
import faqsJson from "@/content/faqs.json";
import founderJson from "@/content/founder.json";
import resultsJson from "@/content/results.json";
import sectionContentJson from "@/content/section-content.json";
import type {
  SiteConfig,
  Service,
  WhyUs,
  ProcessStep,
  PortfolioItem,
  Testimonial,
  Industry,
  Faq,
  Founder,
  ResultStat,
  SectionContent,
} from "@/lib/types";

export const site = siteJson as SiteConfig;
export const services = servicesJson as Service[];
export const whyUs = whyUsJson as WhyUs;
export const process = processJson as ProcessStep[];
export const portfolio = portfolioJson as PortfolioItem[];
export const testimonials = testimonialsJson as Testimonial[];
export const industries = industriesJson as Industry[];
export const faqs = faqsJson as Faq[];
export const founder = founderJson as Founder;
export const results = resultsJson as ResultStat[];
export const sectionContent = sectionContentJson as SectionContent;

export const portfolioCategories: string[] = Array.from(
  new Set(portfolio.map((item) => item.category))
);

export const featuredPortfolio = portfolio
  .filter((item) => item.featured)
  .slice(0, 3);

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolio.find((item) => item.slug === slug);
}
