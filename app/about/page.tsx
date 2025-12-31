import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import TreatmentSpecialties from "@/sections/TreatmentSpecialties";
import HospitalNetwork from "@/sections/HospitalNetwork";
import EthicsTransparency from "@/sections/EthicsTransparency";
import WhyPatientsTrustUs from "@/sections/WhyPatientsTrustUs";
import FounderSection from "@/sections/FounderSection";
import FounderQuote from "@/sections/FounderQuote";
import FounderValues from "@/sections/FounderValues";
import PatientReassuranceCTA from "@/sections/PatientReassuranceCTA";
import FounderVideo from "@/sections/FounderVideo";






export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <TreatmentSpecialties />
      <HospitalNetwork />
      <EthicsTransparency />
      <WhyPatientsTrustUs />
      <FounderSection />
      <FounderQuote />
      <FounderValues />
      <PatientReassuranceCTA />
      <FounderVideo />
      
    
      {/* We will add more sections here */}
    </>
  );
}
