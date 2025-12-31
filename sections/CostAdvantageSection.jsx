"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DollarSign, ShieldCheck, Hospital } from "lucide-react";

const points = [
  {
    icon: DollarSign,
    title: "60–80% Lower Treatment Costs",
    desc: "High-quality medical procedures in Bangalore cost significantly less than in the US, UK, or Europe — without compromising standards.",
  },
  {
    icon: Hospital,
    title: "Internationally Accredited Hospitals",
    desc: "Lower costs are driven by infrastructure efficiency and scale — not reduced quality or safety.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Ethical Pricing",
    desc: "Clear treatment estimates, no hidden charges, and guidance you can trust before making any decision.",
  },
];

export default function CostAdvantageSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background parallax
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
            backgroundImage: "url('/bg/cost-advantage.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
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
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            COST ADVANTAGE
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            World-Class Treatment at
            <span className="text-teal-400"> 60–80% Lower Cost</span>
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Bangalore offers exceptional medical outcomes at a fraction
            of the cost found in many Western countries — making advanced
            treatment accessible without financial strain.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
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
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  {point.desc}
                </p>

                {/* Soft outline */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/25" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[380px] h-[380px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
