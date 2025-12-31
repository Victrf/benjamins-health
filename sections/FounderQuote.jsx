"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function FounderQuote() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Very subtle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 bg-slate-50"
    >
      {/* PARALLAX ACCENT */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-white" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center"
      >
        {/* QUOTE ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-teal-600" />
          </div>
        </div>

        {/* QUOTE */}
        <blockquote className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed">
          “Every patient deserves clarity, dignity, and honest guidance —
          especially when making life-changing medical decisions.”
        </blockquote>

        {/* AUTHOR */}
        <p className="mt-6 text-sm text-slate-600">
          — <span className="font-semibold text-slate-800">Benjamin Igiraneza</span>,  
          Founder & Healthcare Consultant
        </p>
      </motion.div>
    </section>
  );
}
