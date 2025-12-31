"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/hero/hospital-1.jpg",
  "/hero/hospital-2.jpg",
  "/hero/doctor-1.jpg",
  "/hero/patient-care.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* PAGE LOAD SLIDE-IN */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Connecting Patients to
                <span className="text-teal-600"> World-Class Healthcare</span>
                <br className="hidden sm:block" />
                in India
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

            {/* RIGHT — IMAGE (HIDDEN ON SMALL SCREENS) */}
            <div className="relative hidden md:block w-full h-[360px] lg:h-[420px]">
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
                    src={images[index]}
                    alt="Healthcare in India"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Top Triangle */}
                <motion.div
                  key={`top-${index}`}
                  className="absolute inset-0 overflow-hidden bg-white/10 backdrop-blur-[2px]"
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
                    src={images[index]}
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
