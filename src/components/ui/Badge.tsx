import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "violet" | "emerald" | "amber" | "neutral" | "outline" | "glass";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "cyan",
  size = "sm",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    cyan: "bg-cyan/10 backdrop-blur-md text-cyan border-cyan/30 shadow-[0_0_15px_rgba(0,229,255,0.18),inset_0_1px_0_0_rgba(0,229,255,0.2)]",
    violet: "bg-electric-violet/10 backdrop-blur-md text-electric-violet border-electric-violet/30 shadow-[0_0_15px_rgba(139,92,246,0.18),inset_0_1px_0_0_rgba(139,92,246,0.2)]",
    emerald: "bg-electric-emerald/10 backdrop-blur-md text-electric-emerald border-electric-emerald/30 shadow-[0_0_15px_rgba(16,185,129,0.18),inset_0_1px_0_0_rgba(16,185,129,0.2)]",
    amber: "bg-electric-amber/10 backdrop-blur-md text-electric-amber border-electric-amber/30 shadow-[0_0_15px_rgba(245,158,11,0.18),inset_0_1px_0_0_rgba(245,158,11,0.2)]",
    neutral: "bg-white/[0.04] backdrop-blur-md text-slate-300 border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]",
    glass: "bg-navy-950/50 backdrop-blur-lg text-slate-200 border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
    outline: "bg-transparent text-slate-300 border-slate-700",
  };

  const dotColors = {
    cyan: "bg-cyan animate-pulse",
    violet: "bg-electric-violet animate-pulse",
    emerald: "bg-electric-emerald animate-pulse",
    amber: "bg-electric-amber animate-pulse",
    neutral: "bg-slate-400",
    glass: "bg-cyan animate-pulse",
    outline: "bg-slate-400",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5 font-mono tracking-wider",
    md: "text-xs px-3 py-1 font-mono tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border select-none uppercase transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])} />}
      {children}
    </span>
  );
}
