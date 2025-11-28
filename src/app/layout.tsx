import FloatingAvatar from "@/components/floating-avatar";
import MotionConfigWrapper from "@/components/motion-config";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { geistMono, geistSans, incognito, pixelifySans } from "../assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachdian Muhammad Adha - Personal Website",
  description:
    "my personal portofolio website showcasing my skills and projects",
  keywords: ["portofolio", "nextjs", "typescript", "tailwindcss", "react"],

  openGraph: {
    images: [
      {
        url: "/og.png",
        alt: "Rachdian portofolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          incognito.variable,
          pixelifySans.variable
        )}
      >
        <Providers>
          <MotionConfigWrapper>
            <FloatingAvatar />
            {children}
          </MotionConfigWrapper>
        </Providers>
      </body>
    </html>
  );
}
