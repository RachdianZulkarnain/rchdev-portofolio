"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  src?: string;
}

export function Logo({ className = "w-16", src = "/logo.png" }: LogoProps) {
  return (
    <div className={cn(className)}>
      <Image
        src={src}
        alt="Logo"
        width={200}
        height={200}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
