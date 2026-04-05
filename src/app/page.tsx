import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardMockup from "@/components/DashboardMockup";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import CaseStudy from "@/components/CaseStudy";
import AISection from "@/components/AISection";
import PricingModel from "@/components/PricingModel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DashboardMockup />
        <PainPoints />
        <Solution />
        <Process />
        <CaseStudy />
        <AISection />
        <PricingModel />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
