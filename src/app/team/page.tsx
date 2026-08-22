import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { teamData } from "@/data/team";
import { ArrowUpRight, Linkedin, Github, Terminal, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Team & Leadership | TECHhelp4U",
  description: "Meet the student leaders, operations heads, and technical mentors architecting TECHhelp4U.",
};

export default function TeamPage() {
  const leadership = teamData.filter((m) => m.tier === "leadership");
  const others = teamData.filter((m) => m.tier !== "leadership");

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            THE ARCHITECTS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Leadership & <span className="text-gradient-cyan">Core Team</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            A dedicated group of student organizers, systems architects, and campus leaders driving high-impact technical initiatives across India.
          </p>
        </div>

        {/* Leadership Tier */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Executive Leadership & Founding Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-navy-850/90 border border-slate-800 p-8 sm:p-10 backdrop-blur-xl hover:border-cyan/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center font-bold text-cyan text-lg">
                      {member.name.substring(0, 2).toUpperCase()}
                    </div>
                    <Badge variant="cyan" dot size="sm">
                      {member.role}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground font-display group-hover:text-cyan transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block mt-1">
                    {member.department}
                  </span>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-navy-900 border border-slate-700 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    TECHhelp4U Leadership
                  </span>
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory & Ambassador Network Tier */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-electric-violet" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Technical Mentors & Campus Coordinator Network
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md hover:border-cyan/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="violet" size="sm">
                      {member.role}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-display">
                    {member.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block mt-1">
                    {member.department}
                  </span>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-900 border border-slate-800 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    Network Board
                  </span>
                  <a
                    href="/community"
                    className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-semibold"
                  >
                    Join Network <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
