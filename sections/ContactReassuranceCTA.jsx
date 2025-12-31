"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function ContactReassuranceCTA() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/bg/contact-reassurance.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative
            rounded-3xl
            bg-white/12 backdrop-blur-2xl
            border border-white/25
            px-8 py-14 sm:px-14
            shadow-2xl
          "
        >
          {/* Soft top accent */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-teal-500/20 blur-3xl" />

          {/* TEXT */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            We’re Here for You — Every Step of the Way
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Reaching out doesn’t mean committing to treatment.
            It simply opens a conversation — one built on honesty,
            clarity, and care.
          </p>

          <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Whether you’re just exploring options or ready to move forward,
            we’ll guide you calmly — without pressure, without confusion.
          </p>

          {/* CTA ACTIONS */}
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
                text-slate-900
                font-medium
                shadow-xl
                hover:shadow-2xl
                hover:scale-[1.02]
                transition
              "
            >
              <MessageCircle className="w-5 h-5 text-teal-600" />
              Start a Conversation
            </a>

            {/* Call */}
            <a
              href="tel:+919008477637"
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-white/40
                px-7 py-3
                text-white
                hover:bg-white/10
                transition
              "
            >
              <Phone className="w-4 h-4" />
              +91 90084 77637
            </a>
          </div>

          {/* TRUST NOTE */}
          <p className="mt-10 text-sm text-white/70">
            No obligation • Confidential • Human support
          </p>

          {/* Glass ring */}
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />
        </motion.div>
      </div>
    </section>
  );
}
