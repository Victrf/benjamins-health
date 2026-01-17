"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amina K.",
    country: "Kenya",
    message:
      "From the very first call, I felt supported. They explained every step clearly and helped my family feel confident about treatment in India.",
    image: "/people/patientss.webp",
  },
  {
    name: "Joseph M.",
    country: "Uganda",
    message:
      "What stood out was honesty. No pressure, no false promises — just real guidance. That trust made all the difference for us.",
    image: "/people/patients1.webp",
  },
  {
    name: "Fatima R.",
    country: "Tanzania",
    message:
      "Traveling for treatment was overwhelming, but their team handled everything calmly. We were never left confused or alone.",
    image: "/people/patient3.webp",
  },
  {
    name: "Michael T.",
    country: "United States",
    message:
      "We explored options across several countries, but the clarity and transparency we received here stood out. The coordination and medical standards exceeded our expectations.",
    image: "/people/patient-usa.webp",
  },
  {
    name: "Sarah W.",
    country: "United Kingdom",
    message:
      "The reassurance and professionalism made a stressful situation manageable. Every step was explained clearly, and nothing felt rushed or uncertain.",
    image: "/people/patient-uk.webp",
  },
  {
    name: "Daniel R.",
    country: "Canada",
    message:
      "What impressed us most was how seamless everything felt. From hospital selection to recovery planning, the process was smooth and well-organized.",
    image: "/people/patient-canada.webp",
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-32">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/bg/testimonialsbg.webp')" }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-14 sm:mb-16 text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">
            What Patients & Families Say
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            Real stories from international patients who trusted us
            during some of the most important decisions of their lives.
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:hidden no-scrollbar">
          {testimonials.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:block overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ t }) {
  return (
    <div className="relative min-w-[340px] rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 p-6 sm:p-8 shadow-2xl text-white">
      <Quote className="w-8 h-8 text-teal-300 mb-4" />

      {/* HEIGHT FIX */}
      <p className="text-white/90 leading-relaxed line-clamp-4">
        “{t.message}”
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={t.image} alt={t.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium">{t.name}</p>
          <p className="text-sm text-white/70">{t.country}</p>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />
    </div>
  );
}
