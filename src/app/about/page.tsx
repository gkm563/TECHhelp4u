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
  Globe,
  Youtube,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About TECHhelp4U | Student-Driven Tech Community",
  description: "Learn about TECHhelp4U, founded in 2025 in Bhopal, MP. Built by students, for students to bridge the gap between learning and real-world application for 10,000+ learners.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Skill-Building Workshops & Webinars",
      desc: "Interactive sessions providing hands-on exposure to cutting-edge technologies including LLMs, RAG, Web3, full-stack development, and cloud computing.",
      icon: BookOpen,
      color: "#00E5FF",
    },
    {
      title: "Hackathons & Competitions",
      desc: "Flagship events like Skill Climax V1.0 and The Black-Box Protocol: System Escalation allow builders to present ideas, code MVPs, and innovate under mentorship.",
      icon: Trophy,
      color: "#8B5CF6",
    },
    {
      title: "Project Collaborations with Startups",
      desc: "Students work directly with startups, incubators like HiDevs, and tech experts on mini-projects, gaining verified real-world engineering experience.",
      icon: HeartHandshake,
      color: "#10B981",
    },
    {
      title: "Peer-to-Peer Community Support",
      desc: "A collaborative ecosystem with discussion forums, WhatsApp communities, and Discord hubs to network, share code, and solve technical challenges together.",
      icon: Users,
      color: "#F59E0B",
    },
  ];

  const officialSources = [
    { name: "Linktree Central Hub", url: "https://linktr.ee/techhelpu", label: "linktr.ee/techhelpu" },
    { name: "Commudle Community", url: "https://www.commudle.com/communities/techhelp4u", label: "commudle.com/techhelp4u" },
    { name: "Unstop Hackathon Platform", url: "https://unstop.com/hackathons/skill-climax-v10-central-india-largest-hackathon-techhelp4u-1599053", label: "unstop.com/skill-climax-v10" },
    { name: "Luma Community Gateway", url: "https://luma.com/2phtd15g", label: "luma.com/2phtd15g" },
    { name: "GitHub Organization", url: "https://github.com/techhelp4u", label: "github.com/techhelp4u" },
    { name: "Official YouTube Channel", url: "https://www.youtube.com/channel/UCwy0Y4Do0ZNEzBhCvGJfpYw/videos", label: "youtube.com/@techhelp4u" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction orbs */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            WHERE PASSION MEETS POSSIBILITY
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight leading-tight">
            A Student-Driven <span className="text-gradient-cyan">Tech Community</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            TECHhelp4U is designed to bridge the gap between academic learning and real-world application, offering hands-on opportunities, events, and collaborations for tech enthusiasts.
          </p>
        </div>

        {/* Quick Facts Card Strip */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.08] p-6 sm:p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center">
            <Users className="w-5 h-5 text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">10,000+</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Active Learners</span>
          </div>
          <div className="flex flex-col items-center">
            <Building2 className="w-5 h-5 text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">100+</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Partner Communities</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 text-cyan mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-foreground font-display">Bhopal, MP</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Headquarters</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">2025</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Founded In</span>
          </div>
        </div>

        {/* Detailed Overview Story Section */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 mb-20 backdrop-blur-2xl relative overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_50px_-10px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="cyan" size="sm">COMMUNITY ENGAGEMENT & PURPOSE</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground font-display leading-snug">
              &ldquo;TECHhelp4U is more than just an online community — it is a launchpad for student innovators that blends learning, creation, and collaboration.&rdquo;
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Headquartered in Bhopal, India, the platform acts as a central hub for students and young developers to engage in practical tech experiences, collaborate with working engineers, and build portfolio-grade skills.
              </p>
              <p>
                The community emphasizes hands-on learning and active participation through programs like <strong className="text-foreground">The Black-Box Protocol</strong>, which integrates multi-city hackathons, technical workshops, and mentoring opportunities to convert high-potential student ideas into developer-led startups.
              </p>
              <p className="text-cyan font-medium pt-2">
                🔗 We’re open to partnerships, speakers, sponsors, and changemakers. Join us in building a stronger, smarter student tech ecosystem.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/team"
                className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-bold"
              >
                Meet Leadership Team (Vedansh, Monika, Gautam, Khushi) <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Button href="/contact" variant="cyan-glow" size="sm">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <SectionHeading
            badge="KEY ACTIVITIES & OPPORTUNITIES"
            title="How We Empower"
            highlightText="Student Builders"
            description="Providing structured, accessible pathways from beginner curiosity to production software."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-7 backdrop-blur-xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_15px_35px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />
                  
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 backdrop-blur-md transition-transform group-hover:scale-110 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]"
                      style={{
                        backgroundColor: `${p.color}15`,
                        borderColor: `${p.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-display mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Community Initiative</span>
                    <span className="text-cyan font-bold">100% Free</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Platforms & Online Hubs Grid */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

          <Badge variant="cyan" size="sm" className="mb-3">
            VERIFIED DIGITAL PRESENCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-6">
            Official Community Portals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {officialSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan/40 hover:bg-white/[0.06] transition-all flex items-center justify-between group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <div>
                  <span className="text-sm font-bold text-slate-200 block group-hover:text-cyan transition-colors">
                    {source.name}
                  </span>
                  <span className="text-xs font-mono text-slate-400 block mt-0.5">
                    {source.label}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Official Contact & HQ Location Card */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="cyan" size="sm" className="mb-3">
                OFFICIAL COMMUNITY HEADQUARTERS
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                Connect with TECHhelp4U
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Whether you want to organize a campus workshop, invite our team for a speaker session, or explore partnership opportunities, we&apos;d love to hear from you.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-cyan shrink-0" />
                  <span>Bhopal, Madhya Pradesh 462042, India</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <Phone className="w-4 h-4 text-cyan shrink-0" />
                  <span>+91 9238253996 / +91 9301768404</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] text-center">
              <Sparkles className="w-10 h-10 text-cyan mb-3 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
              <h3 className="text-lg font-bold text-foreground font-display">
                Join as a Partner or Sponsor
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-sm">
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
