"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { 
  Users2, 
  Award, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck,
  Send,
  Briefcase
} from "lucide-react";

export default function CommunityPage() {
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    yearOfStudy: "2nd Year",
    techInterests: "",
    linkedinOrGithub: "",
  });

  const tiers = [
    {
      name: "Gold Ambassador",
      badge: "CHAPTER LEAD",
      hours: "6–8 hrs / week",
      color: "#F59E0B",
      desc: "Senior performers with a proven track record. Leads college chapter, organizes campus hackathons, and liaises directly with the Core Team.",
      perks: [
        "Formal Letter of Recommendation (LOR) from Founder",
        "Direct referrals for technical & operations internships",
        "Merit-based performance cash incentives",
        "Priority nomination for Regional Lead & Core Team",
        "Premium TECHhelp4U leadership merch kit"
      ]
    },
    {
      name: "Silver Ambassador",
      badge: "CORE CONTRIBUTOR",
      hours: "4–5 hrs / week",
      color: "#00E5FF",
      desc: "Consistent active performers. Co-hosts campus workshops, drives local registrations, and coordinates technical study groups.",
      perks: [
        "Verified Certificate of Excellence",
        "Fast-track promotion to Gold tier within 2 months",
        "Dedicated 1-on-1 mentorship with industry advisors",
        "Access to private partner workshop recordings",
        "TECHhelp4U contributor swag pack"
      ]
    },
    {
      name: "Volunteer Ambassador",
      badge: "APPRENTICE",
      hours: "2–3 hrs / week",
      color: "#8B5CF6",
      desc: "Early-stage learners looking to build leadership skills and assist in college event promotions and community coordination.",
      perks: [
        "Certificate of Participation upon phase completion",
        "Structured 4-week student leadership training",
        "Peer networking across 50+ college chapters",
        "Free entry to all TECHhelp4U premium events"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.college) return;
    setApplied(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction glows */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            LEADERSHIP & CAMPUS AMBASSADORS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            The Campus Ambassador{" "}
            <span className="text-gradient-cyan">Program 2026</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Building India&apos;s largest student technology leadership ecosystem. A structured 6-month initiative across 50 colleges to turn motivated learners into campus chapter leads and regional coordinators.
          </p>
        </div>

        {/* 6-Month Pilot Target Frosted Glass Strip */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.08] p-6 sm:p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan font-display drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">50</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Partner Colleges</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan font-display drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">100</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Ambassadors Onboarded</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan font-display drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">100+</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Campus Events</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan font-display drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">10,000+</span>
            <span className="text-xs font-mono text-slate-400 block mt-1 uppercase">Students Reached</span>
          </div>
        </div>

        {/* Ambassador Tiers */}
        <div className="mb-20">
          <SectionHeading
            badge="PROGRESSION LADDER"
            title="Three Tiers of"
            highlightText="Leadership & Impact"
            description="Clear expectations, weekly commitments, and verifiable career rewards at every stage of the program."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-8 backdrop-blur-2xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 relative overflow-hidden group"
              >
                {/* Specular top glare line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                      style={{
                        color: tier.color,
                        borderColor: `${tier.color}40`,
                        backgroundColor: `${tier.color}15`,
                      }}
                    >
                      {tier.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {tier.hours}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground font-display mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {tier.desc}
                  </p>

                  <div className="border-t border-white/[0.06] pt-6">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                      Included Career Perks
                    </h5>
                    <ul className="space-y-2.5">
                      {tier.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: tier.color }}
                          />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] relative z-10">
                  <a
                    href="#apply"
                    className="w-full py-3 rounded-2xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform backdrop-blur-md shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)]"
                    style={{
                      borderColor: `${tier.color}50`,
                      color: tier.color,
                      backgroundColor: `${tier.color}15`,
                    }}
                  >
                    Apply For {tier.name} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="apply" className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 relative overflow-hidden backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_25px_60px_-15px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <Badge variant="cyan" dot size="sm" className="mb-2">
                APPLY FOR CAP 2026
              </Badge>
              <h2 className="text-3xl font-bold text-foreground font-display">
                Become a Campus Lead
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Join the leadership pipeline. Our team reviews submissions on a rolling basis.
              </p>
            </div>

            {applied ? (
              <div className="p-8 rounded-3xl bg-cyan/10 border border-cyan/40 text-center backdrop-blur-xl shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <ShieldCheck className="w-12 h-12 text-cyan mx-auto mb-3" />
                <h4 className="text-lg font-bold text-foreground">
                  Application Received Successfully!
                </h4>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you for applying to CAP 2026. The TECHhelp4U Core Team will review your profile and reach out within 48 hours for the technical screening round.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Gupta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aryan@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      College / University Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MITS Gwalior / OIST Bhopal"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Year of Study
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground focus:outline-none focus:border-cyan focus:bg-navy-900/60 transition-all cursor-pointer"
                    >
                      <option value="1st Year">1st Year (B.Tech / BCA)</option>
                      <option value="2nd Year">2nd Year (B.Tech / BCA)</option>
                      <option value="3rd Year">3rd Year (B.Tech / MCA)</option>
                      <option value="4th Year">4th Year (Final Year)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      LinkedIn / GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedinOrGithub}
                      onChange={(e) => setFormData({ ...formData, linkedinOrGithub: e.target.value })}
                      className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Technical Focus & Motivation
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what technologies you are passionate about and why you want to lead a chapter at your campus..."
                    value={formData.techInterests}
                    onChange={(e) => setFormData({ ...formData, techInterests: e.target.value })}
                    className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cyan-glow"
                  size="lg"
                  className="w-full justify-center mt-4"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Submit Ambassador Application
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
