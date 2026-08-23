"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { ArrowUpRight, Sparkles, Terminal, Users, ShieldCheck } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function CommunityCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-navy-950/70 border border-white/[0.12] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-3xl shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.2),0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(0,229,255,0.1)]">
          {/* Specular top glare line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent pointer-events-none" />

          {/* Ambient center multi-layer glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan/15 via-electric-violet/15 to-transparent blur-[140px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <Badge variant="cyan" dot size="md" className="mb-6">
              JOIN THE REVOLUTION
            </Badge>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-display tracking-tight leading-tight">
              Your Next Build <span className="text-gradient-cyan">Starts Here.</span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              Join an active student-driven ecosystem where ideas become working systems, projects become portfolio proof, and collaborations turn into nationwide leadership.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Button
                href="/community"
                variant="cyan-glow"
                size="lg"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                data-cursor="APPLY"
              >
                Join Community & CAP 2026
              </Button>
              <Button
                href="/contact"
                variant="glass"
                size="lg"
                data-cursor="PARTNER"
              >
                Become a Partner
              </Button>
            </div>

            {/* Social Channels Strip with frosted glass chips */}
            <div className="mt-12 pt-8 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                Official Community Gateways
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] hover:border-cyan/50 hover:bg-white/[0.08] hover:text-cyan text-xs font-mono text-slate-300 transition-all duration-200 inline-flex items-center gap-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
