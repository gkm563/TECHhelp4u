"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { ArrowUpRight, Sparkles, Terminal, Users, ShieldCheck } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function CommunityCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-850/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-navy-850 to-navy-900 border border-cyan/40 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-[0_0_60px_rgba(0,229,255,0.15)]">
          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />

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
                variant="outline"
                size="lg"
                data-cursor="PARTNER"
              >
                Become a Partner
              </Button>
            </div>

            {/* Social Channels Strip */}
            <div className="mt-12 pt-8 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-4">
                Official Community Gateways
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-navy-800/80 border border-slate-700/80 hover:border-cyan/40 hover:text-cyan text-xs font-mono text-slate-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
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
