"use client";

import React from "react";
import { partnersData } from "@/data/partners";
import { ArrowUpRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";

export function TrustMarquee() {
  const row1Partners = partnersData.slice(0, 5);
  const row2Partners = partnersData.slice(5);

  return (
    <section className="py-14 sm:py-16 border-y border-slate-200/80 dark:border-white/[0.08] bg-slate-50/80 dark:bg-navy-950/50 backdrop-blur-2xl overflow-hidden relative transition-colors duration-300">
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 dark:bg-cyan animate-pulse shrink-0 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 font-bold">
            Trusted Ecosystem Collaborations & Platform Partners
          </h2>
        </div>
        <Link
          href="/collaborations"
          className="text-xs font-mono text-cyan-700 dark:text-cyan hover:underline flex items-center gap-1.5 font-bold shrink-0 group"
        >
          <span>Explore All 100+ Alliances</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Infinite marquee ticker Track 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden select-none mb-4 group">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-4 sm:gap-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0">
          {row1Partners.concat(row1Partners).concat(row1Partners).map((partner, index) => (
            <div
              key={`r1-${partner.id}-${index}`}
              className="flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white/95 dark:bg-navy-950/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/50 dark:hover:border-cyan/50 hover:bg-white dark:hover:bg-navy-900 transition-all duration-200 shrink-0 shadow-sm hover:shadow-md"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                  partner.gradient || "from-cyan-500 to-blue-600"
                } text-white flex items-center justify-center font-display font-extrabold text-xs shadow-sm shrink-0`}
              >
                {partner.initials || partner.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground font-display">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan font-semibold">
                  {partner.collaborationType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite marquee ticker Track 2 (Right to Left) */}
      <div className="relative w-full overflow-hidden select-none group">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-4 sm:gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] shrink-0">
          {row2Partners.concat(row2Partners).concat(row2Partners).map((partner, index) => (
            <div
              key={`r2-${partner.id}-${index}`}
              className="flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white/95 dark:bg-navy-950/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/50 dark:hover:border-cyan/50 hover:bg-white dark:hover:bg-navy-900 transition-all duration-200 shrink-0 shadow-sm hover:shadow-md"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                  partner.gradient || "from-purple-500 to-indigo-600"
                } text-white flex items-center justify-center font-display font-extrabold text-xs shadow-sm shrink-0`}
              >
                {partner.initials || partner.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground font-display">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                  {partner.collaborationType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
