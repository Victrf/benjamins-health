"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function FamilyReassuranceCTA() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calm parallax drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/reassurance-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12"
      >
        <div
          className="
            relative
            rounded-3xl
            bg-white/15
            backdrop-blur-xl
            border border-white/30
            p-10 sm:p-14
            text-center
            shadow-2xl
          "
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center">
              <Heart className="w-7 h-7 text-teal-400" />
            </div>
          </div>

          {/* Text */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Not Sure Where to Start?
          </h3>

          <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            You don’t need to have all the answers.
            Speak with a healthcare coordinator who understands
            international medical journeys and will guide you honestly,
            step by step.
          </p>

          <p className="mt-4 text-sm text-white/75">
            No pressure • Confidential conversation • Family-first guidance
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919008477637"
              target="_blank"
              className="
                inline-flex items-center gap-3
                rounded-full
                bg-white
                px-8 py-4
                text-teal-700
                font-medium
                shadow-lg
                hover:shadow-xl
                hover:scale-[1.03]
                transition
              "
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp a Coordinator
            </a>

            {/* Call */}
            <a
              href="tel:+919008477637"
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-white/40
                px-7 py-4
                text-white
                hover:bg-white/10
                transition
              "
            >
              <Phone className="w-5 h-5" />
              Call +91 90084 77637
            </a>
          </div>

          {/* Soft outline */}
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-teal-500/25 blur-3xl rounded-full" />
    </section>
  );
}
