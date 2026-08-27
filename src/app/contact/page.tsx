"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  HeartHandshake,
  Clock
} from "lucide-react";
import { socialLinks } from "@/data/navigation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    purpose: "Partnership & Collaboration",
    message: "",
  });

  const purposes = [
    "Partnership & Collaboration",
    "Sponsor a Hackathon / Event",
    "Invite TECHhelp4U to Your College",
    "Speaker & Workshop Collaboration",
    "Campus Ambassador Program (CAP)",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
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
            LET&apos;S BUILD TOGETHER
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight leading-tight">
            Connect with <span className="text-gradient-cyan">TECHhelp4U</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            We&apos;re open to partnerships, speakers, sponsors, and changemakers. Join us in building a stronger, smarter student tech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
              <h3 className="text-xl font-bold text-foreground font-display mb-6">
                Official Contact Points
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Direct Phone Support
                    </span>
                    <a href="tel:+919238253996" className="text-slate-200 font-medium font-mono hover:text-cyan transition-colors">
                      +91 9238253996
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Official Communications
                    </span>
                    <span className="text-slate-200 font-medium font-mono">
                      contact@techhelp4u.in
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Headquarters
                    </span>
                    <span className="text-slate-200 font-medium">
                      Bhopal, Madhya Pradesh 462042, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Response Cadence
                    </span>
                    <span className="text-cyan font-mono text-xs font-semibold">
                      Under 24–48 Business Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Gateways */}
            <div className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">
                Official Digital Gateways
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.07] hover:border-cyan/40 hover:bg-white/[0.06] hover:text-cyan text-xs font-mono text-slate-300 transition-all flex items-center justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-8 sm:p-12 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan mx-auto backdrop-blur-md shadow-[0_0_25px_rgba(0,229,255,0.3)]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you for contacting TECHhelp4U. The leadership team will review your inquiry regarding &ldquo;{formData.purpose}&rdquo; and get back to you shortly.
                  </p>
                  <Button
                    variant="glass"
                    size="sm"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        purpose: "Partnership & Collaboration",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
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
                        placeholder="rahul@college.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                        College / Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. University / Tech Org"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Primary Purpose of Inquiry *
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3.5 text-foreground focus:outline-none focus:border-cyan focus:bg-navy-900/60 transition-all cursor-pointer"
                    >
                      {purposes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Detailed Message / Collaboration Proposal *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you'd like to collaborate on (e.g. workshop, hackathon sponsorship, speaker session, campus ambassador)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
