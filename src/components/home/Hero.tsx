"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { FloatingOrb } from "@/components/motion/FloatingElements";
import { 
  ArrowUpRight, 
  Sparkles, 
  Users, 
  Trophy, 
  GraduationCap, 
  BookOpen, 
  Code2, 
  HeartHandshake,
  MessageSquare,
  Globe,
  Flame,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden flex flex-col justify-center transition-colors duration-300">
      {/* Soft ambient background glow orbs */}
      <FloatingOrb color="cyan" size="xl" className="top-1/4 left-1/2 -translate-x-1/2" />
      <FloatingOrb color="violet" size="lg" className="-bottom-20 right-10" />
      <FloatingOrb color="blue" size="md" className="top-1/3 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="flex flex-wrap sm:inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/80 dark:bg-white/[0.05] backdrop-blur-2xl border border-slate-200 dark:border-white/[0.12] text-[11px] sm:text-xs font-mono text-cyan-700 dark:text-cyan shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.18),0_10px_30px_-5px_rgba(0,229,255,0.2)] text-center">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan animate-pulse shrink-0" />
            <span className="font-bold tracking-wide uppercase">
              STUDENT-DRIVEN TECH COMMUNITY
            </span>
            <span className="hidden sm:inline text-slate-400 dark:text-slate-600">|</span>
            <span className="text-slate-700 dark:text-slate-200">Based in Bhopal, Open to the World</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground font-display leading-[1.15] sm:leading-[1.1]">
            Empowering the Next Generation of{" "}
            <span className="text-gradient-cyan drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(0,229,255,0.35)]">
              Tech Innovators
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            A student-driven tech community bridging the gap between classroom theory and real-world application. We provide a hands-on sandbox where developers learn by breaking, building, and deploying real systems.
          </p>
        </motion.div>

        {/* CTAs (Mobile Full-Width Thumb Friendly) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <Button
            href="https://linktr.ee/techhelpu"
            isExternal
            variant="cyan-glow"
            size="lg"
            className="w-full sm:w-auto justify-center"
            leftIcon={<MessageSquare className="w-4 h-4" />}
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Join Our Discord / WhatsApp
          </Button>
          <Button
            href="/events"
            variant="glass"
            size="lg"
            className="w-full sm:w-auto justify-center"
            leftIcon={<Trophy className="w-4 h-4 text-cyan" />}
          >
            Explore Events & Hackathons
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

        {/* 3 Core Pillars (Learn, Build, Connect) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16"
        >
          {/* Pillar 1: LEARN */}
          <SpotlightCard glowColor="cyan" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan/10 border border-cyan-300 dark:border-cyan/30 flex items-center justify-center text-cyan-700 dark:text-cyan mb-5 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan font-bold uppercase tracking-wider">PILLAR 01</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Workshops & Webinars</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
                Learn
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Hands-on interactive masterclasses covering Artificial Intelligence, Data Science, Web3, LLMs & RAG, and production software engineering.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-cyan-700 dark:text-cyan flex items-center justify-between font-semibold">
              <span>Interactive Sessions</span>
              <span>100% Free Access →</span>
            </div>
          </SpotlightCard>

          {/* Pillar 2: BUILD */}
          <SpotlightCard glowColor="violet" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-electric-violet/10 border border-purple-300 dark:border-electric-violet/30 flex items-center justify-center text-purple-700 dark:text-electric-violet mb-5 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-purple-700 dark:text-electric-violet font-bold uppercase tracking-wider">PILLAR 02</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Hackathons & Sprints</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
                Build
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Collaborative mini-projects and fast-paced national hackathons like The Black Box Protocol and Skill Climax with ₹2,00,000+ in prize pools.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-purple-700 dark:text-electric-violet flex items-center justify-between font-semibold">
              <span>Ship Real MVPs</span>
              <span>Compete & Win →</span>
            </div>
          </SpotlightCard>

          {/* Pillar 3: CONNECT */}
          <SpotlightCard glowColor="cyan" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-5 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">PILLAR 03</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Peer Network</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
                Connect
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Peer-to-peer mentoring, startup collaborations, and direct networking with industry-ready developers across 100+ partner communities.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center justify-between font-semibold">
              <span>Discord & WhatsApp Hubs</span>
              <span>Join Network →</span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Metrics & Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_45px_-10px_rgba(0,0,0,0.6)] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />
          
          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-foreground font-display block">10,000+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Active Learners</span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-foreground font-display block">10+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Hackathons & Sprints</span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-foreground font-display block">100+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Partner Communities</span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan font-display block">₹2,00,000+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 block">Prize Pool Awarded</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
