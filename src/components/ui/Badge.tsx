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
    cyan: "bg-cyan-50 dark:bg-cyan/10 backdrop-blur-md text-cyan-700 dark:text-cyan border-cyan-200 dark:border-cyan/30 shadow-sm dark:shadow-[0_0_15px_rgba(0,229,255,0.18)] font-bold",
    violet: "bg-purple-50 dark:bg-electric-violet/10 backdrop-blur-md text-purple-700 dark:text-electric-violet border-purple-200 dark:border-electric-violet/30 shadow-sm dark:shadow-[0_0_15px_rgba(139,92,246,0.18)] font-bold",
    emerald: "bg-emerald-50 dark:bg-electric-emerald/10 backdrop-blur-md text-emerald-700 dark:text-electric-emerald border-emerald-200 dark:border-electric-emerald/30 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.18)] font-bold",
    amber: "bg-amber-50 dark:bg-electric-amber/10 backdrop-blur-md text-amber-700 dark:text-electric-amber border-amber-200 dark:border-electric-amber/30 shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.18)] font-bold",
    neutral: "bg-slate-100 dark:bg-white/[0.04] backdrop-blur-md text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.08]",
    glass: "bg-white/80 dark:bg-navy-950/50 backdrop-blur-lg text-slate-800 dark:text-slate-200 border-slate-200 dark:border-white/[0.1]",
    outline: "bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
  };

  const dotColors = {
    cyan: "bg-cyan-600 dark:bg-cyan animate-pulse",
    violet: "bg-purple-600 dark:bg-electric-violet animate-pulse",
    emerald: "bg-emerald-600 dark:bg-electric-emerald animate-pulse",
    amber: "bg-amber-600 dark:bg-electric-amber animate-pulse",
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
