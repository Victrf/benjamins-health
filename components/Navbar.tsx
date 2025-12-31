"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Bangalore", href: "/why-bangalore" },
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
          {/* Logo */}
          <Link href="/" className="relative flex items-center max-w-[75%]">
            <span className="absolute -left-6 -top-4 text-teal-500/10 text-5xl font-bold select-none pointer-events-none">
              +
            </span>

            <span
              className="
                relative font-semibold tracking-tight text-slate-900
                text-sm sm:text-base md:text-lg
                leading-tight
              "
            >
              The Benjamin’s Global Healthcare Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-slate-900"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-current mb-1" />
            <span className="block w-6 h-[2px] bg-current mb-1" />
            <span className="block w-6 h-[2px] bg-current" />
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY + SLIDE-IN MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 z-50 shadow-xl overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* AMBIENT PARALLAX BACKGROUND (SAFE) */}
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
                />
              </motion.div>

              {/* Overlay for readability */}
              <div className="absolute inset-0 z-10 bg-white/85 backdrop-blur-sm" />

              {/* CONTENT */}
              <div className="relative z-20 p-6 pt-10 flex flex-col h-full">
                {/* Small Logo */}
                <div className="relative mb-4">
                  <span className="absolute -left-4 -top-4 text-teal-500/10 text-5xl font-bold select-none">
                    +
                  </span>
                  <span className="relative font-semibold text-sm text-slate-900 leading-tight">
                    The Benjamin’s Global Healthcare Connect
                  </span>
                </div>

                {/* Big Logo */}
                <div className="flex justify-center mt-8 mb-5">
                  <motion.div
                    initial={{ rotate: -12, scale: 0.85, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-24 h-24 rounded-full bg-teal-500/10 flex items-center justify-center"
                  >
                    <span className="text-teal-600 text-5xl font-bold">+</span>
                  </motion.div>
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center gap-6 mb-12">
                  <a
                    href="https://wa.me/919008477637"
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500 transition group"
                  >
                    <MessageCircle className="w-5 h-5 text-teal-600 group-hover:text-white" />
                  </a>

                  <a
                    href="tel:+919008477637"
                    className="w-11 h-11 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500 transition group"
                  >
                    <Phone className="w-5 h-5 text-teal-600 group-hover:text-white" />
                  </a>

                  <a
                    href="mailto:info@benjaminshealth.com"
                    className="w-11 h-11 rounded-full bg-teal-500/10 flex items-center justify-center hover:bg-teal-500 transition group"
                  >
                    <Mail className="w-5 h-5 text-teal-600 group-hover:text-white" />
                  </a>
                </div>

                {/* Links */}
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

                {/* Close */}
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
