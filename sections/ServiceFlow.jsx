"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  FileText,
  Stethoscope,
  PlaneTakeoff,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Consultation",
    desc: "Reach out via WhatsApp, call, or email to discuss your medical needs and concerns.",
  },
  {
    icon: FileText,
    title: "Medical Report Review",
    desc: "Share your medical reports for expert evaluation and treatment recommendations.",
  },
  {
    icon: Stethoscope,
    title: "Doctor & Hospital Coordination",
    desc: "We connect you with the right specialists and hospitals best suited for your case.",
  },
  {
    icon: PlaneTakeoff,
    title: "Travel & Treatment Planning",
    desc: "Assistance with medical visa, travel arrangements, accommodation, and scheduling.",
  },
  {
    icon: HeartHandshake,
    title: "Treatment & Ongoing Support",
    desc: "On-ground assistance during treatment and continued guidance post-treatment.",
  },
];

export default function ServiceFlow() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      {/* PARALLAX BACKGROUND */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg/service-flow.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            How Our Service Works
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            A clear, step-by-step medical journey designed for international
            patients.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE (DESKTOP ONLY) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-slate-300/60" />

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
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`
                    relative
                    flex flex-col lg:flex-row
                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                >
                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="
                      group
                      relative
                      w-full lg:w-[46%]
                      rounded-3xl
                      border border-white/30
                      bg-white/20
                      backdrop-blur-2xl
                      p-8 sm:p-10
                      shadow-xl
                      transition-all
                    "
                  >
                    {/* HOVER GLOW */}
                    <span
                      className="
                        pointer-events-none
                        absolute -inset-1
                        rounded-3xl
                        bg-teal-500/20
                        opacity-0
                        blur-xl
                        transition-opacity
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative flex items-start gap-5">
                      {/* ICON */}
                      <div className="w-12 h-12 rounded-xl bg-teal-500/25 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Icon className="w-6 h-6 text-teal-700" />
                      </div>

                      {/* TEXT */}
                      <div>
                        <span className="text-sm font-medium text-teal-700">
                          Step {i + 1}
                        </span>

                        <h3 className="mt-1 text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-slate-700 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* GLASS EDGE */}
                    <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40" />
                  </motion.div>

                  {/* TIMELINE DOT */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2">
                    <span className="w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-md" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
