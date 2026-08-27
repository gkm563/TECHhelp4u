"use client";

import React from "react";
import Link from "next/link";
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
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
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
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.05] backdrop-blur-2xl border border-white/[0.12] text-xs font-mono text-cyan shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.18),0_10px_30px_-5px_rgba(0,229,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-bold tracking-wide uppercase">
              Built by Students, For Students
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200">Student Tech Community</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground font-display leading-[1.1]">
            Bridge the Gap Between Learning &{" "}
            <span className="text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,229,255,0.35)]">
              Real-World Application
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            TECHhelp4U is a student-driven tech community offering accessible, hands-on opportunities in technology, innovation, and personal development. Whether you&apos;re a curious beginner, a skilled coder, or passionate about tech education — this is your platform to learn, share, and grow.
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
            href="/events"
            variant="cyan-glow"
            size="lg"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Explore Workshops & Hackathons
          </Button>
          <Button
            href="/community"
            variant="glass"
            size="lg"
            leftIcon={<GraduationCap className="w-4 h-4 text-cyan" />}
          >
            Campus Ambassador (CAP 2026)
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            leftIcon={<HeartHandshake className="w-4 h-4 text-slate-300" />}
          >
            Partner With Us
          </Button>
        </motion.div>

        {/* 4 Community Empowerment Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Pillar 1 */}
          <SpotlightCard glowColor="cyan" className="p-6 bg-navy-950/60 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-4 backdrop-blur-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-display">
                Skill-Building Workshops
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Practical webinars and hands-on coding sessions covering Web Dev, AI, Open Source, and modern engineering tools.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-cyan flex items-center justify-between">
              <span>Hands-on Labs</span>
              <span>100% Free →</span>
            </div>
          </SpotlightCard>

          {/* Pillar 2 */}
          <SpotlightCard glowColor="violet" className="p-6 bg-navy-950/60 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-electric-violet/10 border border-electric-violet/30 flex items-center justify-center text-electric-violet mb-4 backdrop-blur-md">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-display">
                Hackathons & Mini Projects
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Fostering creativity through 36-hour hackathons, mini builds, portfolio projects, and exciting cash prizes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-electric-violet flex items-center justify-between">
              <span>TECHhack & Sprints</span>
              <span>Compete & Win →</span>
            </div>
          </SpotlightCard>

          {/* Pillar 3 */}
          <SpotlightCard glowColor="cyan" className="p-6 bg-navy-950/60 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-4 backdrop-blur-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-display">
                Collaborations with Experts
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Partnering with startup founders, tech platforms like Devfolio & Unstop, and seasoned engineers for real mentorship.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-cyan flex items-center justify-between">
              <span>Startup Ecosystem</span>
              <span>Mentorship →</span>
            </div>
          </SpotlightCard>

          {/* Pillar 4 */}
          <SpotlightCard glowColor="violet" className="p-6 bg-navy-950/60 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 backdrop-blur-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-display">
                Peer-to-Peer Support
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                A growing, welcoming student support network across 50+ college chapters to collaborate, ask questions, and grow together.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400 flex items-center justify-between">
              <span>Discord & WhatsApp</span>
              <span>Join Squad →</span>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
