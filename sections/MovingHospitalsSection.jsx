"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const rowOne = [
  { type: "image", src: "/media/patient-1.jpg" },
  { type: "video", src: "/media/care-video-1.mp4" },
  { type: "image", src: "/media/hospital-1.jpg" },
  { type: "video", src: "/media/facility-video.mp4" },
];

const rowTwo = [
  { type: "image", src: "/media/patient-2.jpg" },
  { type: "video", src: "/media/surgery-video-2.mp4" },
  { type: "image", src: "/media/hospital-2.jpg" },
  { type: "image", src: "/media/patient-1.jpg" },
];

export default function MovingMediaSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      {/* PARALLAX BACKGROUND */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/bg/motion-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 text-white">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Care, Facilities & Patient Experience
          </h2>
          <p className="mt-4 text-white/85">
            Real moments from hospitals, caregivers, and patients —
            reflecting compassion, expertise, and trust.
          </p>
        </div>

        {/* ROW 1 → RIGHT */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...rowOne, ...rowOne].map((item, i) => (
              <MediaCard key={`r1-${i}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2 → LEFT */}
        <div className="overflow-hidden mt-10">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 24,
              ease: "linear",
            }}
          >
            {[...rowTwo, ...rowTwo].map((item, i) => (
              <MediaCard key={`r2-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* GLASS MINI CARD */
function MediaCard({ item }) {
  return (
    <div
      className="
        relative
        w-56 h-36 sm:w-64 sm:h-40
        flex-shrink-0
        rounded-2xl
        overflow-hidden
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-xl
      "
    >
      {item.type === "image" && (
        <Image
          src={item.src}
          alt="Healthcare visual"
          fill
          className="object-cover"
        />
      )}

      {item.type === "video" && (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
        />
      )}

      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
