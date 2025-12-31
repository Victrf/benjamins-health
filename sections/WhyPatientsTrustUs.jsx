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
  Users,
  Globe2,
  HandHeart,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Ethical & Transparent Guidance",
    desc: "We prioritize patient needs with honest, pressure-free medical coordination.",
  },
  {
    icon: Users,
    title: "Trusted Hospital Partnerships",
    desc: "We work closely with leading, internationally accredited hospitals in Bangalore.",
  },
  {
    icon: Globe2,
    title: "International Patient Experience",
    desc: "Extensive experience supporting patients from Africa, the Middle East, and beyond.",
  },
  {
    icon: HandHeart,
    title: "Human Support at Every Step",
    desc: "From first contact to post-treatment care, patients are never alone.",
  },
];

export default function WhyPatientsTrustUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Gentle parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

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
          src="/bg/trust-bg.jpg"
          alt="Why patients trust us background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-slate-900/70 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-white"
      >
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Why Patients Trust Us
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Choosing healthcare abroad requires confidence.
            We earn that trust through integrity, experience,
            and unwavering patient support.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  bg-white/10
                  border border-white/20
                  rounded-2xl
                  p-6
                  backdrop-blur-md
                  hover:bg-white/15
                  transition
                "
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-300" />
                </div>

                <h3 className="font-semibold">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
