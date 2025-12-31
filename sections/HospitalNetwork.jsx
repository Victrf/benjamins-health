"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const hospitals = [
  { name: "Apollo Hospitals", logo: "/hospitals/apollo.jpg" },
  { name: "Fortis Healthcare", logo: "/hospitals/fortis.jpg" },
  { name: "Manipal Hospitals", logo: "/hospitals/manipal.jpg" },
  { name: "Narayana Health", logo: "/hospitals/narayana.jpg" },
  { name: "Aster Hospitals", logo: "/hospitals/aster.jpg" },
];

export default function HospitalNetwork() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

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
          src="/bg/hospitals-bg.jpg"
          alt="Hospital network background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Our Hospital & Doctor Network
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We collaborate with internationally accredited hospitals
            and experienced specialists to ensure patients receive
            safe, ethical, and world-class medical care in India.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {hospitals.map((hospital, i) => (
            <motion.div
              key={hospital.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="
                group
                flex items-center justify-center
                bg-white
                border border-slate-200
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                transition-all
              "
            >
              <Image
                src={hospital.logo}
                alt={hospital.name}
                width={140}
                height={60}
                className="
                  object-contain
                  grayscale
                  opacity-80
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  transition
                "
              />
            </motion.div>
          ))}
        </div>

        {/* REASSURANCE */}
        <p className="mt-12 text-sm text-slate-500 max-w-xl">
          Hospital selection is based on patient needs, medical
          suitability, and ethical guidance — not commissions.
        </p>
      </motion.div>
    </section>
  );
}
