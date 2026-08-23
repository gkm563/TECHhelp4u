"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { 
  Send, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Terminal
} from "lucide-react";
import { socialLinks } from "@/data/navigation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    purpose: "Partner With Us",
    message: "",
  });

  const purposes = [
    "Partner With Us",
    "Sponsor an Event / Hackathon",
    "Invite TECHhelp4U to Campus",
    "Join Community & Chapters",
    "Become a Technical Mentor",
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
            GET IN TOUCH
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Connect With <span className="text-gradient-cyan">TECHhelp4U</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Whether you are a university looking to host a hackathon, an AI/Web3 protocol seeking developer reach, or a student wanting to lead a campus chapter — we&apos;re ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
              <h3 className="text-xl font-bold text-foreground font-display mb-6">
                Ecosystem Contact Points
              </h3>

              <div className="space-y-6 text-sm">
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
                      Headquarters & Regional Hub
                    </span>
                    <span className="text-slate-200 font-medium">
                      Gwalior, Madhya Pradesh, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Community Response Time
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
                Official Digital Hubs
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
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you for reaching out to TECHhelp4U. Your inquiry regarding &ldquo;{formData.purpose}&rdquo; has been logged into our operations queue.
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
                        purpose: "Partner With Us",
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
                        placeholder="rahul@domain.com"
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
                      placeholder="Describe your event proposal, sponsorship intent, or questions for the team..."
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
                    Dispatch Inquiry
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
