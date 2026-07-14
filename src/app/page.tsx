import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyHiveMetric } from "@/components/sections/WhyHiveMetric";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ResultsMetrics } from "@/components/sections/ResultsMetrics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { Faqs } from "@/components/sections/Faqs";
import { FounderSection } from "@/components/sections/FounderSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyHiveMetric />
      <Process />
      <CaseStudies />
      <ResultsMetrics />
      <Testimonials />
      <Industries />
      <FounderSection />
      <Faqs />
      <Contact />
    </>
  );
}
