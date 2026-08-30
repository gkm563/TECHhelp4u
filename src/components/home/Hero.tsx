"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { 
  ArrowUpRight, 
  Users, 
  Trophy, 
  GraduationCap, 
  BookOpen, 
  Code2, 
  HeartHandshake,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Share2
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const perks = [
    {
      title: "100% Free Workshops",
      desc: "Learn Full-Stack, AI/ML, Cloud, and Open-Source with practical step-by-step masterclasses.",
      icon: BookOpen,
      tag: "LEARN",
      accent: "text-sky-600 dark:text-cyan",
      bg: "bg-sky-50 dark:bg-cyan/10 border-sky-200 dark:border-cyan/30",
    },
    {
      title: "Hackathons & Sprints",
      desc: "Build real projects, find hackathon teammates, win cash prizes, and earn verified certificates.",
      icon: Trophy,
      tag: "BUILD",
      accent: "text-purple-600 dark:text-electric-violet",
      bg: "bg-purple-50 dark:bg-electric-violet/10 border-purple-200 dark:border-electric-violet/30",
    },
    {
      title: "Peer-to-Peer Network",
      desc: "Get instant doubt resolution, code reviews, and mentorship from senior student developers.",
      icon: Users,
      tag: "CONNECT",
      accent: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30",
    },
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden flex flex-col justify-center transition-colors duration-300">
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="flex flex-wrap sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/90 dark:bg-white/[0.05] backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.12] text-xs font-mono shadow-sm text-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-bold text-slate-800 dark:text-slate-200">
              STUDENT-DRIVEN TECH COMMUNITY
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="text-cyan-700 dark:text-cyan font-medium">
              Based in Bhopal, Open to Everyone
            </span>
          </div>
        </motion.div>

        {/* Main Community Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground font-display leading-[1.15] sm:leading-[1.1]">
            Learn by Building.{" "}
            <span className="text-gradient-cyan">
              Grow with Community.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            TECHhelp4U is a student-driven tech community built by students, for students. We host free hands-on coding workshops, national hackathons, and connect you with mentors and teammates across 50+ colleges.
          </p>
        </motion.div>

        {/* Community Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16"
        >
          <Button
            href="https://linktr.ee/techhelpu"
            isExternal
            variant="cyan-glow"
            size="lg"
            className="w-full sm:w-auto justify-center font-bold"
            leftIcon={<MessageSquare className="w-4 h-4" />}
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Join WhatsApp & Discord
          </Button>
          <Button
            href="/events"
            variant="glass"
            size="lg"
            className="w-full sm:w-auto justify-center"
            leftIcon={<Trophy className="w-4 h-4 text-cyan-600 dark:text-cyan" />}
          >
            Explore Free Events & Sprints
          </Button>
          <Button
            href="/community"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto justify-center"
            leftIcon={<GraduationCap className="w-4 h-4 text-slate-500 dark:text-slate-300" />}
          >
            Campus Ambassador (CAP)
          </Button>
        </motion.div>

        {/* 3 Core Value Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16"
        >
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 shadow-sm ${p.bg}`}>
                    <Icon className={`w-6 h-6 ${p.accent}`} />
                  </div>
                  <span className={`text-[11px] font-mono font-bold tracking-wider uppercase block mb-1 ${p.accent}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground font-display mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between font-semibold">
                  <span>Student Friendly</span>
                  <span className={p.accent}>100% Free →</span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Real Community Impact Numbers Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />
          
          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-foreground font-display block">10,000+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Active Students</span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-foreground font-display block">10+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Hackathons & Bootcamps</span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-foreground font-display block">50+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">College Chapters</span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan font-display block">₹2,00,000+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Prizes & Grants</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
