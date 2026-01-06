import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";

import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Benjamin’s Global Healthcare Connect",
  description:
    "Connecting patients worldwide to world-class hospitals in India",
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
