"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { FloatingOrb } from "@/components/motion/FloatingElements";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { teamData } from "@/data/team";
import { 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  Users, 
  Sparkles, 
  Heart,
  Code2,
  GraduationCap,
  Megaphone
} from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "Entire Team", icon: Users },
    { id: "leadership", label: "Core Leadership", icon: Sparkles },
    { id: "technical", label: "Technical & Workshop Leads", icon: Code2 },
    { id: "creative", label: "Creative & Design", icon: Heart },
    { id: "ambassador_lead", label: "Campus Ambassadors (CAP)", icon: GraduationCap },
    { id: "operations", label: "Operations & PR", icon: Megaphone },
  ];

  const filteredMembers = teamData.filter((member) => {
    if (selectedFilter === "all") return true;
    return member.tier === selectedFilter;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Soft ambient background glow orbs */}
      <FloatingOrb color="cyan" size="xl" className="top-20 left-1/4" />
      <FloatingOrb color="violet" size="lg" className="bottom-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="cyan" dot size="md" className="mb-4">
              MEET THE ORGANIZERS
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
              The People Behind <span className="text-gradient-cyan">TECHhelp4U</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
              We are a passionate team of student developers, organizers, and campus ambassadors dedicated to making practical technology education accessible to everyone.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Filter Pills */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-medium transition-all flex items-center gap-2 backdrop-blur-xl ${
                    isSelected
                      ? "bg-cyan text-navy-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan"
                      : "bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-white/[0.2] hover:bg-white/[0.08]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-navy-900" : "text-cyan"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <ScrollReveal key={member.id} direction="up" duration={0.4}>
              <SpotlightCard
                glowColor={member.tier === "leadership" ? "cyan" : "violet"}
                className="h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Top Avatar & Role Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/[0.15] bg-navy-900 shadow-[0_0_20px_rgba(0,229,255,0.2)] group-hover:border-cyan/50 transition-colors">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {member.tier === "leadership" && (
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan border-2 border-navy-950 flex items-center justify-center text-[9px] text-navy-950 font-bold shadow-[0_0_8px_rgba(0,229,255,0.8)]" title="Core Leadership">
                          ★
                        </span>
                      )}
                    </div>

                    <Badge
                      variant={member.tier === "leadership" ? "cyan" : "violet"}
                      size="sm"
                    >
                      {member.role}
                    </Badge>
                  </div>

                  {/* Name & Department */}
                  <h3 className="text-2xl font-bold text-foreground font-display group-hover:text-cyan transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-mono text-cyan/90 block mt-1 font-semibold">
                    {member.department}
                  </span>

                  {/* Bio */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  {/* Skills / Focus Areas */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/[0.08] text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links & Footer */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    TECHhelp4U Team
                  </span>
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan hover:border-cyan/40 hover:bg-white/[0.08] transition-all"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan hover:border-cyan/40 hover:bg-white/[0.08] transition-all"
                        aria-label={`${member.name} GitHub Profile`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Join the Team / Community Lead CTA */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="mt-16 rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
            <div className="max-w-2xl mx-auto relative z-10">
              <Sparkles className="w-10 h-10 text-cyan mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                Want to Lead or Join Our Core Team?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                We are always looking for enthusiastic student developers, designers, event organizers, and campus ambassadors to join TECHhelp4U.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/community" variant="cyan-glow" size="md">
                  Apply for Campus Ambassador (CAP 2026)
                </Button>
                <Button href="/contact" variant="glass" size="md">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
