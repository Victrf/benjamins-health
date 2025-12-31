"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Stethoscope,
} from "lucide-react";

const specialties = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Advanced heart care including bypass, angioplasty, and diagnostics.",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Treatment for brain, spine, and nervous system disorders.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    desc: "Joint replacement, spine surgery, and sports injury care.",
  },
  {
    icon: Baby,
    title: "Fertility & IVF",
    desc: "World-class fertility treatments with high success rates.",
  },
  {
    icon: Activity,
    title: "Oncology",
    desc: "Comprehensive cancer diagnosis, surgery, and therapy.",
  },
  {
    icon: Stethoscope,
    title: "General & Specialized Surgery",
    desc: "Minimally invasive and advanced surgical procedures.",
  },
];

export default function TreatmentSpecialties() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* PARALLAX BACKGROUND IMAGE */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/treatments-bg.jpg"
          alt="Medical treatment background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Treatment Specialties
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We connect patients with leading hospitals in Bangalore
            offering a wide range of advanced medical treatments.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
