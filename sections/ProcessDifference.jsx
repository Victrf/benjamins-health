"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Scale,
  HeartHandshake,
  Eye,
} from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Patient-First Guidance",
    desc: "Every recommendation is based solely on what is best for the patient — never on commissions or hospital pressure.",
  },
  {
    icon: Scale,
    title: "No Hospital Bias",
    desc: "We present multiple treatment options transparently so you can make an informed, confident decision.",
  },
  {
    icon: Eye,
    title: "Clear Cost Visibility",
    desc: "We explain what hospitals charge, what treatments cost, and what is optional — no hidden surprises.",
  },
  {
    icon: HeartHandshake,
    title: "Human Support, Not Automation",
    desc: "You speak to real people who understand the emotional weight of medical decisions — not bots or sales teams.",
  },
];

export default function ProcessDifference() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

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
            backgroundImage: "url('/bg/process-difference.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            What Makes Our Process Different
          </h2>

          <p className="mt-5 text-lg text-white/85 leading-relaxed">
            We don’t push hospitals.  
            We don’t rush decisions.  
            We guide patients with clarity, ethics, and real human care.
          </p>
        </motion.div>

        {/* DIFFERENCE CARDS */}
        <div className="grid gap-8 sm:grid-cols-2">
          {points.map((point, i) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  relative
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  p-8 sm:p-10
                  shadow-xl
                  hover:shadow-2xl
                  transition-all
                "
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-teal-300" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-white">
                  {point.title}
                </h3>

                <p className="mt-3 text-white/80 leading-relaxed">
                  {point.desc}
                </p>

                {/* Glow accent */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
