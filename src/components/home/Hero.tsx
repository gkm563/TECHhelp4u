"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { EcosystemNodeNetwork } from "./EcosystemNodeNetwork";
import { ArrowUpRight, Sparkles, Terminal, Code2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Ambient background glow layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan/15 via-electric-violet/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-850/90 border border-cyan/30 text-xs font-mono text-cyan backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="font-semibold tracking-wide uppercase">
              Where Passion Meets Possibility
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Central India & Beyond</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground font-display leading-[1.08]">
            Architecting India&apos;s Next Generation of{" "}
            <span className="text-gradient-cyan">Builders & Leaders</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A student-driven technology community and builder incubator empowering developers through practical systems learning, high-octane hackathons, and nationwide campus leadership.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            href="/community"
            variant="cyan-glow"
            size="lg"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            data-cursor="JOIN"
          >
            Explore the Community
          </Button>
          <Button
            href="/events"
            variant="secondary"
            size="lg"
            data-cursor="EXPLORE"
          >
            Explore Events & Sprints
          </Button>
          <Button
            href="/initiatives"
            variant="outline"
            size="lg"
            leftIcon={<Terminal className="w-4 h-4 text-cyan" />}
          >
            Flagship Initiatives
          </Button>
        </motion.div>

        {/* Interactive Node Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <EcosystemNodeNetwork />
        </motion.div>
      </div>
    </section>
  );
}
