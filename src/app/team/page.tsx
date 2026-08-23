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
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction glows */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Executive Leadership & Founding Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 sm:p-10 backdrop-blur-2xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_45px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Specular top glare line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center font-bold text-cyan text-lg backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.25)]">
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

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/[0.07] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-slate-400">
                    TECHhelp4U Leadership
                  </span>
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-cyan hover:border-cyan/30 transition-all"
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
                        className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-cyan hover:border-cyan/30 transition-all"
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
            <span className="w-2 h-2 rounded-full bg-electric-violet animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Technical Mentors & Campus Coordinator Network
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-8 backdrop-blur-2xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />
                <div className="relative z-10">
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

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.06] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-slate-400">
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
