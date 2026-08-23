"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { EcosystemNodeNetwork } from "./EcosystemNodeNetwork";
import { InteractiveTerminal } from "./InteractiveTerminal";
import { 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  ShieldCheck, 
  Activity, 
  Network, 
  Zap, 
  Flame,
  Radio
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [activeVisualMode, setActiveVisualMode] = useState<"radar" | "terminal">("radar");

  return (
    <section className="relative min-h-[95vh] pt-32 pb-24 overflow-hidden flex flex-col justify-center">
      {/* Dynamic ambient aurora glass refraction glow layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-cyan/25 via-electric-violet/20 to-transparent blur-[160px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-electric-violet/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Futuristic Floating Telemetry Chips in Background */}
      <div className="hidden xl:block absolute top-36 left-12 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] text-xs font-mono text-slate-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_10px_25px_-5px_rgba(0,0,0,0.5)]"
        >
          <Radio className="w-3.5 h-3.5 text-cyan animate-pulse" />
          <span>NETWORK::50+_CAMPUS_CHAPTERS</span>
        </motion.div>
      </div>

      <div className="hidden xl:block absolute top-48 right-12 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] text-xs font-mono text-slate-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_10px_25px_-5px_rgba(0,0,0,0.5)]"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>PROTOCOL::STAGE_01_ACTIVE</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.05] backdrop-blur-2xl border border-white/[0.14] text-xs font-mono text-cyan shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_10px_30px_-5px_rgba(0,229,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="font-bold tracking-wide uppercase">
              Where Passion Meets Possibility
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200">Student Technology Ecosystem</span>
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
            <span className="text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
              Builders & Leaders
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A high-energy student technology ecosystem & incubator empowering engineers through hands-on systems learning, high-octane hackathons, and nationwide campus leadership.
          </p>
        </motion.div>

        {/* CTAs with luxury glass & glow styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
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
            variant="glass"
            size="lg"
            data-cursor="EXPLORE"
          >
            Explore Events & Sprints
          </Button>
          <Button
            href="/initiatives"
            variant="outline"
            size="lg"
            leftIcon={<Flame className="w-4 h-4 text-cyan" />}
          >
            Flagship Initiatives
          </Button>
        </motion.div>

        {/* Interactive Viewport Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-inner">
            <button
              onClick={() => setActiveVisualMode("radar")}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                activeVisualMode === "radar"
                  ? "bg-cyan text-navy-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Topology Radar</span>
            </button>
            <button
              onClick={() => setActiveVisualMode("terminal")}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                activeVisualMode === "terminal"
                  ? "bg-cyan text-navy-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Live Community CLI</span>
            </button>
          </div>
        </motion.div>

        {/* Interactive Visualizer Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          {activeVisualMode === "radar" ? (
            <EcosystemNodeNetwork />
          ) : (
            <InteractiveTerminal />
          )}
        </motion.div>
      </div>
    </section>
  );
}
