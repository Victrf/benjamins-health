"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Stethoscope,
  Cpu,
  Layers,
  Scissors,
} from "lucide-react";

/* IMAGE MAP */
const specialtyImages = {
  Cardiology: [
    "/Cardiology/GE-Vivid-E90-Full-View.webp",
    "/Cardiology/Electrocardiogram.webp",
    "/Cardiology/G9sFvC3xhVjKPXas9AdJcfFN3UxL1wxF6kJek2ve.webp",
  ],
  "Fertility & IVF": [
    "/Fertility & IVF/product-RIIntegra3-hero.webp",
    "/Fertility & IVF/olympus_ix73_icsi_semi_motorized_system.webp",
    "/Fertility & IVF/my02174_im04758_mcdc7_in_vitro_eggretrievalthu_jpg.webp",
  ],
  "General & Specialized Surgery": [
    "/General & Specialized Surgery/zeiss_lumera-t_lumera-700_ophthalmic-microscopes-2.webp",
    "/General & Specialized Surgery/surgery monitoring - fivepointsix _thumb.webp",
    "/General & Specialized Surgery/neurosurgery_research_labs_Figure4_V2.webp",
  ],
  Neurology: [
    "/Neurology/GettyImages-1326241307.webp",
    "/Neurology/The-Results-Of-A-Head-CT-Scan.webp",
    "/Neurology/MSHS-Neurology-Stroke-2col-770x420-3.webp",
  ],
  Oncology: [
    "/Oncology/what-cancers-can-an-abdominal-ct-scan-detect.webp",
    "/Oncology/What-Cancers-Might-Show-Up-On-A-CT-Scan-Blog.webp",
    "/Oncology/detecting-metastases-in-localized-prostate-cancer.webp",
  ],
  "Organ Transplantation": [
    "/Organ Transplantation/261_2024_4477_Fig3_HTML.webp",
    "/Organ Transplantation/Solutions-SPS_edited_cropped_compressed.webp",
    "/Organ Transplantation/OrganRecoverySystems-combo.webp",
  ],
  Orthopedics: [
    "/Orthopedics/7.4.webp",
    "/Orthopedics/CPM-machine-working-1296x728-header.webp",
    "/Orthopedics/image-10.webp",
  ],
  "Plastic & Reconstructive Surgery": [
    "/Plastic & Reconstructive Surgery/fig_4._perspective_or_magnification_distortion_at_.3_and_1.2_m_(1_ft_and_4_ft).webp",
    "/Plastic & Reconstructive Surgery/VTI-20mhz-Surgical-Doppler-System-e1579237491886.webp",
    "/Plastic & Reconstructive Surgery/dermatology-co2-laser.webp",
  ],
  "Robotic Surgery": [
    "/Robotic Surgery/robo.webp",
    "/Robotic Surgery/patient-cart-72dpi.webp",
    "/Robotic Surgery/robotics.webp",
  ],
};

/* BASE TIMINGS */
const carouselTimings = {
  Cardiology: 16,
  Neurology: 14,
  Orthopedics: 13,
  "Fertility & IVF": 18,
  Oncology: 15,
  "General & Specialized Surgery": 12,
  "Robotic Surgery": 10,
  "Organ Transplantation": 17,
  "Plastic & Reconstructive Surgery": 14,
};

/* DEVICE CAPABILITY HOOK */
function useDeviceProfile() {
  const [profile, setProfile] = useState("high");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cores = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 2;

    if (prefersReduced || cores <= 4 || memory <= 2) {
      setProfile("low");
    } else if (cores <= 6 || memory <= 4) {
      setProfile("medium");
    } else {
      setProfile("high");
    }
  }, []);

  return profile;
}

/* ROW LAZY LOADER */
function LazyRow({ children, rootMargin = "200px" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {visible ? children : <div className="h-[420px]" />}
    </div>
  );
}

/* GPU-SAFE CINEMATIC CAROUSEL */
function CardImageCarousel({ title, duration, profile }) {
  const images = specialtyImages[title];

  const adjustedDuration =
    profile === "low" ? duration * 1.8 :
    profile === "medium" ? duration * 1.3 :
    duration;

  const enableScale = profile === "high";

  return (
    <div
      className="relative h-40 w-full overflow-hidden rounded-xl mb-4"
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: ["0%", "-100%", "-200%", "-200%"] }}
        transition={{
          duration: adjustedDuration,
          times: [0, 0.45, 0.75, 1],
          ease: [0.22, 1, 0.36, 1],
          repeat: Infinity,
        }}
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
        {images.map((src) => (
          <motion.div
            key={src}
            className="relative min-w-full h-full"
            animate={
              enableScale
                ? { scale: [1, 1.06, 1], opacity: [0.9, 1, 0.96] }
                : { opacity: 1 }
            }
            transition={{
              duration: adjustedDuration,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              willChange: "transform",
              transform: "translate3d(0,0,0)",
            }}
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
    </div>
  );
}

const specialties = [
  { icon: HeartPulse, title: "Cardiology", desc: "Advanced heart care including bypass, angioplasty, and diagnostics." },
  { icon: Brain, title: "Neurology", desc: "Treatment for brain, spine, and nervous system disorders." },
  { icon: Bone, title: "Orthopedics", desc: "Joint replacement, spine surgery, and sports injury care." },
  { icon: Baby, title: "Fertility & IVF", desc: "World-class fertility treatments with high success rates." },
  { icon: Activity, title: "Oncology", desc: "Comprehensive cancer diagnosis, surgery, and therapy." },
  { icon: Stethoscope, title: "General & Specialized Surgery", desc: "Minimally invasive and advanced surgical procedures." },
  { icon: Cpu, title: "Robotic Surgery", desc: "Precision-assisted robotic procedures for faster recovery and reduced risk." },
  { icon: Layers, title: "Organ Transplantation", desc: "Liver, kidney, and other organ transplants with comprehensive care." },
  { icon: Scissors, title: "Plastic & Reconstructive Surgery", desc: "Cosmetic and reconstructive procedures with natural, safe outcomes." },
];

export default function TreatmentSpecialties() {
  const sectionRef = useRef(null);
  const deviceProfile = useDeviceProfile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="/bg/treatments-bg.webp"
          alt="Medical treatment background"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[0.25px]" />

      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="space-y-8">
          {Array.from({ length: Math.ceil(specialties.length / 3) }).map((_, rowIndex) => {
            const rowItems = specialties.slice(rowIndex * 3, rowIndex * 3 + 3);

            return (
              <LazyRow key={rowIndex}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rowItems.map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-white/35 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all"
                      >
                        <CardImageCarousel
                          title={item.title}
                          duration={carouselTimings[item.title]}
                          profile={deviceProfile}
                        />

                        <div className="w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-teal-600" />
                        </div>

                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-700">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </LazyRow>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
