"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why India", href: "/why-bangalore" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav
          className="
            relative max-w-7xl mx-auto px-6 lg:px-12 h-16
            flex items-center justify-between
            bg-white/70 backdrop-blur-xl
            border-b border-slate-200
          "
        >
          {/* LOGO + NAME */}
          <Link
            href="/"
            className="
              relative
              flex
              items-center
              gap-1
              max-w-[calc(100%-3rem)]
              md:max-w-[80%]
            "
          >
            {/* FOREGROUND LOGO */}
            <Image
              src="/bg/logo.png"
              alt="Benjamin’s Healthcare Logo"
              width={56}
              height={56}
              className="
                object-contain
                w-10 h-10
                sm:w-12 sm:h-12
                lg:w-14 lg:h-14
                shrink-0
              "
              priority
            />

            {/* WATERMARK LOGO */}
            <Image
              src="/bg/logo.png"
              alt="Benjamin’s Healthcare Logo"
              width={80}
              height={80}
              className="
                absolute -left-6 -top-4
                opacity-10
                pointer-events-none
                select-none
              "
            />

            {/* BRAND TEXT */}
            <span
              className="
                relative
                -ml-3
                leading-tight
                font-semibold
                tracking-tight
                text-slate-900
                text-xs
                sm:text-sm
                md:text-base
                lg:text-lg
                truncate
                sm:whitespace-normal
              "
            >
              The Benjamin’s Global Healthcare Connect
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-teal-500 rounded-full"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-slate-900 shrink-0"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-current mb-1" />
            <span className="block w-6 h-[2px] bg-current mb-1" />
            <span className="block w-6 h-[2px] bg-current" />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SLIDE PANEL */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 z-50 overflow-hidden shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* BACKGROUND */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{ y: ["-4%", "4%"] }}
                transition={{
                  duration: 18,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <Image
                  src="/bg/mobile-menu.jpg"
                  alt="Healthcare background"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* GLASS */}
              <div className="absolute inset-0 z-10 bg-white/65 backdrop-blur-sm" />

              {/* CONTENT */}
              <div className="relative z-20 p-6 pt-10 flex flex-col h-full">
                {/* TOP BRAND */}
                <div className="relative mb-6">
                  <Image
                    src="/bg/logo.png"
                    alt="Benjamin’s Healthcare Logo"
                    width={44}
                    height={44}
                    className="
                      absolute -left-4 -top-4
                      opacity-10
                      pointer-events-none
                      select-none
                    "
                  />
                  <span className="relative font-semibold text-sm text-slate-900">
                    The Benjamin’s Global Healthcare Connect
                  </span>
                </div>

                {/* BIG CENTER LOGO */}
                <div className="flex justify-center mt-4 mb-6">
                  <motion.div
                    initial={{ rotate: -12, scale: 0.85, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="
                      w-24 h-24
                      rounded-full
                      bg-white/70
                      backdrop-blur
                      shadow-lg
                      flex items-center justify-center
                    "
                  >
                    <Image
                      src="/bg/logo.png"
                      alt="Benjamin’s Healthcare Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>

                {/* CALL TO ACTIONS */}
                <div className="flex items-center justify-center gap-6 mb-10">
                  {/* CALL FOR ADVICE */}
                  <a
                    href="tel:+919008477637"
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      rounded-full
                      bg-teal-600 text-white
                      text-sm font-medium
                      shadow-md
                      hover:bg-teal-500
                      transition-colors
                    "
                  >
                    <Phone className="w-4 h-4" />
                    Call for Advice
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="Follow us on Instagram"
                    className="
                      w-10 h-10
                      rounded-full
                      bg-white/70
                      backdrop-blur
                      shadow-md
                      flex items-center justify-center
                      text-slate-700
                      hover:text-pink-600
                      transition-colors
                    "
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                {/* LINKS */}
                <ul className="flex flex-col flex-1 justify-center space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block text-lg font-medium transition-colors ${
                          pathname === link.href
                            ? "text-teal-600"
                            : "text-slate-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CLOSE */}
                <button
                  onClick={() => setOpen(false)}
                  className="mt-auto text-sm text-slate-500 self-end"
                >
                  Close ✕
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
