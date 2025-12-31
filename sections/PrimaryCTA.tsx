"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function PrimaryCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/cta-medical.jpg"
          alt="Healthcare consultation"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* BRAND GRADIENT OVER IMAGE */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-teal-700/90 via-teal-600/85 to-emerald-600/90" />

      {/* SOFT DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-20 bg-black/20" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          Speak to a Healthcare Consultant Today
        </h2>

        <p className="mt-6 text-lg text-white/90 leading-relaxed">
          Get expert guidance before making any medical decision.
          We’ll help you understand your options and guide you every
          step of the way.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp – Primary */}
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
              shadow-xl
              hover:shadow-2xl
              hover:scale-[1.03]
              transition
            "
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Consultation
          </a>

          {/* Secondary actions */}
          <div className="flex gap-3">
            <a
              href="tel:+919008477637"
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/40
                px-5 py-3
                text-white
                hover:bg-white/10
                transition
              "
            >
              <Phone className="w-4 h-4" />
              Call
            </a>

            <a
              href="mailto:info@benjaminshealth.com"
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/40
                px-5 py-3
                text-white
                hover:bg-white/10
                transition
              "
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>

        {/* Reassurance */}
        <p className="mt-10 text-sm text-white/80">
          No obligation • Confidential consultation • Trusted guidance
        </p>
      </motion.div>
    </section>
  );
}
