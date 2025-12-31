"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FounderSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/founder-bg.jpg"   // 👈 add your image here
          alt="Founder background"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* FOUNDER IMAGE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />

              <Image
                src="/founder/benjamin.jpg" // 👈 founder photo
                alt="Benjamin Igiraneza"
                width={420}
                height={520}
                className="relative rounded-3xl object-cover shadow-xl"
              />
            </div>
          </motion.div>

          {/* FOUNDER CONTENT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-medium text-teal-600 tracking-wide">
              FOUNDER & CONSULTANT
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
              Benjamin Igiraneza
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Benjamin founded The Benjamin’s Global Healthcare Connect
              with a clear purpose — to help international patients
              access world-class medical care in India without fear,
              confusion, or uncertainty.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              With hands-on experience guiding patients through complex
              medical journeys, Benjamin focuses on ethical guidance,
              transparency, and compassionate support at every step.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              His work is driven by one belief: patients deserve clarity,
              dignity, and honest care — no matter where they come from.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
