import WhyBangaloreHeroSection from "@/sections/WhyBangaloreHeroSection";
import CostAdvantageSection from "@/sections/CostAdvantageSection";
import HospitalsTechnologySection from "@/sections/HospitalsTechnologySection";
import ExpertDoctorsSection from "@/sections/ExpertDoctorsSection";
import PatientSafetySection from "@/sections/PatientSafetySection";
import WhyFamiliesChooseBangalore from "@/sections/WhyFamiliesChooseBangalore";
import FamilyReassuranceCTA from "@/sections/FamilyReassuranceCTA";

export default function WhyBangalorePage() {
  return (
    <>
      <WhyBangaloreHeroSection />
        <CostAdvantageSection />
         <ExpertDoctorsSection />
           <PatientSafetySection />
        <HospitalsTechnologySection />
        <WhyFamiliesChooseBangalore />
        <FamilyReassuranceCTA />
      
      {/* next sections go here */}
    </>
  );
}
