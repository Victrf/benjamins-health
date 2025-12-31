import ServicesHero from "@/sections/ServicesHero";
import ServicesOverview from "@/sections/ServicesOverview";
import ServiceFlow from "@/sections/ServiceFlow";
import TreatmentSpecialties from "@/sections/TreatmentSpecialties";
import NotSureCTA from "@/sections/NotSureCTA";
import ProcessDifference from "@/sections/ProcessDifference";


export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
        <ServicesOverview />
        <TreatmentSpecialties />
        <ServiceFlow />
        <ProcessDifference />
        <NotSureCTA />
        
    </>
  );
}
