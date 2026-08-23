"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { CountUp } from "@/components/motion/CountUp";
import { impactMetrics } from "@/data/impact";
import { CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/40 border-y border-white/[0.08]">
      {/* Background ambient chromatic refraction */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-violet/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="VERIFIABLE MILESTONES"
          title="Measured by Real"
          highlightText="Impact & Outcomes"
          description="We do not publish fabricated numbers. Our growth is driven by genuine student engagement, campus partnerships, and hands-on workshops."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => (
            <div
              key={metric.id}
              className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-7 backdrop-blur-2xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.18)] hover:-translate-y-1.5 relative overflow-hidden group"
            >
              {/* Specular top glare line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-cyan font-display tracking-tight drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </span>
                  {metric.isVerified && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      VERIFIED
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-foreground font-display">
                  {metric.label}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 relative z-10">
                <span>TECHhelp4U Ecosystem</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on 2026-2031 Vision */}
        <div className="mt-12 p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse shrink-0 shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-foreground">Campus Ambassador Program 2026 Target:</strong> 100 on-campus student leaders across 50 Indian universities.
            </p>
          </div>
          <Link
            href="/community"
            className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 shrink-0 font-semibold"
          >
            Read CAP 2026 Blueprint <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
