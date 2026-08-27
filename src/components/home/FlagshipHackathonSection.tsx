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
      stage: "STAGE 01",
      title: "Architecture Blueprint & Skill Assessment",
      desc: "Register your team on Unstop, submit your 6-slide system architecture blueprint, and complete the technical skill assessment powered by HiDevs.",
      timing: "Filtration Round (Online)",
      perk: "Access to mentor office hours & Discord prep channels",
    },
    {
      stage: "STAGE 02",
      title: "12-Hour Intensive Build Arena @ MITS Gwalior",
      desc: "Top shortlisted squads compete live on-ground at the Center for Computer Science & Technology, MITS Gwalior — pure execution, live debugging, and system sprints.",
      timing: "Grand Finale",
      perk: "Direct mentorship from Web3 and AI industry engineers",
    },
    {
      stage: "STAGE 03",
      title: "Live Product Demos & Jury Evaluation",
      desc: "Present working MVPs to judges from SITA, Propvivo, Nasdaq, and Gwalior DAO. Evaluated on system design, innovation, and real-world utility.",
      timing: "Demo Day & Results",
      perk: "₹2,00,000 Total Prize Pool, Winner Trophies & Merit LORs",
    },
    {
      stage: "STAGE 04",
      title: "6–12 Month Incubation & Acceleration",
      desc: "Winning teams (Shield Clan, Gradient Gang, Code Sena, NyaySetu) receive ongoing post-event mentorship, cloud compute, and startup acceleration.",
      timing: "Post-Hackathon Support",
      perk: "Direct placement connect, cloud credits & accelerator access",
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-navy-950/60 border-y border-white/[0.08]">
      {/* Background ambient chromatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-electric-violet/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-navy-950/80 border border-white/[0.12] backdrop-blur-3xl p-6 sm:p-10 lg:p-12 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.15),0_25px_70px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(0,229,255,0.1)] relative overflow-hidden">
          {/* Specular top glare line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)] shrink-0">
                <Trophy className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan font-bold block">
                  FLAGSHIP NATIONAL HACKATHON
                </span>
                <span className="text-sm font-bold text-foreground font-display">
                  The Black-Box Protocol • Stage 01: System Escalation
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30 font-bold">
                ₹2,00,000 PRIZE POOL
              </span>
              <Badge variant="cyan" size="sm">
                AI × WEB3 CONVERGENCE
              </Badge>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-amber-400/30 text-xs font-mono text-amber-400 mb-4">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
                <span>MITS GWALIOR • WITH HIDEVS & UNSTOP</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-display tracking-tight leading-[1.15]">
                The Black-Box Protocol:{" "}
                <span className="text-gradient-cyan">System Escalation</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                A 9-city national hackathon series empowering student innovators. 500+ builders competed in AI, Web3, and Data Science — judged by senior industry mentors and backed by long-term 6–12 month incubation.
              </p>

              {/* Quick Details Strip (Fully Responsive) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-6 pt-6 border-t border-white/[0.08] font-mono text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-slate-400 block text-[10px]">VENUE</span>
                  <span className="text-slate-200 font-bold">MITS Gwalior</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-slate-400 block text-[10px]">PRIZE POOL</span>
                  <span className="text-amber-400 font-bold">₹2,00,000</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-slate-400 block text-[10px]">PARTNERS</span>
                  <span className="text-cyan font-bold">Unstop & HiDevs</span>
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

            {/* Right Column: Interactive Hackathon Journey Tabs */}
            <div className="lg:col-span-6 bg-navy-950/60 border border-white/[0.08] rounded-3xl p-5 sm:p-6 font-mono text-xs backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4 text-slate-400">
                <span className="flex items-center gap-1.5 text-xs text-slate-200 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-cyan" />
                  INCUBATION ROADMAP
                </span>
                <span className="text-cyan font-bold text-[10px] sm:text-xs">
                  9-CITY SERIES
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
                        ? "bg-cyan text-navy-900 font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] border border-cyan"
                        : "bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-slate-200"
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
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <span className="text-cyan font-bold text-sm font-display">
                      {hackathonStages[activeTab].title}
                    </span>
                    <span className="self-start sm:self-auto text-[10px] text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/[0.08]">
                      {hackathonStages[activeTab].timing}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed font-sans font-normal">
                    {hackathonStages[activeTab].desc}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px]">
                    <span className="text-amber-400 font-bold shrink-0">KEY PERK:</span>
                    <span className="text-slate-300">{hackathonStages[activeTab].perk}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 pt-3 border-t border-white/[0.08] text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-between">
                <span>UNSTOP × HIDEVS × GWALIOR DAO</span>
                <span className="text-cyan font-bold">500+ BUILDERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
