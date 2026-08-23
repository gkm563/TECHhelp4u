"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan-glow" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-medium rounded-xl gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold rounded-2xl gap-2",
      lg: "px-6 py-3.5 text-base font-semibold rounded-2xl gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-cyan text-navy-900 font-bold hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] border border-cyan/40 active:scale-[0.98]",
      "cyan-glow":
        "bg-gradient-to-r from-cyan to-electric-blue text-navy-900 font-bold hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] border border-cyan active:scale-[0.98]",
      glass:
        "bg-white/[0.06] backdrop-blur-xl text-foreground hover:bg-white/[0.12] hover:text-cyan border border-white/[0.12] hover:border-cyan/50 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_10px_25px_-5px_rgba(0,0,0,0.5)] active:scale-[0.98]",
      secondary:
        "bg-navy-900/70 backdrop-blur-xl text-foreground hover:bg-navy-800 hover:text-cyan border border-white/[0.08] hover:border-cyan/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] active:scale-[0.98]",
      outline:
        "bg-transparent backdrop-blur-sm text-foreground hover:text-cyan border border-white/[0.1] hover:border-cyan/50 hover:bg-cyan/5 active:scale-[0.98]",
      ghost:
        "bg-transparent text-slate-300 hover:text-cyan hover:bg-white/[0.05] active:scale-[0.98]",
    };

    const baseClasses =
      "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer tracking-wide relative overflow-hidden";

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
