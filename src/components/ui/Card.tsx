import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: "cyan" | "violet" | "none";
}

export function Card({
  className,
  hoverEffect = true,
  glow = "none",
  children,
  ...props
}: CardProps) {
  const glowClasses = {
    none: "",
    cyan: "hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
    violet: "hover:border-electric-violet/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-navy-850/80 backdrop-blur-md border border-slate-800/80 p-6 relative overflow-hidden transition-all duration-300",
        hoverEffect && "hover:-translate-y-1 hover:bg-navy-800/90",
        glowClasses[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
