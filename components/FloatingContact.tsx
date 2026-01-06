"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919008477637",
    label: "WhatsApp",
    hover: "hover:bg-green-500",
  },
  {
    icon: FaPhoneAlt,
    href: "tel:+919008477637",
    label: "Call",
    hover: "hover:bg-blue-500",
  },
  {
    icon: MdEmail,
    href: "mailto:info@benjaminshealth.com",
    label: "Email",
    hover: "hover:bg-teal-500",
  },
];

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-6 z-[999] flex flex-col gap-3">
      {contacts.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            aria-label={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-12 h-12
              rounded-full
              flex items-center justify-center
              bg-white/80 backdrop-blur-xl
              border border-white/40
              shadow-xl
              ${item.hover}
              transition-all
            `}
          >
            <Icon className="text-xl text-slate-700 group-hover:text-white transition-colors" />
          </motion.a>
        );
      })}
    </div>
  );
}
