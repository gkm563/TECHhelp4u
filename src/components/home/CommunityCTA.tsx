"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { ArrowUpRight, Sparkles, Users, MessageSquare } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function CommunityCTA() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white/90 dark:bg-navy-950/70 border border-slate-200/90 dark:border-white/[0.12] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-3xl shadow-sm">
          {/* Specular top glare line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/50 to-transparent pointer-events-none" />

          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <Badge variant="cyan" dot size="md" className="mb-6">
              JOIN OUR STUDENT TECH COMMUNITY
            </Badge>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-display tracking-tight leading-tight">
              Ready to Learn, Build, & <span className="text-gradient-cyan">Grow Together?</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Join over 10,000 student developers. Get help with code, find hackathon teammates, attend free workshops, and build resume-defining projects.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
              <Button
                href="https://linktr.ee/techhelpu"
                isExternal
                variant="cyan-glow"
                size="lg"
                className="w-full sm:w-auto justify-center"
                leftIcon={<MessageSquare className="w-4 h-4" />}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Join WhatsApp & Discord
              </Button>
              <Button
                href="/community"
                variant="glass"
                size="lg"
                className="w-full sm:w-auto justify-center"
              >
                Apply as Campus Ambassador (CAP)
              </Button>
            </div>

            {/* Social Channels Strip */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-4 font-semibold">
                Official Community Platforms
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 sm:px-4 py-2 rounded-2xl bg-slate-50 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/50 dark:hover:border-cyan/50 hover:bg-slate-100 dark:hover:bg-white/[0.08] text-cyan-700 dark:text-cyan text-xs font-mono transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 shadow-sm font-semibold"
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
