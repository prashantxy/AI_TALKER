import "./globals.css"; // Resolves to ./globals.css

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react"; // Added import for React
import { Navbar } from "./components/navbar";
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voice AI - AI Voice Assistant for Throat Patients",
  description:
    "Empowering communication for throat patients through AI-powered voice assistance. Type or select, and let our natural voice speak for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Add the ThemeToggle in the layout */}
        <Navbar />
        
        <main>{children}</main>
      </body>
    </html>
  );
}
