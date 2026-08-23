import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: "cyan" | "violet" | "none";
  variant?: "glass" | "glass-subtle" | "solid";
}

export function Card({
  className,
  hoverEffect = true,
  glow = "none",
  variant = "glass",
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    glass: "bg-navy-900/60 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_10px_30px_-10px_rgba(0,0,0,0.5)]",
    "glass-subtle": "bg-navy-950/40 backdrop-blur-md border border-white/[0.06] shadow-inner",
    solid: "bg-navy-850 border border-slate-800",
  };

  const glowClasses = {
    none: "",
    cyan: "hover:border-cyan/50 hover:shadow-[inset_0_1px_2px_0_rgba(0,229,255,0.3),0_0_35px_rgba(0,229,255,0.2)]",
    violet: "hover:border-electric-violet/50 hover:shadow-[inset_0_1px_2px_0_rgba(139,92,246,0.3),0_0_35px_rgba(139,92,246,0.2)]",
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-6 relative overflow-hidden transition-all duration-300",
        variantClasses[variant],
        hoverEffect && "hover:-translate-y-1 hover:bg-navy-850/80 hover:border-white/[0.15]",
        glowClasses[glow],
        className
      )}
      {...props}
    >
      {/* Subtle specular top glare line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
