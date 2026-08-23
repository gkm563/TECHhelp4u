"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { 
  Terminal, 
  Cpu, 
  Blocks, 
  Layers, 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  Users, 
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Flame
} from "lucide-react";
import { motion } from "framer-motion";

export function BlackBoxCampaignSection() {
  const pipelineSteps = [
    {
      phase: "ROUND 01",
      title: "Architecture Screening",
      desc: "Blueprint submission & 60-min mandatory technical assessment.",
      mode: "Online Filter",
    },
    {
      phase: "SELECTION",
      title: "Top 25 Squad Shortlist",
      desc: "1-on-1 technical pre-briefing with industry architects.",
      mode: "Virtual Stage",
    },
    {
      phase: "ROUND 02",
      title: "12-Hour Offline Build",
      desc: "Continuous physical hacking sprint & live MVP deployment in Gwalior.",
      mode: "Physical Arena",
    },
    {
      phase: "INCUBATION",
      title: "Long-Term Accelerator",
      desc: "Venture evaluation with HiDevs, AI House compute & investor access.",
      mode: "Post-Event Sprint",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-navy-900/60 border-y border-white/[0.08]">
      {/* Background terminal glow and grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Frosted Glass Header Container */}
        <div className="rounded-3xl bg-navy-950/75 border border-cyan/30 backdrop-blur-3xl p-6 sm:p-10 lg:p-12 shadow-[inset_0_1px_2px_0_rgba(0,229,255,0.25),0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle top scanline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulse" />

          {/* Protocol Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
                  THE BLACK-BOX PROTOCOL // INITIATIVE
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  SYSTEM_ESCALATION::STAGE_01
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="cyan" dot size="sm">
                AI × WEB3 × DATA SCIENCE
              </Badge>
              <Badge variant="neutral" size="sm">
                GWALIOR, MP
              </Badge>
            </div>
          </div>

          {/* Main Campaign Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-amber-400/30 text-xs font-mono text-amber-400 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                FLAGSHIP 2026 TECHNICAL CAMPAIGN
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground font-display tracking-tight leading-[1.15]">
                System Escalation:{" "}
                <span className="text-gradient-cyan">Stage 01</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Moving far beyond traditional weekend hackathons. The Black-Box Protocol is Central India&apos;s premier multi-phase engineering universe engineered to incubate production-grade autonomous AI agents and decentralized Web3 state machines.
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/[0.08] font-mono text-xs">
                <div>
                  <span className="text-slate-500 uppercase block">FORMAT</span>
                  <span className="text-slate-200 font-semibold">2-Round Hybrid</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block">SPRINT DURATION</span>
                  <span className="text-slate-200 font-semibold">12-Hour Continuous</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block">STRATEGIC PARTNERS</span>
                  <span className="text-cyan font-semibold">HiDevs × AI House</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Button
                  href="/events/system-escalation"
                  variant="cyan-glow"
                  size="lg"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  data-cursor="PROTOCOL"
                >
                  View Protocol Specs & Apply
                </Button>
                <Button
                  href="https://unstop.com"
                  isExternal
                  variant="glass"
                  size="lg"
                  leftIcon={<ShieldCheck className="w-4 h-4 text-cyan" />}
                >
                  Unstop Registration Portal
                </Button>
              </div>
            </div>

            {/* Right Protocol Visualizer Glass Box */}
            <div className="lg:col-span-5 bg-navy-900/50 border border-white/[0.1] rounded-3xl p-6 font-mono text-xs backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_15px_30px_-10px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4 text-slate-400">
                <span>PROTOCOL_PIPELINE_EXECUTION</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3.5">
                {pipelineSteps.map((step, idx) => (
                  <div
                    key={step.phase}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-cyan/40 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan font-bold text-[10px] shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,229,255,0.2)]">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan font-bold">{step.phase}</span>
                        <span className="text-[10px] text-slate-400">[{step.mode}]</span>
                      </div>
                      <h4 className="text-slate-200 font-semibold text-xs mt-0.5">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 text-[11px] mt-1 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-slate-400 flex items-center justify-between">
                <span>INCUBATION VIA HIDEVS & AI HOUSE</span>
                <span className="text-cyan font-bold">₹90K+ IN POOL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
