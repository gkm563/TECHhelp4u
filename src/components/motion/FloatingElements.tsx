"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles, Terminal, Radio, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  rotateDeg?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  duration = 4,
  yOffset = 10,
  xOffset = 0,
  rotateDeg = 2,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [-rotateDeg, rotateDeg, -rotateDeg],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

export function FloatingOrb({
  color = "cyan",
  size = "md",
  className,
}: {
  color?: "cyan" | "violet" | "blue" | "emerald";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const colorMap = {
    cyan: "bg-cyan/15 blur-[130px]",
    violet: "bg-electric-violet/15 blur-[130px]",
    blue: "bg-blue-500/10 blur-[140px]",
    emerald: "bg-emerald-500/10 blur-[130px]",
  };

  const sizeMap = {
    sm: "w-48 h-48",
    md: "w-72 h-72",
    lg: "w-96 h-96",
    xl: "w-[550px] h-[550px]",
  };

  return (
    <motion.div
      animate={{
        y: [0, -25, 10, 0],
        x: [0, 20, -15, 0],
        scale: [1, 1.1, 0.95, 1],
        opacity: [0.6, 0.85, 0.5, 0.6],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full pointer-events-none will-change-transform",
        colorMap[color],
        sizeMap[size],
        className
      )}
    />
  );
}

export function FloatingTelemetryChip({
  icon: Icon,
  text,
  className,
  color = "cyan",
  delay = 0,
}: {
  icon?: any;
  text: string;
  className?: string;
  color?: "cyan" | "amber" | "violet" | "emerald";
  delay?: number;
}) {
  const colors = {
    cyan: "border-cyan/30 text-cyan shadow-[0_0_20px_rgba(0,229,255,0.2)]",
    amber: "border-amber-400/30 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    violet: "border-electric-violet/30 text-electric-violet shadow-[0_0_20px_rgba(139,92,246,0.2)]",
    emerald: "border-emerald-400/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
  };

  return (
    <FloatingElement duration={5} yOffset={12} delay={delay} className={className}>
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-navy-950/70 backdrop-blur-xl border font-mono text-[11px] font-medium select-none shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]",
          colors[color]
        )}
      >
        {Icon && <Icon className="w-3.5 h-3.5 animate-pulse" />}
        <span>{text}</span>
      </div>
    </FloatingElement>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-2xl bg-navy-950/80 backdrop-blur-2xl border border-white/[0.12] text-slate-300 hover:text-cyan hover:border-cyan/50 focus:outline-none transition-all shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_15px_30px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.2)] group"
          aria-label="Scroll to top of page"
        >
          {/* Circular Progress Ring */}
          <svg className="w-9 h-9 absolute inset-0 -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="18"
              cy="18"
              r="15"
              className="text-white/[0.08]"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              className="text-cyan transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={94.2}
              strokeDashoffset={94.2 - (94.2 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          <ArrowUp className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
