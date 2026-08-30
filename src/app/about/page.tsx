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
  Users, 
  HeartHandshake, 
  Trophy, 
  BookOpen, 
  MapPin, 
  Phone, 
  Calendar, 
  Building2,
  AlertCircle,
  ExternalLink,
  Code2
} from "lucide-react";
import Link from "next/link";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About TECHhelp4U | Student-Driven Tech Community",
  description: "Founded in 2025 in Bhopal, TECHhelp4U democratizes tech education by bridging the gap between classroom theory and real-world application.",
};

export default function AboutPage() {
  const corePillars = [
    {
      title: "Learn",
      tagline: "Hands-on Workshops & Webinars",
      desc: "Interactive sessions covering Artificial Intelligence, Data Science, Web3, LLMs & RAG, and production software engineering.",
      icon: BookOpen,
      color: "#0284C7",
      darkColor: "#00E5FF",
    },
    {
      title: "Build",
      tagline: "Collaborative Mini-Projects & Hackathons",
      desc: "Fast-paced national hackathons like The Black Box Protocol and Skill Climax where students build and ship working production MVPs.",
      icon: Trophy,
      color: "#7C3AED",
      darkColor: "#8B5CF6",
    },
    {
      title: "Connect",
      tagline: "Peer-to-Peer Support & Networking",
      desc: "Direct mentoring with industry-ready developers, startup founders, and collegiate peers across 100+ partner tech communities.",
      icon: Users,
      color: "#059669",
      darkColor: "#10B981",
    },
  ];

  const officialPortals = [
    { name: "Linktree Official Hub", url: "https://linktr.ee/techhelpu", label: "linktr.ee/techhelpu" },
    { name: "Commudle Community", url: "https://www.commudle.com/communities/techhelp4u", label: "commudle.com/techhelp4u" },
    { name: "Unstop Hackathons", url: "https://unstop.com/hackathons/skill-climax-v10-central-india-largest-hackathon-techhelp4u-1599053", label: "unstop.com/techhelp4u" },
    { name: "Luma Events Gateway", url: "https://luma.com/2phtd15g", label: "luma.com/2phtd15g" },
    { name: "GitHub Organization", url: "https://github.com/techhelp4u", label: "github.com/techhelp4u" },
    { name: "Official YouTube Channel", url: "https://www.youtube.com/channel/UCwy0Y4Do0ZNEzBhCvGJfpYw/videos", label: "youtube.com/@techhelp4u" }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden bg-background transition-colors duration-300">
      {/* Ambient background refraction orbs */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            ABOUT TECHHELP4U
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight leading-tight">
            Built by Students, <span className="text-gradient-cyan">For Students</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A student-driven tech community bridging the gap between classroom theory and real-world application. Based in Bhopal, open to the world.
          </p>
        </div>

        {/* Quick Facts Card Strip */}
        <div className="rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-2xl shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 text-cyan-600 dark:text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">2025</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-1 uppercase">Founded In</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-foreground font-display">Bhopal, MP</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-1 uppercase">Headquarters</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-5 h-5 text-cyan-600 dark:text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">10,000+</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-1 uppercase">Active Learners</span>
          </div>
          <div className="flex flex-col items-center">
            <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">100+</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-1 uppercase">Partner Communities</span>
          </div>
        </div>

        {/* Our Story: The Problem vs The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {/* The Problem */}
          <div className="rounded-3xl bg-red-50/70 dark:bg-navy-950/60 border border-red-200 dark:border-red-500/20 p-6 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)]">
            <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-bold block mb-2">
              THE GAP IN TRADITIONAL EDUCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">
              The Problem
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal">
              Traditional academic curriculums often lag behind rapid industry changes, leaving students with theoretical knowledge but minimal production-ready skills. Students frequently graduate without experience in building scalable web apps, contributing to open source, or collaborating in agile team sprints.
            </p>
          </div>

          {/* The Solution */}
          <div className="rounded-3xl bg-cyan-50/70 dark:bg-navy-950/60 border border-cyan-200 dark:border-cyan/30 p-6 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_15px_35px_-10px_rgba(0,229,255,0.15)]">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan/10 border border-cyan-200 dark:border-cyan/40 flex items-center justify-center text-cyan-700 dark:text-cyan mb-6 shadow-sm dark:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan font-bold block mb-2">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">
              The Solution
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal">
              Founded in 2025 in Bhopal, TECHhelp4U was built to democratize tech education. We provide a sandbox environment where student developers learn by breaking, building, and deploying real systems through multi-city hackathons, startup collaborations, and peer-to-peer mentorship.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars (Learn, Build, Connect) */}
        <div className="mb-20">
          <SectionHeading
            badge="WHAT WE DO"
            title="Our Three Core"
            highlightText="Community Pillars"
            description="Empowering students at every step from curious beginner to industry-ready engineer."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-3xl bg-white/80 dark:bg-navy-950/45 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-500/40 dark:hover:border-cyan/40 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] hover:shadow-md dark:hover:shadow-[0_15px_35px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 dark:via-white/[0.1] to-transparent pointer-events-none" />
                  
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 backdrop-blur-md transition-transform group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${p.color}15`,
                        borderColor: `${p.color}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: p.color }} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase block mb-1 font-semibold">
                      {p.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground font-display mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between font-semibold">
                    <span>Active Pathway</span>
                    <span className="text-cyan-700 dark:text-cyan font-bold">100% Free →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Preview */}
        <div className="rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.1] p-6 sm:p-12 mb-20 backdrop-blur-2xl shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <Badge variant="cyan" size="sm" className="mb-2">FOUNDING & CORE LEADERSHIP</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                Meet the Minds Behind TECHhelp4U
              </h2>
            </div>
            <Button href="/team" variant="cyan-glow" size="sm" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              View Full Team Directory
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan/40 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.gradient || "from-cyan-500 to-blue-600"} text-white flex items-center justify-center font-display font-extrabold text-lg mb-4 group-hover:scale-105 transition-transform shadow-sm`}>
                  {m.initials || m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-display">{m.name}</h3>
                <span className="text-xs text-cyan-700 dark:text-cyan font-mono block mt-0.5 font-semibold">{m.role}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed font-normal">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Platforms & Online Hubs Grid */}
        <div className="rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.1] p-6 sm:p-12 backdrop-blur-2xl shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />

          <Badge variant="cyan" size="sm" className="mb-3">
            VERIFIED DIGITAL PRESENCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-6">
            Official Community Portals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {officialPortals.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan/40 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
                    {source.name}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                    {source.label}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Official Contact & HQ Location Card */}
        <div className="rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.1] p-6 sm:p-12 backdrop-blur-2xl shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="cyan" size="sm" className="mb-3">
                OFFICIAL COMMUNITY HEADQUARTERS
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                Connect with TECHhelp4U
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Whether you want to organize a campus workshop, invite our team for a speaker session, or explore partnership opportunities, we&apos;d love to hear from you.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan shrink-0" />
                  <span>Bhopal, Madhya Pradesh 462042, India</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan shrink-0" />
                  <span>+91 9238253996 / +91 9301768404</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-center">
              <Sparkles className="w-10 h-10 text-cyan-600 dark:text-cyan mb-3 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
              <h3 className="text-lg font-bold text-foreground font-display">
                Join as a Partner or Sponsor
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-sm">
                Collaborate with our 10,000+ student builder ecosystem for hackathon grants, speaker invitations, and campus outreach.
              </p>
              <div className="mt-6 flex gap-3">
                <Button href="/contact" variant="cyan-glow" size="sm">
                  Contact Us
                </Button>
                <Button href="/community" variant="glass" size="sm">
                  Campus Ambassador
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
