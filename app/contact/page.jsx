// app/contact/page.jsx

import ContactHero from "@/sections/ContactHero";
import ContactMethods from "@/sections/ContactMethods";
import WhatHappensNext from "@/sections/WhatHappensNext";
import ContactReassurance from "@/sections/ContactReassurance";
import ContactLocation from "@/sections/ContactLocation";
import ContactReassuranceCTA from "@/sections/ContactReassuranceCTA";

export const metadata = {
  title: "Contact | The Benjamin’s Global Healthcare Connect",
  description: "Speak with a healthcare consultant for guidance and support",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
        <ContactMethods />
        <WhatHappensNext />
        <ContactReassurance />
           <ContactReassuranceCTA />
        <ContactLocation />
     
    </>
  );
}
