"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
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
    <div className="pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="cyan" dot size="md" className="mb-4">
            MEET THE ORGANIZERS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            The People Behind <span className="text-gradient-cyan">TECHhelp4U</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            We are a passionate team of student developers, organizers, and campus ambassadors dedicated to making practical technology education accessible to everyone.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-cyan text-navy-900 font-bold shadow-sm border border-cyan"
                    : "bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-white/[0.08]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-navy-900" : "text-cyan-700 dark:text-cyan"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                {/* Top Avatar & Role Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        member.gradient || "from-cyan-500 to-blue-600"
                      } text-white flex items-center justify-center font-display font-extrabold text-xl shadow-sm tracking-wider`}
                    >
                      {member.initials || member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    {member.tier === "leadership" && (
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 border-2 border-white dark:border-navy-950 flex items-center justify-center text-[10px] text-navy-950 font-bold shadow-sm" title="Core Leadership">
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
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan block mt-1 font-semibold">
                  {member.department}
                </span>

                {/* Bio */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {member.bio}
                </p>

                {/* Skills / Focus Areas */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links & Footer */}
              <div className="mt-7 pt-5 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                  TECHhelp4U
                </span>
                <div className="flex items-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan hover:border-cyan-500/40 transition-all"
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
                      className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan hover:border-cyan-500/40 transition-all"
                      aria-label={`${member.name} GitHub Profile`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team / Community Lead CTA */}
        <div className="mt-16 rounded-3xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.1] p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-2xl shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto relative z-10">
            <Sparkles className="w-10 h-10 text-cyan-600 dark:text-cyan mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
              Want to Lead or Join Our Core Team?
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
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
      </div>
    </div>
  );
}
