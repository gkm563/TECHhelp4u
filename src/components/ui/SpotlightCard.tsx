"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  glowColor?: "cyan" | "violet" | "emerald" | "amber";
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0, 229, 255, 0.15)",
  glowColor = "cyan",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const borderGlow = {
    cyan: "hover:border-cyan/50 hover:shadow-[0_0_35px_rgba(0,229,255,0.18)]",
    violet: "hover:border-electric-violet/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]",
    emerald: "hover:border-electric-emerald/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]",
    amber: "hover:border-electric-amber/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]",
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-3xl bg-navy-950/50 border border-white/[0.08] p-7 backdrop-blur-2xl overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_15px_35px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-1.5",
        borderGlow[glowColor],
        className
      )}
      {...props}
    >
      {/* Specular top glare line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent pointer-events-none z-10" />

      {/* Mouse-tracking spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
