import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { initiativesData } from "@/data/initiatives";
import { 
  Terminal, 
  Cpu, 
  Users2, 
  Trophy, 
  Code2, 
  CheckCircle2, 
  ArrowUpRight, 
  AlertCircle, 
  Target 
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flagship Initiatives | TECHhelp4U",
  description: "Explore TECHhelp4U's core builder initiatives: The Black-Box Protocol, Campus Ambassador Program 2026, Skill Climax Universe, and Open Source Labs.",
};

export default function InitiativesPage() {
  const iconMap: Record<string, any> = {
    Users: Users2,
    Cpu: Cpu,
    Trophy: Trophy,
    Code: Code2,
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction glows */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            CORE PROGRAMS & SPRINT ENGINES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Our Flagship <span className="text-gradient-cyan">Initiatives</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Every initiative at TECHhelp4U is engineered around a specific gap in standard college education — designed to provide measurable skills, open-source portfolio items, and direct career acceleration.
          </p>
        </div>

        {/* Initiatives List */}
        <div className="space-y-12">
          {initiativesData.map((init) => {
            const Icon = iconMap[init.iconName] || Terminal;

            return (
              <div
                key={init.id}
                className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_50px_-10px_rgba(0,0,0,0.6)]"
              >
                {/* Specular top glare line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge variant="cyan" dot size="sm">
                          {init.badge}
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mt-1">
                          {init.title}
                        </h2>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-cyan bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                      {init.tagline}
                    </span>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-4xl font-normal">
                    {init.description}
                  </p>

                  {/* Problem & Objective Glass Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-400" /> The Problem We Solve
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {init.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-cyan" /> Core Program Objective
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {init.objective}
                      </p>
                    </div>
                  </div>

                  {/* How It Works & Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/[0.06]">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                        How The Program Operates
                      </h4>
                      <ul className="space-y-2.5">
                        {init.howItWorks.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-normal">
                            <span className="text-cyan font-mono font-bold shrink-0">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                        Measurable Outcomes
                      </h4>
                      <ul className="space-y-2.5">
                        {init.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-normal">
                            <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-400">
                      Target Audience: {init.targetAudience}
                    </span>
                    <Button
                      href={init.slug === "campus-ambassador-program" ? "/community" : "/events"}
                      variant="glass"
                      size="sm"
                      rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      {init.slug === "campus-ambassador-program" ? "Explore Ambassador Hub" : "View Associated Events"}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
