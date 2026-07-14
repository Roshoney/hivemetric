export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  founded: string;
  email: string;
  phone: string;
  addressLine: string;
  calendlyUrl: string;
  social: {
    linkedin?: string;
    instagram?: string;
    x?: string;
    youtube?: string;
  };
  nav: NavLink[];
  footerLinks: {
    company: NavLink[];
    services: NavLink[];
  };
  headerCta: NavLink;
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    keywords: string[];
  };
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  bullets: string[];
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

export interface WhyUs {
  eyebrow: string;
  heading: string;
  subheading: string;
  points: WhyUsPoint[];
}

export interface SectionContent {
  hero: {
    badge: string;
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    description: string;
  };
  about: { eyebrow: string; title: string; paragraphs: string[] };
  services: { eyebrow: string; title: string; description: string };
  process: { eyebrow: string; title: string; description: string };
  caseStudies: { eyebrow: string; title: string; description: string; ctaLabel: string };
  resultsMetrics: { eyebrow: string; title: string; description: string };
  testimonials: { eyebrow: string; title: string };
  industries: { eyebrow: string; title: string; description: string };
  faqs: { eyebrow: string; title: string };
  contact: { eyebrow: string; title: string; description: string };
  founder: { label: string };
  portfolioPage: { eyebrow: string; title: string; description: string };
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export type PortfolioCategory =
  | "Meta Ads"
  | "Automation"
  | "CRM"
  | "Sales Systems"
  | "Analytics"
  | "Funnel Optimization";

export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface PortfolioItem {
  slug: string;
  isSample?: boolean;
  client: string;
  category: PortfolioCategory | string;
  industry: string;
  title: string;
  summary: string;
  featuredImage: string | null;
  problem: string;
  approach: string;
  execution: string;
  metrics: PortfolioMetric[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  gallery: string[];
  featured: boolean;
  date: string;
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  avatar: string | null;
  isSample?: boolean;
}

export interface Industry {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Founder {
  name: string;
  role: string;
  photo: string | null;
  bio: string;
  quote: string;
  credentials: string[];
  social: {
    linkedin?: string;
  };
}

export interface ResultStat {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}
