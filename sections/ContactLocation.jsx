"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Globe, Building2 } from "lucide-react";

export default function ContactLocation() {
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
            backgroundImage: "url('/bg/contact-location.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Our Presence in India
            </h2>

            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              While our patients come from around the world,
              our healthcare coordination is rooted in India’s
              most trusted medical ecosystem.
            </p>

            <p className="mt-4 text-white/80 leading-relaxed">
              We work closely with leading hospitals and specialists
              in Bangalore — ensuring on-ground support,
              real coordination, and human care.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-white/85">
              <li className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-teal-300" />
                Partner hospitals across Bangalore
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-teal-300" />
                Supporting international patients worldwide
              </li>
            </ul>
          </motion.div>

          {/* RIGHT — MAP CARD */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              relative
              rounded-3xl
              overflow-hidden
              bg-white/10 backdrop-blur-2xl
              border border-white/25
              shadow-2xl
            "
          >
            {/* Map Header */}
            <div className="p-6 border-b border-white/20 flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5 text-teal-300" />
              <span className="font-medium">
                Bangalore, Karnataka, India
              </span>
            </div>

            {/* Google Map */}
            <div className="relative w-full h-[320px]">
              <iframe
                title="Bangalore Location Map"
                src="https://www.google.com/maps?q=Bangalore,India&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Glass overlay ring */}
            <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
