"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { CountUp } from "@/components/motion/CountUp";
import { impactMetrics } from "@/data/impact";
import { CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-850/60 border-y border-slate-800/80">
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
              className="rounded-3xl bg-navy-900/90 border border-slate-800 p-7 backdrop-blur-md hover:border-cyan/40 hover:bg-navy-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-cyan font-display tracking-tight">
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </span>
                  {metric.isVerified && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      VERIFIED
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-foreground font-display">
                  {metric.label}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                <span>TECHhelp4U Ecosystem</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on 2026-2031 Vision */}
        <div className="mt-12 p-6 rounded-2xl bg-navy-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse shrink-0" />
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
