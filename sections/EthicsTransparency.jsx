"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  Scale,
  Lock,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Patient-First Guidance",
    desc: "Medical recommendations are based solely on patient needs, not incentives or commissions.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "Clear communication on treatment options, estimated costs, and care pathways.",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    desc: "All medical information is handled with strict confidentiality and privacy standards.",
  },
  {
    icon: Scale,
    title: "Ethical Coordination",
    desc: "We help patients make informed decisions without pressure or obligation.",
  },
];

export default function EthicsTransparency() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Very subtle parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/ethics-bg.jpg"
          alt="Ethics and transparency background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
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
            Ethics & Transparency
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We believe trust is built through honesty, clarity, and
            patient-first decision-making at every stage of care.
          </p>
        </div>

        {/* PRINCIPLES GRID */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
          {principles.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-md
                  transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-sm text-slate-500 max-w-xl">
          Our role is to guide and support — final medical decisions
          always remain with the patient and their chosen healthcare
          provider.
        </p>
      </motion.div>
    </section>
  );
}
