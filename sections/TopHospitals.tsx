"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

/* ------------------ SLIDES ------------------ */

const slides = [
  {
    name: "Manipal Hospitals, Bangalore",
    image: "/hospitals/manipal.webp",
    description:
      "A leading multi-specialty hospital known for advanced treatments, international standards, and patient-centered care.",
    variant: "full",
  },
  {
    name: "Fortis Hospitals, Bangalore",
    image: "/hospitals/fortis.webp",
    description:
      "One of India’s most trusted hospital networks, known for clinical excellence, advanced technology, and compassionate care.",
    variant: "simple",
  },
  {
    name: "Aster Hospitals, Bangalore",
    image: "/hospitals/aster.webp",
    description:
      "A globally respected healthcare network delivering comprehensive, patient-focused medical services across specialties.",
    variant: "simple",
  },
  {
    name: "Sparsh Hospital, Bangalore",
    image: "/hospitals/sparsh.webp",
    description:
      "Renowned for orthopaedics, trauma care, and advanced surgical expertise with a strong focus on recovery and rehabilitation.",
    variant: "simple",
  },
  {
    name: "Apollo Hospitals, Bangalore",
    video:
      "https://res.cloudinary.com/dtpqq0qcp/video/upload/f_auto,q_auto,w_1280/v1767794489/apo.web_mvc8cy.mp4",
    variant: "video",
  },
];

/* ------------------ ASSOCIATION COPY ------------------ */

const associationCopy: Record<string, string> = {
  "Manipal Hospitals, Bangalore":
    "In association with Manipal Hospitals’ advanced infrastructure and internationally accredited clinical environment, Benjamin’s Global Healthcare Connect enables international patients to access modern diagnostics, patient-focused facilities, and structured care coordination.",

  "Fortis Hospitals, Bangalore":
    "Working alongside Fortis Hospitals’ technology-driven medical ecosystem, Benjamin’s Global Healthcare Connect supports access to evidence-based treatments, globally trained specialists, and internationally competitive care standards.",

  "Aster Hospitals, Bangalore":
    "In collaboration with Aster Hospitals’ integrated healthcare network, Benjamin’s Global Healthcare Connect connects patients to advanced medical equipment, well-designed hospital environments, and cost-effective treatment pathways.",

  "Sparsh Hospital, Bangalore":
    "Partnering with Sparsh Hospital’s specialized orthopaedic and trauma care facilities, Benjamin’s Global Healthcare Connect facilitates access to advanced surgical technologies, structured rehabilitation programs, and recovery-focused care environments.",

  "Apollo Hospitals, Bangalore":
    "Aligned with Apollo Hospitals’ globally recognized infrastructure and research-driven care standards, Benjamin’s Global Healthcare Connect supports international patients with coordinated treatment pathways and advanced medical technologies.",
};

/* ------------------ MOTION VARIANTS ------------------ */

const textContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const, // ✅ FIXED FOR TS
      staggerChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const accentLine = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ LOGO + CONNECTOR ANIMATION ------------------ */

const pulseRing = {
  animate: {
    scale: [1, 1.8],
    opacity: [0.6, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeOut" },
  },
};

const pulseIcon = {
  animate: {
    scale: [1, 1.08, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const junctionPulse = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: { duration: 1.6, repeat: Infinity },
  },
};

const junctionRipple = {
  animate: {
    scale: [1, 2],
    opacity: [0.5, 0],
    transition: { duration: 2.2, repeat: Infinity },
  },
};

const linePulse = {
  animate: {
    strokeDashoffset: [0, -180],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
};

const lineGlow = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function TopHospitalsCarousel() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        loop
        speed={900}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              )}

              {slide.video && (
                <video
                  className="w-full h-full object-cover"
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

              <div className="absolute inset-0 flex items-end sm:items-start">
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  animate="visible"
                  className="relative m-4 sm:m-10 lg:m-16 max-w-md sm:max-w-xl rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 p-5 sm:p-8 shadow-2xl text-white"
                >
                  <motion.h2 variants={textItem} className="text-xl sm:text-3xl font-semibold">
                    {slide.name}
                  </motion.h2>

                  <motion.div variants={accentLine} className="origin-left mt-3 h-[2px] w-12 bg-white/80" />

                  <motion.p variants={textItem} className="mt-3 text-sm sm:text-base text-white/90">
                    {slide.description}
                  </motion.p>

                  <motion.span variants={textItem} className="mt-4 inline-block text-xs uppercase tracking-widest text-white/70">
                    Trusted Care • Advanced Medicine
                  </motion.span>

                  <div className="pointer-events-none hidden lg:block absolute -right-28 top-1/2 -translate-y-1/2">
                    <div className="relative w-24 h-24">
                      <motion.span variants={pulseRing} animate="animate" className="absolute inset-0 rounded-full border-2 border-blue-400/50" />
                      <motion.span variants={pulseRing} animate="animate" transition={{ delay: 1.2 }} className="absolute inset-0 rounded-full border-2 border-teal-400/40" />
                      <motion.div variants={pulseIcon} animate="animate" className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white shadow-xl">
                        <Image src="/bg/logo.png" alt="Brand Logo" width={48} height={48} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="pointer-events-none hidden lg:block absolute inset-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
                  <path d="M 520 260 L 600 300 L 780 375" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" />
                  <motion.path d="M 520 260 L 600 300 L 780 375" stroke="rgba(34,211,238,0.35)" strokeWidth="6" fill="none" variants={lineGlow} animate="animate" />
                  <motion.path d="M 520 260 L 600 300 L 780 375" stroke="rgba(34,211,238,0.95)" strokeWidth="2.5" fill="none" strokeDasharray="14 180" variants={linePulse} animate="animate" />
                </svg>

                <div className="absolute left-[60%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                  <motion.span variants={junctionRipple} animate="animate" className="absolute h-10 w-10 rounded-full border border-cyan-400/50" />
                  <motion.span variants={junctionPulse} animate="animate" className="relative z-10 h-3 w-3 rounded-full bg-cyan-400" />
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="absolute right-14 bottom-28 max-w-md rounded-2xl bg-white/12 backdrop-blur-xl border border-white/25 p-6 text-white shadow-xl">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Benjamin’s Global Healthcare Connect
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {associationCopy[slide.name]}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
    </section>
  );
}
