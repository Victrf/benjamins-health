"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Stethoscope,
  DollarSign,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

const points = [
  {
    icon: Building2,
    title: "World-Class Hospitals",
    desc: "Internationally accredited hospitals with cutting-edge facilities.",
  },
  {
    icon: Stethoscope,
    title: "Expert Medical Professionals",
    desc: "Highly experienced doctors with global training and success rates.",
  },
  {
    icon: DollarSign,
    title: "60–80% Cost Savings",
    desc: "Affordable treatment compared to Western countries.",
  },
  {
    icon: HeartPulse,
    title: "Specialized Care",
    desc: "Cancer, cardiology, orthopedics, fertility, neurology & more.",
  },
];

export default function WhyBangalorePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement (slow + subtle)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/bangalore-medical.jpg"
          alt="Healthcare in Bangalore"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 to-white/80" />

      {/* CONTENT */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Why Choose Bangalore for Treatment?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Bangalore is one of the world’s leading medical destinations,
            combining quality healthcare, advanced technology, and affordability.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT – POINTS */}
          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((point, i) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="
                    bg-white/90
                    backdrop-blur
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
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT – CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative
              bg-white/95
              backdrop-blur
              border border-slate-200
              rounded-3xl
              p-10
              shadow-lg
            "
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              A Global Medical Hub
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Thousands of international patients choose Bangalore every year
              for advanced medical treatment, compassionate care, and seamless
              coordination.
            </p>

            <Link
              href="/why-bangalore"
              className="
                inline-flex items-center gap-2
                mt-8
                rounded-full
                bg-teal-600
                px-6 py-3
                text-white
                font-medium
                hover:bg-teal-700
                transition
              "
            >
              Explore Bangalore Advantage
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Decorative accent */}
            <span className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-teal-500/10 blur-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
