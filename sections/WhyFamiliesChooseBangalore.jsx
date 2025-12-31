"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Globe } from "lucide-react";

const families = [
  {
    quote:
      "From the first call to recovery, we felt supported and informed. The care and coordination made all the difference for our family.",
    name: "Family from Kenya",
  },
  {
    quote:
      "The doctors explained everything clearly and treated us with compassion. Bangalore gave us confidence and peace of mind.",
    name: "Family from Nigeria",
  },
  {
    quote:
      "Traveling for treatment was scary, but the support system in Bangalore made it feel manageable and safe.",
    name: "Family from UAE",
  },
];

export default function WhyFamiliesChooseBangalore() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/families-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-teal-400 mb-4">
            <Globe className="w-4 h-4" />
            GLOBAL TRUST
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Why Families Choose Bangalore
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Families from around the world choose Bangalore not only
            for advanced medical care, but for the reassurance,
            transparency, and human support they receive throughout
            the journey.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {families.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="
                relative
                rounded-3xl
                bg-white/15
                backdrop-blur-xl
                border border-white/25
                p-8
                shadow-xl
                hover:bg-white/20
                transition
              "
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-teal-400 mb-4" />

              <p className="text-white/90 text-sm leading-relaxed">
                “{item.quote}”
              </p>

              <span className="block mt-6 text-sm font-medium text-teal-300">
                — {item.name}
              </span>

              {/* Outline */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/25" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[360px] h-[360px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
