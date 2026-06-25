import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Blocksmith Studio — Minecraft Development Studio",
    template: "%s | Blocksmith Studio"
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Blocksmith Studio",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090d"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
