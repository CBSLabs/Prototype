import { PricingSection } from "@/components/Landing/PricingSection";
import { FaqSection } from "@/components/Landing/FAQs";
import { HowItWorks } from "@/components/Landing/HowItWorks";
import { FeaturesSection } from "@/components/Landing/FeaturesSection";
import { ProblemSection } from "@/components/Landing/ProblemSection";
import { HeroSection } from "@/components/Landing/HeroSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col border">
      <HeroSection />
      <ProblemSection />
      <div className="h-4 border-b" />
      <FeaturesSection />
      <HowItWorks />
      <div className="h-4 border-b" />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
