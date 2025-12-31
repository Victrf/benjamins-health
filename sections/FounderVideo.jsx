"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FounderVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  // AUTO PLAY / PAUSE ON VIEW
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // plays when 50% visible
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/founder-video-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              A Message From the Founder
            </h2>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Behind every decision we make is a deep understanding of how
              overwhelming medical journeys can be — especially when they
              involve another country.
            </p>

            <p className="mt-4 text-white/80 leading-relaxed">
              This is not just healthcare coordination.
              It’s personal responsibility, trust, and human care.
            </p>
          </motion.div>

          {/* VIDEO CARD */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              relative
              rounded-3xl
              overflow-hidden
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-90"
              muted
              controls
              playsInline
              poster="/founder/video-poster.jpg"
            >
              <source
                src="/founder/founder-message.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Soft highlight */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
