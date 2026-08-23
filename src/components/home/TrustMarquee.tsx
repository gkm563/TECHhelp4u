"use client";

import React from "react";
import { partnersData } from "@/data/partners";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function TrustMarquee() {
  const verifiedPartners = partnersData.filter((p) => p.featured);

  return (
    <section className="py-12 border-y border-white/[0.08] bg-navy-950/40 backdrop-blur-xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Trusted Ecosystem Collaborations & Platform Partners
          </span>
        </div>
        <Link
          href="/collaborations"
          className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-semibold"
        >
          View Partner Network <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Infinite marquee ticker */}
      <div className="flex w-full overflow-hidden mask-gradient-x select-none">
        <div className="flex items-center gap-6 animate-marquee shrink-0">
          {verifiedPartners.concat(verifiedPartners).map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] hover:border-cyan/50 hover:bg-white/[0.08] transition-all duration-300 shrink-0 group shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] backdrop-blur-md flex items-center justify-center font-bold text-xs text-cyan border border-white/[0.1]">
                {partner.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan transition-colors font-display">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
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
