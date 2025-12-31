"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle parallax
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
            backgroundImage: "url('/bg/contact-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Let’s Talk About Your
            <span className="text-teal-400"> Healthcare Needs</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Whether you’re exploring treatment options, seeking guidance for a
            loved one, or simply need clarity — our team is here to listen and
            guide you with honesty and care.
          </p>

          <p className="mt-4 text-sm text-white/75">
            Confidential • No obligation • Family-first support
          </p>
        </div>
      </motion.div>

      {/* Soft glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
