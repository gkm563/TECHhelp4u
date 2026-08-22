import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "violet" | "emerald" | "amber" | "neutral" | "outline";
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
    cyan: "bg-cyan/10 text-cyan border-cyan/30 shadow-[0_0_12px_rgba(0,229,255,0.15)]",
    violet: "bg-electric-violet/10 text-electric-violet border-electric-violet/30 shadow-[0_0_12px_rgba(139,92,246,0.15)]",
    emerald: "bg-electric-emerald/10 text-electric-emerald border-electric-emerald/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    amber: "bg-electric-amber/10 text-electric-amber border-electric-amber/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    neutral: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    outline: "bg-transparent text-slate-300 border-slate-700",
  };

  const dotColors = {
    cyan: "bg-cyan animate-pulse",
    violet: "bg-electric-violet animate-pulse",
    emerald: "bg-electric-emerald animate-pulse",
    amber: "bg-electric-amber animate-pulse",
    neutral: "bg-slate-400",
    outline: "bg-slate-400",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5 font-mono tracking-wider",
    md: "text-xs px-3 py-1 font-mono tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border select-none uppercase",
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
