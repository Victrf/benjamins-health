"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Stethoscope,
  Building2,
  Plane,
  Home,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    desc: "Expert evaluation of medical reports and treatment guidance before you travel.",
  },
  {
    icon: Building2,
    title: "Doctor & Hospital Selection",
    desc: "Connecting you with internationally accredited hospitals and specialists.",
  },
  {
    icon: Plane,
    title: "Travel & Visa Assistance",
    desc: "End-to-end help with medical visas, flights, and travel planning.",
  },
  {
    icon: Home,
    title: "Accommodation & Logistics",
    desc: "Comfortable stays, local transport, and on-ground support in India.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Treatment Care",
    desc: "Continued guidance and coordination even after your treatment is complete.",
  },
];

export default function ServicesTimelineArrow() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax + breathing background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg/services-overview.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Our Healthcare Journey
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            A forward-moving, step-by-step process designed to guide you safely
            through treatment in India.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-teal-500/30 hidden lg:block" />

          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`relative flex ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* ARROW CARD */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className={`
                      relative
                      w-full lg:w-[46%]
                      bg-white/35
                      backdrop-blur-2xl
                      border border-white/40
                      shadow-xl
                      p-8 sm:p-10
                      transition-all
                      ${
                        isLeft
                          ? "clip-path-arrow-right"
                          : "clip-path-arrow-left"
                      }
                    `}
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-teal-700" />
                      </div>

                      <div>
                        <span className="text-sm font-medium text-teal-600">
                          Step {i + 1}
                        </span>
                        <h3 className="mt-1 text-xl font-semibold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-slate-700 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* DOT */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
                    <span className="w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow" />
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
