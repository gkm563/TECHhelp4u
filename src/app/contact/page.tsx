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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-foreground font-display mb-6">
                Ecosystem Contact Points
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0">
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
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0">
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
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Community Response Time
                    </span>
                    <span className="text-cyan font-mono text-xs">
                      Under 24–48 Business Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Gateways */}
            <div className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md">
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
                    className="p-3 rounded-xl bg-navy-900 border border-slate-800 hover:border-cyan/40 hover:text-cyan text-xs font-mono text-slate-300 transition-colors flex items-center justify-between"
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
            <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to TECHhelp4U. Your inquiry regarding &ldquo;{formData.purpose}&rdquo; has been logged into our operations queue.
                  </p>
                  <Button
                    variant="outline"
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
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
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
                      className="w-full bg-navy-900 border border-slate-700/80 rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-cyan"
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
                        className="w-full bg-navy-900 border border-slate-700/80 rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-cyan"
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
                        className="w-full bg-navy-900 border border-slate-700/80 rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-cyan"
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
                      className="w-full bg-navy-900 border border-slate-700/80 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan"
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
                      className="w-full bg-navy-900 border border-slate-700/80 rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cyan-glow"
                    size="lg"
                    className="w-full justify-center mt-2"
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
