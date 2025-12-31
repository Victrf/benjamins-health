"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function WhyBangaloreHeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax background movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/why-bangalore-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            GLOBAL MEDICAL DESTINATION
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Why
            <span className="text-teal-400"> Bangalore</span>
            <br className="hidden sm:block" />
            Is a Global Healthcare Hub
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Bangalore combines internationally accredited hospitals,
            globally trained doctors, advanced medical technology,
            and affordable treatment — making it one of the most trusted
            destinations for international patients.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://wa.me/+919008477637"
              target="_blank"
              className="
                inline-flex items-center justify-center
                rounded-full bg-teal-600
                px-8 py-4
                text-white font-medium
                hover:bg-teal-700 transition
              "
            >
              Talk to a Consultant
            </Link>

            <a
              href="tel:+919008477637"
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-white/40
                px-8 py-4
                text-white
                hover:bg-white/10 transition
              "
            >
              Call +91 90084 77637
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative accent */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
