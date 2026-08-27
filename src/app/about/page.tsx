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
  HelpCircle
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About TECHhelp4U | Student-Driven Tech Community",
  description: "Learn about TECHhelp4U, founded in 2025 in Bhopal, MP. Built by students, for students to bridge the gap between learning and real-world application.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Skill-Building Workshops & Webinars",
      desc: "Accessible, hands-on masterclasses in full-stack development, Python, AI APIs, Git, and modern engineering tools to prepare students for real-world projects.",
      icon: BookOpen,
      color: "#00E5FF",
    },
    {
      title: "Hackathons & Mini Projects",
      desc: "Fostering creativity, problem-solving, and teamwork through 36-hour hackathons, mini builds, and project-based learning with prize rewards.",
      icon: Trophy,
      color: "#8B5CF6",
    },
    {
      title: "Collaborations with Startups & Experts",
      desc: "Connecting students directly with working software engineers, startup founders, and ecosystem platforms for genuine 1-on-1 mentorship.",
      icon: HeartHandshake,
      color: "#10B981",
    },
    {
      title: "Peer-to-Peer Support System",
      desc: "A warm, inclusive community where learners at all levels can ask questions, collaborate on code, find hackathon teammates, and grow together.",
      icon: Users,
      color: "#F59E0B",
    },
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
            ABOUT TECHHELP4U
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight leading-tight">
            Built by Students, <span className="text-gradient-cyan">For Students</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            TECHhelp4U is a student-driven tech community founded in 2025. Our mission is to bridge the gap between learning and real-world application by offering accessible, hands-on opportunities in technology, innovation, and personal development.
          </p>
        </div>

        {/* Quick Facts Card Strip */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.08] p-6 sm:p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">2025</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Founded In</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 text-cyan mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-foreground font-display">Bhopal, MP</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Headquarters</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-5 h-5 text-cyan mb-2" />
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">11–50</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Team & Coordinators</span>
          </div>
          <div className="flex flex-col items-center">
            <Building2 className="w-5 h-5 text-cyan mb-2" />
            <span className="text-lg sm:text-xl font-bold text-foreground font-display">Tech & Internet</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Industry Domain</span>
          </div>
        </div>

        {/* Detailed Overview Story Section */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 mb-20 backdrop-blur-2xl relative overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_50px_-10px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            <Badge variant="cyan" size="sm" className="mb-4">OUR PURPOSE & VISION</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground font-display leading-snug">
              &ldquo;Whether you&apos;re a curious beginner, a skilled coder, or someone passionate about tech education — TECHhelp4U is your platform to learn, share, and grow.&rdquo;
            </h2>
            <div className="mt-6 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We believe that standard college curricula often leave a gap when it comes to hands-on software development, open-source collaboration, and modern industry workflows. Students often struggle to find practical guidance, hackathon teammates, or a safe place to ask technical questions without judgment.
              </p>
              <p>
                TECHhelp4U was built to solve exactly that. We organize hands-on masterclasses, multi-track hackathons, campus ambassador chapters, and direct startup mentorship sessions across universities in India.
              </p>
              <p className="text-cyan font-medium pt-2">
                🔗 We&apos;re open to partnerships, speakers, sponsors, and changemakers. Join us in building a stronger, smarter student tech ecosystem.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link
                  href="/team"
                  className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-bold"
                >
                  Meet Leadership Team (Vedansh, Monika & Core Team) <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <Button href="/contact" variant="cyan-glow" size="sm">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <SectionHeading
            badge="HOW WE EMPOWER LEARNERS"
            title="Our Four Core"
            highlightText="Community Pillars"
            description="Designed to support students at every stage of their developer journey."
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
                    <span>Active Program</span>
                    <span className="text-cyan font-bold">100% Free</span>
                  </div>
                </div>
              );
            })}
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
                  <span>+91 9238253996</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] text-center">
              <Sparkles className="w-10 h-10 text-cyan mb-3 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
              <h3 className="text-lg font-bold text-foreground font-display">
                Join as a Partner or Sponsor
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-sm">
                Collaborate with our student builder ecosystem for hackathon grants, speaker invitations, and campus outreach.
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
