"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeartHandshake, ShieldCheck, Globe } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Patient First, Always",
    desc: "Every recommendation is guided by compassion, honesty, and the patient’s best interest — never pressure.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency & Ethics",
    desc: "Clear communication, no hidden costs, and ethical medical guidance at every step of the journey.",
  },
  {
    icon: Globe,
    title: "Global Care Coordination",
    desc: "Bridging international patients with India’s best hospitals through trusted relationships.",
  },
];

export default function FounderValues() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 bg-white"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-white" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            What We Stand For
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our values guide every decision we make — ensuring trust,
            clarity, and genuine care for every patient.
          </p>
        </motion.div>

        {/* VALUES */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-8
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
