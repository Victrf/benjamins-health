import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Benjamin’s Global Healthcare Connect",
    template: "%s | The Benjamin’s Global Healthcare Connect",
  },
  description:
    "Connecting patients worldwide to trusted hospitals and world-class healthcare in India with transparency and care.",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
