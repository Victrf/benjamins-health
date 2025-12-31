"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/services-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-teal-600 tracking-wide">
            OUR SERVICES
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900">
            End-to-End Healthcare Guidance
            <span className="text-teal-600"> You Can Trust</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We provide comprehensive medical coordination services for
            international patients seeking world-class treatment in India —
            from the first consultation to post-treatment support.
          </p>
        </div>
      </motion.div>

      {/* DECORATIVE ACCENT */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
    </section>
  );
}
