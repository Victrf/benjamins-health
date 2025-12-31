"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const bgImages = [
  "/about/about-1.jpg",
  "/about/about-2.jpg",
  "/about/about-3.jpg",
];

export default function AboutHero() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            style={{ y }}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={bgImages[index]}
              alt="Healthcare background"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-white/85 sm:bg-white/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 sm:py-32"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900">
            About
            <span className="text-teal-600"> The Benjamin’s</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            The Benjamin’s Global Healthcare Connect exists to guide international
            patients toward world-class medical care in India with trust,
            transparency, and compassionate support.
          </p>
        </div>
      </motion.div>

      {/* Accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl z-0" />
    </motion.section>
  );
}
