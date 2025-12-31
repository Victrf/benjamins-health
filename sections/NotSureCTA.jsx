"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const bgImages = [
  "/bg/cta-1.jpg",
  "/bg/cta-2.jpg",
  "/bg/cta-3.jpg",
];

export default function NotSureCTA() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  // Rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 6500); // slow & calm
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
    >
      {/* BACKGROUND CAROUSEL */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImages[index]}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/55" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            relative
            rounded-3xl
            bg-white/20
            backdrop-blur-2xl
            border border-white/30
            shadow-2xl
            p-10 sm:p-14
            text-center
          "
        >
          {/* Floating accent */}
          <motion.span
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -top-10 left-1/2 -translate-x-1/2
              w-24 h-24 rounded-full
              bg-teal-500/30 blur-3xl
            "
          />

          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Not sure where to start?
          </h3>

          <p className="mt-4 text-lg text-white/90 leading-relaxed">
            You don’t need to have all the answers.
            A short conversation can help clarify your options
            and guide you toward the right next step.
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/+919008477637"
              target="_blank"
              className="
                inline-flex items-center gap-3
                rounded-full
                bg-teal-500
                px-8 py-4
                text-white
                font-medium
                shadow-lg
                hover:bg-teal-600
                hover:shadow-xl
                transition
              "
            >
              <MessageCircle className="w-5 h-5" />
              Start a WhatsApp Chat
            </a>

          <a
             href="tel:+919008477637"
             className="
             inline-flex items-center gap-2
             rounded-full
             border border-white/40
             px-6 py-3
             text-white
             hover:bg-white/10
             transition
             "
  >
     Talk to a Consultant
    <ArrowRight className="w-4 h-4" />
</a>

          </div>

          <p className="mt-8 text-sm text-white/80">
            No pressure • Confidential • Free initial guidance
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
