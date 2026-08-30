"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { 
  Trophy, 
  Code2, 
  Users, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Flame,
  Award,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FlagshipHackathonSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const hackathonStages = [
    {
      stage: "STEP 01",
      title: "Online Registration & Problem PPT",
      desc: "Register your team on Unstop, choose a challenge track (AI/ML, Full-Stack, Web3), and submit your proposed solution overview.",
      timing: "Online Round",
      perk: "Access to discord prep channels & mentor AMAs",
    },
    {
      stage: "STEP 02",
      title: "12-Hour Live Build Sprint @ MITS Gwalior",
      desc: "Shortlisted squads build on-ground at MITS Gwalior — rapid prototyping, code execution, and live debugging under mentor guidance.",
      timing: "Grand Finale",
      perk: "1-on-1 feedback from senior tech engineers",
    },
    {
      stage: "STEP 03",
      title: "Live Product Demos & Jury Presentation",
      desc: "Pitch working prototypes to evaluators from industry leading tech firms and developer DAOs. Judged on innovation and execution.",
      timing: "Demo Day",
      perk: "₹2,00,000 Total Prizes, Trophies & Merit Certificates",
    },
    {
      stage: "STEP 04",
      title: "Post-Event Incubation & Mentorship",
      desc: "Winning teams receive ongoing project mentorship, cloud credits, and direct interview connections for developer internships.",
      timing: "Post-Hackathon",
      perk: "Resume reviews & startup acceleration connects",
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/60 dark:bg-navy-950/60 border-y border-slate-200/80 dark:border-white/[0.08] transition-colors duration-300">
      {/* Background ambient chromatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white/95 dark:bg-navy-950/80 border border-slate-200/90 dark:border-white/[0.12] backdrop-blur-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold block">
                  FLAGSHIP NATIONAL HACKATHON
                </span>
                <span className="text-sm font-bold text-foreground font-display">
                  Skill Climax & The Black-Box Protocol
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-400/30 font-bold">
                ₹2,00,000 PRIZE POOL
              </span>
              <Badge variant="cyan" size="sm">
                500+ BUILDERS
              </Badge>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300 mb-4 font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
                <span>CO-ORGANIZED WITH MITS GWALIOR, HIDEVS & UNSTOP</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-display tracking-tight leading-[1.15]">
                Central India&apos;s Largest{" "}
                <span className="text-gradient-cyan">Student Hackathon</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Over 500+ enthusiastic student developers participated across India. Participants tackled real-world challenges in Artificial Intelligence, Web3, and Full-Stack Engineering with active industry mentorship.
              </p>

              {/* Quick Details Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-white/[0.08] font-mono text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">VENUE</span>
                  <span className="text-slate-800 dark:text-slate-200 font-bold">MITS Gwalior & Online</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">CASH PRIZES</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">₹2,00,000</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">PLATFORMS</span>
                  <span className="text-cyan-700 dark:text-cyan font-bold">Unstop & HiDevs</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-8">
                <Button
                  href="/events/system-escalation"
                  variant="cyan-glow"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  View Event & Winners
                </Button>
                <Button
                  href="/events"
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  Explore All Hackathons
                </Button>
              </div>
            </div>

            {/* Right Column: 4 Hackathon Steps */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-white/[0.08] rounded-3xl p-5 sm:p-6 font-mono text-xs backdrop-blur-2xl shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-3 mb-4 text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-200 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan" />
                  HACKATHON STRUCTURE
                </span>
                <span className="text-cyan-700 dark:text-cyan font-bold text-[10px] sm:text-xs">
                  4 STAGES
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4">
                {hackathonStages.map((s, idx) => (
                  <button
                    key={s.stage}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-2 rounded-xl text-center font-mono text-[11px] transition-all ${
                      activeTab === idx
                        ? "bg-cyan text-navy-900 font-bold shadow-sm border border-cyan"
                        : "bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    {s.stage}
                  </button>
                ))}
              </div>

              {/* Selected Tab Detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] space-y-3 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <span className="text-cyan-700 dark:text-cyan font-bold text-sm font-display">
                      {hackathonStages[activeTab].title}
                    </span>
                    <span className="self-start sm:self-auto text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-white/[0.08]">
                      {hackathonStages[activeTab].timing}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-sans font-normal">
                    {hackathonStages[activeTab].desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center gap-2 text-[11px]">
                    <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">KEY PERK:</span>
                    <span className="text-slate-700 dark:text-slate-300">{hackathonStages[activeTab].perk}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.08] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between font-medium">
                <span>UNSTOP × HIDEVS × GWALIOR DAO</span>
                <span className="text-cyan-700 dark:text-cyan font-bold">500+ STUDENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
