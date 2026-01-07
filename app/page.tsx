import Hero from "@/components/Hero";
import TrustSnapshot from "@/sections/TrustSnapshot";
import WhyBangalorePreview from "@/sections/WhyBangalorePreview";
import HowItWorks from "@/sections/HowItWorks";
import PrimaryCTA from "@/sections/PrimaryCTA";
import TopHospitals from "@/sections/TopHospitals"; 
import MovingHospitalsSection from "@/sections/MovingHospitalsSection";
import Testimonies from "@/sections/Testimonies";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopHospitals />
      <MovingHospitalsSection />
      <TrustSnapshot />
      <WhyBangalorePreview />
      <HowItWorks />
      <Testimonies />
      <PrimaryCTA />
    </>
  );
}
