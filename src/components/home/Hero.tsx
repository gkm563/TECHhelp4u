"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { FloatingOrb, FloatingElement } from "@/components/motion/FloatingElements";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Users, 
  Trophy, 
  GraduationCap, 
  Flame, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Heart,
  Terminal,
  BookOpen
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
              Where Passion Meets Possibility
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-200">Student Developer Ecosystem</span>
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
            Empowering India&apos;s Next Generation of{" "}
            <span className="text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,229,255,0.35)]">
              Builders & Leaders
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A student-first technology community bridging the gap between college curriculum and real industry engineering. We organize hackathons, practical coding workshops, open-source sprints, and career mentorship across India.
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
            Explore Events & Hackathons
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
            href="/team"
            variant="outline"
            size="lg"
            leftIcon={<Users className="w-4 h-4 text-slate-300" />}
          >
            Meet Our Team
          </Button>
        </motion.div>

        {/* Community Bento Showcase Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Card 1: Featured Flagship Hackathon */}
          <div className="md:col-span-7">
            <SpotlightCard
              glowColor="cyan"
              className="h-full flex flex-col justify-between p-8 bg-navy-950/60 border-cyan/30"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="cyan" dot size="sm">
                    FLAGSHIP EVENT
                  </Badge>
                  <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/25 font-semibold">
                    ₹1,00,000+ PRIZE POOL
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                  TECHhack 2026 — Annual Innovation Hackathon
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  36 hours of continuous build, code reviews, and live product demos. Open to all students across India building in AI, Web Dev, Open Source, and Web3.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/[0.08] text-xs font-mono">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-slate-400 block text-[10px]">FORMAT</span>
                    <span className="text-slate-200 font-bold">36-Hr Hybrid</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-slate-400 block text-[10px]">LOCATION</span>
                    <span className="text-slate-200 font-bold">Gwalior & Online</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block text-[10px]">PLATFORMS</span>
                    <span className="text-cyan font-bold">Unstop & Devfolio</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  href="/events/techhack-2026"
                  className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-bold"
                >
                  View Event Details <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Button
                  href="/events/techhack-2026"
                  variant="cyan-glow"
                  size="sm"
                  className="text-xs"
                >
                  Register Now
                </Button>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: 2 Stacked Bento Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Card 2: Community Stats */}
            <SpotlightCard
              glowColor="violet"
              className="flex flex-col justify-between p-7 bg-navy-950/60"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-electric-violet" />
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    Community Footprint
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 my-2">
                  <div>
                    <span className="text-3xl font-extrabold text-cyan font-display">
                      5,000+
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">Students Engaged</p>
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold text-electric-violet font-display">
                      15+
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">Hands-on Workshops</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Pan-India Chapters</span>
                <Link href="/about" className="text-cyan hover:underline font-bold">
                  Our Mission →
                </Link>
              </div>
            </SpotlightCard>

            {/* Card 3: Campus Ambassador Program */}
            <SpotlightCard
              glowColor="cyan"
              className="flex flex-col justify-between p-7 bg-navy-950/60"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan" />
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
                      CAP 2026
                    </span>
                  </div>
                  <Badge variant="cyan" size="sm">Applications Open</Badge>
                </div>
                <h4 className="text-lg font-bold text-foreground font-display">
                  Lead a TECHhelp4U Chapter on Your Campus
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Host hackathons, organize study groups, earn official LORs, and connect with top tech mentors.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">50+ Target Colleges</span>
                <Link
                  href="/community"
                  className="text-xs font-mono text-cyan hover:underline font-bold flex items-center gap-1"
                >
                  Apply as Lead <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
