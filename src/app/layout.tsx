import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { incognito, pixelifySans } from "../assets/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachdian Muhammad Adha | dev portofolio",
  description:
    "my personal portofolio website showcasing my skills and projects",
  keywords: ["portofolio", "nextjs", "typescript", "tailwindcss", "react"],

  openGraph: {
    images: [
      {
        url: "/og.png",
        alt: "Rachdian portofolio",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          incognito.variable,
          pixelifySans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
