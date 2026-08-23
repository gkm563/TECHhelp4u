"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { SpotlightCard } from "@/ui/SpotlightCard";
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
  Flame,
  Zap,
  Trophy,
  Radio
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BlackBoxCampaignSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pipelineSteps = [
    {
      phase: "ROUND 01",
      title: "Architecture Screening & Assessment",
      desc: "Online architecture blueprint submission & mandatory 60-minute technical evaluation covering AI pipelines, smart contracts, and data structures.",
      mode: "Virtual Filter",
      criteria: "System Architecture, Modular Code, Threat Resilience",
      perk: "Top 25 Squads Qualify for Physical Hackathon",
    },
    {
      phase: "SELECTION",
      title: "Top 25 Squad Shortlist & Briefing",
      desc: "1-on-1 technical pre-briefing with industry architects from HiDevs and AI House. Problem statements unlocked.",
      mode: "Online Stage",
      criteria: "Feasibility, Innovation Score, Team Chemistry",
      perk: "Access to Compute Credits & Advisor Mentorship",
    },
    {
      phase: "ROUND 02",
      title: "12-Hour Continuous Offline Arena",
      desc: "Non-stop physical hacking sprint and live production deployment at the flagship arena in Gwalior, MP.",
      mode: "Physical Arena",
      criteria: "Live Working MVP, Testnet Proof, Jury Demo",
      perk: "Cash Pool, LORs, HiDevs Venture Incubation",
    },
    {
      phase: "INCUBATION",
      title: "Long-Term Accelerator Track",
      desc: "Post-hackathon venture evaluation with HiDevs incubator, AI House developer tools, and direct investor introductions.",
      mode: "Post-Event Sprint",
      criteria: "Go-to-Market Potential, Scalability",
      perk: "Pre-Seed Advisory, Grant Referrals, Hiring Fast-Track",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/60 border-y border-white/[0.08]">
      {/* Dynamic ambient cyber glow and grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-cyan/15 blur-[160px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Frosted Glass Master Deck */}
        <div className="rounded-3xl bg-navy-950/80 border border-cyan/40 backdrop-blur-3xl p-6 sm:p-10 lg:p-12 shadow-[inset_0_1px_2px_0_rgba(0,229,255,0.3),0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_60px_rgba(0,229,255,0.15)] relative overflow-hidden">
          {/* Cyber Corner Markers */}
          <span className="absolute top-3 left-3 text-xs font-mono text-cyan/60 select-none">+</span>
          <span className="absolute top-3 right-3 text-xs font-mono text-cyan/60 select-none">+</span>
          <span className="absolute bottom-3 left-3 text-xs font-mono text-cyan/60 select-none">+</span>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-cyan/60 select-none">+</span>

          {/* Top animated scanline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulse" />

          {/* Protocol Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-cyan/15 border border-cyan/50 flex items-center justify-center text-cyan backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
                  THE BLACK-BOX PROTOCOL // FLAGSHIP UNIVERSE
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  STAGE_01::SYSTEM_ESCALATION
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 font-semibold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                ₹90,000+ IN INCUBATION & POOL
              </span>
              <Badge variant="cyan" dot size="sm">
                AI × WEB3 × SYSTEMS
              </Badge>
            </div>
          </div>

          {/* Main Campaign Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] backdrop-blur-md border border-amber-400/30 text-xs font-mono text-amber-400 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                CENTRAL INDIA&apos;S PREMIER HACKATHON UNIVERSE
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground font-display tracking-tight leading-[1.12]">
                System Escalation:{" "}
                <span className="text-gradient-cyan drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                  Stage 01
                </span>
              </h2>

              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                Moving far beyond traditional slide presentations. The Black-Box Protocol is an intense, multi-phase technical arena engineered to incubate production-grade autonomous AI agent swarms, verifiable Web3 state machines, and high-performance backend systems.
              </p>

              {/* Quick Specs Bento Strip */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/[0.08] font-mono text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-slate-500 uppercase block text-[10px]">FORMAT</span>
                  <span className="text-slate-200 font-bold">2-Round Hybrid</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-slate-500 uppercase block text-[10px]">SPRINT</span>
                  <span className="text-slate-200 font-bold">12-Hr Continuous</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-slate-500 uppercase block text-[10px]">INCUBATION</span>
                  <span className="text-cyan font-bold">HiDevs × AI House</span>
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
                  Unstop Portal
                </Button>
              </div>
            </div>

            {/* Right Interactive Protocol Pipeline Deck */}
            <div className="lg:col-span-6 bg-navy-950/60 border border-white/[0.1] rounded-3xl p-6 font-mono text-xs backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_15px_35px_-10px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4 text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-cyan animate-pulse" />
                  PIPELINE_EXECUTION_FLOW
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  PHASE 01 ACTIVE
                </span>
              </div>

              {/* Pipeline Interactive Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4">
                {pipelineSteps.map((step, idx) => (
                  <button
                    key={step.phase}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-2 rounded-xl text-center font-mono text-[11px] transition-all ${
                      activeTab === idx
                        ? "bg-cyan text-navy-900 font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] border border-cyan"
                        : "bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    0{idx + 1} {step.phase}
                  </button>
                ))}
              </div>

              {/* Selected Phase Detail Showcase */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-cyan font-bold text-sm">
                      {pipelineSteps[activeTab].title}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/[0.08]">
                      [{pipelineSteps[activeTab].mode}]
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed font-sans font-normal">
                    {pipelineSteps[activeTab].desc}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] space-y-2 text-[11px]">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan font-bold shrink-0">CRITERIA:</span>
                      <span className="text-slate-400">{pipelineSteps[activeTab].criteria}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">ADVANCEMENT:</span>
                      <span className="text-slate-300 font-medium">{pipelineSteps[activeTab].perk}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-slate-400 flex items-center justify-between">
                <span>VENTURE PARTNERS: HIDEVS × AI HOUSE</span>
                <span className="text-cyan font-bold">LIMITED TO 25 TEAMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
