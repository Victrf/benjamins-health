"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Cpu,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Internationally Accredited Hospitals",
    desc: "Bangalore is home to hospitals accredited by JCI and NABH, meeting the highest global standards for patient safety and quality care.",
  },
  {
    icon: Cpu,
    title: "Advanced Medical Technology",
    desc: "State-of-the-art equipment including robotic surgery, advanced imaging, and precision diagnostics ensure accurate and effective treatment.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Specialties Under One Roof",
    desc: "From oncology and cardiology to orthopedics and neurology, patients access a full spectrum of specialized care.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Safety & Hygiene Protocols",
    desc: "International infection control standards and rigorous clinical protocols ensure patient safety at every stage.",
  },
];

export default function HospitalsTechnologySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax background movement
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
            backgroundImage: "url('/bg/hospitals-technology.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/65 to-slate-900/40" />
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
            HOSPITALS & TECHNOLOGY
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            World-Class Hospitals Powered by
            <span className="text-teal-400"> Advanced Technology</span>
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Bangalore’s healthcare ecosystem combines globally accredited
            hospitals with cutting-edge medical technology — delivering
            outcomes that meet and exceed international benchmarks.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
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

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[380px] h-[380px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
