"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

const methods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Consultation",
    desc: "Chat directly with our healthcare coordinator for quick guidance.",
    action: "Start WhatsApp",
    href: "https://wa.me/919008477637",
    primary: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak to us directly for immediate assistance and clarity.",
    action: "+91 90084 77637",
    href: "tel:+919008477637",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Share your medical details and questions at your convenience.",
    action: "info@benjaminshealth.com",
    href: "mailto:info@benjaminshealth.com",
  },
];

export default function ContactMethods() {
  // ✅ SAFE ref
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg/contact-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Choose the Easiest Way to Reach Us
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you prefer chat, call, or email — we respond quickly
            and guide you with care and transparency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`
                  relative group
                  rounded-3xl
                  border border-white/40
                  bg-white/60 backdrop-blur-xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  ${item.primary ? "ring-2 ring-teal-500/40" : ""}
                `}
              >
                <div
                  className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                    ${
                      item.primary
                        ? "bg-teal-600 text-white"
                        : "bg-teal-500/10 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"
                    }
                  `}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.desc}
                </p>

                <span
                  className={`mt-6 inline-block font-medium ${
                    item.primary
                      ? "text-teal-600"
                      : "text-slate-700 group-hover:text-teal-600"
                  }`}
                >
                  {item.action}
                </span>

                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
