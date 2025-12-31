"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  FileText,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "We Reach Out Personally",
    desc: "A dedicated healthcare coordinator contacts you within 24 hours to understand your situation and answer initial questions.",
  },
  {
    icon: FileText,
    title: "Medical Details Review",
    desc: "If needed, we carefully review your medical reports and explain possible treatment paths — without pressure.",
  },
  {
    icon: Stethoscope,
    title: "Expert Guidance",
    desc: "We guide you through hospitals, doctors, timelines, and estimated costs so you can decide confidently.",
  },
  {
    icon: CheckCircle2,
    title: "You Decide the Next Step",
    desc: "There is no obligation. You move forward only when you feel fully comfortable.",
  },
];

export default function WhatHappensNext() {
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
      className="relative overflow-hidden py-32"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/bg/what-happens-next.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            What Happens After You Contact Us
          </h2>
          <p className="mt-5 text-lg text-white/85 leading-relaxed">
            We know medical decisions can feel overwhelming.
            Here’s exactly what to expect — calmly and clearly.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/25" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative grid lg:grid-cols-2 gap-12 items-start"
                >
                  {/* CARD */}
                  <div className={isLeft ? "lg:text-right" : "lg:col-start-2"}>
                    <div
                      className="
                        relative inline-block max-w-xl
                        rounded-2xl
                        bg-white/35
                        backdrop-blur-2xl
                        border border-white/30
                        p-6 sm:p-8
                        shadow-xl
                        transition-all
                        hover:bg-white/45
                        hover:shadow-2xl
                      "
                    >
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-slate-700 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Glass highlight */}
                      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/25" />
                    </div>
                  </div>

                  {/* TIMELINE NODE */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-4 z-10">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/30 backdrop-blur flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-teal-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FINAL REASSURANCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 max-w-3xl text-white/90"
        >
          <p className="text-lg leading-relaxed">
            No pressure. No obligation. Just honest guidance —
            so you can move forward with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
