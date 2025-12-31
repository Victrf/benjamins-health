"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function MissionVision() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* PARALLAX IMAGE BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/mission-bg.jpg"
          alt="Healthcare mission background"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* MISSION */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              p-8 sm:p-10
              shadow-sm
              hover:shadow-lg
              transition-shadow
            "
          >
            <span className="text-sm font-medium text-teal-600 tracking-wide">
              OUR MISSION
            </span>

            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              Making World-Class Healthcare Accessible
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our mission is to make world-class medical care in India
              accessible to international patients through trusted
              hospital partnerships, ethical guidance, and compassionate
              support.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We focus on clarity, transparency, and patient-first
              decision-making — ensuring every individual understands
              their options.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              bg-slate-50
              border border-slate-200
              rounded-3xl
              p-8 sm:p-10
              shadow-sm
              hover:shadow-lg
              transition-shadow
            "
          >
            <span className="text-sm font-medium text-teal-600 tracking-wide">
              OUR VISION
            </span>

            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              A Trusted Global Healthcare Bridge
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our vision is to become a globally trusted healthcare
              bridge — connecting patients worldwide to India’s most
              advanced hospitals with integrity and care.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We aim to remove fear, confusion, and uncertainty from
              cross-border medical treatment by offering honest guidance
              and continuous human support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
