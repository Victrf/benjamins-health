"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  HeartPulse,
  BedDouble,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "International Safety Standards",
    desc: "Hospitals follow global safety protocols, infection control systems, and international accreditation benchmarks.",
  },
  {
    icon: HeartPulse,
    title: "Compassionate Patient Care",
    desc: "Medical teams prioritize dignity, emotional reassurance, and clear communication throughout treatment.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Recovery Environment",
    desc: "Modern hospital rooms, recovery suites, and post-treatment care designed for healing and rest.",
  },
  {
    icon: Users,
    title: "Family & Attendant Support",
    desc: "Facilities and guidance ensure family members feel supported and informed at every stage.",
  },
];

export default function PatientSafetySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Soft parallax movement
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
            backgroundImage: "url('/bg/patient-safety.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
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
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-teal-400">
            PATIENT WELL-BEING
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Safety, Comfort & Recovery —
            <span className="text-teal-400"> Beyond Treatment</span>
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Healthcare in Bangalore goes beyond procedures.
            It is built around patient safety, emotional comfort,
            and a recovery environment that supports both patients
            and their families.
          </p>
        </div>

        {/* PILLARS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  p-7
                  shadow-xl
                  hover:bg-white/20
                  transition
                "
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  {item.desc}
                </p>

                {/* Soft outline */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/25" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[360px] h-[360px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
