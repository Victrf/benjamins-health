"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is medical treatment in India safe for international patients?",
    a: "Yes. India is home to internationally accredited hospitals and highly experienced doctors. We only work with trusted hospitals that meet global healthcare standards.",
  },
  {
    q: "Will you help with visas, travel, and accommodation?",
    a: "Absolutely. We assist with medical visas, travel planning, airport pickup, accommodation, and local coordination throughout your stay.",
  },
  {
    q: "How much does treatment in India usually cost?",
    a: "Treatment costs in India are typically 60–80% lower than in many Western countries, without compromising quality. Exact costs depend on diagnosis and treatment plan.",
  },
  {
    q: "Am I obligated to proceed with treatment after consultation?",
    a: "No. Our consultations are confidential and pressure-free. The final decision always rests entirely with you.",
  },
];

export default function AboutFAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          src="/bg/faq-bg.jpg"
          alt="Healthcare FAQ background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/90 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-4xl mx-auto px-6 lg:px-12"
      >
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Clear answers to help you make informed, confident decisions
            about your medical journey.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className="
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex items-center justify-between
                    p-6
                    text-left
                    font-medium
                    text-slate-900
                    hover:bg-slate-50
                    transition
                  "
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-teal-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-teal-600" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="px-6 pb-6 text-slate-600 leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
