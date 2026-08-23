import React from "react";
import type { Metadata } from "next";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Terminal, 
  Users2, 
  TrendingUp, 
  Flame 
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Philosophy, Mission & 5-Year Roadmap",
  description: "Learn how TECHhelp4U began as a peer-to-peer engineering group and grew into a pan-India student technology leadership ecosystem.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Accessibility",
      desc: "Zero paywalls on foundational technical learning. Quality knowledge should never be gated by tuition fees or geography.",
      icon: Target,
      color: "#00E5FF",
    },
    {
      title: "Authenticity",
      desc: "Real mentors, real codebases, honest case studies, and zero fabricated vanity statistics. What you see is what we build.",
      icon: ShieldCheck,
      color: "#8B5CF6",
    },
    {
      title: "Consistency",
      desc: "A predictable, structured cadence of workshops, hackathons, and study groups rather than fleeting one-off hype events.",
      icon: Sparkles,
      color: "#10B981",
    },
    {
      title: "Merit-Based Growth",
      desc: "Recognition, letters of recommendation, and leadership promotions tied directly to tangible contributions and skill mastery.",
      icon: TrendingUp,
      color: "#F59E0B",
    },
  ];

  const roadmapMilestones = [
    {
      year: "Year 1 (2026)",
      title: "Pilot Validation & 50 Campuses",
      desc: "Deploy the Campus Ambassador Program (CAP) across 50 target colleges, establish Regional Lead tiers, and execute flagship hybrid hackathons.",
      status: "CURRENT FOCUS",
    },
    {
      year: "Year 2 (2027)",
      title: "250 Colleges & Flagship Conference",
      desc: "Host the inaugural TECHhelp4U National Builder Summit and formalize corporate accelerator sponsorships.",
      status: "PLANNED",
    },
    {
      year: "Year 3 (2028)",
      title: "500 Colleges & State Governance",
      desc: "Decentralized state chapter leadership circles driving regional innovation labs and hackathon qualifying circuits.",
      status: "PLANNED",
    },
    {
      year: "Year 4 (2029)",
      title: "750 Colleges & Alumni Placements",
      desc: "Dedicated talent placement network matching high-performing alumni directly with tech scale-ups and venture studios.",
      status: "PLANNED",
    },
    {
      year: "Year 5 (2030–31)",
      title: "1,000+ Colleges Pan-India Network",
      desc: "Self-sustaining student innovation engine operating across every major engineering and technical hub in India.",
      status: "PLANNED",
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction orbs */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="cyan" dot size="md" className="mb-4">
            OUR STORY & PHILOSOPHY
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Building India&apos;s Student{" "}
            <span className="text-gradient-cyan">Technology Ecosystem</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed font-normal">
            TECHhelp4U began as a small peer-to-peer help group among engineering students tired of learning in isolation. Today, it is evolving into a structured leadership and builder network spanning dozens of campuses.
          </p>
        </div>

        {/* Founder Message Frosted Glass Section */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 mb-20 backdrop-blur-2xl relative overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_50px_-10px_rgba(0,0,0,0.6)]">
          {/* Specular top glare line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan shrink-0 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.25)]">
              <Terminal className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold block mb-2">
                FOUNDER&apos;S PERSPECTIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                &ldquo;Talent in India&apos;s colleges is not the constraint — access, mentorship, and consistent opportunity are.&rdquo;
              </h2>
              <div className="mt-4 space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Every large movement begins with a small, stubborn belief. Over our cycles of workshops, hackathons, and community drives, we consistently observed the same pattern: motivated students exist on every campus, but they lack a structured platform to convert that motivation into leadership experience, a professional network, and a portfolio of real accomplishments.
                </p>
                <p>
                  TECHhelp4U exists to solve that problem deliberately, measurably, and at scale. We are not just organizing weekend events; we are building a multi-year leadership pipeline where students who join as curious learners today become the regional chapter heads and core team members of tomorrow.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-foreground">Vedansh Goyal</h4>
                  <p className="text-xs font-mono text-slate-400">Founder & Community Lead, TECHhelp4U</p>
                </div>
                <Link
                  href="/team"
                  className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-semibold"
                >
                  Meet Leadership Team <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-8 backdrop-blur-xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-display mb-3">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              To make high-quality technical learning, mentorship, and real-world opportunity accessible to every student, regardless of which college they attend or what resources their campus provides.
            </p>
          </div>

          <div className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-8 backdrop-blur-xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-violet/30 to-transparent pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-electric-violet/10 border border-electric-violet/40 flex items-center justify-center text-electric-violet mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-display mb-3">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              To become one of India&apos;s most trusted and active student-led technology ecosystems — a recognizable platform where builders launch production software, lead campus chapters, and connect directly with industry opportunities.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <SectionHeading
            badge="OUR CORE PRINCIPLES"
            title="Values That Guide"
            highlightText="Every Decision"
            description="Our culture is built around practical execution, transparent meritocracy, and putting the student builder first."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-7 backdrop-blur-xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_15px_35px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />
                  
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 backdrop-blur-md transition-transform group-hover:scale-110 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]"
                    style={{
                      backgroundColor: `${v.color}15`,
                      borderColor: `${v.color}40`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: v.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-foreground font-display mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Year Expansion Roadmap Glass Container */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <Badge variant="cyan" dot size="sm" className="mb-3">
              EXPANSION PLAYBOOK
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
              5-Year Strategic Roadmap (2026–2031)
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Our structured trajectory from pilot campus validation to a pan-India student leadership ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            {roadmapMilestones.map((m) => (
              <div
                key={m.year}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] hover:border-cyan/40 hover:bg-white/[0.06] transition-all duration-200 gap-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="font-mono text-sm font-bold text-cyan bg-cyan/10 px-3 py-1.5 rounded-xl border border-cyan/25 shrink-0 shadow-[0_0_10px_rgba(0,229,255,0.15)]">
                    {m.year}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-foreground font-display">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl">
                      {m.desc}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[11px] font-mono px-3 py-1 rounded-full border self-start sm:self-auto shrink-0 ${
                    m.status === "CURRENT FOCUS"
                      ? "text-cyan bg-cyan/10 border-cyan/40 animate-pulse shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                      : "text-slate-400 bg-white/[0.02] border-white/[0.08]"
                  }`}
                >
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
