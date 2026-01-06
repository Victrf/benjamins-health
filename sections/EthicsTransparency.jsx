"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  Scale,
  Lock,
  HeartHandshake,
  Languages,
  BadgePercent,
  Hotel,
  Plane,
  FileText,
  PhoneCall,
  RefreshCcw,
} from "lucide-react";

const principles = [
  /* ===== ETHICS ===== */
  {
    icon: ShieldCheck,
    title: "Patient-First Guidance",
    desc: "Medical recommendations are based solely on patient needs, not incentives or commissions.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "Clear communication on treatment options, estimated costs, and care pathways.",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    desc: "All medical information is handled with strict confidentiality and privacy standards.",
  },
  {
    icon: Scale,
    title: "Ethical Coordination",
    desc: "We help patients make informed decisions without pressure or obligation.",
  },

  /* ===== CARE & SUPPORT ===== */
  {
    icon: HeartHandshake,
    title: "Dedicated Care Giving",
    desc: "Personal care support and on-ground assistance throughout treatment and recovery.",
  },
  {
    icon: Languages,
    title: "Medical Translation Support",
    desc: "Professional translation for consultations, reports, and hospital communication.",
  },
  {
    icon: Hotel,
    title: "Accommodation Assistance",
    desc: "Support in arranging nearby hotels or serviced apartments based on comfort and budget.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Transport",
    desc: "Coordinated airport transfers and local travel for hospital visits.",
  },
  {
    icon: FileText,
    title: "Visa & Travel Support",
    desc: "Guidance with medical visa documentation and travel planning.",
  },
  {
    icon: RefreshCcw,
    title: "Post-Treatment Follow-Up",
    desc: "Continued coordination for reports, recovery guidance, and doctor follow-ups.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Patient Support",
    desc: "Always-available assistance for emergencies, questions, or coordination needs.",
  },

  /* ===== BENEFIT ===== */
  {
    icon: BadgePercent,
    title: "10% Medical Cost Benefit",
    desc: "First-time patients working with us receive up to 10% support on medical bills at partner hospitals.",
    highlight: true,
  },
];

export default function EthicsTransparency() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

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
          src="/bg/ethics-bg.jpg"
          alt="Patient support and transparency"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-sm" />

      {/* CONTENT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Ethics, Care & Patient Assistance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Beyond medical coordination, we support patients with travel,
            accommodation, communication, and continued care — ensuring
            a smooth and stress-free experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {principles.map((item, i) => {
            const Icon = item.icon;
            const highlight = item.highlight;

            return (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`
                  bg-white/35
                  backdrop-blur-xl
                  border
                  ${highlight ? "border-teal-400/60" : "border-white/40"}
                  rounded-2xl
                  p-6
                  shadow-lg shadow-black/5
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                `}
              >
                <div
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    ${highlight ? "bg-teal-500/20" : "bg-teal-500/10"}
                  `}
                >
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-sm text-slate-500 max-w-xl">
          Our responsibility is to guide, support, and simplify the journey —
          medical decisions always remain between patients and their doctors.
        </p>
      </motion.div>
    </section>
  );
}
