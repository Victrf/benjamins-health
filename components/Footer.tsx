"use client";

import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="relative inline-block mb-4">
              <span className="absolute -left-4 -top-4 text-teal-500/20 text-5xl font-bold select-none">
                +
              </span>
              <span className="relative text-xl font-semibold text-white">
                The Benjamin’s Global Connect
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting international patients to trusted hospitals
              and world-class healthcare in India with care,
              transparency, and guidance.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/why-bangalore"
                  className="hover:text-teal-400 transition"
                >
                  Why Bangalore
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Medical Consultation</li>
              <li>Doctor & Hospital Selection</li>
              <li>Visa & Travel Support</li>
              <li>Accommodation Assistance</li>
              <li>Post-Treatment Care</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm">
              <a
                href="https://wa.me/919008477637"
                target="_blank"
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Consultation
              </a>

              <a
                href="tel:+919008477637"
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <Phone className="w-4 h-4" />
                +91 90084 77637
              </a>

              <a
                href="mailto:info@benjaminshealth.com"
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <Mail className="w-4 h-4" />
                info@benjaminshealth.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} The Benjamin’s Global Healthcare Connect.
            All rights reserved.
          </span>

          <div className="flex items-center gap-3">
            <span>Designed for international healthcare guidance</span>

            <span className="hidden sm:inline text-slate-700">•</span>

            <a
              href="https://github.com/Victrf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-slate-400
                hover:text-teal-400
                transition-colors
                whitespace-nowrap
              "
            >
              Built by kay
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
