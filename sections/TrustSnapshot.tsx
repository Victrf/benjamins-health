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
import { useRef, useState, useEffect } from "react";

/* TOP HOSPITALS */
const topHospitals = [
  { name: "Fortis Hospital", url: "https://www.fortishealthcare.com" },
  { name: "Apollo Hospitals", url: "https://www.apollohospitals.com" },
  { name: "Manipal Hospitals", url: "https://www.manipalhospitals.com" },
];

const trustItems = [
  { icon: Globe, title: "International Patients", desc: "Serving patients from across the globe" },
  { icon: Building2, title: "Top Hospitals", desc: "Partnered with leading Bangalore hospitals" },
  { icon: Stethoscope, title: "Expert Doctors", desc: "Globally experienced specialists" },
  { icon: Headset, title: "24/7 Support", desc: "Continuous patient & family assistance" },
];

const services = [
  { icon: BriefcaseMedical, text: "End-to-End Medical Consultation" },
  { icon: Plane, text: "Travel & Visa Support" },
  { icon: Home, text: "Accommodation & Local Transport" },
  { icon: CalendarCheck, text: "Hospital & Doctor Appointments" },
];

const reasons = [
  "Trusted partners with leading Bangalore hospitals",
  "Transparent pricing — no hidden costs",
  "Compassionate, patient-centered support",
];

export default function TrustSnapshot() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [isHospitalsOpen, setIsHospitalsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setIsHospitalsOpen(false);
      }
    }

    if (isHospitalsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHospitalsOpen]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      {/* BACKGROUND */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/bg/trust.webp"
          alt="Patient care and trust"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* UPDATED OVERLAY (CLEARER IMAGE) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/65 via-white/55 to-white/65" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Why Patients Trust Us
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Global care coordination backed by expertise, transparency,
            and compassionate support.
          </p>
        </motion.div>

        {/* TRUST CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            const isTopHospitals = item.title === "Top Hospitals";

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div
                  ref={isTopHospitals ? popupRef : undefined}
                  onMouseEnter={() => isTopHospitals && setIsHospitalsOpen(true)}
                  onClick={() => isTopHospitals && setIsHospitalsOpen(true)}
                  className="
                    flex flex-row sm:flex-col
                    items-start sm:items-center
                    gap-4
                    rounded-2xl
                    bg-white/90 backdrop-blur
                    border border-slate-200
                    p-5
                    shadow-sm hover:shadow-lg
                    transition-all cursor-pointer
                  "
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>

                  <div className="text-left sm:text-center">
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>

                  {isTopHospitals && isHospitalsOpen && (
                    <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-64 rounded-xl bg-white border border-slate-200 shadow-xl z-50">
                      <ul className="p-4 space-y-3">
                        {topHospitals.map((h) => (
                          <li key={h.name}>
                            <a
                              href={h.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-sm font-medium text-slate-700 hover:text-teal-600"
                            >
                              {h.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SERVICES + WHY (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* unchanged */}
        </motion.div>
      </div>
    </section>
  );
}
