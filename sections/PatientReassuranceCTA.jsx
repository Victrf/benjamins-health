"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function PatientReassuranceCTA() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500" />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/15 z-10" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white"
      >
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold">
          You Are Not Alone in This Journey
        </h2>

        <p className="mt-6 text-lg text-white/90 leading-relaxed">
          We understand how overwhelming medical decisions can be —
          especially when treatment involves another country.
          Our role is to guide, not pressure.
        </p>

        <div className="mt-10">
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
            Speak with a Consultant
          </a>
        </div>

        <p className="mt-8 text-sm text-white/80">
          No obligation • Confidential • Patient-first guidance
        </p>
      </motion.div>
    </section>
  );
}
