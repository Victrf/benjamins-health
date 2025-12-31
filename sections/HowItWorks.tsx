"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  MessageCircle,
  FileText,
  Stethoscope,
  PlaneTakeoff,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact Us",
    desc: "Reach out via WhatsApp, call, or email to start your journey.",
  },
  {
    icon: FileText,
    title: "Share Medical Reports",
    desc: "Send us your medical history for expert evaluation.",
  },
  {
    icon: Stethoscope,
    title: "Doctor & Hospital Selection",
    desc: "We connect you with the right specialists and hospitals.",
  },
  {
    icon: PlaneTakeoff,
    title: "Travel & Treatment",
    desc: "We assist with travel, accommodation, and treatment planning.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Treatment Support",
    desc: "Continued care and guidance even after treatment.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* FULL-WIDTH PARALLAX BACKGROUND */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/how-it-works.jpg"
          alt="Medical journey background"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-[1px]" />

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
        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple, transparent process designed to make your medical journey
            safe, smooth, and stress-free.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-slate-300" />

          <div className="space-y-14 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className={`
                    relative
                    flex flex-col lg:flex-row
                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                >
                  {/* CONTENT CARD */}
                  <div
                    className="
                      w-full lg:w-[46%]
                      bg-white/95 backdrop-blur
                      border border-slate-200
                      rounded-2xl
                      p-6 sm:p-8
                      shadow-sm
                      hover:shadow-lg
                      transition-shadow
                    "
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <span className="text-sm font-medium text-teal-600">
                        Step {index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-600">
                      {step.desc}
                    </p>
                  </div>

                  {/* DOT */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2">
                    <span className="w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
