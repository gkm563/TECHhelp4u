"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { CountUp } from "@/components/motion/CountUp";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { impactMetrics } from "@/data/impact";
import { CheckCircle2, ShieldCheck, ArrowUpRight, Activity, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/50 border-y border-white/[0.08]">
      {/* Background ambient chromatic refraction */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-cyan/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-electric-violet/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="VERIFIABLE MILESTONES"
          title="Measured by Real"
          highlightText="Impact & Outcomes"
          description="We do not publish fabricated vanity numbers. Our growth is driven by genuine student engagement, campus partnerships, and hands-on workshops."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, idx) => (
            <SpotlightCard
              key={metric.id}
              glowColor={idx % 2 === 0 ? "cyan" : "violet"}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-cyan font-display tracking-tight drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </span>
                  {metric.isVerified && (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-2.5 py-1 rounded-full backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.25)] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      VERIFIED
                    </span>
                  )}
                </div>

                {/* Visual Neon Indicator Bar */}
                <div className="w-full h-1 bg-white/[0.08] rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan to-electric-blue rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                    style={{ width: `${Math.min(100, 60 + idx * 12)}%` }}
                  />
                </div>

                <h4 className="text-base font-bold text-foreground font-display">
                  {metric.label}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>VERIFIED_NODE</span>
                <span className="text-cyan font-bold">METRIC_LOGGED</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Footnote on 2026-2031 Vision */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.1] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_15px_35px_-10px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan animate-ping shrink-0 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              <strong className="text-cyan">Campus Ambassador Program 2026 Target:</strong> 100 on-campus student leaders across 50 Indian universities.
            </p>
          </div>
          <Link
            href="/community"
            className="text-xs font-mono text-cyan hover:underline flex items-center gap-1.5 shrink-0 font-bold bg-cyan/10 px-4 py-2 rounded-xl border border-cyan/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:bg-cyan/20 transition-all"
          >
            Read CAP 2026 Blueprint <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
