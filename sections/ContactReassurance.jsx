"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  Lock,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "No Obligation",
    desc: "You are never pressured to proceed. You remain fully in control.",
  },
  {
    icon: Lock,
    title: "Private & Confidential",
    desc: "All conversations and medical details are handled with strict privacy.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    desc: "A healthcare coordinator usually responds within 24 hours.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Guidance",
    desc: "We guide and explain — the decision is always yours.",
  },
];

export default function ContactReassurance() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/bg/contact-reassurance.jpg')",
          }}
        />

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-slate-900/65" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-20 text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">
            You’re Safe to Ask Questions Here
          </h2>

          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            Contacting us doesn’t mean committing.
            It simply means getting clarity — calmly,
            privately, and without pressure.
          </p>
        </motion.div>

        {/* GLASS CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="
                  relative
                  rounded-3xl
                  bg-white/10 backdrop-blur-2xl
                  border border-white/25
                  p-7
                  shadow-2xl
                  hover:bg-white/15
                  transition-all
                "
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-teal-500/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-300" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>

                {/* Soft glow */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
