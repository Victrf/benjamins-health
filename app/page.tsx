import Hero from "@/components/Hero";
import TrustSnapshot from "@/sections/TrustSnapshot";
import WhyBangalorePreview from "@/sections/WhyBangalorePreview";
import HowItWorks from "@/sections/HowItWorks";
import PrimaryCTA from "@/sections/PrimaryCTA";
import TopHospitals from "@/sections/TopHospitals"; 
import MovingHospitalsSection from "@/sections/MovingHospitalsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopHospitals />
      <MovingHospitalsSection />
      <TrustSnapshot />
      <WhyBangalorePreview />
      <HowItWorks />
      <PrimaryCTA />
    </>
  );
}
