"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/hero/hospital.webp",
  "/hero/hospitals.webp",
  "/hero/doctor.webp",
  "/hero/patient.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const currentImage = HERO_IMAGES[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* ================= MOBILE BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={currentImage}
          alt="Healthcare in India"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/75" />
      </div>

      {/* ================= PAGE LOAD SLIDE-IN ================= */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
                Connecting Patients to
                <span className="text-teal-600 block sm:inline">
                  {" "}
                  World-Class Healthcare
                </span>
                <span className="block sm:hidden">in India</span>
                <span className="hidden sm:block"> in India</span>
              </h1>

              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                We guide international patients through every step of their
                medical journey — from hospital selection and consultations to
                travel, accommodation, and ongoing support in India.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.me/919008477637"
                  target="_blank"
                  className="rounded-full bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 transition"
                >
                  WhatsApp Consultation
                </a>

                <Link
                  href="/services"
                  className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-100 transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* ================= DESKTOP CINEMATIC IMAGE ================= */}
            <div className="relative hidden md:block w-full h-[360px] lg:h-[420px] z-10">
              <AnimatePresence mode="wait">
                {/* Bottom Triangle */}
                <motion.div
                  key={`bottom-${index}`}
                  className="absolute inset-0 overflow-hidden rounded-bl-3xl shadow-lg"
                  style={{
                    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
                  }}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={currentImage}
                    alt="Healthcare in India"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>

                {/* Top Triangle (Toggle Layer) — SAME IMAGE */}
                <motion.div
                  key={`top-${index}`}
                  className="absolute inset-0 overflow-hidden bg-white/10"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                    transform: "translate(-10px, -10px)",
                    borderRight: "2px solid rgba(255,255,255,0.9)",
                    borderBottom: "2px solid rgba(255,255,255,0.9)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={currentImage}
                    alt="Healthcare detail"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
