"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { fadeUp } from "@/lib/motion";
import {
  Globe,
  Building2,
  Stethoscope,
  Headset,
  CheckCircle2,
  BriefcaseMedical,
  Plane,
  Home,
  CalendarCheck,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const trustItems = [
  {
    icon: Globe,
    title: "International Patients",
    desc: "Serving patients from across the globe",
  },
  {
    icon: Building2,
    title: "Top Hospitals",
    desc: "Partnered with leading Bangalore hospitals",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Globally experienced specialists",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Continuous patient & family assistance",
  },
];

const services = [
  {
    icon: BriefcaseMedical,
    text: "End-to-End Medical Consultation",
  },
  {
    icon: Plane,
    text: "Travel & Visa Support",
  },
  {
    icon: Home,
    text: "Accommodation & Local Transport",
  },
  {
    icon: CalendarCheck,
    text: "Hospital & Doctor Appointments",
  },
];

const reasons = [
  "Trusted partners with leading Bangalore hospitals",
  "Transparent pricing — no hidden costs",
  "Compassionate, patient-centered support",
];

export default function TrustSnapshot() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg/trust-medical.jpg"
          alt="Patient care and trust"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* READABILITY OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Why Patients Trust Us
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Global care coordination backed by expertise, transparency,
            and compassionate support at every step.
          </p>
        </motion.div>

        {/* TRUST CARDS – DESKTOP */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  group rounded-2xl
                  bg-white/90 backdrop-blur
                  border border-slate-200
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                  <Icon className="w-6 h-6 text-teal-600 group-hover:text-white" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE TRUST SCROLL */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-12">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="snap-center min-w-[260px] rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SERVICES + WHY WE HELP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* OUR SERVICES */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-teal-600 mt-1" />
                    <span className="text-slate-700">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* WHY WE HELP */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Why We Help
            </h3>
            <ul className="space-y-4">
              {reasons.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1" />
                  <span className="text-slate-700">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
